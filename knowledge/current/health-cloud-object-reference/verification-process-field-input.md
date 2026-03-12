---
title: "Verification Process Field Input"
domain: health-cloud-object-reference
topic: verification-process-field-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.798Z
estimatedTokens: 223
keywords: [Verification, Process, Input, representation]
---

# Verification Process Field Input

> Input representation of fields for the verification
    process.

# Verification Process Field Input

Input representation of fields for the verification process.

Root XML tag

<verificationProcessField>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataSourceType | String | The source type of the data.Possible values are:Salesforce | Required | 54.0 |
| developerName | String | The developer name of the field. | Required | 54.0 |
| fieldName | String | The name of the field that contains the verification data based on the selected field type. | Required | 54.0 |
| fieldValueFormula | String | Stores the formula that's applied to the field value. | Optional | 56.0 |
| fieldType | String | Indicates the type of field. | Required | 54.0 |
| label | String | The label of the field.NoteIf you don’t specify a label, the field label from the object is used. | Optional | 54.0 |
