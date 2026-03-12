---
title: "ApplicationRenderMethod"
domain: nonprofit-cloud-for-grantmaking-dev-guide
topic: applicationrendermethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:02.833Z
estimatedTokens: 872
keywords: [ApplicationRenderMethod, how, part, application, rendered, Grantmaking, API, version, 61.0, later, Calls, Special, Access, Rules, Associated]
---

# ApplicationRenderMethod

> Represents how a part of an application can be rendered. This object is
      available in Grantmaking API version 61.0 and later.

# ApplicationRenderMethod

Represents how a part of an application can be rendered. This object is available in Grantmaking API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Applications system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the application render method. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MethodName | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe name of the render method associated with the application. |
| MethodRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record ID of the method that's associated with the application render method.This field is a polymorphic relationship field.Relationship NameMethodRecordRelationship TypeLookupRefers ToOmniProcess, OmniUiCard |
| MethodType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of method that's used to render components in the application.Possible values are:FlexCardFlowOmniScript |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the application render method. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the application render method.Possible values are:FormFramework This value is available from API version 63.0 and later.GrantmakingProgram This value is available from API version 65.0 and later.Volunteer This value is available from API version 65.0 and later.The default is FormFramework. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationRenderMethodFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[ApplicationRenderMethodHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[ApplicationRenderMethodShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
