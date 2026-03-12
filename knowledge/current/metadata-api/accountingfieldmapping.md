---
title: "AccountingFieldMapping"
domain: metadata-api
topic: accountingfieldmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.295Z
estimatedTokens: 774
keywords: [AccountingFieldMapping, accounting, mappings, organize, data, bring, ledger, entry, records, Parent, File, Suffix, Directory, Location, Version]
---

# AccountingFieldMapping

> Represents the accounting field mappings to organize
			your data and bring it to ledger entry records.

# AccountingFieldMapping

Represents the accounting field mappings to organize your data and bring it to ledger entry records.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AccountingFieldMapping components have the suffix .accountingFieldMapping and are stored in the accountingFieldMappings folder.

## Version

AccountingFieldMapping components are available in API version 58.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| accountingModelConfig | Field TypestringDescriptionRequired.Record ID of the AccountingModelConfig record that the Field Mapping is associated with. |
| isForAllocationType | Field TypebooleanDescriptionReserved for internal use. |
| isForPaymentType | Field TypebooleanDescriptionReserved for internal use. |
| isForTransactionType | Field TypebooleanDescriptionReserved for internal use. |
| isProtected | Field TypebooleanDescriptionIndicates whether this component is protected (true) or not protected (false).Default value is false. |
| mappingBehavior | Field TypeMappingBehaviorType (enumeration of type string)DescriptionRequired.Specifies how the target’s field data is mapped from the source field only when the journal entry is created. When set to CurrentValue, Subledger reverses and replaces journal entries whose value differs from the value in sourceField.Valid values are:CurrentValuePointInTime |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for AccountingFieldMapping, which is defined when the AccountingFieldMapping is created. |
| sourceField | Field TypestringDescriptionThe API name of the field on the source object that is mapped to the target field. |
| targetField | Field TypestringDescriptionRequired.The API name of the field on the Transaction Journal record for this mapping. |

## Declarative Metadata Sample Definition

The following is an example of an AccountingFieldMapping component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AccountingFieldMapping xmlns="http://soap.sforce.com/2006/04/metadata">
	<accountingModelConfig>ModelConfigOne</accountingModelConfig>
	<fullName>FieldMappingOne</fullName>
	<masterLabel>FieldMappingOne</masterLabel>
	<isForAllocationType>true</isForAllocationType>
	<isForPaymentType>true</isForPaymentType>
	<isForTransactionType>true</isForTransactionType>
	<mappingBehavior>PointInTime</mappingBehavior>
	<sourceField>TransactionJournal.MappingTargetOne__c</sourceField>
	<targetField>MappingTargetOne__c</targetField>
	<isProtected>false</isProtected>
</AccountingFieldMapping>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/​metadata">
	<types>
		<members>FieldMappingOne</members>
		<name>AccountingFieldMapping</name>
	</types>
	<version>58.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
