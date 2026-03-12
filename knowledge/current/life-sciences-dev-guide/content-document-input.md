---
title: "Content Document Input"
domain: life-sciences-dev-guide
topic: content-document-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.234Z
estimatedTokens: 197
keywords: [Content, Document, Input, representation, documents, linked, care, record]
---

# Content Document Input

> Input representation for documents linked to the care request
      record.

# Content Document Input

Input representation for documents linked to the care request record.

Root XML tag

<documents>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| category | String | The category that the supporting content belongs to. This is unavailable for PATCH requests. | Required | 63.0 |
| id | String | ID of the clinical document present in the ContentDocument object. | Required | 55.0 |
| reason | String | The code representing the reason why the supporting content is required. This is unavailable for PATCH requests. | Optional | 63.0 |
| sequence | String | The sequence number of the content when multiple contents are available. This is unavailable for PATCH requests. | Optional | 63.0 |
