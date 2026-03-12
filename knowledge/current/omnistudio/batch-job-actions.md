---
title: "Batch Job Actions"
domain: omnistudio
topic: batch-job-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.941Z
estimatedTokens: 343
keywords: [Batch, Job, Actions, Run, active, Management, job, definition., action, executes, defined, asynchronously., Supported, REST, HTTP, Inputs, Outputs, Usage]
---

# Batch Job Actions

> Run an active Batch Management job definition. This action executes a
   defined Batch Management job asynchronously.

# Batch Job Actions

Run an active Batch Management job definition. This action executes a defined Batch Management job asynchronously.

A Batch Management job processes a flow in manageable parts. For more information about running an active Batch Management jobs, see [Schedule a Batch Job](https://help.salesforce.com/articleView?id=task_schedule_batch_flow.htm&language=en_US) in Salesforce Help.

This object is available in API version 51.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/custom/batchJobAction

Formats

JSON

HTTP Methods

GET, POST

Authentication

Authorization: Bearer token

## Inputs

The batch job action uses the batch job definition ID and input variables to execute the job and generate a batch job ID. The input values vary according to the input variables in that flow.

## Outputs

| Output | Details |
| --- | --- |
| batchJobId | TypestringDescriptionID of the batch job generated after the request is successful. This batch job ID is used to track the progress of the batch job in Monitor Workflow Services. |

## Usage

A request body is always required. The input values vary according to the input variables in that flow. If your batch job doesn't require any input variables, you still must send an empty JSON body.

```

```

**JSON Sample Request**

```

```

**JSON Sample Response**

```

```

## Code Examples

```
{
  "inputs": [{}]
}
```

```
{
   "noOfEmployees" : 900,
   "accountIndustry" : "Technology"
}
```

```
{
   "batchJobId": "0lMxx0000A000001EAA"
   "accepted": "true"
}
```
