---
title: "ApprovalSubmissionDetail"
domain: sfFieldRef
topic: approvalsubmissiondetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.870Z
estimatedTokens: 470
keywords: [ApprovalSubmissionDetail, additional, operations, happening, approval, lifecycle, hold, any, that’s, already, captured, ApprovalSubmission, ApprovalWorkItem, entities, API]
---

# ApprovalSubmissionDetail

> ApprovalSubmissionDetail contains  additional information about operations
         happening during the approval lifecycle. It will not hold any information that’s already
         captured in the existing ApprovalSubmission and ApprovalWorkItem entities.  This
      object is available in API version 62.0 and later.

# ApprovalSubmissionDetail

ApprovalSubmissionDetail contains additional information about operations happening during the approval lifecycle. It will not hold any information that’s already captured in the existing ApprovalSubmission and ApprovalWorkItem entities. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApprovalSubmissionDetail](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_approvalsubmissiondetail.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionChannelName | Action Channel Name | picklist |  | 255 |  |  |
| ActionContext | Action Context | string |  | 255 |  |  |
| ActionName | Action Name | picklist |  | 255 |  |  |
| ActionPerformedById | User ID | reference |  | 18 |  |  |
| ActionPerformerRole | Action Performer Role | picklist |  | 255 |  |  |
| ApprovalSubmissionId | Approval Submission ID | reference |  | 18 |  |  |
| ApprovalWorkItemId | Approval Work Item ID | reference |  | 18 |  |  |
| Comments | Comments | textarea |  | 32000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Approval Submission Detail ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Approval Submission Detail Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
