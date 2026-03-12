---
title: "BenefitAssignment"
domain: sfFieldRef
topic: benefitassignment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:49.586Z
estimatedTokens: 921
keywords: [BenefitAssignment, enrollment, individual, business, captured, application, unemployed, raise, requesting, help, government, approved, enrolled, unemployment, insurance]
---

# BenefitAssignment

> Represents the enrollment information of an individual or business that is
         captured in an application. For example, an individual who is unemployed can raise an
         application requesting help from the government. If it is approved, the individual is
         enrolled into the unemployment insurance benefit. This object is available in API
      version 52.0 and later.

# BenefitAssignment

Represents the enrollment information of an individual or business that is captured in an application. For example, an individual who is unemployed can raise an application requesting help from the government. If it is approved, the individual is enrolled into the unemployment insurance benefit. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BenefitAssignment in the Education Cloud Developer Guide, Energy and Utilities Cloud Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApprovalRejectionReason | Approval Rejection Reason | string |  | 255 |  |  |
| ApprovalStatus | Approval Status | picklist |  | 40 |  |  |
| AssignmentDate | Assignment Date | date |  |  |  |  |
| BenefitAssignmentKeywords | Benefit Assignment Keywords | textarea |  | 65000 |  |  |
| BenefitAssignmentSummary | Benefit Assignment Summary | textarea |  | 32000 |  |  |
| BenefitId | Benefit ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EarningThresholdAmount | Earning Threshold Amount | currency |  |  | 18 | 2 |
| EligibilityDeterminationmethod | Eligibility Determination Method | picklist |  | 40 |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| EnrolleeId | Enrollee ID | reference |  | 18 |  |  |
| EnrollmentCount | Enrollment Count | int | 9 |  |  |  |
| EntitlementAmount | Entitlement Amount | currency |  |  | 18 | 2 |
| Id | Benefit Assignment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaximumBenefitAmount | Maximum Benefit Amount | currency |  |  | 18 | 2 |
| MinimumBenefitAmount | Minimum Benefit Amount | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| NextPayoutDate | Next Payout Date | date |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentRecordId | Parent Record ID | reference |  | 18 |  |  |
| PayoutFrequency | Payout Frequency | picklist |  | 255 |  |  |
| Priority | Priority | picklist |  | 255 |  |  |
| ProgramEnrollmentId | Program Enrollment ID | reference |  | 18 |  |  |
| Quantity | Quantity | int | 9 |  |  |  |
| RecertificationDueDate | Recertification Due Date | date |  |  |  |  |
| RecertificationStatus | Recertification Status | picklist |  | 255 |  |  |
| ReferenceNumber | Reference Number | string |  | 255 |  |  |
| RemainingAmount | Remaining Amount | currency |  |  | 18 | 2 |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaskJobStatus | Task Job Status | picklist |  | 255 |  |  |
| TaskJobStatusMessage | Task Job Status Message | textarea |  | 2000 |  |  |
| TerminationNotificationDate | Termination Notification Date | date |  |  |  |  |
| TerminationReason | Termination Reason | picklist |  | 40 |  |  |
| TotalApprovedAmount | Total Approved Amount | currency |  |  | 18 | 2 |
| TotalPaidAmount | Total Paid Amount | currency |  |  | 18 | 2 |
| UnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
