---
title: "Create a Remote Site Setting"
domain: loyalty
topic: create-a-remote-site-setting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.242Z
estimatedTokens: 267
keywords: [Remote, Site, Setting, any, Apex, callout, call, API, Gateway, endpoint, register, Settings, authorize, org, access]
---

# Create a Remote Site Setting

> Before any Apex callout can call the API Gateway endpoint, register the API Gateway
  endpoint on the Remote Site Settings page. Remote site settings authorize your org to access
  external websites.

# Create a Remote Site Setting

Before any Apex callout can call the API Gateway endpoint, register the API Gateway endpoint on the Remote Site Settings page. Remote site settings authorize your org to access external websites.

| Available in: all editions that have Loyalty Management and Receipt Scanning enabled |
| --- |


| User Permissions Needed |
| --- |
| To configure remote settings: | Customize Application or Modify All Data |

1.  In the Quick Find box, enter Remote, and then select **Remote Site Settings**.
2.  Click **New Remote Site**.
3.  Enter AWS Gateway Remote Site as the remote site name.
4.  Enter the Invoke URL of your Amazon Web Services account.

    For example, a sample Invoke URL looks like this: https://\*\*\*\*\*\*\*\*\*.execute-api.us-east-2.amazonaws.com

5.  Save your changes.

-   [← Previous](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_addapiendpoint.htm "Add API Endpoint Details in Custom Setting")
-   [Next →](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_enablereceiptscanning.htm "Enable Receipt Scanning")

## Related Topics

- ← Previous (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_addapiendpoint.htm)
- Next → (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_enablereceiptscanning.htm)
