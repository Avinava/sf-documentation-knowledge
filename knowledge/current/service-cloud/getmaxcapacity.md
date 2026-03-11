---
title: "getMaxCapacity()"
domain: service-cloud
topic: getmaxcapacity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.999Z
keywords: [getMaxCapacity, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getMaxCapacity()

# getMaxCapacity()

Returns the maximum chat capacity for the current agent, as specified in the agent's assigned agent configuration. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| count | integer | Agent's current, maximum chat capacity. |
| success | boolean | true if getting the agent’s capacity was successful; false if getting the agent’s capacity wasn’t successful. |