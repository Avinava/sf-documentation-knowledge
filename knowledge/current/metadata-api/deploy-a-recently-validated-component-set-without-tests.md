---
title: "Deploy a Recently Validated Component Set Without Tests"
domain: metadata-api
topic: deploy-a-recently-validated-component-set-without-tests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:41.883Z
estimatedTokens: 645
keywords: [Deploy, Recently, Validated, Component, Tests, components, production, less, time, skipping, execution, Apex, testing, requirements, already]
---

# Deploy a Recently Validated Component Set Without Tests

> You can deploy components to production in less time by skipping the execution of Apex
  tests when testing requirements have already been met.

# Deploy a Recently Validated Component Set Without Tests

You can deploy components to production in less time by skipping the execution of Apex tests when testing requirements have already been met.

-   The components have been validated successfully for the target environment within the last 10 days.
-   As part of the validation, Apex tests in the target org have passed.
-   Code coverage requirements are met.
    -   If all tests in the org or all local tests are run, overall code coverage is at least 75%, and Apex triggers have some coverage.
    -   If specific tests are run with the RunSpecifiedTests test level, each class and trigger to be deployed is covered by at least 75% individually.

This operation is equivalent to performing a quick deployment of a recent validation on the Deployment Status page in the Salesforce user interface.

To validate but not deploy a set of components when using the deployRequest resource, set the checkOnly parameter of deployOptions to true. Note the deployment request ID in the response. Use this ID (associated with a successful validation) later to deploy the component set without repeating the validation.

URI

https://host/services/data/vXX.0/metadata/deployRequest/validatedDeployRequestId

Formats

JSON

HTTP Method

POST

Authentication

Authorization: Bearer token

## Request Body: Deploy a Recently Validated Component Set Without Tests

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The HTTP method for deploying a recently validated component set is POST, not PATCH. Using PATCH would create a new deployment.

```

```

If there is no corresponding deployment package that meets the validation requirements, you receive an HTTP status code of 404 (Not Found). If the validated deployment package is found, the HTTP status code returned is 201 (Created).

## Response Body: Deploy a Recently Validated Component Set Without Tests

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The response body from the deployment without validation request includes a new request ID, because it is separate from the earlier request for a validation-only deployment.

```

```

When an HTTP status code of 201 (Created) is returned, your request has succeeded and resulted in the creation of a deployment that is being processed. In the preceding example response body, the ID of the validation-only deployment request is 0Afxx00000000lWCAQ; the ID of the deployment without validation request is 0Afxx00000000lWMEM.

## Code Examples

```
{ 
       "validatedDeployRequestId" : "0Afxx00000000lWCAQ"
    }
```

```
{ 
       "validatedDeployRequestId" : "0Afxx00000000lWCAQ"
       "id" : "0Afxx00000000lWMEM"
       "url" : "https://host/services/data/vXX.0/metadata/deployRequest/0Afxx00000000lWMEM",
       "deployOptions" :
             {
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
