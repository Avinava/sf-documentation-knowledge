---
title: "Patient Upsert"
domain: life-sciences-dev-guide
topic: patient-upsert
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.882Z
estimatedTokens: 239
keywords: [Patient, Upsert, Output, representation, result, FHIR, resource, created]
---

# Patient Upsert

> Output representation of result after a Patient FHIR resource is
      created.

# Patient Upsert

Output representation of result after a Patient FHIR resource is created.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | Integer | The error code in case of failure. | Small, 53.0 | 53.0 |
| errorMessage | String | The error message in case of failure. | Small, 53.0 | 53.0 |
| failedCount | Integer | Specifies the failed count number. | Small, 53.0 | 53.0 |
| failedRecords | FHIR Patient[] | Represents the failed records. | Small, 53.0 | 53.0 |
| status | String | Specifies the status of the request.Possible values are:Failure—Specifies that the upsert request of the Patient FHIR resource couldn’t be completed.Success—Specifies that the upsert request of the Patient FHIR resource is successfully completed. | Small, 53.0 | 53.0 |
| successRecords | FHIR Patient[] | Represents the records that got successfully created. | Small, 53.0 | 53.0 |

## Related Topics

- FHIR Patient (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_patient_output.htm)
