---
title: "Release"
domain: agentforce
topic: release
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.936Z
keywords: [Release, Supported, Calls, Fields]
---

# Release

# Release

Represents a release for service management operations, such as incidents, problems, and change requests. A release is a period during which new or updated service operations are deployed. This object is available in API version 65.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualDuration | TypedoublePropertiesFilter, Nillable, SortDescriptionThe actual duration for a release in days, calculated as the difference between the actual end date and the actual start date. |
| ActualEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual date and time on which a release ended. |
| ActualStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual date and time on which a release started. |
| ClosingSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe closing summary for each release state and includes relevant comments regarding the release state. |
| DeploymentDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe deployment date of a release. Defaults to the planned end date if no deployment date is specified. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of a release. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of a release. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PlannedDuration | TypedoublePropertiesFilter, Nillable, SortDescriptionThe planned duration for a release in days, calculated as the difference between the planned end date and the planned start date. |
| PlannedEndDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time on which a release is planned to end. |
| PlannedStartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time on which a release is planned to start. |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the urgency of a release, such as critical, high, moderate, and low.Possible values are:CriticalHighLowModerate |
| ReleaseOwnerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe group or user who owns a release.This field is a polymorphic relationship field.Relationship NameReleaseOwnerRefers ToGroup, User |
| RequestedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who created or requested the release.This field is a relationship field.Relationship NameRequestedByRefers ToUser |
| RiskLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the risk level of a release, such as low, medium, and high, which are represented as green, amber, and red, respectively.Possible values are:HighLowMedium |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the current status of a release.Possible values are:CanceledClosedCompletedIn ProgressNewRolled Back |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of a release, such as major, minor, or an upgrade.Possible values are:EmergencyMajorMinorOthersPatchUpgrade |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe usage type for the release.Possible values are:ServiceManagement—Service Management |