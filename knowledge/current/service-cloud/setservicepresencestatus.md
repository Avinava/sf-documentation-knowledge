---
title: "setServicePresenceStatus"
domain: service-cloud
topic: setservicepresencestatus
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.706Z
keywords: [setServicePresenceStatus, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setServicePresenceStatus

# setServicePresenceStatus

Sets an agent's presence status to a status with a particular ID. In API version 35.0 and later, we log the user into presence if that user is not already logged in, so you don’t have to make additional calls. You also can use this method to reconnect to Omni-Channel after a connection error.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| statusId | String | The ID of the presence status you want to set the agent to. Agents must be given access to this presence status through their associated profile or permission set. |
| callback | function | JavaScript method to call when the agent’s status is changed to the presence status associated with statusId. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if setting the agent’s status was successful; false if setting the agent’s status wasn’t successful. |
| statusName | String | The name of the agent’s current presence status. |
| statusApiName | String | The API name of the agent’s current presence status. |
| statusId | String | The ID of the agent’s current presence status. |
| channels | JSON string of channel objects | Returns the IDs and API names of the channels associated with the presence status. |