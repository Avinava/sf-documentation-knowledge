---
title: "POST /interaction/v1/interactions/publishAsync/{id}?versionNumber={versionNumber}"
domain: mc-apis
topic: post-interactionv1interactionspublishasyncidversionnumberversionnumber
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.086Z
estimatedTokens: 309
keywords: [POST, interaction, interactions, publishAsync, versionNumber=, versionNumber, Publishes, journey, version, asynchronously, call, resource, assign, API, Integration]
---

# POST /interaction/v1/interactions/publishAsync/{id}?versionNumber={versionNumber}

> Publishes a journey version asynchronously. To call this resource, assign your API Integration the Automation | Interactions | Read scope.

# POST /interaction/v1/interactions/publishAsync/{id}?versionNumber={versionNumber}

## **Overview**

Publishes a journey version asynchronously. To call this resource, assign your API Integration the Automation | Interactions | Read scope.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | string | Required | The ID of the journey to publish expressed in the form of a GUID (UUID). |
| versionNumber | integer | Required | Version number of the journey to publish |

### Usage

**Example Request**

This request **asynchronously** publishes the journey specified by the ID request parameter. Only the versionNumber specified in the versionNumber QUERY Parameter will be published. You must provide a valid versionNumber.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/interactions/publishAsync/{id}?versionNumber={versionNumber}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200
{
    "statusId": "bd93502a-773c-4588-81d9-d3c7ca0cc10a"
}
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
