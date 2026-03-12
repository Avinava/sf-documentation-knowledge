---
title: "Sales Agreement (POST)"
domain: mfg-api-devguide
topic: sales-agreement-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.966Z
estimatedTokens: 652
keywords: [Sales, Agreement, POST, external, source, including, quote, opportunity, custom, Prerequisite]
---

# Sales Agreement (POST)

> Create
            a sales agreement from an external source, including quote, opportunity, or custom
            object.

# Sales Agreement (POST)

Create a sales agreement from an external source, including quote, opportunity, or custom object.

Resource

```

```

Available version

51.0

Requires Chatter

No

HTTP methods

POST

Special Access Rules

To use this resource, your Salesforce org must have the Manufacturing Cloud license with the Sales Agreements permission set.

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| salesAgreement​​​DefaultValues | Sales Agreement Default​​ Fields Input[] | Default field values for the SalesAgreement and SalesAgreementProduct entities that aren’t defined in the mapping definition.NoteYou can remove a mapping field from the definition by providing the output field value as blank for SalesAgreement or SalesAgreementProduct. | Optional | 51.0 |
| sourceObjectId | String | ID of the source object containing the mapping definition used to create the sales agreement record. | Required | 51.0 |

Response body for POST

[Sales Agreement Output](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_responses_sales_agreement.htm "Output representation of the sales agreement conversion result.")

## Prerequisite

Before you use the resource, use the new ConvertToSalesAgreement mapping usage type available in ObjectHierarchyRelationship settings to map an input object (quote or opportunity) to an output object (sales agreement) and define field mappings. All the products from the source object child entity will be added to the sales agreement. For example, see the [ObjectHierarchyRelationship](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_objecthierarchyrelationshipsettings_metadata_api.htm "Represents an organization’s custom field mappings for sales agreement conversion. Fields can be mapped from Opportunity and Quotes to SalesAgreement and SalesAgreementProduct.") metadata type for the mapping definition from Opportunity to SalesAgreement (parent level mapping) and OpportunityLineItem to SalesAgreementProduct (child level mapping). To use decimal values, map the quantity values to InitialPlannedQtyValue.

#### See Also

-   [SalesAgreement](https://developer.salesforce.com/docs/atlas.en-us.260.0.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_salesagreement.htm "SalesAgreement - HTML (New Window)")

-   [SalesAgreementProduct](https://developer.salesforce.com/docs/atlas.en-us.260.0.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_objects_salesagreementproduct.htm "SalesAgreementProduct - HTML (New Window)")

## Code Examples

```
/services/data/vXX.X/connect/manufacturing/sales-agreements
```

```
{
  "sourceObjectId": "0kFT1000000000RMAQ",
  "salesAgreementDefaultValues": {
      "salesAgreement": {
          "StartDate": "2020-01-01",
          "ScheduleFrequency": "Monthly",
          "ScheduleCount": "10"
      },
      "salesAgreementProduct": {
          "PricebookEntry": "01uxx00000091jOAAQ",
          "Name": "test-sap1",
          "InitialPlannedQuantity":"1"
      }
  }
}
```

## Related Topics

- Sales Agreement Default​​ Fields
                                                Input (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_requests_sales_agreement_default_fields_input.htm)
- Sales Agreement Output (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_responses_sales_agreement.htm)
- ObjectHierarchyRelationship (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_objecthierarchyrelationshipsettings_metadata_api.htm)
