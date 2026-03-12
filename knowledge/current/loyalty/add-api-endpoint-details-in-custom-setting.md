---
title: "Add API Endpoint Details in Custom Setting"
domain: loyalty
topic: add-api-endpoint-details-in-custom-setting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.196Z
estimatedTokens: 358
keywords: [Add, API, Endpoint, Custom, Setting, Loyalty, Management, Receipt, Scanner, Kit, unlocked, package, store, Gateway, URL]
---

# Add API Endpoint Details in Custom Setting

> The Loyalty Management Receipt Scanner Kit unlocked package has a custom setting to
  store the API Gateway endpoint URL and bucket details from your Amazon Web Services (AWS)
  account.

# Add API Endpoint Details in Custom Setting

The Loyalty Management Receipt Scanner Kit unlocked package has a custom setting to store the API Gateway endpoint URL and bucket details from your Amazon Web Services (AWS) account.

| Available in: all editions that have Loyalty Management and Receipt Scanning enabled |
| --- |


| User Permissions Needed |
| --- |
| To manage, create, edit, and delete custom settings: | Customize Application |

1.  In the Quick Find box, enter custom settings, and then select **Custom Settings**.
2.  Next to API Endpoint Details, click **Manage**.
3.  Click **New**.
4.  Enter these values.

    -   API Gateway Endpoint: From your AWS Account, enter the Invoke URL until the stage name.

        For example, if the Invoke URL is https://baznrtuyv3.execute-api.us-east-2.amazonaws.com/abc, where abc is the stage name, enter the endpoint URL as https://baznrtuyv3.execute-api.us-east-2.amazonaws.com.

    -   Bucket Name: From your AWS account, enter the S3 bucket name.
    -   Select Disable Duplicate Check if you want members to submit the same receipt multiple times.

5.  Save your changes.

    The location of the endpoint is automatically selected.


-   [← Previous](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_addprogramname.htm "Add a Loyalty Program Name")
-   [Next →](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_createremotesite.htm "Create a Remote Site Setting")

## Related Topics

- ← Previous (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_addprogramname.htm)
- Next → (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_createremotesite.htm)
