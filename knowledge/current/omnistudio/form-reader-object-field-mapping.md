---
title: "Form Reader Object Field Mapping"
domain: omnistudio
topic: form-reader-object-field-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.949Z
estimatedTokens: 165
keywords: [Form, Reader, Mapping, Output, representation, extracted, text, specific, Salesforce]
---

# Form Reader Object Field Mapping

> Output representation of the mapping between the extracted text values
      and the specific Salesforce object fields.

# Form Reader Object Field Mapping

Output representation of the mapping between the extracted text values and the specific Salesforce object fields.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| confidence | Double | Confidence score for the extracted value. | Small, 54.0 | 54.0 |
| pageNumber | Integer | Page number of the document corresponding to the ODSR record. | Small, 55.0 | 55.0 |
| targetFieldName | String | Field name of the target object. | Small, 54.0 | 54.0 |
| value | String | Value extracted from the form that is filled in the target field. | Small, 54.0 | 54.0 |
