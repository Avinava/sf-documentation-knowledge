---
title: "Supplemental Transaction Error Response"
domain: revenue-cloud
topic: supplemental-transaction-error-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.565Z
estimatedTokens: 141
keywords: [Supplemental, Transaction, Error, Output, representation, associated, Place, API]
---

# Supplemental Transaction Error Response

> Output representation of the error details associated with the Place Supplemental
    Transaction API.

# Supplemental Transaction Error Response

Output representation of the error details associated with the Place Supplemental Transaction API.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Code for the resultant error. | Small, 64.0 | 64.0 |
| message | String | Message stating the reason for error, if any. | Small, 64.0 | 64.0 |
| referenceId | String | Unique ID that’s associated with the specific error for tracking and reference purposes. | Small, 64.0 | 64.0 |
