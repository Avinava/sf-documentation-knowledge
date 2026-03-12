---
title: "Adjust Order Summary Output"
domain: chatterapi
topic: adjust-order-summary-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.149Z
estimatedTokens: 538
keywords: [Adjust, Order, Summary, Output, representation, financial, changes, items, action, preview, expected, submit, actual]
---

# Adjust Order Summary Output

> Output representation of the financial changes for an adjust items
      action. For a preview action, these values are the expected output. For a submit action, these
      values are the actual output.

# Adjust Order Summary Output

Output representation of the financial changes for an adjust items action. For a preview action, these values are the expected output. For a submit action, these values are the actual output.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| changeBalances | Change Item Output | Expected (for preview) or actual (for submit) financial values for the price adjustment action. Most of the values match the change order values. If two change orders are returned, then these values combine them. The sign of a value in this output is the opposite of the corresponding value on a change order record. For example, a discount is a positive value in changeBalances and a negative value on a change order record. | Big, 49.0 | 49.0 |
| inFulfillment​ChangeOrderId | String | ID of the change Order that holds the financial changes applicable to OrderItemSummary quantities that are in the process of being fulfilled. This change Order is only created for a request that specified an allocatedItems​ChangeOrderType of InFulfillment. For an adjustPreview call, this value is always null. | Big, 55.0 | 55.0 |
| errors | Error Response Output[] | Any errors that were returned. | Big, 49.0 | 49.0 |
| orderSummaryId | String | ID of the OrderSummary. | Big, 49.0 | 49.0 |
| postFulfillment​ChangeOrderId | String | ID of the change Order that holds the financial changes applicable to OrderItemSummary quantities that have been fulfilled. For an adjustPreview call, this value is always null. | Big, 49.0 | 49.0 |
| preFulfillment​ChangeOrderId | String | ID of the change Order that holds the financial changes applicable to OrderItemSummary quantities that have not been fulfilled. If the request specified an allocatedItems​ChangeOrderType of PreFulfillment, this change Order also includes the changes applicable to OrderItemSummary quantities that are in the process of being fulfilled. For an adjustPreview call, this value is always null. | Big, 49.0 | 49.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 49.0 | 49.0 |

## Related Topics

- Change Item Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_change_item_output.htm)
- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
