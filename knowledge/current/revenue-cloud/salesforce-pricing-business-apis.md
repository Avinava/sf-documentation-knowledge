---
title: "Salesforce Pricing Business APIs"
domain: revenue-cloud
topic: salesforce-pricing-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.325Z
estimatedTokens: 1169
keywords: [Salesforce, Pricing, Business, APIs, Perform, context, instance, sync, data, manage, recipes, waterfall]
---

# Salesforce Pricing Business APIs

> Perform pricing request, create context instance, sync pricing data, and manage pricing
    recipes and pricing waterfall details by using Salesforce Pricing Business APIs.

# Salesforce Pricing Business APIs

Perform pricing request, create context instance, sync pricing data, and manage pricing recipes and pricing waterfall details by using Salesforce Pricing Business APIs.

This table lists the available Salesforce Pricing resources.

| Resource | Description |
| --- | --- |
| /connect/core-pricing/price-contexts/contextid (POST) | Perform a pricing request by using the instance ID of a context. |
| /connect/core-pricing/pricing (POST) | Create and hydrate context instance in a single request. Provide a comprehensive response that contains final pricing details per line items and related errors, if any. |
| /connect/core-pricing/sync/pricingSyncOrigin (GET) | Sync pricing data to ensure that the lookup tables contain the latest pricing data. |
| /connect/core-pricing/recipe (GET) | Get the mapping details of pricing recipes to the associated pricing recipe table. |
| /connect/core-pricing/recipe/mapping (POST) | Create a mapping between the pricing recipe and the Decision Tables. Post recipes with lookup tables or procedures. |
| /connect/core-pricing/versioned-revise-details (POST) | Create revisions of a pricing request with versions for adjustment entities. |
| /connect/core-pricing/waterfall/lineItemId/executionId (GET) | Get the persisted price waterfall that stores the process logs. Price waterfall provides insights into every step of the pricing process. |
| /connect/core-pricing/waterfall (POST) | Create a log of price waterfall. Price waterfall provides insights into every step of the pricing process. |
| /connect/core-pricing/pbeDerivedPricingSourceProduct (POST) | Get the source product for the Price Book Entry (PBE) derived pricing. |
| /connect/core-pricing/apiexecutionlogs/executionId (GET) | Get the log details of a pricing API execution record by using the execution ID. |
| /connect/core-pricing/pricing-process-execution/executionId (GET) | Get the execution details of a pricing process by using the execution ID. |
| /connect/core-pricing/pricing-process-execution/lineitems/executionId/executionType (GET) | Get the pricing execution details for the line items of a pricing process by using the execution ID and execution type. |
| /connect/core-pricing/simulationInputVariablesWithData (GET) | Get details of the pricing simulation input variables along with associated data. |

This section lists the available Procedure Plan Definition-related resources. Use procedure plan definitions to define criteria for all pricing process-related requirements in one central location, and to set up the procedures based on these requirements.

| Resource | Description |
| --- | --- |
| /connect/procedure-plan-definitions (GET, POST) | Get the records of procedure plan definitions. Additionally, create a record of a procedure plan definition. |
| /connect/procedure-plan-definitions/procedurePlanDefinitionId (GET, PATCH, DELETE) | Get, update, or delete a procedure plan definition record by using the record ID. |
| /connect/procedure-plan-definitions/evaluate (POST) | Evaluate a procedure plan definition based on a primary object to check for prerequisites such as usage type and context mapping details. |
| /connect/procedure-plan-definitions/evaluate/procedurePlanDefinitionName (POST) | Evaluate a procedure plan definition based on the name of a definition to check for prerequisites such as usage type and context mapping details. |
| /connect/procedure-plan-definitions/procedurePlanDefinitionId/version (POST) | Create records of a procedure plan version with details. |
| /connect/procedure-plan-definitions/versions/procedurePlanVersionId (GET, PATCH, DELETE) | Get, update, or delete a procedure plan definition version record by using the record ID. |

-   **[Resources](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/pricing_business_apis_rest_references.htm)**
    Learn more about the available Salesforce Pricing resources.
-   **[Request Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/pricing_api_requests.htm)**
    Learn more about the available Salesforce Pricing API request bodies.
-   **[Response Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/pricing_api_responses.htm)**
    Learn more about the available Salesforce Pricing API response bodies.

#### See Also

-   [*Connect REST API Developer Guide*: Introduction](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm "Connect REST API Developer Guide: Introduction - HTML (New Window)")

## Related Topics

- /connect/core-pricing/price-contexts/contextid (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_price_context.htm)
- /connect/core-pricing/pricing (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_headless.htm)
- /connect/core-pricing/sync/pricingSyncOrigin (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_pricing_data_sync.htm)
- /connect/core-pricing/recipe (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_pricing_recipe.htm)
- /connect/core-pricing/recipe/mapping (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_price_recipe_mapping.htm)
- /connect/core-pricing/versioned-revise-details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_versioned_revise_details.htm)
- /connect/core-pricing/waterfall/lineItemId/executionId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_pricing_waterfall_fetch.htm)
- /connect/core-pricing/waterfall (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_pricing_waterfall_post.htm)
- /connect/core-pricing/pbeDerivedPricingSourceProduct (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_pbe_source_pricing_derived_product.htm)
- /connect/core-pricing/apiexecutionlogs/executionId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_execution_logs.htm)
