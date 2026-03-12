---
title: "Configuration Load Instance (POST)"
domain: revenue-cloud
topic: configuration-load-instance-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.765Z
estimatedTokens: 329
keywords: [Configuration, Load, Instance, POST, session, product, transaction, includes, results, actions, rules, qualification, pricing, management]
---

# Configuration Load Instance (POST)

> Create a session for the product configuration instance using the
      transaction ID. Get the session ID that includes the results of actions, such as configuration
      rules, qualification rules, and pricing management.

# Configuration Load Instance (POST)

Create a session for the product configuration instance using the transaction ID. Get the session ID that includes the results of actions, such as configuration rules, qualification rules, and pricing management.

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
| configurator​Options | Configurator Options Input | List of the configurator options to execute. | Optional | 60.0 |
| context​Mapping​Id | String | ID of the context mapping record. | Optional | 60.0 |
| qualification​Context | User Context Input | Context details that are used for the qualification rules. | Optional | 60.0 |
| transaction​Id | String | Transaction ID of the header entity that’s used to create a session. For example, a Quote or an Order. | Required | 60.0 |

Response body for POST

[Configuration Load Instance](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_load_configuration_instance_output.htm "Output representation of the details of the context or session that are returned with a load configuration request.")

## Code Examples

```
/connect/cpq/configurator/actions/load-instance
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/cpq/configurator/actions/load-instance
```

```
{
    "configuratorOptions": 
      {
        "addDefaultConfiguration": true,
        "executeConfigurationRules": true,
        "executePricing": true,
        "qualifyAllProductsInTransaction": true,
        "validateAmendRenewCancel": true,
        "validateProductCatalog": true
    },
    "qualificationContext": {
        "accountId": "001DU000001nHUGYA2"
    },
    "transactionId": "0Q0DU0000000XoN0AU"
}
```

## Related Topics

- Configurator Options
                                                Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_options_input.htm)
- User
                                                Context Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_user_context_input.htm)
- Configuration Load
              Instance (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_load_configuration_instance_output.htm)
