---
title: "ApprovalSubmissionDetail"
domain: object-reference
topic: approvalsubmissiondetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.757Z
estimatedTokens: 917
keywords: [ApprovalSubmissionDetail, additional, operations, happening, approval, lifecycle, hold, any, that’s, already, captured, ApprovalSubmission, ApprovalWorkItem, entities, API]
---

# ApprovalSubmissionDetail

> ApprovalSubmissionDetail contains  additional information about operations
         happening during the approval lifecycle. It will not hold any information that’s already
         captured in the existing ApprovalSubmission and ApprovalWorkItem entities.  This
      object is available in API version 62.0 and later.

# ApprovalSubmissionDetail

ApprovalSubmissionDetail contains additional information about operations happening during the approval lifecycle. It will not hold any information that’s already captured in the existing ApprovalSubmission and ApprovalWorkItem entities. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

This object is available in Enterprise, Performance, Unlimited, and Developer Editions for users with access to the Approval Submission object.

## Fields

| Field | Details |
| --- | --- |
| ActionChannelName | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionThe name of the channel where the action was performed.Valid values are:ApprovalRecordEmailInvocableActionScreenFlowSlackSystem |
| ActionContext | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe context of the action taken for the item assigned for approval. For example, if the approval has been reassigned the string would be Reassigned from User Id - <original_assignee_id>. |
| ActionName | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionThe action taken for the item assigned for approval.Valid values are:CancelOverrideReassignRecallReview |
| ActionPerformedById | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the user who performed the action on the item submitted for approval.This field is a relationship field.Relationship NameActionPerformedByRefers ToUser |
| ActionPerformerRole | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionThe role of the user who performed the action on the item submitted for approval.Valid values are:AdminAssigneeDelegateSubmitterSystem |
| ApprovalSubmissionId | TypereferencePropertiesFilter, Group, SortDescriptionThe approval submission that's associated with the detail record.This field is a relationship field.Relationship NameApprovalSubmissionRelationship TypeMaster-detailRefers ToApprovalSubmission (the master object) |
| ApprovalWorkItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe approval assignment associated with the detail record.This field is a relationship field.Relationship NameApprovalWorkItemRefers ToApprovalWorkItem |
| Comments | TypetextareaPropertiesNillable, UpdateDescriptionThe comments that the user adds when they cancel, review, reassign or recall the request. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe sequentially-generated name of the approval submission detail record, for example ASD-000000026. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApprovalSubmissionDetailHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ApprovalSubmissionDetailHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
