---
title: "MetadataWithContent"
domain: metadata-api
topic: metadatawithcontent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.148Z
estimatedTokens: 472
keywords: [MetadataWithContent, base, metadata, types, contain, content, such, documents, email, templates., extends, Metadata., can’t, edit, object., Version, Fields, Wildcard, Support, Manifest]
---

# MetadataWithContent

> MetadataWithContent is the base type for all
   metadata types that contain content, such as documents or email templates. It extends
  Metadata. You can’t edit this object.

# MetadataWithContent

MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.

## Version

MetadataWithContent components are available in API version 14.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| content | base64Binary | Base 64-encoded binary data. Before making an API call, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary. This conversion is handled for you by a SOAP client. |
| fullName | string | Required. The name of the component. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Inherited from the Metadata component, this field isn’t defined in the WSDL for this component. It must be specified when creating, updating, or deleting. See create() to see an example of this field specified for a call. |

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.")

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- create() (atlas.en-us.api_meta.meta/api_meta/meta_create.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
