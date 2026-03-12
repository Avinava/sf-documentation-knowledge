---
title: "ActvPfrmDataConnectorS3"
domain: metadata-api
topic: actvpfrmdataconnectors3
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.435Z
estimatedTokens: 528
keywords: [ActvPfrmDataConnectorS3, Amazon, bucket, export, directory, Parent, File, Suffix, Location, Version, Special, Access, Rules, Declarative, Metadata]
---

# ActvPfrmDataConnectorS3

> Represents the Amazon S3 bucket name and export
			directory.

# ActvPfrmDataConnectorS3

Represents the Amazon S3 bucket name and export directory.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ActvPfrmDataConnectorS3 components have the suffix .actvPfrmDataConnectorS3 and are stored in the actvPfrmDataConnectorS3s folder.

## Version

ActvPfrmDataConnectorS3 components are available in API version 54.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| bucketName | Field TypestringDescriptionRequired.The Amazon S3 bucket name. |
| exportDirectory | Field TypestringDescriptionThis is an optional field that is reserved for internal use. |
| masterLabel | Field TypestringDescriptionRequired.The display name of ActvPfrmDataConnectorS3. |

## Declarative Metadata Sample Definition

The following is an example of an ActvPfrmDataConnectorS3 component.

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
<ActvPfrmDataConnectorS3 xmlns="http://soap.sforce.com/2006/04/metadata">
    <bucketName>MyS3Bucket</bucketName>
    <exportDirectory>Output</exportDirectory>
    <masterLabel>S3Connector</masterLabel>
</ActvPfrmDataConnectorS3>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>MyActivationPlatform</fullName>
    <types>
        <members>APlatform</members>
        <name>ActivationPlatform</name>
    </types>
    <types>
        <members>S3Connector</members>
        <name>ActvPfrmDataConnectorS3</name>
    </types>
    <version>54.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip
					File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
