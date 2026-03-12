---
title: "ConnectApi.ChangeItemOutputRepresentation"
domain: apex-reference
topic: connectapichangeitemoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.597Z
estimatedTokens: 930
keywords: [ConnectApi.ChangeItemOutputRepresentation, financial, changes, resulting, change, OrderItemSummaries., Most, values, represent, deltas, associated, OrderSummary., sign, opposite, corresponding, order, record., example, discount, positive]
---

# ConnectApi.ChangeItemOutputRepresentation

> The financial changes resulting from a change to one or more
      OrderItemSummaries. Most of the values represent the deltas of the values on the associated
      OrderSummary. The sign of each value is the opposite of the corresponding value on a change
      order record. For example, a discount is a positive value here and a negative value on a
      change order record.

# ConnectApi.ChangeItemOutputRepresentation

The financial changes resulting from a change to one or more OrderItemSummaries. Most of the values represent the deltas of the values on the associated OrderSummary. The sign of each value is the opposite of the corresponding value on a change order record. For example, a discount is a positive value here and a negative value on a change order record.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| grandTotal​Amount | Double | Change to the GrandTotalAmount field. | 48.0 |
| totalAdjDelivery​AmtWithTax | Double | Change to the TotalAdjDeliveryAmtWithTax field. | 49.0 |
| totalAdjDist​AmountWithTax | Double | Change to the TotalAdjDistAmountWithTax field. | 49.0 |
| totalAdjProduct​AmtWithTax | Double | Change to the TotalAdjProductAmtWithTax field. | 49.0 |
| totalAdjusted​DeliveryAmount | Double | Change to the TotalAdjustedDeliveryAmount field. | 48.0 |
| totalAdjusted​DeliveryTaxAmount | Double | Change to the TotalAdjustedDeliveryTaxAmount field. | 48.0 |
| totalAdjusted​ProductAmount | Double | Change to the TotalAdjustedProductAmount field. | 48.0 |
| totalAdjusted​ProductTaxAmount | Double | Change to the TotalAdjustedProductTaxAmount field. | 48.0 |
| totalAdjustment​DistributedAmount | Double | Change to the TotalAdjustmentDistributedAmount field. | 48.0 |
| totalAdjustment​DistributedTaxAmount | Double | Change to the TotalAdjustmentDistributedTaxAmount field. | 48.0 |
| totalAmount | Double | Change to the TotalAmount field. | 48.0 |
| totalExcess​FundsAmount | Double | Amount of excess funds available on the OrderPaymentSummaries related to the OrderSummary. It is equal to the captured amount that is owed as a refund but is not associated with an invoice or credit memo. Excess funds normally occur when order items are canceled before fulfillment but after payment has been captured. This situation is not common in the US, where funds are normally authorized but not captured until the fulfillment process begins. This value includes all current excess funds related to the OrderSummary, not only the funds related to the current change. | 48.0 |
| totalFeeAmount | Double | Total amount of the fees charged for the change. | 57.0 |
| totalFeeTaxAmount | Double | Total amount of tax on the fees charged for the change. | 57.0 |
| totalRefundable​Amount | Double | Total amount available to be refunded. It is the sum of the excess funds and any outstanding change order grand total amounts that apply to post-fulfillment changes. This value includes all current refundable amounts related to the OrderSummary, not only the amount related to the current change. | 48.0 |
| totalRequired​FundsAmount | Double | The required funds associated with added order items. | 54.0 |
| totalTaxAmount | Double | Change to the TotalTaxAmount field. | 48.0 |

#### See Also

-   [ConnectApi.PreviewCancelOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_preview_cancel_output.htm "Expected financial values for a proposed cancel action.")

-   [ConnectApi.PreviewReturnOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_preview_return_output.htm "Expected financial values for a proposed return action.")

-   [ConnectApi.SubmitCancelOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_submit_cancel_output.htm "ID of the change order created for a cancel action, and a set of its financial values.")

-   [ConnectApi.SubmitReturnOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_submit_return_output.htm "ID of the change order created for a return action, and a set of its financial values.")

## Related Topics

- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- ConnectApi.PreviewCancelOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_preview_cancel_output.htm)
- ConnectApi.PreviewReturnOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_preview_return_output.htm)
- ConnectApi.SubmitCancelOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_submit_cancel_output.htm)
- ConnectApi.SubmitReturnOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_submit_return_output.htm)
