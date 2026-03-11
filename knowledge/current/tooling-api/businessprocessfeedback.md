---
title: "BusinessProcessFeedback"
domain: tooling-api
topic: businessprocessfeedback
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.350Z
keywords: [BusinessProcessFeedback, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# BusinessProcessFeedback

# BusinessProcessFeedback

Represents information about the survey and the question associated with each stage in a customer lifecycle map. This object is available in API version 51.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ActionName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the survey used to gather feedback. |
| ActionParam | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the question used to gather feedback. |
| ActionType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionMethod of collecting feedback.Possible values are:PHONE_CALLSURVEY |
| BusinessProcessDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionUnique identifier of the stage associated with the survey and question. |