---
title: "EnergyAttrCertCredit"
domain: sfFieldRef
topic: energyattrcertcredit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.126Z
estimatedTokens: 318
keywords: [EnergyAttrCertCredit, energy, attribute, certificate, credits, purchase]
---

# EnergyAttrCertCredit

> Represents information about the energy attribute certificate credits
         related to energy attribute certificate purchase.

# EnergyAttrCertCredit

Represents information about the energy attribute certificate credits related to energy attribute certificate purchase.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EnergyAttrCertCredit in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditsPurchasedInMwh | Credits Purchased (MWh) | double |  |  | 18 | 4 |
| EnergyAttrCertPurchaseId | Energy Attribute Certificate Purchase ID | reference |  | 18 |  |  |
| Id | Energy Attribute Certificate Credit ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
