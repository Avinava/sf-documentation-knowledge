---
title: "AssignedResource"
domain: sfFieldRef
topic: assignedresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.798Z
estimatedTokens: 473
keywords: [AssignedResource, service, resource, assigned, appointment, Lightning, Scheduler, resources, appear, appointments, API, version, 38.0, later]
---

# AssignedResource

> Represents a service resource who is assigned to a service
			appointment in Field Service and Lightning Scheduler. Assigned resources appear in the
			Assigned Resources related list on service appointments. This object is available
		in API version 38.0 and later.

# AssignedResource

Represents a service resource who is assigned to a service appointment in Field Service and Lightning Scheduler. Assigned resources appear in the Assigned Resources related list on service appointments. This object is available in API version 38.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AssignedResource](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_assignedresource.htm "HTML (New Window)") in the Field Service Developer Guide, Object Reference for the Salesforce Platform, and Salesforce Scheduler Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualTravelTime | Actual Travel Time (Minutes) | double |  |  | 18 | 2 |
| AssignedResourceNumber | Assigned Resource Number | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EstimatedTravelTime | Estimated Travel Time (Minutes) | double |  |  | 18 | 2 |
| EventId | Activity ID | reference |  | 18 |  |  |
| Id | Assigned Resource ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRequiredResource | Required Resource | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Role | Role | picklist |  | 40 |  |  |
| ServiceAppointmentId | Service Appointment ID | reference |  | 18 |  |  |
| ServiceCrewId | Service Crew ID | reference |  | 18 |  |  |
| ServiceResourceId | Service Resource ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Transaction | Transaction | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
