---
title: "UserDefinedLabel"
domain: object-reference
topic: userdefinedlabel
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.757Z
estimatedTokens: 680
keywords: [UserDefinedLabel, label, created, user, help, organize, track, records, API, version, 61.0, later, Calls, Associated, Objects]
---

# UserDefinedLabel

> Represents a label created by a user to help organize, track, and
         find records. This object is available in API version 61.0 and later.

# UserDefinedLabel

Represents a label created by a user to help organize, track, and find records. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Color | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionHexadecimal value of the color used to help organize the UserDefinedLabel records. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly. For example, accessed through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. For example, accessed through a list view or related record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the UserDefinedLabel record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user or group that owns the label.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| TotalAssignments | TypeintPropertiesFilter, Group, Nillable, SortDescriptionCalculated field. Number of related UserDefinedLabelAssignment records. Available in API version 62.0 and later. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionType of user-defined label.Possible values are:StarredTagUser |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UserDefinedLabelOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[UserDefinedLabelShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- UserDefinedLabelOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- UserDefinedLabelShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
