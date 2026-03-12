---
title: "Get Predictions"
domain: bi-dev-guide-rest-sdd
topic: get-predictions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:05.052Z
estimatedTokens: 1225
keywords: [Predictions, Einstein, Prediction, Service, REST, API, endpoint, POST]
---

# Get Predictions

> The Einstein Prediction Service provides a REST API endpoint to request a
    prediction.

# Get Predictions

The Einstein Prediction Service provides a REST API endpoint to request a prediction.

## Prediction Request

```

```

## POST Request Body

Use one of the following to create your request body, [Smart Data Discovery Predict Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_input.htm "The predict input for Einstein Discovery."), [Smart Data Discovery Predict Raw Data Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_raw_data_input.htm "The predict raw data input for Einstein Discovery."), [Smart Data Discovery Predict Record Overrides Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_record_overrides_input.htm "The predict record overrides input for Einstein Discovery."), or [Smart Data Discovery Predict Record Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_record_input.htm "The predict record input for Einstein Discovery.").

In the request body, you specify the prediction definition to use and the rows of data that you want to score. You can specify rows in one of three available formats:

| Format | Description |
| --- | --- |
| Records | Salesforce record Ids associated with the subscribedEntity of the prediction definition (retrieved using a SOQL query). |
| RawData | A two-dimensional array of row values in which each row is a comma-separated list of values. |
| RecordOverrides | Array of objects containing the Salesforce record Ids. Optionally, override or append values in individual records with an array of row values (in which each row is a comma-separated list of values). |

When you run a prediction, Salesforce applies the model specified in the prediction definition to the set of records and returns a prediction score for each record. If you specify 3 records, for example, you get 3 predictions in the order in which the records were specified in the request.

Sample Request when type is Records

The following example shows a request body in which type is Records. The records attribute provides a comma-separated list of Salesforce record Ids associated with the subscribedEntity of the prediction definition. You can retrieve a list of available prediction definition Ids using the following API request:

```

```

You can specify up to 200 Salesforce record Ids. Two records are specified in the following example:

```

```

Sample Request when type is RawData

The following example shows a request body in which type is RawData. It names five columns and specifies two records with five data values each. The columns were selected during the story setup process. For more information, see [Create a Story](https://help.salesforce.com/s/articleView?id=analytics.bi_edd_create.htm&type=5&language=en_US).

```

```

Sample Request when type is RecordOverrides

The following example shows a request body in which type is RecordOverrides. When specifying row data:

-   Each Salesforce record Id represents a record in the subscribedEntity associated with the prediction definition.
-   (Optional) Each row, where specified, contains the values to override or append to the data specified in the associated record.

You can specify up to 200 entries (record entries plus row entries) in a request. For example, if you have 120 record entries, you can override up to 80 record entries with row entries. The following example specifies two columns with two record entries and two overrides.

```

```

Sample Request for Predictive Factors and Improvements

Starting in 50.0, this API returns a single prediction value by default. To request prediction factors and improvements, you must ask for them explicitly in the request body. The following code snippet specifies settings to request prediction factors and improvements.

```

```

In this example:

-   maxPrescriptions specifies the maximum number of improvements (1-3) to return in the response
-   maxMiddleValues specifies the number of top predictors (1-3) to return in the response
-   prescriptionImpactPercentage specifies the threshold filter (minimum % improvement for the outcome, which in this example is 87%) needed for the improvement to be returned in the response

To learn more about these settings and see these elements on an example Lightning page, see [Add Einstein Predictions to a Lightning Page](https://help.salesforce.com/s/articleView?id=analytics.bi_edd_einstein_predictions_lightning.htm&type=5&language=en_US).

## POST Response

The POST response is a [Smart Data Discovery Predict List](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_predict_list.htm "A list of Einstein Discovery predictions.") response.

Example POST Response

```

```

## Code Examples

```
POST ​/smartdatadiscovery​/predict
```

```
GET ​/smartdatadiscovery​/predictiondefinitions
```

```
{
   "predictionDefinition": "1ORRM00000000304AA",
   "type": "Records",
   "records": ["006RM000002bEfiYAE", "006RM000002bEflYAE" ]
}
```

```
{
  "predictionDefinition": "0OR1H000000Gma9WAC",
  "type": "RawData",
  "columnNames": ["StageName","CloseDate","Account.BillingCountry","IsClosed","IsWon"],
  "rows": [
    ["Prospecting","2020-06-30","USA","false","false"],
    ["Qualification","2020-08-30","EMEA", "false","false"]
  ]
}
```

```
{
  "predictionDefinition": "0OR1H000000Gma9WAC",
  "type": "RecordOverrides",
  "columnNames": ["StageName", "CloseDate"],
  "rows": [
          
      {
         "record": "0061H00000dnhQEQAY",
          "row": ["Prospecting", "2020-06-30"]
      },
          
      {
          "record": "0061H00000dnhPzQAI",
          "row": ["Qualification", "2020-08-30"]
      }
          
  ]
}
```

## Related Topics

- Smart Data Discovery Predict Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_input.htm)
- Smart Data Discovery Predict Raw Data Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_raw_data_input.htm)
- Smart Data Discovery Predict Record Overrides Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_record_overrides_input.htm)
- Smart Data Discovery Predict Record Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_record_input.htm)
- Smart Data Discovery Predict List (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_predict_list.htm)
