---
title: "ApplicationStageDefinition"
domain: nonprofit-cloud
topic: applicationstagedefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:01.795Z
estimatedTokens: 877
keywords: [ApplicationStageDefinition, stage, application, Grantmaking, API, version, 61.0, later, Calls, Special, Access, Rules, Associated, Objects, 64.0]
---

# ApplicationStageDefinition

> Represents a stage of an application. This object is available in
      Grantmaking API version 61.0 and later.

# ApplicationStageDefinition

Represents a stage of an application. This object is available in Grantmaking API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Applications system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the application stage definition. |
| EditTypeAppRenderMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe render method for an editable form or application that's associated with this application stage definition.This field is a relationship field.Relationship NameEditTypeAppRenderMethodRelationship TypeLookupRefers ToApplicationRenderMethod |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the application stage definition. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the application stage definition.Possible values are:FormFramework This value is available from API version 63.0 and later.GrantmakingProgram This value is available from API version 65.0 and later.Volunteer This value is available from API version 65.0 and later. |
| ViewTypeAppRenderMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe render method for a read-only form or application that's associated with this application stage definition.This field is a relationship field.Relationship NameViewTypeAppRenderMethodRelationship TypeLookupRefers ToApplicationRenderMethod |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationStageDefinitionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[ApplicationStageDefinitionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[ApplicationStageDefinitionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
