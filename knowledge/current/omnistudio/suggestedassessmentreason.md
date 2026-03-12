---
title: "SuggestedAssessmentReason"
domain: omnistudio
topic: suggestedassessmentreason
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:52.762Z
estimatedTokens: 636
keywords: [SuggestedAssessmentReason, Stores, reasons, suggested, assessment, API, version, 60.0, later, Calls, Associated, Objects]
---

# SuggestedAssessmentReason

> Stores the reasons for a suggested assessment. This object is available
      in API version 60.0 and later.

# SuggestedAssessmentReason

Stores the reasons for a suggested assessment. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| PrimaryAsmtQuestionResponseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe response value in the primary assessment that triggered the suggested assessment.This field is a relationship field.Relationship NamePrimaryAsmtQuestionResponseRelationship TypeLookupRefers ToAssessmentQuestionResponse |
| PrimaryAssessmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe primary assessment from which a suggested assessment was triggered.This field is a relationship field.Relationship NamePrimaryAssessmentRelationship TypeLookupRefers ToAssessment |
| SuggestedAssessmentDefId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe suggested assessment associated with the suggested assessment reason.This field is a relationship field.Relationship NameSuggestedAssessmentDefRelationship TypeLookupRefers ToSuggestedAssessmentDef |
| SuggestionSourceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the source of the logic by which an assessment was suggested.Possible values are:Business RuleMCG |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SuggestedAssessmentReasonFeed](https://developer.salesforce.com/docs/atlas.en-us.248.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[SuggestedAssessmentReasonHistory](https://developer.salesforce.com/docs/atlas.en-us.248.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
