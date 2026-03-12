---
title: "Patient Communication Language"
domain: health-cloud-object-reference
topic: patient-communication-language
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.691Z
estimatedTokens: 230
keywords: [Patient, Communication, Language, output, representation, PersonLanguage, records, represent, preferences, person]
---

# Patient Communication Language

> The output representation of the PersonLanguage records that represent
      the communication preferences of a person.

# Patient Communication Language

The output representation of the PersonLanguage records that represent the communication preferences of a person.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value[] | The data stored in any custom fields as specified in the input request. | Small, 53.0 | 53.0 |
| language | String | The language specified for communication. | Small, 53.0 | 53.0 |
| message | String | A message with any errors that can encounter while processing the request. | Small, 53.0 | 53.0 |
| preferenceRank | Integer | The ranked order of preference the person has for being communicated with using the language. | Small, 53.0 | 53.0 |
| salesforceId | String | The Salesforce ID of the PersonLanguage record that represents the communication preferences of a person. | Small, 53.0 | 53.0 |

## Related Topics

- Custom Field Value (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_custom_field_value_output.htm)
