---
title: "Document"
domain: metadata-api
topic: document
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:39.002Z
estimatedTokens: 1238
keywords: [Document, Represents, Document., documents, must, document, folder, such, sampleFolder, TestDocument., Retrieving, Documents, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# Document

> Represents a Document. All documents must be in a
            document folder, such as
        sampleFolder/TestDocument.

# Document

Represents a Document. All documents must be in a document folder, such as sampleFolder/TestDocument.

This type extends the [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.") metadata type and inherits its content and fullName fields.

## Retrieving Documents

You can’t use the wildcard (\*) symbol with documents in package.xml.  To retrieve the list of documents for populating package.xml with explicit names, call listMetadata() and pass in DocumentFolder as the type. Note that DocumentFolder is not returned as a type in describeMetadata().  Document is returned from describeMetadata() with an associated attribute of inFolder set to true.  If that attribute is set to true, you can construct the type by using the component name with the word Folder, such as DocumentFolder.

The following example shows folders in package.xml:

```

```

For each document an accompanying metadata file named DocumentFilename\-meta.xml is created in the document folder. For example, for a document TestDocument.png in the sampleFolder folder, there’s a TestDocument.png-meta.xml in the documents/sampleFolder of the package.

## Version

Documents are available in API version 10.0 and later.

In API version 17.0 and later, you can delete a folder containing documents moved to the Recycle Bin. When you delete the folder, any related documents in the Recycle Bin are permanently deleted.

In API version 18.0 and later, documents do not need an extension.

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| content | base64 | Content of the document. Base 64-encoded binary data. Prior to making an API call, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary. This conversion is usually handled for you by a SOAP client. This field is inherited from the MetadataWithContent component. |
| description | string | A description of the document. Enter a description to distinguish this document from others. |
| fullName | string | The name of the document, including the folder name. In version 17.0 and earlier, the fullName included the document extension. In version 18.0 and later, the fullName does not include the file extension. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. If this field contained characters before version 14.0 that are no longer allowed, the characters were stripped out of this field, and the previous value of the field was saved in the name field. This field is inherited from the Metadata component. |
| internalUseOnly | boolean | Required. Indicates whether the document is confidential (true) or not (false). This field and public are mutually exclusive; you cannot set both to true. |
| keywords | string | Contains one or more words that describe the document. A check for matches to words in this field is performed when doing a search. |
| name | string | The list of characters allowed in the fullName field has been reduced for versions 14.0 and later. This field contains the value contained in the fullName field before version 14.0. This field is only populated if the value of the fullName field contained characters that are no longer accepted in that field. |
| public | boolean | Required. Indicates whether the document is an image available for HTML email templates and does not require a Salesforce username and password to view in an email (true) or not (false). If the images will be used as a custom app logo or custom tab icon, both of which require a Salesforce username and password to view, set this field to false. This field and internalUseOnly are mutually exclusive; you cannot set both to true. |

## Declarative Metadata Sample Definition

The following is the definition of a document:

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Folder](atlas.en-us.api_meta.meta/api_meta/meta_folder.htm "Represents a folder. This type extends the Metadata metadata type and inherits its fullName field.")

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>MyDBFolder/MyDBName</members>
        <name>Dashboard</name>
    </types>
    <types>
        <members>MyDocumentFolder/MyDocumentName</members>
        <name>Document</name>
    </types>
    <types>
        <members>unfiled$public/MarketingProductInquiryResponse</members>
        <members>unfiled$public/SalesNewCustomerEmail</members>
        <name>EmailTemplate</name>
    </types>
    <types>
        <members>MyReportFolder/MyReportName</members>
        <name>Report</name>
    </types>
    <version>66.0</version>
</Package>
```

```apex
<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="http://soap.sforce.com/2006/04/metadata">
    <internalUseOnly>false</internalUseOnly>
    <name>Q2 Campaign Analysis</name>
    <public>false</public>
    <description>Analyze Q2 campaign effectiveness</description>
</Document>
```

## Related Topics

- MetadataWithContent (atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- Folder (atlas.en-us.api_meta.meta/api_meta/meta_folder.htm)
