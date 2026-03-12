---
title: "StaticResource"
domain: metadata-api
topic: staticresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.006Z
estimatedTokens: 781
keywords: [StaticResource, Represents, resource, file, often, code, library, ZIP, file., resources, allow, upload, content, reference, Visualforce, page, including, archives, such, .zip]
---

# StaticResource

> Represents a static resource file, often a code
            library in a ZIP file. Static resources allow you to upload content that you can
            reference in a Visualforce page, including archives (such as .zip and .jar files),
            images, style sheets, JavaScript, and other files. Static resources can be used only
            within your Salesforce org, so you can’t host content here for other apps or
            websites.

# StaticResource

Represents a static resource file, often a code library in a ZIP file. Static resources allow you to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. Static resources can be used only within your Salesforce org, so you can’t host content here for other apps or websites.

This type extends the [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.") metadata type and inherits its content and fullName fields.

## File Suffix and Directory Location

The file suffix is .resource for the template file. The accompanying metadata file is named resource\-meta.xml.

Static resource components are stored in the staticresources folder in the corresponding package directory.

## Version

Static resources are available in API version 12.0 and later.

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| cacheControl | StaticResourceCacheControl (enumeration of type string) | Required. Indicates whether the static resource is marked with a public caching tag so that a third-party delivery client can cache the content. This field is available in API version 14.0. The valid values are:PrivatePublic |
| content | base64Binary | The static resource content. Base 64-encoded binary data. Before making an API call, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary. This conversion is handled for you by a SOAP client. This field is inherited from the MetadataWithContent component. |
| contentType | string | Required. The content type of the file, for example text/plain. |
| description | string | The description of the static resource. |
| fullName | string | The static resource name. The name can only contain characters, letters, and the underscore (_) character. The name must start with a letter, and can’t end with an underscore or contain two consecutive underscore characters.Inherited from the Metadata component, this field isn’t defined in the WSDL for this component. It must be specified when creating, updating, or deleting. See create() to see an example of this field specified for a call. |

## Declarative Metadata Sample Definition

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<StaticResource xmlns="http://soap.sforce.com/2006/04/metadata">
    <contentType>text/plain</contentType>
    <description>Test Resource</description>
</StaticResource>
```

## Related Topics

- MetadataWithContent (atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- create() (atlas.en-us.api_meta.meta/api_meta/meta_create.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
