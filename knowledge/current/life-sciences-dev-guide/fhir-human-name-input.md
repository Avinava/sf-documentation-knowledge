---
title: "FHIR Human Name Input"
domain: life-sciences-dev-guide
topic: fhir-human-name-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.322Z
estimatedTokens: 409
keywords: [FHIR, Human, Input, representation, person, associated, metadata]
---

# FHIR Human Name Input

> The input representation for the name of a person and all its
      associated metadata.

# FHIR Human Name Input

The input representation for the name of a person and all its associated metadata.

The Human​Name FHIR object maps to the [Human​Name](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_fhir_HumanName.htm "The Human​Name FHIR resource maps to the Person​Name object in Salesforce​.") object in Salesforce​.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value[] | Adds additional information to any fields not mapped in this API. | Optional | 53.0 |
| family | String | The last name of the patient. This field stores a combination of the patient’s middle and last name. | Optional | 53.0 |
| given | String | The first name of the patient. | Optional | 53.0 |
| periodEnd | String | The date until when the name is active. | Optional | 53.0 |
| periodStart | String | The date from when the name is active. | Optional | 53.0 |
| prefix | String | The prefix of the name. | Optional | 53.0 |
| sourceSystem | String | The source system from where the humanName is brought into Salesforce. | Optional | 53.0 |
| sourceSystemId | String | The identifier of the humanName record in its source system. | Optional | 53.0 |
| sourceSystem​ModifiedDate | String | The date and time when the humanName record was last modified in its source system. | Optional | 53.0 |
| suffix | String | The suffix of the name. | Optional | 53.0 |
| text | String | The full name of the person. | Optional | 53.0 |
| use | String | The usage type of the name. | Optional | 53.0 |

## Code Examples

```
"humanName": [
    {
      "use": "Official",
      "text": "Charles Green",
      "family": "Green",
      "given": "Charles",
      "prefix": "Mr.",
      "suffix": "Jr.",
      "periodStart": "1998-05-26T15:40:30.000Z",
      "periodEnd": "2021-08-09T15:40:30.000Z",
      "sourceSystem": "http://sfdc.co",
      "sourceSystemId": "567890",
      "sourceSystemModified": "2012-07-26T15:40:30.000Z"
    }
  ]
```

## Related Topics

- Human​Name (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_fhir_HumanName.htm)
- Custom Field Value (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_custom_field_value.htm)
