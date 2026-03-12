---
title: "Get the Invoke URL"
domain: loyalty
topic: get-the-invoke-url
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.247Z
estimatedTokens: 274
keywords: [Invoke, URL, API, select, deployment, stage, deploy, members, upload, their, receipts, loyalty, points, Endpoint, custom]
---

# Get the Invoke URL

> After you create the API and select a deployment stage, deploy the API so that members
  can upload their receipts and get loyalty points. This invoke URL is used to create the API
  Endpoint Details custom setting and represents the Remote Site URL for your AWS API Gateway
  endpoint.

# Get the Invoke URL

After you create the API and select a deployment stage, deploy the API so that members can upload their receipts and get loyalty points. This invoke URL is used to create the API Endpoint Details custom setting and represents the Remote Site URL for your AWS API Gateway endpoint.

| Available in: all editions that have Loyalty Management enabled |
| --- |


1.  Log in to your AWS Management Console.
2.  From the Services menu, find and select **API Gateway**.
3.  Click the name of the API that you created.
4.  Click **Deploy API**.
5.  Select the deployment stage.

    If you don’t have a stage, select **\[New Stage\]** and enter the stage name and the deployment description.

6.  Click **Deploy**.

    The deployment takes a couple of minutes to be completed.

7.  Under Stage details, click ![Copy icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Floyalty%2Fmobile_sdk%2Fimages%2Floyalty_aws_copyicon.png&folder=loyalty), and copy the Invoke URL.

-   [← Previous](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_apigateway.htm "Create an API Gateway")

## Related Topics

- ← Previous (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_apigateway.htm)
