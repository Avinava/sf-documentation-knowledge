---
title: "LegalEntity"
domain: sfFieldRef
topic: legalentity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.244Z
estimatedTokens: 531
keywords: [LegalEntity, way, organization, structured, legal, entity, comprise, API, version, 48.0, later]
---

# LegalEntity

> Represents the way an organization is structured. An organization can be a
      single legal entity or it can comprise more than one legal entity. This object is
    available in API version 48.0 and later.

# LegalEntity

Represents the way an organization is structured. An organization can be a single legal entity or it can comprise more than one legal entity. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LegalEntity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_legalentity.htm "HTML (New Window)") in the Billing Guide, Financial Services Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CompanyName | Company Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 255 |  |  |
| Id | Legal Entity ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LegalEntityAddress | Address | address |  |  |  |  |
| LegalEntityCity | City | string |  | 40 |  |  |
| LegalEntityCountry | Country | string |  | 80 |  |  |
| LegalEntityGeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| LegalEntityLatitude | Latitude | double |  |  | 18 | 15 |
| LegalEntityLongitude | Longitude | double |  |  | 18 | 15 |
| LegalEntityPostalCode | Postal Code | string |  | 20 |  |  |
| LegalEntityState | State | string |  | 80 |  |  |
| LegalEntityStreet | Street | textarea |  | 255 |  |  |
| Name | Legal Entity Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
