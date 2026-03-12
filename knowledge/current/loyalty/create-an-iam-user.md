---
title: "Create an IAM User"
domain: loyalty
topic: create-an-iam-user
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.267Z
estimatedTokens: 264
keywords: [IAM, User, Identity, Access, Management, manages, permissions, users, applications, AWS, account, assign, independently, maintain, security]
---

# Create an IAM User

> An Identity and Access Management (IAM) user manages the access and permissions for the
  users and applications within your AWS account. Create an IAM user and assign permissions to the
  IAM user to independently maintain security and access control in your AWS Management
  Console.

# Create an IAM User

An Identity and Access Management (IAM) user manages the access and permissions for the users and applications within your AWS account. Create an IAM user and assign permissions to the IAM user to independently maintain security and access control in your AWS Management Console.

| Available in: all editions that have Loyalty Management enabled |
| --- |


1.  Log in to your AWS Management Console.
2.  From the Services menu, find and select **IAM**.
3.  From the navigation menu, click **Users**.
4.  Click **Create user**.
5.  Enter a username, and then click **Next**.
6.  Under Permissions options, click **Attach policies directly**.
7.  Under Permissions policies, enter textract.
8.  Select **AmazonTextractFullAccess**, and find and select **AmazonS3ReadOnlyAccess**.
9.  Click **Next**.
10.  Click **Create user**.

-   [← Previous](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_awsarn.htm "Get Your AWS ARN")
-   [Next →](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_accesscred.htm "Create Access Key and Secret")

## Related Topics

- ← Previous (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_awsarn.htm)
- Next → (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_accesscred.htm)
