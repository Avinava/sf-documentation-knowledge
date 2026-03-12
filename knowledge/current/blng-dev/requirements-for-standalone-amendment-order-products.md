---
title: "Requirements
  for Standalone Amendment Order Products"
domain: blng-dev
topic: requirements-for-standalone-amendment-order-products
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.886Z
estimatedTokens: 414
keywords: [Requirements, Standalone, Amendment, Order, Products, product, API, Salesforce, Lightning, Classic]
---

# Requirements
  for Standalone Amendment Order Products

> Create a standalone amendment order product through API in Salesforce Lightning or
  Salesforce Classic

# Requirements for Standalone Amendment Order Products

Create a standalone amendment order product through API in Salesforce Lightning or Salesforce Classic

| Available in: Salesforce Billing Winter ’21 and later |
| --- |


Make sure to provide a value for the revised order product ID. The Revised Order Product field shows the ID of the original order product used before any amendments were made. Remember, an order product can be related to multiple amendment order products.

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
| Billable Unit Price | Required for invoice runs or Bill Now to pick up the order product for invoicing. We recommend calculating a value based on the formula described in Recurring Billing and Billable Unit Price. |
| Billing Frequency | [Required] |
| Billing Rule | [Get value from product] |
| Billing Type | [Required] |
| Charge Type | [Required] |
| Charge Type | [Required] |
| Default Subscription Term | [Required] |
| End Date | [Required] |
| Order | [Required] |
| Ordered Quantity | [Required] |
| Price Book Entry | [Required] |
| Quantity | [Required] |
| Reference ID | [Required] |
| Revenue Recognition Rule | [Get value from product] |
| Revised Order Product | [Required] |
| Service Date | [Required] |
| Status | Draft |
| Tax Rule | [Get value from product] |
