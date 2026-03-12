---
title: "Invoice Ingestion Output Error"
domain: revenue-cloud
topic: invoice-ingestion-output-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.479Z
estimatedTokens: 142
keywords: [Invoice, Ingestion, Output, Error, representation, generation]
---

# Invoice Ingestion Output Error

> Output representation of the details of an invoice generation error.

# Invoice Ingestion Output Error

Output representation of the details of an invoice generation error.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Code that indicates the type of error. | Small, 63.0 | 63.0 |
| message | String | Message that states the reason for error, if any. | Small, 63.0 | 63.0 |
| reference​Id | String | Reference ID that maps to the subrequest’s response and can be used to reference the response in later subrequests. | Small, 63.0 | 63.0 |
