---
title: "Configuration Rule Input"
domain: revenue-cloud
topic: configuration-rule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:37.440Z
estimatedTokens: 222
keywords: [Configuration, Rule]
---

> Input representation of the details of a configuration rule.

# Configuration Rule Input

Input representation of the details of a configuration rule.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ruleOptions | Config Rule Options Input[] | Details of the options to run specific steps in rules. | Optional | 67.0 |
| transactionContextId | String | ID of the sales transaction context instance. | Required if the transactionId property isn’t specified. | 67.0 |
| transactionId | String | ID of the quote or order. | Required if the transactionContextId property isn’t specified. | 67.0 |

-   **[Configuration Rule Options Input](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_config_rule_options_input.htm)**
    Input representation of the details of the configuration rule options.

## Code Examples

```
{
  "transactionContextId": "008d27d7-e004-4906-a949-ee7d7c323c77",
  "transactionId": "0Q0DU0000005tJh0AI",
  "ruleOptions": {
    "isUpdateContextRequired": false
  }
}
```

## Related Topics

- Config Rule Options Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_config_rule_options_input.htm)
- Configuration Rule Options Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_config_rule_options_input.htm)
