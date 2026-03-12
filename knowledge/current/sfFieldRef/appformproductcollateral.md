---
title: "AppFormProductCollateral"
domain: sfFieldRef
topic: appformproductcollateral
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.367Z
estimatedTokens: 395
keywords: [AppFormProductCollateral, physical, financial, asset, pledged, collateral, application, form, product, API, version, 65.0, later, Digital, Lending]
---

# AppFormProductCollateral

> Represents a physical or financial asset that is pledged as collateral for an
         application form product. This object is available in API version 65.0 and later.
      Available with Digital Lending permission set.

# AppFormProductCollateral

Represents a physical or financial asset that is pledged as collateral for an application form product. This object is available in API version 65.0 and later. Available with Digital Lending permission set.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AppFormProductCollateral in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicationFormProductId | Application Form Product ID | reference |  | 18 |  |  |
| CollateralAssetId | Collateral Asset ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Application Form Product Collateral ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PartyFinancialAssetId | Party Financial Asset ID | reference |  | 18 |  |  |
| PartyFinancialAssetLienId | Party Financial Asset Lien ID | reference |  | 18 |  |  |
| PledgedValue | Pledged Value | currency |  |  | 18 | 2 |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
