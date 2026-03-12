---
title: "FHIR Identifier"
domain: life-sciences-dev-guide
topic: fhir-identifier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.819Z
estimatedTokens: 427
keywords: [FHIR, Identifier, output, representation, Identified, records, created, represent]
---

# FHIR Identifier

> The output representation of the Identified records created to
      represent an identifier value.

# FHIR Identifier

The output representation of the Identified records created to represent an identifier value.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value[] | The data stored in any custom fields as specified in the input request. | Small, 53.0 | 53.0 |
| assigner | FHIR Reference | The authorized body that issued the identifier, specified as a reference to an Account record. | Small, 53.0 | 53.0 |
| message | String | A message with any errors that can encounter while processing the request. | Small, 53.0 | 53.0 |
| periodEnd | String | The date and time until when the Identifier is active, recorded in DateTime format. | Small, 53.0 | 53.0 |
| periodStart | String | The date and time from when the Identifier is active, recorded in DateTime format. | Small, 53.0 | 53.0 |
| salesforceId | String | The Salesforce ID of the Identifier record created to store the identifier value. | Small, 53.0 | 53.0 |
| sourceSystem | String | The source system from which the identifier record was brought into Salesforce. | Small, 53.0 | 53.0 |
| sourceSystemId | String | The identifier of the identifier record in its source system | Small, 53.0 | 53.0 |
| sourceSystemModifiedDate | String | The date and time when the identifier record was last modified in its source system. | Small, 53.0 | 53.0 |
| type | FHIR Codeable Concept | The system-defined code that represents the type of ID the identifier record is. | Small, 53.0 | 53.0 |
| use | String | The usage type of the Identifier. | Small, 53.0 | 53.0 |
| value | String | The ID value of the Identifier. | Small, 53.0 | 53.0 |

## Related Topics

- Custom Field Value (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_custom_field_value_output.htm)
- FHIR
                  Reference (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_reference_output.htm)
- FHIR Codeable Concept (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_codeable_concept_output.htm)
