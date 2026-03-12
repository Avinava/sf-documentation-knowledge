---
title: "Insurance Quote Config Options"
domain: insurance-developer-guide
topic: insurance-quote-config-options
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.759Z
estimatedTokens: 233
keywords: [Insurance, Quote, Config, Options, Input, representation, line, item, objects]
---

# Insurance Quote Config Options

> Input representation of insurance quote line item related objects.

# Insurance Quote Config Options

Input representation of insurance quote line item related objects.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| executeConfigurationRules | Boolean | Indicates whether to run product configuration rules as part of insurance quote (true) or not (false). | Optional | 63.0 |
| executePricing | Boolean | Indicates whether to execute NGP Pricing as part of insurance quote (true) or not (false).This parameter is always set to false for Group Benefits rating. | Optional | 63.0 |
| executeQualificationRules | Boolean | Indicates whether to execute qualification rules as part of insurance quote (true) or not (false). | Optional | 63.0 |
| validateProductCatalog | Boolean | Indicates whether to execute product catalog validation as part of insurance quote (true) or not (false). | Optional | 63.0 |

## Code Examples

```
"configOptions": {
    "executePricing": false,
    "validateProductCatalog": false,
    "executeConfigurationRules": false,
    "executeQualificationRules": false
  }
```
