---
title: "Perform Survey Sentiment Analysis"
domain: salesforce-feedback-management-dev-guide
topic: perform-survey-sentiment-analysis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.338Z
estimatedTokens: 488
keywords: [Perform, Survey, Sentiment, Analysis, Result, records, insights, sentiments, underlying, responses, save, SentimentAnalysisResult, Special, Access, Rules]
---

# Perform Survey Sentiment Analysis

> Create or update the AI Sentiment Result records. You can get
    insights into the sentiments underlying survey responses and save the sentiment analysis in the
    SentimentAnalysisResult object.

# Perform Survey Sentiment Analysis

Create or update the AI Sentiment Result records. You can get insights into the sentiments underlying survey responses and save the sentiment analysis in the SentimentAnalysisResult object.

This action is available in API version 55.0 and later.

## Special Access Rules

To access the Perform Survey Sentiment Analysis action, you must have the Feedback Management - Starter and Feedback Management - Growth licenses.

## Supported REST HTTP Methods

URI

/services/data/v55.0/actions/standard/performSurveySentimentAnalysis

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| surveyId | TypeIDDescriptionRequired. The ID of the survey containing the questions for whose responses you want to get sentiment insights. |
| surveyQuestionIds | TypeIDDescriptionRequired. The IDs of the questions for whose responses you want to get sentiment insights. |
| startDate | TypeDatetimeDescriptionRequired. The date from when participant responses are processed to get sentiment insights. |
| endDate | TypeDatetimeDescriptionRequired. The date until when participant responses are processed to get sentiment insights. |
| typeOfOperation | TypeStringDescriptionRequired. The type of operation to be performed on the survey responses.Possible values are:create—Bulk process survey responses. After the processing is completed, the AI Sentiment Result records are created with the Submitted status.update—Bulk process survey responses that have associated AI Sentiment Result records in the Draft status. After the processing is completed, the AI Sentiment Result records are updated and their status is changed to Submitted.You can only update a sentiment analysis result record with the Draft status. |

## Outputs

None.

## Example

Sample Request

Here’s an example POST request to create or update the AI Sentiment Result records:

```

```

## Code Examples

```
{
   "inputs":[{
      "surveyId":"0Kdx00000000GYeCAM",
      "surveyQuestionIds":["0Kux00000000xDgCAI","0Kux00000000xDiCAI"],
      "startDate":"1-07-2022",
      "endDate":"12-07-2022",
      "typeOfOperation":"create"
   }]
}
```
