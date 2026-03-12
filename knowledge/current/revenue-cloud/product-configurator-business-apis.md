---
title: "Product Configurator Business APIs"
domain: revenue-cloud
topic: product-configurator-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:09.034Z
estimatedTokens: 876
keywords: [Product, Configurator, Business, APIs, customize, product, service, according, business-specific, requirements.]
---

# Product Configurator Business APIs

> Use the Product Configurator Business APIs to customize a product or a service
    according to your business-specific requirements.

# Product Configurator Business APIs

Use the Product Configurator Business APIs to customize a product or a service according to your business-specific requirements.

Perform product configuration-related operations by using the Product Configurator Business APIs. Integrate these APIs with any front-end application to access the configurator capabilities.

This table lists the available Product Configurator resources.

| Resource | Description |
| --- | --- |
| /connect/cpq/configurator/actions/configure (POST) | Retrieve and update a product’s configuration from a configurator. Execute configuration rules and notify users of any violations for changes to product bundle, attributes, or product quantity within a bundle. Additionally, get pricing details for the configured bundle. |
| /connect/cpq/configurator/actions/load-instance (POST) | Create a session for the product configuration instance using the transaction ID. Get the session ID that includes the results of actions, such as configuration rules, qualification rules, and pricing management. |
| /connect/cpq/configurator/actions/set-instance (POST) | Set a product configuration instance. This API is used in scenarios where the configuration instance is available in a different database than Salesforce and the product catalog management data is in Salesforce. |
| /connect/cpq/configurator/actions/get-instance (POST) | Fetch the JSON representation of a product configuration. Use the response to display the details of the product configuration instance on the Salesforce user interface, or save the product configuration instance to an external system. |
| /connect/cpq/configurator/actions/save-instance (POST) | Save a configuration instance after a successful product configuration. |
| /connect/cpq/configurator/actions/set-product-quantity (POST) | Set the quantity of a product through the runtime system. |
| /connect/cpq/configurator/actions/add-nodes (POST) | Add a node to the context through the runtime system without using the Salesforce user interface. |
| /connect/cpq/configurator/actions/update-nodes (POST) | Update nodes in a product configuration. |
| /connect/cpq/configurator/actions/delete-nodes (POST) | Delete nodes from a product configuration. |

-   **[Resources](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/product_configurator_business_apis_resources.htm)**
    Learn more about the available Product Configurator API resources.
-   **[Request Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/product_configurator_business_apis_requests.htm)**
    Learn more about the available Product Configurator API request bodies.
-   **[Response Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/product_configurator_business_apis_responses.htm)**
    Learn more about the available Product Configurator API response bodies.

#### See Also

-   [*Connect REST API Developer Guide*: Introduction](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm "Connect REST API Developer Guide: Introduction - HTML (New Window)")

-   [*Salesforce Help*: Product Configurator Permissions](https://help.salesforce.com/s/articleView?id=ind.product_configurator_product_configurator_permissions.htm&type=5&language=en_US "Salesforce Help: Product Configurator Permissions - HTML (New Window)")

## Related Topics

- /connect/cpq/configurator/actions/configure (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_product_configurator_configure.htm)
- /connect/cpq/configurator/actions/load-instance (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_load_configurator_instance.htm)
- /connect/cpq/configurator/actions/set-instance (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_set_configurator_instance.htm)
- /connect/cpq/configurator/actions/get-instance (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_get_configurator_instance.htm)
- /connect/cpq/configurator/actions/save-instance (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_save_configuration_instance.htm)
- /connect/cpq/configurator/actions/set-product-quantity (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_set_product_quantity.htm)
- /connect/cpq/configurator/actions/add-nodes (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_add_nodes.htm)
- /connect/cpq/configurator/actions/update-nodes (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_update_nodes.htm)
- /connect/cpq/configurator/actions/delete-nodes (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_delete_nodes.htm)
- Resources (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/product_configurator_business_apis_resources.htm)
