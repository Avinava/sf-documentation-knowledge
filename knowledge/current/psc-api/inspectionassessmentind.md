---
title: "InspectionAssessmentInd"
domain: psc-api
topic: inspectionassessmentind
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.913Z
estimatedTokens: 877
keywords: [InspectionAssessmentInd, assessment, indicators, recorded, inspection, API, version, 49.0, later, Calls, Associated, Objects]
---

# InspectionAssessmentInd

> Represents the assessment indicators recorded during an inspection. This object is available in API version 49.0 and later.

# InspectionAssessmentInd

Represents the assessment indicators recorded during an inspection. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentIndDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the assessment indicator definition. |
| AssessmentTaskId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionId of the assessment task. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the inspection assessment indicator. |
| Result | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCompliance result of the assessment indicator.Possible values are:FailIssuePass |
| TextFieldResponse | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText response of the assessment indicator |
| DateTimeFieldResponse | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the response for an assessment indicator is captured during an inspection visit. This field is available in API version 52.0 and later. |
| DecimalFieldResponse | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe fractional value of the assessment indicator response that was captured during an inspection visit. This field is available in API version 52.0 and later. |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order in which the assessment indicator definition associated with the inspection assessment indicator is displayed in the assessment task definition. This field is available in API version 52.0 and later. |
| NumberFieldResponse | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe whole number value of the assessment indicator response that was captured during an inspection visit. This field is available in API version 52.0 and later. |
| PercentageFieldResponse | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage value of the assessment indicator response that was captured during an inspection visit. This field is available in API version 52.0 and later. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[InspectionAssessmentIndFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InspectionAssessmentIndHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- InspectionAssessmentIndFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- InspectionAssessmentIndHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
