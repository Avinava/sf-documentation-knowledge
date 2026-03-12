---
title: "ServiceResource"
domain: sfFieldRef
topic: serviceresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.533Z
estimatedTokens: 600
keywords: [ServiceResource, service, technician, crew, Salesforce, Scheduler, agent, Workforce, Engagement, API, version, 38.0, later]
---

# ServiceResource

> Represents a service technician or service crew in Field Service and
			Salesforce Scheduler, or an agent in Workforce Engagement. This object is available
		in API version 38.0 and later.

# ServiceResource

Represents a service technician or service crew in Field Service and Salesforce Scheduler, or an agent in Workforce Engagement. This object is available in API version 38.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ServiceResource](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceresource.htm "HTML (New Window)") in the Field Service Developer Guide, Object Reference for the Salesforce Platform, Salesforce Scheduler Developer Guide, and Work.com Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AssetId | Asset ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Id | Resource ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsCapacityBased | Capacity-Based | boolean |  |  |  |  |
| IsOptimizationCapable | Include in Scheduling Optimization | boolean |  |  |  |  |
| IsPrimary | Main | boolean |  |  |  |  |
| LastKnownLatitude | Last Known Latitude | double |  |  | 18 | 15 |
| LastKnownLocation | Last Known Location | location | 0 | 0 | 0 | 0 |
| LastKnownLocationDate | Last Known Location Date | datetime |  |  |  |  |
| LastKnownLongitude | Last Known Longitude | double |  |  | 18 | 15 |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocationId | Location ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RelatedRecordId | User ID | reference |  | 18 |  |  |
| ResourceType | Resource Type | picklist |  | 255 |  |  |
| SchedulingConstraintId | Scheduling Constraint ID | reference |  | 18 |  |  |
| ServiceCrewId | Service Crew ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
