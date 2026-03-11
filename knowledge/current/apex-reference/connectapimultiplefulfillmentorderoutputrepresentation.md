---
title: "ConnectApi.MultipleFulfillmentOrderOutputRepresentation"
domain: apex-reference
topic: connectapimultiplefulfillmentorderoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.303Z
keywords: [ConnectApi.MultipleFulfillmentOrderOutputRepresentation]
---

# ConnectApi.MultipleFulfillmentOrderOutputRepresentation

# ConnectApi.MultipleFulfillmentOrderOutputRepresentation

A list of responses for the individual FulfillmentOrder creation attempts from a request to create multiple fulfillment orders.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| invoicesMap |  |  | 50.0 |
| fulfillmentOrders | List<ConnectApi.​FulfillmentGroup​OutputRepresentation> | A list of response data for created and failed FulfillmentOrders. | 50.0 |