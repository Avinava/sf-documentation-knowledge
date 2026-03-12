---
title: "Scope3EmssnSrc"
domain: sfFieldRef
topic: scope3emssnsrc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.033Z
estimatedTokens: 484
keywords: [Scope3EmssnSrc, scope, activities, source, greenhouse, gas, emissions]
---

# Scope3EmssnSrc

> Represents scope 3 activities that are the source of greenhouse gas
         emissions.

# Scope3EmssnSrc

Represents scope 3 activities that are the source of greenhouse gas emissions.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Scope3EmssnSrc in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AirTravelEmssnFctrId | Air Travel Emissions Factor ID | reference |  | 18 |  |  |
| BusinessRegion | Business Region | picklist |  | 40 |  |  |
| City | City | string |  | 255 |  |  |
| Country | Country | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| FrgtHaulingEmssnFctrId | Freight Hauling Emissions Factor ID | reference |  | 18 |  |  |
| GroundTravelEmssnFctrId | Ground Travel Emissions Factor ID | reference |  | 18 |  |  |
| HotelStayEmssnFctrId | Hotel Stay Emissions Factor ID | reference |  | 18 |  |  |
| Id | Scope 3 Emissions Source ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentEmissionSourceId | Scope 3 Emissions Source ID | reference |  | 18 |  |  |
| PostalCode | Postal Code | string |  | 20 |  |  |
| RentalCarEmssnFctrId | Rental Car Emissions Factor ID | reference |  | 18 |  |  |
| Scope3EmissionSourceType | Scope 3 Emissions Source Type | string |  | 255 |  |  |
| State | State | string |  | 128 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
