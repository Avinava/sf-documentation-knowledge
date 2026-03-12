---
title: "Provider Search Criteria Input"
domain: health-cloud-object-reference
topic: provider-search-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.136Z
estimatedTokens: 371
keywords: [Provider, Search, Criteria, Input, healthcare, providers]
---

# Provider Search Criteria Input

> Criteria used to search for healthcare providers.

# Provider Search Criteria Input

Criteria used to search for healthcare providers.

JSON Example

```

```

Properties

| Property Name | Type | Description | Required |
| --- | --- | --- | --- |
| providerName | String | The name of the healthcare provider. | Optional |
| specialties | Array of Strings | A list of the provider's medical specialties. | Optional |
| subSpecialties | Array of Strings | A list of the provider's medical sub-specialties. | Optional |
| planTypes | Array of Strings | The type of insurance plan accepted by the provider. | Optional |
| acceptingNewPatients | Boolean | Indicates whether the provider is currently accepting new patients. | Optional |
| languagesSpoken | Array of Strings | A list of languages the provider can speak. | Optional |
| providerGender | String | The gender of the healthcare provider. | Optional |
| licenseJurisdictionState | String | The state where the provider's license is registered. | Optional |
| licenseJurisdictionCountry | String | The country where the provider's license is registered. | Optional |
| licenseJurisdictionRegion | String | The region where the provider's license is registered. | Optional |
| nationalProviderIdentifier | String | The provider's National Provider Identifier (NPI). | Optional |
| providerType | String | The type of healthcare provider (e.g., MD, DO, NP). | Optional |
| additionalSearchCriteria | Object | Any additional key-value pairs for specific search fields. | Optional |

## Code Examples

```
{
  "providerSearchCriteria": {
    "providerName": "Jane Doe",
    "specialties": [
      "Pediatrics"
    ],
    "subSpecialties": [
      "Neonatology"
    ],
    "planTypes": [
      "HMO",
      "PPO"
    ],
    "acceptingNewPatients": true,
    "languagesSpoken": [
      "Spanish"
    ],
    "providerGender": "Female",
    "licenseJurisdictionState": "CA",
    "nationalProviderIdentifier": "1234567890",
    "providerType": "MD"
  }
}
```
