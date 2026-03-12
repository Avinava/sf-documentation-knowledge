---
title: "HierCondHlthCodeMapping"
domain: health-cloud-object-reference
topic: hiercondhlthcodemapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.327Z
estimatedTokens: 962
keywords: [HierCondHlthCodeMapping, how, Hierarchical, Condition, Category, HCC, codes, map, specific, year, API, version, 61.0, later, Calls]
---

# HierCondHlthCodeMapping

> Represents how Hierarchical Condition Category (HCC) codes map to condition
         codes for a specific year. This object is available in API version 61.0 and later.

# HierCondHlthCodeMapping

Represents how Hierarchical Condition Category (HCC) codes map to condition codes for a specific year. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConditionCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe health condition code that’s mapped to a Hierarchical Condition Category (HCC) code.This field is a polymorphic relationship field.Relationship NameConditionCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| EffectiveEndYear | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe year till when the mapping is valid. |
| EffectiveStartYear | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe year from when the mapping is valid. |
| HchcKey | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionFor internal use only.This field is a calculated field. |
| HierarchicalCondCategoryCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe HCC code that a health condition code is mapped to.This field is a relationship field.Relationship NameHierarchicalCondCategoryCodeRelationship TypeLookupRefers ToCodeSet |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the specified health condition and HCC code mapping is active.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record in the system.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PublishedYear | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe year when the specified mapping was published. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HierCondHlthCodeMappingHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[HierCondHlthCodeMappingOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[HierCondHlthCodeMappingShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- HierCondHlthCodeMappingHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- HierCondHlthCodeMappingOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- HierCondHlthCodeMappingShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
