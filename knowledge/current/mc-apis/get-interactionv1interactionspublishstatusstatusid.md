---
title: "GET /interaction/v1/interactions/publishStatus/{statusId}"
domain: mc-apis
topic: get-interactionv1interactionspublishstatusstatusid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.303Z
estimatedTokens: 271
keywords: [interaction, interactions, publishStatus, statusId, Checks, status, publication, **Overview**, Possible, Statuses, Journey, Builder]
---

> Checks the status of a publication.

# GET /interaction/v1/interactions/publishStatus/{statusId}

## **Overview**

Checks the status of a publication.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| statusId | string | Required | The statusId provided by a successful POST request to schedule for a specific version of a journey. |

### Usage

**Example Request**

This request retrieves the publishing status for the specified statusId provided while making a publishAsync request.

#### Possible Statuses returned by Journey Builder

-   PublishInProcess
-   PublishCompleted
-   Error

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /interaction/v1/interactions/publishStatus/{statusId}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

If any errors are encountered during the publishing process, they will be listed as elements within the errors property of the response.

```js
HTTP/1.1 200
{
    "statusId": "bd93502a-773c-4588-81d9-d3c7ca0cc10a",
    "status": "PublishInProcess",
    "errors": []
}
```

Last Updated: Jun 8, 2021

## Related Topics

- schedule (atlas.en-us.noversion.mc-apis.meta/mc-apis/postPublishInteractionById.htm)
