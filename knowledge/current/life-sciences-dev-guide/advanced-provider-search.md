---
title: "Advanced Provider Search"
domain: life-sciences-dev-guide
topic: advanced-provider-search
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.467Z
estimatedTokens: 453
keywords: [Advanced, Provider, Search, Facilitate, three, distinct, account, searches, Healthcare, HCP, Organization, HCO, license-based, API, processes]
---

# Advanced Provider Search

> Facilitate three distinct types of account searches: Healthcare Provider (HCP),
        Healthcare Organization (HCO), and license-based searches. For HCP and HCO searches, the API
        processes fields from the account, healthcare provider, and contact point address
        entities.The license-based searches use fields from the business license entity.

# Advanced Provider Search

Facilitate three distinct types of account searches: Healthcare Provider (HCP), Healthcare Organization (HCO), and license-based searches. For HCP and HCO searches, the API processes fields from the account, healthcare provider, and contact point address entities.The license-based searches use fields from the business license entity.

Resource

```

```

Resource Example

```

```

Available version

65.0

HTTP methods

POST

Query parameters for POST

| Parameter Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| external​Search | Boolean | Indicates whether to perform the search on an external system (true) or not (false. By default, this value is set to false and an internal search is performed. This is a URL parameter, not part of the input representation. | Optional |

Request body for POST

```

```

| Property Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| account | List<String> | List of account fields and their corresponding search values. At least one field from either account or healthcare provider must be populated. | Optional |
| business​License | List<String> | List of business license fields and their corresponding search values. | Optional |
| contact​Point​Address | List<String> | List of contact point address fields and their corresponding search values. | Optional |
| health​care​Provider | List<String> | List of healthcare provider fields and their corresponding search values. At least one field from either account or healthcare provider must be populated. | Optional |

Response body for POST

[Provider Search Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_provider_search.htm "Output representation for provider search request.")

## Code Examples

```
/connect/life-sciences/commercial/advanced-provider-search
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/advanced-provider-search?externalSearch=true
```

```
{
  "account": [
    {
      "field": "Name",
      "value": "Robert"
    },
    {
      "field": "AccountNumber",
      "value": "123456"
    }
  ],
  "healthcareProvider": [
    {
      "field": "Specialties",
      "value": "Robert"
    },
    {
      "field": "PhoneticName",
      "value": "Robrt"
    }
  ],
  "contactPointAddress": [
    {
      "field": "IsPrimary",
      "value": "false"
    },
    {
      "field": "CountryCode",
"value": "US"
    }
  ],
  "businessLicense": [
    {
      "field": "ComplianceScope",
      "value": "Address"
    },
    {
      "field": "LicenseNumber",
      "value": "123456"
    }
  ]
}
```

## Related Topics

- Provider
                            Search Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_provider_search.htm)
