---
title: "WorkTypeAssetType"
domain: health-cloud-object-reference
topic: worktypeassettype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.260Z
estimatedTokens: 822
keywords: [WorkTypeAssetType, junction, Work, Asset, admins, associate, visit, PRP, Hair, Restoration, Room, API, version, 62.0, later]
---

# WorkTypeAssetType

> Represents a junction between Work Type and Asset Type. This junction object
         enables admins to associate a visit type such as PRP Hair Restoration to an asset type such
         as Room. This object is available in API version 62.0 and later.

# WorkTypeAssetType

Represents a junction between Work Type and Asset Type. This junction object enables admins to associate a visit type such as PRP Hair Restoration to an asset type such as Room. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object, you must have the Health Cloud Appointment Management permission set.

## Fields

| Field | Details |
| --- | --- |
| AssetTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The asset type associated with a work type.This field is a relationship field.Relationship NameAssetTypeRefers ToAssetType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the work type asset type record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The work type associated with an asset type.This field is a relationship field.Relationship NameWorkTypeRefers ToWorkType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkTypeAssetTypeHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[WorkTypeAssetTypeOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkTypeAssetTypeShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkTypeAssetTypeHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- WorkTypeAssetTypeOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkTypeAssetTypeShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
