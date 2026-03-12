---
title: "Patient Update"
domain: life-sciences-dev-guide
topic: patient-update
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.878Z
estimatedTokens: 211
keywords: [Patient, Output, representation, result, FHIR, resource, updated]
---

# Patient Update

> Output representation of result after a Patient FHIR resource is
      updated.

# Patient Update

Output representation of result after a Patient FHIR resource is updated.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | Integer | The error in case of failure. | Small, 53.0 | 53.0 |
| errorCode | Integer | The error code in case of failure. | Small, 53.0 | 53.0 |
| errorMessage | String | The error message in case of failure. | Small, 53.0 | 53.0 |
| status | String | Specifies the status of the request.Possible values are:Failure—Specifies that the update request of the Patient FHIR resource couldn’t be completed.PartialSuccess—Specifies that the update request of the Patient FHIR resource is partially completed.Success—Specifies that the update request of the Patient FHIR resource is successfully completed. | Small, 53.0 | 53.0 |
