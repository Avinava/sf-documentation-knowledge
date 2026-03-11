---
title: "Start Batch"
domain: field-service
topic: start-batch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.340Z
keywords: [Start, Batch, Add, Remote, Site, Request, Body, Example, Response]
---

# Start Batch

# Start Batch

Creates service appointment bundles automatically. The resource uses appointment bundle policies that are marked for automatic bundling. Service appointments that are already bundled manually stay untouched by this API. The resource returns the success or failure message of starting the batch process of automatic bundling. This API is not supported in Gov Cloud. This endpoint is available in version 54.0 and later of the Salesforce API.

## Add a Remote Site

1\. From Setup, in the Quick Find box, enter Security, and then select **Remote Site Settings**.

2\. Click **New Remote Site**.

3\. Enter a name.

4\. For Remote Site URL, enter https://api.salesforce.com/

5\. Save your changes.

URI

<host>/bundleflow/api/v1.0/startbatch

Format

JSON

HTTP Method

POST

Authentication

Authorization: Bearer <token>

If the authentication token isn’t valid, a 401 HTTP status is returned.

Headers

request.setHeader('x-sfdc-tenant-id', 'core/prod/ORG-ID\_18\_Characters');—Field Service functional domain

sf\_api\_version—Salesforce API version. Minimum version is 53.0.

Authorization—Authorization token.

Content-Type—File format. Valid value is JSON.

Referer—Org domain URL.

## Request Body

**Properties**

| Field | Type | Description |
| --- | --- | --- |
| operation | String | The bundling operation.Valid value: start-batch-processing |

## Example

**JSON Example**

This example shows an automated bundling request of service appointments.

```

```

## Response Body

**Properties**

| Field | Type | Description |
| --- | --- | --- |
| httpStatus | Number | Response HTTP status. |
| statusDescription | String | Response status description. |
| responsePayload | String | Message about the batch status. If it’s successful, the payload is null. If the batch bundling fails, the payload shows an error message, such as, "Wrong API version" or "Failed to start batch agent". |
| messageCode | Number | Message code is always 0. |
| messageAdditionalInfo | String | More information provided by Salesforce. |

## Example

**JSON Example: Successful Response**

This example shows the output of a batch process of automatic bundling that started successfully.

```

```

## Example

**JSON Example: Fail Response**

This example shows the output of a batch process that failed to start because the operation parameter of the request is null or empty.

```

```