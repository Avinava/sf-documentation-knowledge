---
title: "Change Item Fee Tax Input"
domain: chatterapi
topic: change-item-fee-tax-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.232Z
estimatedTokens: 162
keywords: [Change, Item, Fee, Tax, Input, Taxes, associated]
---

# Change Item Fee Tax Input

> Taxes associated with a change item fee.

# Change Item Fee Tax Input

Taxes associated with a change item fee.

Root XML tag

changeItemFeeTaxInput

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Tax amount of the change item fee. | Required | 63.0 |
| description | String | Description of the change item fee. | Required | 63.0 |
| rate | Double | Tax rate for the change item fee. | Required | 63.0 |
| taxEffectiveDate | String | Effective date for the tax. | Required | 63.0 |
| type | String | Describes how the fee amount is calculated. Valid values are:ActualEstimated | Required | 63.0 |
