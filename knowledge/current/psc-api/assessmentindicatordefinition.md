---
title: "AssessmentIndicatorDefinition"
domain: psc-api
topic: assessmentindicatordefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:32.971Z
estimatedTokens: 640
keywords: [AssessmentIndicatorDefinition, Define, act, markers, compliance, inspections, API, version, 47.0, later, Calls, Associated, Objects]
---

# AssessmentIndicatorDefinition

> Define parameters that act as markers of compliance for inspections. This
    object is available in API version 47.0 and later.

# AssessmentIndicatorDefinition

Define parameters that act as markers of compliance for inspections. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionType of data the assessment Indicator definition can hold.Possible values are:BooleanDateTimeDecimalNumberPercentageStringPicklistMulti-Select Picklist |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the assessment indicator definition. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the assessment indicator definition that indicates the parameter to audit. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the assessment Indicator definition record owner. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[AssessmentIndicatorDefinitionOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AssessmentIndicatorDefinitionShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[AssessmentIndicatorDefinitionFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

## Related Topics

- AssessmentIndicatorDefinitionOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- AssessmentIndicatorDefinitionShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
- AssessmentIndicatorDefinitionFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
