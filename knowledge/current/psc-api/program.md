---
title: "Program"
domain: psc-api
topic: program
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.247Z
estimatedTokens: 1186
keywords: [Program, enrollment, disbursement, benefits, Calls, Associated, Objects]
---

# Program

> Represents information about the enrollment and disbursement of
         benefits in a program.

# Program

Represents information about the enrollment and disbursement of benefits in a program.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActiveEnrolleeCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of program enrollees in active status. |
| AdditionalContext | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional context about the program. |
| CurrentMonthDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefit that's disbursed in the current month. |
| CurrentYearDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefit that's disbursed in the current year. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the program ends. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the program. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated parent program.This field is available from API version 59.0 and later.This field is a relationship field.Relationship NameParentProgramRelationship TypeLookupRefers ToProgram |
| PreviousMonthDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefit that's disbursed in the previous month. |
| PreviousYearDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefit that's disbursed in the previous year. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the program begins. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the program.Possible values are:ActiveCancelledCompletedPlanned |
| Summary | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe summary of the program. |
| TotalEnrolleeCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total enrollee count in the program. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the program.Possible value is:ProgramManagement |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProgramFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProgramHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProgramOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ProgramShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProgramFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- ProgramHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- ProgramOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- ProgramShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
