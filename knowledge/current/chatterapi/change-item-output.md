---
title: "Change Item Output"
domain: chatterapi
topic: change-item-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.638Z
estimatedTokens: 1040
keywords: [Change, Item, Output, financial, changes, resulting, OrderItemSummaries, represent, deltas, associated, OrderSummary, sign, opposite, corresponding, order]
---

# Change Item Output

> The financial changes resulting from a change to one or more
      OrderItemSummaries. Most of the values represent the deltas of the values on the associated
      OrderSummary. The sign of each value is the opposite of the corresponding value on a change
      order record. For example, a discount is a positive value here and a negative value on a
      change order record.

# Change Item Output

The financial changes resulting from a change to one or more OrderItemSummaries. Most of the values represent the deltas of the values on the associated OrderSummary. The sign of each value is the opposite of the corresponding value on a change order record. For example, a discount is a positive value here and a negative value on a change order record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| grandTotalAmount | Double | Change to the GrandTotalAmount field. | Big, 48.0 | 48.0 |
| totalAdjDelivery​AmtWithTax | Double | Change to the TotalAdjDeliveryAmtWithTax field. | Big, 49.0 | 49.0 |
| totalAdjDist​AmountWithTax | Double | Change to the TotalAdjDistAmountWithTax field. | Big, 49.0 | 49.0 |
| totalAdjProduct​AmtWithTax | Double | Change to the TotalAdjProductAmtWithTax field. | Big, 49.0 | 49.0 |
| totalAdjusted​DeliveryAmount | Double | Change to the TotalAdjustedDeliveryAmount field. | Big, 48.0 | 48.0 |
| totalAdjusted​DeliveryTax​Amount | Double | Change to the TotalAdjustedDeliveryTaxAmount field. | Big, 48.0 | 48.0 |
| totalAdjusted​ProductAmount | Double | Change to the TotalAdjustedProductAmount field. | Big, 48.0 | 48.0 |
| totalAdjusted​ProductTax​Amount | Double | Change to the TotalAdjustedProductTaxAmount field. | Big, 48.0 | 48.0 |
| totalAdjustment​Distributed​Amount | Double | Change to the TotalAdjustmentDistributedAmount field. | Big, 48.0 | 48.0 |
| totalAdjustment​Distributed​TaxAmount | Double | Change to the TotalAdjustmentDistributedTaxAmount field. | Big, 48.0 | 48.0 |
| totalAmount | Double | Change to the TotalAmount field. | Big, 48.0 | 48.0 |
| totalExcess​FundsAmount | Double | Amount of excess funds available on the OrderPaymentSummaries related to the OrderSummary. It is equal to the captured amount that is owed as a refund but is not associated with an invoice or credit memo. Excess funds normally occur when order items are canceled before fulfillment but after payment has been captured. This situation is not common in the US, where funds are normally authorized but not captured until the fulfillment process begins. This value includes all current excess funds related to the OrderSummary, not only the funds related to the current change. | Big, 48.0 | 48.0 |
| totalFeeAmount | Double | Total amount of the fees charged for the change. | Big, 57.0 | 57.0 |
| totalFeeTaxAmount | Double | Total amount of tax on the fees charged for the change. | Big, 57.0 | 57.0 |
| totalRefundable​Amount | Double | Total amount available to be refunded. It is the sum of the excess funds and any outstanding change order grand total amounts that apply to post-fulfillment changes. This value includes all current refundable amounts related to the OrderSummary, not only the amount related to the current change. | Big, 48.0 | 48.0 |
| totalRequired​FundsAmount | Double | The required funds associated with added order items. | Big, 54.0 | 54.0 |
| totalTaxAmount | Double | Change to the TotalTaxAmount field. | Big, 48.0 | 48.0 |

#### See Also

-   [Preview Cancel Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_preview_cancel_output.htm "Expected financial values for a proposed cancel action.")

-   [Preview Return Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_preview_return_output.htm "Expected financial values for a proposed return action.")

-   [Submit Cancel Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_submit_cancel_output.htm "ID of the change order created for a cancel action, and a set of its financial values.")

-   [Submit Return Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_submit_return_output.htm "ID of the change order created for a return action, and a set of its financial values.")

-   [Adjust Order Summary Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_adjust_order_summary.htm "Output representation of the financial changes for an adjust items action. For a preview action, these values are the expected output. For a submit action, these values are the actual output.")

## Related Topics

- Preview Cancel Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_preview_cancel_output.htm)
- Preview Return Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_preview_return_output.htm)
- Submit Cancel Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_submit_cancel_output.htm)
- Submit Return Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_submit_return_output.htm)
- Adjust Order Summary Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_adjust_order_summary.htm)
