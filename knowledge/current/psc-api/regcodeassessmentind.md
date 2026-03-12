---
title: "RegCodeAssessmentInd"
domain: psc-api
topic: regcodeassessmentind
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.470Z
estimatedTokens: 470
keywords: [RegCodeAssessmentInd, regulatory, codes, assessment, indicator, definitions, associated, API, version, 49.0, later, Calls, Objects]
---

# RegCodeAssessmentInd

> Represents the regulatory codes and the assessment indicator definitions associated
    with them. This object is available in API version 49.0 and later.

# RegCodeAssessmentInd

Represents the regulatory codes and the assessment indicator definitions associated with them. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert(), search()

## Fields

| Field | Details |
| --- | --- |
| AssessmentIndDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the assessment indicator definition. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the regulatory code assessment indicator definition. |
| RegulatoryCodeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the regulatory code. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[RegulatoryCodeAssessmentIndFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[RegulatoryCodeAssessmentIndHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- RegulatoryCodeAssessmentIndFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- RegulatoryCodeAssessmentIndHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
