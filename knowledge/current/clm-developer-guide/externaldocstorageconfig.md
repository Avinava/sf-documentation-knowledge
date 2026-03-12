---
title: "ExternalDocStorageConfig"
domain: clm-developer-guide
topic: externaldocstorageconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:22.627Z
estimatedTokens: 626
keywords: [ExternalDocStorageConfig, configuration, admin, setup, specify, drive, path, named, credential, storing, documents, external, drives, Parent, File, collection, configure, document, storage, includes]
---

# ExternalDocStorageConfig

> Represents a collection of fields to configure the external document storage for an
      object. It includes details such as location, path, and named credentials. For example,
      OneDrive is defined as an External Document Storage and is associated with the Salesforce
      Contract object.

# ExternalDocStorageConfig

Represents a collection of fields to configure the external document storage for an object. It includes details such as location, path, and named credentials. For example, OneDrive is defined as an External Document Storage and is associated with the Salesforce Contract object.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DocumentPath | TypetextareaPropertiesCreate, UpdateDescriptionSpecifies the path from the root in the external storage where documents are stored. |
| ExternalDocStorageIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the ID of the external document storage. |
| NamedCredentialId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Named Credential associated with the External Document Storage Configuration. A named credential can be specified as an endpoint to simplify the setup of authenticated callouts.This field is a relationship field.Relationship NameNamedCredentialRelationship TypeLookupRefers ToNamedCredential |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Record Type associated with the Reference Object.This field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| StorageDriveType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the external document storage drive. For example, Microsoft OneDrive.Possible values are:MicrosoftOneDrive—Microsoft OneDriveThe default value is MicrosoftOneDrive. |
| TargetObject | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the object associated with the external document storage. For example, Document Template, Contract, All.Possible values are:AllContractDocumentTemplate—Document Template |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ExternalDocStorageConfigChangeEvent

Change events are available for the object.

ExternalDocStorageConfigFeed

Feed tracking is available for the object.

ExternalDocStorageConfigHistory

History is available for tracked fields of the object.

ExternalDocStorageConfigOwnerSharingRule

Sharing rules are available for the object.

ExternalDocStorageConfigShare

Sharing is available for the object.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ExternalDocStorageConfig
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<documentPath>/Salesforce/Contracts/</documentPath>
	<externalDocStorageIdentifier>ExternalDocIdTest1234</externalDocStorageIdentifier>
	<masterLabel>Contract_Contract_Lifecycle_Management</masterLabel>
	<namedCredential>Salesforce</namedCredential>
	<recordType>ContractLifecycleManagement</recordType>
	<storageDriveType>MicrosoftOneDrive</storageDriveType>
	<targetObject>Contract</targetObject>
</ExternalDocStorageConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<fullName>ExternalDocStorageConfigObjectPackage</fullName>
	<types>
		<members>Contract_Contract_Lifecycle_Management</members>
		<name>ExternalDocStorageConfig</name>
	</types>
	<version>57.0</version>
</Package>
```
