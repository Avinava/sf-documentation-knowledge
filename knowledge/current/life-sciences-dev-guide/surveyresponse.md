---
title: "SurveyResponse"
domain: life-sciences-dev-guide
topic: surveyresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.144Z
estimatedTokens: 219
keywords: [SurveyResponse, Standard, custom, extend, Survey, represent, participant’s, API, version, 65.0, later, Calls]
---

# SurveyResponse

> Standard and custom fields extend the standard Survey Response object to
         represent information about a participant’s response to a survey. This object is available
         in API version 65.0 and later.

# SurveyResponse

Standard and custom fields extend the standard Survey Response object to represent information about a participant’s response to a survey. This object is available in API version 65.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Fields

| Field | Details |
| --- | --- |
| SurveyResponseOfflineId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe survey response offline record associated with the survey response.This field is a relationship field.Relationship NameSurveyResponseOfflineRefers ToSurveyResponseOffline |

#### See Also

-   [*Object Reference for the Salesforce Platform*: SurveyResponse](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_surveyresponse.htm)
