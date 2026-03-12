---
title: "CareRequestExtension"
domain: sfFieldRef
topic: carerequestextension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.301Z
estimatedTokens: 1013
keywords: [CareRequestExtension, extra, care, subscriber, member's, health, plan, home, healthcare, status, ambulance, transportation]
---

# CareRequestExtension

> Represents extra details for a care request such as the subscriber
         details for the member's health plan, home healthcare status, and ambulance transportation
         details.

# CareRequestExtension

Represents extra details for a care request such as the subscriber details for the member's health plan, home healthcare status, and ambulance transportation details.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareRequestExtension in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AmbulanceTransportReason | Ambulance Transport Reason | picklist |  | 40 |  |  |
| AmbulanceTransportType | Ambulance Transport Type | picklist |  | 40 |  |  |
| AppealEffectuationDateTime | Appeal Effectuation Date | datetime |  |  |  |  |
| AuthorizationRefIdentifier | Authorization Reference Identifier | string |  | 255 |  |  |
| CareRequestCaseId | Case ID | reference |  | 18 |  |  |
| CareRequestId | Care Request ID | reference |  | 18 |  |  |
| CaseSubStatus | Case Sub Status | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DocumentAttachmentStatus | Document Attachment Status | picklist |  | 40 |  |  |
| HealthcareProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| HomeHealthCertificationEndDate | Home Health Certification End Date | date |  |  |  |  |
| HomeHealthCertificationStartDate | Home Health Certification Start Date | date |  |  |  |  |
| HomeHealthStartDate | Home Health Start Date | date |  |  |  |  |
| Id | Care Request Extension ID | id |  | 18 |  |  |
| IndependentReviewDetermination | Independent Review Determination | picklist |  | 40 |  |  |
| IndependentReviewDeterminationDate | Independent Review Determination Date | datetime |  |  |  |  |
| IndependentReviewSubmissionDate | Independent Review Submission Date | datetime |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsIndependentReviewRequired | Independent Review Required | boolean |  |  |  |  |
| IsMedicareCoverage | Medicare Coverage | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NursingHomeResidentialStatus | Nursing Home Residential Status | picklist |  | 40 |  |  |
| PriorDischargeStatus | Prior Discharge Status | picklist |  | 40 |  |  |
| ReferenceCaseType | Reference Case Type | picklist |  | 40 |  |  |
| ReopenDecisionDateTime | Reopen Decision Date | datetime |  |  |  |  |
| ReopenRequestOutcome | Reopen Request Outcome | picklist |  | 40 |  |  |
| ReopenRequestType | Reopen Request Type | picklist |  | 40 |  |  |
| ReopenedById | User ID | reference |  | 18 |  |  |
| RequestExtensionReason | Request Extension Reason | textarea |  | 32000 |  |  |
| RequestExtnDecisionDateTime | Request Extension Decision Date | datetime |  |  |  |  |
| RequestOutcome | Request Outcome | picklist |  | 40 |  |  |
| RequestOutcomeDesc | Request Outcome Description | textarea |  | 32000 |  |  |
| RequestType | Request Type | picklist |  | 40 |  |  |
| RequestingProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| ResolutionDescription | Resolution Description | textarea |  | 32000 |  |  |
| ServiceLevel | Service Level | picklist |  | 40 |  |  |
| ServiceType | Service Type | string |  | 255 |  |  |
| ServicingFacilityId | Servicing Facility ID | reference |  | 18 |  |  |
| ServicingProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| SubscriberId | Account ID | reference |  | 18 |  |  |
| SubscriberMemberIdentifier | Subscriber Member ID | string |  | 64 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAmbulanceTransportDistance | Total Ambulance Transport Distance | double |  |  | 5 | 2 |
| UnitofMeasureId | Unit of Measure ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
