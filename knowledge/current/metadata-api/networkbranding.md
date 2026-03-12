---
title: "NetworkBranding"
domain: metadata-api
topic: networkbranding
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.422Z
estimatedTokens: 1147
keywords: [NetworkBranding, Represents, branding, color, scheme, applied, login, pages, Experience, Cloud, site., sites, represented, Network, component., Note, Declarative, Metadata, File, Suffix]
---

# NetworkBranding

> Represents the branding and color scheme applied
            to the login pages of an Experience Cloud site. (Experience Cloud sites are
        represented by the Network component.)

# NetworkBranding

Represents the branding and color scheme applied to the login pages of an Experience Cloud site. (Experience Cloud sites are represented by the Network component.)

This type extends the [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm#meta_metadatawithcontent "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.") type and inherits its content and fullName fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

For branding properties that apply to Experience Builder sites, see [BrandingSet](atlas.en-us.api_meta.meta/api_meta/meta_brandingset.htm "Represents the definition of a set of branding properties for an Experience Builder site or for your org's Lightning Experience theme.").

## Declarative Metadata File Suffix and Directory Location

NetworkBranding components have the suffix .networkBranding and are stored in the networkBranding folder.

## Version

This object is available in API version 41.0 and later. It replaces the Branding subtype in the Network component.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| loginBackgroundImageUrl | string | The path to the image URL that appears as the background on the Experience Cloud site’s login page. This URL can be fixed, dynamic, or an uploaded image. A dynamic URL contains the experience ID parameter, {expid}, and is resolved dynamically at runtime. |
| loginFooterText | string | The text that appears in the footer of the Experience Cloud site login page. |
| loginLogo | string | The logo that appears on the Experience Cloud site login page for external users. |
| loginLogoName | string | The name of the logo that appears on the Experience Cloud site login page for external users. |
| loginPrimaryColor | string | The background color of the Login button. Available in API version 42.0 and later. |
| loginQuaternaryColor | string | The background color for the Experience Cloud site’s login page. |
| loginRightFrameUrl | string | The path to the content of the right frame of the Experience Cloud site login page. This URL can be either fixed or dynamic. A dynamic URL contains the experience ID parameter, {expid}. If the URL contains {expid}, the URL is resolved dynamically at runtime depending on the parameter's value. |
| network | string | The name of the Experience Cloud site associated with the branding. |
| pageFooter | string | An image that appears on the footer of the Experience Cloud site pages. Must be an .html file. |
| pageHeader | string | An image that appears on the header of the Experience Cloud site pages. Can be an .html, .gif, .jpg, or .png file. |
| primaryColor | string | Required. The color used for the active tab. |
| primaryComplementColor | string | Required. Font color used with primaryColor. |
| quaternaryColor | string | Required. The background color for pages in the Experience Cloud site. |
| quaternaryComplementColor | string | Required. Font color used with quaternaryColor. |
| secondaryColor | string | Required. The color used for the top borders of lists and tables. |
| staticLogoImageUrl | string | The path to the logo that appears on the Experience Cloud site’s login page. This URL can be fixed, dynamic, or an uploaded image. A dynamic URL contains the experience ID parameter, {expid}. If the URL contains {expid}, the URL is resolved dynamically at runtime depending on the parameter's value. |
| tertiaryColor | string | Required. The background color for section headers on edit and detail pages. |
| tertiaryComplementColor | string | Required. Font color used with tertiaryColor. |
| zeronaryColor | string | Required. The background color for the header. |
| zeronaryComplementColor | string | Required. Font color used with zeronaryColor. |

## Declarative Metadata Sample Definition

A sample XML definition of network branding.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<NetworkBranding xmlns="http://soap.sforce.com/2006/04/metadata">
    <loginFooterText>salesforce.com</loginFooterText>
    <loginLogo>Communities_Shared_Document_Folder/header2_png.png</loginLogo>
    <loginLogoName>header2.png</loginLogoName>
    <loginBackgroundImageUrl>http://identitycms.herokuapp.com/promo-background.jpg</loginBackgroundImageUrl>
    <loginQuaternaryColor>#B1BAC1</loginQuaternaryColor>
    <loginRightFrameUrl>https://www.example.com/test</loginRightFrameUrl>
    <network>Network 1</network>
    <pageFooter>Branding/footer_html.html</pageFooter>
    <pageHeader>Branding/header_Image.jpg</pageHeader>
    <primaryColor>#AF5800</primaryColor>
    <primaryComplementColor>#FFFFFF</primaryComplementColor>
    <quaternaryColor>#286FB8</quaternaryColor>
    <quaternaryComplementColor>#FFFFFF</quaternaryComplementColor>
    <secondaryColor>#000000</secondaryColor>
    <tertiaryColor>#FFFFFF</tertiaryColor>
    <tertiaryComplementColor>#222222</tertiaryComplementColor>
    <zeronaryColor>#0A3764</zeronaryColor>
    <zeronaryComplementColor>#FFFFFF</zeronaryComplementColor>
</NetworkBranding>
```

## Related Topics

- MetadataWithContent (atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm)
- BrandingSet (atlas.en-us.api_meta.meta/api_meta/meta_brandingset.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
