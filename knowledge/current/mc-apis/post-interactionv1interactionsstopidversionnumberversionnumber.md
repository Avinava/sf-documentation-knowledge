---
title: "POST /interaction/v1/interactions/stop/{id}?versionNumber={versionNumber}"
domain: mc-apis
topic: post-interactionv1interactionsstopidversionnumberversionnumber
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.302Z
estimatedTokens: 279
keywords: [POST, interaction, interactions, stop, versionNumber=, versionNumber, Stops, running, journey, call, resource, assign, API, Integration, Automation, scope, **Overview**]
---

> Stops a running journey. To call this resource, assign your API Integration the Automation | Interactions | Read scope.

# POST /interaction/v1/interactions/stop/{id}?versionNumber={versionNumber}

## **Overview**

Stops a running journey. To call this resource, assign your API Integration the Automation | Interactions | Read scope.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | string | Required | The ID of the journey to stop, expressed in the form of a GUID (UUID). |
| versionNumber | integer | Required | The version number of the journey to stop |

### Usage

**Example Request**

This request stops the journey specified by the ID request parameter. Only the versionNumber specified in the versionNumber QUERY Parameter will be stopped. You must provide a valid versionNumber.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/interactions/stop/{id}?versionNumber={versionNumber}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200
```

**Example Error Response**

```js
HTTP/1.1 500
{
    "documentation": "",
    "errorcode": 500,
    "message": "Internal Server Error"
}
```

Last Updated: Jun 8, 2021
