---
title: "CareRequest"
domain: sfFieldRef
topic: carerequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.246Z
estimatedTokens: 2277
keywords: [CareRequest, general, care-related, including, member, admission, date, decision, reason, contain, multiple, diagnoses, services, drugs, Care]
---

# CareRequest

> Represents the general details of a care-related request including
			member information, admission date, decision reason, and so on. A single request can
			contain multiple diagnoses, services, or drugs. Care requests include preauthorizations
			for drugs and services, admission notifications, concurrent review of admissions,
			appeals, complaints, and grievances.

# CareRequest

Represents the general details of a care-related request including member information, admission date, decision reason, and so on. A single request can contain multiple diagnoses, services, or drugs. Care requests include preauthorizations for drugs and services, admission notifications, concurrent review of admissions, appeals, complaints, and grievances.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareRequest in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AcknowledgementLetterSentDate | Acknowledgement Letter Sent Date | datetime |  |  |  |  |
| ActualAdmissionDate | Actual Admission Date | datetime |  |  |  |  |
| ActualDischargeDate | Actual Discharge Date | datetime |  |  |  |  |
| AdmissionNotes | Admission Notes | textarea |  | 32000 |  |  |
| AdmissionSource | Admission Source | picklist |  | 40 |  |  |
| AdmissionType | Admission Type | picklist |  | 40 |  |  |
| AorReceivedDate | AOR Received Date | datetime |  |  |  |  |
| AorRequestedDate | AOR Requested Date | datetime |  |  |  |  |
| AppealRequestReasonType | Appeal Request Reason Type | picklist |  | 40 |  |  |
| AppointedRepVerbalContactDate | Appointed Rep Verbal Contact Date | datetime |  |  |  |  |
| AppointedRepWrittenContactDate | Appointed Rep Written Contact Date | datetime |  |  |  |  |
| AppointedRepresentativeId | Account ID | reference |  | 18 |  |  |
| ApprovedLengthOfStay | Approved Length of Stay | int | 9 |  |  |  |
| ApprovedLevelOfCare | Approved Level of Care | picklist |  | 40 |  |  |
| CareRequestCaseId | Case ID | reference |  | 18 |  |  |
| ClaimNumber | Claim Number | string |  | 32 |  |  |
| ClinicalCaseType | Clinical Case Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CriteriaMet | Criteria Met | picklist |  | 40 |  |  |
| CumulativeLengthOfStay | Cumulative Length of Stay | int | 9 |  |  |  |
| CurrentLevelOfCare | Current Level of Care | picklist |  | 40 |  |  |
| DecisionDate | Decision Date | datetime |  |  |  |  |
| DecisionDaysRemaining | Decision Days Remaining | int | 9 |  |  |  |
| DecisionLetter | Decision Letter | textarea |  | 32000 |  |  |
| DecisionNotes | Decision Notes | textarea |  | 32000 |  |  |
| DecisionReason | Decision Reason | picklist |  | 40 |  |  |
| DecisionReasonDescription | Decision Reason Description | textarea |  | 32000 |  |  |
| DeniedLengthOfStay | Denied Length of Stay | int | 9 |  |  |  |
| DeniedLevelOfCare | Denied Level of Care | picklist |  | 40 |  |  |
| DispositionNotes | Disposition Notes | textarea |  | 32000 |  |  |
| DueDate | Due Date | datetime |  |  |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| ExpirationDate | Expiration Date | datetime |  |  |  |  |
| ExtensionRequestReceivedDate | Extension Request Received Date | datetime |  |  |  |  |
| ExternalComplaintIdentifier | External Complaint ID | string |  | 255 |  |  |
| FacilityRecordNumber | Facility Record Number | string |  | 32 |  |  |
| FacilityRoomBedType | Facility Room Bed Type | picklist |  | 40 |  |  |
| FacilityRoomNumber | Facility Room Number | string |  | 32 |  |  |
| FinalLevelOfCare | Final Level of Care | picklist |  | 40 |  |  |
| FirstReviewerId | User ID | reference |  | 18 |  |  |
| FirstReviewerNotes | First Reviewer Notes | textarea |  | 32000 |  |  |
| GeneralPractitionerId | Contact ID | reference |  | 18 |  |  |
| GeneralPractitionerVerbalNotifiedDate | General Practitioner Verbal Notification Date | datetime |  |  |  |  |
| GeneralPractitionerWrittenNotifiedDate | General Practitioner Written Notification Date | datetime |  |  |  |  |
| GrievanceType | Grievance Type | picklist |  | 40 |  |  |
| Id | Care Request ID | id |  | 18 |  |  |
| InfoReceivedDate | Info Received Date | datetime |  |  |  |  |
| InfoRequestedDate | Info Requested Date | datetime |  |  |  |  |
| InitialDenialNotificationDate | Initial Denial Notification Date | date |  |  |  |  |
| InitialDenialNotificationTime | Initial Denial Notification Time | time |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsExtendedRequest | Extended Request | boolean |  |  |  |  |
| IsReadmission | Readmission | boolean |  |  |  |  |
| IsServiceOrMedicationReceived | Service or Medication Received | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MedicalDirectorId | User ID | reference |  | 18 |  |  |
| MedicalDirectorNotes | Medical Director Notes | textarea |  | 32000 |  |  |
| MemberCondition | Member Condition | textarea |  | 255 |  |  |
| MemberContactDateTime | Member Contact Date | datetime |  |  |  |  |
| MemberDateOfBirth | Member Date of Birth | date |  |  |  |  |
| MemberFirstName | Member First Name | string |  | 40 |  |  |
| MemberGender | Member Gender | picklist |  | 40 |  |  |
| MemberGroupNumber | Member Group Number | string |  | 64 |  |  |
| MemberId | Account ID | reference |  | 18 |  |  |
| MemberIdentificationNumber | Member ID | string |  | 64 |  |  |
| MemberLastName | Member Last Name | string |  | 80 |  |  |
| MemberPrimaryPlanId | Member Plan ID | reference |  | 18 |  |  |
| MemberPrognosis | Member Prognosis | picklist |  | 40 |  |  |
| MemberSecondaryPlanId | Member Plan ID | reference |  | 18 |  |  |
| MemberStatus | Member Status | textarea |  | 255 |  |  |
| MemberVerbalNotificationDate | Member Verbal Notification Date | datetime |  |  |  |  |
| MemberWrittenNotificationDate | Member Written Notification Date | datetime |  |  |  |  |
| ModificationDate | Modification Date | datetime |  |  |  |  |
| ModifiedLengthOfStay | Modified Length of Stay | int | 9 |  |  |  |
| ModifiedLevelOfCare | Modified Level of Care | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| NextReviewDate | Next Review Date | datetime |  |  |  |  |
| OriginalDenialMedicalDirectorId | User ID | reference |  | 18 |  |  |
| ParProvider | Par Provider | picklist |  | 40 |  |  |
| PlaceOfService | Place of Service | picklist |  | 40 |  |  |
| PractitionerContactDateTime | Practitioner Contact Date | datetime |  |  |  |  |
| QuantityType | Quantity Type | picklist |  | 40 |  |  |
| ReceivedDate | Received Date | datetime |  |  |  |  |
| ReconsiderationDenialNotificationDate | Reconsideration Denial Notification Date | date |  |  |  |  |
| ReconsiderationDenialNotificationTime | Reconsideration Denial Notification Time | time |  |  |  |  |
| ReferenceCareRequestCaseId | Case ID | reference |  | 18 |  |  |
| ReferenceCaseNumber | Reference Case Number | string |  | 32 |  |  |
| ReopenReason | Reopen Reason | picklist |  | 40 |  |  |
| ReopenReasonDescription | Reopen Reason Description | textarea |  | 32000 |  |  |
| ReopenedDate | Reopened Date | datetime |  |  |  |  |
| RequestPractitionerVerbalNotifiedDate | Requesting Practitioner Verbal Notification Date | datetime |  |  |  |  |
| RequestPractitionerWrittenNotifiedDate | Requesting Practitioner Written Notification Date | datetime |  |  |  |  |
| RequestedDate | Requested Date | datetime |  |  |  |  |
| RequestedLengthOfStay | Requested Length of Stay | int | 9 |  |  |  |
| RequestedLevelOfCare | Requested Level of Care | picklist |  | 40 |  |  |
| RequesterType | Requester Type | picklist |  | 40 |  |  |
| RequestingPractitionerId | Contact ID | reference |  | 18 |  |  |
| RequestingPractitionerLicense | Requesting Practitioner License | picklist |  | 40 |  |  |
| RequestingPractitionerSpecialty | Requesting Practitioner Specialty | picklist |  | 40 |  |  |
| ResolutionDate | Resolution Date | datetime |  |  |  |  |
| ResolutionLetterSentDate | Resolution Letter Sent Date | datetime |  |  |  |  |
| ResolutionNotes | Resolution Notes | textarea |  | 32000 |  |  |
| ReviewDate | Review Date | datetime |  |  |  |  |
| RootCauseNotes | Root Cause Notes | textarea |  | 32000 |  |  |
| ScheduledAdmissionDate | Scheduled Admission Date | datetime |  |  |  |  |
| ScheduledDischargeDate | Scheduled Discharge Date | datetime |  |  |  |  |
| ServiceDate | Service Date | date |  |  |  |  |
| ServicingFacilityId | Account ID | reference |  | 18 |  |  |
| ServicingPractitionerId | Contact ID | reference |  | 18 |  |  |
| ServicingPractitionerLicense | Servicing Practitioner License | picklist |  | 40 |  |  |
| ServicingPractitionerSpecialty | Servicing Practitioner Specialty | picklist |  | 40 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
