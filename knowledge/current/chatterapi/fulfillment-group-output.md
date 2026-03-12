---
title: "Fulfillment Group Output"
domain: chatterapi
topic: fulfillment-group-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.047Z
estimatedTokens: 354
keywords: [Fulfillment, Group, Output, FulfillmentOrder, orders, multiple, OrderDeliveryGroupSummaries, created, failed, data, input, resubmit]
---

# Fulfillment Group Output

> Information about one FulfillmentOrder from a request to create
      fulfillment orders from multiple OrderDeliveryGroupSummaries. If the FulfillmentOrder was
      created, then its ID is returned. If it failed, then data from the input is returned so you
      can resubmit it.

# Fulfillment Group Output

Information about one FulfillmentOrder from a request to create fulfillment orders from multiple OrderDeliveryGroupSummaries. If the FulfillmentOrder was created, then its ID is returned. If it failed, then data from the input is returned so you can resubmit it.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response Output[] | Any errors that were returned. | Big, 50.0 | 50.0 |
| fulfilledFromLocationId | String | (Creation failed) The input FulfilledFromLocationId. | Big, 50.0 | 50.0 |
| fulfillmentOrderId | String | The FulfillmentOrderId from the successfully created FulfillmentOrder. | Big, 50.0 | 50.0 |
| fulfillmentType | String | (Creation failed) The input FulfillmentType. | Big, 50.0 | 50.0 |
| orderDeliveryGroupSummaryId | String | (Creation failed) The input OrderDeliveryGroupSummaryId. | Big, 50.0 | 50.0 |
| orderItemSummaries | Order Item Summary Output[] | (Creation failed) The input list of OrderItemSummaries. | Big, 50.0 | 50.0 |
| orderSummaryId | String | (Creation failed) The input OrderSummaryId. | Big, 50.0 | 50.0 |
| referenceId | String | The referenceId from the FulfillmentGroup input representation. Use this value to troubleshoot a failure. | Big, 50.0 | 50.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 50.0 | 50.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Order Item Summary Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_item_summary_output.htm)
