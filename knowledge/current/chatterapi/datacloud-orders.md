---
title: "Datacloud Orders"
domain: chatterapi
topic: datacloud-orders
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.911Z
estimatedTokens: 481
keywords: [Datacloud, Orders, Purchase, contacts, companies, listed, IDs]
---

# Datacloud Orders

> Purchase the contacts or companies for the
      listed IDs.

# Datacloud Orders

Purchase the contacts or companies for the listed IDs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

Resource

```

```

Available version

32.0

HTTP methods

POST

Request body for POST

The POST request can have either contact IDs or company IDs, not both.

Root XML tag

<DatacloudOrder>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| companyIds | String | The list of companies to purchase. If contactIds are included with companyIds, your purchase fails. | Required to purchase companies | 32.0 |
| contactIds | String | The list of contacts to purchase. If companyIds are included with contactIds, your purchase fails. | Required to purchase contacts | 32.0 |
| userType | String | The Data.com user type.Monthly—A user type that’s assigned monthly point limits for purchasing Data.com records. Only the assigned user can use monthly points. Points expire at the end of the month. Monthly is the default setting for DatacloudUserType.Listpool—A user type that allows users to draw from a pool of points to purchase Data.com records. | Optional | 32.0 |

Response body for POST

[Datacloud Order](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_order.htm "Information about the Data.com records that you purchased and details of the purchase.")

## Code Examples

```
/connect/datacloud/orders
```

```
{
   "companyIds":[
      "23456",
      "24548"
   ],
   "userType":"Monthly"
}
```

## Related Topics

- Datacloud Order (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_order.htm)
