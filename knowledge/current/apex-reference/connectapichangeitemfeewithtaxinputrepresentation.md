---
title: "ConnectApi.ChangeItemFeeWithTaxInputRepresentation"
domain: apex-reference
topic: connectapichangeitemfeewithtaxinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.623Z
estimatedTokens: 262
keywords: [ConnectApi.ChangeItemFeeWithTaxInputRepresentation, Input, representation, change, item, fee, taxes.]
---

# ConnectApi.ChangeItemFeeWithTaxInputRepresentation

> Input representation of a change item fee with taxes.

# ConnectApi.ChangeItemFeeWithTaxInputRepresentation

Input representation of a change item fee with taxes.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Positive value used to calculate the fee amount. | Required | 63.0 |
| changeItemFeeTaxes | List<ConnectApi.ChangeItemFeeTaxInputRepresentation> | List of taxes associated with the change item fees. | Required | 63.0 |
| description | String | Description of the fee. | Required | 63.0 |
| orderDeliveryGroupSummaryId | String | ID of the order delivery group summary. | Required | 63.0 |
| priceBookEntryId | String | ID of the price book entry associated with the fee product. | Required unless price books are optional in the org | 63.0 |
| product2Id | String | ID of the product representing the fee. | Required | 63.0 |
| reasonText | String | Reason for the cancellation. The value must match one of the picklist values on the Reason field of the Order Product Summary Change object. | Required | 63.0 |

## Related Topics

- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.ChangeItemFeeTaxInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change_item_fee_tax.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
