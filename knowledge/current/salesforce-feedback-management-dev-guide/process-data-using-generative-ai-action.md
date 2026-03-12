---
title: "Process Data Using Generative AI Action"
domain: salesforce-feedback-management-dev-guide
topic: process-data-using-generative-ai-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.324Z
estimatedTokens: 352
keywords: [Process, Data, Generative, Action, Einstein, perform, Natural, Language, Processing, NLP, summarize, text, extract, key, phrases]
---

# Process Data Using Generative AI Action

> Using Einstein Generative AI, perform Natural Language Processing
            (NLP) to summarize text, extract key phrases, analyze sentiment, and unlock valuable
            insights.

# Process Data Using Generative AI Action

Using Einstein Generative AI, perform Natural Language Processing (NLP) to summarize text, extract key phrases, analyze sentiment, and unlock valuable insights.

This action is available in API version 61.0 and later.

To access the Process Data Using Generative AI action, you must have the Salesforce Feedback Management Starter or Growth License and the Salesforce org enabled with Surveys along with Generative AI Surveys feature.

## Supported REST HTTP Methods

URI

/services/data/v61.0/actions/standard/processDataUsingGenAi

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| additionalParameterIds | TypeStringDescriptionCollection of additional record IDs on which NLP is performed. |
| feature | TypeString (Picklist)RequiredDescriptionPurpose of applying NLP to the target record. Valid values are:SurveyLongSummarizationSurveyShortSummarization |
| targetRecordId | TypeStringRequiredDescriptionID of the record on which NLP is performed. |

## Outputs

| Output | Details |
| --- | --- |
| nlpRecordId | TypestringDescriptionID of the created NLP record. |

## Example

POST

This example shows a sample request for the Process Data Using Generative AI action.

```

```

This example shows a sample response for the Process Data Using Generative AI action.

```

```

## Code Examples

```
{
   "inputs":[{
      "targetRecordId": "0MySM00000007eD0xx",
      "additionalParameterIds": [
 "0KuSM0000000JM10xx","0KuSM0000000JM20xx","0KuSM0000000JM30xx","0KuSM0000000JM40xx"
      ],
      "feature": "SurveyLongSummarization"   }]
}
```

```
[
   {
      "nlpRecordId" : "7NPSM0000000K5B4xx"
   }
]
```
