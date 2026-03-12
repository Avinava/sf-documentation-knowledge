---
title: "Ship to Address Input"
domain: chatterapi
topic: ship-to-address-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.842Z
estimatedTokens: 145
keywords: [Ship, Address, Input]
---

# Ship to Address Input

> Ship to address input.

# Ship to Address Input

Ship to address input.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| countryIsoCode | String | ISO code of the country. Must match one of the valid ISO codes defined within the org’s State-Country picklist. If unspecified, the default value is the default country for the webstore. | Required | 58.0 |
| stateIsoCode | String | ISO code of the state. Must match one of the valid ISO codes defined within the org’s State-Country picklist. | Required | 58.0 |

## Code Examples

```
{
  "countryIsoCode": "US",
  "stateIsoCode": "CA"
}
```
