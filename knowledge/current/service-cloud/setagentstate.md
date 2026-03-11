---
title: "setAgentState()"
domain: service-cloud
topic: setagentstate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.671Z
keywords: [setAgentState, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setAgentState()

# setAgentState()

Sets an agent's Chat status, such as Online, Away, or Offline. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| state | String | Chat status you want to set the agent to—for example, Online, Away, or Offline. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if setting the agent’s Chat status was successful; false if setting the agent’s Chat status wasn’t successful. |