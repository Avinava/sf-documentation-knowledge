---
title: "Place Quote (POST)"
domain: revenue-cloud
topic: place-quote-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.799Z
estimatedTokens: 870
keywords: [Place, Quote, POST, discover, price, products, services, Additionally, insert, line, item]
---

# Place Quote (POST)

> Create a quote to discover and price products and services.
      Additionally, insert, update, or delete a quote line item.

# Place Quote (POST)

Create a quote to discover and price products and services. Additionally, insert, update, or delete a quote line item.

You can also group quote line items based on location, work types, or departments, if groups are enabled for your org. Groups provide a visualization of the products to view large quotes.

This API supports a maximum of 300 transaction line items.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

This API has been deprecated as of API version 63.0. In API version 63.0 and later, use the new [Place Sales Transaction](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_place_sales_transaction.htm "HTML (New Window)") API.

Special Access Rules

You need the Create on Quotes user permission to create quotes.

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

This example shows a sample request to create a quote.

```

```

This example shows a sample request to insert, update, or delete a quote line item.

```

```

This example shows a sample request to define grouping of quote line items.

```

```

This example shows a sample request for the initial grouping of the quote with the quote lines assigned to the first group.

```

```

This example shows a sample request to ungroup a quote but retain the quote lines.

```

```

This example shows a sample request to create a new group.

```

```

This example shows a sample request to delete a group.

```

```

This example shows a sample request to move a group.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| catalog​RatesPref | String | Rate card entries defined in the catalog that must be fetched for quote line items with usage-based pricing during the quote creation process. Valid values are:Fetch—Retrieves the rate card entries defined in the catalog for quote line items during the quote creation process.Skip—Skips the retrieval of rate card entries for quote line items during the quote creation process.The default value is Skip.This property is available when the Usage-Based Selling feature is enabled. | Optional | 62.0 |
| configuration​Input | String | Configuration input for the place quote process. Valid values are:RunAndAllowErrorsRunAndBlockErrorsSkipThe default value is RunAndBlockErrors. | Optional | 60.0 |
| configuration​Options | Configuration Options Input | Configuration options during the ingestion process. | Optional | 60.0 |
| graph | Object Graph Input | The sObject graph representing the quote structure. You can perform create, update, or delete operations on objects from the Sales Transaction context definition by using this property. Additionally, perform create, update, or delete operations on custom objects and fields in your extended context definition. | Required | 60.0 |
| pricing​Pref | String | Pricing preference during the quote process. Valid values are:ForceSkipSystemThe default value is System. | Optional | 60.0 |

Response body for POST

[Place Quote](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_place_quote_output.htm "Output representation of the request to create or update a quote.")

## Code Examples

```
/commerce/quotes/actions/place
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/quotes/actions/place
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
  },  "graph": {
    "graphId": "createQuote",
    "records": [{ 
        "referenceId": "refQuote",
        "record": {
          "attributes": {
            "type": "Quote",
            "method": "POST"
          },
          "opportunityId": "---",
          "quoteProp1": "value1",
          "quoteProp2": "value2"
        }
      },
      {
        "referenceId": "refQuoteLineItem1",
        "record": {
          "attributes": {
            "type": "QuoteLineItem",
            "method": "POST"
          },
          "QuoteLineItemProp1": "value1",
          "QuoteLineItemProp2": "value2"
        }
      },
      {
      "referenceId": "refQuoteLineItemAttribute",
      "record": {
        "attributes": {
              "type": "QuoteLineItemAttribute",
              "method": "POST"
       },
       "QuoteLineItemId": "@{refQuoteLineItem1.id}",
       "AttributeDefinitionId": "0tjxx0000000001AAA"
      }
}
    ]
  }
}
```

```
{
  "pricingPref": "System",
  "configurationInput": "skip",
  "graph": {
    "graphId": "updateQuote",
    "records": [
      {
        "referenceId": "refQuote",
        "record": {
          "attributes": {
            "type": "Quote",
            "method": "PATCH",
            "id": "0Q0xx0000004E2mCAE"
          },
          "Name": "Quote_Acme"
        }
      },
      {
        "referenceId": "refQuoteLineItemToCreate1",
        "record": {
          "attributes": {
            "type": "QuoteLineItem",
            "method": "POST"
          },
          "QuoteId": "0Q0xx0000004E2mCAE",
          "PricebookEntryId": "01uxx0000008yXPAAY",
          "Product2Id": "01txx0000006i2UAAQ",
          "Quantity": 2.0,
          "UnitPrice": 800.0,
          "PeriodBoundary": "Anniversary",
          "BillingFrequency": "Monthly",
          "StartDate": "2024-03-11"
        }
      },
      {
        "referenceId": "refQuoteLineItemToPatch2",
        "record": {
          "attributes": {
            "type": "QuoteLineItem",
            "method": "PATCH",
            "id": "0Q0xx0000004E2mCAE"
          },
          "Quantity": 2.0,
          "UnitPrice": 600.0
        }
      },
      {
        "referenceId": "refQuoteLineItemToDelete3",
        "record": {
          "attributes": {
            "type": "QuoteLineItem",
            "method": "DELETE",
            "id": "0Q0xx0000004E2mYLK"
          }
        }
      }
    ]
  }
}
```

```
{
   "pricingPref": "Force",
   "configurationInput": "skip",
   "graph": {
      "graphId": "groupLines",
      "records": [
         {
            "referenceId": "refQuote",
            "record": {
               "attributes": {
                  "type": "Quote",
                  "method": "PATCH",
                  "id":"0Q0xx0000004C99CAE"
               },
               "Name": "From Place Quote API"
            }
         },
         {
            "referenceId": "refQlg1",
            "record": {
               "attributes": {
                  "type": "QuoteLineGroup",
                  "method": "POST",
                  "action": "GroupBy",
                  "criteria": {
                    "Quantity": 1
                  }
               },
               "Name": "From Place Quote API Group",
               "QuoteId": "@{refQuote.id}"
            }
         },
         {
            "referenceId": "refQuoteItem1",
            "record": {
               "attributes": {
                  "type": "QuoteLineItem",
                  "method": "PATCH",
                  "id":"0QLxx0000004DJcGAM"
               },
               "QuoteLineGroupId": "@{refQlg1.id}",
               "Quantity": 1
            }
         }
      ]
   }
}
```

## Related Topics

- Configuration Options Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configuration_options_input.htm)
- Object
                        Graph Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_object_graph_input.htm)
- Place Quote (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_place_quote_output.htm)
