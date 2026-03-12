---
title: "DataObjectSearchIndexConf"
domain: metadata-api
topic: dataobjectsearchindexconf
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.202Z
estimatedTokens: 693
keywords: [DataObjectSearchIndexConf, source, Data, model, DMO, Search, Answers, holds, index, uses, searching, records, Parent, File, Suffix]
---

# DataObjectSearchIndexConf

> Represents the source Data 360 data model object (DMO)
			for Search Answers and holds the search index that Search Answers uses when searching
			DMO records.

# DataObjectSearchIndexConf

Represents the source Data 360 data model object (DMO) for Search Answers and holds the search index that Search Answers uses when searching DMO records.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataObjectSearchIndexConf components have the suffix .dataObjectSearchIndexConf and are stored in the dataObjectSearchIndexConfs folder.

## Version

DataObjectSearchIndexConf components are available in API version 63.0 and later.

## Special Access Rules

To access this metadata type, you must have the Customize Application user permission. The Salesforce org must have a Data 360 license.

## Fields

| Field Name | Description |
| --- | --- |
| application | Field TypestringDescriptionRequired.The name of the app that the Search Answers index is associated with. |
| channel | Field TypestringDescriptionThe search channel that the Search Answers configuration applies to. |
| masterLabel | Field TypestringDescriptionRequired.The name of the Search Answers configuration. |
| nameFieldReference | Field TypestringDescriptionRequired.The name field of the DMO selected as a source for Search Answers. |
| objectReference | Field TypestringDescriptionRequired.The DMO that the Search Answers configuration applies to. |
| retriever | Field TypestringDescriptionThe retriever that accesses the Search Answers indexed data. |
| searchIndex | Field TypestringDescriptionRequired.The name of the search index mapped to the DMO. |

## Declarative Metadata Sample Definition

The following is an example of a DataObjectSearchIndexConf component.

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
<DataObjectSearchIndexConf xmlns="http://soap.sforce.com/2006/04/metadata">
	<application>SearchAnswers</application>
	<channel>SharedIndex</channel>
	<masterLabel>SearchAnswers</masterLabel>
	<nameFieldReference>Name__c</nameFieldReference>
	<objectReference>Account__dlm</objectReference>
	<searchIndex>searchAnswersIndex</searchIndex>
</DataObjectSearchIndexConf>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
       <members>*</members>
       <name>DataObjectSearchIndexConf</name>
   </types>
   <version>63.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
