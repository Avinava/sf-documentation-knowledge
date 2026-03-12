---
title: "AppointmentSchedulingPolicy"
domain: metadata-api
topic: appointmentschedulingpolicy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:36.765Z
estimatedTokens: 1318
keywords: [AppointmentSchedulingPolicy, rules, scheduling, appointments, Lightning, Scheduler, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version]
---

# AppointmentSchedulingPolicy

> Represents a set of rules for scheduling appointments using
      Lightning Scheduler.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# AppointmentSchedulingPolicy

Represents a set of rules for scheduling appointments using Lightning Scheduler. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

AppointmentSchedulingPolicy components have the suffix .policy and are stored in the appointmentSchedulingPolicies folder.

## Version

AppointmentSchedulingPolicy components are available in API version 47.0 and later.

## Special Access Rules

You must have the ViewSetup and CustomizeApplication user permissions to access the AppointmentSchedulingPolicy type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| appointmentAssignmentPolicy | string | The name of the appointment assignment policy. This field is available in API version 53.0 and later. |
| appointmentStartTimeInterval | picklist | Required. The proposed time interval in minutes between appointment start times. For example, if you set the interval to 15, appointments can then begin at the top of the hour and at 15-minute intervals thereafter (10:00 AM, 10:15 AM, 10:30 AM, and so on). Valid values are:510152030456090120150180240300360420480 |
| extCalEventHandler | lookup | Required. The API name of the custom Apex class that checks service resources’ external calendar events and returns the time slots where service resources are already booked. Available in API version 50.0 and later. |
| isSvcTerritoryMemberShiftUsed | boolean | Required. Indicates whether to consider shifts of service territory members when determining the availability of service resources for appointments (true) or not (false). This field is available in API version 54.0 and later. |
| isSvcTerrOpHoursWithShiftsUsed | boolean | Required. Indicates whether to consider the intersection of shifts and service territory operating hours when determining the availability of service resources for appointments (true) or not (false). This field is available in API version 54.0 and later. |
| masterLabel | string | Required. The label for the appointment scheduling policy. |
| shouldCheckExternalCalendar | boolean | Required. Indicates whether to check the external calendar for resource availability (true) or not (false). This field is available in API version 53.0 and later. |
| shouldConsiderCalendarEvents | boolean | Required. Indicates whether to consider events on the Salesforce calendar to determine the availability of service resources to be assigned to appointments (true) or not (false). |
| shouldEnforceExcludedResource | boolean | Required. Indicates whether this appointment scheduling policy prevents excluded service resources from being assigned to appointments (true) or not (false). |
| shouldEnforceRequiredResource | boolean | Required. Indicates whether this appointment scheduling policy allows only required service resources to be assigned to appointments (true) or not (false). |
| shouldMatchSkill | boolean | Required. Indicates whether this appointment scheduling policy allows only required service resources who have certain skills to be assigned to appointments (true) or not (false). |
| shouldMatchSkillLevel | boolean | Required. Indicates whether this appointment scheduling policy allows only required service resources who have certain skills and skill levels to be assigned to appointments (true) or not (false). |
| shouldRespectVisitingHours | boolean | Required. Indicates whether this appointment scheduling policy prevents users from scheduling appointments outside of an account’s visiting hours (true) or not (false). |
| shouldUsePrimaryMembers | boolean | Required. Indicates whether this appointment scheduling policy allows only service resources who are primary members of a service territory to be assigned to appointments (true) or not (false). |
| shouldUseSecondaryMembers | boolean | Required. Indicates whether this appointment scheduling policy allows service resources who are secondary members of a service territory to be assigned to appointments (true) or not (false). |

## Declarative Metadata Sample Definition

The following is an example of an appointmentSchedulingPolicy component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AppointmentSchedulingPolicy xmlns="http://soap.sforce.com/2006/04/metadata">
  <appointmentAssignmentPolicy>ResourceAssignmentRule1</appointmentAssignmentPolicy>
  <appointmentStartTimeInterval>15</appointmentStartTimeInterval>
  <masterLabel>Default Appointment Scheduling Policy</masterLabel>
  <shouldCheckExternalCalendar>true</shouldCheckExternalCalendar>
  <shouldConsiderCalendarEvents>true</shouldConsiderCalendarEvents>
  <shouldEnforceExcludedResource>true</shouldEnforceExcludedResource>
  <shouldEnforceRequiredResource>true</shouldEnforceRequiredResource>
  <shouldMatchSkill>true</shouldMatchSkill>
  <shouldMatchSkillLevel>false</shouldMatchSkillLevel>
  <shouldRespectVisitingHours>true</shouldRespectVisitingHours>
  <shouldUsePrimaryMembers>true</shouldUsePrimaryMembers>
  <shouldUseSecondaryMembers>true</shouldUseSecondaryMembers>
</AppointmentSchedulingPolicy>
```

```
<?xml version="1.0" encoding="UTF-8"?>
 <Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
     <members>sample</members>
     <name>AppointmentSchedulingPolicy</name>
   </types>
   <version>47.0</version>
 </Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
