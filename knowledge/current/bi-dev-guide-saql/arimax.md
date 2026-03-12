---
title: "arimax"
domain: bi-dev-guide-saql
topic: arimax
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.742Z
estimatedTokens: 2674
keywords: [arimax, Uses, data, predict, future, points, statement, follow, projection, query, Perform, any, filtering, pre-projection, Usage]
---

# arimax

> Uses existing data to predict future data points. The arimax statement must follow a projection statement in your query. Perform any
  filtering pre-projection or after the arimax
  statement.

# arimax

Uses existing data to predict future data points. The arimax statement must follow a projection statement in your query. Perform any filtering pre-projection or after the arimax statement.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

The arimax statement requires a CRM Analytics Growth or CRM Analytics Plus license to return a full set of results.

## Usage

arimax is a variant of the timeseries statement that provides a different algorithm to predict data points. Use arimax when you want predictions performed with a more general model that can take multiple variables.

## Syntax

```

```

parameters can have these values:

-   arimaOrder (required if seasonalOrder isn’t specified) Specify the order for the ARIMA model. For example, arimaOrder=(p,d,q), where p, d, and q are integers. The integer values must be between 0 and 5.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

    #### Note

    p is the AR order, d is the degree of differencing, and q is the MA order.

-   seasonalOrder (required if arimaOrder isn’t specified) Specify the seasonal order for the ARIMA model. For example, seasonalOrder=(P,D,Q,s), where P, D, Q are integers and s is the period. The integer values must be between 0 and 5. The s value must be 0 or between 2 and 24. s can only be 0 when P, D, and Q are also all 0.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

    #### Note

    P is the seasonal AR order, D is the degree of seasonal differencing, Q is the seasonal MA order, and s is the seasonal periodicity.

-   xreg (optional) External regressors or co-factors. For example, xreg=('col1','col2',...). The values for xreg must be measures. The maximum number of xreg fields allowed is 10.

-   xregFutures (optional) Future scenario data for the xreg parameter as a map of values arrays. The number of values in each array must match the value for the length parameter. The key for each array value is the name of an xreg measure.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

If seasonalOrder and dateType aren’t specified in the query, the algorithm runs an auto-param search on a few popular seasonalities to find the best fit.

arimax also supports the following timeseries parameters, with the same meaning and behavior.

-   length (required) Number of points to predict. For example, if length is 6 and the dateCols type string is Y-M, arimax predicts data for 6 months.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

    #### Note

    If you want to use dateCols but your data stream has missing dates, use fill before using arimax.

-   dateCols (optional) Date fields to use for grouping the data, plus the date column type string. For example, dateCols=(CloseDate\_Year, CloseDate\_Month, "Y-M"). Date columns are projected automatically. Allowed values are:

    -   YearField, MonthField, "Y-M"
    -   YearField, QuarterField, "Y-Q"
    -   YearField, "Y"
    -   YearField, MonthField, DayField "Y-M-D"
    -   YearField, WeekField "Y-W"
-   ignoreLast (optional) If true, arimax doesn't use the last time period in the calculations. The default is false.

    Set this parameter to true to improve the accuracy of the forecast if the last time period contains incomplete data. For example, if you’re partway through the quarter, arimax forecasts more accurately if you set this parameter to true.

-   order (optional) Specify the field to use for ordering the data. Mandatory if dateCols isn’t used. By default, this field is sorted in ascending order. Use desc to specify descending order, for example order=('Type' desc). You can also order by multiple fields, for example order=('Type' desc, 'Group' asc).

    For example, suppose that your data has no date columns, but it has a measure column called Week. Use order='Week'.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

    #### Note

    Specify either dateCols or order.

-   partition (optional) Specify the column used to partition the data. The column must be a dimension. The arimax calculation is done separately for each partition to ensure that each partition uses the most accurate algorithm. For example, data in one partition can have a seasonal variation while data in another partition doesn't. The partition columns are projected automatically.

    For example, suppose that your sales data for raw materials contains the date sold, type of raw material, and the weight sold. To predict the future weight sold for each type of raw material, use partition='Type'.

-   predictionInterval (optional) Specify the uncertainty, or confidence interval, to display at each point. Allowed values are 80 and 95. The upper and lower bounds of the confidence interval are projected in columns named column\_name\_low\_95 and column\_name\_high\_95.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

arimax doesn’t support missing data values in the forecast or xreg measures. You must pre-process your data to replace missing values in the query before calling arimax

.

## Syntax Examples

-   Use arimax with the arimaOrder parameter.

    ```

    ```

-   Use arimax with the arimaOrder, xreg, and ignoreLast parameters.

    ```

    ```

-   Use multiple columns in the arimax forecast. If xreg is specified, multiple columns aren’t allowed. = arimax q generate 'Value' as 'fValue', 'Value2' as 'fValue2' with (length=10, dataCols=('Year', 'Month', 'Day', "Y-M-D"), arimaOrder=(1,0,1));
-   Use arimax with the arimaOrder, seasonalOrder, and xreg parameters.

    ```

    ```


| seasonality | dateCols | Type of Seasonality |
| --- | --- | --- |
| seasonalOrder=(1,0,1,4) | dateCols=('Year','Quarter',"Y-Q") | Yearly seasonality, because there are 4 quarters in a year. |
| seasonalOrder=(1,0,1,12) | dateCols=('Year','Month',"Y-M") | Yearly seasonality, because there are 12 months in a year. |
| seasonalOrder=(1,0,1,7) | dateCols=('Year','Month','Day',"Y-M-D") | Weekly seasonality, because there are 7 days in a week. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

When the date type in the dateCols value doesn’t match the seasonal periodicity in seasonalOrder, the seasonal periodicity takes precedence. For example, if dateCols=('Year','Month',"Y-M") and seasonalOrder=(1,0,1,4) are in the same arimax statement, the seasonal period used for predictions is 4 or "Y-Q", not "Y-M".

## Use Case Examples

Suppose you have a dataset with 5 years of monthly power usage for a city, along with the corresponding average temperature and precipitation for each month.

![A dataset example with date, power, precipitation, and temperature values.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_arimax_dataset_example.png&folder=bi_dev_guide_saql)

You can use a seasonal arimax query to predict the next 12 months of power usage, refining each prediction by adding more parameters to your query. Start with a single variable prediction, then make it multivariate by adding xreg, and finally, create a what-if analysis by adding xregFutures. For each visualization, a timeline chart is used, with **Axis Mode** set to Single Axis, **Show Value As** set to Compact Number, and a predictive line added to the **X-Axis**.

## Seasonal Query

Use a seasonal arimax query to predict how much power the city will use in the upcoming year.

```

```

![The results of a seasonal arimax query with one variant used in the prediction.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_arimax_univariate_example.png&folder=bi_dev_guide_saql)

## Multivariate Seasonal Query

Use a seasonal multivariate arimax query to predict how much power the city will use, using the temperature and precipitation measures in the calculation of the predicted values.

```

```

![The results of a seasonal arimax query with multiple variants used in the prediction.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_arimax_multivariate_example.png&folder=bi_dev_guide_saql)

## Multivariate Seasonal Query with Prediction Interval

Use a seasonal multivariate arimax query to predict how much power the city will use, using the temperature and precipitation measures in the calculation of the predicted values. Then, add a predictionInterval to show the prediction with 95% accuracy

```

```

![The results of a seasonal arimax query with multiple variants and a prediction interval used in the prediction.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_arimax_predictionInterval_example.png&folder=bi_dev_guide_saql)

## What-If Analysis Query

Use the xregFutures parameter to provide possible future values for xreg fields to see what the effects are on the forecasted fields for different sets of values

```

```

The user can pass in values for xreg fields that they want to do the what-if analysis on.

Add xregFutures to the seasonal multivariate arimax query to predict how much power the city will use with future temperature and precipitation values. In this query, the final 6 temperature future values have been increased by 10 degrees each to alter the calculated values in the visualization.

```

```

![The results of a seasonal arimax query with what-if analysis.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_arimax_whatif_example.png&folder=bi_dev_guide_saql)

#### See Also

-   [arimax Show Parameters Query Tool](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_arimax_show_parameters.htm#bi_saql_arimax_show_parameters "The showParams parameter is provided for you as a query developer tool. It allows you to run an arimax query and review the model parameters and Bayesian Information Criteria (BIC) to understand the data better and improve query efficiency.")

-   [timeseries](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_timeseries.htm "Uses existing data to predict future data points. The timeseries statement must follow a projection statement in your query. Perform any filtering pre-projection or after the timeseries statement.")

-   [Use Show Parameters with No Seasonality to Model BIC Values](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_arimax_show_parameters.htm#bi_saql_arimax_show_parameters_example "To understand your data, run the arimax query without seasonalOrder and with showParams=\"multi\".")

## Code Examples

```
result = arimax resultSet generate measure1 as fmeasure1 with (parameters);
```

```
q = arimax q generate 'Value' as 'fValue' with (length=10, dataCols=('Year', 'Month', 'Day', "Y-M-D"), arimaOrder=(1,0,1));
```

```
q = arimax q generate 'Value' as 'fValue' with (length=10, dataCols=('Year', 'Month', 'Day', "Y-M-D"), arimaOrder=(1,0,1), xreg=('Price', 'Cost'), ignoreLast=true);
```

```
q = arimax q generate 'Value' as 'fValue' with (length=10, dataCols=('Year', 'Month', 'Day', "Y-M-D"), arimaOrder=(1,0,1), seasonalOrder=(1,0,1,4), xreg=('Price', 'Cost'));
```

```
q = load "nyc_power_dates3";
q = group q by (CurrentDate_Year, CurrentDate_Month);
q = foreach q generate CurrentDate_Year, CurrentDate_Month, sum(power) as power;
q = arimax q generate power as fPower with (length=12, dateCols=(CurrentDate_Year, CurrentDate_Month, "Y-M"), arimaOrder=(0,1,1), seasonalOrder=(0,1,1,12));
q = foreach q generate 'CurrentDate_Year' + "~~~" + 'CurrentDate_Month' as 'CurrentDate_Year~~~CurrentDate_Month', fPower;
```

## Related Topics

- arimax Show Parameters Query Tool (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_arimax_show_parameters.htm)
- timeseries (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_timeseries.htm)
- Use Show Parameters with No Seasonality to Model BIC Values (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_arimax_show_parameters.htm)
