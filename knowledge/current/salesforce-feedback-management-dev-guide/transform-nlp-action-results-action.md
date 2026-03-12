---
title: "Transform NLP Action Results Action"
domain: salesforce-feedback-management-dev-guide
topic: transform-nlp-action-results-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.343Z
estimatedTokens: 381
keywords: [Transform, NLP, Action, Results, Natural, Language, Processing, result, created, Einstein, Generative, Apex, record, REST, HTTP]
---

# Transform NLP Action Results Action

> Transform an AI Natural Language Processing (NLP) result created by
            using Einstein Generative AI into an Apex Object record.

# Transform NLP Action Results Action

Transform an AI Natural Language Processing (NLP) result created by using Einstein Generative AI into an Apex Object record.

This action is available in API version 61.0 and later.

To access the Transform NLP Action Results action, you must have the Salesforce Feedback Management Starter or Growth License and the Salesforce org enabled with Surveys along with Generative AI Surveys feature.

## Supported REST HTTP Methods

URI

Get the list of invocable actions for each available survey.

/services/data/v61.0/actions/standard/transformNlpActionResult

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| nlpRecordId | TypeStringRequiredDescriptionID of the AI natural language process result (type AiNaturalLangProcessRslt) record to perform natural language processing on. |
| feature | TypeStringRequiredDescriptionPurpose that the NLP response is used for. Valid values are:SurveyLongSummarizationSurveyShortSummarization |

## Outputs

| Output | Details |
| --- | --- |
| nlpResponse | TypestringDescriptionApex industries NLP response record that contains the action output. |
| status | TypestringDescriptionStatus of the NLP operation. Valid values are:completedfailurenotStartedpending |

## Example

POST

This example shows a sample request for the Transform NLP Action Result action.

```

```

This example shows a sample response for the Transform NLP Action Result action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "nlpRecordId": "7NPSM0000000K5B4xx",
      "feature": "SurveyLongSummarization"
    }
  ]
}
```

```
{
    "nlpResponse": {
      "summarizationResult": {
        "summary": "The majority of respondents found the process cumbersome and experienced issues with the payment web page. There were no specific suggestions provided for improving the product."
      },
      "status": “completed”
    }
  }
```
