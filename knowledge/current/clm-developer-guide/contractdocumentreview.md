---
title: "ContractDocumentReview"
domain: clm-developer-guide
topic: contractdocumentreview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.652Z
estimatedTokens: 560
keywords: [ContractDocumentReview, review, process-related, status, API, version, 58.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ContractDocumentReview

> Represents the review process-related details, such as the reference object
         type and review status.  This object is available in API version 58.0 and later.

# ContractDocumentReview

Represents the review process-related details, such as the reference object type and review status. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

ContractDocumentReview is available if your org has the DocGen platform license and related addon and user licenses.

## Fields

| Field | Details |
| --- | --- |
| ContractDocumentVersionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe contract document version associated with the external document.This field is a relationship field.Relationship NameContractDocumentVersionRelationship TypeLookupRefers ToContractDocumentVersion |
| ExternalReviewerEmail | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe email ID for the document reviewer. |
| ExternalReviewerIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe alphanumeric external identifier for the reviewer. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of contract document. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of document review. The default value is NotStarted.Possible values are:Completed—CompleteInProgress—In ProgressNotStarted—Not Started |
| UnresolvedCommentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of unresolved comments in the document. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ContractDocumentReviewChangeEvent

Change events are available for the object.

ContractDocumentReviewFeed

Feed tracking is available for the object.

ContractDocumentReviewHistory

History is available for tracked fields of the object.

ContractDocumentReviewOwnerSharingRule

Sharing rules are available for the object.

ContractDocumentReviewShare

Sharing is available for the object.
