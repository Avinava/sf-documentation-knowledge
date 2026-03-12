---
title: "Datacloud OrderId Information"
domain: chatterapi
topic: datacloud-orderid-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.897Z
estimatedTokens: 271
keywords: [Datacloud, OrderId, order]
---

# Datacloud OrderId Information

> Get information for an order.

# Datacloud OrderId Information

Get information for an order.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

Order information includes the orderId, the number of purchased records for the orderId, the URL for the order information, and the URL for a list of the purchased records.

Resource

```

```

Available version

32.0

HTTP methods

GET

Response body

[Datacloud Order](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_order.htm "Information about the Data.com records that you purchased and details of the purchase.")

## Code Examples

```
/connect/datacloud/orders/orderId
```

## Related Topics

- Datacloud Order (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_order.htm)
