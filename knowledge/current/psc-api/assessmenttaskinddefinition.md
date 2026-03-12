---
title: "AssessmentTaskIndDefinition"
domain: psc-api
topic: assessmenttaskinddefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.091Z
estimatedTokens: 411
keywords: [AssessmentTaskIndDefinition, Associate, assessment, indicator, definition, task, definition.This, API, version, 48.0, later, Calls, Associated, Objects]
---

# AssessmentTaskIndDefinition

> Associate an assessment indicator definition with an assessment task
      definition.This object is available in API version 48.0 and later.

# AssessmentTaskIndDefinition

Associate an assessment indicator definition with an assessment task definition.This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentIndDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe assessment indicator definition that is associated with the assessment task. |
| AssessmentTaskDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe assessment task that is associated with the assessment indicator definition. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the assessment task indicator definition. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[AssessmentTaskIndDefinitionFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

## Related Topics

- AssessmentTaskIndDefinitionFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
