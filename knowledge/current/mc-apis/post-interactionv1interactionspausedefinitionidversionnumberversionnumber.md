---
title: "POST /interaction/v1/interactions/pause/{definitionID}?versionNumber={versionNumber}"
domain: mc-apis
topic: post-interactionv1interactionspausedefinitionidversionnumberversionnumber
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:19.951Z
estimatedTokens: 681
keywords: [POST, interaction, interactions, pause, definitionID, versionNumber=, versionNumber, Pauses, running, journey, matches, **Overview**, Usage, Errors]
---

# POST /interaction/v1/interactions/pause/{definitionID}?versionNumber={versionNumber}

> Pauses the running journey that matches the specified definitionID.

# POST /interaction/v1/interactions/pause/{definitionID}?versionNumber={versionNumber}

## **Overview**

Pauses the running journey that matches the specified definitionID.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionID | string | Required | The ID of the journey to be paused, expressed in the form of a GUID (UUID). |
| versionNumber | integer | Required | The version number of the journey to be paused. This parameter is optional only when the allVersions parameter is true. |
| allVersions | integer |  | Indicates whether to pause all versions of the journey. This parameter is required only when you don't provide a versionNumber in the request URL. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| ExtendWaitEndDates | boolean |  | Indicates whether to extend waits for all Wait by Duration activities while the journey is paused. This parameter applies only to Wait By Duration wait types. If the value is true, the wait end date is extended by the pause period. If the value is false, the wait end date isn't extended. If you don't use this parameter, the default value is false. |
| PausedDays | integer |  | Number of days to pause the journey. Default is 14 days. |
| GuardrailAction | string |  | Indicates whether to resume or stop the journey after the pause duration (PausedDays). Allowed values are Stop and Resume. If you don't use this parameter, the default value is false. |
| RetainContactInjectionWhileJourneyPaused | boolean |  | Indicates how new contact injections are treated (for entry sources that support this option) while the journey is paused. Choose whether to ignore new contacts (false) or to queue and process them when the journey resumes (true). If you don't use this parameter, the default value is false. |
| id | string |  | ID of the journey to be paused. |
| Version | string |  | Version of the journey to be paused. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST  /interaction/v1/interactions/pause/unique-UUID-provided-by-SFMC?versionNumber=4&allVersions=false
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ExtendWaitEndDates":false,
    "PausedDays":14,
    "ProcessWaitUntilEvents":true,
    "GuardrailAction":"Resume",
    "RetainContactInjectionWhileJourneyPaused":true,
    "id":"unique-UUID-provided-by-SFMC",
    "version":4
}
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
    "message": "AllVersions=true or VersionNumber required.",
    "errorcode": 10005,
    "documentation": ""
}
```

Last Updated: Jun 8, 2021
