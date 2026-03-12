---
title: "EnablementProgram"
domain: object-reference
topic: enablementprogram
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.589Z
estimatedTokens: 1613
keywords: [EnablementProgram, Enablement, program, includes, exercises, measurable, milestones, help, users, sales, reps, achieve, specific, outcomes, company’s]
---

# EnablementProgram

> Represents an Enablement program, which includes exercises and
         measurable milestones to help users such as sales reps achieve specific outcomes related to
         your company’s revenue goals. This object is available in API version 56.0 and
      later.

# EnablementProgram

Represents an Enablement program, which includes exercises and measurable milestones to help users such as sales reps achieve specific outcomes related to your company’s revenue goals. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

-   For Enablement admins to create, update, and delete Enablement programs, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.
-   For users who take Enablement programs, the Take Enablement Programs permission is required. This permission is enabled by default as part of the Use Enablement Programs permission set, which comes with the Enablement add-on license.
-   For partner users who take Partner Enablement programs, the Take Partner Enablement Programs permission is required. This permission is enabled by default as part of the Use Partner Enablement Programs permission set, which comes with the Enablement add-on license. Partner Enablement also requires a [supported Partner Relationship Management (PRM) add-on license](https://help.salesforce.com/s/articleView?id=slack.prm_support_license_template.htm&type=5&language=en_US "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, UpdateDescriptionA summary of the program’s goals and content that’s visible to users. |
| DoesAllowSelfEnrollment | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether users can self-enroll in programs that are shared with them (true) or take only assigned programs (false). The default value is false. |
| EnablementProgramDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe representation for the program in Metadata API. This field is a relationship field.Available in API version 61.0 and later.Relationship NameEnablementProgramDefinitionRelationship TypeLookupRefers ToEnablementProgramDefinition |
| IsOutcomeBased | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the program includes a final, measurable outcome (true) or not (false). The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record. If this value is null, maybe the user accessed this record (LastReferencedDate) but not viewed it yet. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the program that’s visible to users. For example, AE Onboarding, Event Prep, or New Product Launch. |
| NetworkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the supported Experience Cloud site where a partner program is available. For site requirements, see Considerations for Partner Enablement Programs.Available in API version 60.0 and later.Relationship NameNetworkRelationship TypeLookupRefers ToNetwork |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the program. This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PublishedDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the program is published. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe status of the program. Only a published program is available for an Enablement admin to assign to users or share with users so they can self-enroll.Possible values are:ArchivedDraftPublished |
| TotalAssigned | TypeintPropertiesNillableDescriptionThe number of assignments in this program. For example, if the program is assigned to 3 users, then TotalAssigned=3. |
| TotalBehind | TypeintPropertiesNillableDescriptionThe number of assignments that are behind in this program. For example, if the program is assigned to 3 users, and 2 users are behind on their assignments, then TotalBehind=2 |
| TotalCompleted | TypeintPropertiesNillableDescriptionThe number of completed assignments in this program. For example, if the program is assigned to 3 users, and 1 user has completed the program, then TotalCompleted=1. |
| TotalDays | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionTotal days of the program. This value is derived from the latest day of all items in the program, including exercises, milestones, and the outcome. This field is a calculated field. For example, a program has Task A on day 1 and Task B on day 2. Since Task B has the latest days of all tasks, then TotalDays=2. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of the program. Possible values are:Enablement—A sales program in Lightning Experience.PtnrEnablement—A partner program in a supported Experience Cloud site. Available in API version 60.0 and later.EmployeeServiceEnablement—An employee enablement program in Employee Portal. Available in API version 63.0 and later. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[EnablementProgramOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 60.0)

Sharing rules are available for the object.

[EnablementProgramShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 60.0)

Sharing is available for the object.

## Related Topics

- EnablementProgramOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- EnablementProgramShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
