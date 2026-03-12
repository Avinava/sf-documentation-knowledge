---
title: "Forecast Future Data Points with timeseries"
domain: bi-dev-guide-saql
topic: forecast-future-data-points-with-timeseries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.296Z
estimatedTokens: 247
keywords: [Forecast, Future, Data, Points, timeseries, predict, happen, How, Tourists, Visit, Year]
---

# Forecast Future Data Points with timeseries

> Use existing data to predict what might happen in the future.

# Forecast Future Data Points with timeseries

Use existing data to predict what might happen in the future.

## Example - How Many Tourists Will Visit Next Year?

Suppose that you run a chain of retail stores, and the number of tourists in your city affect your sales. Use timeseries to predict how many tourists will come to your city next year:

```

```

Use a timeline chart and set a predictive line to see the calculated future data. The resulting graph shows the likely number of tourists in the future.

![Diagram showing the meeting dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_statement_timeseries_tourist.png&folder=bi_dev_guide_saql)

#### See Also

-   [timeseries](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_timeseries.htm "Uses existing data to predict future data points. The timeseries statement must follow a projection statement in your query. Perform any filtering pre-projection or after the timeseries statement.")

## Code Examples

```
q = load "TouristData";
q = group q by ('Visit_Year', 'Visit_Month');
q = foreach q generate 'Visit_Year', 'Visit_Month', sum('NumTourist') as 'sum_NumTourist';

-- If your data is missing some dates, use fill() before using timeseries()
-- Make sure that the dateCols parameter in fill() matches the dateCols parameter in timerseries() 
q = fill q by (dateCols=('Visit_Year','Visit_Month', "Y-M"));

-- Use timeseries() to predict the number of tourists. 
q = timeseries q generate 'sum_NumTourist' as Tourists with (length=12, dateCols=('Visit_Year','Visit_Month', "Y-M"));

q = foreach q generate 'Visit_Year' + "~~~" + 'Visit_Month' as 'Visit_Year~~~Visit_Month', Tourists;
```

## Related Topics

- timeseries (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_timeseries.htm)
