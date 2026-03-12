---
title: "ApexPage"
domain: metadata-api
topic: apexpage
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:41.089Z
estimatedTokens: 1003
keywords: [ApexPage, Visualforce, Declarative, Metadata, File, Suffix, Directory, Location, Version, Sample, Definition, Wildcard, Support, Manifest]
---

# ApexPage

> Represents a Visualforce page.

# ApexPage

Represents a Visualforce page.

For more information, see Visualforce in Salesforce Help. This type extends the [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.") metadata type and inherits its content and fullName fields.

## Declarative Metadata File Suffix and Directory Location

The file suffix is .page for the page file. The accompanying metadata file is named PageName\-meta.xml.

Visualforce pages are stored in the pages folder in the corresponding package directory.

## Version

Visualforce pages are available in API version 11.0 and later.

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| apiVersion | double | Required. The API version for this page. Every page has an API version specified at creation. This field is available in API version 15.0 and later. If you set this field to a number lower than 15.0, it’s changed to 15.0. |
| content | base64Binary | The page content. Base 64-encoded binary data. Before making an API call, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary. This conversion is handled for you by a SOAP client. This field is inherited from the MetadataWithContent component. |
| description | string | A description of what the page does. |
| fullName | string | The page developer name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| availableInTouch | boolean | Indicates if Visualforce tabs associated with the Visualforce page can be used in the Salesforce mobile app. (Use of this field for Salesforce Touch is deprecated.). This field is available in API version 27.0 and later.Standard object tabs that are overridden with a Visualforce page aren’t supported in the Salesforce mobile app, even if you set this field for the page. The default page for the object is displayed instead of the Visualforce page. |
| confirmationTokenRequired | boolean | Indicates whether GET requests for the page require a CSRF confirmation token. This field is available in API version 28.0 and later.If you change this field’s value from false to true, links to the page require a CSRF token to be added to them, or the page is inaccessible. |
| label | string | Required. The label for this page. |
| packageVersions | PackageVersion[] | The list of installed managed package versions that are referenced by this Visualforce page.For more information about managed packages, see Second-Generation Managed Packages in the Salesforce DX Developer Guide. This field is available in API version 16.0 and later. |

## Declarative Metadata Sample Definition

The following sample creates the MyPage.page page, and the corresponding MyPage.page-meta.xml metadata file.

SampleApexPage.page file:

```

```

SampleApexPage.page-meta.xml:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [ApexComponent](atlas.en-us.api_meta.meta/api_meta/meta_component.htm "Represents a Visualforce component.")

## Code Examples

```
<apex:page>
<h1>Congratulations</h1>
This is your new Page.
</apex:page>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ApexPage xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>This is a sample Visualforce page.</description>
    <label>SampleApexPage</label>
</ApexPage>
```

## Related Topics

- MetadataWithContent (atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- PackageVersion (atlas.en-us.api_meta.meta/api_meta/meta_classes.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- ApexComponent (atlas.en-us.api_meta.meta/api_meta/meta_component.htm)
