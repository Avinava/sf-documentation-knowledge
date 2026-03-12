---
title: "CustomPageWebLink"
domain: metadata-api
topic: custompageweblink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.393Z
estimatedTokens: 1884
keywords: [CustomPageWebLink, Represents, custom, link, defined, home, page, component., Important, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, Sample, Definition, Wildcard]
---

# CustomPageWebLink

> Represents a custom link defined in a home page
            component.

# CustomPageWebLink

Represents a custom link defined in a home page component.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

All other custom links are stored as a [WebLink](atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm "Represents a custom button or link defined in a custom object.") in a [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.").

## Declarative Metadata File Suffix and Directory Location

There is one file per custom link definition, stored in the weblinks folder in the corresponding package directory. The file suffix is .weblink.

## Version

CustomPageWebLinks are available in API version 13.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| availability | WebLinkAvailability (enumeration of type string) | Required. Indicates whether the link is only available online (online, or if it is also available offline (offline). |
| description | string | A description of the link. |
| displayType | WebLinkDisplayType (enumeration of type string) | Represents how this link is rendered.Valid values:link for a hyperlinkbutton for a buttonmassActionButton for a button attached to a related list |
| encodingKey | Encoding (enumeration of type string) | Required. The default encoding setting is Unicode: UTF-8. Change it if your template requires data in a different format. This is available if your content source is URL. Valid values include:UTF-8—Unicode (UTF-8)ISO-8859-1—General US & Western Europe (ISO-8859–1, ISO-LATIN-1)Shift_JIS—Japanese (Shift-JIS)ISO-2022-JP—Japanese (JIS)EUC-JP—Japanese (EUC-JP)x-SJIS_0213—Japanese (Shift-JIS_2004)ks_c_5601-1987—Korean (ks_c_5601-1987)Big5—Traditional Chinese (Big5)GB2312—Simplified Chinese (GB2312)Big5-HKSCS—Traditional Chinese Hong Kong (Big5–HKSCS) |
| fullName | string | The name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| hasMenubar | boolean | If the openType is newWindow, this field indicates whether to show the browser menu bar for the window (true or not (false). Otherwise, leave this field empty. |
| hasScrollbars | boolean | If the openType is newWindow, this field indicates whether to show the scroll bars for the window (true) or not (false). Otherwise, leave this field empty. |
| hasToolbar | boolean | If the openType is newWindow, this field indicates whether to show the browser toolbar for the window (true) or not (false). Otherwise, leave this field empty. |
| height | int | Height in pixels of the window opened by the link. Required if the openType is newWindow. Otherwise, leave this field empty. |
| isResizable | boolean | If the openType is newWindow, this field indicates whether to allow resizing of the window (true) or not (false). Otherwise, leave this field empty. |
| linkType | WebLinkType (enumeration of type string) | Required. Represents whether the content of the button or link is specified by a URL, an sControl, a JavaScript code block, or a Visualforce page.urlsControljavascriptpageflow—Reserved for future use. |
| masterLabel | string | The label for the link. |
| openType | WebLinkWindowType (enumeration of type string) | Required. When the link is clicked, this field specifies the window style used to display the content.Valid values are:newWindowsidebarnoSidebarreplaceonClickJavaScript |
| page | string | If the value of linkType is page, this field represents the Visualforce page. Otherwise, leave this field empty. |
| position | WebLinkPosition (enumeration of type string) | If the openType is newWindow, this field indicates how the new window should be displayed. Otherwise, leave this field empty.Valid values are:fullScreennonetopLeft |
| protected | boolean | Required. Indicates whether this component is protected (true) or not (false). Protected components cannot be linked to or referenced by components created in the installing organization. |
| requireRowSelection | boolean | If the openType is massAction, this field indicates whether to require individual row selection to execute the action for this button (true) or not (false). Otherwise, leave this field empty. |
| scontrol | string | If the value of linkType is sControl, this field represents the name of the sControl. Otherwise, leave this field empty. |
| showsLocation | boolean | If the openType is newWindow, this field indicates whether or not to show the browser location bar for the window. Otherwise, leave this field empty. |
| showsStatus | boolean | If the openType is newWindow, this field indicates whether or not to show the browser status bar for the window. Otherwise, leave this field empty. |
| url | string | If the value of linkType is url, this field represents the URL value. If the value of linkType is javascript, this field represents the JavaScript content. If the value is neither of these, leave this field empty.Content must be escaped in a manner consistent with XML parsing rules. |
| width | int | Width in pixels of the window opened by the link.Required if the openType is newWindow. Otherwise, leave this field empty. |

## Declarative Metadata Sample Definition

The following is the definition of a Weblink. For related samples, see [HomePageComponent](atlas.en-us.api_meta.meta/api_meta/meta_homepagecomponent.htm#HomePageCompenent_example) and [HomePageLayout](atlas.en-us.api_meta.meta/api_meta/meta_homepagelayouts.htm#HomePageLayout_meta_example).

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [HomePageComponent](atlas.en-us.api_meta.meta/api_meta/meta_homepagecomponent.htm "Represents the metadata associated with a home page component. You can customize the Home tab in Salesforce Classic to include components such as sidebar links, a company logo, a dashboard snapshot, or custom components that you create. Use to create, update, or delete home page component definitions.")

-   [HomePageLayout](atlas.en-us.api_meta.meta/api_meta/meta_homepagelayouts.htm "Represents the metadata associated with a home page layout. You can customize home page layouts and assign the layouts to users based on their user profile.")

-   [WebLink](atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm "Represents a custom button or link defined in a custom object.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomPageWebLink xmlns="http://soap.sforce.com/2006/04/metadata">
    <availability>online</availability>
    <displayType>button</displayType>
    <encodingKey>UTF-8</encodingKey
    <hasMenubar>false</hasMenubar>
    <hasScrollbars>true</hasScrollbars>
    <hasToolbar>false</hasToolbar>
    <height>600</height>
    <isResizable>true</isResizable>
    <linkType>url</linkType>
    <masterLabel>detailPageButon</masterLabel>
    <openType>newWindow</openType>
    <position>none</position>
    <protected>false</protected>
    <showsLocation>false</showsLocation>
    <showsStatus>false</showsStatus>
    <url>http://google.com</url>
</CustomPageWebLink>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- WebLink (atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm)
- CustomObject (atlas.en-us.api_meta.meta/api_meta/customobject.htm)
- HomePageComponent (atlas.en-us.api_meta.meta/api_meta/meta_homepagecomponent.htm)
- HomePageLayout (atlas.en-us.api_meta.meta/api_meta/meta_homepagelayouts.htm)
- Deploying and Retrieving Metadata with the Zip
                    File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
