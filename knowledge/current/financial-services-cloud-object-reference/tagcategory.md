---
title: "TagCategory"
domain: financial-services-cloud-object-reference
topic: tagcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.687Z
estimatedTokens: 509
keywords: [TagCategory, Group, similar, interest, tags, together, tag, categories, API, version, 54.0, later, Calls]
---

# TagCategory

> Group similar interest tags together into tag categories. This object is
      available in API version 54.0 and later.

# TagCategory

Group similar interest tags together into tag categories. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA detailed description of the tag category. |
| Icon | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIcon to visually represent your tag category. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the tag category is still active (true) or has been dismissed (false).The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Level | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCreate a hierarchy of levels of tag categories. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the tag category. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the tag category.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user, account, or contact associated with the tag category.This is a relationship field.Relationship NameParentCategoryRelationship TypeLookupRefers ToTagCategory |
