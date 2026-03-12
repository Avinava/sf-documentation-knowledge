---
title: "Care Diagnosis Input"
domain: life-sciences-dev-guide
topic: care-diagnosis-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.136Z
estimatedTokens: 1093
keywords: [Care, Diagnosis, Input, Associated, including, code, diagnoses]
---

# Care Diagnosis Input

> Associated diagnosis including code type, name, and description. One
      or more care diagnoses can be associated with a care request.

# Care Diagnosis Input

Associated diagnosis including code type, name, and description. One or more care diagnoses can be associated with a care request.

Root XML tag

<careDiagnosis>

JSON example

```

```

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| careRequest​Reviewers | Care Request Reviewer Input | The care diagnosis associated with the care request reviewer. Maps to: CareDiagnosis.CareRequestReviewers | No | 52.0 |
| codeDescription | String | Diagnosis code description. Maps to: CareDiagnosis.CodeDescription | No | 46.0 |
| codeType | String | Code type for the diagnosis. Maps to: CareDiagnosis.CodeType | No | 46.0 |
| codeTypeID | String | ID of the code type for the diagnosis. Maps to: CareDiagnosis.CodeTypeIdentifier | No | 46.0 |
| diagnosisCodeSet | String | The diagnosis code set. Maps to: CareDiagnosis.DiagnosisCodeSet | No | 52.0 |
| dischargeCode | String | Discharge diagnosis code. Maps to: CareDiagnosis.DischargeCode | No | 46.0 |
| dischargeCode​Description | String | Description of the discharge diagnosis code. Maps to: CareDiagnosis.DischargeCodeDescription | No | 46.0 |
| dischargeCode​Type | String | Code type for the discharge diagnosis. Maps to: CareDiagnosis.DischargeCodeType | No | 46.0 |
| dischargeCode​TypeId | String | ID of the code type for the discharge diagnosis. Maps to: CareDiagnosis.DischargeCodeTypeIdentifier | No | 46.0 |
| dischargeDiagnosis​CodeSet | String | The discharge diagnosis code set associated with the care diagnosis. Maps to: CareDiagnosis.DischargeDiagnosisCodeSet | No | 52.0 |
| dischargeDiagnosis​EffectiveDate | String | Effective date for the discharge diagnosis. Maps to: CareDiagnosis.DischargeDiagnosisEffectiveDate | No | 46.0 |
| discharge​DiagnosisEndDate | String | Termination date for the discharge diagnosis. Maps to: CareDiagnosis.DischargeDiagnosisEndDate | No | 46.0 |
| effectiveDate | String | Effective date for the diagnosis. Maps to: CareDiagnosis.EffectiveDate | No | 46.0 |
| endDate | String | Termination date for the diagnosis. Maps to: CareDiagnosis.EndDate | No | 46.0 |
| healthcare​DiagnosisCode | String | Healthcare Diagnosis Code. | No | 46.0 |
| healthConditionId | String | The health condition that's associated with the member. Maps to: CareDiagnosis.HealthCondition | No | 57.0 |
| id | String | ID of the Care Diagnosis. | Required for PATCH | 46.0 |
| modifiedCode | String | Modified diagnosis code. Maps to: CareDiagnosis.ModifiedCode | No | 46.0 |
| modifiedCode​Description | String | Modified diagnosis code description. Maps to: CareDiagnosis.ModifiedCodeDescription | No | 46.0 |
| modifiedCode​Type | String | Code type for the modified diagnosis. Maps to: CareDiagnosis.ModifiedCodeType | No | 46.0 |
| modifiedCode​TypeId | String | ID of the code type for the modified diagnosis. Maps to: CareDiagnosis.ModifiedCodeTypeIdentifier | No | 46.0 |
| modifiedDiagnosis​CodeSet | String | The modified diagnosis code set associated with the care diagnosis. Maps to: CareDiagnosis.ModifiedDiagnosisCodeSet | No | 52.0 |
| modifiedEffective​Date | String | Modified effective date for the diagnosis. Maps to: CareDiagnosis.ModifiedEffectiveDate | No | 46.0 |
| modifiedEnd​Date | String | Modified termination date for the diagnosis. Maps to: CareDiagnosis.ModifiedEndDate | No | 46.0 |
| modifiedPrimary​Diagnosis | Boolean | Modified Primary Diagnosis | No | 46.0 |
| name | String | Name of the diagnosis code. Maps to: CareDiagnosis.Name | Yes | 46.0 |
| presentOn​Admission | String | Specifies if the health condition was present at the time of member admission. Maps to: CareDiagnosis.PresentOnAdmission | No | 57.0 |
| primary | Boolean | Indicates whether it is a primary diagnosis (true) or not (false). | No | 46.0 |
| primaryDischarge​Diagnosis | Boolean | Indicates whether it is a primary Discharge Diagnosis (true) or not (false). | No | 46.0 |
| sourceSystem | String | System from which this request was sourced. Maps to: CareDiagnosis.SourceSystem | No | 46.0 |
| sourceSystem​Identifier | String | ID of the system from which the request was sourced. Maps to: CareDiagnosis.SourceSystemIdentifier | No | 46.0 |
| sourceSystem​Modified | String | Timestamp of the most recent update from the source system. Maps to: CareDiagnosis.SourceSystemModified | No | 46.0 |

## Code Examples

```
{
		"sourceSystem": "source_system_name",
		"name": "G47.30",
		"codeDescription": "Sleep apnea, unspecified",
		"codeType": "ICD-10-CM"
		}
```

## Related Topics

- Care
                        Request Reviewer Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_care_request_reviewer_input.htm)
