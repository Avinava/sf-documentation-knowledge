---
title: "WorkFeedbackQuestionSet"
domain: object-reference
topic: workfeedbackquestionset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.595Z
estimatedTokens: 746
keywords: [WorkFeedbackQuestionSet, questions, asked, question, link, individual, requests, different, recipients, were, subject, Calls, Associated, Objects]
---

# WorkFeedbackQuestionSet

> Represents a set of questions being asked. The question set is used
			to link all the individual requests where different recipients were asked the same set
			of questions on the same subject.

# WorkFeedbackQuestionSet

Represents a set of questions being asked. The question set is used to link all the individual requests where different recipients were asked the same set of questions on the same subject.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

In the WDC performance application, a question set defines the type of summaries and their due dates that will accompany the deployment of a specific performance summary cycle.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| DueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that this specific question set is expected to be submitted by the recipient. This field applies only to performance summaries. |
| FeedbackType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe description of the collection of questions that are written in context to the type of recipient answering them, relative to the subject of the summary. This field applies only to performance summaries. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the question set. Maximum length is 225 characters. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the WorkFeedbackQuestionSet. |
| PerformanceCycleId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIf a question set is associated to a performance summary cycle, then that cycle ID is referenced in this field. This field applies only to performance summaries. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkFeedbackQuestionSetOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkFeedbackQuestionSetShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkFeedbackQuestionSetOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkFeedbackQuestionSetShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
