---
title: "Place Quote Input"
domain: revenue-cloud
topic: place-quote-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.256Z
estimatedTokens: 566
keywords: [Place, Quote, Input, representation, request, create, update, quote.]
---

# Place Quote Input

> Input representation of the request to create or update a quote.

# Place Quote Input

Input representation of the request to create or update a quote.

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

## Code Examples

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

```
{
  "pricingPref": "Force",
  "graph": {
    "graphId": "test",
    "records": [
      {
        "referenceId": "refQuote",
        "record": {
          "attributes": {
            "type": "Quote",
            "method": "PATCH",
            "id": "0Q0xx0000004CAmCAM"
          }
        }
      },
      {
        "referenceId": "refQlg1",
        "record": {
          "attributes": {
            "type": "QuoteLineGroup",
            "method": "POST",
            "action": "GroupAll"
          },
          "Name": "From PQ API Group",
          "QuoteId": "@{refQuote.id}"
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
      "graphId": "test",
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
                  "method": "DELETE",
                  "id": "{GroupId}",
                  "action": "Ungroup"
               }
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
