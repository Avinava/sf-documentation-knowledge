---
title: "ApprovalSubmission"
domain: object-reference
topic: approvalsubmission
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.748Z
estimatedTokens: 1091
keywords: [ApprovalSubmission, instance, approval, that's, submitted, record, API, version, 62.0, later, Calls, Special, Access, Rules, Associated]
---

# ApprovalSubmission

> Represents the instance of an approval request that's submitted for a record
         of the related object. This object is available in API version 62.0 and
      later.

# ApprovalSubmission

Represents the instance of an approval request that's submitted for a record of the related object. This object is available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

This object is available for users with a Salesforce user license of type Salesforce in Enterprise, Performance, Unlimited, and Developer Editions.

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesNillable, UpdateDescriptionThe comments that the user adds when they submit the request for approval. |
| DoesSendApprovalEmail | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether approval request emails are sent to approvers and delegates (true) or not (false).The default value is false. |
| FlowOrchestrationInstanceId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the flow orchestration instance record that's associated with the approval.This field is a relationship field.Relationship NameFlowOrchestrationInstanceRefers ToFlowOrchestrationInstance |
| IsEligibleForSmartApproval | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the approval submission is eligible for smart approval (true) or not (false).The default value is false.This field is only available with Advanced Approvals enabled. |
| IsSmartApprovalRun | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this approval submission either is run in smart approval mode (true) or not (false).The default value is false.This field is only available with Advanced Approvals enabled. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe sequentially-generated name of the approval submission record, for example AS-000000001. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionThe ID of the user or the group that owns the approval submission record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToUser |
| RelatedRecordId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionRequired. The API name of the related record that’s submitted for approval.Relationship NameRelatedRecordRefers ToThe objects that you have access to for approvals. |
| RelatedRecordObjectName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionRequired. The type of record that was submitted for approval. |
| SmartApprvlBasisSubmissionId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe previous approval submission used as reference for the auto-approval evaluation.This field is a relationship field.This field is only available with Advanced Approvals enabled.Relationship NameSmartApprvlBasisSubmissionRefers ToApprovalSubmission |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the approval.Valid values are:ApprovedCanceledErroredInProgressRecalledRejectedSuspended |
| SubmittedById | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionRequired. The ID of the user who submitted the record for approval.This field is a relationship field.Relationship NameSubmittedByRefers ToUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApprovalSubmissionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[ApprovalSubmissionHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ApprovalSubmissionShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- ApprovalSubmissionHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
