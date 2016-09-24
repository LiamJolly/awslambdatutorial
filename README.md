# awslambdatutorial

The following is a series of steps you can perform to create an AWS Lambda which puts information in to a DynamoDB table. The example is just for tutorial purposes.

##Prerequisites:
An AWS account that can deploy AWS Lambdas and DynamoDB tables.

##1. Create the IAM Role for your user.
You will need an IAM Role that can deploy AWS Lambdas as well as put files in to DynamoDB instances. To create such a role;

Go to Services > Security > IAM.
Click on "Roles".
Click on "Create New Role".
Give your role a name.
From "AWS Service Roles" select "AWS Lambda".
Use the filter to find and the policies for DynamoDB and AWS Lambda. AWSLambdaBasicExecution and AmazonDynamoDBFullAccess would suffice but they aren't the most secure options.
Review and create the role.

##2. Creating your DynamoDB table.

Go to Services > Storage & Content Delivery > DynamoDB.
Click "Create Table".
Name your table.
Name the primary key "id".
Make sure "Use default settings" is enabled.

##3. Create your Lambda
Go to Services > Compute > Lambda.
Click "Create a Lambda function".
Click "Configure function".
Name the function.
Add a description for the function.
Select "Node.js 4.3" as the runtime.
Under "Lambda function code" select "Edit code inline" as the "Code entry type" and paste in the example from this repository.
Under "Lambda function handler and role" select the role created previously.
Review and create your function.

##4. Test your Lambda
With your Lambda selected click on "Actions" and select "Configure test event".
For this example the "Hello World" template is used.
Save the changes and test your Lambda! If you go to the DynamoDB table you created you will see the entries should have been added!




