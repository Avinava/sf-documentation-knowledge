---
title: "Configuration Options Input"
domain: revenue-cloud
topic: configuration-options-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.810Z
estimatedTokens: 220
keywords: [Configuration, Options, Input, representation]
---

# Configuration Options Input

> Input representation for the configuration options.

# Configuration Options Input

Input representation for the configuration options.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addDefault​Configuration | Boolean | Indicates whether to automatically add default configurations to the order (true) or not (false). | Optional | 60.0 |
| execute​Configuration​Rules | Boolean | Indicates whether the order must adhere to configuration rules during processing (true) or bypass them (false). | Optional | 60.0 |
| validate​Amend​Renew​Cancel | Boolean | Indicates whether to run validations related to amend, renew, or cancel processes (true) or not (false). | Optional | 60.0 |
| validate​Product​Catalog | Boolean | Indicates whether the order must be validated against the product catalog (true) or not (false). | Optional | 60.0 |

## Code Examples

```
{
  "configurationOptions": {
    "validateProductCatalog": true,
    "validateAmendRenewCancel": true,
    "executeConfigurationRules": true,
    "addDefaultConfiguration": true
  }
}
```
