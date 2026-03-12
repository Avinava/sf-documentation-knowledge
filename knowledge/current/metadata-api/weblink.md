---
title: "WebLink"
domain: metadata-api
topic: weblink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.967Z
estimatedTokens: 1928
keywords: [WebLink, Represents, custom, button, link, defined, object., Important, Version, Fields, Java, Sample, Declarative, Metadata, Definition, Wildcard, Support, Manifest, File]
---

# WebLink

> Represents a custom button or link defined in a custom
            object.

# WebLink

Represents a custom button or link defined in a custom object.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Version

WebLinks are available in API version 12.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| availability | WebLinkAvailability (enumeration of type string) | Required. Indicates whether the button or link is only available online (online, or if it is also available offline (offline). |
| description | string | A description of the button or link. |
| displayType | WebLinkDisplayType (enumeration of type string) | Represents how the button or link is rendered. Valid values are:link for a hyperlinkbutton for a buttonmassActionButton for a button attached to a related list |
| encodingKey | Encoding | Required. The default encoding setting is Unicode: UTF-8. Change it if your template requires data in a different format. This is available if your content source is URL.Valid values include:UTF-8—Unicode (UTF-8)ISO-8859-1—General US & Western Europe (ISO-8859–1, ISO-LATIN-1)Shift_JIS—Japanese (Shift-JIS)ISO-2022-JP—Japanese (JIS)EUC-JP—Japanese (EUC-JP)x-SJIS_0213—Japanese (Shift-JIS_2004)ks_c_5601-1987—Korean (ks_c_5601-1987)Big5—Traditional Chinese (Big5)GB2312—Simplified Chinese (GB2312)Big5-HKSCS—Traditional Chinese Hong Kong (Big5–HKSCS) |
| fullName | string | The name of the custom button or link with white spaces and special characters escaped for validity. The name can only contain characters, letters, and the underscore (_) character. The name must start with a letter, and can’t end with an underscore or contain two consecutive underscore characters.Inherited from the Metadata component, this field isn’t defined in the WSDL for this component. It must be specified when creating, updating, or deleting. See create() to see an example of this field specified for a call. |
| hasMenubar | boolean | If the openType is newWindow, this field indicates whether to show the browser menu bar for the window (true) or not (false). Otherwise, leave this field empty. |
| hasScrollbars | boolean | If the openType is newWindow, this field indicates whether to show the scroll bars for the window (true) or not (false). Otherwise, leave this field empty. |
| hasToolbar | boolean | If the openType is newWindow, this field indicates whether to show the browser toolbar for the window (true) or not (false). Otherwise, leave this field empty. |
| height | int | Height in pixels of the window opened by the custom button or link. Required if the openType is newWindow. Otherwise, leave this field empty. |
| isResizable | boolean | If the openType is newWindow, this field indicates whether to allow resizing of the window (true) or not (false). Otherwise, leave this field empty. |
| linkType | WebLinkType (enumeration of type string) | Required. Represents whether the content of the button or link is specified by a URL, an sControl, a JavaScript code block, or a Visualforce page.urlsControljavascriptpageflow—Reserved for future use. |
| masterLabel | string | Master label for this object. This display value is the internal label that is not translated. |
| openType | WebLinkWindowType (enumeration of type string) | Required. When the button or link is clicked, specifies the window style that will be used to display the content. Valid values:newWindowsidebarnoSidebarreplaceonClickJavaScript |
| page | string | If the value of linkType is page, this field represents the Visualforce page. Otherwise, leave this field empty. |
| position | WebLinkPosition (enumeration of type string) | If the value of OpenType is newWindow, this field indicates how the new window should be displayed. Otherwise, don’t specify a value. Valid values are:fullScreennonetopLeft |
| protected | boolean | Required. Indicates whether this subcomponent is protected (true) or not (false). Protected subcomponents can’t be linked to or referenced by components or subcomponents created in the installing organization. |
| requireRowSelection | boolean | If the displayType is massActionButton, this field indicates whether to require individual row selection to execute the action for this button (true) or not (false). Otherwise, leave this field empty. |
| scontrol | string | If the value of linkType is sControl, this field represents the name of the sControl. Otherwise, leave this field empty. |
| showsLocation | boolean | If the openType is newWindow, this field indicates whether to show the browser location bar for the window (true) or not (false). Otherwise, leave this field empty. |
| showsStatus | boolean | If the openType is newWindow, this field indicates whether to show the browser status bar for the window. Otherwise, leave this field empty. |
| url | string | If the value of linkType is url, this is the URL value. If the value of linkType is javascript, this is the JavaScript content. If the value is neither of these options, leave this field empty.Content must be escaped in a manner consistent with XML parsing rules. |
| width | int | Width in pixels of the window opened by the button or link.Required if the openType is newWindow. Otherwise, leave this field empty. |

## Java Sample

The following Java sample shows sample values for WebLink fields:

```

```

## Declarative Metadata Sample Definition

The following is the definition of a WebLink in a custom object. For related samples, see [Declarative Metadata Sample Definition](atlas.en-us.api_meta.meta/api_meta/meta_homepagecomponent.htm#HomePageCompenent_example) and [Declarative Metadata Sample Definition](atlas.en-us.api_meta.meta/api_meta/meta_homepagelayouts.htm#HomePageLayout_meta_example).

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_validationformulas.htm "ValidationRule")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_field_types.htm "Metadata Field Types")

#### See Also

-   [HomePageComponent](atlas.en-us.api_meta.meta/api_meta/meta_homepagecomponent.htm "Represents the metadata associated with a home page component. You can customize the Home tab in Salesforce Classic to include components such as sidebar links, a company logo, a dashboard snapshot, or custom components that you create. Use to create, update, or delete home page component definitions.")

-   [HomePageLayout](atlas.en-us.api_meta.meta/api_meta/meta_homepagelayouts.htm "Represents the metadata associated with a home page layout. You can customize home page layouts and assign the layouts to users based on their user profile.")

-   [CustomPageWebLink](atlas.en-us.api_meta.meta/api_meta/custompageweblink.htm "Represents a custom link defined in a home page component.")

## Code Examples

```apex
public void WebLinkSample(String name) throws Exception {
    WebLink WebLink = new WebLink();
    // name variable represents the full name of the object 
    // on which to create the WebLink, for example, customObject__c
    WebLink.setFullName(name + ".googleButton");
    WebLink.setUrl("http://www.google.com");
    WebLink.setAvailability(WebLinkAvailability.online);
    WebLink.setLinkType(WebLinkType.url);
    WebLink.setEncodingKey(Encoding.fromString("UTF-8"));
    WebLink.setOpenType(WebLinkWindowType.newWindow);
    WebLink.setHeight(600);
    WebLink.setWidth(600);
    WebLink.setShowsLocation(false);
    WebLink.setHasScrollbars(true);
    WebLink.setHasToolbar(false);
    WebLink.setHasMenubar(false);
    WebLink.setShowsStatus(false);
    WebLink.setIsResizable(true);
    WebLink.setPosition(WebLinkPosition.none);
    WebLink.setMasterLabel("google");
    WebLink.setDisplayType(WebLinkDisplayType.link);

    AsyncResult[] asyncResults = metadataConnection.create(new WebLink[]{WebLink});
    // After the create() call completes, we must poll the results of checkStatus() 
    // 

}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
....
    <WebLinks>
        <fullName>googleButton</fullName>
        <availability>online</availability>
        <displayType>link</displayType>
        <encodingKey>UTF-8</encodingKey>
        <hasMenubar>false</hasMenubar>
        <hasScrollbars>true</hasScrollbars>
        <hasToolbar>false</hasToolbar>
        <height>600</height>
        <isResizable>true</isResizable>
        <linkType>url</linkType>
        <masterLabel>google</masterLabel>
        <openType>newWindow</openType>
        <position>none</position>
        <protected>false</protected>
        <showsLocation>false</showsLocation>
        <showsStatus>false</showsStatus>
        <url>http://www.google.com</url>
        <width>600</width>
    </WebLinks>
....
</CustomObject>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- create() (atlas.en-us.api_meta.meta/api_meta/meta_create.htm)
- Declarative Metadata Sample Definition (atlas.en-us.api_meta.meta/api_meta/meta_homepagecomponent.htm)
- Declarative Metadata Sample Definition (atlas.en-us.api_meta.meta/api_meta/meta_homepagelayouts.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- ← Previous (atlas.en-us.api_meta.meta/api_meta/meta_validationformulas.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_field_types.htm)
- HomePageComponent (atlas.en-us.api_meta.meta/api_meta/meta_homepagecomponent.htm)
- HomePageLayout (atlas.en-us.api_meta.meta/api_meta/meta_homepagelayouts.htm)
