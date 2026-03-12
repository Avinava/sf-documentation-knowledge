---
title: "FHIR Coding"
domain: life-sciences-dev-guide
topic: fhir-coding
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.803Z
estimatedTokens: 436
keywords: [FHIR, Coding, output, representation, Code, records, created, represent]
---

# FHIR Coding

> The output representation of the Code Set records created to represent
      a Coding value.

# FHIR Coding

The output representation of the Code Set records created to represent a Coding value.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value[] | The data stored in any custom fields as specified in the input request. | Small, 53.0 | 53.0 |
| code | String | The industry-defined code that represents a concept, and is defined by a system and its version. | Small, 53.0 | 53.0 |
| display | String | The human-readable textural representation of the concept represented by the code. | Small, 53.0 | 53.0 |
| endDate | String | The date until when the code set is valid. | Small, 53.0 | 53.0 |
| hash | String | The unique code set key associated with the code set record. | Small, 53.0 | 53.0 |
| isActive | Boolean | Indicates whether the code set is active or not. | Small, 53.0 | 53.0 |
| message | String | A message with any errors that can encounter while processing the request. | Small, 53.0 | 53.0 |
| salesforceId | String | The Salesforce ID of the code set record created to store a coding value. | Small, 53.0 | 53.0 |
| startDate | String | The date from when the code set is valid. | Small, 53.0 | 53.0 |
| system | String | The terminology system that defines the meaning of the code set. | Small, 53.0 | 53.0 |
| use | String | The code set usage type associated with the code set record, stored as a picklist value. | Small, 53.0 | 53.0 |
| userSelected | Boolean | Indicates whether the code was selected directly by the user and is intended to be the primary code for the concept. | Small, 53.0 | 53.0 |
| version | String | The version of the system that defines a code set. | Small, 53.0 | 53.0 |

## Related Topics

- Custom Field Value (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_custom_field_value_output.htm)
