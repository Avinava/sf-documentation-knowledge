---
title: "AssessmentIndicatorDefinition"
domain: automotive-cloud
topic: assessmentindicatordefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:01.015Z
estimatedTokens: 684
keywords: [AssessmentIndicatorDefinition, Define, metrics, act, markers, compliance, partner, visit, tasks, Automotive, Cloud, API, version, 56.0, later]
---

# AssessmentIndicatorDefinition

> Define parameters or metrics that act as markers of compliance for partner
         visit tasks. This object is available in Automotive Cloud in API version 56.0 and
      later.

# AssessmentIndicatorDefinition

Define parameters or metrics that act as markers of compliance for partner visit tasks. This object is available in Automotive Cloud in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionType of data the assessment indicator definition can hold.Possible values are:BooleanDateTime—Date TimeDecimalNumberPercentageString—TextThe default value is Number. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the assessment indicator definition. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the assessment indicator definition that indicates the metric used during a task. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the assessment indicator definition record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssessmentIndicatorDefinitionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AssessmentIndicatorDefinitionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AssessmentIndicatorDefinitionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[AssessmentIndicatorDefinitionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
