#! /bin/sh
if [ "$ENV" = "production" ]
then
  # Define some Application Variables
  APP_NAME='Patrick-Portfolio'
  APP_FILE="$APP_NAME-$ENV.zip"
  VERSION_LABEL="$(date +"%s")-$ENV"
  APP_ENVIRONMENT_NAME='Patrick-Portfolio-Prod'

  # Configure Files
  grunt config:$ENV
  grunt build

  # Zip up the application
  echo "Zipping up all files in current directory into application.zip..."
  zip -q -r $APP_FILE .

  # Download and install AWS CLI tools
  echo "Downloading AWS CLI tools..."
  mkdir ~/aws-cli-tools
  cd ~/aws-cli-tools
  wget https://s3.amazonaws.com/aws-cli/awscli-bundle.zip
  unzip -q awscli-bundle.zip
  rm -rf awscli-bundle.zip
  echo "Installing AWS CLI tools..."
  sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
  cd ~

  # Upload application.zip to S3 bucket
  echo "Uploading application.zip to S3 bucket..."
  aws s3 mv "portfolio/$APP_FILE" "s3://$AWS_S3_BUCKET/$APP_FILE"

  # Create a new application version using application.zip file on S3
  echo "Creating a new application version from S3 bucket..."
  aws elasticbeanstalk create-application-version --application-name "$APP_NAME" --version-label "$VERSION_LABEL" --source-bundle S3Bucket="$AWS_S3_BUCKET",S3Key="$APP_FILE"

  # Update application environment to use the new application version
  echo "Updating application environment to use new application version..."
  aws elasticbeanstalk update-environment --environment-name $APP_ENVIRONMENT_NAME --version-label $VERSION_LABEL
else
  echo "ERROR: ENVIRONMENT passed is not acceptable!"
fi
