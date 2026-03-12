---
title: "Configurator Preference Input"
domain: revenue-cloud
topic: configurator-preference-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:05.925Z
estimatedTokens: 207
keywords: [Configurator, Preference, Input, representation, configuration, preference, place, sales, transaction, request.]
---

# Configurator Preference Input

> Input representation of the configuration preference for the place sales transaction
    request.

# Configurator Preference Input

Input representation of the configuration preference for the place sales transaction request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| configuration​Method | String | Configuration method for the place sales transaction request. Valid values are:Force—Specifies to enforce the predefined configuration process during the sales transaction process.Skip—Specifies to skip the configuration process during the quote creation process.System—Specifies the system to determine whether the configuration process is required.The default value is Skip. | Optional | 63.0 |
| configuration​Options | Configuration Options Input | Configuration options during the ingestion process. | Optional | 63.0 |

## Code Examples

```
{
  "configurationPref": {
    "configurationMethod": "Skip",
    "configurationOptions": {
      "validateProductCatalog": true,
      "validateAmendRenewCancel": true,
      "executeConfigurationRules": true,
      "addDefaultConfiguration": true
    }
  }
}
```

## Related Topics

- Configuration Options
                        Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configuration_options_input.htm)
