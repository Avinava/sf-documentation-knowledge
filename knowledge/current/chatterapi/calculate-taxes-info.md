---
title: "Calculate Taxes Info"
domain: chatterapi
topic: calculate-taxes-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.434Z
estimatedTokens: 325
keywords: [Calculate, Taxes, Info, calculated, tax, output]
---

# Calculate Taxes Info

> List of calculated tax output.

# Calculate Taxes Info

List of calculated tax output.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| taxLineAmount | String | Represents tax for particular country or state if present. | Small, 58.0 | 58.0 |
| taxRate​Percentage | String | Tax rate percentage for the store. | Small, 56.0 | 56.0 |
| taxTreatment​Description | String | Description of the tax treatment for the store. | Small, 56.0 | 56.0 |
| taxTreatmentName | String | Name of the tax treatment for the store. | Small, 56.0 | 56.0 |
| countryIsoCode | String | ISO code of the country. Must match one of the valid ISO codes defined within the org’s State-Country picklist. If unspecified, the default value is the default country for the webstore. | Small, 57.0 | 57.0 |
| stateIsoCode | String | ISO code of the state. Must match one of the valid ISO codes defined within the org’s State-Country picklist. If unspecified, the default value is the default country for the webstore. | Small, 57.0 | 57.0 |
| priority | Integer | Priority of the tax treatment. Indicates the priority order for tax calculation when there are both country and state level tax treatments present. Taxes are calculated in the decreasing order of priority. | Small, 57.0 | 57.0 |
