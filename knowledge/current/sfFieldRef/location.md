---
title: "Location"
domain: sfFieldRef
topic: location
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.891Z
estimatedTokens: 948
keywords: [Location, warehouse, service, vehicle, work, site, element, region, team, performs, API, version, 49.0, later, associate]
---

# Location

> Represents a warehouse, service vehicle, work site, or other element
			of the region where your team performs field service work. In API version 49.0 and
			later, you can associate activities with specific locations. Activities, such as the
			tasks and events related to a location, appear in the activities timeline when you view
			the location detail page. Also in API version 49.0 and later, Work.com users can view
			Employees as a related list on Location records. In API version 51.0 and later, this
			object is available for Omnichannel Inventory and represents physical locations where
			inventory is available for fulfilling orders.

# Location

Represents a warehouse, service vehicle, work site, or other element of the region where your team performs field service work. In API version 49.0 and later, you can associate activities with specific locations. Activities, such as the tasks and events related to a location, appear in the activities timeline when you view the location detail page. Also in API version 49.0 and later, Work.com users can view Employees as a related list on Location records. In API version 51.0 and later, this object is available for Omnichannel Inventory and represents physical locations where inventory is available for fulfilling orders.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Location](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_location.htm "HTML (New Window)") in the Education Cloud Developer Guide, Energy and Utilities Cloud Developer Guide, Field Service Developer Guide, Life Sciences Cloud Developer Guide, Object Reference for the Salesforce Platform, Public Sector Solutions Developer Guide, and Work.com Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CloseDate | Close Date | date |  |  |  |  |
| ConstructionEndDate | Construction End Date | date |  |  |  |  |
| ConstructionStartDate | Construction Start Date | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DefaultPickupTime | Default Pickup Time | time |  |  |  |  |
| DefaultProcessingTime | Default Processing Time | int | 9 |  |  |  |
| DefaultProcessingTimeUnit | Default Processing Time Unit | picklist |  | 255 |  |  |
| Description | Description | string |  | 255 |  |  |
| DrivingDirections | Driving Directions | string |  | 1000 |  |  |
| Email | Email | email |  | 255 |  |  |
| ExternalReference | External Reference | string |  | 255 |  |  |
| Fax | Fax | phone |  | 40 |  |  |
| FulfillingBusinessHoursId | Business Hours ID | reference |  | 18 |  |  |
| Id | Location ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsInventoryLocation | Inventory Location | boolean |  |  |  |  |
| IsMobile | Mobile Location | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| Location | Location | location | 0 | 0 | 0 | 0 |
| LocationLevel | Location Level | int | 9 |  |  |  |
| LocationType | Location Type | picklist |  | 40 |  |  |
| LogoId | Asset File ID | reference |  | 18 |  |  |
| Longitude | Longitude | double |  |  | 18 | 15 |
| Mobile | Mobile | phone |  | 40 |  |  |
| Name | Location Name | string |  | 255 |  |  |
| OpenDate | Open Date | date |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentLocationId | Parent Location ID | reference |  | 18 |  |  |
| Phone | Phone | phone |  | 40 |  |  |
| PossessionDate | Possession Date | date |  |  |  |  |
| RemodelEndDate | Remodel End Date | date |  |  |  |  |
| RemodelStartDate | Remodel Start Date | date |  |  |  |  |
| RootLocationId | Root Location ID | reference |  | 18 |  |  |
| ShouldSyncWithOci | Sync with OCI | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeZone | Time Zone | picklist |  | 255 |  |  |
| VisitorAddressId | Address ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
