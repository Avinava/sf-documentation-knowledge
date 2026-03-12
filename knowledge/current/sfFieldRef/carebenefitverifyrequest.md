---
title: "CareBenefitVerifyRequest"
domain: sfFieldRef
topic: carebenefitverifyrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.315Z
estimatedTokens: 774
keywords: [CareBenefitVerifyRequest, verification, benefits, API, version, 53.0, later]
---

# CareBenefitVerifyRequest

> Request for verification of benefits. This object is available in API
      version 53.0 and later.

# CareBenefitVerifyRequest

Request for verification of benefits. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareBenefitVerifyRequest in the Life Sciences Cloud Developer Guide and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssignedToId | User ID | reference |  | 18 |  |  |
| AuthorizedPrescriptionId | Authorized Prescription ID | reference |  | 18 |  |  |
| BenefitCategoryCodeId | Code Set ID | reference |  | 18 |  |  |
| BillablePrdEndDateTime | Billable Period End Date | datetime |  |  |  |  |
| BillablePrdStartDateTime | Billable Period Start Date | datetime |  |  |  |  |
| CareProgramEnrolleeId | Care Program Enrollee ID | reference |  | 18 |  |  |
| CareProgramId | Care Program ID | reference |  | 18 |  |  |
| CaseId | Case ID | reference |  | 18 |  |  |
| CoverageBenefitId | Coverage Benefit ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Care Benefit Verify Request ID | id |  | 18 |  |  |
| InitialFillDuration | Initial Fill Duration | double |  |  | 6 | 2 |
| InitialFillQuantity | Initial Fill Quantity | double |  |  | 6 | 2 |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MemberPlanId | Member Plan ID | reference |  | 18 |  |  |
| Name | Care Benefit Verify Request Name | string |  | 255 |  |  |
| OriginalPrescriptionId | Original Prescription ID | reference |  | 18 |  |  |
| PayerId | Account ID | reference |  | 18 |  |  |
| PlanId | Purchaser Plan ID | reference |  | 18 |  |  |
| PrescriberId | Healthcare Provider ID | reference |  | 18 |  |  |
| PrescriptionMedicationId | Prescription Medication ID | reference |  | 18 |  |  |
| PriorityCodeId | Code Set ID | reference |  | 18 |  |  |
| ProviderId | Provider ID | reference |  | 18 |  |  |
| RelatedCareBnftVerifyRequestId | Care Benefit Verify Request ID | reference |  | 18 |  |  |
| Request | Request | textarea |  | 65536 |  |  |
| RequestDate | Request Date | datetime |  |  |  |  |
| RequestedById | User ID | reference |  | 18 |  |  |
| RequesterId | Requester ID | reference |  | 18 |  |  |
| ResponseBody | Response Body | base64 |  |  |  |  |
| ResponseContentType | Response Content Type | picklist |  | 255 |  |  |
| ResponseLength | Response Length | int | 9 |  |  |  |
| ResponseName | Response Name | string |  | 40 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StatusReason | Status Reason | textarea |  | 16000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VerificationMode | Verification Mode | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
