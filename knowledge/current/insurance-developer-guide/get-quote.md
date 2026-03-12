---
title: "Get Quote"
domain: insurance-developer-guide
topic: get-quote
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.487Z
estimatedTokens: 180
keywords: [Quote, Output, representation]
---

# Get Quote

> Output representation of the details of the get quote details.

# Get Quote

Output representation of the details of the get quote details.

JSON example

This example shows a sample response when you pass a quote ID in the get quote details request.

```

```

This example shows a sample response when you pass the filter and non-filter request parameters.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of the insurance context. | Small, 63.0 | 63.0 |
| errors | Error Response | List of errors encountered during the processing of the API request. | Small, 63.0 | 63.0 |
| insuranceContext | Map<String, Object> | List of insurance context details. | Small, 63.0 | 63.0 |

## Code Examples

```
{
    "contextId": "fa917d24acfaa40c14943d7009f096b2952c974a6e940d1302c465cd3abaee3d",
    "errors": [],
    "insuranceContext": {
        "SalesTransaction": [
            {
                "Status": "Draft",
                "Account": null,
                "BillingCity": null,
                "Subtotal": 1350,
                "businessObjectType": "Quote",
                "SalesTransactionName": "Multi Auto",
                "TotalAmount": 1350,
                "ShippingStreet": null,
                "SalesTransactionItem": [
                    {
                        "ProrationPolicy": "0muxx000000004sAAA",
                        "ProductName": "Medical Payments",
                        "ProductCode": "STA-3",
                        "ProductSellingModel": "0jPxx000000004sEAA",
                        "SpecificationType": "Coverage",
                        "TaxTreatment": "1ttxx000000004rAAA",
                        "SalesTransactionItemParent": "0Q0xx0000004CE1CAM",
                        "Quantity": 1,
                        "Product": "01txx0000006i7KAAQ",
                        "businessObjectType": "QuoteLineItem",
                        "PricebookEntry": "01uxx0000008ybrAAA",
                        "PricingTermCount": 1,
                        "StartDate": "2023-10-19T00:00:00Z",
                        "NetUnitPrice": 750,
                        "UnitPrice": 750,
                        "id": "0QLxx0000004CIpGAM"
                    },
                    {
                        "ProrationPolicy": null,
                        "ProductName": "Collision",
                        "ProductCode": "STA-2",
                        "ProductSellingModel": "0jPxx000000004tEAA",
                        "SpecificationType": "Coverage",
                        "TaxTreatment": "1ttxx000000004rAAA",
                        "SalesTransactionItemParent": "0Q0xx0000004CE1CAM",
                        "Quantity": 1,
                        "Product": "01txx0000006i7JAAQ",
                        "businessObjectType": "QuoteLineItem",
                        "PricebookEntry": "01uxx0000008ybsAAA",
                        "PricingTermCount": 1,
                        "StartDate": null,
                        "NetUnitPrice": 500,
                        "UnitPrice": 500,
                        "id": "0QLxx0000004CIqGAM"
                    }
                ],
                "BillingCountry": null,
                "BillingStreet": null,
                "Pricebook": "01sxx0000005pyfAAA",
                "Opportunity": null,
                "ShippingPostalCode": null,
                "SalesTransactionSource": "0Q0xx0000004CE1CAM",
                "ShippingCountry": null,
                "ShippingCity": null,
                "ShippingState": null,
                "BillingPostalCode": null,
                "id": "0Q0xx0000004CE1CAM",
                "Contract": null,
                "BillingState": null
            }
        ]
    }
}
```

```
//GET  /connect/insurance/quotes/0Q0xx0000004CIiCAM?contextId=0000000i18tq18g002917545349255616564529f415d45c4b1b1ea08747a2195&filter[ProductSpec][eq]=InsuredItem&filter[DYN__Auto_Value][gt]=60000&returnChildrenNodes=true&includeClause=true

{
  "contextId": "0000000i18tq18g002917545349255616564529f415d45c4b1b1ea08747a2195",
  "errors": [],
  "insuranceContext": {
    "SalesTransaction": [
      {
        "Status": "Draft",
        "Account": null,
        "BillingCity": null,
        "Subtotal": 1350,
        "businessObjectType": "Quote",
        "SalesTransactionName": "Multi Auto",
        "TotalAmount": 1350,
        "ShippingStreet": null,
        "SalesTransactionItem": [
          {
            "businessObjectType": "QuoteLineItem",
            "Product": "01txx0000006i3EAAQ",
            "DYN__License_State": null,
            "ValidationResult": null,
            "DYN__AssetRecordName": "02ixx0000004HI3AAM",
            "PolicyPremium": null,
            "SalesTransactionSourceAsset": null,
            "PeriodBoundaryStartMonth": null,
            "ProratedQLITaxAmount": 0,
            "id": "0QLxx0000004CozGAE",
            "STICurrencyIsoCode__std": null,
            "IntermediateVariableOne": null,
            "ProductCode": "auto",
            "SalesTrxnItemRelatedObject": [
              {
                "RelatedObject": "02ixx0000004HI3AAM",
                "ParentReference": "0QLxx0000004CozGAE",
                "RelatedObjectName": "Asset",
                "QuoteLineItem": "0QLxx0000004CozGAE",
                "businessObjectType": "QuoteLineItemRelatedObject",
                "id": "1A2xx0000004CNZCA2",
                "UsageType": "ExtendedAttribute"
              }
            ],
            "SalesTransactionItemInsClause__std": [
              {
                "SalesTranxItemInsClauseConstraintModelName__std": "Q2Blitz_V1",
                "ParentReference": "0QLSB000000b8Q34AI",
                "SalesTranxItemInsClauseName__std": "FreeLookPeriodClause",
                "businessObjectType": "QuoteLineItemInsProductClause",
                "SalesTranxItemInsClauseText__std": "On Collision, Auto Added, only eligible when collision deductible is 100. Deductible is 100.",
                "InsuranceProductClause__std": "1T8SB00000000Xt0AI",
                "id": "9TeSB000004Ny7d0AC",
                "SalesTranxItemInsClauseEffectiveDate__std": "2025-08-01",
                "SalesTranxItemInsClauseExpirationDate__std": "2025-08-31",
                "SalesTranxItemInsClauseCreationMethod__std": "AutoAdded",
                "SalesTranxItemInsClauseParent__std": "0QLSB000000b8Q34AI",
                "SalesTranxItemInsClauseDescription__std": null
              }
            ],
            "Subtotal": 320,
            "LineItemPath": "0QLxx0000004Cp1GAE/0QLxx0000004CozGAE",
            "PricebookEntry": "01uxx0000008yXWAAY",
            "DiscountAmount": null,
            "NetUnitPrice": 320,
            "DYN__Is_Electric_Vehicle": false,
            "ParentReference": "0Q0xx0000004CIiCAM",
            "DYN__Model": "A3",
            "EndQuantity": 1,
            "NetTotalPrice": 320,
            "TotalLineAmount": 320,
            "UnitPrice": 320,
            "DYN__Auto_Value": 100000,
            "SalesTrxnItemRelationship": [
              {
                "ParentReference": "0QLxx0000004CozGAE",
                "AssociatedItem": "0QLxx0000004CozGAE",
                "MainItemRole": "Bundle",
                "ProductRelatedComponent": "0dSxx000000001EEAQ",
                "businessObjectType": "QuoteLineRelationship",
                "AssociatedItemPricing": "IncludedInBundlePrice",
                "ProductRelationshipType": "0yoxx0000000001AAA",
                "RootItemProductCode": "autoSilver",
                "IsPriceInclusive": true,
                "RootItem": "0QLxx0000004Cp1GAE",
                "RootItemProductSellingModel": "0jPxx0000000001EAA",
                "MainItem": "0QLxx0000004Cp1GAE",
                "AssociatedQuantScaleMethod": "Proportional",
                "id": "0yQxx00000000RSEAY",
                "AssociatedItemRole": "BundleComponent",
                "SalesTrnItemRelationshipParent": "0Q0xx0000004CIiCAM",
                "MainItemProduct": "01txx0000006i3DAAQ",
                "MainItemProductSellingModel": "0jPxx0000000001EAA",
                "RootItemProduct": "01txx0000006i3DAAQ"
              }
            ],
            "ProductSpec": "InsuredItem",
            "SalesTransactionItemAttribute": [
              {
                "AttributeValue": null,
                "ParentReference": "0QLxx0000004CozGAE",
                "hasObjectRef": null,
                "businessObjectType": "QuoteLineItemAttribute",
                "AttributeDefinitionCode": "LicenseNumber",
                "SalesTransactionItemAttrParent": "0QLxx0000004CozGAE",
                "AttributeDeveloperName": "License_Number",
                "AttributeKey": "0tjxx0000000013AAA",
                "AttributePicklistValue": null,
                "IsPriceImpacting": null,
                "AttributeName": "License Number",
                "id": "0zuxx00000001vWAAQ"
              }
            ],
            "BillingCountry": null,
            "StandardTaxAmount": 0,
            "BillingStreet": null,
            "PriceAdjustmentSchedule": null,
            "SalesTransactionSource": "0Q0xx0000004CIiCAM",
            "TotalStandardAmount": 640,
            "EffectiveDate": null
          }
        ],
        "DeletedSTIIds": []
      }
    ]
  }
}
```
