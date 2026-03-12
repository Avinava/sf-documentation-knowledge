---
title: "FHIR Address Input"
domain: health-cloud-object-reference
topic: fhir-address-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.961Z
estimatedTokens: 327
keywords: [FHIR, Address, Input, representation]
---

# FHIR Address Input

> Input representation for the Address FHIR object.

# FHIR Address Input

Input representation for the Address FHIR object.

The Address FHIR object maps to the [ContactPointAddress](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Address.htm "The Address FHIR resource maps to the Contact​Point​Address​ object in Salesforce.") object in Salesforce.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value Input[] | Adds additional information to any fields not mapped in this API. | Optional | 53.0 |
| city | String | The city of the address. | Optional | 53.0 |
| country | String | The country of the address. | Optional | 53.0 |
| line | String | The street of the address. | Optional | 53.0 |
| periodEnd | String | The date until when the address is active. | Optional | 53.0 |
| periodStart | String | The date from when the address is active. | Optional | 53.0 |
| postalCode | String | The postal code for the address. | Optional | 53.0 |
| state | String | The state or province of the address. | Optional | 53.0 |
| type | String | The type of address. For example, postal and physical. | Optional | 53.0 |
| use | String | The usage type of the address. | Optional | 53.0 |

## Code Examples

```
{
   "address": [ {
      "use": "temp",
      "type": "postal",
      "city": "San Francisco",
      "state": "California",
      "country": "U.S",
      "postalCode": "12345",
      "line": "Salesforce",
      "periodStart": "1999-11-09T15:40:30.000Z",
      "periodEnd": "20202-01-02T15:40:30.000Z"
   } ]
}
```

## Related Topics

- ContactPointAddress (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_Address.htm)
- Custom Field Value Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_custom_field_value.htm)
