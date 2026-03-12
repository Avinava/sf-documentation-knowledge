---
title: "WstDispoEmssnFctrSetItm"
domain: sfFieldRef
topic: wstdispoemssnfctrsetitm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.884Z
estimatedTokens: 418
keywords: [WstDispoEmssnFctrSetItm, individual, emissions, factors, scope, waste, handling, disposal]
---

# WstDispoEmssnFctrSetItm

> Represents the individual emissions factors for scope 3 waste handling based
         on the waste type and disposal type.

# WstDispoEmssnFctrSetItm

Represents the individual emissions factors for scope 3 waste handling based on the waste type and disposal type.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see WstDispoEmssnFctrSetItm in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DisposalType | Disposal Type | picklist |  | 40 |  |  |
| EmissionsFactorValue | Emissions Factor Value | double |  |  | 18 | 4 |
| EmissionsFactorValueUnit | Emissions Factor Value Unit | picklist |  | 255 |  |  |
| EmssnFctrTco2eTonneWstMtrl | Emissions Factor Value (tCO2e/Tonne Waste Material) | double |  |  | 18 | 4 |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| Id | Waste Disposal Emissions Factor Set Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParentEmissionFactorId | Waste Disposal Emissions Factor ID | reference |  | 18 |  |  |
| ReferenceDataLoadLogId | Reference Data Load Log ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WasteType | Waste Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
