---
title: "arimax Show Parameters Query Tool"
domain: bi-dev-guide-saql
topic: arimax-show-parameters-query-tool
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.243Z
estimatedTokens: 2117
keywords: [arimax, Show, Query, Tool, showParams, provided, developer, run, review, model, Bayesian, Criteria, BIC, understand, data]
---

# arimax Show Parameters Query Tool

> The showParams parameter is provided for you as a query developer tool. It allows you to
  run an arimax query and review the model parameters and Bayesian Information Criteria (BIC) to
  understand the data better and improve query efficiency.

# arimax Show Parameters Query Tool

The showParams parameter is provided for you as a query developer tool. It allows you to run an arimax query and review the model parameters and Bayesian Information Criteria (BIC) to understand the data better and improve query efficiency.

When running an arimax query with the showParams specified, no statements after the arimax statement are allowed. During development, splitting your query can make testing easier.

The query result isn't the queried data, it’s debugging information that shows the model parameters and the Bayesian Information Criteria (BIC) value. Use the result with the lowest BIC in your final query.

## Description

Valid values are top and multi.

Specifying top returns the final Arimax model and BIC for each partition and each forecasted measure. For example, the results for showParams="top" are:

| Measure | ArimaOrder | SeasonalOrder | BIC |
| --- | --- | --- | --- |
| Revenue | (1,1,1) | (1,2,0,4) | 123.45 |

Specifying multi returns the top 3 Arimax models and BIC for each partition and each forecasted measure. A lower BIC score denotes a better model fit. For example, the results for showParams="multi" are:

| Measure | ArimaOrder | SeasonalOrder | BIC |
| --- | --- | --- | --- |
| Revenue | (2,1,1) | (1,1,0,4) | 100.248204 |
| Revenue | (2,1,1) | (2,0,1,12) | 107.434348 |
| Revenue | (2,1,1) | (0,1,2,4) | 112.206876 |

If both arimaxOrder and seasonalOrder are defined in the query, only the specified Arimax model and BIC are returned.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_saql)

#### Warning

It's best practice to always provide a dateType with the dateCols parameter to ensure more accurate predictions and better query performance. Omitting dateType results in a long-running query.

#### See Also

-   [arimax](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_arimax.htm "Uses existing data to predict future data points. The arimax statement must follow a projection statement in your query. Perform any filtering pre-projection or after the arimax statement.")


## Syntax - No Partition

Syntax examples for show parameters queries with no partition.

### Single Forecast Measure, showParams="top"

The query uses showParams="top" and a single forecast measure. The results return the lowest BIC value.

```

```

Query results are:

| Measure | ArimaOrder | SeasonalOrder | BIC |
| --- | --- | --- | --- |
| Revenue | (1,1,0) | (0,1,1,3) | 459.50558 |

### Single Forecast Measure, showParams="multi"

The query uses showParams="multi" and a single forecast measure. The results return the top 3 parameter combinations with the lowest BIC.

```

```

Query results are:

| Measure | ArimaOrder | SeasonalOrder | BIC |
| --- | --- | --- | --- |
| Revenue | (1,1,0) | (0,1,1,3) | 459.50558 |
| Revenue | (0,1,0) | (0,1,1,3) | 478.15679 |
| Revenue | (2,1,0) | (0,1,1,3) | 512.45935 |

### Multiple Forecast Measures, showParams="top"

The query uses showParams="top" and a multiple forecast measures. The results return the lowest BIC value for each measure.

```

```

Query results are:

| Measure | ArimaOrder | SeasonalOrder | BIC |
| --- | --- | --- | --- |
| Revenue | (1,1,0) | (0,1,1,3) | 459.50558 |
| Shipping Cost | (2,0,1) | (0,1,1,3) | 1017.855 |

### Multiple Forecast Measures, showParams="multi"

The query uses showParams="multi" and multiple forecast measures. The results return the top 3 parameter combinations with the lowest BIC for each measure.

```

```

Query results are:

| Measure | ArimaOrder | SeasonalOrder | BIC |
| --- | --- | --- | --- |
| Revenue | (1,1,0) | (0,1,1,3) | 459.50558 |
| Revenue | (0,1,0) | (0,1,1,3) | 478.15679 |
| Revenue | (2,1,0) | (0,1,1,3) | 512.45935 |
| Shipping Cost | (2,0,1) | (0,1,1,3) | 1017.855 |
| Shipping Cost | (2,0,0) | (0,1,1,3) | 1025.45699 |
| Shipping Cost | (2,0,2) | (0,1,1,3) | 1131.45972 |

## Syntax - With Partition

Syntax examples for show parameters queries with a partition.

### Single Forecast Measure, showParams="top"

The query uses showParams="top", a single forecast measure, and a partition. The results return the lowest BIC value for the measure in each partition.

```

```

Query results are:

| Partition | Measure | ArimaOrder | SeasonalOrder | BIC |
| --- | --- | --- | --- | --- |
| AMER | Revenue | (1,1,0) | (0,1,1,3) | 53.78475 |
| APAC | Revenue | (0,1,0) | (0,1,1,3) | 56.0938 |
| EU | Revenue | (2,1,2) | (0,1,1,3) | 58.3398 |

### Single Forecast Measure, showParams="multi"

The query uses showParams="multi", a single forecast measure, and a partition. The results return the top 3 parameter combinations with the lowest BIC value for the measure in each partition.

```

```

Query results are:

| Partition | Measure | ArimaOrder | SeasonalOrder | BIC |
| --- | --- | --- | --- | --- |
| AMER | Revenue | (1,1,0) | (0,1,1,3) | 53.78475 |
| AMER | Revenue | (1,1,1) | (0,1,1,3) | 57.15645 |
| AMER | Revenue | (0,1,0) | (0,1,1,3) | 62.14569 |
| APAC | Revenue | (0,1,0) | (0,1,1,3) | 56.0938 |
| APAC | Revenue | (0,1,1) | (0,1,1,3) | 57.19587 |
| APAC | Revenue | (1,1,0) | (0,1,1,3) | 58.45987 |
| EU | Revenue | (2,1,2) | (0,1,1,3) | 58.3398 |
| EU | Revenue | (1,1,1) | (0,1,1,3) | 64.01597 |
| EU | Revenue | (2,1,0) | (0,1,1,3) | 71.48946 |

### Multiple Forecast Measures, showParams="top"

The query uses showParams="top", multiple forecast measures, and a partition. The results return the lowest BIC value for each measure in each partition.

```

```

Query results are:

| Partition | Measure | ArimaOrder | SeasonalOrder | BIC |
| --- | --- | --- | --- | --- |
| AMER | Revenue | (1,1,0) | (0,1,1,3) | 53.78475 |
| AMER | Shipping Cost | (0,1,0) | (0,1,1,3) | 122.04503 |
| APAC | Revenue | (0,1,0) | (0,1,1,3) | 56.0938 |
| APAC | Shipping Cost | (2,1,0) | (0,1,1,3) | 138.1605 |
| EU | Revenue | (2,1,2) | (0,1,1,3) | 58.3398 |
| EU | Shipping Cost | (2,1,1) | (0,1,1,3) | 130.74353 |

### Multiple Forecast Measures, showParams="multi"

The query uses showParams="multi", multiple forecast measures, and a partition. The results return the top 3 parameter combinations with the lowest BIC value for each measure in each partition.

```

```

Query results are:

| Partition | Measure | ArimaOrder | SeasonalOrder | BIC |
| --- | --- | --- | --- | --- |
| AMER | Revenue | (1,1,0) | (0,1,1,3) | 53.78475 |
| AMER | Revenue | (1,1,1) | (0,1,1,3) | 57.15645 |
| AMER | Revenue | (0,1,0) | (0,1,1,3) | 62.14569 |
| AMER | Shipping Cost | (0,1,0) | (0,1,1,3) | 122.04503 |
| AMER | Shipping Cost | (2,0,1) | (0,1,1,3) | 127.48979 |
| AMER | Shipping Cost | (0,1,1) | (0,1,1,3) | 139.48975 |
| APAC | Revenue | (0,1,0) | (0,1,1,3) | 56.0938 |
| APAC | Revenue | (0,1,1) | (0,1,1,3) | 57.19587 |
| APAC | Revenue | (1,1,0) | (0,1,1,3) | 58.459878 |
| APAC | Shipping Cost | (2,1,0) | (0,1,1,3) | 138.1605 |
| APAC | Shipping Cost | (1,1,1) | (0,1,1,3) | 141.1567 |
| APAC | Shipping Cost | (0,1,0) | (0,1,1,3) | 143.15756 |
| EU | Revenue | (2,1,2) | (0,1,1,3) | 58.3398 |
| EU | Revenue | (1,1,1) | (0,1,1,3) | 64.01597 |
| EU | Revenue | (2,1,0) | (0,1,1,3) | 71.48946 |
| EU | Shipping Cost | (2,1,1) | (0,1,1,3) | 130.74353 |
| EU | Shipping Cost | (1,0,1) | (0,1,1,3) | 137.1567 |
| EU | Shipping Cost | (0,1,2) | (0,1,1,3) | 146.49865 |

## Use Show Parameters with No Seasonality to Model BIC Values

To understand your data, run the arimax query without seasonalOrder and with showParams="multi".

```

```

The results show multiple seasonalOrder values with the lowest BICs for each forecast measure. You can select the seasonalOrder that works best for your final query.

| Partition | Measure | ArimaOrder | SeasonalOrder | BIC |
| --- | --- | --- | --- | --- |
| Cold Coffee | sum_Weight | (2,1,2) | (2,0,2,4) | 207.8193821 |
| Cold Coffee | sum_Weight | (2,1,2) | (0,1,0,4) | 270.4199107 |
| Cold Coffee | sum_Weight | (2,1,2) | (1,1,0,4) | 283.68998334 |
| Hot Coffee | sum_Weight | (2,1,2) | (0,1,0,4) | 329.0235125 |
| Hot Coffee | sum_Weight | (2,1,2) | (0,1,2,4) | 320.3612713 |
| Hot Coffee | sum_Weight | (2,1,2) | (1,1,0,4) | 365.6449188 |

#### See Also

-   [arimax](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_arimax.htm "Uses existing data to predict future data points. The arimax statement must follow a projection statement in your query. Perform any filtering pre-projection or after the arimax statement.")

## Code Examples

```
q = arimax q generate Revenue as fRevenue
with (length=10, order='ldx', predictionInterval=[80,95],
seasonalOrder=(0,1,1,3), showParams="top");
```

```
q = arimax q generate Revenue as fRevenue
with (length=10, order='ldx', predictionInterval=[80,95],
seasonalOrder=(0,1,1,3), showParams="multi");
```

```
q = arimax q generate Revenue as fRevenue, ShippingCost as fShippingCost
with (length=10, order='ldx', predictionInterval=[80,95],
seasonalOrder=(0,1,1,3), showParams="top");
```

```
q = arimax q generate Revenue as fRevenue, ShippingCost as fShippingCost
with (length=10, order='ldx', predictionInterval=[80,95],
seasonalOrder=(0,1,1,3), showParams="multi");
```

```
q = arimax q generate Revenue as fRevenue
with (length=10, order='ldx', predictionInterval=[80,95],
seasonalOrder=(0,1,1,3), partition='Region', showParams="top");
```

## Related Topics

- arimax (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_arimax.htm)
