---
title: "CustomFieldDisplay"
domain: metadata-api
topic: customfielddisplay
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:38.237Z
estimatedTokens: 494
keywords: [CustomFieldDisplay, Represents, view, assigned, product, attribute, custom, fields., extends, Metadata, metadata, inherits, its, fullName, field., Important, File, Suffix, Directory, Location]
---

# CustomFieldDisplay

> Represents the view type assigned to product attribute
			custom fields. This type extends the Metadata metadata type and inherits its
				fullName field.

# CustomFieldDisplay

Represents the view type assigned to product attribute custom fields. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

CustomFieldDisplay components have the suffix .customFieldDisplay.

## Version

CustomFieldDisplay components are available in API version 63.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| displayType | CustomFieldDisplayType​ (enumeration of type string) | Required. The view type of the product attribute custom fields. Values are:ColorSwatchDropdownPill |
| fieldApiName | string | Required. The unique name of the product attribute, for example, color_c. |
| isProtected | boolean | Optional. An auto-generated value that doesn’t impact the behavior of the metadata type. The default value is false. |
| masterLabel | string | Required. The primary label for this object. |

## Declarative Metadata Sample Definition

The following is an example of a CustomFieldDisplay component.

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
<CustomFieldDisplay xmlns="http://soap.sforce.com/2006/04/metadata">
	<masterLabel>cfd1</masterLabel>
	<fieldApiName>Color__c</fieldApiName>
	<displayType>Pill</displayType>
	<isProtected>false</isProtected>
</CustomFieldDisplay>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
	<members>*</members>
	<name>CustomFieldDisplay</name>
	</types>
	<version>63.0</version>
</Package>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
