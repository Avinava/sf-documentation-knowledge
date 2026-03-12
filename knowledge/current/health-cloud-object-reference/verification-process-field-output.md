---
title: "Verification Process Field Output"
domain: health-cloud-object-reference
topic: verification-process-field-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.805Z
estimatedTokens: 262
keywords: [Verification, Process, Output, Identity, record]
---

# Verification Process Field Output

> Represents the Identity Verification Process Field
    record.

# Verification Process Field Output

Represents the Identity Verification Process Field record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataSourceType | String | The data source type. Possible values are:ExternalNoteIn API version 54.0, an external data source type isn’t supported.Salesforce | Small, 54.0 | 54.0 |
| dataType | String | The data type of the field. | Small, 54.0 | 54.0 |
| developerName | String | The developer name of the record. | Small, 54.0 | 54.0 |
| fieldName | String | The API name of the field that contains the data to be queried. | Small, 54.0 | 54.0 |
| fieldValueFormula | String | Stores the formula that’s applied to the field value. | Small, 56.0 | 56.0 |
| fieldType | String | Indicates how the field set in fieldName is to be used. Possible values are:Additional Result FieldOptional VerifierRequired VerifierResult FieldSearch FieldSearch Filter | Small, 54.0 | 54.0 |
| label | String | The record label. | Small, 54.0 | 54.0 |
