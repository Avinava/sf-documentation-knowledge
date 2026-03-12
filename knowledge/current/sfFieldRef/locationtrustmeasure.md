---
title: "LocationTrustMeasure"
domain: sfFieldRef
topic: locationtrustmeasure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.970Z
estimatedTokens: 460
keywords: [LocationTrustMeasure, COVID, safety, protocols, business, follows, enforcement, masks, social, distancing, cleanliness, capacity, limits, API, version]
---

# LocationTrustMeasure

> Represents the COVID safety protocols that your business follows. For example,
      enforcement of masks, social distancing, cleanliness, and capacity limits. This object is
    available in API version 50.0 and later.

# LocationTrustMeasure

Represents the COVID safety protocols that your business follows. For example, enforcement of masks, social distancing, cleanliness, and capacity limits. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LocationTrustMeasure](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_locationtrustmeasure.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| IconUrl | Icon URL | string |  | 255 |  |  |
| Id | Location Trust Measure ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsVisibleInPublic | Trust Measure Is Published | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocationExternalReference | Location External Reference | string |  | 255 |  |  |
| LocationId | Location ID | reference |  | 18 |  |  |
| Name | Location Trust Measure Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SortOrder | Display Order | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Title | string |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
