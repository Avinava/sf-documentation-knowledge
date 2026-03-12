---
title: "Requirements for Standalone Order Products with Price Schedules"
domain: blng-dev
topic: requirements-for-standalone-order-products-with-price-schedules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.925Z
estimatedTokens: 361
keywords: [Requirements, Standalone, Order, Products, Price, Schedules, product, API, Salesforce, Lightning, Classic]
---

# Requirements for Standalone Order Products with Price Schedules

> Create a standalone order product with price schedules through API in Salesforce
  Lightning or Salesforce Classic.

# Requirements for Standalone Order Products with Price Schedules

Create a standalone order product with price schedules through API in Salesforce Lightning or Salesforce Classic.

| Available in: Salesforce Billing Winter ’21 and later |
| --- |


![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Salesforce CPQ doesn’t automatically create price schedules for standalone order products. You must create the price schedule and its price tiers on your own. Each price schedule requires at least one price tier.

## Required Fields

| Field | Value |
| --- | --- |
| Billing Frequency | Invoice Plan |
| Billing Rule | [Required] |
| Charge Type | Recurring |
| Revenue Recognition Rule | [Required] |
| Tax Rule | [Required] |

| Field | Value |
| --- | --- |
| Account | [Required] |
| Effective Date | [Required] |
| Price Book | [Required] |
| Status | Draft |

| Field | Value |
| --- | --- |
| Billing Frequency | [Required] |
| Charge Type | Usage |
| End Date | [Required] |
| Price Book Entry | [Required] |
| Price Schedule | [Required] |
| Quantity | [Required] |
| Service Date | [Required] |
| Unit Price | [Required] |

| Field | Value |
| --- | --- |
| Discount Unit | [Required] |
| Price Type | [Required] |

| Field | Value |
| --- | --- |
| Lower Bound | [Required] |
| Optional | [Optional] |
| Price Model | [Required] |
| Price Schedule | [Required] |
