---
title: "Referral Detail Input"
domain: health-cloud-object-reference
topic: referral-detail-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.152Z
estimatedTokens: 245
keywords: [Referral, Detail, Input, representation, patient]
---

# Referral Detail Input

> Input representation of the request to create patient referral
      details.

# Referral Detail Input

Input representation of the request to create patient referral details.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| detailCodeId | String | ID of Code Set, or Code Set Bundle that adds information to a clinical service request record. | Optional | 59.0 |
| detailRecordId | String | ID of the detail record. | Optional | 59.0 |
| detailRecordType | String | Type of the detail record.The supported values are:Care ObservationCare PlanCare Registered DeviceCare SpecialtyClinical Service RequestDiagnostic SummaryHealth ConditionHealthcare FacilityMedication RequestMember PlanWork Type | Optional | 59.0 |
| detailType | String | Type of the object that stores patient details.The supported values are the ClinicalServiceRequestDetail.detailType enum values. | Required | 59.0 |
| fields | Map<String, Object> | Map of API names and values of detail fields. | Optional | 59.0 |
