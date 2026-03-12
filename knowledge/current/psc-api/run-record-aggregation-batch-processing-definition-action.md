---
title: "Run Record Aggregation Batch Processing Definition Action"
domain: psc-api
topic: run-record-aggregation-batch-processing-definition-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.404Z
estimatedTokens: 373
keywords: [Run, Record, Aggregation, Batch, Processing, Definition, Action, Runs, Data, Engine, process, asynchronous, job, creates, updates]
---

# Run Record Aggregation Batch Processing Definition Action

> Runs a Data Processing Engine definition to process an asynchronous
			batch job that creates or updates record aggregation results.

# Run Record Aggregation Batch Processing Definition Action

Runs a Data Processing Engine definition to process an asynchronous batch job that creates or updates record aggregation results.

This action is available in API version 59.0 and later.

## Special Access Rules

To access the Run Record Aggregation Batch Processing Definition action, you must have the Record Aggregation permission set license, and you must have the Record Aggregation Access permission.

## Supported REST HTTP Methods

URI

/services/data/v59.0/actions/standard/runRecordAggrBatchProcDef

Formats

JSON

HTTP Methods

GET, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| executionReferenceId | TypeIDDescriptionRequired.The ID of a record aggregation definition or a Data Processing Engine definition to run to refresh data aggregation. |

## Outputs

| Output | Details |
| --- | --- |
| accepted | TypebooleanDescriptionIndicates whether the specified Data Processing Engine definition was accepted for processing (true) or not (false). |
| batchJobId | TypestringDescriptionThe ID of the batch job that was created. |

## Example

GET

This example shows how to get the details of the Run Record Aggregation Batch Processing Definition action type.

```

```

POST

Here’s a request for the Run Record Aggregation Batch Processing Definition action.

```

```

Here’s a response for the Run Record Aggregation Batch Processing Definition action.

```

```

## Code Examples

```
curl --include --request GET \
--header "Authorization: Authorization: Bearer 00DR...xyz" \
--header "Content-Type: application/json" \
"https://instance.salesforce.com/services/data/v59.0/actions/standard/runRecordAggrBatchProcDef"
```

```
{
   "inputs":[
      {
         "executionReferenceId": "16ySB000000003FYAQ"
      }
   ]
}
```

```
[
  {
    "actionName": "runRecordAggrBatchProcDef",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "batchJobId": "0mdSB0000000dSnYAI",
      "accepted": true
    },
    "version": 1
  }
]
```
