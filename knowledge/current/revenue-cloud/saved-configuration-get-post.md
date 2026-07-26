---
title: "Saved Configuration (GET, POST)"
domain: revenue-cloud
topic: saved-configuration-get-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-07-26T01:59:42.294Z
estimatedTokens: 472
keywords: [Saved, Configuration, POST, Save, reuse, record's, configurations, record]
---

> Save and reuse a record's configurations, and get a list of the saved configurations
    for a record.

# Saved Configuration (GET, POST)

Save and reuse a record's configurations, and get a list of the saved configurations for a record.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| referenceRecordId | String | ID of the record whose saved configurations must be retrieved. | Required | 63.0 |

Response body for GET

[Configuration List](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_favorite_list_output_represenation.htm "Output representation of the details of the saved configuration.")

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| data | String | JSON object that contains the details of the sales transaction, formatted as a string. | Optional | 63.0 |
| description | String | Description of the saved configuration. | Optional | 63.0 |
| name | String | Name of the saved configuration. | Optional | 63.0 |
| referenceRecord​Id | String | ID of the record for which the configuration must be saved. | Required | 63.0 |

Response body for POST

[Configuration Record Save](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_create_favorite_output.htm "Output representation of the details of a saved configuration.")

#### See Also

-   [*Salesforce Help*: Considerations to Save and Reuse Configurations](https://help.salesforce.com/s/articleView?id=ind.product_configurator_considerations_to_save_and_reuse_configurations.htm&language=en_US "Salesforce Help: Considerations to Save and Reuse Configurations - HTML (New Window)")

## Code Examples

```
/connect/cpq/configurator/saved-configuration
```

```
https://yourInstance.salesforce.com/services/data/v67.0/connect/cpq/configurator/saved-configuration
```

```
{
  "data": "{"LegalEntity":null,"ProductName":"Monitor","businessObjectType":"QuoteLineItem","Product":"01txx0000006i2aAAA","ItemIsPrimarySegment":false,"ListPrice":144.99,"ValidationResult":null,"StartDate":null,"ContractVolumePasId":null,"BillingTreatment":null,"PeriodBoundaryStartMonth":null,"SalesTransactionSourceAsset":null,"id":"0QLxx0000004C9VGAU","PartnerDiscountPercent":10,"PriceWaterFall":null,"BillingFrequency":null,"ProductCode":"MO001","DerivedPricingAttribute":false,"TaxTreatment":null,"Subtotal":1739.88,"ItemRampIdentifier":null,"ItemSegmentName":null,"SalesTransactionItemAttribute":[{"AttributeKey":"0tjxx0000000001AAA","AttributeValue":"1080p Built-in Display","ParentReference":"0QLxx0000004C9VGAU","AttributePicklistValue":"0v6xx0000000001AAA","IsPriceImpacting":false,"businessObjectType":"QuoteLineItemAttribute","AttributeName":"Display","id":"0zuxx000000000FAAQ","AttributeDefinitionCode":null,"SalesTransactionItemAttrParent":"0QLxx0000004C9VGAU"},{"AttributeKey":"0tjxx0000000009AAA","AttributeValue":"24 Inch","ParentReference":"0QLxx0000004C9VGAU","AttributePicklistValue":"0v6xx000000000GAAQ","IsPriceImpacting":false,"businessObjectType":"QuoteLineItemAttribute","AttributeName":"Display_Size","id":"0zuxx000000000GAAQ","AttributeDefinitionCode":null,"SalesTransactionItemAttrParent":"0QLxx0000004C9VGAU"}],"PricebookEntry":"01uxx0000008yX0AAI","DiscountAmount":null,"PricingTermCount":0,"SubscriptionTermUnit":null,"NetUnitPrice":144.99,"ItemEffectiveGrantDate":null,"ProductCategory":null,"SalesTransactionAction":null,"SalesTransactionActionType":null,"SalesTransactionItemGroup":null,"PeriodBoundaryDay":null,"SalesTrxnItemDescription":null,"LineItemDistributionType":null,"ProrationPolicy":null,"ContractDiscountType":null,"TransactionType":null,"ParentReference":"0Q0xx0000004C92CAE","Discount":null,"PricingTermUnit":null,"ProductSellingModel":"0jPxx0000000001EAA","PricingSource":null,"StockKeepingUnit":null,"PartnerUnitPrice":130.491,"ItemTotalAdjustmentAmount":0,"SalesTransactionItemSource":"0QLxx0000004C9VGAU","ContractAttributePasId":null,"SubscriptionTerm":null,"SellingModelType":"OneTime","EndQuantity":12,"NetTotalPrice":1739.88,"TotalLineAmount":1739.88,"ItemSegmentType":null,"ProductBasedOn":"11Bxx000002C1nqEAC","Deleted":false,"BillingReference":null,"ArePartialPeriodsAllowed":false,"ItemRecordedPrice":null,"CustomProductName":null,"ItemSegmentIdentifier":null,"SalesTransactionItemParent":"0Q0xx0000004C92CAE","Quantity":12,"PeriodBoundary":null,"ContractDiscountValue":null,"LineItemDiscountValue":null,"ContractId":null,"EndDate":null,"ItemGroupSummarySubtotal":null,"IsContracted":false,"UnitPrice":144.99,"StartQuantity":null,"ContractPrice":null,"TotalPrice":1739.88,"LineItemDiscountType":null,"ItemPath":"01txx0000006i2aAAA","productKey":["0QLxx0000004C9VGAU"]}",
  "description": "This configuration is saved for reuse.",
  "name": "Favorite Configuration",
  "referenceRecordId": "01txx0000006iCFAAY"
}
```

## Related Topics

- Configuration
              List (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_favorite_list_output_represenation.htm)
- Configuration Record
            Save (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_create_favorite_output.htm)
