---
title: "ProductEmissionsFactor"
domain: sfFieldRef
topic: productemissionsfactor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.462Z
estimatedTokens: 437
keywords: [ProductEmissionsFactor, emissions, factors, quantifying, product, supply-chain]
---

# ProductEmissionsFactor

> Represents information about the emissions factors used in quantifying the
         emissions by a product in the supply-chain.

# ProductEmissionsFactor

Represents information about the emissions factors used in quantifying the emissions by a product in the supply-chain.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ProductEmissionsFactor in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmssnFctrDataSource | Emissions Factor Data Source | textarea |  | 32000 |  |  |
| EmssnFctrDataSourceType | Emissions Factor Data Source Type | picklist |  | 40 |  |  |
| EmssnFctrUpdateYear | Emissions Factor Update Year | picklist |  | 255 |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| Id | Product Emissions Factor ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| ReferenceDataLoadLogId | Reference Data Load Log ID | reference |  | 18 |  |  |
| SupplierId | Supplier ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalEmissionsValue | Total Emissions Value (tCO2e/UoM) | double |  |  | 18 | 8 |
| UnitOfMeasure | Unit of Measure | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
