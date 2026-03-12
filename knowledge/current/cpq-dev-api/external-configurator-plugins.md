---
title: "External Configurator Plugins"
domain: cpq-dev-api
topic: external-configurator-plugins
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.787Z
estimatedTokens: 468
keywords: [External, Configurator, Plugins, Enable, sales, reps, quotes, incorporate, product's, unique, attributes, bundle, configuration, CPQ, replaces]
---

# External Configurator Plugins

> Enable sales reps to create quotes that incorporate your product's unique attributes,
  bundle configuration, and other information. A CPQ external configurator replaces the CPQ product
  configurator for the specified products, while still allowing you to use other Salesforce CPQ
  features such as price calculations and product rules.

# External Configurator Plugins

Enable sales reps to create quotes that incorporate your product's unique attributes, bundle configuration, and other information. A CPQ external configurator replaces the CPQ product configurator for the specified products, while still allowing you to use other Salesforce CPQ features such as price calculations and product rules.

| Available in: Salesforce CPQ Winter ’16 and later |
| --- |


You can develop your configurator in a Visualforce page or host it in an external web application. Salesforce sends the product information payload to your external configurator, where you can create and modify its attributes, configure bundles, and perform other tasks specific to your organization’s needs. Then, you send the updated payload back to Salesforce CPQ so it can build a quote line for the product with the attributes you’ve configured. If the sales rep reconfigures the product, the payload is sent back to your custom configurator.

-   **[Set Up an External Configurator to Launch from a Custom Action](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_external_ca_setup.htm)**
    Create a custom action that launches a non-Salesforce CPQ configurator.
-   **[Create an External Configurator](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_setup_web_app.htm)**
    Host your configurator in Salesforce using Visualforce pages, or in an external web application such as Heroku. Use the easyXDM library to transfer data between your configurator and Salesforce CPQ.
-   **[Configure Salesforce CPQ to Use the External Configurator](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_setup_auto_external_config.htm)**
    Configure the Salesforce CPQ package to launch your custom configurator from the quote line editor. Indicate which products are configured externally by setting the product’s **Externally Configurable** field to true.

## Related Topics

- Set Up an External Configurator to Launch from a Custom Action (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_external_ca_setup.htm)
- Create an External Configurator (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_setup_web_app.htm)
- Configure Salesforce CPQ to Use the External Configurator (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_setup_auto_external_config.htm)
