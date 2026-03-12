---
title: "Bulk Group Census Management"
domain: insurance-developer-guide
topic: bulk-group-census-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.528Z
estimatedTokens: 140
keywords: [Bulk, Group, Census, Management, Output, representation, processing, employee, data]
---

# Bulk Group Census Management

> Output representation for the bulk processing of employee census data.

# Bulk Group Census Management

Output representation for the bulk processing of employee census data.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | ConnectApi.ErrorResponse | List of errors that contains a message and an error code. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the request is successful (true) or not (false). | Small, 65.0 | 65.0 |
| requestId | String | ID of the asynchronous job request. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": [],
  "isSuccess": true,
  "requestId": "a1Bxx000000001aEAA"
}
```
