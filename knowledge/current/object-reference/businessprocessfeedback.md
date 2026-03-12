---
title: "BusinessProcessFeedback"
domain: object-reference
topic: businessprocessfeedback
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:05.774Z
estimatedTokens: 259
keywords: [BusinessProcessFeedback, Setup, stores, survey, question, associated, stage, customer, lifecycle, map, maps, track, scores, provided, customers]
---

# BusinessProcessFeedback

> Setup object that stores information about the survey and the question
      associated with each stage in a customer lifecycle map. Customer lifecycle maps are used to
      track the scores provided by customers across their lifecycle using Salesforce Surveys.
    This object is reserved for internal use, and is available in API version 49.0 and
    later.

# BusinessProcessFeedback

Setup object that stores information about the survey and the question associated with each stage in a customer lifecycle map. Customer lifecycle maps are used to track the scores provided by customers across their lifecycle using Salesforce Surveys. This object is reserved for internal use, and is available in API version 49.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ActionName | TypestringPropertiesFilter, Group, SortDescriptionName of the survey used to gather feedback. |
| ActionParam | TypestringPropertiesFilter, Group, SortDescriptionName of the question used to gather feedback. |
| ActionType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionMethod of collecting feedback.Possible value is:PHONE_CALLSURVEY |
| BusinessProcessDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier of the stage associated with the survey and question. |
