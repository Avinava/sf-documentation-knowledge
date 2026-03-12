---
title: "HealthScore"
domain: health-cloud-object-reference
topic: healthscore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.309Z
estimatedTokens: 1693
keywords: [HealthScore, subject’s, score, specific, category, API, version, 55.0, later, Calls, Special, Access, Rules, Usage, Associated]
---

# HealthScore

> Represents a subject’s score for a specific score category. This object
      is available in API version 55.0 and later.

# HealthScore

Represents a subject’s score for a specific score category. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| Age | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAge of the patient at the time of computation. |
| AgeBand | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPatient’s age calculated into age bands. |
| AssessmentYear | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the year the risk score is applicable to. |
| CareProgramEnrolleeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCare Program Enrollee for which this score is computed.This field is a relationship field.Relationship NameCareProgramEnrolleeRefers ToCareProgramEnrollee |
| ConditionCategoryCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the number of applicable condition categories. |
| ConditionCategoryList | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA comma separated list of condition categories that apply to the specified condition codes. |
| CurrentScore | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe patient’s current score for the score category. |
| CurrentScoreDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when the current score was derived. |
| Gender | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGender of the patient at the time of computation. |
| HierCondCategoryCodeList | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe final HCC Codes that are applicable to the patient after applying the overriding logic. |
| IsSubjectDisabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionCMS disability status of the patient at the time of computation.The default value is false. |
| IsSubjectInstitutionalized | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the patient is in an institution.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the HealthScore record. |
| PreviousScore | TypedoublePropertiesFilter, Nillable, SortDescriptionThe previous score of the subject for the specified category. This field is automatically updated when with the previous value of the CurrentScore field when the score is updated. |
| PreviousScoreDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the previous score was calculated. This field is automatically updated with the previous value of the CurrentScoreDate field when the score is updated. |
| ScoreAndDate | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFor internal use. |
| ScoreCategoryId | TypeLookupPropertiesCreate, Filter, Group, SortDescriptionThe score category that the score belongs to.Refers ToScoreCategory |
| ScoreChangePercent | TypepercentPropertiesFilter, Nillable, SortDescriptionThe degree of change between the current score and the previous score.This field is a calculated field. |
| ScoredAccountId | TypeLookupPropertiesFilter, Group, Nillable, SortDescriptionThe account that is the subject of the score.Refers ToAccount |
| ScoredContactId | TypeLookupPropertiesFilter, Group, Nillable, SortDescriptionThe contact that is the subject of the score.This field is a relationship field.Refers ToContact |
| ScoredLeadId | TypeLookupPropertiesFilter, Group, Nillable, SortDescriptionThe lead that is the subject of the score.This field is a relationship field.Refers ToLead |
| SubjectId | TypePolymorphic Master-detailPropertiesCreate, Filter, Group, SortDescriptionThe subject of the score.Refers ToAccount, Contact, Lead |

## Usage

We recommend automating scores for this object using Data Cloud or another data processing solution. However, if you choose to manually enter data for records, just use the CurrentScore, CurrentScoreDate, ScoreCategoryId, and SubjectId fields. The other fields are automatically updated as required when you create or update a record.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthScoreChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[HealthScoreFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[HealthScoreHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[HealthScoreShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- HealthScoreChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- HealthScoreFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- HealthScoreHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- HealthScoreShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
