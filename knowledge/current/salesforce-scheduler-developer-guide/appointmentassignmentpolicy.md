---
title: "AppointmentAssignmentPolicy"
domain: salesforce-scheduler-developer-guide
topic: appointmentassignmentpolicy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.607Z
estimatedTokens: 525
keywords: [AppointmentAssignmentPolicy, Stores, resource, assignment, rules, API, version, 52.0, later, Calls]
---

# AppointmentAssignmentPolicy

> Stores information about resource assignment rules. This object is available in API version 52.0 and later.

# AppointmentAssignmentPolicy

Stores information about resource assignment rules. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FullName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the AppointmentAssignmentPolicy object.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the appointment assignment policy.Possible values are:Possible values are:da (Danish)de (German)en_US (English)es (Spanish)es_MX (Spanish - Mexican)fi (Finnish)fr (French)it (Italian)ja (Japanese)ko (Korean)nl_NL (Dutch)no (Norwegian)pt_BR (Portuguese - Brazilian)ru (Russian)sv (Swedish)th (Thai)zh_CN (Chinese - Simplified)zh_TW (Chinese - Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the appointment assignment policy. |
| PolicyApplicableDuration | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe frequency at which the utilization of service resources is calculated. This field is available in API version 53.0 and later.Possible values are:Parameter-BasedMonthlyWeeklyThe default value is Parameter-Based. |
| PolicyType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of appointment assignment policy.Possible values are:loadBalancing |
| UtilizationFactor | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the count type for the resource utilization. This field is available in API version 53.0 and later.Possible values are:NumberOfAppointmentsTotalAppointmentDurationThe default value is TotalAppointmentDuration. |
