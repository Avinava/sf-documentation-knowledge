---
title: "UserAppInfo"
domain: object-reference
topic: userappinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.688Z
estimatedTokens: 585
keywords: [UserAppInfo, Stores, Lightning, app, logged, user, hasn’t, Salesforce, lost, access, accessed, API, version, 38.0, later]
---

# UserAppInfo

> Stores the last Lightning app logged in to. If the user hasn’t logged
			into Salesforce or if the user lost access to the last accessed app, the UserAppInfo
			object stores a Null value. This object is available in API
			version 38.0 and later.

# UserAppInfo

Stores the last Lightning app logged in to. If the user hasn’t logged into Salesforce or if the user lost access to the last accessed app, the UserAppInfo object stores a Null value. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AppDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the last Lightning app that the user logged in to. This field is available in API version 43.0 and later.This is a relationship field.Relationship NameAppDefinitionRelationship TypeLookupRefers ToAppDefinition |
| FormFactor | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe relative size of the app as displayed. Values are:Small—suitable for a small device like a mobile phoneMedium—suitable for a tabletLarge—suitable for a large display device, like a monitorIt’s possible to have three versions of the app as the one last logged in to, where each version has a different form factor. |
| UserId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user that used this app.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UserAppInfoChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- UserAppInfoChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
