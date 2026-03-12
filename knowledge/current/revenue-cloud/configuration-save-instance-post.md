---
title: "Configuration Save Instance (POST)"
domain: revenue-cloud
topic: configuration-save-instance-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:07.181Z
estimatedTokens: 254
keywords: [Configuration, Save, Instance, POST, configuration, instance, after, successful, product, configuration.]
---

# Configuration Save Instance (POST)

> Save a configuration instance after a successful product
      configuration.

# Configuration Save Instance (POST)

Save a configuration instance after a successful product configuration.

Use the Configuration Save Instance API to save the changes to the source after a successful configuration. For example, save changes to the quote line item of a product, which is the source used to load the configuration.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | Transaction context ID of the product configuration instance that’s to be saved. | Required | 60.0 |

Response body for POST

[Configuration Save Instance](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_save_configuration_instance_output.htm "Output representation of the response that’s returned with a save configuration request.")

## Code Examples

```
/connect/cpq/configurator/actions/save-instance
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/cpq/configurator/actions/save-instance
```

```
{
"contextId": "008d27d7-e004-4906-a949-ee7d7c323c77"
}
```

## Related Topics

- Configuration Save
              Instance (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_save_configuration_instance_output.htm)
