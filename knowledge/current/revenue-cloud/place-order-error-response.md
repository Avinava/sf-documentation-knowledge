---
title: "Place Order Error Response"
domain: revenue-cloud
topic: place-order-error-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.541Z
estimatedTokens: 148
keywords: [Place, Order, Error, Output, representation]
---

# Place Order Error Response

> Output representation of the error response for the place order request.

# Place Order Error Response

Output representation of the error response for the place order request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Code representing the type of error encountered during the place order create request. | Small, 60.0 | 60.0 |
| message | String | Message stating the reason for the error, if any. | Small, 60.0 | 60.0 |
| reference​Id | String | Reference ID associated with the specific error instance for tracking and reference purposes. | Small, 60.0 | 60.0 |
