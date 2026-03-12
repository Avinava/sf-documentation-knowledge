---
title: "Care Request Patient Input"
domain: health-cloud-object-reference
topic: care-request-patient-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.792Z
estimatedTokens: 455
keywords: [Care, Patient, Input, whom, raised]
---

# Care Request Patient Input

> The patient for whom the request is being raised.

# Care Request Patient Input

The patient for whom the request is being raised.

Root XML tag

<patient>

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| addressLine1 | String | Patient’s address line 1. | No | 46.0 |
| addressLine2 | String | Patient’s Address Line 2. | No | 46.0 |
| birthDate | String | Date of birth of the patient. Maps to: CareRequest.MemberDateOfBirthNoteRequired if birth date is specified in the member account record. Must be in DateTime format; for example: 1970-04-30T00:00:00. | No | 46.0 |
| city | String | City where the patient lives. | No | 46.0 |
| firstName | String | First name of the patient. | No | 46.0 |
| gender | String | Gender of the patient. Maps to: CareRequest.MemberGender | No | 46.0 |
| lastName | String | Last name of the patient. | Yes | 46.0 |
| medicareCoverage | Boolean | Indicates whether the patient has Medicare coverage. Maps to: CareRequestExtension.IsMedicareCoverage | No | 46.0 |
| memberCondition | String | Free-form description of the patient’s condition. Maps to: CareRequest.MemberCondition | No | 46.0 |
| memberId | String | Lookup to MemberPlan.MemberNumber.NoteNot the insurance identifier for the member in Account. | Yes | 46.0 |
| memberPrognosis | String | Indicator of the provider's prognosis for the patient. Maps to: CareRequest.MemberPrognosis | No | 46.0 |
| memberStatus | String | The patient’s status at admission, date of outpatient service, or start of care. Maps to: CareRequest.MemberStatus | No | 46.0 |
| middleName | String | Middle name of the patient. | No | 46.0 |
| state | String | State where the patient lives. | No | 46.0 |
| suffix | String | Name suffix of the patient. | No | 46.0 |
| zipCode | String | ZIP code of the patient’s address. | No | 46.0 |
