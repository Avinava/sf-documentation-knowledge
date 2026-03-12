---
title: "CareMetricTarget"
domain: health-cloud-object-reference
topic: caremetrictarget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.251Z
estimatedTokens: 1755
keywords: [CareMetricTarget, expected, care, metrics, org, level, patient, API, version, 49.0, later, Calls, Associated, Objects]
---

# CareMetricTarget

> Represents the expected care metrics at an org level and patient level.
    This object is available in API version 49.0 and later.

# CareMetricTarget

Represents the expected care metrics at an org level and patient level. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe CodeSet ID related to the care metric target. |
| DetailRatioDenominator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe lower value of the care metric target detail ratio. |
| DetailRatioNumerator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe higher value of the care metric target detail ratio. |
| DetailRatioUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measurement for the care metric target detail ratio.This field is a relationship field.Relationship NameDetailRatioUnitRelationship TypeLookupRefers ToUnitOfMeasure |
| DetailString | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA sequence of Unicode characters. |
| DueDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time it takes to reach the care metric target. |
| DueDurationUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measurement for the time it takes to reach the care metric target.This field is a relationship field.Relationship NameDueDurationUnitRelationship TypeLookupRefers ToUnitOfMeasure |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the care metric target value ceases to take effect. |
| GoalAssignmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated goal assignment record.This field is a relationship field.Relationship NameGoalAssignmentRelationship TypeLookupRefers ToGoalAssignment |
| IsOutcomePositive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the expected boolean value. The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LowerLimit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe lower limit for the care metric target range. Used when Type is set to RANGE. |
| MeasureCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related measure code.This field is a polymorphic relationship field.Relationship NameMeasureCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this care metric target. |
| NumericValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe numeric value of the care metric target (6 decimal places). Used when Type is set to MIN, MAX, or EXACT. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| PatientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account ID of the patient for whom the care metric target is applicable. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the care metric target value takes effect. |
| TargetedOutcome | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies if the targeted outcome value is false (negative outcome is desired) or true (positive outcome is desired).Possible values are:NegativePositive |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe care metric value type.Possible values are:BOOLEANEXACTMAXMINRANGE |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the unit of measure for the care metric target. |
| UpperLimit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe upper limit for the care metric target range. Used when Type is set to RANGE. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CareMetricTargetChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[CareMetricTargetFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareMetricTargetHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareMetricTargetOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CareMetricTargetShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareMetricTargetChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CareMetricTargetFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareMetricTargetHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CareMetricTargetOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CareMetricTargetShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
