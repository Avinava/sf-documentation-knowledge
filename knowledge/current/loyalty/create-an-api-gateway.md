---
title: "Create an API Gateway"
domain: loyalty
topic: create-an-api-gateway
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.211Z
estimatedTokens: 594
keywords: [API, Gateway, serves, entry, point, incoming, requests]
---

# Create an API Gateway

> Create an API Gateway that serves as an entry point for all incoming API requests.

# Create an API Gateway

Create an API Gateway that serves as an entry point for all incoming API requests.

| Available in: all editions that have Loyalty Management enabled |
| --- |


1.  Log in to your AWS Management Console.
2.  From the Services menu, find and select **API Gateway**.
3.  Click **Create API**.
4.  Under REST API, click **Build**.
5.  Enter a name and description for the new API, and then click **Create API**.
6.  Click **Create resource**.
7.  Enter {bucket} as the resource name.
8.  Select **CORS (Cross Origin Resource Sharing)**, and then click **Create resource**.
9.  To create another resource for bucket, select **bucket**, and then click **Create resource**.
10.  Enter {filename} as the resource name.
11.  Select **CORS (Cross Origin Resource Sharing)**, and then click **Create resource**.
12.  To create a method under filename, select **filename**, and then click **Create method**.
13.  For the Method type, select **PUT**.
14.  Select **AWS service** as the integration type.
15.  From AWS Region, select the region of your S3 bucket.
16.  From AWS service, select **Simple Storage Service (S3)**.
17.  Select **PUT** as the HTTP method.
18.  Select **Use path override** as the action type.
19.  In Execution role, paste the ARN for the IAM role that you created earlier.
20.  Click **Create method**.
21.  On the PUT-Method Execution page, click **Integration request.**
22.  Click **Edit**.
23.  Expand URL path parameters, and click **Add path**, and enter these details:

     -   Name: bucket
     -   Mapped from: method.request.path.bucket

24.  Save your changes.
25.  Under Integration request, click **Edit**, and then expand URL path parameters.
26.  Click **Add path** again, and enter these details:

     -   Name: filename
     -   Mapped from: method.request.path.filename

27.  Save your changes.
28.  From the navigation menu, click **API settings**.
29.  To allow all the media types, under Binary media types, click **Manage media types**.
30.  Click **Add binary media type**, and enter \*/\*.
31.  Save your changes.
32.  Similarly, create the Get and Delete methods under /{bucket}/{filename}.

-   [← Previous](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_accesscred.htm "Create Access Key and Secret")
-   [Next →](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_deploychanges.htm "Get the Invoke URL")

## Related Topics

- ← Previous (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_accesscred.htm)
- Next → (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_deploychanges.htm)
