---
title: "FHIR Codeable Concept"
domain: health-cloud-object-reference
topic: fhir-codeable-concept
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.588Z
estimatedTokens: 277
keywords: [FHIR, Codeable, Concept, output, representation, Code, Bundle, records, created, represent, codeableConcept]
---

# FHIR Codeable Concept

> The output representation of the Code Set Bundle records created to
      represent a codeableConcept value.

# FHIR Codeable Concept

The output representation of the Code Set Bundle records created to represent a codeableConcept value.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value[] | The data stored in any custom fields as specified in the input request. | Small, 53.0 | 53.0 |
| coding | .FHIR Coding[] | The code set records created to represent the codings specified in the codeableConcept input. | Small, 53.0 | 53.0 |
| hash | String | The unique code set bundle key that represents the combination of code sets included in the code set bundle. | Small, 53.0 | 53.0 |
| message | String | A message with any errors that can encounter while processing the request. | Small, 53.0 | 53.0 |
| salesforceId | String | The Salesforce ID of the code set bundle records created in Salesforce to store the codeableConcept values. | Small, 53.0 | 53.0 |
| text | String | The human-readable textual representation of the concept, as specified in the codeableConcept request. | Small, 53.0 | 53.0 |

## Related Topics

- Custom Field Value (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_custom_field_value_output.htm)
- .FHIR Coding (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_coding_output.htm)
- codeableConcept (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_codeable_concept.htm)
