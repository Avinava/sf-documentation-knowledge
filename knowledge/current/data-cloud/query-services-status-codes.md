---
title: "Query Services Status Codes"
domain: data-cloud
topic: query-services-status-codes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.486Z
estimatedTokens: 155
keywords: [Query, Services, Status, Codes, codes, API, V2., HTTP, Responses]
---

# Query Services Status Codes

> Status codes for Query API V1 and Query API V2.

# Query Services Status Codes

Status codes for Query API V1 and Query API V2.

## HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Callback successfully verified |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Incorrect callback ID, verification key, or both. |
| 422 Unprocessable Entity | Attribute name used in fields/filter parameter doesn’t exist. |
| 429 Too Many Requests | Indicates too many requests in a given amount of time. Query API V1 and Query API V2 support up to 15 concurrent requests. |
| 500 Server Error | Internal error |
