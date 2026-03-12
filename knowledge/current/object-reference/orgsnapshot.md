---
title: "OrgSnapshot"
domain: object-reference
topic: orgsnapshot
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.181Z
estimatedTokens: 1057
keywords: [OrgSnapshot, snapshot, scratch, org, Snapshots, capture, state, quickly, spin, new, orgs, configuration, API, version, 61.0]
---

# OrgSnapshot

> Represents a snapshot of a scratch org. Snapshots capture the state of a
         scratch org so that you can use it to quickly spin up new scratch orgs using its
         configuration. This object is available in API version 61.0 and later.

# OrgSnapshot

Represents a snapshot of a scratch org. Snapshots capture the state of a scratch org so that you can use it to quickly spin up new scratch orgs using its configuration. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

A snapshot must belong to the Dev Hub org that you’re using to create the scratch org. You must enable the scratch org snapshot feature in your Dev Hub org using Setup.

## Fields

| Field | Details |
| --- | --- |
| Content | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReserved for future use. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, SortDescriptionA free-form text field (maximum 255 characters) for you to enter a description of this scratch org snapshot. |
| Error | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| ExpirationDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate when the scratch org snapshot expires. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns the scratch org snapshot.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Provider | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionFor internal use only. |
| ProviderSnapshot | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFor internal use only. |
| ProviderSnapshotVersion | TypestringPropertiesFilter, Group, SortDescriptionFor internal use only. |
| SnapshotName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the scratch org snapshot. This field value is unique within your org. |
| SourceOrg | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe org ID of the scratch org that the snapshot was created from. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionStatus of the snapshot.Possible values are:Active—The snapshot is created and can be used to create scratch orgs.Error—The snapshot couldn’t be created.Expired—The snapshot has expired.In Progress—The snapshot is in the process of being created.New—The snapshot creation request has been received.The default value is New. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrgSnapshotFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[OrgSnapshotHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[OrgSnapshotShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- OrgSnapshotFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- OrgSnapshotHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- OrgSnapshotShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
