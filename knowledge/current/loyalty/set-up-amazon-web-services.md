---
title: "Set Up Amazon Web Services"
domain: loyalty
topic: set-up-amazon-web-services
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.326Z
estimatedTokens: 650
keywords: [Amazon, Web, Services, integrate, Loyalty, Management, Receipt, Scanning, Kit, unlocked, package, AWS, bucket, stores, images]
---

# Set Up Amazon Web Services

> To integrate the Loyalty Management Receipt Scanning Kit unlocked package with Amazon Web
        Services (AWS), create an S3 bucket that stores the receipt images, and create roles,
        policies, and users. Then, get the access key and secret ID to authenticate the access to
        AWS resources.

# Set Up Amazon Web Services

To integrate the Loyalty Management Receipt Scanning Kit unlocked package with Amazon Web Services (AWS), create an S3 bucket that stores the receipt images, and create roles, policies, and users. Then, get the access key and secret ID to authenticate the access to AWS resources.

1.  [Create Your Amazon S3 Bucket](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_s3bucket.htm)
    Create a bucket to store your receipt images and any other data in AWS.
2.  [Create an IAM Role](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_iamrole.htm)
    Create your Identity and Access Management (IAM) role to control the access to your Amazon S3 bucket. The IAM role ensures the security and functioning of AWS resources.
3.  [Attach a Policy to the IAM Role](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_iampolicy.htm)
    After you create an Identity and Access Management (IAM) role for your S3 bucket, create a policy and attach the policy to the IAM role. Policies define the actions for IAM roles and users.
4.  [Get Your AWS ARN](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_awsarn.htm)
    After the Identity and Access Management (IAM) role is created, and a policy is attached to the role, you can copy the unique identifiers of AWS resources, Amazon Resource Names (ARN). Use the ARN when you create the API gateway.
5.  [Create an IAM User](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_iamuser.htm)
    An Identity and Access Management (IAM) user manages the access and permissions for the users and applications within your AWS account. Create an IAM user and assign permissions to the IAM user to independently maintain security and access control in your AWS Management Console.
6.  [Create Access Key and Secret](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_accesscred.htm)
    After you create an IAM user, create an access key for the user and download the access key and secret. Use the access keys and secrets to authenticate and authorize programmatic access to AWS resources.
7.  [Create an API Gateway](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_apigateway.htm)
    Create an API Gateway that serves as an entry point for all incoming API requests.
8.  [Get the Invoke URL](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_deploychanges.htm)
    After you create the API and select a deployment stage, deploy the API so that members can upload their receipts and get loyalty points. This invoke URL is used to create the API Endpoint Details custom setting and represents the Remote Site URL for your AWS API Gateway endpoint.

## Related Topics

- Create Your Amazon S3 Bucket (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_s3bucket.htm)
- Create an IAM Role (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_iamrole.htm)
- Attach a Policy to the IAM Role (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_iampolicy.htm)
- Get Your AWS ARN (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_awsarn.htm)
- Create an IAM User (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_iamuser.htm)
- Create Access Key and Secret (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_accesscred.htm)
- Create an API Gateway (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_apigateway.htm)
- Get the Invoke URL (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_deploychanges.htm)
