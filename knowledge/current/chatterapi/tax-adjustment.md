---
title: "Tax Adjustment"
domain: chatterapi
topic: tax-adjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.319Z
estimatedTokens: 254
keywords: [Tax, Adjustment, adjustments]
---

# Tax Adjustment

> List of tax adjustments.

# Tax Adjustment

List of tax adjustments.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustmentTaxAmount | String | Adjustment tax amount. | Small, 58.0 | 58.0 |
| countryIsoCode | String | ISO code of the country. Must match one of the valid ISO codes defined within the org’s State-Country picklist. If unspecified, the default value is the default country for the webstore. | Small, 58.0 | 58.0 |
| id | String | Adjustment ID. | Small, 58.0 | 58.0 |
| stateIsoCode | String | ISO code of the state. Must match one of the valid ISO codes defined within the org’s State-Country picklist. If unspecified, the default value is the default country for the webstore. | Small, 58.0 | 58.0 |
| taxRatePercentage | String | Tax rate percentage for the store. | Small, 58.0 | 58.0 |
| type | String | Type of tax adjustment. Values are:Promotional – Promotional type tax adjustment.Tiered – Tiered type tax adjustment. | Small, 58.0 | 58.0 |
