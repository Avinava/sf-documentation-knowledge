---
title: "ApexClass"
domain: tooling-api
topic: apexclass
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.159Z
keywords: [ApexClass, Supported, SOAP, API, Calls, REST, HTTP, Methods, Fields, Usage, Note]
---

# ApexClass

# ApexClass

Represents the saved copy of an Apex class. ApexClass uses the cached version of the class unless one is unavailable. Available from API version 28.0 or later.

To edit, save, or compile Apex classes, use [ApexClassMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexclassmember.htm "Represents the working copy of an Apex class for editing, saving, or compiling in a MetadataContainer.").

## Supported SOAP API Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(),  update(), upsert()

## Supported REST API HTTP Methods

GET, POST, PATCH, DELETE

## Fields

| Field Name | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe API version for this class. Every class has an API version specified at creation. |
| Body | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe data for the Apex class. |
| BodyCrc | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe CRC (cyclic redundancy check) of the class or trigger file |
| FullName | TypestringPropertiesGroup, NillableDescriptionThe full name of the associated object in the Metadata API. Use to avoid race conditions on create, before you have IDs.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsValid | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether any dependent metadata has changed since the class was last compiled (true) or not (false). The default value is false. |
| LengthWithoutComments | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLength of the class without comments. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedThis field is available in API version 38.0 and later. |
| Metadata | TypeApexClassMetadataPropertiesCreate, Nillable, UpdateDescriptionAn object that describes the version, status, and packaged versions of the corresponding Apex class.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the class.Limit: 255 characters |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There’s an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that aren’t Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There’s no namespace prefix for all other objects. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe current status of the Apex class. Valid values are:Active—The class is active.Deleted—The class is marked for deletion. This status is useful for managed packages, because it allows a class to be deleted when a managed package is updated.Inactive—This option is unused and is only supported for ApexTrigger. For more information, see the Metadata API Developer Guide. |
| SymbolTable | TypeSymbolTablePropertiesNillableDescriptionA complex type that represents all user-defined tokens in the Body of an ApexClass, ApexClassMember, or ApexTriggerMember and their associated line and column locations within the Body.This field is null if the symbol table can’t be created due to reasons such as:Another Apex compilation is in progress and holding a compile lockThe Apex class is in an invalid state and can’t compile successfully |

## Usage

To retrieve information about an Apex class, create an ApexClass object that references it. For example code, see [SOAP Calls](atlas.en-us.api_tooling.meta/api_tooling/intro_soap_overview.htm).

To edit, save, or compile Apex classes, use [ApexClassMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexclassmember.htm "Represents the working copy of an Apex class for editing, saving, or compiling in a MetadataContainer.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

If there Isn't a cached version of [SymbolTable](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_symboltable.htm "A complex type that represents all user-defined tokens in the Body of an ApexClass, ApexClassMember, or ApexTriggerMember and their associated line and column locations within the Body."), it’s compiled in the background and the query can take longer than expected. The SymbolTable returned from ApexClass doesn't contain references. To retrieve a SymbolTable with references, use [ApexClassMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexclassmember.htm "Represents the working copy of an Apex class for editing, saving, or compiling in a MetadataContainer.").

Although Apex classes and triggers have the Create and Update field properties, a runtime exception occurs if you try to create, update, or delete them using the API. Instead, use the Salesforce Extensions for Visual Studio Code or the Ant Migration Tool to create or update Apex classes or triggers. Apex classes and triggers can’t be created, edited, or deleted in a production org. See [Deploying Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_deploying.htm).