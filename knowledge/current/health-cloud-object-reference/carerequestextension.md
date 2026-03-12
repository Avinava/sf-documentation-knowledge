---
title: "CareRequestExtension"
domain: health-cloud-object-reference
topic: carerequestextension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.640Z
estimatedTokens: 2846
keywords: [CareRequestExtension, extra, care, subscriber, member's, health, plan, home, healthcare, status, ambulance, transportation, Calls, Associated, Objects]
---

# CareRequestExtension

> Represents extra details for a care request such as the subscriber
         details for the member's health plan, home healthcare status, and ambulance transportation
         details.

# CareRequestExtension

Represents extra details for a care request such as the subscriber details for the member's health plan, home healthcare status, and ambulance transportation details.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AmbulanceTransportReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason for ambulance transport. |
| AmbulanceTransportType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of ambulance transport. |
| AppealEffectuationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe effective date of the outcome of the appeal request. For example, if a claim was successfully appealed, this field displays the date when the claim was paid. |
| AuthorizationRefIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the authorization request.This field is available in API version 57.0 and later. |
| CareRequestCaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionCase related to the care request extension.This is a relationship field.Relationship NameCareRequestCaseRelationship TypeLookupRefers ToCase |
| CareRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCare request related to the care request extension.This is a relationship field.Relationship NameCareRequestRelationship TypeLookupRefers ToCareRequest |
| CaseSubStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe substatus of a case related to a care request.Possible values are:ApprovedAuto ApprovedDeniedMore Information RequestedMore Information RequiredNew RequestPartially ApprovedPeer to Peer Review ScheduledPending ReviewSchedule Peer to Peer ReviewThis field is available in API version 56.0 and later. |
| ClientSourceSysIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn identifier of the client's source system that sent the care request. |
| CoveragePlanTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of plan the member is covered by.This field is a relationship field.Relationship NameCoveragePlanTypeRefers ToCodeSetBundle |
| DocumentAttachmentStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of a clinical document upload.Possible values are:CompleteIncompleteThis field is available in API version 55.0 and later. |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe healthcare provider associated with the care request against whom the Grievance is filedThis is a relationship field.Relationship NameHealthcareProviderRelationship TypeLookupRefers ToHealthcareProvider |
| HomeHealthCertificationEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCertification end date for home healthcare. |
| HomeHealthCertificationStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCertification start date for home healthcare. |
| HomeHealthStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate that home health services are scheduled or anticipated to start. |
| IndependentReviewDetermination | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe determination made by the independent review.Possible values are:OtherOverturnedUpheld |
| IndependentReviewDeterminationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the determination was made by the independent review. |
| IndependentReviewSubmissionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the review request was submitted for independent review. |
| IsIndependentReviewRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an independent review is requiredThe default value is 'false'. |
| IsMedicareCoverage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the member has Medicare coverage. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the care request extension. |
| NursingHomeResidentialStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNursing home-resident status at the time of service. |
| PriorDischargeStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the previous discharge status of the member.Possible values are:Discharged to court/law enforcement.Discharged to home with home health.Discharged to home/self care.Discharged to hospice care.Discharged/transferred to LTACC.Discharged/transferred to Psychiatric facility.Discharged/transferred to SNF.Discharged/transferred to other acute care facility.ExpiredLeft against medical advice (AMA). |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCategory type of the request.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| ReferenceCaseType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of reference case that's associated with the care request extension.Possible values are:Associated CasePrior CaseThis field is available in API version 58.0 and later. |
| ReopenDecisionDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the decision on the reopen request was made. |
| ReopenRequestOutcome | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe result of the reopen request.Possible values are:OverturnedUpheld |
| ReopenRequestType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of reopen request.Possible values are:Peer-to-Peer ReviewReconsideration |
| RequestExtensionReason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe reason for requesting the care extension. |
| RequestExtnDecisionDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the decision to extend the care request extension was made. |
| RequestOutcome | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the outcome of the request.Possible values are:OverturnedPartially PendingPartially UpheldUpheldVoidedQueuedCompleteError |
| RequestOutcomeDesc | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the request outcome. |
| RequestType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCategory type of the request.Possible values are:Admission ReviewConcurrent ReviewHealth Services ReviewIndividualInpatient - Behavioral Health ReviewInpatient - Physical Health ReviewOutpatient - Behavioral Health ReviewOutpatient - Physical Health ReviewSpecialty Care Review |
| RequestingProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe provider who requested a prior authorization for a care request. This field is available in API version 55.0 and later.This field is a relationship field.Relationship NameRequestingProviderRelationship TypeLookupRefers ToHealthcareProvider |
| ResolutionDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the care request. |
| ServiceLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe level of service rendered. |
| ServiceType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClassification of the type of service. |
| ServicingFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility where a patient receives service for a care request. This field is available in API version 55.0 and later.This field is a polymorphic relationship field.Relationship NameServicingFacilityRelationship TypeLookupRefers ToHealthcareFacility, HealthcarePractitionerFacility |
| ServicingProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe provider who provides the service for a care request. This field is available in API version 55.0 and later.This field is a relationship field.Relationship NameServicingProviderRelationship TypeLookupRefers ToHealthcareProvider |
| SubscriberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier for the person who has subscribed to the health plan.This is a relationship field.Relationship NameSubscriberRelationship TypeLookupRefers ToAccount |
| SubscriberMemberIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMember ID for the subscriber. |
| SupportingDocUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL of supporting documentation such as a questionnaire. |
| TotalAmbulanceTransportDistance | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal distance traveled during ambulance transport. |
| UnitofMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the quantity associated with a prior authorization request. This field is available in API version 55.0 and later.This field is a relationship field.Relationship NameUnitofMeasureRelationship TypeLookupRefers ToUnitOfMeasure |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareRequestExtensionChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API Version 62.0)

Change events are available for the object.

[CareRequestExtensionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[CareRequestExtensionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.
