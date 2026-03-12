---
title: "SurveyQstnResponseOffline"
domain: life-sciences-dev-guide
topic: surveyqstnresponseoffline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.403Z
estimatedTokens: 544
keywords: [SurveyQstnResponseOffline, participant’s, answer, specific, survey, question, offline, staging, environments, API, version, 65.0, later, Calls]
---

# SurveyQstnResponseOffline

> Represents a participant’s answer to a specific survey question, for both offline and
      staging environments. This object is available in API version 65.0 and later.

# SurveyQstnResponseOffline

Represents a participant’s answer to a specific survey question, for both offline and staging environments. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Datatype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the data type of the question response.Possible values are:BooleanDateDoubleIntNumberString |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe identifier of the offline or staging question response record. |
| ResponseValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe response provided by a participant for a question. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
| SurveyQuestionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the survey question responded by the participant.This field is a relationship field.Relationship NameSurveyQuestionRefers ToSurveyQuestion |
| SurveyResponseOfflineId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the survey response offline record that’s associated with the survey question response offline record.This field is a relationship field.Relationship NameSurveyResponseOfflineRelationship TypeMaster-detailRefers ToSurveyResponseOffline |
