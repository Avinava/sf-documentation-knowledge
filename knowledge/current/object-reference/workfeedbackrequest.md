---
title: "WorkFeedbackRequest"
domain: object-reference
topic: workfeedbackrequest
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:19.608Z
estimatedTokens: 1925
keywords: [WorkFeedbackRequest, feedback, subject, topic, question, recipient, application, case, offered, performance, questions, subject—for, submit, Calls, Additional]
---

# WorkFeedbackRequest

> Represents a single feedback request on a subject or topic
			(question) to a single recipient in the feedback application. In the case of offered
			feedback, WorkFeedbackRequest represents
			feedback that is offered about a subject. In the performance application, WorkFeedbackRequest represents a request
			for feedback on a set of questions from a question set, on a subject—for the
			recipient to complete and submit.

# WorkFeedbackRequest

Represents a single feedback request on a subject or topic (question) to a single recipient in the feedback application. In the case of offered feedback, WorkFeedbackRequest represents feedback that is offered about a subject. In the performance application, WorkFeedbackRequest represents a request for feedback on a set of questions from a question set, on a subject—for the recipient to complete and submit.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Additional Considerations and Related Objects

-   After a request’s state is changed to Submitted, fields can’t be changed, except for LastSharedDate and IsUnreadByOwner.
-   If LastRemindDate is updated, a reminder notification will be sent to the request’s recipient (only possible when request is in Draft state).
-   When a new request is created, a notification is sent to the recipient.
-   When a recipient of a request submits their feedback (Draft->Submitted), a notification will be sent to requester (except for offered feedback).
-   Requester cannot modify the subject of the question set after a request is created.
-   For offered feedback (to user, to manager, or both), the person who is offering feedback is both the creator of WorkFeedbackRequest as well as the recipient.

## Fields

| Field Name | Details |
| --- | --- |
| AdHocFeedback | TypetextareaPropertiesCreate, Filter, Nillable, SortDescriptionThe content of the feedback. |
| AdHocQuestion | TypetextareaPropertiesCreate, Filter, Nillable, SortDescriptionThe content of the feedback question. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the WorkFeedbackRequest. |
| FeedbackRequestState | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe current state of the feedback request. Allowed picklist values are:DraftSubmittedDeclined |
| FeedbackType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies the type of request. Picklist values that are used for performance summaries:UnspecifiedPeer SummarySelf SummaryManager SummarySkip Level SummaryPicklist values that are used for feedback:PersonalUnsolicited to UserUnsolicited to ManagerUnsolicited to User and ManagerOn TopicThe type of the feedback determines the sharing and visibility rules that are applied to answers. |
| IsDeployed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the feedback is part of a deployed performance summary cycle. |
| IsShareWithSubject | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the feedback is shared with the summary subject. |
| IsUnreadByOwner | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the submitted request has not been seen by the requester. |
| IsUnsolicited | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the feedback request is unsolicited feedback offered to another user. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed a record that is related to this WorkFeedbackRequest. |
| LastRemindDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last time a reminder was sent to the recipient of this draft request. |
| LastSharedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last time this request was shared with another user or group. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed this WorkFeedbackRequest. If this value is null, this record might have been only referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the WorkFeedbackRequest. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the WorkFeedbackRequest. |
| PerformanceCycleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed by performance summaries to link to a summary cycle. This field applies only to performance summaries. |
| QuestionSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionQuestion set associated with the current request. |
| RecipientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser asked to provide feedback on the subject. |
| RelatedObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionSpecifies a record in the system that this feedback request is related to. Used by ad-hoc feedback to gather feedback in the context of an opportunity or WDC goal.Used by performance summaries to link to a summary cycle. |
| SharingScope | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe users that see the feedback. SharingScope can have the following values:NobodySubjectManagerSubjectAndManager |
| SubjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the user that this request (or offer) is about. |
| SubmitFeedbackToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the person this performance summary feedback request (and its respective answers) is shared with. It’s also the ID of the person who owns the requested subject’s manager summary request. This field applies only to performance summaries. |
| SubmittedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last time (in case it was reopened by admin) this request was submitted by the recipient. This field applies only to performance summaries. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkFeedbackRequestFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkFeedbackRequestOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkFeedbackRequestShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkFeedbackRequestFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- WorkFeedbackRequestOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkFeedbackRequestShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
