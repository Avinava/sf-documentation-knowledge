---
title: "FundingAwardRqmtSection"
domain: nonprofit-cloud
topic: fundingawardrqmtsection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.813Z
estimatedTokens: 1373
keywords: [FundingAwardRqmtSection, part, funding, award, requirement, completed, reviewed, API, version, 62.0, later, Calls, Special, Access, Rules]
---

# FundingAwardRqmtSection

> Represents a part of a funding award requirement to be completed or
         reviewed. This object is available in API version 62.0 and later.

# FundingAwardRqmtSection

Represents a part of a funding award requirement to be completed or reviewed. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Funding Awards system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ApplicationStageDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe application stage definition associated with the funding award requirement section.This field is a relationship field.Relationship NameApplicationStageDefinitionRelationship TypeLookupRefers ToApplicationStageDefinition |
| AssignedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user assigned to complete the funding award requirement section.This field is a relationship field.Relationship NameAssignedUserRelationship TypeLookupRefers ToUser |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the funding award requirement section. |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order in which the funding award requirement section shows on the form. |
| DueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the funding award requirement section is due. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the funding award requirement section ends. |
| FundingAwardRequirementId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent funding award requirement associated with the funding award requirement section.This field is a relationship field.Relationship NameFundingAwardRequirementRelationship TypeMaster-detailRefers ToFundingAwardRequirement (the master object) |
| IsAssignedToMe | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the requirement section is assigned to the logged in user (true) or not (false). This field can be used to filter the sections assigned to the user.The default value is false.This field is a calculated field. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the funding award requirement section is required (true) or not (false).The default value is false. |
| IsSubmitted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the funding award requirement section has been submitted (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the funding award requirement section |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the funding award requirement section starts. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the funding award requirement section.Possible values are:CanceledCompletedIn ProgressNot Started |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FundingAwardRqmtSectionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[FundingAwardRequirementFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[FundingAwardRqmtSectionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[FundingAwardRqmtSectionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
