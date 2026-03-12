---
title: "CareRequest"
domain: health-cloud-object-reference
topic: carerequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.574Z
estimatedTokens: 5278
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

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AcknowledgementLetterSentDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when an acknowledgment letter was sent to the requester. |
| ActualAdmissionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionActual admission date for the patient. |
| ActualDischargeDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionActual discharge date for the patient. |
| AdmissionNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes related to the admission. |
| AdmissionSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhere the patient was admitted from, for example, a clinic or an emergency room. |
| AdmissionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of admission, for example, emergency or elective. |
| AorReceivedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when the Appointment of Representative (AOR) form was received. |
| AorRequestedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when the AOR form was requested. |
| AppealRequestReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of reason associated with the appeal request.Possible values are:Service Request RejectedService Claim UnpaidRejected - Service Not RequiredRejected - No Coverage BenefitNotification DelayedSpecialist Referral Rejected |
| AppointedRepresentativeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the appointed representative for the member.This is a relationship field.Relationship NameAppointedRepresentativeRelationship TypeLookupRefers ToAccount |
| AppointedRepVerbalContactDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time of verbal contact with the member's appointed representative. |
| AppointedRepWrittenContactDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time correspondence was sent to the member's appointed representative. |
| ApprovedLengthOfStay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionApproved number of days for the admission. |
| ApprovedLevelOfCare | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionApproved level of care for the patient, for example, Hospital-Observaton or SNF-Rehabilitation. |
| CareRequestCaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionCase related to the care request.NoteA case record can only be related to a single care request record. Therefore, ensure that the Case record you specify in this field isn’t already associated with another care request.This is a relationship field.Relationship NameCareRequestCaseRelationship TypeLookupRefers ToCase |
| ClaimNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClaim number for the medical service or medication, if one exists. |
| ClinicalCaseType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClinical case type for the patient, for example, High Risk Fall or Adult Diabetes. |
| CriteriaMet | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether criteria for care was met. |
| CumulativeLengthOfStay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTotal number of days for the admission. |
| CurrentLevelOfCare | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLevel of care that the patient is receiving. |
| DecisionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate by which the decision must be made for the request. |
| DecisionDaysRemaining | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of days remaining for a decision or resolution. |
| DecisionLetter | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe text of the determination letter sent to the member and provider. |
| DecisionNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes related to the decision. |
| DecisionReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason for the decision. |
| DecisionReasonDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionText describing the reason for the decision. |
| DeniedLengthOfStay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of days denied for the admission. |
| DeniedLevelOfCare | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLevel of care denied for the patient. |
| DispositionNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes related to the disposition of the request. |
| DueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the request is due for completion. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date for an effective-date range. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date for an effective-date range. |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionExpiration date for the request. |
| ExtensionRequestReceivedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time an extension was requested. |
| ExternalComplaintIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionComplaint ID number. |
| FacilityRecordNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe medical record number used to identify a patient. |
| FacilityRoomBedType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of facility bed for the patient. |
| FacilityRoomNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility room number for the patient. |
| FinalLevelOfCare | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFinal level of care the patient. |
| FirstReviewerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the person who reviewed the request.This is a relationship field.Relationship NameFirstReviewerRelationship TypeLookupRefers ToUser |
| FirstReviewerNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes from the first reviewer related to the case. |
| GeneralPractitionerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMember's primary or general care practitioner.This is a relationship field.Relationship NameGeneralPractitionerRelationship TypeLookupRefers ToContact |
| GeneralPractitionerVerbalNotifiedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when the primary care practitioner was verbally notified of the decision |
| GeneralPractitionerWrittenNotifiedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when the primary care practitioner was notified of the decision by written correspondence. |
| GrievanceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of grievance. |
| InfoReceivedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when additional information was received from the provider or member. |
| InfoRequestedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when additional information was requested from the provider or member. |
| InitialDenialNotificationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of initial denial notification. |
| InitialDenialNotificationTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time when the initial care request was denied. |
| IsExtendedRequest | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a request was extended. |
| IsReadmission | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the care request is for a readmission.The default value is 'false'. |
| IsServiceOrMedicationReceived | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the member has already received the medial service or medication. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MedicalDirectorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the medical director who reviewed the request.This is a relationship field.Relationship NameMedicalDirectorRelationship TypeLookupRefers ToUser |
| MedicalDirectorNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes from the medical director related to the request. |
| MemberCondition | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFree-form description of the member's condition. |
| MemberContactDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when the member was contacted. |
| MemberDateOfBirth | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of birth of the member. |
| MemberFirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFirst name of the member. |
| MemberGender | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGender of the member. |
| MemberGroupNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInsurance group number for the member. |
| MemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInsurance identifier for the member.This is a relationship field.Relationship NameMemberRelationship TypeLookupRefers ToAccount |
| MemberIdentificationNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInsurance identification number for the member. |
| MemberLastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLast name of the member. |
| MemberPrimaryPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary insurance plan of a member associated with the care request when the member is insured under multiple plans.This is a relationship field.Relationship NameMemberPrimaryPlanRelationship TypeLookupRefers ToMemberPlan |
| MemberPrognosis | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicator of the provider's prognosis for the member. |
| MemberSecondaryPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe secondary insurance plan of a member associated with the care request when the member is insured under multiple plans.This is a relationship field.Relationship NameMemberSecondaryPlanRelationship TypeLookupRefers ToMemberPlan |
| MemberStatus | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe member's status at admission, date of outpatient service, or start of care. |
| MemberVerbalNotificationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when the member was verbally notified of the decision. |
| MemberWrittenNotificationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when the member was notified of the decision by written correspondence. |
| ModificationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the case was modified. |
| ModifiedLengthOfStay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModified number of days for the admission. |
| ModifiedLevelOfCare | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModified level of care for the patient. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the care request. |
| NextReviewDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the next review is scheduled for completion. |
| OriginalDenialMedicalDirectorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the medical director who denied the original request.This is a relationship field.Relationship NameOriginalDenialMedicalDirectorRelationship TypeLookupRefers ToUser |
| ParProvider | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicator of whether this provider has entered into an agreement with the insurance carrier. |
| PlaceOfService | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPlace of service for the member's care such as an inpatient hospital or an ambulatory surgery center. |
| PractitionerContactDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when the provider was contacted. |
| QuantityType | TypepicklistPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionQuantity type for the request such as days, units, or visits. |
| ReceivedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the request was received. |
| ReconsiderationDenialNotificationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the reconsidered care request was denied. |
| ReconsiderationDenialNotificationTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time when the reconsidered care request was denied. |
| ReferenceCareRequestCaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference care request case number associated with the care request.This is a relationship field.Relationship NameReferenceCareRequestCaseRelationship TypeLookupRefers ToCase |
| ReferenceCaseNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference authorization number for an appeal, complaint, or grievance. |
| ReopenedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the request was reopened. |
| ReopenReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason the request was reopened.The possible values are:Administrative ErrorOriginal Decision Overturned |
| ReopenReasonDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of why the request was reopened. |
| RequestedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the request was originally requested. |
| RequestedLengthOfStay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequested number of days for the admission. |
| RequestedLevelOfCare | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequested level of care for the patient. |
| RequesterType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the role of the individual initiating the request. |
| RequestingPractitionerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOrdering or referring practitioner for the request.This is a relationship field.Relationship NameRequestingPractitionerRelationship TypeLookupRefers ToContact |
| RequestingPractitionerLicense | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLicense type of the practitioner. |
| RequestingPractitionerSpecialty | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecialty of the practitioner, for example, Family Practice or General Surgery. |
| RequestingPractitionerVerbalNotifiedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when the practitioner was verbally notified of the decision. |
| RequestingPractitionerWrittenNotifiedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when the practitioner was notified of the decision by written correspondence. |
| ResolutionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when the complaint, appeal, or grievance was resolved. |
| ResolutionLetterSentDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when a resolution letter was sent to the requester. |
| ResolutionNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionResolution notes for the request. |
| ReviewDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the review was completed. |
| RootCauseNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionField for notes related to the root cause for the request. |
| ScheduledAdmissionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAnticipated admission date for the patient. |
| ScheduledDischargeDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionScheduled discharge date for the patient. |
| ServiceDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when patient received the service. |
| ServicingFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFacility where the service is being provided.This is a relationship field.Relationship NameServicingFacilityRelationship TypeLookupRefers ToAccount |
| ServicingPractitionerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPractitioner administering the service.This is a relationship field.Relationship NameServicingPractitionerRelationship TypeLookupRefers ToContact |
| ServicingPractitionerLicense | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLicense type of the practitioner. |
| ServicingPractitionerSpecialty | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecialty of the practitioner. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which this request was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the system from which the request was sourced. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the most recent update from the source system. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareRequestChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm) (API version 59.0)

Change events are available for the object.

[CareRequestFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[CareRequestHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

#### See Also

-   [Care Request Input](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_request_input.htm "The general details of a care-related request including member information, admission date, decision reason, and so on. A single request can contain multiple diagnoses or drugs. Care requests include prior authorizations for drugs and services, admission notifications, concurrent review of admissions, appeals, complaints, and grievances.")

## Related Topics

- Care Request Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_request_input.htm)
