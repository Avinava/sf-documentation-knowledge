---
title: "Pricing Simulation Input Variables With Data"
domain: revenue-cloud
topic: pricing-simulation-input-variables-with-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:08.093Z
estimatedTokens: 174
keywords: [Pricing, Simulation, Input, Variables, Data, Output, representation, pricing, simulation, variables, data.]
---

# Pricing Simulation Input Variables With Data

> Output representation of the pricing simulation variables with data.

# Pricing Simulation Input Variables With Data

Output representation of the pricing simulation variables with data.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | String | Returns the cause of error, if any. For a successful request, this API returns an empty string. | Small, 64.0 | 64.0 |
| simulationInput​JsonWith​Data | String | Resultant simulation input variables with quote or order data such as ID, which was specified in the query parameters. | Small, 64.0 | 64.0 |
| success | Boolean | Indicates whether the request was successful (true) or not (false). | Small, 64.0 | 64.0 |

## Code Examples

```
{
  "error": "",
  "simulationInputJsonWithData": "{"SalesTransaction": [{"PriceBooks": "01sxx0000005ptpAAA","SalesTransactionItem": [{"LineItemQuantity": 4,"ProductSellingModel": null,"Product": "01txx0000006i2SAAQ","LineItem": "0QLxx0000004C92GAE"},{"LineItemQuantity": 3,"ProductSellingModel": null,"Product": "01txx0000006i2TAAQ","LineItem": "0QLxx0000004C93GAE"}]}]}",
  "success": true
}
```
