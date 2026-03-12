---
title: "CPQ Configuration API"
domain: cpq-dev-api
topic: cpq-configuration-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.618Z
estimatedTokens: 310
keywords: [CPQ, Configuration, API, Salesforce, configure, price, product, bundles]
---

# CPQ Configuration API

> Use the Salesforce CPQ Configuration API to configure and price product
  bundles.

# CPQ Configuration API

Use the Salesforce CPQ Configuration API to configure and price product bundles.

| Available in: Salesforce CPQ Spring’17 and later |
| --- |


-   **[Configuration Loader API](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_config_loader.htm)**
    The Configuration Loader API returns all the data for the product, including its product options and configuration model. When configuring a nested bundle, set the parentProductproperty to the parent product to inherit configuration attributes on the nested bundle.
-   **[Configuration Load Rule Executor API](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_config_loadruleexecutor.htm)**
    The Configuration Load Rule Executor API invokes all the load event product rules for the specified product. When configuring a nested bundle, set the parentProduct property to the parent product to inherit configuration attributes on the nested bundle.
-   **[Configuration Validator API](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_config_validator.htm)**
    The Configuration Validator API runs selection, validation, and alert product rules and configurator-scoped price rules against the input configuration model and returns an updated configuration model.

## Related Topics

- Configuration Loader API (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_config_loader.htm)
- Configuration Load Rule Executor API (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_config_loadruleexecutor.htm)
- Configuration Validator API (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_config_validator.htm)
