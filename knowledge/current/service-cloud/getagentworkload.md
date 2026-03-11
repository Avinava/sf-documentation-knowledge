---
title: "getAgentWorkload"
domain: service-cloud
topic: getagentworkload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.965Z
keywords: [getAgentWorkload, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getAgentWorkload

# getAgentWorkload

In API version 35.0 and later, we can retrieve an agent’s currently assigned workload. Use this method for rerouting work to available agents.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method to call when the agent’s configured capacity and work is retrieved. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if retrieving the agent’s work items was successful; false if retrieving the agent’s work items wasn’t successful. |
| configuredCapacity | Number | Indicates the agent’s configured primary capacity (work that’s assigned to the current user) through Presence Configuration. |
| currentWorkload | Number | Indicates the agent’s currently assigned primary workload. |
| configuredInterruptibleCapacity | Number | Indicates the agent’s configured interruptible capacity (work that’s assigned to the current user) through Presence Configuration. |
| currentInterruptibleWorkload | Number | Indicates the agent’s currently assigned interruptible workload. |