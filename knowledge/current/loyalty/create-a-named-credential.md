---
title: "Create a Named Credential"
domain: loyalty
topic: create-a-named-credential
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:52.237Z
estimatedTokens: 486
keywords: [Named, Credential, Connect, Amazon, Web, Services, AWS, Loyalty, Management, Receipt, Scanner, Kit, unlocked, package, callout]
---

# Create a Named Credential

> Connect Amazon Web Services (AWS) with the Loyalty Management Receipt Scanner Kit
  unlocked package. Make callout requests to AWS from Salesforce after a receipt is uploaded. The
  AnalyzeExpense API then scans the receipts to analyze and interpret the information from the
  receipt.

# Create a Named Credential

Connect Amazon Web Services (AWS) with the Loyalty Management Receipt Scanner Kit unlocked package. Make callout requests to AWS from Salesforce after a receipt is uploaded. The AnalyzeExpense API then scans the receipts to analyze and interpret the information from the receipt.

| Available in: all editions that have Loyalty Management and Receipt Scanning enabled |
| --- |


| User Permissions Needed |
| --- |
| To view named credentials: | View Setup and Configuration |
| To create, edit, or delete named credentials: | Manage Named Credentials OR Customize Applications |

1.  From Setup, in the Quick Find box, enter Named, and then select **Named Credentials**.
2.  From the dropdown, select **New Legacy**.
3.  Enter these details:

    -   Label: Enter a name for the legacy named credential that’s shown in your org.
    -   Name: Enter a unique identifier that’s used to refer to this legacy-named credential from callout definitions and through the API.
    -   URL: Enter https://textract.\[REGION\].amazonaws.com. For example, https://textract.ap-south-1.amazonaws.com/.

4.  Select **Named Principal** as the identity type.
5.  Select **AWS Signature Version 4** as the authentication protocol, and enter these details from the CSV file that’s downloaded from AWS:

    -   AWS Access Key ID: Enter the access key ID. For example, AKIAQO45CVNMD4NEU3VB.
    -   Access Secret: Enter the secret access key. For example, 51rC7gCfPF+Rff8GWxZnjBw++ACT3ESm5BYwH+jS
    -   AWS Region: Enter the region that you selected in AWS. For example, ap-south-1.
    -   AWS Service: Enter textract as the AWS service.

6.  Save your changes.

-   [← Previous](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_assign_permsets.htm "Assign Permission Set for Members to Access Receipt Scanner")
-   [Next →](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_create_connectedapp.htm "Create an External Client App")

## Related Topics

- ← Previous (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_assign_permsets.htm)
- Next → (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_create_connectedapp.htm)
