---
title: "Pricing Simulation Input Variables With Data (GET)"
domain: revenue-cloud
topic: pricing-simulation-input-variables-with-data-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.682Z
estimatedTokens: 264
keywords: [Pricing, Simulation, Input, Variables, Data, along, associated]
---

# Pricing Simulation Input Variables With Data (GET)

> Get details of the pricing simulation input variables along with
      associated data.

# Pricing Simulation Input Variables With Data (GET)

Get details of the pricing simulation input variables along with associated data.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| context​DefinitionId | String | ID or developer name of the context definition. | Required | 64.0 |
| contextMapping​Id | String | ID or name of the context mapping that's used. | Required | 64.0 |
| entityId | String | ID of a quote or an order. | Required | 64.0 |
| expressionSet​VersionId | String | ID of the expression set that starts with 9QM. | Required | 64.0 |

Response body for GET

[Pricing Simulation Input Variables With Data](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_simulation_input_variables_with_data_output.htm "Output representation of the pricing simulation variables with data.")

## Code Examples

```
/connect/core-pricing/simulationInputVariablesWithData
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/core-pricing/simulationInputVariablesWithData?expressionSetVersionId=9QMxx0000004CDsGAM&entityId=0Q0xx0000004C92CAE&contextDefinitionId=SalesTransactionContext__stdctx&contextMappingId=QuoteEntitiesMapping
```

## Related Topics

- Pricing Simulation
              Input Variables With Data (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_simulation_input_variables_with_data_output.htm)
