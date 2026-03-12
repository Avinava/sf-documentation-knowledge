---
title: "HlthCareProvTreatedCondition"
domain: health-cloud-object-reference
topic: hlthcareprovtreatedcondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.345Z
estimatedTokens: 1052
keywords: [HlthCareProvTreatedCondition, junction, healthcare, provider, facility, practitioner, problem, definition, that's, health, condition, disease, illness, links, doctor]
---

# HlthCareProvTreatedCondition

> Represents a junction object between a healthcare provider, facility, or
         practitioner and a problem definition that's related to a health condition, such as disease
         or illness. For example, this object links a doctor to the treatment of diabetes, or a
      facility to the treatment of spinal injuries. This object is available in API version 59.0 and
      later.

# HlthCareProvTreatedCondition

Represents a junction object between a healthcare provider, facility, or practitioner and a problem definition that's related to a health condition, such as disease or illness. For example, this object links a doctor to the treatment of diabetes, or a facility to the treatment of spinal injuries. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConditionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired.The ID of the health condition that's treated by a healthcare provider, facility, or practitioner.This field is a relationship field.Relationship NameConditionRelationship TypeLookupRefers ToProblemDefinition |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the provider began treating the condition. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the provider stopped treating the condition. |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired.The ID of the HealthcareProvider or HealthcareFacility or PractitionerFacility associated with the record. This represents the Provider that treats the condition.This field is a relationship field.Relationship NameHealthcareProviderRelationship TypeLookupRefers ToHealthcareProvider |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the provider is actively treating the condition (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this association between a healthcare provider, facility, or practitioner, and a problem definition that's related to a health condition. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HlthCareProvTreatedConditionHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[HlthCareProvTreatedConditionOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[HlthCareProvTreatedConditionShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- HlthCareProvTreatedConditionHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- HlthCareProvTreatedConditionOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- HlthCareProvTreatedConditionShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
