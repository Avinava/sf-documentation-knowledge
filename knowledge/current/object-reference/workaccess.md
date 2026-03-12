---
title: "WorkAccess"
domain: object-reference
topic: workaccess
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:19.502Z
estimatedTokens: 840
keywords: [WorkAccess, grant, restrict, user, access, give, badge, definitions, definition, record, Calls, Additional, Considerations, Objects, Associated]
---

# WorkAccess

> Used to grant or restrict user access to give badge definitions.
			Each badge definition record must have one WorkAccess record.

# WorkAccess

Used to grant or restrict user access to give badge definitions. Each badge definition record must have one WorkAccess record.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Additional Considerations and Related Objects

WorkAccess is not available through Schema Builder and is not customizable. A WorkAccess record is **required** for users to **Give** BadgeDefinitions. If a WorkAccess record is not created, BadgeDefinitions will not be available to users.

The sharing of WorkAccess records is through WorkAccessShare. For each WorkBadgeDefinition record, you must create both a WorkAccess record (per WorkBadgeDefinition) and WorkAccessShare records for sharing to users or groups.

## Fields

| Field Name | Details |
| --- | --- |
| AccessType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefine the type of Access given to user (“Give”). |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSalesforce unique ID for owner of Access record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSalesforce unique ID for BadgeDefinition record associated with this Access record.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToWorkBadgeDefinition |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkAccessChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[WorkAccessOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

[WorkAccessShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkAccessChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- WorkAccessOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkAccessShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
