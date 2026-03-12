---
title: "Place Sales Transaction (POST)"
domain: comms-developer-guide
topic: place-sales-transaction-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.057Z
estimatedTokens: 1470
keywords: [Place, Sales, Transaction, POST, order, quote, integrated, pricing, configuration, Additionally, insert, line, items, calculate, estimated]
---

# Place Sales Transaction (POST)

> Create a sales transaction, such as an order or a quote, with
      integrated pricing and configuration. Additionally, update an order or a quote, and insert and
      delete order or quote line items to calculate the estimated tax.

# Place Sales Transaction (POST)

Create a sales transaction, such as an order or a quote, with integrated pricing and configuration. Additionally, update an order or a quote, and insert and delete order or quote line items to calculate the estimated tax.

You can also group order or quote line items based on location, work types, or departments, if groups are enabled for your org. Groups provide a visualization of the products to view large quotes.

Keep these considerations in mind when you use this API.

-   You can add up to 1000 quote line items for a quote, and 1000 order products for an order. For complex flows that involve a large volume of records, ensure that the number of line items that are sent to this API are within this limit.
-   A quote can have up to 3000 quote line item attributes, and an order can have up to 3000 order line item attributes.
-   This API doesn't support creation of amendment, renewal, or cancellation quote or order. Use the amendment, renewal, or cancellation APIs or invocable actions.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

POST

Request body for POST

JSON example

This is a sample request to create a sales transaction for a quote. This example also skips tax calculation by specifying a value for the optional taxPref property.

```

```

This sample request assigns a TransactionProcessingType record to a quote without any additional preferences. In this example, the TransactionType value for a record is set to a TransactionProcessingType record. See TransactionProcessingType tooling object for more details.

```

```

This is a sample request to insert, update, or delete a quote line item.

```

```

This is a sample request to define grouping of quote line items.

```

```

This is s a sample request for the initial grouping of the quote with all the quote lines assigned to the first group.

```

```

This is a sample request to ungroup a quote but retain the quote lines.

```

```

This is a sample request to create a new group.

```

```

This example shows a sample request to delete a group.

```

```

This is a sample request to group order items based on criteria.

```

```

This is a sample request to save changes to a ramp deal by using context ID. The context ID is returned by the Ramp Deal APIs. See [Create Ramp Deal (POST)](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_ramp_deal.htm "HTML (New Window)").

```

```

To see examples that specify actions to create ramp deals for groups, see Group Ramp Action Input.

To see examples that apply to usage-based products, see Usage-Based Product Input.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| catalogRates​Pref | String | Rate card entries defined in the catalog that must be fetched for sales items with usage-based pricing during the creation of the sales transaction. Valid values are:Fetch—Retrieves the rate card entries defined in the catalog for sales items during the creation of the sales transaction.Skip—Skips the retrieval of rate card entries for sales items during the creation of the sales transaction.The default value is Skip.This property is available when the Usage-Based Selling feature is enabled. | Optional | 63.0 |
| configuration​Pref | Configurator Preference Input | Configuration preference during the quote process. These preferences ensure that quotes are defined as per the requirement. | Optional | 63.0 |
| contextDetails | Context Input | Context details that are created for a sales transaction. | Required if the graph property isn’t specified. | 63.0 |
| graph | Object Graph Input | The sObject graph of the sales transaction to be ingested. You can perform create, update, or delete operations on objects from the Sales Transaction context definition by using this property. Additionally, perform create, update, or delete operations on custom objects and fields in your extended context definition.To create custom objects that are at the grandchildren level from a line item, you must create the hierarchy of objects until the grandchild object in the same request. | Required if the contextDetails property isn’t specified. | 63.0 |
| groupRampAction | String | Specifies the action ‌that you want to perform on group ramp segments. You can also convert a non-ramped group into a ramped group. Valid values are:AddProducts—Adds rampable products to group ramp segments.DeleteProducts—Deletes ramped products.EditGroup—Converts a non-ramped group into a group ramp segment, or edit group ramp segment attributes such as name and description, except the start and end dates.EditRampSchedule—Edits details of the group ramp segments, including start and end dates.DeleteSegment—Deletes the first or last segment in a group ramp schedule.ConvertToNonRampedGroup—Converts the first or last group ramp segment into a non-ramped group.To add or delete ramped line items from multiple group ramp segments, specify the applicable values in the graph property. See Group Ramp Action Input to refer to examples. | Optional | 65.0 |
| pricingPref | String | Pricing preference during the creation of a sales transaction. Valid values are:Force—Enforces pricing during the creation of sales transactions.Skip—Skips pricing during the creation of sales transactions.System—Determines whether a pricing calculation is required.The default value is System. | Optional | 63.0 |
| taxPref | String | Specifies whether to execute or skip the tax calculation step for each sales transaction record. Valid value is Skip. If you don't specify this value, then tax calculation request is performed by default. | Optional | 65.0 |

Response body for POST

Place Sales Transaction

## Code Examples

```
/connect/rev/sales-transaction/actions/place
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/rev/sales-transaction/actions/place
```

```
{
  "pricingPref": "System",
  "catalogRatesPref": "Skip",
  "configurationPref": {
    "configurationMethod": "Skip",
    "configurationOptions": {
      "validateProductCatalog": true,
      "validateAmendRenewCancel": true,
      "executeConfigurationRules": true,
      "addDefaultConfiguration": true
    }
  },
  "taxPref": "Skip",
  "contextDetails": {
    "contextId": "e055bb18-d4e8-41c3-881e-0132b9561708"
  },
  "graph": {
    "graphId": "createQuote",
    "records": [
      {
        "referenceId": "refQuote",
        "record": {
          "attributes": {
            "method": "POST",
            "type": "Quote"
          },
          "Name": "Quote_Acme",
          "Pricebook2Id": "01sDU000000JvhbYAC"
        }
      },
      {
        "referenceId": "refQuoteLine0",
        "record": {
          "attributes": {
            "type": "QuoteLineItem",
            "method": "POST"
          },
          "QuoteId": "@{refQuote.id}",
          "Product2Id": "01tDU000000F7b8YAC",
          "PricebookEntryId": "01uDU000000fxt2YAA",
          "UnitPrice": 100,
          "Quantity": "1",
          "StartDate": "2024-10-29",
          "EndDate": "2025-03-01",
          "PeriodBoundary": "Anniversary"
        }
      }
    ]
  }
}
```

```
{
  "pricingPref": "Force",
  "contextDetails": {
    "contextId": "f1c9e3e1c335f7959a88de09d3a867cc2b95e08709b99de8e2edeb8f5039e8ed",
    "scope": "Session"
  },
  "graph": {
    "graphId": "updateQuote",
    "records": [
      {
        "referenceId": "refQuote",
        "record": {
          "attributes": {
            "type": "Quote",
            "method": "POST"
          },
          "OpportunityId": "006xx000001a2oWAAQ",
          "PriceBook2Id": "01sxx0000005ptpAAA",
          "TransactionType": "SkipPricingAndRunTax",
          "Name": "Quote_No_Tax_System"
        }
      },
      {
        "referenceId": "refQLI1",
        "record": {
          "attributes": {
            "type": "QuoteLineItem",
            "method": "POST"
          },
          "QuoteId": "@{refQuote.id}",
          "UnitPrice": 49.99,
          "Product2Id": "01txx0000006i2aAAA",
          "PricebookEntryId": "01uxx0000008yX0AAI",
          "Quantity": 10
        }
      }
    ]
  }
}
```

```
{
  {
  "pricingPref": "System",
  "catalogRatesPref": "Skip",
  "configurationPref": {
    "configurationMethod": "Skip",
    "configurationOptions": {
      "validateProductCatalog": true,
      "validateAmendRenewCancel": true,
      "executeConfigurationRules": true,
      "addDefaultConfiguration": true
    }
  },
  "contextDetails": {
    "contextId": "e055bb18-d4e8-41c3-881e-0132b9561708"
  },
  "graph": {
    "graphId": "updateQuote",
    "records": [
      {
        "referenceId": "refQuote",
        "record": {
          "attributes": {
            "method": "PATCH",
            "type": "Quote",
            "id": "801xx000003GZ9bAAG"
          }
        }
      },
      {
        "referenceId": "refQuoteLine0",
        "record": {
          "attributes": {
            "type": "QuoteLineItem",
            "method": "PATCH",
            "id": "402xx000003KY5vJGH"
          },
          "Quantity": "5"
        }
      }
    ]
  }
}
```
