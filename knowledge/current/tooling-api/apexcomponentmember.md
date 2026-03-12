---
title: "ApexComponentMember"
domain: tooling-api
topic: apexcomponentmember
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.587Z
estimatedTokens: 1108
keywords: [ApexComponentMember, Represents, working, copy, Visualforce, component, editing, saving, compiling, MetadataContainer., Supported, SOAP, API, Calls, Special, Access, Rules, REST, HTTP, Fields]
---

# ApexComponentMember

> Represents the working copy of a Visualforce component for editing,
   saving, or compiling in a MetadataContainer.

# ApexComponentMember

Represents the working copy of a Visualforce component for editing, saving, or compiling in a MetadataContainer.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, to access ApexComponentMember, users must have both the View All Data and Customize Application permissions.

## Supported REST API HTTP Methods

Query, GET, POST, PATCH, DELETE

## Fields

| Field Name | Details |
| --- | --- |
| Body | TypestringPropertiesCreate, UpdateDescriptionThe data for the Visualforce component.The Body field is the only field you can update() or PATCH. |
| Content | TypestringPropertiesNoneDescriptionA string representation of ApexComponentMetadata that lists the version, status, and packaged versions of the corresponding Visualforce component. |
| ContentEntityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA reference to a Visualforce component.There can be only one ContentEntityId per ApexComponentMember, otherwise, an error is reported.This field is required if FullName is not specified. |
| FullName | TypestringPropertiesGroup, NillableDescriptionThe full name of the associated object in the Metadata API. Use to avoid race conditions on create, before you have IDs.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance.This field is required if ContentEntityId is not specified. |
| LastSyncDate | TypedateTimePropertiesFilter, SortDescriptionThe date that this ApexComponentMember Body was replicated from the underlying entity. When you deploy a MetadataContainer, this value is compared with the LastModifiedDate of the underlying Visualforce component. If LastSyncDate is older than LastModifiedDate, the deployment fails with an error. |
| Metadata | TypeApexComponentMetadataPropertiesNoneDescriptionAn object that describes the version, status, and packaged versions of the corresponding Visualforce component.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| MetadataContainerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA reference to a MetadataContainer or ContainerAsyncRequest object.As part of a successful deployment, this field is reset from the ID of the deployed MetadataContainer to the ID of the corresponding ContainerAsyncRequest object.This field is required. |

## Usage

To edit, save, or compile a Visualforce component, create an ApexComponentMember object that references it. To create a Visualforce component, use the REST API or the Metadata API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Once an ApexComponentMember is successfully deployed in a [MetadataContainer](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm "Manages working copies of ApexClassMember, ApexTriggerMember, ApexPageMember, and ApexComponentMember objects, including collections of objects to be deployed together."), the MetadataContainerId is changed to the ID of the [ContainerAsyncRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_containerasyncrequest.htm "Allows you to compile and asynchronously deploy a MetadataContainer object to your organization."), and the ApexComponentMember can’t be modified or reused.

Visualforce pages and components are often dependent on each other for functionality. To successfully save and compile a group of related source files, put the corresponding ApexComponentMember and ApexPageMember objects in a single MetadataContainer object.

Each ApexComponentMember object can only refer to a single MetadataContainer object. Multiple ApexComponentMember objects can refer to the same MetadataContainer object.

#### See Also

-   [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/ "REST API Developer Guide - HTML (New Window)")

-   [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/ "Metadata API Developer Guide - HTML (New Window)")

## Related Topics

- MetadataContainer (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm)
- ContainerAsyncRequest (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_containerasyncrequest.htm)
