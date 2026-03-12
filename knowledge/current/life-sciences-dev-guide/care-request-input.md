---
title: "Care Request Input"
domain: life-sciences-dev-guide
topic: care-request-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.196Z
estimatedTokens: 5150
keywords: [Care, Input, general, care-related, including, member, admission, date, decision, reason, contain, multiple, diagnoses, drugs, requests]
---

# Care Request Input

> The general details of a care-related request including member
      information, admission date, decision reason, and so on. A single request can contain multiple
      diagnoses or drugs. Care requests include prior authorizations for drugs and services,
      admission notifications, concurrent review of admissions, appeals, complaints, and
      grievances.

# Care Request Input

The general details of a care-related request including member information, admission date, decision reason, and so on. A single request can contain multiple diagnoses or drugs. Care requests include prior authorizations for drugs and services, admission notifications, concurrent review of admissions, appeals, complaints, and grievances.

Root XML tag

<careRequest>

JSON example

```

```

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| acknowledgement​LetterSentDate​ | String | Date and time when an acknowledgment letter was sent to the requester. Maps to: CareRequest.AcknowledgementLetterSentDate | No | 46.0 |
| actualAdmission​Date | String | Actual admission date for the patient. Maps to: CareRequest.ActualAdmissionDate | No | 46.0 |
| actualDischarge​Date | String | Actual discharge date for the patient. Maps to: CareRequest.ActualDischargeDate | No | 46.0 |
| admission​Notes | String | Notes related to the admission. Maps to: CareRequest.AdmissionNotes | No | 46.0 |
| admission​Source | String | Where the patient was admitted from, for example, a clinic or an emergency room. Maps to: CareRequest.AdmissionSource | No | 46.0 |
| admissionType | String | Type of admission, for example, emergency or elective. Maps to: CareRequest.AdmissionType | No | 46.0 |
| ambulanceTransport​Distance​ | Integer | Ambulance Transport Distance | No | 46.0 |
| ambulanceTransport​Reason | String | Reason for ambulance transport. Maps to: CareRequestExtention.AmbulanceTransportReason | No | 46.0 |
| ambulanceTransport​Type | String | Type of ambulance transport. Maps to: CareRequestExtention.AmbulanceTransportType | No | 46.0 |
| aorReceived​Date | String | Date and time when the Appointment of Representative (AOR) form was received. Maps to: CareRequest.AorReceivedDate | No | 46.0 |
| aorRequestedDate | String | Date and time when the AOR form was requested. Maps to: CareRequest.AorRequestedDate | No | 46.0 |
| appealEffectuation​DateTime | String | The effective date of the outcome of the appeal request. For example, if a claim was successfully appealed, this field displays the date when the claim was paid. Maps to: CareRequestExtension.AppealEffectuationDateTime | No | 52.0 |
| appealRequest​ReasonType | String | Specifies the reason for raising the appeal request. Maps to: CareRequest.AppealRequestReasonType | No | 52.0 |
| appointedRepVerbal​ContactDate | String | Date and time of verbal contact with the member's appointed representative. Maps to: CareRequest.AppointedRepVerbalContactDate | No | 46.0 |
| appointedRepWritten​ContactDate | String | Date and time correspondence was sent to the member's appointed representative. Maps to: CareRequest.AppointedRepWrittenContactDate | No | 46.0 |
| appointed​Representative | Appointed Representative Input | Appointed representative for the member. If provided, the first name, last name, birthdate, and suffix fields are used to find at a unique Id, which is used to update CareRequest.AppointedRepresentativeId field. | No | 46.0 |
| approvedLength​OfStay | Integer | Approved number of days for the admission. Maps to: CareRequest.ApprovedLengthOfStay | No | 46.0 |
| approvedLevel​OfCare | String | Approved level of care for the patient, for example, Hospital-Observaton or SNF-Rehabilitation. Screen reader support enabled. Maps to: CareRequest.ApprovedLevelOfCare | No | 46.0 |
| authorization​RefIdentifier | String | The unique identifier of the authorization request. Maps to: CareRequestExtension.AuthorizationRefIdentifier | No | 57.0 |
| careRequest​Reviewers | Care Request Reviewer Input | The care request associated with the care request reviewer. Maps to: CareRequest.CareRequestReviewers | No | 52.0 |
| caseSubStatus | String | Sub status of care request in each stage of care request. Maps to: CareRequest.CaseSubStatus | No | 57.0 |
| claimNumber | String | Claim number for the medical service or medication, if one exists. Maps to: CareRequest.ClaimNumber | No | 46.0 |
| clientSourceSysIdentifier | String | An identifier of the client's source system that sent the care request. This is unavailable for PATCH requests. | No | 63.0 |
| clinicalCase​Type | String | Clinical case type for the patient, for example, High Risk Fall or Adult Diabetes. Maps to: CareRequest.ClinicalCaseType | No | 46.0 |
| criteriaMet | String | Indicates whether criteria for care was met. Maps to: CareRequest.CriteriaMet | No | 46.0 |
| cumulativeLength​OfStay | Integer | Total number of days for the admission. Maps to: CareRequest.CumulativeLengthOfStay | No | 46.0 |
| currentLevel​OfCare | String | Level of care that the patient is receiving. Maps to: CareRequest.CurrentLevelOfCare | No | 46.0 |
| decisionDate | String | Date by which the decision must be made for the request. Maps to: CareRequest.DecisionDate | No | 46.0 |
| decisionLetter | String | The text of the determination letter sent to the member and provider. Maps to: CareRequest.DecisionLetter | No | 46.0 |
| decisionNotes | String | Notes related to the decision. Maps to: CareRequest.DecisionNotes | No | 46.0 |
| decisionReason | String | Reason for the decision. Maps to: CareRequest.DecisionReason | No | 46.0 |
| decisionReason​Description | String | Text describing the reason for the decision. Maps to: CareRequest.DecisionReasonDescription | No | 46.0 |
| deniedLength​OfStay | Integer | Number of days denied for the admission. Maps to: CareRequest.DeniedLengthOfStay | No | 46.0 |
| deniedLevel​OfCare | String | Level of care denied for the patient. Maps to: CareRequest.DeniedLevelOfCare | No | 46.0 |
| disposition​Notes | String | Notes related to the disposition of the request. Maps to: CareRequest.DispositionNotes | No | 46.0 |
| document​AttachmentStatus | String | The current status of the document upload based on the checklist provided to the reviewers. Maps to: CareRequestExtention.DocumentAttachmentStatusValid values are:CompleteIncomplete | No | 55.0 |
| dueDate | String | Date the request is due for completion. Maps to: CareRequest.DueDate | No | 46.0 |
| effectiveFrom | String | The start date for an effective-date range. Maps to: CareRequest.EffectiveFrom | No | 46.0 |
| effectiveTo | String | The end date for an effective-date range. Maps to: CareRequest.EffectiveTo | No | 46.0 |
| expirationDate | String | Expiration date for the request. Maps to: CareRequest.ExpirationDate | No | 46.0 |
| extendedRequest | Boolean | Indicates whether a request was extended. Maps to: CareRequest.IsExtendedRequest | No | 46.0 |
| extensionRequest​ReceivedDate | String | Date and time an extension was requested. Maps to: CareRequest.ExtensionRequestReceivedDate | No | 46.0 |
| external​ComplaintId | String | Complaint ID number. Maps to: CareRequest.ExternalComplaintIdentifier | No | 46.0 |
| facility​RecordNumber | String | The medical record number used to identify a patient. Maps to: CareRequest.FacilityRecordNumber | No | 46.0 |
| facility​RoomBedType | String | Type of facility bed for the patient. Maps to: CareRequest.FacilityRoomBedType | No | 46.0 |
| facilityRoom​Number | String | The facility room number for the patient. Maps to: CareRequest.FacilityRoomNumber | No | 46.0 |
| finalLevel​OfCare | String | Final level of care the patient. Maps to: CareRequest.FinalLevelOfCare | No | 46.0 |
| firstReviewer | First Reviewer Input | The person who reviewed the request. | No | 46.0 |
| first​ReviewerNotes | String | Notes from the first reviewer related to the case. Maps to: CareRequest.FirstReviewerNotes | No | 46.0 |
| general​Practitioner | General Practitioner Input | Member's primary or general care practitioner. Maps to CareRequest.generalPractitioner | No | 46.0 |
| generalPractitioner​VerbalNotification​Date | String | Date when the primary care practitioner was verbally notified of the decision. Maps to: CareRequest.GeneralPractitionerVerbalNotifiedDate | No | 46.0 |
| generalPractitioner​WrittenNotification​Date | String | Date when the primary care practitioner was notified of the decision by written correspondence. Maps to: CareRequest.GeneralPractitionerWrittenNotifiedDate | No | 46.0 |
| grievanceType | String | Specifies the type of grievance. Maps to: CareRequest.GrievanceType | No | 52.0 |
| healthCare​Provider | String | The healthcare provider associated with the care request against whom the Grievance is filed. Maps toCareRequestExtension.HealthCareProvider | No | 52.0 |
| homeHealthCertification​EndDate | String | Certification end date for home health care. Maps to: CareRequestExtension.HomeHealthCertificationEndDate | No | 46.0 |
| homeHealthCertification​StartDate | String | Certification start date for home health care. Maps to: CareRequestExtension.HomeHealthCertificationStartDate | No | 46.0 |
| homeHealth​StartDate | String | Date that home health services are scheduled or anticipated to start. Maps to: CareRequestExtension.HomeHealthStartDate | No | 46.0 |
| id | String | ID of the Care Request. | Required for PATCH. | 46.0 |
| independentReview​Determination | String | The determination made by the independent review. Maps to: CareRequestExtension.IndependentReviewDetermination | No | 52.0 |
| independentReview​DeterminationDate | String | The date when the determination was made by the independent review. Maps to: CareRequestExtension.IndependentReviewDeterminationDate | No | 52.0 |
| independentReview​SubmissionDate | String | The date when the review request was submitted for independent review. Maps to: CareRequestExtension.IndependentReviewSubmissionDate | No | 52.0 |
| infoReceieved​Date | String | Date and time when additional information was received from the provider or member. Maps to: CareRequest.InfoReceivedDate | No | 46.0 |
| infoRequested​Date | String | Date and time when additional information was requested from the provider or member. Maps to: CareRequest.InfoRequestedDate | No | 46.0 |
| initialDenial​NotificationDate | String | Date of initial denial notification. Maps to: CareRequest.InitialDenialNotificationDate | No | 46.0 |
| initialDenial​NotificationTime | String | The time when the initial care request was denied. Maps to CareRequest.InitialDenialNotificationTime | No | 52.0 |
| isIndependentReview​Required | Boolean | Indicates whether independent review is required. Maps to CareRequestExtension.IsIndependentReviewRequired | No | 52.0 |
| isReadmission | Boolean | Indicates whether the care request is for a readmission. Maps to CareRequest.IsReadmission | No | 52.0 |
| medicalDirector | Medical Director Input | The medical director who reviewed the request. | No | 46.0 |
| medicalDirector​Notes | String | Notes from the medical director related to the request. Maps to: CareRequest.MedicalDirectorNotes | No | 46.0 |
| memberContact​Date | String | Date and time when the member was contacted. Maps to: CareRequest.MemberContactDateTime | No | 46.0 |
| memberGroup​Number | String | Insurance group number for the member. Maps to: CareRequest.MemberGroupNumber | No | 46.0 |
| memberPrimary​Plan | String | The primary insurance plan of a member associated with the care request when the member is insured under multiple plans. Maps to: CareRequest.MemberPrimaryPlan | No | 52.0 |
| memberSecondary​Plan | String | The secondary insurance plan of a member associated with the care request when the member is insured under multiple plans. Maps to: CareRequest.MemberSecondaryPlan | No | 52.0 |
| memberVerbal​NotificationDate | String | Date when the member was verbally notified of the decision. Maps to: CareRequest.MemberVerbalNotificationDate | No | 46.0 |
| memberWritten​NotificationDate | String | Date when the member was notified of the decision by written correspondence. Maps to: CareRequest.MemberWrittenNotificationDate | No | 46.0 |
| modification​Date | String | Date the case was modified. Maps to: CareRequest.ModificationDate | No | 46.0 |
| modifiedLength​OfStay | Integer | Modified number of days for the admission. Maps to: CareRequest.ModifiedLengthOfStay | No | 46.0 |
| modifiedLevel​OfCare | String | Modified level of care for the patient. Maps to: CareRequest.ModifiedLevelOfCare | No | 46.0 |
| name | String | Name of the Care Request. Maps to: CareRequest.Name | Yes | 46.0 |
| nextReview​Date | String | Date the next review is scheduled for completion. Maps to: CareRequest.NextReviewDate | No | 46.0 |
| nursingHome​ResidentialStatus | String | Nursing home-resident status at the time of service. Maps to: CareRequestExtension.NursingHomeResidentialStatus | No | 46.0 |
| originalDenial​MedicalDirector | Original Denial Medical Director Input | The medical director who denied the original request. | No | 46.0 |
| parProvider | String | Indicator of whether this provider has entered into an agreement with the insurance carrier. Maps to: CareRequest.ParProvider | No | 46.0 |
| placeOfService | String | Place of service for the member's care such as an inpatient hospital or an ambulatory surgery center. Maps to: CareRequest.PlaceOfService | No | 46.0 |
| practitioner​ContactDate | String | Date and time when the provider was contacted. Maps to: CareRequest.PractitionerContactDateTime | No | 46.0 |
| priorDischarge​Status | String | Specifies the previous discharge status of the member. Maps to: CareRequestExtension.PriorDischargeStatus | No | 52.0 |
| quantity | Integer | Quantity of the request. | No | 46.0 |
| quantityType | String | Quantity type for the request such as days, units, or visits. Maps to: CareRequest.QuantityType | No | 46.0 |
| receivedDate | String | Date the request was received. Maps to: CareRequest.ReceivedDate | No | 46.0 |
| reconsideration​DenialNotification​Date | String | Date of reconsideration denial notification. Maps to: CareRequest.ReconsiderationDenialNotificationDate | No | 46.0 |
| reconsideration​DenialNotification​Time | String | The time of reconsideration denial notification. Maps to: CareRequest.ReconsiderationDenialNotificationTime | No | 52.0 |
| recordType | String | Record type of the care request object. | No | 46.0 |
| recordTypeId | String | ID of the record type of the care request object. | No | 46.0 |
| referenceCare​RequestCase | String | The reference care request case number associated with the care request. Maps to: CareRequest.ReferenceCareRequestCase | No | 52.0 |
| reference​CaseNumber | String | Reference authorization number for an appeal, complaint, or grievance. Maps to: CareRequest.ReferenceCaseNumber | No | 46.0 |
| reopenDecision​DateTime | String | Date and time the request was reopened. Maps to: CareRequest.ReopenDecisionDateTime | No | 52.0 |
| reopenReason | String | Reason the request was reopened. Maps to: CareRequest.ReopenReason | No | 46.0 |
| reopenReason​Description | String | Description of why the request was reopened. Maps to: CareRequest.ReopenReasonDescription | No | 46.0 |
| reopenRequest​Outcome | String | The result of the reopen request. Maps to: CareRequestExtension.ReopenRequestOutcome | No | 52.0 |
| reopenRequest​Type | String | The type of reopen request. Maps to: CareRequestExtension.ReopenRequestType | No | 52.0 |
| reopenedBy | Reopened By Input | The user who reopened the care request. Maps to: CareRequestExtension.ReopenedBy | No | 52.0 |
| reopenedBy​UserId | String | The ID of the user who reopened the care request. Maps to: CareRequestExtension.ReopenedByUserId | No | 52.0 |
| reopenedDate | String | Date the request was reopened. Maps to: CareRequest.ReopenedDate | No | 46.0 |
| requestExtension​Reason | String | The reason for requesting the care extension. Maps to: CareRequestExtension.RequestExtensionReason | No | 52.0 |
| requestExtnDecision​DateTime | String | The date when the decision to extend the care request extension was made. Maps to: CareRequestExtension.RequestExtnDecisionDateTime | No | 52.0 |
| requestOutcome | String | Specifies the outcome of the request. Maps to: CareRequestExtension.RequestOutcome | No | 52.0 |
| requestOutcome​Desc | String | The description of the request outcome. Maps to: CareRequestExtension.RequestOutcomeDesc | No | 52.0 |
| requestType | String | Category type of the request. Maps to: CareRequestExtension.RequestType | No | 46.0 |
| requestedDate | String | Date the request was originally requested. Maps to: CareRequest.RequestedDate | No | 46.0 |
| requestedLength​OfStay | Integer | Requested length of stay for the patient. Maps to: CareRequest.RequestedLengthOfStay | No | 57.0 |
| requestedLevel​OfCare | String | Requested level of care for the patient. Maps to: CareRequest.RequestedLevelOfCare | No | 46.0 |
| requesterType | String | Indicates the role of the individual initiating the request. Maps to: CareRequest.RequesterType | No | 46.0 |
| requesting​Practitioner | Requesting Practitioner Input | Ordering or referring practitioner for the request. | No | 46.0 |
| requesting​PractitionerLicense | String | Requesting Practitioner License Maps to: CareRequest.RequestingPractitionerLicense | No | 46.0 |
| requesting​PractitionerSpecialty | String | Specialty of the practitioner, for example, Family Practice or General Surgery. Maps to: CareRequest.RequestingPractitionerSpecialty | No | 46.0 |
| requesting​PractitionerVerbal​NotificationDate | String | Date when the practitioner was verbally notified of the decision. Maps to: CareRequest.RequestingPractitionerVerbalNotifiedDate | No | 46.0 |
| requesting​PractitionerWritten​NotificationDate | String | Date when the practitioner was notified of the decision by written correspondence. Maps to: CareRequest.RequestingPractitionerWrittenNotifiedDate | No | 46.0 |
| resolutionDate | String | Date when the complaint, appeal, or grievance was resolved. Maps to: CareRequest.ResolutionDate | No | 46.0 |
| resolution​Description | String | The resolution details provided for the complaint, appeal, or grievance. Maps to: CareRequestExtension.ResolutionDescription | No | 52.0 |
| resolution​LetterSentDate | String | Date and time when a resolution letter was sent to the requester. Maps to: CareRequest.ResolutionLetterSentDate | No | 46.0 |
| resolutionNotes | String | Resolution notes for the request. Maps to: CareRequest.ResolutionNotes | No | 46.0 |
| reviewDate | String | Date the review was completed. Maps to: CareRequest.ReviewDate | No | 46.0 |
| rootCauseNotes | String | Field for notes related to the root cause for the request. Maps to: CareRequest.RootCauseNotes | No | 46.0 |
| scheduled​AdmissionDate | String | Anticipated admission date for the patient. Maps to: CareRequest.ScheduledAdmissionDate | No | 46.0 |
| scheduled​DischargeDate | String | Scheduled discharge date for the patient. Maps to: CareRequest.ScheduledDischargeDate | No | 46.0 |
| serviceDate | String | Date when patient received the service. Maps to: CareRequest.ServiceDate | No | 46.0 |
| serviceLevel | String | The level of service rendered. Maps to: CareRequestExtension.ServiceLevel | No | 46.0 |
| serviceType | String | Classification of the type of service. Maps to: CareRequestExtension.ServiceType | No | 46.0 |
| serviceor​MedicationReceived | Boolean | Indicates whether the member has already received the medial service or medication. Maps to: CareRequest.IsServiceOrMedicationReceived | No | 46.0 |
| servicingFacility | Servicing Facility Input | Facility where the service is being provided. | No | 46.0 |
| servicingPractitioner | Servicing Practitioner Input | Practitioner administering the service. | No | 46.0 |
| servicingPractitioner​License | String | License type of the practitioner. Maps to: CareRequest.ServicingPractitionerLicense | No | 46.0 |
| servicingPractitioner​Specialty | String | Specialty of the practitioner. Maps to: CareRequest.ServicingPractitionerSpecialty | No | 46.0 |
| sourceSystem | String | System from which this request was sourced. Maps to: CareRequest.SourceSystem | No | 46.0 |
| sourceSystem​Identifier | String | ID of the system from which the request was sourced. Maps to: CareRequest.SourceSystemIdentifier | No | 46.0 |
| sourceSystem​Modified | String | The timestamp of the most recent update from the source system. Maps to: CareRequest.SourceSystemModified | No | 46.0 |
| supportingDocUrl | String | The URL of supporting documentation such as a questionnaire. This is unavailable for PATCH requests. | No | 63.0 |
| unitOfMeasure | String | The unit of measure associated with the prior authorization request. Maps to: CareRequestExtention.UnitOfMeasureThis field is a lookup to UnitOfMeasure. | No | 55.0 |

## Code Examples

```
{
		"requestingPractitionerSpecialty": "Neurologist",
		"placeOfService": "InPatient",
		"sourceSystemIdentifier": "0015",
		"name": "Care Request 15",
		"requestingPractitionerLicense": "M.D",
		"sourceSystem": "source_system_name",
		"servicingPractitionerLicense": "M.D",
		"servicingPractitionerSpecialty": "Hospitalist",
		"recordType": "Complaint"
		}
```

## Related Topics

- Appointed Representative Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_appointed_representative_input.htm)
- Care Request Reviewer
                                            Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_care_request_reviewer_input.htm)
- First Reviewer Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_first_reviewer_input.htm)
- General Practitioner Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_general_practitioner_input.htm)
- Medical Director Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_medical_director_input.htm)
- Original Denial Medical Director Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_original_denial_medical_director_input.htm)
- Reopened By Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_reopened_by_input.htm)
- Requesting Practitioner Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_requesting_practitioner_input.htm)
- Servicing Facility Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_servicing_facility_input.htm)
- Servicing Practitioner Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_servicing_practitioner_input.htm)
