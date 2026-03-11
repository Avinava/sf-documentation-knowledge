---
title: "Deploy Metadata with Apex Testing Using REST"
domain: metadata-api
topic: deploy-metadata-with-apex-testing-using-rest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:54.413Z
keywords: [Deploy, Metadata, Apex, Testing, REST, deployOptions, Parameters, Note, Request, Body, Response, deployResult]
---

# Deploy Metadata with Apex Testing Using REST

# Deploy Metadata with Apex Testing Using REST

Deploy using the deployRequest REST resource to initiate a request that handles all operations for the deployment.

You can deploy or retrieve up to 10,000 files at once. The maximum size of the deployed or retrieved .zip file is 39 MB. If the files are uncompressed in an unzipped folder, the size limit is 600 MB or 629,145,600 bytes. The size limit in bytes is calculated as 600 x 1024 x 1024.

URI

https://host/services/data/vXX.0/metadata/deployRequest

Formats

JSON

HTTP Method

POST

Authentication

Authorization: Bearer token

## deployOptions Parameters

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

To review the default testing behavior for deployments and approaches that can save time while still enabling you to meet testing requirements, see [Running Tests in a Deployment](atlas.en-us.api_meta.meta/api_meta/meta_deploy_running_tests.htm#meta_deploy_running_tests) and [Run the Same Tests in Sandbox and Production Deployments](atlas.en-us.api_meta.meta/api_meta/meta_deploy_run_local_tests.htm#meta_deploy_run_local_tests "Starting in API version 34.0, you can choose which tests to run in your development environment, such as only local tests, to match the tests run in production. In earlier versions, if you enabled tests in your sandbox deployment, you couldn’t exclude managed package tests.").

| Parameter | Description |
| --- | --- |
| allowMissingFiles | Boolean. If files that are specified in package.xml aren’t in the .zip file, specifies whether a deployment can still succeed. Don’t set this argument for deployment to production orgs. |
| autoUpdatePackage | Reserved for future use. |
| checkOnly | Boolean. Defaults to false. Set to true to perform a test deployment (validation) of components without saving the components in the target org. A validation enables you to verify the results of tests that would be generated in a deployment, but doesn’t commit any changes. After a validation finishes with passing tests, it can qualify for deployment without rerunning tests. See Deploy a Recently Validated Component Set Without Tests. |
| ignoreWarnings | Boolean. Indicates whether a deployment is allowed to complete successfully despite one or more warnings (true) or not (false). Defaults to false.The DeployMessage object for a warning contains the following values:problemType—Warningproblem—The text of the warning.If a warning occurs and ignoreWarnings is set to true, the success field in DeployMessage is true. If ignoreWarnings is set to false, success is set to false and the warning is treated like an error. |
| performRetrieve | Reserved for future use. |
| purgeOnDelete | Boolean. If true, the deleted components in the destructiveChanges.xml manifest file aren't stored in the Recycle Bin. Instead, they become immediately eligible for deletion.This option only works in Developer Edition or sandbox orgs. It doesn't work in production orgs. |
| rollbackOnError | Boolean. Indicates whether any failure causes a complete rollback (true) or not (false). If false, whatever actions can be performed without errors are performed, and errors are returned for the remaining actions. This parameter must be set to true if you’re deploying to a production org. The default is false. |
| runTests | String[]. A list of Apex tests to run during deployment. Specify the class name, one name per instance. The class name can also specify a namespace with a dot notation. For more information, see Running a Subset of Tests in a Deployment.To use this option, set testLevel to RunSpecifiedTests. |
| singlePackage | Boolean. Indicates whether the specified .zip file points to a directory structure with a single package (true) or a set of packages (false). |
| testLevel | TestLevel (enumeration of type string). Optional. Specifies which tests are run as part of a deployment. The test level is enforced regardless of the types of components that are present in the deployment package. Valid values are:NoTestRun—No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial organizations. This test level is the default for development environments.RunSpecifiedTests—Only the tests that you specify in the runTests option are run. Code coverage requirements differ from the default coverage requirements when using this test level. Each class and trigger in the deployment package must be covered by the executed tests for a minimum of 75% code coverage. This coverage is computed for each class and triggers individually and is different than the overall coverage percentage.RunRelevantTests (beta)—Only tests relevant to the deployment payload are run. Salesforce automatically identifies the relevant tests based on an analysis of the deployment payload and the payload dependencies. For fine-grained control, you can annotate test classes so that they either run regardless of the deployment payload, or run when modified, referenced components are included in the deployment. See @IsTest Annotation in the Apex Developer Guide. Each class and trigger in the deployment package must be covered by the executed tests for a minimum of 75% code coverage. This coverage is computed for each class and trigger individually and is different from the overall coverage percentage.RunLocalTests—All tests in your org are run, except the ones that originate from installed managed and unlocked packages. This test level is the default for production deployments that include Apex classes or triggers.RunAllTestsInOrg—All tests are run. The tests include all tests in your org, including tests of managed packages.If you don’t specify a test level, the default test execution behavior is used. See Running Tests in a Deployment.Apex tests that run as part of a deployment always run synchronously and serially. |

## Request Body: Deploy Metadata

When you deploy metadata, your request includes both the deployment parameters and the .zip file containing the component directories and the manifest.

This example POST request creates a deployRequest object that initiates a deployment.

-   The POST request header is set to Content-Type: multipart/form-data and defines a boundary delimiter to encapsulate different subparts of the request. In this example, the boundary delimiter is \--------------------------BOUNDARY.
-   The boundary delimiter precedes each subpart, and the delimiter itself is preceded by two extra \--. In the first subpart, a JSON request creates a deployOptions child object for passing the deployment parameters.
-   The second subpart specifies the .zip file that contains the manifest and the component directories.
-   The second subpart ends with the boundary delimiter preceded by two \--. The delimiter is followed by another two \--, which indicate the end of the request body.

```

```

## Response Body: Deploy Metadata

When an HTTP status code of 201 (Created) is returned, your request has succeeded and resulted in the creation of a deployment that is being processed.

```

```

## deployResult Parameters

| Parameter |  | Description |
| --- | --- | --- |
| id |  | ID. ID of the component being deployed. |
| canceledBy |  | ID. The ID of the user who canceled the deployment. |
| canceledByName |  | String. The full name of the user who canceled the deployment. |
| checkOnly |  | Boolean. Indicates whether this deployment is used to check the validity of the deployed files without changing the org (true) or not (false). A check-only deployment doesn’t deploy any components or change the organization in any way. |
| completedDate |  | DateTime. Timestamp for when the deployment process ended. |
| createdBy |  | ID. The ID of the user who created the deployment. |
| createdByName |  | String. The full name of the user who created the deployment. |
| createdDate |  | DateTime. Timestamp for when the deploy request was received. |
| details |  | DeployDetails. Provides the details of a deployment that is in-progress or ended if ?includeDetails=true is added as a query to the GET request. |
| done |  | Boolean. Indicates whether the server finished processing the deploy request for the specified id. |
| errorMessage |  | String. Message corresponding to the values in the errorStatusCode field, if any. |
| errorStatusCode |  | String. If an error occurred during the deploy request, a status code is returned, and the message corresponding to the status code is returned in errorMessagefield. |
| ignoreWarnings |  | Boolean. Optional. Defaults to false. Specifies whether a deployment continues even if the deployment generates warnings. Don’t set this argument to true for deployments to production organizations. |
| lastModifiedDate |  | DateTime. Timestamp of the last update for the deployment process. |
| numberComponentErrors |  | Int. The number of components deployed in the deployment process. Use this value with the numberComponentsTotal value to get an estimate of the deployment’s progress. |
| numberComponentsTotal |  | Int. The total number of components in the deployment. Use this value with the numberComponentsDeployed value to get an estimate of the deployment’s progress. |
| numberTestErrors |  | Int. The number of Apex tests that have generated errors during this deployment. |
| numberTestsCompleted |  | The number of completed Apex tests for this deployment. Use this value with the numberTestsTotal value to get an estimate of the deployment’s test progress. |
| numberTestsTotal |  | Int. The total number of Apex tests for this deployment. Use this value with the numberTestsCompleted value to get an estimate of the deployment’s test progress. The value in this field isn’t accurate until the deployment has started running tests for the components being deployed. |
| runTestsEnabled |  | Boolean. Indicates whether Apex tests were run as part of this deployment (true) or not (false). Tests are either automatically run as part of a deployment or can be set to run in the deployOptions child object. |
| rollbackOnError |  | Boolean. Defaults to true. Indicates whether any failure causes a complete rollback (true) or not (false). If false, whatever set of actions can be performed without errors are performed, and errors are returned for the remaining actions. This parameter must be set to true if you’re deploying to a production org. |
| startDate |  | DateTime. Timestamp for when the deployment process began. |
| stateDetail |  | String. Indicates which component is being deployed or which Apex test class is running. |
| status |  | Indicates the current state of the deployment. The valid values are:PendingInProgressFinalizingDeployFinalizingDeployFailedSucceededSucceededPartialFailedCancelingCanceled |
| success |  | Boolean. Indicates whether the deployment was successful (true) or not (false). |