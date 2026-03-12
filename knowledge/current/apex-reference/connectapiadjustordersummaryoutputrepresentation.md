---
title: "ConnectApi.AdjustOrderSummaryOutputRepresentation"
domain: apex-reference
topic: connectapiadjustordersummaryoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.222Z
estimatedTokens: 522
keywords: [Output, representation, financial, changes, adjust, items, action, preview, expected, submit, actual]
---

# ConnectApi.AdjustOrderSummaryOutputRepresentation

> Output representation of the financial changes for an adjust items
      action. For a preview action, these values are the expected output. For a submit action, these
      values are the actual output.

# ConnectApi.AdjustOrderSummaryOutputRepresentation

Output representation of the financial changes for an adjust items action. For a preview action, these values are the expected output. For a submit action, these values are the actual output.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| changeBalances | ConnectApi.​ChangeItem​OutputRepresentation | Expected (for preview) or actual (for submit) financial values for the price adjustment action. Most of the values match the change order values. If two change orders are returned, then these values combine them. The sign of a value in this output is the opposite of the corresponding value on a change order record. For example, a discount is a positive value in changeBalances and a negative value on a change order record. | 49.0 |
| inFulfillment​ChangeOrderId | String | ID of the change Order that holds the financial changes applicable to OrderItemSummary quantities that are in the process of being fulfilled. This change Order is only created for a request that specified an allocatedItems​ChangeOrderType of InFulfillment. For an adjustPreview call, this value is always null. | 55.0 |
| orderSummaryId | String | ID of the OrderSummary. | 49.0 |
| postFulfillment​ChangeOrderId | String | ID of the change Order that holds the financial changes applicable to OrderItemSummary quantities that have been fulfilled. For an adjustPreview call, this value is always null. | 49.0 |
| preFulfillment​ChangeOrderId | String | ID of the change Order that holds the financial changes applicable to OrderItemSummary quantities that have not been fulfilled. If the request specified an allocatedItems​ChangeOrderType of PreFulfillment, this change Order also includes the changes applicable to OrderItemSummary quantities that are in the process of being fulfilled. For an adjustPreview call, this value is always null. | 49.0 |

## Related Topics

- ConnectApi.BaseOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm)
- ConnectApi.​ChangeItem​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_change_item_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
