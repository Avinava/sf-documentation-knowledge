---
title: "UserAppMenuCustomization"
domain: object-reference
topic: userappmenucustomization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.694Z
estimatedTokens: 552
keywords: [UserAppMenuCustomization, individual, user’s, settings, items, app, menu, Launcher, API, version, 35.0, later, Calls, Usage, Associated]
---

# UserAppMenuCustomization

> Represents an individual user’s settings for items in the app menu or
			App Launcher. This object is available in API version 35.0 and
				later.

# UserAppMenuCustomization

Represents an individual user’s settings for items in the app menu or App Launcher. This object is available in API version 35.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe 15-character ID for the application associated with the menu item.This is a relationship field.Relationship NameApplicationRelationship TypeLookupRefers ToConnectedApplication |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user for these specific settings.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe index value that controls where this item appears in the menu. For example, a menu item with a sort order value of 5 will appear between items with sort order values of 3 and 9. |

## Usage

See the AppMenuItem object for the organization-wide default settings This object contains the fields representing any changes the user made to the menu.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[UserAppMenuCustomizationOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[UserAppMenuCustomizationShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- UserAppMenuCustomizationOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- UserAppMenuCustomizationShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
