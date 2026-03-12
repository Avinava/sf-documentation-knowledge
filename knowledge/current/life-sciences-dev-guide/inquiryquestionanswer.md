---
title: "InquiryQuestionAnswer"
domain: life-sciences-dev-guide
topic: inquiryquestionanswer
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:46.155Z
estimatedTokens: 1169
keywords: [InquiryQuestionAnswer, answer, provided, Medical, Science, Liaison, MSL, inquiry, question, API, version, 65.0, later, Calls, Associated]
---

# InquiryQuestionAnswer

> Represents the answer provided by the Medical Science Liaison (MSL) to the
         inquiry question. This object is available in API version 65.0 and later.

# InquiryQuestionAnswer

Represents the answer provided by the Medical Science Liaison (MSL) to the inquiry question. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional details related to the response provided for the inquiry question. |
| InquiryQuestionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID associated with the inquiry question.This field is a relationship field.Relationship NameInquiryQuestionRefers ToInquiryQuestion |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name assigned to the answer of the inquiry question. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Response | TypetextareaPropertiesCreate, UpdateDescriptionThe answer or response provided to the inquiry question. |
| ResponseContactPointRecId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact method used to deliver the response.This field is a polymorphic relationship field.Relationship NameResponseContactPointRecRefers ToContactPointAddress, ContactPointEmail, ContactPointPhone |
| ResponseDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the response was provided. |
| ResponseDurationDays | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of days taken to provide a response to the inquiry.This field is a calculated field. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system that generated the record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InquiryQuestionAnswerChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[InquiryQuestionAnswerFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InquiryQuestionAnswerHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InquiryQuestionAnswerShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InquiryQuestionAnswerChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- InquiryQuestionAnswerFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- InquiryQuestionAnswerHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- InquiryQuestionAnswerShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
