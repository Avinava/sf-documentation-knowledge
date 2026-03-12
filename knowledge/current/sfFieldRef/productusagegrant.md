---
title: "ProductUsageGrant"
domain: sfFieldRef
topic: productusagegrant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.937Z
estimatedTokens: 586
keywords: [ProductUsageGrant, grant, associated, resource, product, service, purchased, quantity, renewal, rollover, policy, validity, API, version, 62.0]
---

# ProductUsageGrant

> Represents the details of a grant associated with a resource, product, or
         service, such as the purchased quantity, renewal and rollover policy, and validity of the
         grant. This object is available in API version 62.0 and later.

# ProductUsageGrant

Represents the details of a grant associated with a resource, product, or service, such as the purchased quantity, renewal and rollover policy, and validity of the grant. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ProductUsageGrant in the Usage Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DrawdownOrder | Drawdown Order | picklist |  | 255 |  |  |
| EffectiveEndDate | Effective End Date | datetime |  |  |  |  |
| EffectiveStartDate | Effective Start Date | datetime |  |  |  |  |
| Id | Product Usage Grant ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Label | Label | string |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OverageChargeable | Overage Chargeable | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProductOfferId | Product ID | reference |  | 18 |  |  |
| ProductUsageGrantNum | Name | string |  | 255 |  |  |
| ProductUsageResourceId | Product Usage Resource ID | reference |  | 18 |  |  |
| Quantity | Quantity | double |  |  | 18 | 2 |
| RenewalPolicyId | Usage Grant Refresh Policy ID | reference |  | 18 |  |  |
| RolloverPolicyId | Usage Grant Rollover Policy ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |
| UnitOfMeasureClassId | Unit of Measure Class ID | reference |  | 18 |  |  |
| UnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |
| UsageDefinitionProductId | Product ID | reference |  | 18 |  |  |
| UsageResourceId | Usage Resource ID | reference |  | 18 |  |  |
| ValidityPeriodTerm | Validity Period Term | int | 9 |  |  |  |
| ValidityPeriodUnit | Validity Period Unit | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
