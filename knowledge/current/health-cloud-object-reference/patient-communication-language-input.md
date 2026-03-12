---
title: "Patient Communication Language Input"
domain: health-cloud-object-reference
topic: patient-communication-language-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.104Z
estimatedTokens: 219
keywords: [Patient, Communication, Language, Input, representation]
---

# Patient Communication Language Input

> Input representation of the patient communication
    language.

# Patient Communication Language Input

Input representation of the patient communication language.

The PatientCommunicationLanguage FHIR object maps to the [PersonLanguage](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_PersonLanguage.htm "HTML (New Window)") object in Salesforce.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value Input[] | Adds additional information to any fields not mapped in this API. | Optional | 53.0 |
| language | String | The language used by the person. | Optional | 53.0 |
| preferenceRank | Integer | The ranked order of preference the person has for the language as a medium of communication. | Optional | 53.0 |

## Code Examples

```
"PatientCommunicationLanguage": [
    {
      "language": "High Elvish",
      "preferenceRank": 2
    }
  ]
```

## Related Topics

- Custom Field Value Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_custom_field_value.htm)
