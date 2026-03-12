---
title: "ApprovalAlertContentDef"
domain: object-reference
topic: approvalalertcontentdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.737Z
estimatedTokens: 616
keywords: [ApprovalAlertContentDef, mapping, links, specific, user-created, email, templates, different, notification, events, initial, assignment, reassignment, Advanced, Approvals]
---

# ApprovalAlertContentDef

> Represents the mapping that links specific user-created email
         templates to different notification events such as initial assignment or reassignment
         within an Advanced Approvals flow. This object is available in API version 66.0 and
      later.

# ApprovalAlertContentDef

Represents the mapping that links specific user-created email templates to different notification events such as initial assignment or reassignment within an Advanced Approvals flow. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available in Enterprise, Professional, Unlimited, and Developer Editions where Advanced Approvals is enabled.

## Fields

| Field | Details |
| --- | --- |
| ApprovalFlowApiName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the approval workflow. |
| ApprovalStepApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique API name of the approval step. |
| EmailTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email template that's associated with an approval step in the approval workflow.This field is a relationship field.Relationship NameEmailTemplateRefers ToEmailTemplate |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the approval alert content definition. |
| NotificationReason | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe reason within an approval step's lifecycle that triggers the notification for which an email is sent. For example, when an approval work item is moved from one user to another, a reassignment notification email is sent to the user.Possible values are:ApprovalCreationSuccessApprovalStepAssignmentApprovalStepAssignmentToDelegateApprovalStepReassignmentApprovalStepReassignmentToDelegateApprovalSubmissionApprovedOrRejectedStatusUpdateApprovalWorkItemStatusUpdateAutoApprovalConfirmation |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.

[ApprovalAlertContentDefHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ApprovalAlertContentDefHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
