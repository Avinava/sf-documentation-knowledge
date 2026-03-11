---
title: "closeAgentWork"
domain: service-cloud
topic: closeagentwork
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.787Z
keywords: [closeAgentWork, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# closeAgentWork

# closeAgentWork

Changes the status of a work item to “Closed” and removes it from the list of work items in the Omni-Channel widget. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| workId | String | The ID of the work item that’s closed. |
| callback | function | JavaScript method to call when the work item associated with the workId is closed. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if closing the work item was successful; false if closing the work item wasn’t successful. |