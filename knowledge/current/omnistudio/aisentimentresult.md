---
title: "AISentimentResult"
domain: omnistudio
topic: aisentimentresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.562Z
keywords: [AISentimentResult, Supported, Calls, Fields, Associated, Object]
---

# AISentimentResult

# AISentimentResult

Represents the outcome of the sentiment analysis performed on a text field of a Salesforce object by a third-party service provider. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the AI Sentiment Result was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the AI Sentiment Result was last viewed. |
| MixedConfidenceScore | TypedoublePropertiesFilter, Nillable, SortDescriptionThe mixed confidence score from the result of the sentiment analysis. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the AI Sentiment Result record. |
| NegativeConfidenceScore | TypedoublePropertiesFilter, Nillable, SortDescriptionThe negative confidence score from the result of the sentiment analysis. |
| NeutralConfidenceScore | TypedoublePropertiesFilter, Nillable, SortDescriptionThe neutral confidence score from the result of the sentiment analysis. |
| OverallSentimentScore | TypedoublePropertiesFilter, Nillable, SortDescriptionThe overall score of the sentiment analysis. |
| OverallSentimentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe result of the sentiment analysis.Possible values are:MixedNegativeNeutralPositive |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner ID of the AI Sentiment Result record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PositiveConfidenceScore | TypedoublePropertiesFilter, Nillable, SortDescriptionThe positive confidence score from the result of the sentiment analysis. |
| Response | TypetextareaPropertiesNillableDescriptionThe score of the sentiment analysis stored in JSON format. |
| ServiceType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe third-party service name that performs the sentiment analysis.Possible values are:AWS_Comprehend_DetectSentiment |
| SourceObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe standard or custom object containing the text field that’s processed for sentiment analysis.This field is a polymorphic relationship field.Relationship NameSourceObjectRelationship TypeLookup |
| SourceObjectType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe name of the standard or custom object with the record containing the text field that’s processed for sentiment analysis.Possible values are:SurveyQuestionResponse |
| SourceTextField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe name of the text field that’s processed for sentiment analysis.Possible values are:SurveyQuestionResponse.ChoiceValueSurveyQuestionResponse.ResponseValue |
| SourceTextLanguage | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language of the text that’s processed for sentiment analysis. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the sentiment analysis.Possible values are:CompletedDraftFailedRejectedSubmittedThe default value is Draft. |

## Associated Object

This object has the following associated object. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[AISentimentResultShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.