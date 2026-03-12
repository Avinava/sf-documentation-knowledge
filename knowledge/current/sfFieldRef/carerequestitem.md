---
title: "CareRequestItem"
domain: sfFieldRef
topic: carerequestitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.360Z
estimatedTokens: 1453
keywords: [CareRequestItem, care, service, including, modifiers, effective, date, requests, associated]
---

# CareRequestItem

> Represents the details of a care service request, including name,
         modifiers, and the effective date. One or more care service requests can be associated with
         a care request.

# CareRequestItem

Represents the details of a care service request, including name, modifiers, and the effective date. One or more care service requests can be associated with a care request.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareRequestItem in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AmbulanceTransportDistance | Ambulance Transport Distance | double |  |  | 7 | 2 |
| AmbulanceTransportReason | Ambulance Transport Reason | picklist |  | 40 |  |  |
| AmbulanceTransportType | Ambulance Transport Type | picklist |  | 40 |  |  |
| ApprovedLengthOfStay | Approved Length of Stay | int | 9 |  |  |  |
| ApprovedLevelOfCare | Approved Level of Care | picklist |  | 40 |  |  |
| ApprovedQuantity | Approved Quantity | int | 9 |  |  |  |
| ApprovedServiceEndDate | Approved Service End Date | date |  |  |  |  |
| ApprovedServiceStartDate | Approved Service Start Date | date |  |  |  |  |
| AuthApprovalIdentifier | Authorization Approval Identifier | string |  | 255 |  |  |
| AuthorizationRefIdentifier | Authorization Reference Identifier | string |  | 255 |  |  |
| CareRequestCaseId | Case ID | reference |  | 18 |  |  |
| CareRequestId | Care Request ID | reference |  | 18 |  |  |
| ClinicalDetermination | Clinical Determination | picklist |  | 40 |  |  |
| ClinicalDeterminationNotes | Clinical Determination Notes | textarea |  | 4000 |  |  |
| ClinicalDeterminationReasonId | Code Set ID | reference |  | 18 |  |  |
| ClinicalServiceRequestId | Clinical Service Request ID | reference |  | 18 |  |  |
| CodeDescription | Code Description | string |  | 255 |  |  |
| CodeType | Code Type | picklist |  | 40 |  |  |
| CodeTypeIdentifier | Code Type ID | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CumulativeLengthOfStay | Cumulative Length of Stay | int | 9 |  |  |  |
| CurrentLevelOfCare | Current Level of Care | picklist |  | 40 |  |  |
| DecisionDate | Decision Date | datetime |  |  |  |  |
| DeniedLevelOfCare | Denied Level of Care | picklist |  | 40 |  |  |
| DeniedQuantity | Denied Quantity | int | 9 |  |  |  |
| EffectiveDate | Effective Date | date |  |  |  |  |
| EndDate | End Date | date |  |  |  |  |
| FreeFormProcedureDescription | Free Form Procedure Description | textarea |  | 255 |  |  |
| Id | Care Request Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ModifiedCodeDescription | Modified Code Description | string |  | 255 |  |  |
| ModifiedCodeIdentifier | Modified Code | string |  | 32 |  |  |
| ModifiedCodeType | Modified Code Type | picklist |  | 40 |  |  |
| ModifiedCodeTypeIdentifier | Modified Code Type ID | string |  | 255 |  |  |
| ModifiedEffectiveDate | Modified Effective Date | date |  |  |  |  |
| ModifiedEndDate | Modified End Date | date |  |  |  |  |
| ModifiedLevelOfCare | Modified Level of Care | picklist |  | 40 |  |  |
| ModifiedModifier | Modified Modifier | string |  | 32 |  |  |
| ModifiedModifierDescription | Modified Modifier Description | string |  | 255 |  |  |
| ModifiedProcedureCodeId | Health Care Procedure ID | reference |  | 18 |  |  |
| ModifiedProcedureCodeSetId | Modified Procedure Code Set ID | reference |  | 18 |  |  |
| ModifiedQuantity | Modified Quantity | int | 9 |  |  |  |
| Modifier | Modifier | string |  | 32 |  |  |
| Modifier2 | Modifier 2 | string |  | 32 |  |  |
| Modifier2Description | Modifier 2 Description | string |  | 255 |  |  |
| Modifier3 | Modifier 3 | string |  | 32 |  |  |
| Modifier3Description | Modifier 3 Description | string |  | 255 |  |  |
| Modifier4 | Modifier 4 | string |  | 32 |  |  |
| Modifier4Description | Modifier 4 Description | string |  | 255 |  |  |
| ModifierCodeSetId | Modifier Code Set ID | reference |  | 18 |  |  |
| ModifierDescription | Modifier Description | string |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| ProcedureCodeId | Health Care Procedure ID | reference |  | 18 |  |  |
| ProcedureCodeSetId | Procedure Code Set ID | reference |  | 18 |  |  |
| Quantity | Quantity | int | 9 |  |  |  |
| QuantityType | Quantity Type | picklist |  | 40 |  |  |
| ReasonCodeId | Reason Code ID | reference |  | 18 |  |  |
| RequestType | Request Type | picklist |  | 40 |  |  |
| RequestedLengthOfStay | Requested Length of Stay | int | 9 |  |  |  |
| RequestedLevelOfCare | Requested Level of Care | picklist |  | 40 |  |  |
| RequestedServiceEndDate | Requested Service End Date | date |  |  |  |  |
| RequestedServiceStartDate | Requested Service Start Date | date |  |  |  |  |
| ServiceCategory | Service Category | string |  | 64 |  |  |
| ServiceCategoryCode | Service Category Code | string |  | 64 |  |  |
| ServicingFacilityId | Servicing Facility ID | reference |  | 18 |  |  |
| ServicingProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusReason | Status Reason | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransportLocationId | Account ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
