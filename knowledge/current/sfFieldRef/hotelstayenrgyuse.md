---
title: "HotelStayEnrgyUse"
domain: sfFieldRef
topic: hotelstayenrgyuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.596Z
estimatedTokens: 559
keywords: [HotelStayEnrgyUse, energy, consumption, hotel, stay]
---

# HotelStayEnrgyUse

> Represents the energy consumption related to hotel stay.

# HotelStayEnrgyUse

Represents the energy consumption related to hotel stay.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see HotelStayEnrgyUse in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CarbonFootprintReportDate | Carbon Footprint Report Date | date |  |  |  |  |
| CostCenter | Cost Center | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmissionFctrKgCo2eRoomPerNight | Emissions Factor/Room per Night (kg CO2e) | double |  |  | 18 | 2 |
| EndDate | End Date | date |  |  |  |  |
| HotelCity | Hotel City | string |  | 18 |  |  |
| HotelCountry | Hotel Country | picklist |  | 255 |  |  |
| HotelName | Hotel Name | string |  | 255 |  |  |
| HotelStayEmssnFctrId | Hotel Stay Emissions Factor ID | reference |  | 18 |  |  |
| Id | Hotel Stay Energy Use ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RoomCount | Number of Rooms | double |  |  | 18 | 0 |
| RoomType | Room Type | string |  | 255 |  |  |
| Scope3CrbnFtprntId | Scope 3 Carbon Footprint ID | reference |  | 18 |  |  |
| Scope3EmissionsInTco2e | Scope 3 Emissions (tCO2e) | double |  |  | 18 | 4 |
| Scope3EmssnSrcId | Scope 3 Emissions Source ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| StayNightsCount | Number of Nights | double |  |  | 18 | 0 |
| SuplScope3Emissions | Supplemental Scope 3 Emissions | double |  |  | 18 | 5 |
| SupplierId | Supplier ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TravelerName | Traveler Name | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
