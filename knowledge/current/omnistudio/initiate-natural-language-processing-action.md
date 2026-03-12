---
title: "Initiate Natural Language Processing Action"
domain: omnistudio
topic: initiate-natural-language-processing-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.360Z
estimatedTokens: 442
keywords: [Initiate, Natural, Language, Processing, Action, record, result, text, service, Special, Access, Rules, REST, HTTP, Inputs]
---

# Initiate Natural Language Processing Action

> Create a record for the AI natural language processing result and
   initiate text processing by using the service specified in the related record.

# Initiate Natural Language Processing Action

Create a record for the AI natural language processing result and initiate text processing by using the service specified in the related record.

This object is available in API version 60.0 and later.

## Special Access Rules

To access the Initiate Natural Language Processing action, enable either IndustriesNLPInsightsAddOn or both IndustriesContractsAIAddOn and ContractsAIAddOn.

## Supported REST HTTP Methods

URI

/services/data/v60.0/actions/standard/initiateNaturalLangProcessing

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| referenceRecordId | TypestringDescriptionRequired. The record ID with the text field that's processed by an AI natural language process request. |
| referenceRecordTextField | TypestringDescriptionRequired. The text field that's processed by an AI natural language process request. |
| serviceDetailsList | TypestringDescriptionRequired. A comma-delimited list containing the details of services that are used to process AI natural language process requests.The possible values are:Amazon_Comprehend_Keyphrase_ExtractionAmazon_Comprehend_Entity_ExtractionOpenAIClauseExtractionOpenAIEntityExtractionGenAI_Assessment_Questions_Extraction |

## Outputs

| Input | Details |
| --- | --- |
| aiNaturalLangProcRsltIdsList | TypestringDescriptionA comma-delimited list containing the IDs of AI Natural Language Process Result records that store the result of the natural language process requests. |

## Example

Sample Request

JSON Request Body

```

```

Sample Response

JSON Response Body

```

```

Sample Error message when referenceRecordId is not provided

JSON Error Body

```

```

## Code Examples

```
{
  "inputs": [
    {
      "referenceRecordId": "a00SB000003Z2LPYA0",
      "referenceRecordTextField": "Vehicle__c.Comments__c",
      "serviceDetailsList": {
        "serviceDetails": [
          {
            "serviceName": "Amazon_Comprehend_Keyphrase_Extraction",
            "configurationApiName": "AWS_Keyphrase_Extraction"
          }
        ]
      }
    }
  ]
}
```

```
[
  {
    "actionName": "initiateNaturalLangProcessing",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "aiNaturalLangProcRsltIds": {
        "aiNaturalLangProcessResultIds": [
          "7NPSB0000000g8v4AA"
        ]
      }
    },
    "version": 1
  }
]
```

```
[ {
  "errorCode" : "METHOD_NOT_ALLOWED",
  "message" : "HTTP Method 'POST' not allowed. Allowed are HEAD,GET"
} ]
```
