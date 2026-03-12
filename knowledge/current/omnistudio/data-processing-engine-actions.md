---
title: "Data Processing Engine Actions"
domain: omnistudio
topic: data-processing-engine-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:51.092Z
estimatedTokens: 465
keywords: [Data, Processing, Engine, Actions, Run, active, definition., action, executes, definition, asynchronously., Supported, REST, HTTP, Inputs, Note, Outputs, Usage, Example]
---

# Data Processing Engine Actions

> Run an active Data Processing Engine definition. This action executes a
   Data Processing Engine definition asynchronously.

# Data Processing Engine Actions

Run an active Data Processing Engine definition. This action executes a Data Processing Engine definition asynchronously.

A Data Processing Engine definition transforms data from your Salesforce org and writes back the results to your org. For more information about running Data Processing Engine definitions, see [Run a Data Processing Engine Definition](https://help.salesforce.com/articleView?id=task_data_processing_engine_run.htm&language=en_US) in Salesforce Help.

This object is available in API version 51.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/custom/dataProcessingEngineAction

Formats

JSON

HTTP Methods

GET, POST

Authentication

Authorization: Bearer token

## Inputs

Use the GET method to retrieve input variables of a Data Processing Engine definition. The input variables of each Data Processing Engine definition are unique. The Data Processing Engine action uses the input variables to execute the Data Processing Engine definition and generate a batch job ID.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

You can't use this action to start two simultaneous runs of a definition with the same input variables.

## Outputs

| Output | Details |
| --- | --- |
| batchJobId | TypestringDescriptionID of the batch job generated after the request is successful. This ID is used to track the progress of the batch job in Monitor Workflow Services. |

## Usage

**JSON Sample Request to execute PointsAccrual DPE Definition**

```

```

**JSON Sample Response**

```

```

## Example

GET

This example shows how to retrieve input variables of a Data Processing Engine action type.

```

```

POST

Here’s a request to retrieve DPE definition

```

```

Here’s a response for this action.

```

```

## Code Examples

```
{
   "PointsAccrual" : {
      "memberTier" : "Gold",
      "minimumPointBalanceRequired" : "50000",
      "pointType" : "non-qualifying"
   }
}
```

```
{
   "actionName":"PointsAccrual",
      "errors":null,
      "isSuccess":true,
      "outputValues":{ 
        "batchJobId":"0lMxx0000A000001EAA"
      }
}
```

```
curl --include --request GET \
--header "Authorization: Authorization: Bearer 00DR...xyz" \
--header "Content-Type: application/json" \
"https://instance.salesforce.com/services/data/v60.0/actions/custom/dataProcessingEngineAction/newinputvardefn"
```

```
{
  "inputs": [
    {
      "start_date": "26-09-2023",
      "end_date": "12-12-2023",
      "randomkey": "069SM0000001SgbYAE"
    }
  ]
}
```

```
[
  {
    "actionName": "newinputvardefn",
    "errors": null,
    "invocationID": null,
    "isSuccess": true,
    "outputValues": {
      "batchJobId": "0mdSM0000006EJdYAM",
      "accepted": true
    },
    "version": 1
  }
]
```
