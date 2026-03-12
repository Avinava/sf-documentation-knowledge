---
title: "Attach a Policy to the IAM Role"
domain: loyalty
topic: attach-a-policy-to-the-iam-role
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.260Z
estimatedTokens: 509
keywords: [Attach, Policy, IAM, Role, Identity, Access, Management, bucket, Policies, define, actions, roles, users]
---

# Attach a Policy to the IAM Role

> After you create an Identity and Access Management (IAM) role for your S3 bucket, create
  a policy and attach the policy to the IAM role. Policies define the actions for IAM roles and
  users.

# Attach a Policy to the IAM Role

After you create an Identity and Access Management (IAM) role for your S3 bucket, create a policy and attach the policy to the IAM role. Policies define the actions for IAM roles and users.

| Available in: all editions that have Loyalty Management enabled |
| --- |


1.  Log in to your AWS Management Console.
2.  From the Services menu, find and select **IAM**.
3.  From the navigation menu, click **Roles**.
4.  Click the IAM role that you created.
5.  Under Permissions, from Add permissions, select **Attach policies**.

    If you see the Create policy button instead of the Attach policies button, click Create policy and follow the subsequent steps.

6.  From the navigation menu, under Access management, click **Policies**, and then click **Create policy**.
7.  From Service, select **S3**.
8.  In the Actions allowed list, find and select the PutObject write action.
9.  Under Resources, click **Add ARNs**.
10.  Specify the ARNs.
     1.  Enter your S3 bucket name as the resource bucket name.
     2.  In Resource object name, select **Any object name**.
     3.  Click **Add ARNs**.
11.  Click **Next**.
12.  On the Review and create page, enter your policy name and description, and then click **Create policy**.

     The policy is created, you can now attach this policy to the IAM role.

13.  On the Policies page, find and select your policy.
14.  Click **Entities Attached**.
15.  Under Attached as a permissions policy, click **Attach**, and select the IAM role that you created.
16.  Click **Attach policy**.
17.  From the navigation menu, under Access management, click **Roles**, and then select the role that you created.
18.  Under Permissions, from Add permissions, select **Attach Policies**.
19.  Select the **AdministratorAccess** option, and then click **Add permissions**.

-   [← Previous](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_iamrole.htm "Create an IAM Role")
-   [Next →](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_awsarn.htm "Get Your AWS ARN")

## Related Topics

- ← Previous (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_iamrole.htm)
- Next → (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_awsarn.htm)
