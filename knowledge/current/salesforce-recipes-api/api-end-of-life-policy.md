---
title: "API End-of-Life Policy"
domain: salesforce-recipes-api
topic: api-end-of-life-policy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.049Z
estimatedTokens: 294
keywords: [API, End-of-Life, Policy, Salesforce, committed, supporting, version, minimum, three, years, date, release, order, mature, improve]
---

# API End-of-Life Policy

> Salesforce is committed to supporting each API version for a minimum of three years from
  the date of first release. In order to mature and improve the quality and performance of the API,
  versions that are more than three years old might cease to be supported.

# API End-of-Life Policy

Salesforce is committed to supporting each API version for a minimum of three years from the date of first release. In order to mature and improve the quality and performance of the API, versions that are more than three years old might cease to be supported.

When an API version is to be deprecated, advance notice is given at least one year before support ends. Salesforce will directly notify customers using API versions planned for deprecation.

| Salesforce API Versions | Version Support Status | Version Retirement Info |
| --- | --- | --- |
| Versions 31.0 through 66.0 | Supported. |  |
| Versions 21.0 through 30.0 | As of Summer ’25, these versions are retired and unavailable. | Salesforce Platform API Versions 21.0 through 30.0 Retirement |
| Versions 7.0 through 20.0 | As of Summer ’22, these versions are retired and unavailable. | Salesforce Platform API Versions 7.0 through 20.0 Retirement |

If you request any resource or use an operation from a retired API version, REST API returns 410:GONE error code.

To identify requests made from old or unsupported API versions of REST API, access the free API Total Usage event type.
