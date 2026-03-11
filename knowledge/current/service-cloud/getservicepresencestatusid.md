---
title: "getServicePresenceStatusId"
domain: service-cloud
topic: getservicepresencestatusid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.054Z
keywords: [getServicePresenceStatusId, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getServicePresenceStatusId

# getServicePresenceStatusId

Retrieves an agent’s current presence status. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method to call when the agent’s presence status is retrieved. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if retrieving the presence status ID was successful; false if the retrieving the presence status ID wasn’t successful. |
| statusName | String | The name of the agent’s current presence status. |
| statusApiName | String | The API name of the agent’s current presence status. |
| statusId | String | The ID of the agent’s current presence status. |