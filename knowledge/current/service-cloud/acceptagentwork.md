---
title: "acceptAgentWork"
domain: service-cloud
topic: acceptagentwork
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.714Z
keywords: [acceptAgentWork, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# acceptAgentWork

# acceptAgentWork

Accepts a work item that’s assigned to an agent. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| workId | String | The ID of the work item the agent accepts. |
| callback | function | JavaScript method to call when an agent accepts the work item associated with the workId. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if accepting the work item was successful; false if accepting the work item wasn’t successful. |