---
title: "LifeSciMetadataRecord"
domain: life-sciences-dev-guide
topic: lifescimetadatarecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.468Z
estimatedTokens: 968
keywords: [LifeSciMetadataRecord, configuration, record, Life, Sciences, child, LifeSciMetadataCategory, API, version, 65.0, later, Calls, Associated, Objects]
---

# LifeSciMetadataRecord

> Represents a configuration record for Life Sciences. This object is a child
         of LifeSciMetadataCategory.  This object is available in API version 65.0 and
      later.

# LifeSciMetadataRecord

Represents a configuration record for Life Sciences. This object is a child of LifeSciMetadataCategory. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the configuration is active (true) or not (false).The default value is false. |
| IsOrgLevel | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the configuration applies to every user in the org (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LifeScienceMetadataCategoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The category associated with the configuration.This field is a relationship field.Relationship NameLifeScienceMetadataCategoryRelationship TypeLookupRefers ToLifeSciMetadataCategory |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the configuration record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentMetadataRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe configuration’s parent record.This field is a relationship field.Relationship NameParentMetadataRecordRelationship TypeLookupRefers ToLifeSciMetadataRecord |
| RecordApiName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionRequired. The API name of the configuration record. |
| Type | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the configuration. Type defines a relationship between related or similar configurations. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LifeSciMetadataRecordFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LifeSciMetadataRecordHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LifeSciMetadataRecordShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LifeSciMetadataRecordFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- LifeSciMetadataRecordHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- LifeSciMetadataRecordShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
