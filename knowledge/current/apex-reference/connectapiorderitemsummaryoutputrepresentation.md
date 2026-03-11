---
title: "ConnectApi.OrderItemSummaryOutputRepresentation"
domain: apex-reference
topic: connectapiorderitemsummaryoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.477Z
keywords: [ConnectApi.OrderItemSummaryOutputRepresentation]
---

# ConnectApi.OrderItemSummaryOutputRepresentation

# ConnectApi.OrderItemSummaryOutputRepresentation

Details of an OrderItemSummary from a failed FulfillmentOrder in a create multiple fulfillment orders request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.​ErrorResponse> | List of errors specific to the OrderItemSummary, if any. | 50.0 |
| orderItemSummaryId | String | ID of the OrderItemSummary. | 50.0 |
| quantity | Double | Quantity of the OrderItemSummary. | 50.0 |