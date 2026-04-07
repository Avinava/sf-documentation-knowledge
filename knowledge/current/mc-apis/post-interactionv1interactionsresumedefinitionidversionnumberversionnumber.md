---
title: "POST /interaction/v1/interactions/resume/{definitionID}?versionNumber={versionNumber}"
domain: mc-apis
topic: post-interactionv1interactionsresumedefinitionidversionnumberversionnumber
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:14.986Z
estimatedTokens: 321
keywords: [POST, interaction, interactions, resume, definitionID, versionNumber=, versionNumber, Resumes, paused, journey, matches, **Overview**, Errors]
---

> Resumes the paused journey that matches the specified definitionID.

# POST /interaction/v1/interactions/resume/{definitionID}?versionNumber={versionNumber}

## **Overview**

Resumes the paused journey that matches the specified definitionID.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionID | string | Required | The ID of the journey to be resumed, expressed in the form of a GUID (UUID). |
| versionNumber | integer | Required | The version number of the journey to be resumed. This parameter is optional only when the allVersions parameter is true. |
| allVersions | integer |  | Indicates whether to resume all versions of the journey. This parameter is required only when you don't provide a versionNumber in the request URL. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST  /interaction/v1/interactions/resume/unique-UUID-provided-by-SFMC?versionNumber=1&allVersions=false
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response Without Errors

```js
HTTP/1.1 202 Accepted
{
    "status": "Accepted"
}
```

### Example Response With Errors

```js
HTTP/1.1 202 Accepted
{
    "message": "An interaction must be in paused status to be resumed.",
    "errorcode": 10000,
    "documentation": ""
}
```

Last Updated: Jun 8, 2021
