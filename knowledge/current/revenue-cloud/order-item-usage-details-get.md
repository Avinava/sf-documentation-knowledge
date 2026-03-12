---
title: "Order Item Usage Details (GET)"
domain: revenue-cloud
topic: order-item-usage-details-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.992Z
estimatedTokens: 492
keywords: [Order, Item, Usage, Details, GET, Get, details, usage-based, product, associated, order, item.]
---

# Order Item Usage Details (GET)

> Get details of a usage-based product associated with an order
      item.

# Order Item Usage Details (GET)

Get details of a usage-based product associated with an order item.

Here are the details that this API returns.

-   Grants and resources for the product, if rates aren’t configured.
-   Grants, resources, and any configured rates for the product. The rates are returned by the [Rate Plan (GET) API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_get_rate_plan.htm "HTML (New Window)").
-   Resources that include grants, if applicable, and any negotiated rates for the product in case of a rate override request.

This API doesn't return binding target rates. Use the [Binding Object Usage Details API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_retrieve_binding_object_details.htm "HTML (New Window)") to retrieve binding target rates.

Resource

```

```

Resource example

```

```

```

```

Available version

63.0

HTTP methods

GET

Path parameter for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderItemId | String | ID of the order item. | Required | 63.0 |

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveDate | String | Date that's used to search for the applicable rate card entries. | Optional | 63.0 |
| optionalFields | String[] | Custom fields that you can use to query these objects.OrderItemRateCardEntryOrderItemRateAdjustment | Optional | 63.0 |

Response body for GET

[Usage Details](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_usage_detail_output.htm "Output representation of the usage details of a quote, an order, or an asset.")

## Code Examples

```
/commerce/sales-orders/line-items/orderItemId/usage-details
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/sales-orders/line-items/802SG000003vZ15YAE/usage-details
```

```
https://yourInstance.salesforce.com/services/data​/v66.0/commerce/sales-orders/line-items/802SG000003vZ15YAE/usage-details?optionalFields=OrderItemRateCardEntry.MyCustomDate__c,OrderItemRateCardEntry.MyCustomNumber__c,OrderItemRateAdjustment.myCustomString__c
```

## Related Topics

- Usage
            Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_usage_detail_output.htm)
