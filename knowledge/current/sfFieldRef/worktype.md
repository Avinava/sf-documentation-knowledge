---
title: "WorkType"
domain: sfFieldRef
topic: worktype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.662Z
estimatedTokens: 754
keywords: [WorkType, work, performed, Service, Lightning, Scheduler, templates, applied, order, line, items, API, version, 38.0, later]
---

# WorkType

> Represents a type of work to be performed in Field Service and
			Lightning Scheduler. Work types are templates that can be applied to work order or work
			order line items. This object is available in API version 38.0 and
		later.

# WorkType

Represents a type of work to be performed in Field Service and Lightning Scheduler. Work types are templates that can be applied to work order or work order line items. This object is available in API version 38.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WorkType](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_worktype.htm "HTML (New Window)") in the Automotive Cloud Developer Guide, Field Service Developer Guide, Object Reference for the Salesforce Platform, and Salesforce Scheduler Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppointmentCategoryId | Appointment Category ID | reference |  | 18 |  |  |
| ApptStartTimeIntvlInMin | Appointment Start Time Interval (Min) | int | 9 |  |  |  |
| AttendeeLimit | Attendee Limit | int | 9 |  |  |  |
| BlockTimeAfterAppointment | Block Time After Appointment | int | 9 |  |  |  |
| BlockTimeAfterUnit | Block Time After Unit | picklist |  | 255 |  |  |
| BlockTimeBeforeAppointment | Block Time Before Appointment | int | 9 |  |  |  |
| BlockTimeBeforeUnit | Block Time Before Unit | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DefaultAppointmentType | Default Appointment Type | picklist |  | 40 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DurationInMinutes | Duration in Minutes | double |  |  | 18 | 2 |
| DurationType | Duration Type | picklist |  | 255 |  |  |
| EstimatedDuration | Estimated Duration | double |  |  | 18 | 2 |
| Id | Work Type ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MinimumCrewSize | Minimum Crew Size | int | 9 |  |  |  |
| Name | Work Type Name | string |  | 255 |  |  |
| OperatingHoursId | Operating Hour ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| RecommendedCrewSize | Recommended Crew Size | int | 9 |  |  |  |
| ServiceReportTemplateId | Service Report Layout ID | reference |  | 18 |  |  |
| ShouldAutoCreateSvcAppt | Auto-Create Service Appointment | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeFrameEndUnit | Time Frame End Unit | picklist |  | 255 |  |  |
| TimeFrameStartUnit | Time Frame Start Unit | picklist |  | 255 |  |  |
| TimeframeEnd | Timeframe End | int | 9 |  |  |  |
| TimeframeStart | Timeframe Start | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
