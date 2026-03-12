---
title: "Datacloud Contact Order Information"
domain: chatterapi
topic: datacloud-contact-order-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.905Z
estimatedTokens: 399
keywords: [Datacloud, Contact, Order, specific, contacts]
---

# Datacloud Contact Order Information

> Get all the order information for a specific order for contacts.

# Datacloud Contact Order Information

Get all the order information for a specific order for contacts.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

Order information includes the orderId, the number of purchased records for the orderId, the URL for the order information, and details for the purchased contacts.

Resource

```

```

The orderId must be for purchased contacts. A request with an orderId for purchased companies fails.

Available version

32.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | The number of the page that you want returned. | Optional | 32.0 |
| pageSize | Integer | The number of contacts you want returned on each page. The default page size is 25. | Optional | 32.0 |

Response body for GET

[Datacloud Contact Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_contact_collection.htm "Purchase details for all contacts that were purchased for a specific order.")

## Code Examples

```
/connect/datacloud/orders/orderId/contacts
```

## Related Topics

- Datacloud Contact Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_contact_collection.htm)
