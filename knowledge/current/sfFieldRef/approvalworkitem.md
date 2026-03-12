---
title: "ApprovalWorkItem"
domain: sfFieldRef
topic: approvalworkitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.905Z
estimatedTokens: 484
keywords: [ApprovalWorkItem, run-time, step, approval, workflow, assignees, their, decisions, regarding, object's, master-detail, relationship, ApprovalSubmission, API, version]
---

# ApprovalWorkItem

> Contains run-time information about each step in an approval workflow, such as
         assignees and their decisions regarding the object's approval. Has a master-detail
         relationship with ApprovalSubmission. This object is available in API version 61.0 and
      later.

# ApprovalWorkItem

Contains run-time information about each step in an approval workflow, such as assignees and their decisions regarding the object's approval. Has a master-detail relationship with ApprovalSubmission. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApprovalWorkItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_approvalworkitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApprovalConditionName | Approval Condition Name | string |  | 255 |  |  |
| ApprovalSubmissionId | Approval Submission ID | reference |  | 18 |  |  |
| AssignedToId | Assigned To ID | reference |  | 18 |  |  |
| Comments | Comments | textarea |  | 32000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FlowOrchestrationWorkItemId | Orchestration Work Item ID | reference |  | 18 |  |  |
| Id | Approval Work Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Approval Work Item Name | string |  | 255 |  |  |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| RelatedRecordObjectName | Related Record Object Name | string |  | 255 |  |  |
| ReviewedById | User ID | reference |  | 18 |  |  |
| ReviewedDate | Reviewed Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
