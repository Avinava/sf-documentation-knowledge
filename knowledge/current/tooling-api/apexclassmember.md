---
title: "ApexClassMember"
domain: tooling-api
topic: apexclassmember
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.740Z
estimatedTokens: 1177
keywords: [ApexClassMember, working, copy, Apex, editing, saving, compiling, MetadataContainer, SOAP, API, Calls, REST, HTTP, Special, Access]
---

# ApexClassMember

> Represents the working copy of an Apex class for editing, saving, or
   compiling in a MetadataContainer.

# ApexClassMember

Represents the working copy of an Apex class for editing, saving, or compiling in a MetadataContainer.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

Query, GET, POST, PATCH, DELETE

## Special Access Rules

As of the Spring '20 release, to access ApexClassMember you must have both the View All Data and the Author Apex user permissions.

## Fields

| Field Name | Details |
| --- | --- |
| Body | TypestringPropertiesCreate, UpdateDescriptionThe data for the Apex class.The Body field is the only field you can update() or PATCH. |
| Content | TypestringPropertiesNoneDescriptionA string representation of ApexClassMetadata that lists the version, status, and packaged versions of the corresponding Apex class. |
| ContentEntityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA reference to an Apex class.There can be only one ContentEntityId per ApexClassMember, otherwise, an error is reported.This field is required if FullName is not specified. |
| FullName | TypestringPropertiesGroup, NillableDescriptionThe full name of the associated object in the Metadata API. Use to avoid race conditions on create, before you have IDs.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance.This field is required if ContentEntityId is not specified. |
| LastSyncDate | TypedateTimePropertiesFilter, SortDescriptionThe date and time that this ApexClassMember Body was replicated from the underlying Apex class. When you deploy a MetadataContainer, this value is compared with the LastModifiedDate of the underlying Apex class. If LastSyncDate is older than LastModifiedDate, the deployment fails with an error. |
| Metadata | TypeApexClassMetadataPropertiesNoneDescriptionAn object that describes the version, status, and packaged versions of the corresponding Apex class.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| MetadataContainerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA reference to a MetadataContainer or ContainerAsyncRequest object.As part of a successful deployment, this field is reset from the ID of the deployed MetadataContainer to the ID of the corresponding ContainerAsyncRequest object.This field is required. |
| SymbolTable | TypeSymbolTablePropertiesNillableDescriptionA complex type that represents all user-defined tokens in the Body of an ApexClass, ApexClassMember, or ApexTriggerMember and their associated line and column locations within the Body.This field is null if the symbol table can’t be created. A symbol table can’t be created if the content referenced by the ContentEntityId field doesn’t use a symbol table. Compiler errors for the last deployment of the MetadataContainer in the MetadataContainerId field also prevent a symbol table from being created. |

## Usage

To edit, save, or compile an Apex class, create an ApexClassMember object that references it.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Once an ApexClassMember is successfully deployed in a [MetadataContainer](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm "Manages working copies of ApexClassMember, ApexTriggerMember, ApexPageMember, and ApexComponentMember objects, including collections of objects to be deployed together."), the MetadataContainerId is changed to the ID of the [ContainerAsyncRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_containerasyncrequest.htm "Allows you to compile and asynchronously deploy a MetadataContainer object to your organization."), and the ApexClassMember can’t be modified or reused.

Apex classes are often dependent on each other for functionality. For example, a method in one class can call a method in another class. If source file A is dependent on modified source file B and you try to save and compile source file A before you’ve saved the changes to source file B, the compiler throws an error. To successfully save and compile a group of related source files, put the corresponding ApexClassMember and ApexTriggerMember objects in a single MetadataContainer object.

Each ApexClassMember object can only refer to a single MetadataContainer object. Multiple ApexClassMember objects can refer to the same MetadataContainer object.

## Related Topics

- MetadataContainer (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm)
- ContainerAsyncRequest (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_containerasyncrequest.htm)
- SymbolTable (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_symboltable.htm)
