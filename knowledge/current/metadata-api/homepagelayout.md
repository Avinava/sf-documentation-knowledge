---
title: "HomePageLayout"
domain: metadata-api
topic: homepagelayout
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.026Z
keywords: [HomePageLayout, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, See]
---

# HomePageLayout

# HomePageLayout

Represents the metadata associated with a home page layout. You can customize home page layouts and assign the layouts to users based on their user profile.

## File Suffix and Directory Location

Home page layouts are stored in the homePageLayouts directory of the corresponding package directory. The extension is .homePageLayout.

## Version

Home page components are available in API version 12.0 and later. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Fields

This metadata type represents the valid values that define a home page layout:

| Field Name | Field Type | Description |
| --- | --- | --- |
| fullName | string | The name can only contain characters, letters, and the underscore (_) character. The name must start with a letter, and can’t end with an underscore or contain two consecutive underscore characters.Inherited from the Metadata component, this field isn’t defined in the WSDL for this component. It must be specified when creating, updating, or deleting. See create() to see an example of this field specified for a call. |
| narrowComponents | string[] | The list of elements in the narrow column on the left side of the home page. |
| wideComponents | string[] | The list of elements in the wide column on the right side of the home page. |

## Declarative Metadata Sample Definition

The following is the definition of a home page layout. See [Declarative Metadata Sample Definition](atlas.en-us.api_meta.meta/api_meta/meta_homepagecomponent.htm#HomePageCompenent_example) and [Declarative Metadata Sample Definition](atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm#weblink_example) for related samples.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [HomePageComponent](atlas.en-us.api_meta.meta/api_meta/meta_homepagecomponent.htm "Represents the metadata associated with a home page component. You can customize the Home tab in Salesforce Classic to include components such as sidebar links, a company logo, a dashboard snapshot, or custom components that you create. Use to create, update, or delete home page component definitions.")
    
-   [WebLink](atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm "Represents a custom button or link defined in a custom object.")