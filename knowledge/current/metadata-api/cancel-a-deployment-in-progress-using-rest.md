---
title: "Cancel a Deployment in Progress Using REST"
domain: metadata-api
topic: cancel-a-deployment-in-progress-using-rest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:41.869Z
estimatedTokens: 307
keywords: [Cancel, Deployment, Progress, REST, cancellation, that's, already, patching, status, ongoing, deployRequest, processed, asynchronously, API, versions]
---

# Cancel a Deployment in Progress Using REST

> You can request a cancellation of a deployment that's already in progress. Make the
  cancellation request by patching the status of an ongoing deployRequest. The cancellation is processed asynchronously. For API versions 65.0
   and higher, deployments with a status of Finalizing Deploy, can't be
   cancelled. For API versions below 65.0, attempts to cancel a deployment may fail if the
   deployment has started committing data. Alternatively, it's possible that the cancellation will
   succeed, but data from the deployment is also committed.

# Cancel a Deployment in Progress Using REST

You can request a cancellation of a deployment that's already in progress. Make the cancellation request by patching the status of an ongoing deployRequest. The cancellation is processed asynchronously. For API versions 65.0 and higher, deployments with a status of Finalizing Deploy, can't be cancelled. For API versions below 65.0, attempts to cancel a deployment may fail if the deployment has started committing data. Alternatively, it's possible that the cancellation will succeed, but data from the deployment is also committed.

URI

https://host/services/data/vXX.0/metadata/deployRequest/deployRequestId

Formats

JSON

HTTP Method

PATCH

Authentication

Authorization: Bearer token

## Request Body: Request Deployment Cancellation

The JSON request body for a deployment cancellation includes a PATCH to the status of the original deployRequest.

```

```

## Response Body: Request Deployment Cancellation

Because the cancellation request is processed asynchronously, the status shown in the response body can be either Canceling or Canceled.

```

```

When an HTTP status code of 202 (Accepted) is returned, your cancellation request is in progress or successful.

## Code Examples

```
{ 
     "deployResult":
           {
           "status" : "Canceling"
           }
    }
```

```
{ 
      	"id" : "0Afxx00000000lWCAQ"
      	"url" : “https://host/services/data/vXX.0/metadata/deployRequest/0Afxx00000000lWCAQ",
       "deployResult":    
             {
             "checkOnly" : "false",
             "ignoreWarnings" : "false",
             "rollbackOnError" : "false",             
             "status : "Canceling",  // or Canceled
             "numberComponentsDeployed" : "10",
             "numberComponentsTotal" : "1032",
             "numberComponentErrors" : "0",
             "numberTestsCompleted" : "45",
             "numberTestsTotal" : "135",
             "numberTestErrors" : "0",
             "details" :  { 
                "componentFailures" : [],
                "componentSuccesses" : [],
                      "retrieveResult" : null,
                      "runTestResults” : {
                         "numRun" : 0,
                         "successes" : [ … ],
                         "failures" : []
                 	   	}             
                },

                "createdDate" : "2017-10-10T08:22Z",
                "startDate" : "2017-10-10T08:22Z",
                "lastModifiedDate" : "2017-10-10T08:44Z",
                "completedDate" : "2017-10-10T08:44Z",
                "errorStatusCode" : null,
                "errorMessage" : null,
                "stateDetail" : "Processing Type: Apex Component",
                "createdBy" : "005xx0000001Sv1m",
                "createdByName" : "steve stevens",
                "canceledBy" : null, 
                "canceledByName" : null,
                "isRunTestsEnabled" : null
                }
       }
```
