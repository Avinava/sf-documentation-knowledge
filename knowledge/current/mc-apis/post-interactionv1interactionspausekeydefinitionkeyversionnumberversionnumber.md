---
title: "POST /interaction/v1/interactions/pause/key:{definitionKey}?versionNumber={versionNumber}"
domain: mc-apis
topic: post-interactionv1interactionspausekeydefinitionkeyversionnumberversionnumber
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:14.980Z
estimatedTokens: 676
keywords: [POST, interaction, interactions, pause, key, definitionKey, versionNumber=, versionNumber, Pauses, running, journey, matches, **Overview**, Errors]
---

> Pauses the running journey that matches the specified definitionKey.

# POST /interaction/v1/interactions/pause/key:{definitionKey}?versionNumber={versionNumber}

## **Overview**

Pauses the running journey that matches the specified definitionKey.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionKey | string | Required | The definition key of the journey to be paused. Also known as the customer key of the journey. |
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
POST  /interaction/v1/interactions/pause/key:exampleDefinitionKey?versionNumber=1&allVersions=false
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ExtendWaitEndDates":false,
    "PausedDays":14,
    "ProcessWaitUntilEvents":true,
    "GuardrailAction":"Resume",
    "RetainContactInjectionWhileJourneyPaused":true,
    "version":1
}
```

### Example Response without Errors

```js
HTTP/1.1 202 Accepted
{
    "status": "Accepted"
}
```

### Example Response with Errors

```js
HTTP/1.1 202 Accepted
{
    "message": "AllVersions=true or VersionNumber required.",
    "errorcode": 10005,
    "documentation": ""
}
```

Last Updated: Jun 8, 2021
