---
title: "Program"
domain: nonprofit-cloud-for-grantmaking-dev-guide
topic: program
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:02.939Z
estimatedTokens: 1532
keywords: [Program, enrollment, disbursement, benefits, API, version, 57.0, later, Calls, Associated, Objects]
---

# Program

> Represents information about the enrollment and disbursement of
         benefits in a program. This object is available in API version 57.0 and
      later.

# Program

Represents information about the enrollment and disbursement of benefits in a program. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe action plan template that's associated with the program.This field is a relationship field.This field is available from API version 65.0 and later.Relationship NameActionPlanTemplateRefers ToActionPlanTemplate |
| ActiveEnrolleeCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of program enrollees with IsActive on ProgramEnrollment selected. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| AdditionalContext | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional context about the program. |
| CurrentMonthDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefits disbursed in the current month. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| CurrentYearDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefits disbursed in the current year. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the program ends. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the program. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated parent program.This field is available from API version 59.0 and later.This field is a relationship field.Relationship NameParentProgramRelationship TypeLookupRefers ToProgram |
| PreviousMonthDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefits disbursed in the previous month. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| PreviousYearDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefits disbursed in the previous year. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the program begins. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the program.Possible values are:ActiveCancelledCompletedPlannedThis field is accessible if you enabled Data Protection and Privacy in Setup. |
| Summary | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe summary of the program. |
| TotalEnrolleeCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total count of enrollees in the program. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the program.Possible value is ProgramManagement. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProgramChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.

[ProgramFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ProgramHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ProgramOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

Sharing rules are available for the object.

[ProgramShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
