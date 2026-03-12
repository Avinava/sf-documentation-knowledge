---
title: "CareProgramEnrollee"
domain: sfFieldRef
topic: careprogramenrollee
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.887Z
estimatedTokens: 473
keywords: [CareProgramEnrollee, participant, enrolled, care, program]
---

# CareProgramEnrollee

> Represents a participant enrolled in a care program.

# CareProgramEnrollee

Represents a participant enrolled in a care program.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareProgramEnrollee in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CareProgramId | Care Program ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EnrollmentLocationId | Territory ID | reference |  | 18 |  |  |
| FlowInterviewId | Flow Interview ID | reference |  | 18 |  |  |
| FlowOrchestrationInstanceId | Orchestration Run ID | reference |  | 18 |  |  |
| Id | Care Program Enrollee ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeadId | Lead ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OptOutPeriodEndDateTime | Opt Out Period End Date | datetime |  |  |  |  |
| OptOutPeriodStartDateTime | Opt Out Period Start Date | datetime |  |  |  |  |
| OptOutReasonType | Opt Out Reason Type | picklist |  | 40 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
