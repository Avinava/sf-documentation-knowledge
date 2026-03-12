---
title: "AssessmentQuestionResponse"
domain: omnistudio
topic: assessmentquestionresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.945Z
estimatedTokens: 1587
keywords: [AssessmentQuestionResponse, Stores, responses, submitted, assessment, API, version, 55.0, later, Calls, Associated, Objects]
---

# AssessmentQuestionResponse

> Stores the responses submitted to an assessment. This object is
      available in API version 55.0 and later.

# AssessmentQuestionResponse

Stores the responses submitted to an assessment. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the assessment associated with this record.This is a relationship field.Relationship NameAssessmentRelationship TypeMaster-detailRefers ToAssessment (the master object) |
| AssessmentQuestionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the assessment question associated with this record.This is a relationship field.Relationship NameAssessmentQuestionRelationship TypeLookupRefers ToAssessmentQuestionVersion |
| ChoiceValue | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe response value when the question's data type is choice. |
| CurrencyValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe response value when the question's data type is currency. |
| DateTimeValue | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe response value when the question's data type is date time. |
| DateValue | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe response value when the question's data type is date. |
| DecimalResponseValue | TypedoublePropertiesCreate, Filter, idLookup, Nillable, Sort, UpdateDescriptionThe response value when the question's data type is decimal. |
| ExtlAssessmentQuestionText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores the external assessment question text. |
| ExtlResponseValueIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of a response to a question in an external assessment. |
| IntegerResponseValue | TypeintPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe response value when the associated assessment question's data type is integer. |
| IsTrueOrFalseValue | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe response value when the question's data type is boolean.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of this record. |
| OriginType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the origin of the assessment question response.Possible values are:AutoManualOverride |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the relationship record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentAsmtQuestionVersionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related assessment question version associated with the assessment question response.This is a relationship field.Relationship NameParentAsmtQuestionVersionRelationship TypeLookupRefers ToAssessmentQuestionVersion |
| RespondentTimezone | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe auto-generated timezone of the respondent submitting the assessment response. |
| ResponseText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe response value when the question's data type is text. |
| ResponseType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe data type of the response value submitted. |
| ResponseValue | TypetextareaPropertiesNillableDescriptionThe response value to the assessment question. |
| ResponseValueScore | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe score of the assessment question response value. |
| ReviewerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who reviewed and edited the response.This field is a polymorphic relationship field.Relationship NameReviewerRefers ToAccount, Contact, HealthcareProvider, User |
| ReviewerRoleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe role of the person who reviewed and edited the response.This field is a polymorphic relationship field.Relationship NameReviewerRoleRefers ToCodeSet, CodeSetBundle |
| TimeValue | TypetimePropertiesCreate, Filter, idLookup, Nillable, Sort, UpdateDescriptionThe response value when the question's data type is time. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssessmentQuestionResponseChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AssessmentQuestionResponseFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AssessmentQuestionResponseHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[AssessmentQuestionResponseShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
