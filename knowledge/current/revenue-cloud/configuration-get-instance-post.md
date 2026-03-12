---
title: "Configuration Get Instance (POST)"
domain: revenue-cloud
topic: configuration-get-instance-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.667Z
estimatedTokens: 236
keywords: [Configuration, Instance, POST, Fetch, JSON, representation, product, display, Salesforce, user, save, external, system]
---

# Configuration Get Instance (POST)

> Fetch the JSON representation of a product configuration. Use the
      response to display the details of the product configuration instance on the Salesforce user
      interface, or save the product configuration instance to an external system.

# Configuration Get Instance (POST)

Fetch the JSON representation of a product configuration. Use the response to display the details of the product configuration instance on the Salesforce user interface, or save the product configuration instance to an external system.

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
| contextId | String | Transaction context ID of the product configuration instance that’s to be fetched. | Required | 60.0 |

Response body for POST

[Configuration Get Instance](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_get_configuration_instance_output.htm "Output representation of the request to retrieve the configuration instance.")

## Code Examples

```
/connect/cpq/configurator/actions/get-instance
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/cpq/configurator/actions/get-instance
```

```
{
"contextId": "008d27d7-e004-4906-a949-ee7d7c323c77"
}
```

## Related Topics

- Configuration Get
              Instance (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_get_configuration_instance_output.htm)
