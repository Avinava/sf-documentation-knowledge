---
title: "FHIR Identifier Input"
domain: life-sciences-dev-guide
topic: fhir-identifier-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.327Z
estimatedTokens: 433
keywords: [FHIR, Identifier, Input, representation]
---

# FHIR Identifier Input

> The input representation of the Identifier FHIR
    object.

# FHIR Identifier Input

The input representation of the Identifier FHIR object.

The Identifier FHIR object maps to the [Identifier](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_fhir_Identifier.htm "The Identifier FHIR resource maps to the Identifier object in Salesforce.") object in Salesforce.

Root XML tag

<FhirIdentifierInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value Input[] | Adds additional information to any fields not mapped in this API. | Optional | 53.0 |
| assigner | FHIR Reference Input | The authorized body that issued the identifier, stored as a reference to the Account object. | Optional | 53.0 |
| periodEnd | String | The date and time until when the Identifier is active, recorded in DateTime format. | Optional | 53.0 |
| periodStart | String | The date and time from when the Identifier is active, recorded in DateTime format. | Optional | 53.0 |
| sourceSystem | String | The source system from which the identifier record was brought into Salesforce. | Optional | 53.0 |
| sourceSystemId | String | The identifier of the identifier record in its source system. | Optional | 53.0 |
| sourceSystemModifiedDate | String | The date and time when the identifier record was last modified in its source system. | Optional | 53.0 |
| type | FHIR Codeable Concept Input | The system-defined code that represents the type of ID the identifier record is. | Optional | 53.0 |
| use | String | The usage type of the Identifier record. | Optional | 53.0 |
| value | String | The value associated with an Identifier record. | Optional | 53.0 |

## Code Examples

```
{
   "identifier": [ {
      "assigner": {
        "referenceResource": "Organization",
        "referenceId": "XYZId"
      },
      "type": {
        "text": "Passport number",
        "coding": [ {
            "display": "Passport number",
            "code": "PPN",
            "isActive": true,
            "use": "Identifier"
        } ]
      },
      "value": "ABCD5678",
      "use": "Official",
      "periodStart": "1998-05-26T15:40:30.000Z",
      "periodEnd": "2021-08-09T15:40:30.000Z",
      "sourceSystem": "http://sfdc.co",
      "sourceSystemId": "567890",
      "sourceSystemModified": "2012-07-26T15:40:30.000Z"
   } ]
}
```

## Related Topics

- Identifier (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_fhir_Identifier.htm)
- Custom Field Value Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_custom_field_value.htm)
- FHIR Reference Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_reference.htm)
- FHIR Codeable Concept Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_codeable_concept.htm)
