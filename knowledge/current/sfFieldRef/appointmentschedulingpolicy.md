---
title: "AppointmentSchedulingPolicy"
domain: sfFieldRef
topic: appointmentschedulingpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.839Z
estimatedTokens: 602
keywords: [AppointmentSchedulingPolicy, rules, scheduling, appointments, Salesforce, Scheduler, API, version, 45.0, later]
---

# AppointmentSchedulingPolicy

> Represents a set of rules for scheduling appointments using
         Salesforce Scheduler. This object is available in API version 45.0 and
      later.

# AppointmentSchedulingPolicy

Represents a set of rules for scheduling appointments using Salesforce Scheduler. This object is available in API version 45.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AppointmentSchedulingPolicy](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_appointmentschedulingpolicy.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Salesforce Scheduler Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppointmentStartTimeInterval | Appointment Start Time Interval | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| ExtCalEventHandlerId | Class ID | reference |  | 18 |  |  |
| Id | Appointment Scheduling Policy ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsOrgDefault | Is Default | boolean |  |  |  |  |
| IsSvcTerrOpHoursWithShiftsUsed | Use service territory’s operating hours with shifts | boolean |  |  |  |  |
| IsSvcTerritoryMemberShiftUsed | Use service territory member’s shift | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Name | string |  | 80 |  |  |
| ShouldConsiderCalendarEvents | Check Salesforce Calendar for Resource Availability | boolean |  |  |  |  |
| ShouldEnforceExcludedResource | Ignore Excluded Service Resources | boolean |  |  |  |  |
| ShouldEnforceRequiredResource | Include Only Required Service Resources | boolean |  |  |  |  |
| ShouldMatchSkill | Match Skills | boolean |  |  |  |  |
| ShouldMatchSkillLevel | Match Skill Levels | boolean |  |  |  |  |
| ShouldRespectVisitingHours | Enforce Account's Visiting Hours | boolean |  |  |  |  |
| ShouldUsePrimaryMembers | Include Primary Service Territory Members | boolean |  |  |  |  |
| ShouldUseSecondaryMembers | Include Secondary Service Territory Members | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
