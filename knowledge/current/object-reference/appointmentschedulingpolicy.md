---
title: "AppointmentSchedulingPolicy"
domain: object-reference
topic: appointmentschedulingpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.716Z
estimatedTokens: 1342
keywords: [AppointmentSchedulingPolicy, rules, scheduling, appointments, Salesforce, Scheduler, API, version, 45.0, later, Calls]
---

# AppointmentSchedulingPolicy

> Represents a set of rules for scheduling appointments using
         Salesforce Scheduler. This object is available in API version 45.0 and
      later.

# AppointmentSchedulingPolicy

Represents a set of rules for scheduling appointments using Salesforce Scheduler. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AppointmentAssignmentPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name or ID of the appointment assignment policy. This is a relationship field, available in version 52.0 and later.Relationship NameAppointmentAssignmentPolicyRelationship TypeLookupRefers ToAppointmentAssignmentPolicy |
| AppointmentStartTimeInterval | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe proposed time interval in minutes between appointment start times. For example, set the interval to 15. Appointments can then begin at the top of the hour and at 15-minute intervals thereafter (10:00 AM, 10:15 AM, 10:30 AM, and so on). Possible values are:510152030456090120150180240300360420480 |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the AppointmentSchedulingPolicy object. |
| ExtCalEventHandlerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the custom Apex class that checks service resources’ external calendar events and returns the time slots where service resources are already booked. Available in API version 50.0 and later.This is a relationship field.Relationship NameExtCalEventHandlerRelationship TypeLookupRefers ToApexClass |
| IsOrgDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this scheduling policy is the default appointment scheduling policy for Lightning Scheduler appointments in this org. |
| IsSvcTerrOpHoursWithShiftsUsed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this scheduling policy considers the intersection of shifts and service territory operating hours when determining the availability of service resources for appointments (true). The default value is false. Available in API version 56.0 and later. |
| IsSvcTerritoryMemberShiftUsed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this scheduling policy considers shifts of service territory members when determining the availability of service resources for appointments (true). The default value is false. Available in API version 56.0 and later. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the appointment scheduling policy.Possible values are:Possible values are:da (Danish)de (German)en_US (English)es (Spanish)es_MX (Spanish - Mexican)fi (Finnish)fr (French)it (Italian)ja (Japanese)ko (Korean)nl_NL (Dutch)no (Norwegian)pt_BR (Portuguese - Brazilian)ru (Russian)sv (Swedish)th (Thai)zh_CN (Chinese - Simplified)zh_TW (Chinese - Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the appointment scheduling policy. |
| ShouldConsiderCalendarEvents | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this policy checks the Salesforce calendar for resource availability.The default value is 'false'. |
| ShouldEnforceExcludedResource | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this appointment scheduling policy prevents excluded service resources from being assigned to appointments. |
| ShouldEnforceRequiredResource | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this appointment scheduling policy allows only required service resources to be assigned to appointments. |
| ShouldMatchSkill | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this appointment scheduling policy allows only required service resources who have certain skills to be assigned to appointments. |
| ShouldMatchSkillLevel | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this appointment scheduling policy allows only required service resources who have certain skills and skill levels to be assigned to appointments. |
| ShouldRespectVisitingHours | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this appointment scheduling policy prevents users from scheduling appointments outside of an account’s visiting hours. |
| ShouldUsePrimaryMembers | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this appointment scheduling policy allows only service resources who are primary members of a service territory to be assigned to appointments. |
| ShouldUseSecondaryMembers | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this appointment scheduling policy allows service resources who are secondary members of a service territory to be assigned to appointments. |
