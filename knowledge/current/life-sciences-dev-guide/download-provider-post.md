---
title: "Download Provider (POST)"
domain: life-sciences-dev-guide
topic: download-provider-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.544Z
estimatedTokens: 272
keywords: [Download, Provider, POST, Health, Care, data, external, system, Salesforce, org, search, performed]
---

# Download Provider (POST)

> Download Health Care provider data from an external system to a Salesforce org after a
    search is performed.

# Download Provider (POST)

Download Health Care provider data from an external system to a Salesforce org after a search is performed.

Resource

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

Properties

| Property Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| country​Code | String | The country code where the search was performed. | Required | 66.0 |
| data​source | String | The external data source, such as One Key. | Optional | 66.0 |
| entity​Type | String | The type of entity, such as individual or workplace. | Required | 66.0 |
| external​Id | String | The unique external ID from the search response. | Required | 66.0 |
| in​Contract | Boolean | Indicates whether the record is currently in contract. | Optional | 66.0 |

Response body for POST

[Download Provider Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_download_provider_output.htm "The response representation containing the status of the provider download request and the resulting data.")

## Code Examples

```
/connect/life-sciences/commercial/download-provider
```

## Related Topics

- Download Provider Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_download_provider_output.htm)
