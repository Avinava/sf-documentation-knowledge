---
title: "ContainerAsyncRequest"
domain: tooling-api
topic: containerasyncrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.911Z
estimatedTokens: 885
keywords: [ContainerAsyncRequest, Allows, compile, asynchronously, deploy, MetadataContainer, organization., Supported, SOAP, API, Calls, REST, HTTP, Special, Access, Rules, Fields, Usage]
---

# ContainerAsyncRequest

> Allows you to compile and asynchronously deploy a MetadataContainer
			object to your organization.

# ContainerAsyncRequest

Allows you to compile and asynchronously deploy a MetadataContainer object to your organization.

## Supported SOAP API Calls

create(), describeSObjects(), query(), retrieve()

## Supported REST API HTTP Methods

Query, GET, POST

## Special Access Rules

As of the Spring '20 release, to access ContainerAsyncRequest you must have both the View All Data and Customize Application user permissions.

## Fields

| Field Name | Details |
| --- | --- |
| DeployDetails | TypeDeployDetailsPropertiesNillableDescriptionProvides detailed XML for any compile errors reported during an asynchronous request. Includes componentFailures. Replaces the JSON field CompilerErrors in Tooling API version 31.0 and later. |
| ErrorMsg | TypetextareaPropertiesNillableDescriptionErrors reported during an asynchronous request. |
| IsCheckOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the asynchronous request compiles the code without making any changes to the organization (true) or compiles and saves the code (false).This field is required.You can compile without saving but you can’t save without compiling. |
| IsRunTests | TypebooleanPropertiesNoneDescriptionReserved for future use. |
| MetadataContainerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of a MetadataContainer object.Specify a MetadataContainerId or a MetadataContainerMemberId, but not both. |
| MetadataContainerMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of an ApexClassMember, ApexTriggerMember, ApexPageMember or ApexComponentMember object.Specify a MetadataContainerId or a MetadataContainerMemberId, but not both. |
| State | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe state of the request. Valid values are:Queued—the job is in the queue.Invalidated—Salesforce canceled the job because the results might not be valid. This state occurs if someone changes the container members while IsCheckOnly=true, or if a newer compile request is added to the queue.Completed—the compilation or deployment finished. The SymbolTable fields for the specified object(s) were successfully updated. If IsCheckOnly is false, the Body for each object was saved and the MetadataContainerId field for each object was reset from the ID of the deployed MetadataContainer to the ID of the corresponding ContainerAsyncRequest object.Failed—the compilation or deployment failed for the reasons stated in the CompilerError field.Error—an unexpected error occurred. The messages in the ErrorMsg field can be provided to Salesforce support if the issue persists.Aborted—use this value to delete a queued deployment.This field is required. |

## Usage

When you deploy a ContainerAsyncRequest, you must specify whether to save the compiled entities:

-   To compile entities without saving, set the request to IsCheckOnly=true. This option is only supported if a MetadataContainerMember is specified. A single MetadataContainerMemberId can’t be compiled without saving.
-   To compile and save entities to your organization, set the request to IsCheckOnly=false.

If the compile succeeds, the SymbolTable field is updated on each object in the specified MetadataContainer. If the save or compile fails and a SymbolTable field cannot be updated, the field is cleared. If there is an outstanding save request, all updates, inserts, and deployments fail.

To terminate a queued deployment, set the State field to Aborted.

## Related Topics

- DeployDetails (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_deploydetails.htm)
- MetadataContainer (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm)
- ApexClassMember (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexclassmember.htm)
- ApexTriggerMember (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextriggermember.htm)
- ApexPageMember (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexpagemember.htm)
- ApexComponentMember (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcomponentmember.htm)
