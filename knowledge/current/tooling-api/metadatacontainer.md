---
title: "MetadataContainer"
domain: tooling-api
topic: metadatacontainer
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.261Z
keywords: [MetadataContainer, Supported, SOAP, API, Calls, REST, HTTP, Methods, Special, Access, Rules, Fields, Usage, Note, See]
---

# MetadataContainer

# MetadataContainer

Manages working copies of ApexClassMember, ApexTriggerMember, ApexPageMember, and ApexComponentMember objects, including collections of objects to be deployed together.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

Query, GET, POST, PATCH, DELETE

## Special Access Rules

As of the Spring '20 release, to access MetadataContainer you must have the View All Data user permission and either the Author Apex user permission or the Customize Application user permission.

## Fields

| Field Name | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the MetadataContainer. If a container with the same name already exists, an error is reported on create() or POST.This field is required. |

## Usage

Use a MetadataContainer as a package for your tool’s workspace. As a user works in the tool, update the [ApexClassMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexclassmember.htm "Represents the working copy of an Apex class for editing, saving, or compiling in a MetadataContainer."), [ApexTriggerMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextriggermember.htm "Represents the working copy of an Apex trigger for editing, saving, or compiling in a MetadataContainer."), [ApexPageMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexpagemember.htm "Represents the working copy of a Visualforce page for editing, saving, or compiling in a MetadataContainer."), and [ApexComponentMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcomponentmember.htm "Represents the working copy of a Visualforce component for editing, saving, or compiling in a MetadataContainer.") objects in the MetadataContainer and use a [ContainerAsyncRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_containerasyncrequest.htm "Allows you to compile and asynchronously deploy a MetadataContainer object to your organization.") object to save and deploy changes to the current organization.

A MetadataContainer can be reused, but container members can’t.

-   When a ContainerAsyncRequest completes successfully, the MetadataContainerId field on all container members is changed from the ID of the MetadataContainer to the ID of the ContainerAsyncRequest. At this point, container members can no longer be modified or deployed, and can’t be queried via the MetadataContainer; you have to query the ContainerAsyncRequest to see what was deployed.
-   If the deployment fails, container members remain on the MetadataContainer and can still be modified until they are successfully deployed on another ContainerAsyncRequest. The MetadataContainerId field on the completed (failed deployment) ContainerAsyncRequest is set to the ID of the MetadataContainer, so you can have multiple completed ContainerAsyncRequests on a single MetadataContainer.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Deleting a MetadataContainer deletes all objects that reference it.

#### See Also

-   [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/ "Metadata API Developer Guide - HTML (New Window)")