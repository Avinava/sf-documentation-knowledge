---
title: "ConnectApi.FulfillmentGroupOutputRepresentation"
domain: apex-reference
topic: connectapifulfillmentgroupoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.955Z
keywords: [ConnectApi.FulfillmentGroupOutputRepresentation]
---

# ConnectApi.FulfillmentGroupOutputRepresentation

# ConnectApi.FulfillmentGroupOutputRepresentation

Information about one FulfillmentOrder from a request to create fulfillment orders from multiple OrderDeliveryGroupSummaries. If the FulfillmentOrder was created, then its ID is returned. If it failed, then data from the input is returned so you can resubmit it.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| fulfilledFromLocationId | String | (Creation failed) The input FulfilledFromLocationId. | 50.0 |
| fulfillmentOrderId | String | The FulfillmentOrderId from the successfully created FulfillmentOrder. | 50.0 |
| fulfillmentType | String | (Creation failed) The input FulfillmentType. | 50.0 |
| orderDeliveryGroup​SummaryId | String | (Creation failed) The input OrderDeliveryGroupSummaryId. | 50.0 |
| orderItemSummaries | List<ConnectApi.​OrderItemSummary​OutputRepresentation> | (Creation failed) The input list of OrderItemSummaries. | 50.0 |
| orderSummaryId | String | (Creation failed) The input OrderSummaryId. | 50.0 |
| referenceId | String | The referenceId from the FulfillmentGroup input representation. Use this value to troubleshoot a failure. | 50.0 |