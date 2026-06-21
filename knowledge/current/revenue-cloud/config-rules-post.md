---
title: "Config Rules (POST)"
domain: revenue-cloud
topic: config-rules-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-06-21T00:39:50.911Z
estimatedTokens: 256
keywords: [Config, POST, Run, specific, quote, order, context, transaction]
---

> Run rules for a specific quote or order based on a context ID or
      transaction ID.

# Config Rules (POST)

Run rules for a specific quote or order based on a context ID or transaction ID.

Resource

```

```

Resource example

```

```

Available version

67.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ruleOptions | Config Rule Options Input[] | Details of the options to run specific steps in rules. | Optional | 67.0 |
| transactionContextId | String | ID of the sales transaction context instance. | Required if the transactionId property isn’t specified. | 67.0 |
| transactionId | String | ID of the quote or order. | Required if the transactionContextId property isn’t specified. | 67.0 |

Response body for POST

[Configuration Rule Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_config_rule_output.htm "Output representation of the details of the configuration rule response.")

## Code Examples

```
/revenue/product-configurator/rules/actions/execute
```

```
https://yourInstance.salesforce.com/services/data/v67.0/revenue/product-configurator/rules/actions/execute
```

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
- Configuration Rule Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_config_rule_output.htm)
