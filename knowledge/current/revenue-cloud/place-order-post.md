---
title: "Place Order (POST)"
domain: revenue-cloud
topic: place-order-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.792Z
estimatedTokens: 920
keywords: [Place, Order, POST, orders, integrated, pricing, configuration, validation, manage, throughout, their, entire, lifecycle, Additionally, insert]
---

# Place Order (POST)

> Place orders with integrated pricing, configuration, and validation,
      and manage them throughout their entire lifecycle. Additionally, update an order or insert
      order items.

# Place Order (POST)

Place orders with integrated pricing, configuration, and validation, and manage them throughout their entire lifecycle. Additionally, update an order or insert order items.

You can also group order items based on location, work types, or departments, if groups are enabled for your org. Groups provide a visualization of the products to view large quotes.

This API supports a maximum of 300 transaction line items.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

This API has been deprecated as of API version 63.0. In API version 63.0 and later, use the new [Place Sales Transaction](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_place_sales_transaction.htm "HTML (New Window)") API.

Special Access Rules

You need the PlaceOrder API permission set to use this API.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

This example shows a sample request to define grouping of order items.

```

```

This example shows a sample request to ungroup order items.

```

```

This example shows a sample request to create a new group.

```

```

This example shows a sample request to delete a group.

```

```

This example shows a sample request to group order items based on criteria.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| catalog​RatesPref | String | Rate card entries defined in the catalog that must be fetched for order items with usage-based pricing during the order creation process. Valid values are:Fetch—Retrieves the rate card entries defined in the catalog for order items during the order creation process.Skip—Skips the retrieval of rate card entries for order items during the order creation process.The default value is Skip.This property is available when the Usage-Based Selling feature is enabled. | Optional | 62.0 |
| configuration​Input | String | Configuration input for the place order process. Valid values are:RunAndAllowErrors—Specifies to run the configuration and to proceed order ingestion upon encountering any configuration errors.RunAndBlockErrors—Specifies to run configuration and to block order ingestion upon encountering any configuration errors.Skip—Specifies to skip configuration.The default value is RunAndBlockErrors. | Optional | 60.0 |
| configuration​Options | Configuration Options Input​[] | Configuration options during the ingestion process. | Optional | 60.0 |
| graph | Object Graph Input | The sObject graph of the order payload to be ingested. You can perform create, update, or delete operations on objects from the Sales Transaction context definition by using this property. Additionally, perform create, update, or delete operations on custom objects and fields in your extended context definition. | Required | 60.0 |
| pricing​Pref | String | Pricing preference during the create order process. Valid values are:Force—Specifies to force pricing during the order ingestion process.Skip—Specifies to skip pricing during the order ingestion process.System—Specifies the system to determine whether a pricing calculation is required.The default value is System. | Optional | 60.0 |

Response body for POST

[Place Order](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_place_order_output.htm "Output representation of the request to create or update an order.")

## Code Examples

```
/commerce/sales-orders/actions/place
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/sales-orders/actions/place
```

```
{
  "pricingPref": "System",
  "configurationInput": "RunAndAllowErrors",
  "configurationOptions": {
    "validateProductCatalog": true,
    "validateAmendRenewCancel": true,
    "executeConfigurationRules": true,
    "addDefaultConfiguration": true
  },
  "graph": {
    "graphId": "graphId",
    "records": [
      {
        "referenceId": "refOrder",
        "record": {
          "attributes": {
            "type": "Order",
            "method": "POST",
            "Id": "POST"
          }
        }
      },
      {
         "referenceId":"refOrderItem",
         "record":{
         "attributes":{
             "type":"OrderItem",
             "method":"POST"
            },
            "OrderId":"@{refOrder.id}",
            "OrderActionId":"@{refOrderAction.id}",
            "ListPrice":"144.99",
            "Quantity":3,
            "PricebookEntryId":"01uxx0000008yXPAAY",
            "Product2Id":"01txx0000006i2UAAQ",
            "UnitPrice":"199.49"
       }
      }
    ]
  }
}
```

```
{
    "pricingPref": "system",
    "graph": {
        "graphId": "placeOrder",
        "records": [
            {
                "referenceId": "refOrder",
                "record": {
                    "attributes": {
                        "type": "Order",
                        "method": "PATCH",
                        "id": "801xx000003GZ9bAAG"
                    }
                }
            },
            {
                "referenceId": "refOlg1",
                "record": {
                    "attributes": {
                        "type": "OrderItemGroup",
                        "method": "POST"
                    },
                    "Name": "New Group",
                    "OrderId": "@{refOrder.id}"
                }
            }
        ]
    }
}
```

```
{
    "pricingPref": "system",
    "graph": {
        "graphId": "placeOrder",
        "records": [
            {
                "referenceId": "refOrder",
                "record": {
                    "attributes": {
                        "type": "Order",
                        "method": "PATCH",
                        "id": "refOrder"
                    }
                }
            },
            {
                "referenceId": "refOlg1",
                "record": {
                    "attributes": {
                        "type": "OrderItemGroup",
                        "method": "DELETE",
                        "id": "refOlg1",
                        "action": "Ungroup"
                    }
                }
            }
        ]
    }
}
```

## Related Topics

- Configuration Options Input​ (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configuration_options_input.htm)
- Object Graph Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_object_graph_input.htm)
- Place Order (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_place_order_output.htm)
