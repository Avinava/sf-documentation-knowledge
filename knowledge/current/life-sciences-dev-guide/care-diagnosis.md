---
title: "Care Diagnosis"
domain: life-sciences-dev-guide
topic: care-diagnosis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.654Z
estimatedTokens: 1156
keywords: [Care, Diagnosis, Associated, including, code, diagnoses]
---

# Care Diagnosis

> Associated diagnosis including code type, name, and description. One
      or more care diagnoses can be associated with a care request.

# Care Diagnosis

Associated diagnosis including code type, name, and description. One or more care diagnoses can be associated with a care request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| careRequest​Reviewers | Care Request ​Reviewer Output[] | The care diagnosis associated with the care request reviewer. Maps to: CareDiagnosis.CareRequestReviewers | Big, 52.0 | 52.0 |
| code | String | Name of the diagnosis code. Maps to: CareDiagnosis.Name | Big, 46.0 | 46.0 |
| codeDescription | String | Diagnosis code description. Maps to: CareDiagnosis.CodeDescription | Big, 46.0 | 46.0 |
| codeType | String | Code type for the diagnosis. Maps to: CareDiagnosis.CodeType | Big, 46.0 | 46.0 |
| codeTypeID | String | ID of the code type for the diagnosis. Maps to: CareDiagnosis.CodeTypeIdentifier | Big, 46.0 | 46.0 |
| diagnosisCodeSet | String | The diagnosis code set. Maps to:CareDiagnosis.DiagnosisCodeSet | Big, 52.0 | 52.0 |
| dischargeCode | String | Discharge diagnosis code. Maps to: CareDiagnosis.DischargeCode | Big, 46.0 | 46.0 |
| dischargeCode​Description | String | Description of the discharge diagnosis code. Maps to: CareDiagnosis.DischargeCodeDescription | Big, 46.0 | 46.0 |
| dischargeCode​Type | String | Code type for the discharge diagnosis. Maps to: CareDiagnosis.DischargeCodeType | Big, 46.0 | 46.0 |
| dischargeCodeTypeId | String | ID of the code type for the discharge diagnosis. Maps to: CareDiagnosis.DischargeCodeTypeIdentifier | Big, 46.0 | 46.0 |
| dischargeDiagnos​isEffectiveDate | String | Effective date for the discharge diagnosis. Maps to: CareDiagnosis.DischargeDiagnosisEffectiveDate | Big, 46.0 | 46.0 |
| dischargeDiagnosis​CodeSet | String | The discharge diagnosis code set associated with the care diagnosis. Maps to: CareDiagnosis.DischargeDiagnosisCodeSet | Big, 52.0 | 52.0 |
| dischargeDiagnos​isEndDate | String | Termination date for the discharge diagnosis. Maps to: CareDiagnosis.DischargeDiagnosisEndDate | Big, 46.0 | 46.0 |
| effectiveDate | String | Effective date for the diagnosis. Maps to: CareDiagnosis.EffectiveDate | Big, 46.0 | 46.0 |
| endDate | String | Termination date for the diagnosis. Maps to: CareDiagnosis.EndDate | Big, 46.0 | 46.0 |
| healthcare​DiagnosisCode | String | Healthcare Diagnosis Code. | Big, 46.0 | 46.0 |
| healthCondition​Id | String | The health condition that's associated with the member. Maps to: CareDiagnosis.HealthCondition | Big, 57.0 | 57.0 |
| id | String | ID of the Care Diagnosis. | Big, 46.0 | 46.0 |
| modifiedCode | String | Modified diagnosis code. Maps to: CareDiagnosis.ModifiedCode | Big, 46.0 | 46.0 |
| modifiedCode​Description | String | Modified diagnosis code description. Maps to: CareDiagnosis.ModifiedCodeDescription | Big, 46.0 | 46.0 |
| modifiedCodeType | String | Code type for the modified diagnosis. Maps to: CareDiagnosis.ModifiedCodeType | Big, 46.0 | 46.0 |
| modifiedCodeTypeId | String | ID of the code type for the modified diagnosis. Maps to: CareDiagnosis.ModifiedCodeTypeIdentifier | Big, 46.0 | 46.0 |
| modifiedDiagnosis​CodeSet | String | The modified diagnosis code set associated with the care diagnosis. Maps to: CareDiagnosis.ModifiedDiagnosisCodeSet | Big, 52.0 | 52.0 |
| modifiedEffective​Date | String | Modified effective date for the diagnosis. Maps to: CareDiagnosis.ModifiedEffectiveDate | Big, 46.0 | 46.0 |
| modifiedEndDate | String | Modified termination date for the diagnosis. Maps to: CareDiagnosis.ModifiedEndDate | Big, 46.0 | 46.0 |
| modifiedPrimary​Diagnosis | Boolean | Modified Primary Diagnosis | Big, 46.0 | 46.0 |
| name | String | Name of the diagnosis code. Maps to: CareDiagnosis.Name | Big, 46.0 | 46.0 |
| presentOn​Admission | String | Specifies if the health condition was present at the time of member admission. Maps to: CareDiagnosis.PresentOnAdmission | Big, 57.0 | 57.0 |
| primary | Boolean | Indicates whether it is a primary diagnosis (true) or not (false). | Big, 46.0 | 46.0 |
| primaryDischarge​Diagnosis | Boolean | Indicates whether it is a primary Discharge Diagnosis (true) or not (false). | Big, 46.0 | 46.0 |
| sourceSystem | String | System from which this request was sourced. Maps to: CareDiagnosis.SourceSystem | Big, 46.0 | 46.0 |
| sourceSystem​Identifier | String | ID of the system from which the request was sourced. Maps to: CareDiagnosis.SourceSystemIdentifier | Big, 46.0 | 46.0 |
| sourceSystem​Modified | String | Timestamp of the most recent update from the source system. Maps to: CareDiagnosis.SourceSystemModified | Big, 46.0 | 46.0 |

## Related Topics

- Care Request ​Reviewer Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_request_reviewer_output.htm)
