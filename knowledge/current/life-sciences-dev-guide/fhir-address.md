---
title: "FHIR Address"
domain: life-sciences-dev-guide
topic: fhir-address
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.794Z
estimatedTokens: 322
keywords: [FHIR, Address, output, representation]
---

# FHIR Address

> The output representation of the FHIR address values.

# FHIR Address

The output representation of the FHIR address values.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value[] | The data stored in any custom fields as specified in the input request. | Small, 53.0 | 53.0 |
| city | String | The city of the address. | Small, 53.0 | 53.0 |
| country | String | The country of the address. | Small, 53.0 | 53.0 |
| line | String | The street of the address. | Small, 53.0 | 53.0 |
| message | String | A message with any errors that can encounter while processing the request. | Small, 53.0 | 53.0 |
| periodEnd | String | The date until when the address is active. | Small, 53.0 | 53.0 |
| periodStart | String | The date from when the address is active. | Small, 53.0 | 53.0 |
| postalCode | String | The postal code for the address. | Small, 53.0 | 53.0 |
| salesforceId | String | The Salesforce ID of the address record that’s created in Salesforce. | Small, 53.0 | 53.0 |
| state | String | The state or province of the address. | Small, 53.0 | 53.0 |
| type | String | The type of the address. For example, physical and postal. | Small, 53.0 | 53.0 |
| use | String | The usage type of the address. | Small, 53.0 | 53.0 |

## Related Topics

- Custom Field Value (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_custom_field_value_output.htm)
