---
title: "AssessmentIndDefinedValue"
domain: psc-api
topic: assessmentinddefinedvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.965Z
estimatedTokens: 413
keywords: [AssessmentIndDefinedValue, Stores, acceptable, defined, part, assessment, indicator, definition, multi, select, question, API, version, 49.0, later]
---

# AssessmentIndDefinedValue

> Stores the list of acceptable values which are defined as part of assessment
      indicator definition for a single and multi select question.  This object is available in
    API version 49.0 and later.

# AssessmentIndDefinedValue

Stores the list of acceptable values which are defined as part of assessment indicator definition for a single and multi select question. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentIndicatorDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the associated assessment indicator definition. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the record. |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sequence in which the assessment indicator value is displayed in the UI. |
| Value | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionValues for the assessment indicator definition. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[AssessmentIndValueFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed is available for the object.
