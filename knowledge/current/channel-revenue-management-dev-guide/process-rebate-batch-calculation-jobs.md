---
title: "Process Rebate Batch Calculation Jobs"
domain: channel-revenue-management-dev-guide
topic: process-rebate-batch-calculation-jobs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.085Z
estimatedTokens: 381
keywords: [Process, Rebate, Batch, Calculation, Jobs, job, Data, Processing, Engine, REST, HTTP, Inputs, Outputs, Usage]
---

# Process Rebate Batch Calculation Jobs

> Process a rebate batch calculation job from the Data Processing
         Engine.

# Process Rebate Batch Calculation Jobs

Process a rebate batch calculation job from the Data Processing Engine.

This object is available in API version 51.0 and later for users with Rebate Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/processRebatesBatchCalculationJob

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| calcDefinitionId | TypeIDDescriptionRequired. The ID of the data processing engine definition record that you want to process. |
| rebateProgramIds | TypearrayDescriptionThe list of IDs of the rebate program records that the custom batch calculation job processes. |
| programRebateTypeIds | TypearrayDescriptionThe list of IDs of the program rebate type records that the custom batch calculation job processes. |
| rebateProgramPayoutPeriodIds | TypearrayDescriptionThe list of IDs of the rebate program payout period records that the custom batch calculation job processes. |
| rebateProgramMemberIds | TypearrayDescriptionThe list of IDs of the rebate program member records that the custom batch calculation job processes. |

## Outputs

| Output | Details |
| --- | --- |
| batchJobId | TypeIDDescriptionThe ID of the generated batch job record after the request is successful. |
| accepted | TypebooleanDescriptionIndicates whether the rebate batch calculation job is accepted. |

## Usage

**Sample Request**

```

```

**Sample Response**

```

```

## Code Examples

```
{
   "inputs":[{
      "calcDefinitionId": "0lcxx00004000002AAA",
      "rebateProgramIds": ["0htxx00004000002AAA","0htxx00004000002bAA"],
      "programRebateTypeIds": ["0htxx00004000002AAA","0htxx00004000002bAA"],
      "rebateProgramPayoutPeriodIds": ["0htxx00004000002AAA","0htxx00004000002bAA"],
      "rebateProgramMemberIds": ["0htxx00004000002AAA","0htxx00004000002bAA"]
   }]
}
```

```
{
   "errors":null,
   "isSuccess":true,
   "outputValues":{ 
      "batchJobId":"0ntxx00004000002AAA",
      }
}
```
