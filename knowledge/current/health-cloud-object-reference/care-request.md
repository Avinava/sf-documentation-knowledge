---
title: "Care Request"
domain: health-cloud-object-reference
topic: care-request
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.530Z
estimatedTokens: 5188
keywords: [Care, general, care-related, including, member, admission, date, decision, reason, contain, multiple, diagnoses, services, drugs, requests]
---

# Care Request

> The general details of a care-related request including member
      information, admission date, decision reason, and so on. A single request can contain multiple
      diagnoses, services, or drugs. Care requests include prior authorizations for drugs and
      services, admission notifications, concurrent review of admissions, appeals, complaints, and
      grievances.

# Care Request

The general details of a care-related request including member information, admission date, decision reason, and so on. A single request can contain multiple diagnoses, services, or drugs. Care requests include prior authorizations for drugs and services, admission notifications, concurrent review of admissions, appeals, complaints, and grievances.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| acknowledgement​LetterSentDate | String | Date and time when an acknowledgment letter was sent to the requester. Maps to: CareRequest.AcknowledgementLetterSentDate | Big, 46.0 | 46.0 |
| actualAdmission​Date | String | Actual admission date for the patient. Maps to: CareRequest.ActualAdmissionDate | Big, 46.0 | 46.0 |
| actualDischarge​Date | String | Actual discharge date for the patient. Maps to: CareRequest.ActualDischargeDate | Big, 46.0 | 46.0 |
| admissionNotes | String | Notes related to the admission. Maps to: CareRequest.AdmissionNotes | Big, 46.0 | 46.0 |
| admissionSource | String | Where the patient was admitted from, for example, a clinic or an emergency room. Maps to: CareRequest.AdmissionSource | Big, 46.0 | 46.0 |
| admissionType | String | Type of admission, for example, emergency or elective. Maps to: CareRequest.AdmissionType | Big, 46.0 | 46.0 |
| ambulanceTransport​Distance | Integer | Ambulance Transport Distance | Big, 46.0 | 46.0 |
| ambulanceTransport​Reason | String | Reason for ambulance transport. Maps to: CareRequestExtention.AmbulanceTransportReason | Big, 46.0 | 46.0 |
| ambulanceTransport​Type | String | Type of ambulance transport. Maps to: CareRequestExtention.AmbulanceTransportType | Big, 46.0 | 46.0 |
| aorReceived​Date | String | Date and time when the Appointment of Representative (AOR) form was received. Maps to: CareRequest.AorReceivedDate | Big, 46.0 | 46.0 |
| aorRequested​Date | String | Date and time when the AOR form was requested. Maps to: CareRequest.AorRequestedDate | Big, 46.0 | 46.0 |
| appealEffectuation​DateTime | String | The effective date of the outcome of the appeal request. For example, if a claim was successfully appealed, this field displays the date when the claim was paid. Maps to: CareRequestExtension.AppealEffectuationDateTime | Big, 52.0 | 52.0 |
| appealRequest​ReasonType | String | Specifies the reason for raising the appeal request. Maps to: CareRequest.AppealRequestReasonType | Big, 52.0 | 52.0 |
| appointedRep​VerbalContactDate | String | Date and time of verbal contact with the member's appointed representative. Maps to: CareRequest.AppointedRepVerbalContactDate | Big, 46.0 | 46.0 |
| appointedRep​WrittenContactDate | String | Date and time correspondence was sent to the member's appointed representative. Maps to: CareRequest.AppointedRepWrittenContactDate | Big, 46.0 | 46.0 |
| appointedRepresen​tative | Appointed Representative | Appointed representative for the member. | Big, 46.0 | 46.0 |
| approvedLength​ofStay | Integer | Approved number of days for the admission. Maps to: CareRequest.ApprovedLengthOfStay | Big, 46.0 | 46.0 |
| approvedLevel​ofCare | String | Approved level of care for the patient, for example, Hospital-Observaton or SNF-Rehabilitation. Maps to: CareRequest.ApprovedLevelOfCare | Big, 46.0 | 46.0 |
| authorization​RefIdentifier | String | The unique identifier of the authorization request. Maps to: CareRequestExtension.AuthorizationRefIdentifier | Big, 57.0 | 57.0 |
| careRequest​Reviewers | Care Request ​Reviewer Output[] | The care request associated with the care request reviewer. Maps to: CareRequest.CareRequestReviewers | Big, 52.0 | 52.0 |
| caseSubStatus | String | Sub status of care request in each stage of care request. Maps to: CareRequest.CaseSubStatus | Big, 57.0 | 57.0 |
| claimNumber | String | Claim number for the medical service or medication, if one exists. Maps to: CareRequest.ClaimNumber | Big, 46.0 | 46.0 |
| clinicalCase​Type | String | Clinical case type for the patient, for example, High Risk Fall or Adult Diabetes. Maps to: CareRequest.ClinicalCaseType | Big, 46.0 | 46.0 |
| criteriaMet | String | Indicates whether criteria for care was met. Maps to: CareRequest.CriteriaMet | Big, 46.0 | 46.0 |
| cumulativeLength​ofStay | Integer | Total number of days for the admission. Maps to: CareRequest.CumulativeLengthOfStay | Big, 46.0 | 46.0 |
| currentLevel​ofCare | String | Level of care that the patient is receiving. Maps to: CareRequest.CurrentLevelOfCare | Big, 46.0 | 46.0 |
| decisionDate | String | Date by which the decision must be made for the request. Maps to: CareRequest.DecisionDate | Big, 46.0 | 46.0 |
| decisionDays​Remaining | Integer | Number of days remaining for a decision or resolution. Maps to: CareRequest.DecisionDaysRemaining | Big, 46.0 | 46.0 |
| decisionLetter | String | The text of the determination letter sent to the member and provider. Maps to: CareRequest.DecisionLetter | Big, 46.0 | 46.0 |
| decisionNotes | String | Notes related to the decision. Maps to: CareRequest.DecisionNotes | Big, 46.0 | 46.0 |
| decisionReason | String | Reason for the decision. Maps to: CareRequest.DecisionReason | Big, 46.0 | 46.0 |
| decisionReason​Description | String | Text describing the reason for the decision. Maps to: CareRequest.DecisionReasonDescription | Big, 46.0 | 46.0 |
| deniedLength​ofStay | Integer | Number of days denied for the admission. Maps to: CareRequest.DeniedLengthOfStay | Big, 46.0 | 46.0 |
| deniedLevel​ofCare | String | Level of care denied for the patient. Maps to: CareRequest.DeniedLevelOfCare | Big, 46.0 | 46.0 |
| disposition​Notes | String | Notes related to the disposition of the request. Maps to: CareRequest.DispositionNotes | Big, 46.0 | 46.0 |
| documentAttachment​Status | String | The status of the document upload based on the checklist provided to the reviewers. Maps to: CareRequestExtension.DocumentAttachmentStatusValid values are:CompleteIncomplete | Big, 55.0 | 55.0 |
| dueDate | String | Date the request is due for completion. Maps to: CareRequest.DueDate | Big, 46.0 | 46.0 |
| effectiveFrom | String | The start date for an effective-date range. Maps to: CareRequest.EffectiveFrom | Big, 46.0 | 46.0 |
| effectiveTo | String | The end date for an effective-date range. Maps to: CareRequest.EffectiveTo | Big, 46.0 | 46.0 |
| expirationDate | String | Expiration date for the request. Maps to: CareRequest.ExpirationDate | Big, 46.0 | 46.0 |
| extendedRequest | Boolean | Extended Request Maps to: CareRequest. | Big, 46.0 | 46.0 |
| extensionRequest​ReceivedDate | String | Date and time an extension was requested. Maps to: CareRequest.ExtensionRequestReceivedDate | Big, 46.0 | 46.0 |
| external​ComplaintID | String | Complaint ID number. Maps to: CareRequest.ExternalComplaintIdentifier | Big, 46.0 | 46.0 |
| facilityRecord​Number | String | The medical record number used to identify a patient. Maps to: CareRequest.FacilityRecordNumber | Big, 46.0 | 46.0 |
| facilityRoom​BedType | String | Type of facility bed for the patient. Maps to: CareRequest.FacilityRoomBedType | Big, 46.0 | 46.0 |
| facilityRoom​Number | String | The facility room number for the patient. Maps to: CareRequest.FacilityRoomNumber | Big, 46.0 | 46.0 |
| finalLevel​ofCare | String | Final level of care the patient. Maps to: CareRequest.FinalLevelOfCare | Big, 46.0 | 46.0 |
| firstReviewer | First Reviewer | The person who reviewed the request. | Big, 46.0 | 46.0 |
| firstReviewer​Notes | String | Notes from the first reviewer related to the case. Maps to: CareRequest.FirstReviewerNotes | Big, 46.0 | 46.0 |
| generalPractitioner | General Practitioner | Member's primary or general care practitioner. | Big, 46.0 | 46.0 |
| generalPractitioner​VerbalNotificationDate | String | Date when the primary care practitioner was verbally notified of the decision. Maps to: CareRequest.GeneralPractitionerVerbalNotifiedDate | Big, 46.0 | 46.0 |
| generalPractitioner​WrittenNotificationDate | String | Date when the primary care practitioner was notified of the decision by written correspondence. Maps to: CareRequest.GeneralPractitionerWrittenNotifiedDate | Big, 46.0 | 46.0 |
| grievanceType | String | Specifies the type of grievance. Maps to: CareRequest.GrievanceType | Big, 52.0 | 52.0 |
| healthcareProvider | String | The healthcare provider associated with the care request against whom the Grievance is filed. Maps toCareRequestExtension.HealthCareProvider | Big, 52.0 | 52.0 |
| homeHealthCertifi​cationEndDate | String | Certification end date for home health care. Maps to: CareRequestExtension.HomeHealthCertificationEndDate | Big, 46.0 | 46.0 |
| homeHealthCertifi​cationStartDate | String | Certification start date for home health care. Maps to: CareRequestExtension.HomeHealthCertificationStartDate | Big, 46.0 | 46.0 |
| homeHealth​StartDate | String | Date that home health services are scheduled or anticipated to start. Maps to: CareRequestExtension.HomeHealthStartDate | Big, 46.0 | 46.0 |
| id | String | ID of the Care Request. | Big, 46.0 | 46.0 |
| independentReview​Determination | String | The determination made by the independent review. Maps to: CareRequestExtension.IndependentReviewDetermination | Big, 52.0 | 52.0 |
| independentReview​DeterminationDate | String | The date when the determination was made by the independent review. Maps to: CareRequestExtension.IndependentReviewDeterminationDate | Big, 52.0 | 52.0 |
| independentReview​SubmissionDate | String | The date when the review request was submitted for independent review. Maps to: CareRequestExtension.IndependentReviewSubmissionDate | Big, 52.0 | 52.0 |
| infoReceieved​Date | String | Date and time when additional information was received from the provider or member. Maps to: CareRequest.InfoReceivedDate | Big, 46.0 | 46.0 |
| infoRequested​Date | String | Date and time when additional information was requested from the provider or member. Maps to: CareRequest.InfoRequestedDate | Big, 46.0 | 46.0 |
| initialDenial​NotificationDate | String | Date of initial denial notification. Maps to: CareRequest.InitialDenialNotificationDate | Big, 46.0 | 46.0 |
| initialDenial​NotificationTime | String | The time when the initial care request was denied. Maps to CareRequest.InitialDenialNotificationTime | Big, 52.0 | 52.0 |
| isIndependent​ReviewRequired | Boolean | Indicates whether independent review is required. Maps to CareRequestExtension.IsIndependentReviewRequired | Big, 52.0 | 52.0 |
| isReadmission | Boolean | Indicates whether the care request is for a readmission. Maps to CareRequest.IsReadmission | Big, 52.0 | 52.0 |
| lastModified​Date | String | Last Modified Date | Big, 46.0 | 46.0 |
| medicalDirector | Medical Director | The medical director who reviewed the request. | Big, 46.0 | 46.0 |
| medicalDirector​Notes | String | Notes from the medical director related to the request. Maps to: CareRequest.MedicalDirectorNotes | Big, 46.0 | 46.0 |
| member | String | Insurance identifier for the member. Maps to: CareRequest.MemberId | Big, 46.0 | 46.0 |
| memberContact​Date | String | Member Contact Date Maps to: CareRequest. | Big, 46.0 | 46.0 |
| memberGroup​Number | String | Insurance group number for the member. Maps to: CareRequest.MemberGroupNumber | Big, 46.0 | 46.0 |
| memberPrimary​Plan | String | The primary insurance plan of a member associated with the care request when the member is insured under multiple plans. Maps to: CareRequest.MemberPrimaryPlan | Big, 52.0 | 52.0 |
| memberSecondary​Plan | String | The secondary insurance plan of a member associated with the care request when the member is insured under multiple plans. Maps to: CareRequest.MemberSecondaryPlan | Big, 52.0 | 52.0 |
| memberVerbalNotifi​cationDate | String | Date when the member was verbally notified of the decision. Maps to: CareRequest.MemberVerbalNotificationDate | Big, 46.0 | 46.0 |
| memberWrittenNotifi​cationDate | String | Date when the member was notified of the decision by written correspondence. Maps to: CareRequest.MemberWrittenNotificationDate | Big, 46.0 | 46.0 |
| modification​Date | String | Date the case was modified. Maps to: CareRequest.ModificationDate | Big, 46.0 | 46.0 |
| modifiedLength​ofStay | Integer | Modified number of days for the admission. Maps to: CareRequest.ModifiedLengthOfStay | Big, 46.0 | 46.0 |
| modifiedLevel​ofCare | String | Modified level of care for the patient. Maps to: CareRequest.ModifiedLevelOfCare | Big, 46.0 | 46.0 |
| nextReview​Date | String | Date the next review is scheduled for completion. Maps to: CareRequest.NextReviewDate | Big, 46.0 | 46.0 |
| nursingHomeResi​dentialStatus | String | Nursing home resident status at the time of service. Maps to: CareRequestExtension.NursingHomeResidentialStatus | Big, 46.0 | 46.0 |
| originalDenial​MedicalDirector | Original Denial​ Medical Director | The medical director who denied the original request. | Big, 46.0 | 46.0 |
| parProvider | String | Indicator of whether this provider has entered into an agreement with the insurance carrier. Maps to: CareRequest.ParProvider | Big, 46.0 | 46.0 |
| placeof​Service | String | Place of service for the member's care such as an inpatient hospital or an ambulatory surgery center. Maps to: CareRequest.PlaceOfService | Big, 46.0 | 46.0 |
| practitioner​ContactDate | String | Date and time when the provider was contacted. Maps to: CareRequest.PractitionerContactDateTime | Big, 46.0 | 46.0 |
| priorDischarge​Status | String | Specifies the previous discharge status of the member. Maps to: CareRequestExtension.PriorDischargeStatus | Big, 52.0 | 52.0 |
| quantity | Integer | Quantity of the request. | Big, 46.0 | 46.0 |
| quantityType | String | Quantity type for the request such as days, units, or visits. Maps to: CareRequest.QuantityType | Big, 46.0 | 46.0 |
| receivedDate | String | Date the request was received. Maps to: CareRequest.ReceivedDate | Big, 46.0 | 46.0 |
| reconsiderationDenial​NotificationDate | String | Date of reconsideration denial notification. Maps to: CareRequest.ReconsiderationDenialNotificationDate | Big, 46.0 | 46.0 |
| reconsiderationDenial​NotificationTime | String | The time of reconsideration denial notification. Maps to: CareRequest.ReconsiderationDenialNotificationTime | Big, 52.0 | 52.0 |
| recordType | String | Record type of the care request object. | Big, 46.0 | 46.0 |
| referenceCare​RequestCase | String | The reference care request case number associated with the care request. Maps to: CareRequest.ReferenceCareRequestCase | Big, 52.0 | 52.0 |
| referenceCase​Number | String | Reference authorization number for an appeal, complaint, or grievance. Maps to: CareRequest.ReferenceCaseNumber | Big, 46.0 | 46.0 |
| reopenDecision​DateTime | String | Date and time the request was reopened. Maps to: CareRequest.ReopenDecisionDateTime | Big, 52.0 | 52.0 |
| reopenReason | String | Reason the request was reopened. Maps to: CareRequest.ReopenReason | Big, 46.0 | 46.0 |
| reopenReason​Description | String | Description of why the request was reopened. Maps to: CareRequest.ReopenReasonDescription | Big, 46.0 | 46.0 |
| reopenRequest​Outcome | String | The result of the reopen request. Maps to: CareRequestExtension.ReopenRequestOutcome | Big, 52.0 | 52.0 |
| reopenRequest​Type | String | The type of reopen request. Maps to: CareRequestExtension.ReopenRequestType | Big, 52.0 | 52.0 |
| reopenedBy | Reopened By Output | The user who reopened the care request. Maps to: CareRequestExtension.ReopenedBy | Big, 52.0 | 52.0 |
| reopenedDate | String | Date the request was reopened. Maps to: CareRequest.ReopenedDate | Big, 46.0 | 46.0 |
| requestExtension​Reason | String | The reason for requesting the care extension. Maps to: CareRequestExtension.RequestExtensionReason | Big, 52.0 | 52.0 |
| requestExtn​DecisionDateTime | String | The date when the decision to extend the care request extension was made. Maps to: CareRequestExtension.RequestExtnDecisionDateTime | Big, 52.0 | 52.0 |
| requestOutcome | String | Specifies the outcome of the request. Maps to: CareRequestExtension.RequestOutcome | Big, 52.0 | 52.0 |
| requestOutcome​Desc | String | The description of the request outcome. Maps to: CareRequestExtension.RequestOutcomeDesc | Big, 52.0 | 52.0 |
| requestType | String | Category type of the request. Maps to: CareRequestExtension.RequestType | Big, 46.0 | 46.0 |
| requested​Date | String | Date the request was originally requested. Maps to: CareRequest.RequestedDate | Big, 46.0 | 46.0 |
| requestedLength​OfStay | Integer | Requested length of stay for the patient. Maps to: CareRequest.RequestedLengthOfStay | Big, 57.0 | 57.0 |
| requestedLevel​ofCare | String | Requested level of care for the patient. Maps to: CareRequest.RequestedLevelOfCare | Big, 46.0 | 46.0 |
| requester​Type | String | Indicates the role of the individual initiating the request. Maps to: CareRequest.RequesterType | Big, 46.0 | 46.0 |
| requesting​Practitioner | Requesting Practitioner | Ordering or referring practitioner for the request. | Big, 46.0 | 46.0 |
| requestingPractitione​rLicense | String | Requesting Practitioner License Maps to: CareRequest.RequestingPractitionerLicense | Big, 46.0 | 46.0 |
| requestingPractitioner​Specialty | String | Specialty of the practitioner, for example, Family Practice or General Surgery. Maps to: CareRequest.RequestingPractitionerSpecialty | Big, 46.0 | 46.0 |
| requestingPractitioner​VerbalNotificationDate | String | Date when the practitioner was verbally notified of the decision. Maps to: CareRequest.RequestingPractitionerVerbalNotifiedDate | Big, 46.0 | 46.0 |
| requestingPractitioner​WrittenNotificationDate | String | Date when the practitioner was notified of the decision by written correspondence. Maps to: CareRequest.RequestingPractitionerWrittenNotifiedDate | Big, 46.0 | 46.0 |
| resolutionDate | String | Date when the complaint, appeal, or grievance was resolved. Maps to: CareRequest.ResolutionDate | Big, 46.0 | 46.0 |
| resolutionDescription | String | The resolution details provided for the complaint, appeal, or grievance. Maps to: CareRequestExtension.ResolutionDescription | Big, 52.0 | 52.0 |
| resolutionLetter​SentDate | String | Date and time when a resolution letter was sent to the requester. Maps to: CareRequest.ResolutionLetterSentDate | Big, 46.0 | 46.0 |
| resolutionNotes | String | Resolution notes for the request. Maps to: CareRequest.ResolutionNotes | Big, 46.0 | 46.0 |
| reviewDate | String | Date the review was completed. Maps to: CareRequest.ReviewDate | Big, 46.0 | 46.0 |
| rootCauseNotes | String | Field for notes related to the root cause for the request. Maps to: CareRequest.RootCauseNotes | Big, 46.0 | 46.0 |
| scheduledAdmission​Date | String | Anticipated admission date for the patient. Maps to: CareRequest.ScheduledAdmissionDate | Big, 46.0 | 46.0 |
| scheduledDischarge​Date | String | Scheduled discharge date for the patient. Maps to: CareRequest.ScheduledDischargeDate | Big, 46.0 | 46.0 |
| serviceDate | String | Date when patient received the service. Maps to: CareRequest.ServiceDate | Big, 46.0 | 46.0 |
| serviceLevel | String | The level of service rendered. Maps to: CareRequestExtension.ServiceLevel | Big, 46.0 | 46.0 |
| serviceType | String | Classification of the type of service. Maps to: CareRequestExtention.ServiceType | Big, 46.0 | 46.0 |
| serviceorMedication​Received | Boolean | Indicates whether the member has already received the medial service or medication. Maps to: CareRequest.IsServiceOrMedicationReceived | Big, 46.0 | 46.0 |
| servicingFacility | Servicing Facility | Facility where the service is being provided. | Big, 46.0 | 46.0 |
| servicingPractitioner | Servicing Practitioner | Practitioner administering the service. | Big, 46.0 | 46.0 |
| servicingPractitioner​License | String | License type of the practitioner. Maps to: CareRequest.ServicingPractitionerLicense | Big, 46.0 | 46.0 |
| servicingPractitioner​Specialty | String | Specialty of the practitioner. Maps to: CareRequest.ServicingPractitionerSpecialty | Big, 46.0 | 46.0 |
| sourceSystem | String | System from which this request was sourced. Maps to: CareRequest.SourceSystem | Big, 46.0 | 46.0 |
| sourceSystemIdentifier | String | ID of the system from which the request was sourced. Maps to: CareRequest.SourceSystemIdentifier | Big, 46.0 | 46.0 |
| sourceSystemModified | String | Timestamp of the most recent update from the source system. Maps to: CareRequest.SourceSystemModified | Big, 46.0 | 46.0 |
| unitOfMeasure | String | The unit of measure associated with the prior authorization request. Maps to: CareRequestExtension.UnitofMeasure | Big, 55.0 | 55.0 |

## Related Topics

- Appointed
                  Representative (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_appointed_representative_output.htm)
- Care Request
                  ​Reviewer Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_request_reviewer_output.htm)
- First Reviewer (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_first_reviewer_output.htm)
- General
                Practitioner (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_general_practitioner_output.htm)
- Medical Director (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_medical_director_output.htm)
- Original
                  Denial​ Medical Director (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_original_denial_medical_director_output.htm)
- Reopened By Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_reopened_by_output.htm)
- Requesting
                Practitioner (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_requesting_practitioner_output.htm)
- Servicing
                Facility (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_servicing_facility_output.htm)
- Servicing
                Practitioner (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_servicing_practitioner_output.htm)
