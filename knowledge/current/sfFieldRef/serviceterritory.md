---
title: "ServiceTerritory"
domain: sfFieldRef
topic: serviceterritory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.624Z
estimatedTokens: 716
keywords: [ServiceTerritory, geographic, functional, region, work, performed, Service, Salesforce, Scheduler, Workforce, Engagement, API, version, 38.0, later]
---

# ServiceTerritory

> Represents a geographic or functional region in which work can be
			performed in Field Service, Salesforce Scheduler, or Workforce Engagement. This
		object is available in API version 38.0 and later.

# ServiceTerritory

Represents a geographic or functional region in which work can be performed in Field Service, Salesforce Scheduler, or Workforce Engagement. This object is available in API version 38.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ServiceTerritory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceterritory.htm "HTML (New Window)") in the Automotive Cloud Developer Guide, Field Service Developer Guide, Object Reference for the Salesforce Platform, Salesforce Scheduler Developer Guide, and Work.com Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Address | Address | address |  |  |  |  |
| AvgTravelTime | Average Travel Time (in minutes) | int | 9 |  |  |  |
| City | City | string |  | 40 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| Id | Territory ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| Longitude | Longitude | double |  |  | 18 | 15 |
| Name | Name | string |  | 255 |  |  |
| OperatingHoursId | Operating Hour ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentTerritoryId | Parent Territory ID | reference |  | 18 |  |  |
| PostalCode | Zip/Postal Code | string |  | 20 |  |  |
| PricebookId | Price Book ID | reference |  | 18 |  |  |
| SchedulingConstraintId | Scheduling Constraint ID | reference |  | 18 |  |  |
| SelfCheckInUrl | Self Check In URL | url |  | 1000 |  |  |
| ServiceAppointmentLimitType | Service Appointment Limit Type | picklist |  | 255 |  |  |
| State | State/Province | string |  | 80 |  |  |
| Street | Address | textarea |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TopLevelTerritoryId | Top-Level Territory ID | reference |  | 18 |  |  |
| TravelModeId | Travel Mode ID | reference |  | 18 |  |  |
| TravelTimeBuffer | Travel Time Buffer (in minutes) | int | 9 |  |  |  |
| TypicalInTerritoryTravelTime | Typical In-Territory Travel Time (Minutes) | double |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
