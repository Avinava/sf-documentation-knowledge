---
title: "DeployRequest"
domain: tooling-api
topic: deployrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.624Z
keywords: [DeployRequest, Supported, SOAP, Calls, REST, HTTP, Methods, Special, Access, Rules, Note, Fields]
---

# DeployRequest

# DeployRequest

Uses file representations of metadata components to create, update, or delete those components in a Salesforce org. This object is available in API version 49.0 and later.

## Supported SOAP Calls

describeSObjects(), query(), retrieve().

## Supported REST HTTP Methods

GET, HEAD, Query

## Special Access Rules

Your client application must be logged in with the Modify Metadata Through Metadata API Functions OR Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_modify_metadata_perm.htm) permission. Otherwise, enable the Modify All Data permission.

## Fields

| Field | Details |
| --- | --- |
| AllowMissingFiles | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf files that are specified in package.xml are not in the .zip file, specifies whether a deployment can still succeed (true) or not (false).Do not set this argument to true for deployment to production orgs.The default value is false. |
| AutoUpdatePackage | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf a file is in the .zip file but not specified in package.xml, specifies whether the file is automatically added to the package (true) or not (false). A retrieve() is issued with the updated package.xml that includes the .zip file. Do not set this argument to true for deployment to production orgs.The default value is false. |
| CanceledById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who canceled the deployment. This is a relationship field.Relationship NameCanceledByRelationship TypeLookup |
| ChangeSetName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the name of the change set for the deployment. |
| CheckOnly | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this deployment is being used to check the validity of the deployed files without making any changes in the organization (true) or not (false). A check-only deployment does not deploy any components or change the organization in any way.The default value is false. |
| CompletedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the deployment process ended. |
| DeployTestResults | TypeQueryResultPropertiesFilter, Nillable, SortDescriptionSpecifies the deployment test result. |
| ErrorMessage | TypestringPropertiesFilter, Nillable, SortDescriptionMessage corresponding to the values in the ErrorStatusCode field, if any. |
| ErrorStatusCode | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionIf an error occurred during the deploy() call, a status code is returned, and the message corresponding to the status code is returned in the ErrorMessagefield.For a description of each StatusCode value, see “StatusCode” in the SOAP API Developer Guide. |
| IgnoreWarnings | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether a deployment should continue even if the deployment generates warnings (true) or not (false).Do not set this argument to true for deployments to production organizations.The default value is false. |
| NumberComponentErrors | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of components that generated errors during this deployment. |
| NumberComponentsDeployed | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of components deployed in the deployment process. Use this value with the NumberComponentsTotal value to get an estimate of the deployment’s progress. |
| NumberComponentsTotal | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of components in the deployment. Use this value with the NumberComponentsDeployed value to get an estimate of the deployment’s progress. |
| NumberTestErrors | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of Apex tests that have generated errors during this deployment. |
| NumberTestsCompleted | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of completed Apex tests for this deployment. Use this value with the NumberTestsTotal value to get an estimate of the deployment’s test progress. |
| NumberTestsTotal | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of Apex tests for this deployment. Use this value with the NumberTestsCompleted value to get an estimate of the deployment’s test progress. The value in this field is not accurate until the deployment has started running tests for the components being deployed. |
| PurgeOnDelete | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether to purge on delete (true) or not (false).The default value is false. |
| RollbackOnError | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether any failure causes a complete rollback (true) or not (false). If false, whatever set of actions can be performed without errors are performed, and errors are returned for the remaining actions.This parameter must be set to true if you are deploying to a production organization.The default value is false. |
| RunTestsEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether Apex tests were run as part of this deployment (true) or not (false). Tests are either automatically run as part of a deployment or can be set to run in DeployOptions for the deploy() call. For information on when tests are automatically run, see Running Tests in a Deployment.The default value is false. |
| SinglePackage | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether to deploy as a single package (true) or not (false)The default value is false. |
| StartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the deployment process began. |
| StateDetail | TypestringPropertiesFilter, Nillable, SortDescriptionIndicates which component is being deployed or which Apex test class is running. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe current state of the deployment. Possible values are: CanceledCancelingFailedInProgressPendingSucceededSucceededPartial |
| TestLevel | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates which tests to run. Possible values are:NoTestRunRunAllTestsInOrgRunLocalTestsRunSpecifiedTests |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe type of deployment to perform. Possible values are:Api (default)Changeset |