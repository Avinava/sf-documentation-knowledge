---
title: "Rate Limiting Errors"
domain: mc-apis
topic: rate-limiting-errors
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.238Z
estimatedTokens: 298
keywords: [Rate, Limiting, Errors, Marketing, Cloud, reserves, right, throttle, REST, API, requests, specific, customer, cause, slowed]
---

# Rate Limiting Errors

> Marketing Cloud reserves the right to throttle REST API requests from a specific customer when those API requests cause slowed system performance. The throttling rate depends on the rate necessary to stabilize operations. If this throttling occurs, the business unit or user causing this issue receiv

# Rate Limiting Errors

Marketing Cloud reserves the right to throttle REST API requests from a specific customer when those API requests cause slowed system performance. The throttling rate depends on the rate necessary to stabilize operations. If this throttling occurs, the business unit or user causing this issue receives HTTP 429 error messages communicating the limited rate until the requests causing the issue cease. Your Marketing Cloud account representative can help resolve the situation as necessary.

## Error Code: 50100

### Header

```
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
Retry-After: 5
```

### Body

```
{
  "message": "Rate limit exceeded",
  "errorcode": 50100,
  "retryAfter": 5,
  "documentation": "https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/error-handling.htm"
}
```

## Error Code: 50200

### Header

```
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
```

### Body

```
{
  "message": "Your requests are temporarily blocked.",
  "errorcode": 50200,
  "documentation": "https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/error-handling.htm"
}
```
