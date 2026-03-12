---
title: "WorkFeedback"
domain: object-reference
topic: workfeedback
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:19.583Z
estimatedTokens: 716
keywords: [WorkFeedback, answer, question, person, asked, via, feedback, store, offered, linking, particular, Calls, Additional, Considerations, Objects]
---

# WorkFeedback

> Represents the answer to a question that a person was asked via a
			feedback request. Also used to store offered feedback without linking it to a particular
			question.

# WorkFeedback

Represents the answer to a question that a person was asked via a feedback request. Also used to store offered feedback without linking it to a particular question.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Additional Considerations and Related Objects

-   Ownership is transferred to the requester on submit for certain types (ad-hoc feedback).
-   The record is read-only after the request that it’s linked to is set to Submitted.
-   You can’t link a feedback object to a request unless you are the recipient.
-   The question that the feedback is linked to must be part of the same question set that the request is linked to.

## Fields

| Field Name | Details |
| --- | --- |
| Feedback | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionContains either the free-form text of the answer, or the choice selected by the user. Max length is 65536. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the WorkFeedback record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the WorkFeedback record. |
| QuestionId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe question this answer applies to. When this feedback is linked to a request of an unsolicited type, the question ID is null. |
| RequestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the request this response belongs to, in case of offered feedback. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkFeedbackOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkFeedbackShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkFeedbackOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkFeedbackShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
