---
title: "DataWeaveResource"
domain: metadata-api
topic: dataweaveresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.273Z
estimatedTokens: 540
keywords: [DataWeaveResource, DataWeaveScriptResource, generated, DataWeave, scripts, directly, invoked, Apex, Parent, File, Suffix, Directory, Location, Version, Special]
---

# DataWeaveResource

> Represents the DataWeaveScriptResource class that is generated for all DataWeave scripts.
			DataWeave scripts can be directly invoked from Apex.

# DataWeaveResource

Represents the DataWeaveScriptResource class that is generated for all DataWeave scripts. DataWeave scripts can be directly invoked from Apex.

## Parent Type

This type extends the [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.") metadata type and inherits its content and fullName fields.

## File Suffix and Directory Location

DataWeaveResource components have the suffix .dwl and are stored in the dw folder.

## Version

DataWeaveResource components are available in API version 58.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| apiVersion | Field TypedoubleDescriptionRequired.The API version for this component. |
| isGlobal | Field TypebooleanDescriptionWhen set to true, the generated DataWeaveScriptResource class is global. |
| isProtected | Field TypebooleanDescriptionNot used. |

## Declarative Metadata Sample Definition

The following is an example of a DataWeaveResource component.

csvToContacts.dwl

%dw 2.0 input records application/csv output application/apex --- records map(record) -> { FirstName: record.first\_name, LastName: record.last\_name, Email: record.email } as Object {class: "Contact"}

csvToContacts.dwl-meta.xml

```

```

The following is an example package.xml that references the csvToContacts definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DataWeaveResource xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>58.0</apiVersion>
    <isGlobal>true</isGlobal>
</DataWeaveResource>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
      xmlns="http://soap.sforce.com/2006/04/metadata">
      <types>
            <members>csvToContacts</members>
            <name>DataWeaveResource</name>
      </types>
      <version>58.0</version>
</Package>
```

## Related Topics

- MetadataWithContent (atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
