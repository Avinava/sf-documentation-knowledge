---
title: "Provider Search"
domain: life-sciences-dev-guide
topic: provider-search
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.549Z
estimatedTokens: 289
keywords: [Provider, Search, Healthcare, providers, accounts, free-text, input, either, internal, Salesforce, data, external, system, API, account]
---

# Provider Search

> Search for Healthcare providers and accounts based on a free-text input, either from
        internal Salesforce data or an external system. This API returns account information,
        including healthcare providers and matching contact point addresses.

# Provider Search

Search for Healthcare providers and accounts based on a free-text input, either from internal Salesforce data or an external system. This API returns account information, including healthcare providers and matching contact point addresses.

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
| external​Search | Boolean | Indicates whether to perform the search on an external system (true) or not (false. By default, this value is set to false and an internal search is performed. | Optional |

Request body for POST

```

```

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| search​Input | String | Free-text input to search for accounts. | Required |
| country​Codes | List<String> | List of country codes to restrict the search to. | Required |

Response body for POST

[Provider Search Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_provider_search.htm "Output representation for provider search request.")

## Code Examples

```
/connect/life-sciences/commercial/provider-search
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/provider-search?externalSearch=true
```

```
{
  "searchInput": "Acme.Corp Dermatology",
  "countryCodes": [
    "US",
    "IN"
  ]
}
```

## Related Topics

- Provider
                            Search Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_provider_search.htm)
