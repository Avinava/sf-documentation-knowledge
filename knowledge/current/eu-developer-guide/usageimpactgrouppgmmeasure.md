---
title: "UsageImpactGroupPgmMeasure"
domain: eu-developer-guide
topic: usageimpactgrouppgmmeasure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.459Z
estimatedTokens: 742
keywords: [UsageImpactGroupPgmMeasure, junction, program, product, Usage, Impact, Group, version, API, 58.0, later, Calls, Special, Access, Rules]
---

# UsageImpactGroupPgmMeasure

> Represents a junction between the program, product, and Usage Impact
         Group version. This object is available in API version 58.0 and later.

# UsageImpactGroupPgmMeasure

Represents a junction between the program, product, and Usage Impact Group version. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available only with EAndU Cloud Usage Impact Access permission set.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the Usage Impact Group Program Measure. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Usage Impact Group Program Measure. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Product2 object associated with the Usage Impact Group Program Measure.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Program object associated with the Usage Impact Group Program Measure.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |
| UsageImpactGroupVersionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Usage Impact Group Version associated with the Energy Saving Group Association.This field is a relationship field.Relationship NameUsageImpactGroupVersionRelationship TypeLookupRefers ToUsageImpactGroupVersion |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UsageImpactGroupPgmMeasureChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[UsageImpactGroupPgmMeasureFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[UsageImpactGroupPgmMeasureHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[UsageImpactGroupPgmMeasureOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[UsageImpactGroupPgmMeasureShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
