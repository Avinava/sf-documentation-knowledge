---
title: "FHIR Coding Input"
domain: life-sciences-dev-guide
topic: fhir-coding-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.294Z
estimatedTokens: 520
keywords: [FHIR, Coding, Input, representation]
---

# FHIR Coding Input

> Input representation for the Coding FHIR object.

# FHIR Coding Input

Input representation for the Coding FHIR object.

The Coding FHIR object maps to the [CodeSet](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_fhir_Coding.htm "The Coding FHIR resource maps to the CodeSet object in Salesforce.") object in Salesforce.

Root XML tag

<FhirCodingInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value Input[] | Adds additional information to any fields not mapped in this API. | Optional | 53.0 |
| code | String | The industry-defined code that represents a concept and is defined by its system version. | Optional | 53.0 |
| display | String | The human-readable text representation of the code. | Optional | 53.0 |
| endDate | String | The date until when the code is valid. | Optional | 53.0 |
| hash | String | The code set key associated with the code set record create for this coding. This field is a text field with a unique value to identify the code set record. You can either manually assign a code set key, or let the system generate one for you if you don’t specify it in your request. | Optional | 53.0 |
| isActive | Boolean | Indicates whether the code is active (true) or not (false). | Optional | 53.0 |
| isCustomCode | Boolean | Indicates whether the defined code is a custom code (true) or not (false). | Optional | 54.0 |
| recordId | String | The Salesforce record ID of the code. | Optional | 53.0 |
| startDate | String | The date from when the code is valid. | Optional | 53.0 |
| system | String | The terminology system that defines the code. | Optional | 53.0 |
| use | String | The code set type associated with the code set record, stored as a picklist value. | Optional | 53.0 |
| userSelected | Boolean | Indicates whether the code was selected directly by the user and is intended to be the primary code for the concept. | Optional | 53.0 |
| version | String | The version of the system that defines the code. | Optional | 53.0 |

## Code Examples

```
"coding": [ {
      "display": "Burn of ear",
      "code": "1234567",
      "system": "http://sfdc.co",
      "version": "2.16.840.1.113883.6.96",
      "isActive": true,
      "isPrimary": true,
      "use": "Clinical",
      "userSelected": true
      "startDate": "1993-11-09T15:40:30.000Z",
      "endDate": "2021-08-24T17:00:00.000Z",
      "additionalInformation": [ {
      "fieldName": "IsCustomCode",
      "dataType": "boolean",
      "fieldValue": true
      } ]
   } ]
}
```

## Related Topics

- CodeSet (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_fhir_Coding.htm)
- Custom Field Value Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_custom_field_value.htm)
