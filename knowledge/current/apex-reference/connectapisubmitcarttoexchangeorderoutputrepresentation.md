---
title: "ConnectApi.SubmitCartToExchangeOrderOutputRepresentation"
domain: apex-reference
topic: connectapisubmitcarttoexchangeorderoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.124Z
estimatedTokens: 273
keywords: [Exhange, order, summary, resulting, submit, cart, exchange, action]
---

# ConnectApi.SubmitCartToExchangeOrderOutputRepresentation

> Exhange order summary resulting from a submit cart to exchange order
      action.

# ConnectApi.SubmitCartToExchangeOrderOutputRepresentation

Exhange order summary resulting from a submit cart to exchange order action.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| balanceStateExchangeWebCart | ConnectApi.BalanceStatePreviewOutput | The balance state preview for the exchange web cart. | Big, 61.0 |
| balanceStateOriginalOrderSummary | ConnectApi.BalanceStatePreviewOutput | The balance state preview for the original order summary. | Big, 61.0 |
| balanceStateReturnOrder | ConnectApi.BalanceStatePreviewOutput | The balance state preview for the return order. | Big, 61.0 |
| changeBalances | ConnectApi.ChangeItemOutputRepresentation | Change order financial values for a preview order action. | Big, 60.0 |
| errors | List<ConnectApi.​ErrorResponse> | Any errors that were returned. | Big, 60.0 |
| exchangeOrderSummaryId | String | Exchange order summary ID. | Big, 60.0 |
| orderSummaryId | String | ID of the order summary. | Big, 60.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 60.0 |

## Related Topics

- ConnectApi.BalanceStatePreviewOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_balance_state_preview_output.htm)
- ConnectApi.ChangeItemOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_change_item_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
