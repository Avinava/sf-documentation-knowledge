---
title: "ApprovalSubmission"
domain: sfFieldRef
topic: approvalsubmission
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.863Z
estimatedTokens: 431
keywords: [ApprovalSubmission, instance, approval, that's, submitted, record, API, version, 62.0, later]
---

# ApprovalSubmission

> Represents the instance of an approval request that's submitted for a record
         of the related object. This object is available in API version 62.0 and
      later.

# ApprovalSubmission

Represents the instance of an approval request that's submitted for a record of the related object. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApprovalSubmission](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_approvalsubmission.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Transaction Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Comments | Comments | textarea |  | 32000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DoesSendApprovalEmail | Send Approval Email | boolean |  |  |  |  |
| FlowOrchestrationInstanceId | Orchestration Run ID | reference |  | 18 |  |  |
| Id | Approval Submission ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Approval Submission Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| RelatedRecordObjectName | Related Record Object Name | string |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SubmittedById | User ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
