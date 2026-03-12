---
title: "Rejected Merge Request Output"
domain: life-sciences-dev-guide
topic: rejected-merge-request-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.596Z
estimatedTokens: 291
keywords: [Rejected, Merge, Output, due, invalid, input]
---

# Rejected Merge Request Output

> A merge request that was rejected due to invalid input.

# Rejected Merge Request Output

A merge request that was rejected due to invalid input.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| winningId | String | The Salesforce ID of the Consolidated Account that was part of the rejected request. | Small, 65.0 | 65.0 |
| winningExternalIdField | String | The external ID of the Consolidated Account that was part of the rejected request. | Small, 65.0 | 65.0 |
| losingId | String | The Salesforce ID of the Merged Account that was part of the rejected request. | Small, 65.0 | 65.0 |
| losingExternalIdField | String | The external ID of the Merged Account that was part of the rejected request. | Small, 65.0 | 65.0 |
| errorMessage | String | The error message explaining why the request was rejected. | Small, 65.0 | 65.0 |
