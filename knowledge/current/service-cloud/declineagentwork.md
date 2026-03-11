---
title: "declineAgentWork"
domain: service-cloud
topic: declineagentwork
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.809Z
keywords: [declineAgentWork, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# declineAgentWork

# declineAgentWork

Declines a work item that’s assigned to an agent. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| workId | String | The ID of the work item that the agent declines. |
| declineReason | String | The provided reason for why the agent declined the work request. |
| callback | function | JavaScript method to call when an agent declines the work item associated with the workId. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if declining the work item was successful; false if declining the work item wasn’t successful. |