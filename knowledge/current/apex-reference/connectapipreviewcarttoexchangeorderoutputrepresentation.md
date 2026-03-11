---
title: "ConnectApi.PreviewCartToExchangeOrderOutputRepresentation"
domain: apex-reference
topic: connectapipreviewcarttoexchangeorderoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.618Z
keywords: [ConnectApi.PreviewCartToExchangeOrderOutputRepresentation]
---

# ConnectApi.PreviewCartToExchangeOrderOutputRepresentation

# ConnectApi.PreviewCartToExchangeOrderOutputRepresentation

Expected change order financial values for the preview cart to exchange order action.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| balanceStateExchangeWebCart | ConnectApi.BalanceStatePreviewOutput | The balance state preview for the exchange web cart. | Big, 61.0 |
| balanceStateOriginalOrderSummary | ConnectApi.BalanceStatePreviewOutput | The balance state preview for the original order summary. | Big, 61.0 |
| balanceStateReturnOrder | ConnectApi.BalanceStatePreviewOutput | The balance state preview for the return order. | Big, 61.0 |
| changeBalances | ConnectApi.ChangeItemOutputRepresentation | Change order financial values for a preview order action. | Big, 60.0 |
| errors | List<ConnectApi.​ErrorResponse> | Any errors that were returned. | Big, 60.0 |
| orderSummaryId | String | ID of the order summary. | Big, 60.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 60.0 |