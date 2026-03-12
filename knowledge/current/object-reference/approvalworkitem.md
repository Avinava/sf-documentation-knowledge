---
title: "ApprovalWorkItem"
domain: object-reference
topic: approvalworkitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.769Z
estimatedTokens: 1263
keywords: [ApprovalWorkItem, run-time, step, approval, workflow, assignees, their, decisions, regarding, object's, master-detail, relationship, ApprovalSubmission, API, version]
---

# ApprovalWorkItem

> Contains run-time information about each step in an approval workflow, such as
         assignees and their decisions regarding the object's approval. Has a master-detail
         relationship with ApprovalSubmission. This object is available in API version 61.0 and
      later.

# ApprovalWorkItem

Contains run-time information about each step in an approval workflow, such as assignees and their decisions regarding the object's approval. Has a master-detail relationship with ApprovalSubmission. This object is available in API version 61.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

This object is available in Enterprise, Performance, Unlimited, and Developer Editions for users with access to the Approval Submission object.

## Fields

| Field | Details |
| --- | --- |
| ApprovalChainName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe name of the related approval chain. This field is populated when there are multiple approval chains that are run in parallel. This field is only available with Advanced Approvals enabled. |
| ApprovalConditionName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe name of the condition that assigns the work item to a user or group for approval. |
| ApprovalSubmissionId | TypereferencePropertiesFilter, Group, SortDescriptionThe approval submission that's associated with this item.This field is a relationship field.Relationship NameApprovalSubmissionRelationship TypeMaster-detailRefers ToApprovalSubmission (the master object) |
| AssignedToId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe user, group, or queue that was assigned the work item.This field is a polymorphic relationship field.Relationship NameAssignedToRefers ToGroup (Type = Regular), Group (Type = Queue), User |
| Comments | TypetextareaPropertiesNillable, UpdateDescriptionThe comments that the user adds when they review or override the work item. |
| FlowOrchestrationWorkItemId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the associated flow orchestration work item.This field is a relationship field.Relationship NameFlowOrchestrationWorkItemRefers ToFlowOrchestrationWorkItem |
| IsAutoReviewed | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the work item was auto-reviewed (true) or not (false).The default value is false.This field is only available with Advanced Approvals enabled. |
| IsEligibleForAutoApproval | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether custom logic is used for auto-approval of this approval work item (true) or not (false).This field is only available with Advanced Approvals enabled. |
| IsEligibleForSmartApproval | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the approval work item is eligible for smart approval (true) or not (false).The default value is false.This field is only available with Advanced Approvals enabled. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe sequentially-generated name of the related record that’s submitted for approval, for example AWI-000000001. |
| RelatedRecordId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe API name of the related record that's submitted for approval.Relationship NameRelatedRecordRefers ToThe objects that you have access to for approvals. |
| RelatedRecordObjectName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe name of the related record that's submitted for approval. |
| ReviewedById | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the user that reviewed the work item.This field is a relationship field.Relationship NameReviewedByRefers ToUser |
| ReviewedDate | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionThe date and time when the work item was reviewed. |
| SmartApprovalBasisWorkItemId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe previous approval work item used as a reference for the auto-approval evaluation.This field is a relationship field.This field is only available with Advanced Approvals enabled.Relationship NameSmartApprovalBasisWorkItemRefers ToApprovalWorkItem |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the approval work item.Possible values are:ApprovedAssignedCanceledErrored—ErrorRecalledRejectedWithdrawn |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApprovalWorkItemHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ApprovalWorkItemHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
