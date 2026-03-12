---
title: "Check the Status of Your Deployment Using REST Resources"
domain: metadata-api
topic: check-the-status-of-your-deployment-using-rest-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:41.872Z
estimatedTokens: 200
keywords: [Check, Status, Deployment, REST, Resources, passing, URL, similar, original, includes, progress, Deploy, Metadata]
---

# Check the Status of Your Deployment Using REST Resources

> Check the status of your deployment by using passing the deployment request ID in the
  URL The response body is similar to that returned by the original deployment request, but it
  includes information about the deployment in progress.

# Check the Status of Your Deployment Using REST Resources

Check the status of your deployment by using passing the deployment request ID in the URL The response body is similar to that returned by the original deployment request, but it includes information about the deployment in progress.

URI

https://host/services/data/vXX.0/metadata/deployRequest/deployRequestId

To include more details in the response, use:

https://host/services/data/vXX.0/metadata/deployRequest/deployRequestId?includeDetails=true

Formats

JSON

HTTP Method

GET

Authentication

Authorization: Bearer token

## Response Body: Deploy Metadata

The following example shows the response when ?includeDetails=true is added as a query to the GET request.

```

```

Expect an HTTP status code of 200 (OK) to be returned.

## Code Examples

```
{ 
	       "id" : "0Afxx00000000lWCAQ"
	       "url" : "https://host/services/data/vXX.0/metadata/deployRequest/0Afxx00000000lWCAQ?includeDetails=true",
        "deployResult" :
            {
            "checkOnly" : "false",
            "ignoreWarnings" : "false",
            "rollbackOnError" : "false",
            
            "status : "InProgress",
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
                    "runTestResults" : {
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
            "createdByName" : "stephanie stevens", 
            "canceledBy" : null,
            "canceledByName" : null,            
            "isRunTestsEnabled" : null
            }

       "deployOptions": {    
             "allowMissingFiles" : false,
             "autoUpdatePackage" : false,
             "checkOnly" : true,
             "ignoreWarnings" : false,
             "performRetrieve" : false,
             "purgeOnDelete" : false,
             "rollbackOnError" : false,
             "runTests" : null,
             "singlePackage" : true,
             "testLevel" : "RunAllTestsInOrg"
             }
     }
```
