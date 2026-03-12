---
title: "Change Item Fee With Tax Input"
domain: chatterapi
topic: change-item-fee-with-tax-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.238Z
estimatedTokens: 258
keywords: [Change, Item, Fee, Tax, Input, including, taxes]
---

# Change Item Fee With Tax Input

> Change item fee, including taxes.

# Change Item Fee With Tax Input

Change item fee, including taxes.

Root XML tag

changeItemFeeWithTaxInput

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Positive value used to calculate the fee amount. | Required | 63.0 |
| changeItemFeeTaxes | Change Item Fee Tax Input | List of taxes associated with the change item fees. | Required | 63.0 |
| description | String | Description of the fee. | Required | 63.0 |
| orderDeliveryGroupSummaryId | String | ID of the order delivery group summary. | Required | 63.0 |
| priceBookEntryId | String | ID of the price book entry associated with the fee product. | Required unless price books are optional in the org | 63.0 |
| product2Id | String | ID of the product representing the fee. | Required | 63.0 |
| reasonText | String | Reason for the cancellation. The value must match one of the picklist values on the Reason field of the Order Product Summary Change object. | Required | 63.0 |

## Related Topics

- Change Item Fee Tax Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_change_item_fee_tax_input.htm)
