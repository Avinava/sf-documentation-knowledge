---
title: "HomePageComponent"
domain: metadata-api
topic: homepagecomponent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.021Z
keywords: [HomePageComponent, Declarative, Metadata, File, Suffix, Directory, Location, Version, Sample, Definition, Wildcard, Support, Manifest, See]
---

# HomePageComponent

# HomePageComponent

Represents the metadata associated with a home page component. You can customize the Home tab in Salesforce Classic to include components such as sidebar links, a company logo, a dashboard snapshot, or custom components that you create. Use to create, update, or delete home page component definitions.

For more information, see “[Salesforce Classic Home Tab Page Layouts](https://help.salesforce.com/s/articleView?id=platform.customize_homepage.htm&type=5&language=en_US "HTML (New Window)")” in the Salesforce Help.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Declarative Metadata File Suffix and Directory Location

The file suffix for home page components is .homePageComponent and components are stored in the homepagecomponents directory of the corresponding package directory.

## Version

Home page components are available in API version 12.0 and later.

## HomePageComponent

This metadata type represents the valid values that define a home page component:

| Field Name | Field Type | Description |
| --- | --- | --- |
| body | string | The text body inside the HTML page component. |
| fullName | string | The name can only contain characters, letters, and the underscore (_) character. The name must start with a letter, and can’t end with an underscore or contain two consecutive underscore characters.Inherited from the Metadata component, this field isn’t defined in the WSDL for this component. It must be specified when creating, updating, or deleting. See create() to see an example of this field specified for a call. |
| height | int | Required for Visualforce Area components. Indicates the height (in pixels) of the component.This field is available in API version 31.0 and later. |
| links | string[] | If the pageComponentType is links, then zero or more names of custom page links can be specified.ObjectWebLinkCustomPageWebLink |
| page | string | This field is only available for Visualforce Area components and indicates the API name of the Visualforce page that is associated with the component.This field is available in API version 31.0 and later. |
| pageComponentType | PageComponentType (enumeration of type string) | Required. Valid values are:linkshtmlAreaimageOrNotevisualforcePage (This value is available in API version 31.0 and later.) |
| showLabel | boolean | This field is only available for Visualforce Area components and specifies whether the component displays with a label (true) or not (false).This field is available in API version 31.0 and later. |
| showScrollbars | boolean | This field is only available for Visualforce Area components and specifies whether the component displays with scrollbars (true) or not (false).This field is available in API version 31.0 and later. |
| width | PageComponentWidth (enumeration of type string) | This field is only available for HTML and Visualforce Area components, and indicates whether it’s a narrow or wide home page component. Valid values are:narrowComponentswideComponents |

## Declarative Metadata Sample Definition

The following is the definition of a home page component. See [Declarative Metadata Sample Definition](atlas.en-us.api_meta.meta/api_meta/meta_homepagelayouts.htm#HomePageLayout_meta_example) and [Declarative Metadata Sample Definition](atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm#weblink_example) for related samples.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [HomePageLayout](atlas.en-us.api_meta.meta/api_meta/meta_homepagelayouts.htm "Represents the metadata associated with a home page layout. You can customize home page layouts and assign the layouts to users based on their user profile.")
    
-   [WebLink](atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm "Represents a custom button or link defined in a custom object.")