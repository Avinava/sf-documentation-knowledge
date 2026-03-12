---
title: "BindingObjectRateCardEntry"
domain: sfFieldRef
topic: bindingobjectratecardentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.107Z
estimatedTokens: 431
keywords: [BindingObjectRateCardEntry, rate, card, entry, usage, resource, associated, binding, that's, charge, over, consumption, API, version, 64.0]
---

# BindingObjectRateCardEntry

> Represents the rate card entry details of the usage resource
         associated with the binding object that's used to charge over consumption. This object
      is available in API version 64.0 and later.

# BindingObjectRateCardEntry

Represents the rate card entry details of the usage resource associated with the binding object that's used to charge over consumption. This object is available in API version 64.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BindingObjectRateCardEntry in the Rate Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BindingObjectId | Binding Object ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| Id | Binding Object Rate Card Entry ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NegotiatedRate | Negotiated Rate | double |  |  | 18 | 6 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RateCardEntryId | Rate Card Entry ID | reference |  | 18 |  |  |
| RateCardId | Rate Card ID | reference |  | 18 |  |  |
| RateCardType | Rate Card Type | picklist |  | 255 |  |  |
| RateUnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageResourceId | Usage Resource ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
