---
title: "ViolationTypeAssessmentInd"
domain: psc-api
topic: violationtypeassessmentind
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.603Z
estimatedTokens: 491
keywords: [ViolationTypeAssessmentInd, violation, associated, assessment, indicator, definitions, API, version, 49.0, later, Calls, Objects]
---

# ViolationTypeAssessmentInd

> Represents violation types associated with assessment indicator definitions. This object is available in API version 49.0 and later.

# ViolationTypeAssessmentInd

Represents violation types associated with assessment indicator definitions. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert(), search()

## Fields

| Field | Details |
| --- | --- |
| AssessmentIndDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the assessment indicator definition. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the violation type assessment indicator. |
| ViolationTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the violation type. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ViolationTypeAssessmentIndFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object. This object is available in API version 51.0 and later.

[ViolationTypeAssessmentIndHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object. This object is available in API version 51.0 and later.

## Related Topics

- ViolationTypeAssessmentIndFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- ViolationTypeAssessmentIndHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
