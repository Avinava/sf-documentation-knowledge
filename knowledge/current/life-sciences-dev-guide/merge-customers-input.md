---
title: "Merge Customers Input"
domain: life-sciences-dev-guide
topic: merge-customers-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.381Z
estimatedTokens: 292
keywords: [Merge, Customers, Input, Consolidated, Account, Merged]
---

# Merge Customers Input

> The request to merge a Consolidated Account with a Merged Account.

# Merge Customers Input

The request to merge a Consolidated Account with a Merged Account.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Properties

| Property Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| winningId | String | The Salesforce ID of the Consolidated Account. Required when a Consolidated Account external ID isn't provided. Must be unique within the request. | Required | 65.0 |
| winningExternalId | String | The external ID of the Consolidated Account. Required when a Consolidated Account ID isn't provided. | Required | 65.0 |
| losingId | String | The Salesforce ID of the Merged Account. Required when a Merged Account external ID isn't provided. Must be unique within the request. | Required | 65.0 |
| losingExternalId | String | The external ID of the Merged Account. Required when a Merged Account ID isn't provided. | Required | 65.0 |
