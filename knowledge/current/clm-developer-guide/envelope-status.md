---
title: "Envelope Status"
domain: clm-developer-guide
topic: envelope-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.486Z
estimatedTokens: 170
keywords: [Envelope, Status, Output, representation, record]
---

# Envelope Status

> Output representation of the envelope status record.

# Envelope Status

Output representation of the envelope status record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| envelopeId | String | The ID of the envelope for which the e-signature status is updated. | Small, 56.0 | 56.0 |
| error | String | Error code corresponding to the envelope ID. | Small, 56.0 | 56.0 |
| errorMessage | String | Error message corresponding to the envelope ID. | Small, 56.0 | 56.0 |
| status | String | Updated envelope status. | Small, 56.0 | 56.0 |
| success | Boolean | Indicates whether the envelope is successfully updated (true) or not (false). | Small, 56.0 | 56.0 |
