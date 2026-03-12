---
title: "TIMESERIES"
domain: bi-dev-guide-sql
topic: timeseries
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.313Z
estimatedTokens: 731
keywords: [TIMESERIES, function, predict, future, ones, tracked, over, time, Optionally, choose, prediction, model, confidence, interval, seasonality]
---

# TIMESERIES

> Use the TIMESERIES() table function to predict
  future values based on existing ones tracked over time. Optionally choose a prediction model,
  confidence interval, and seasonality among other parameters.

# TIMESERIES

Use the TIMESERIES() table function to predict future values based on existing ones tracked over time. Optionally choose a prediction model, confidence interval, and seasonality among other parameters.

TIMESERIES() takes the following syntax.

```

```

| Name | Description |
| --- | --- |
| INPUT | Required. A SELECT statement that includes date information and is the input to the TIMESERIES() function. |
| FIELDS | Required. The field values in the input query from which to predict future values. Predicted values are automatically named predicted_fieldName. |
| LENGTH | Required. The number of points to predict. |
| DATE_COLS | Optional.DATE_FIELDS—The array of date fields from which to base future predictions.The DATE_COLUMN_TYPE string accepts these values.'YEAR_FIELD', 'MONTH_FIELD', 'Y-M''YEAR_FIELD', 'QUARTER_FIELD', 'Y-Q''YEAR_FIELD', 'Y''YEAR_FIELD', 'WEEK_FIELD', 'Y-W''YEAR_FIELD', 'MONTH_FIELD', 'DAY_FIELD', 'Y-M-D' |
| ORDER | Optional, unless no DATE_COLS are specified. |
| PARTITION | Optional. A field used to split query results into smaller partitions. The TIMESERIES() function resets when the field value changes. After each group of rows is completed for a given partition, TIMESERIES() runs on the next partition. |
| PREDICTION_INTERVAL | Optional. The confidence interval to display for each forecasted data point. |
| IGNORE_LAST | Optional. If set to TRUE, excludes the last time period from timeseries calculations. |
| MODEL | Optional. Choose from these prediction models:NONEADDITIVEMULTIPLICATIVE |
| SEASONALITY | Optional. Use with DATE_COLS to specify the seasonality for the prediction. |

## Example

This example predicts the annual number of tourists for two years based on available data for previous years.

```

```

| date (Year) | predicted_sum_tourists | Sum of tourists |
| --- | --- | --- |
| 2001 | 13008 | 13140 |
| 2002 | 13964 | 13543 |
| 2003 | 14934 | 15502 |
| 2004 | 15894 | 15894 |
| 2005 | 16855 | 16784 |
| 2006 | 17816 | 17713 |
| 2007 | 18777 | 18719 |
| 2008 | 19738 | - |
| 2009 | 20700 | - |
| 2010 | 21662 | - |

## Example with TIMESERIES() and FILL()

To fill in the gaps, the FILL() function takes the input of the annual tourist sums and fills in the gaps (if any) in date fields. TIMESERIES() takes the input from the FILL() function and predicts the number of tourists expected for the specified length. Here, LENGTH is set to 3, meaning three years. IGNORE\_LAST is set to TRUE to exclude the last row for 2008 from generating timeseries predictions. TIMESERIES() predicts values from 2008–2010.

```

```

| date (Year) | predicted_sum_tourists | Sum of tourists |
| --- | --- | --- |
| 2001 | 13008 | 13140 |
| 2002 | 13964 | 13543 |
| 2003 | 14934 | 15502 |
| 2004 | 15894 | 15894 |
| 2005 | 16855 | 16784 |
| 2006 | 17816 | 17713 |
| 2007 | 18777 | 18719 |
| 2008 | 19738 | - |
| 2009 | 20700 | - |
| 2010 | 21662 | - |

## Code Examples

```
SELECT * FROM TIMESERIES(
    INPUT=>(SELECT STATEMENT),
    FIELDS=>ARRAY['MEASURE1', 'MEASURE2,...'],
    LENGTH=>NUMBER,
    [DATE_COLS=>ARRAY[<DATE_FIELDS>, 'DATE_COLUMN_TYPE'],]
    [IGNORE_LAST=BOOLEAN,]
    [ORDER=>ARRAY['FIELD_NAME1', 'DESC'|'ASC', 'FIELD_NAME2', 'DESC'|'ASC',...],],
    [PARTITION=>'FIELD_NAME',]
    [PREDICTION_INTERVAL=>ARRAY[NUMBER],]
    [MODEL=>'MODEL_NAME',]
    [SEASONALITY=NUMBER]
)
```

```
SELECT * FROM TIMESERIES(
   INPUT=>(
        SELECT EXTRACT(YEAR FROM "date") AS date_Year, SUM(tourists) AS sum_tourists FROM "TouristsData" GROUP BY
   EXTRACT(YEAR FROM "date")),
   FIELDS=>ARRAY['sum_tourists'],
   LENGTH=>2,
   DATE_COLS=>ARRAY['date_Year', 'Y']
)
```

```
SELECT * FROM TIMESERIES(
    INPUT=>(
        SELECT * FROM FILL(
            INPUT=>(SELECT EXTRACT(YEAR FROM "date") AS date_Year, SUM(tourists) AS sum_tourists
FROM "TouristsData"
GROUP BY EXTRACT(YEAR FROM "date")
            ),
            DATE_COLS=>ARRAY['date_Year', 'Y']
        )
    ),
    FIELDS=>ARRAY['sum_tourists'],
    LENGTH=>3,
    DATE_COLS=>ARRAY['date_Year', 'Y'],
    IGNORE_LAST=>TRUE
)
```
