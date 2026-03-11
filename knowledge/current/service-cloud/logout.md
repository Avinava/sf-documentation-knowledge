---
title: "logout"
domain: service-cloud
topic: logout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.425Z
keywords: [logout, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# logout

# logout

Logs an agent out of Omni-Channel. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method to call when the agent is logged out of Omni-Channel. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if the logout was successful; false if the logout wasn’t successful. |