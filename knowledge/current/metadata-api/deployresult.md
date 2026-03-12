---
title: "DeployResult"
domain: metadata-api
topic: deployresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:38.758Z
estimatedTokens: 4584
keywords: [DeployResult, Contains, information, success, failure, associated, deploy, call., DeployDetails, Note, DeployMessage, RunTestsResult, CodeCoverageResult, CodeCoverageWarning, RunTestFailure, FlowCoverageResult, FlowCoverageWarning, RunTestSuccess, CodeLocation]
---

# DeployResult

> Contains information about the success or failure of the associated deploy() call.

# DeployResult

Contains information about the success or failure of the associated deploy() call.

The asynchronous metadata call [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy().") returns a DeployResult object.

In API version 29.0, Salesforce moved several properties from the [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object to the DeployResult object to improve the process for getting information about deployments. For more information about these changes, see [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.").

For API version 29.0 and later, the DeployResult object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| id | ID | ID of the component being deployed. |
| canceledBy | ID | The ID of the user who canceled the deployment.This field is available in API version 30.0 and later. |
| canceledByName | string | The full name of the user who canceled the deployment.This field is available in API version 30.0 and later. |
| checkOnly | boolean | Indicates whether this deployment is used to check the validity of the deployed files without changing the organization (true) or not (false). A check-only deployment doesn’t deploy any components or change the organization in any way. |
| completedDate | dateTime | Timestamp for when the deployment process ended. |
| createdBy | ID | The ID of the user who created the deployment.This field is available in API version 30.0 and later. |
| createdByName | string | The full name of the user who created the deployment.This field is available in API version 30.0 and later. |
| createdDate | dateTime | Timestamp for when the deploy() call was received. |
| details | DeployDetails[] | Provides the details of a deployment that is in-progress or ended, if the includeDetails parameter is set to true in the checkDeployStatus() call. |
| done | boolean | Indicates whether the server finished processing the deploy() call for the specified id. |
| errorMessage | string | Message corresponding to the values in the errorStatusCode field, if any. |
| errorStatusCode | string | If an error occurred during the deploy() call, a status code is returned, and the message corresponding to the status code is returned in the errorMessage field.For a description of each StatusCode value, see StatusCode in the SOAP API Developer Guide. |
| ignoreWarnings | boolean | Optional. Defaults to false. Specifies whether a deployment continues even if the deployment generates warnings. Don’t set this argument to true for deployments to production organizations. |
| lastModifiedDate | dateTime | Timestamp of the last update for the deployment process. |
| numberComponentErrors | int | The number of components that generated errors during this deployment. |
| numberComponentsDeployed | int | The number of components deployed in the deployment process. Use this value with the numberComponentsTotal value to get an estimate of the deployment’s progress. |
| numberComponentsTotal | int | The total number of components in the deployment. Use this value with the numberComponentsDeployed value to get an estimate of the deployment’s progress. |
| numberTestErrors | int | The number of Apex tests that have generated errors during this deployment. |
| numberTestsCompleted | int | The number of completed Apex tests for this deployment. Use this value with the numberTestsTotal value to get an estimate of the deployment’s test progress. |
| numberTestsTotal | int | The total number of Apex tests for this deployment. Use this value with the numberTestsCompleted value to get an estimate of the deployment’s test progress. The value in this field isn’t accurate until the deployment has started running tests for the components being deployed. |
| numFiles | int | The total number of files included in this deployment.This field is available in API version 64.0 and later. |
| runTestsEnabled | boolean | Indicates whether Apex tests were run as part of this deployment (true) or not (false). Tests are either automatically run as part of a deployment or can be set to run in DeployOptions for the deploy() call. For information on when tests are automatically run, see Running Tests in a Deployment.This field is available in API version 30.0 and later. |
| rollbackOnError | boolean | Optional. Defaults to true. Indicates whether any failure causes a complete rollback (true) or not (false). If false, whatever set of actions can be performed without errors are performed, and errors are returned for the remaining actions. This parameter must be set to true if you’re deploying to a production organization. |
| startDate | dateTime | Timestamp for when the deployment process began. |
| stateDetail | string | Indicates which component is being deployed or which Apex test class is running. |
| status | DeployStatus (enumeration of type string) | Indicates the current state of the deployment. The valid values are:PendingInProgressFinalizingDeployFinalizingDeployFailedSucceededSucceededPartialFailedCancelingCanceled |
| success | boolean | Indicates whether the deployment was successful (true) or not (false). |
| zipSize | long | The size of the unzipped deployment folder in bytes.This field is available in API version 64.0 and later. |

## DeployDetails

These fields provide more information for the details field of the DeployResult object, if the includeDetails parameter is set to (true in the [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") call.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

While a deployment is still in-progress, the DeployDetails object only contains componentFailures data. After the deployment process finishes, the other fields populate with the data for the entire deployment.

| Name | Type | Description |
| --- | --- | --- |
| componentFailures | DeployMessage[] | One or more DeployMessage objects containing deployment errors for each component. |
| componentSuccesses | DeployMessage[] | One or more DeployMessage objects containing successful deployment details for each component. |
| retrieveResult | RetrieveResult | If the performRetrieve parameter was specified for the deploy() call, a retrieve() call is performed immediately after the deploy() process completes. This field contains the results of that retrieval. |
| runTestResult | RunTestsResult | If tests were run for the deploy() call, this field contains the test results. While a deployment is still in-progress, this field only contains error data. After the deployment process finishes, this field populates with the data for the entire deployment. |

For API version 28.0 and earlier, the DeployResult object has the following properties.

| Name | Type | Description |
| --- | --- | --- |
| id | ID | ID of the component being deployed. |
| messages | DeployMessage[] | Contains information about the success or failure of a deploy() call. |
| retrieveResult | RetrieveResult | If the performRetrieve parameter was specified for the deploy() call, a retrieve() call is performed immediately after the deploy() process completes. This field contains the results of that retrieval. |
| runTestResult | RunTestsResult | If tests were run for the deploy() call, this field contains the test results. |
| success | boolean | Indicates whether the deployment was successful (true) or not (false). |

## DeployMessage

Each DeployResult object contains one or more DeployMessage objects. Each DeployMessage object contains information about the deployment success or failure of a component in the deployment .zip file:

As of the Spring '20 release, only authenticated users can access DeployMessage objects.

| Name | Type | Description |
| --- | --- | --- |
| changed | boolean | If true, the component was changed as a result of this deployment. If false, the deployed component was the same as the corresponding component already in the organization. |
| columnNumber | int | A text file represents each component. If an error occurred during deployment, this field represents the column of the text file where the error occurred. |
| componentType | string | The metadata type of the component in this deployment.This field is available in API version 30.0 and later. |
| created | boolean | If true, the component was created as a result of this deployment. If false, the component was either deleted or modified as a result of the deployment. |
| createdDate | dateTime | The date and time when the component was created as a result of this deployment.This field is available in API version 30.0 and later. |
| deleted | boolean | If true, the component was deleted as a result of this deployment. If false, the component was either new or modified as a result of the deployment. |
| fileName | string | The name of the file in the .zip file used to deploy this component. |
| fullName | string | The full name of the component.Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call. |
| id | ID | ID of the component being deployed. |
| lineNumber | int | A text file represents each component. If an error occurred during deployment, this field represents the line number of the text file where the error occurred. |
| problem | string | If an error or warning occurred, this field contains a description of the problem that caused the compile to fail. |
| problemType | DeployProblemType (enumeration of type string) | Indicates the problem type. The problem details are tracked in the problem field. The valid values are:WarningErrorThis field is available in API version 18.0 and later. Before version 18.0, there was no distinction between warnings and errors. All problems were treated as errors and prevented a successful deployment. |
| success | boolean | Indicates whether the component was successfully deployed (true) or not (false). |

## RunTestsResult

A RunTestsResult object has the following properties

| Name | Type | Description |
| --- | --- | --- |
| apexLogId | string | The ID of an ApexLog object that is created at the end of a test run. The ApexLog object is created if there is an active trace flag on the user running an Apex test, or on a class or trigger being executed.This field is available in API version 35.0 and later. |
| codeCoverage | CodeCoverageResult[] | An array of one or more CodeCoverageResult objects that contains the details of the code coverage for the specified unit tests. |
| codeCoverageWarnings | CodeCoverageWarning[] | An array of one or more code coverage warnings for the test run. The results include both the total number of lines that could have been executed, as well as the number, line, and column positions of code that was not executed. |
| failures | RunTestFailure[] | An array of one or more RunTestFailure objects that contain information about the unit test failures, if there are any. |
| flowCoverage | FlowCoverageResult[] | An array of results from test runs that executed flows. This field is available in API version 44.0 and later. |
| flowCoverageWarnings | FlowCoverageWarning[] | An array of warnings generated by test runs that executed flows. This field is available in API version 44.0 and later. |
| numFailures | int | The number of failures for the unit tests. |
| numTestsRun | int | The number of unit tests that were run. |
| successes | RunTestSuccess[] | An array of one or more RunTestSuccess objects that contain information about successes, if there are any. |
| totalTime | double | The total cumulative time spent running tests, in milliseconds. This can be helpful for performance monitoring. |

## CodeCoverageResult

The [RunTestsResult](#runtestsresult) object contains this object. It contains information about whether or not the compile of the specified Apex and run of the unit tests was successful.

| Name | Type | Description |
| --- | --- | --- |
| dmlInfo | CodeLocation[] | For each class or trigger tested, for each portion of code tested, this property contains the DML statement locations, the number of times the code was executed, and the total cumulative time spent in these calls. This can be helpful for performance monitoring. |
| id | ID | The ID of the CodeLocation. The ID is unique within an organization. |
| locationsNotCovered | CodeLocation[] | For each class or trigger tested, if any code is not covered, the line and column of the code not tested, and the number of times the code was executed. |
| methodInfo | CodeLocation[] | For each class or trigger tested, the method invocation locations, the number of times the code was executed, and the total cumulative time spent in these calls. This can be helpful for performance monitoring. |
| name | string | The name of the class or trigger covered. |
| namespace | string | The namespace that contained the unit tests, if one is specified. |
| numLocations | int | The total number of code locations. |
| numLocationsNotCovered | int | The number of code locations not covered by any class or trigger. |
| soqlInfo | CodeLocation[] | For each class or trigger tested, the location of SOQL statements in the code, the number of times this code was executed, and the total cumulative time spent in these calls. This can be helpful for performance monitoring. |
| type | string | Do not use. In early, unsupported releases, used to specify class or package. |

## CodeCoverageWarning

The [RunTestsResult](#runtestsresult) object contains this object. It contains information about the Apex class which generated warnings.

This object has the following properties.

| Name | Type | Description |
| --- | --- | --- |
| id | ID | The ID of the CodeLocation. The ID is unique within an organization. |
| message | string | The message of the warning generated. |
| name | string | The namespace that contained the unit tests, if one is specified. |
| namespace | string | The namespace that contained the unit tests, if one is specified. |

## RunTestFailure

The [RunTestsResult](#runtestsresult) object returns information about failures during the unit test run.

This object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| id | ID | The ID of the class which generated failures. |
| message | string | The failure message. |
| methodName | string | The name of the method that failed. |
| name | string | The name of the class that failed. |
| namespace | string | The namespace that contained the class, if one was specified. |
| seeAllData | boolean | Indicates whether the test method has access to organization data (true) or not (false).This field is available in API version 33.0 and later. |
| stackTrace | string | The stack trace for the failure. |
| time | double | The time spent running tests for this failed operation, in milliseconds. This can be helpful for performance monitoring. |
| type | string | Do not use. In early, unsupported releases, used to specify class or package. |

## FlowCoverageResult

This object contains information about the flow version and the number of elements executed by the test run. This object is available in API version 44.0 and later.

| Name | Type | Description |
| --- | --- | --- |
| elementsNotCovered | string | List of elements in the flow version that weren’t executed by the test run. |
| flowId | string | The ID of the flow version. The ID is unique within an org. |
| flowName | string | The name of the flow that was executed by the test run. |
| flowNamespace | string | The namespace that contains the flow, if one is specified. |
| numElements | int | The total number of elements in the flow version. |
| numElementsNotCovered | int | The number of elements in the flow version that weren’t executed by the test run |
| processType | FlowProcessType (enumeration of type string) | The process type of the flow version. |

## FlowCoverageWarning

This object contains information about the flow version that generated warnings. This object is available in API version 44.0 and later.

| Name | Type | Description |
| --- | --- | --- |
| flowId | string | The ID of the flow version that generated the warning. |
| flowName | string | The name of the flow that generated the warning. If the warning applies to the overall test coverage of flows within your org, this value is null. |
| flowNamespace | string | The namespace that contains the flow, if one was specified. |
| message | string | The message of the warning that was generated. |

## RunTestSuccess

The [RunTestsResult](#runtestsresult) object returns information about successes during the unit test run.

This object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| id | ID | The ID of the class which generated the success. |
| methodName | string | The name of the method that succeeded. |
| name | string | The name of the class that succeeded. |
| namespace | string | The namespace that contained the unit tests, if one is specified. |
| seeAllData | boolean | Indicates whether the test method has access to organization data (true) or not (false).This field is available in API version 33.0 and later. |
| time | double | The time spent running tests for this operation. This can be helpful for performance monitoring. |

## CodeLocation

The [RunTestsResult](#runtestsresult) object contains this object in a number of fields.

This object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| column | int | The column location of the Apex tested. |
| line | int | The line location of the Apex tested. |
| numExecutions | int | The number of times the Apex was executed in the test run. |
| time | double | The total cumulative time spent at this location. This can be helpful for performance monitoring. |

## Related Topics

- checkDeployStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm)
- AsyncResult (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- numberComponentsTotal (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- numberComponentsDeployed (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- numberTestsTotal (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- numberTestsCompleted (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- DeployOptions (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- Running Tests in a Deployment (atlas.en-us.api_meta.meta/api_meta/meta_deploy_running_tests.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
