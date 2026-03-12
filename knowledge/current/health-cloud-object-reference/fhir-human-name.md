---
title: "FHIR Human Name"
domain: health-cloud-object-reference
topic: fhir-human-name
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.603Z
estimatedTokens: 440
keywords: [FHIR, Human, output, representation, PersonName, record, created, represent, humanName]
---

# FHIR Human Name

> The output representation of a PersonName record created to represent
      a humanName value.

# FHIR Human Name

The output representation of a PersonName record created to represent a humanName value.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value[] | The data stored in any custom fields as specified in the input request. | Small, 53.0 | 53.0 |
| family | String | The family name of the patient. This field stores a combination of the person’s middle and last names. | Small, 53.0 | 53.0 |
| given | String | The first name of the person. | Small, 53.0 | 53.0 |
| message | String | A message with any errors that can encounter while processing the request. | Small, 53.0 | 53.0 |
| periodEnd | String | The date until when the name is active. | Small, 53.0 | 53.0 |
| periodStart | String | The date from when the name is active. | Small, 53.0 | 53.0 |
| prefix | String | The prefix attached to the person’s name. | Small, 53.0 | 53.0 |
| salesforceId | String | The Salesforce ID of the PersonName record created to store the humanName value. | Small, 53.0 | 53.0 |
| sourceSystem | String | The source system from where the PersonName record was brought into Salesforce. | Small, 53.0 | 53.0 |
| sourceSystemId | String | The identifier of the person name record in its source system. | Small, 53.0 | 53.0 |
| sourceSystem​ModifiedDate | String | The date and time when the person name record was last modified in its source system. | Small, 53.0 | 53.0 |
| suffix | String | The suffix attached to the person’s name. | Small, 53.0 | 53.0 |
| text | String | The full name of the person. | Small, 53.0 | 53.0 |
| use | String | The type of use the name is meant for. For example, temp, official, or alias. | Small, 53.0 | 53.0 |

## Related Topics

- Custom Field Value (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_custom_field_value_output.htm)
