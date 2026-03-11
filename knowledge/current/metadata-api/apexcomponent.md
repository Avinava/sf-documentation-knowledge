---
title: "ApexComponent"
domain: metadata-api
topic: apexcomponent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.214Z
keywords: [ApexComponent, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, Wildcard, Support, Manifest, See]
---

# ApexComponent

# ApexComponent

Represents a Visualforce component.

For more information, see Visualforce in Salesforce Help and [StaticResource: MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_staticresource.htm#extends_metadatawithcontent)

## Declarative Metadata File Suffix and Directory Location

The file suffix is .component for the page file. The accompanying metadata file is named ComponentName\-meta.xml.

Visualforce components are stored in the components folder in the corresponding package directory.

## Version

Visualforce components are available in API version 12.0 and later.

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| apiVersion | double | The API version for this Visualforce component. Every component has an API version specified at creation. This field is available in API version 16.0 and later. |
| content | base64Binary | The component content. Base 64-encoded binary data. Before making an API call, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary. This conversion is handled for you by a SOAP client. This field is inherited from the MetadataWithContent component. |
| description | string | A description of what the component does. |
| fullName | string | The component developer name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| label | string | Required. The label for this component. |
| packageVersions | PackageVersion[] | The list of installed managed package versions that are referenced by this Visualforce component.Package components and Visualforce custom component are distinct concepts. A package is comprised of many elements, such as custom objects, Apex classes and triggers, and custom pages and components.For more information about managed packages, see Second-Generation Managed Packages in the Salesforce DX Developer Guide. This field is available in API version 16.0 and later. |

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [ApexPage](atlas.en-us.api_meta.meta/api_meta/meta_pages.htm "Represents a Visualforce page.")