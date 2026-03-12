---
title: "BrandingSet"
domain: metadata-api
topic: brandingset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:37.425Z
estimatedTokens: 2331
keywords: [BrandingSet, Represents, definition, set, branding, Experience, Builder, site, org's, Lightning, theme., Important, File, Suffix, Directory, Location, Version, Special, Access, Rules]
---

# BrandingSet

> Represents the definition of a set of branding properties
            for an Experience Builder site or for your org's Lightning Experience
        theme.

# BrandingSet

Represents the definition of a set of branding properties for an Experience Builder site or for your org's Lightning Experience theme.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

BrandingSet components have the suffix brandingSet and are stored in the brandingSets folder.

## Version

BrandingSet components are available in API version 40.0 and later.

## Special Access Rules

The BrandingSet type is available when at least one of the following is enabled in your org: Digital Experiences, Surveys, or Lightning Experience. All users, including unauthenticated guest users, can access this type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| brandingSetProperty | BrandingSetProperty[] | An array containing the name and value of each branding property, such as TextColor:#333. |
| description | string | A description of the set of branding properties. |
| masterLabel | string | Required. The user interface name of the set of branding properties. |
| type | string | The assigned branding set definition for this BrandingSet. |

## BrandingSetProperty

Represents the definition of a branding property in the Theme panel in Experience Builder or in the Edit Theme page in Setup.

| Field Name | Field Type | Description |
| --- | --- | --- |
| propertyName | string | Required. The name of the branding property, such as TextColor. |
| propertyValue | string | The value of the branding property, such as #333. |

## Branding Properties for Lightning Experience Themes

Use these properties to describe Lightning Experience themes. Each propertyName is case-sensitive and must use all capital letters. Some properties only apply to either Salesforce Lightning Design System (SLDS) 1 themes or SLDS 2 themes.

| Property | Description |
| --- | --- |
| ACCENT_COLOR_1 | Field TypestringDescriptionThe primary accent color used to highlight active states of the user interface like navigation, tabs, and hover states. Must be a valid hex color string in the format #54C254.Available only for SLDS 2 themes. Available in API version 64.0 and later. |
| ACCENT_COLOR_2 | Field TypestringDescriptionA variant of the primary accent color used to highlight active states of the user interface like navigation, tabs, and hover states. Must be a valid hex color string in the format #54C254.Available only for SLDS 2 themes. Available in API version 64.0 and later. |
| ACCENT_COLOR_3 | Field TypestringDescriptionA variant of the primary accent color used to highlight active states of the user interface, like navigation, tabs, and hover states. Must be a valid hex color string in the format #54C254.Available only for SLDS 2 themes. Available in API version 64.0 and later. |
| ACCENT_CONTAINER_CONTENT_COLOR_1 | Field TypestringDescriptionThe primary color used for the icons and text within accent containers. Must be a valid hex color string in the format #54C254.Available only for SLDS 2 themes. Available in API version 65.0 and later. |
| ACCENT_CONTAINER_CONTENT_COLOR_2 | Field TypestringDescriptionA variant of the primary color used for the icons and text within accent containers. Must be a valid hex color string in the format #54C254.Available only for SLDS 2 themes. Available in API version 65.0 and later. |
| ACCENT_CONTAINER_CONTENT_COLOR_3 | Field TypestringDescriptionA variant of the primary color used for the icons and text within accent containers. Must be a valid hex color string in the format #54C254.Available only for SLDS 2 themes. Available in API version 65.0 and later. |
| BANNER_IMAGE | Field TypestringDescriptionThe path to the image to display in the background of your org's pages. Use a JPG, PNG, or GIF that's 1800x360 pixels and smaller than 5 MB. Must refer to an asset file that already exists within the org.Available only for SLDS 1 themes. |
| BRAND_COLOR | Field TypestringDescriptionThe color to display on your nav bar and other important areas of Salesforce. Must be a valid hex color string in the format #54C254. |
| BRAND_IMAGE | Field TypestringDescriptionThe path to the image to display as your logo. Use a JPG, PNG, or GIF that’s 600x120 pixels and smaller than 5 MB. Must refer to an asset file that already exists within the org. |
| CONTAINER_ACCENT_COLOR_1 | Field TypestringDescriptionThe primary color used for the background of branded component containers like the brand button. Container accent colors are also used for hover states for branded component containers. Must be a valid hex color string in the format #54C254.Available only for SLDS 2 themes. Available in API version 64.0 and later. |
| CONTAINER_ACCENT_COLOR_2 | Field TypestringDescriptionA variant of the primary color used for the background of branded component containers. Container accent colors are also used for hover states for branded component containers. Must be a valid hex color string in the format #54C254.Available only for SLDS 2 themes. Available in API version 64.0 and later. |
| CONTAINER_ACCENT_COLOR_3 | Field TypestringDescriptionA variant of the primary color used for the background of branded component containers. Container accent colors are also used for hover states for branded component containers. Must be a valid hex color string in the format #54C254.Available only for SLDS 2 themes. Available in API version 64.0 and later. |
| GROUP_IMAGE | Field TypestringDescriptionThe default group avatar image. Use a JPG, PNG, or GIF that's 200x200 pixels and smaller than 5 MB. Group owners can change their avatar image. Must refer to an asset file that already exists within the org. |
| GROUPS_BANNER_IMAGE | Field TypestringDescriptionThe default banner image for group pages. Use a JPG, PNG, or GIF that’s 1800x360 pixels and smaller than 5 MB. Group owners can change their banner image. Must refer to an asset file that already exists within the org. |
| HEADER_BACKGROUND_COLOR | Field TypestringDescriptionThe color to display at the top of your org pages. Your logo, global search, and global actions appear on top of the global header background. Must be a valid hex color string in the format #54C254.Available only for SLDS 1 themes. |
| LINK_AS_BACKGROUND | Field TypebooleanDescriptionIndicates whether you want links in your org to use your selected brand color (true) or not (false). The default value is true.Available only for SLDS 1 themes. |
| OVERRIDE_A11Y_COLOR | Field TypestringDescriptionWhen you select a value for BRAND_COLOR, a color palette that complements your brand color and is WCAG 2.0 compliant is automatically generated. In places where your selected brand color isn’t accessible, an accessible color is used instead. If you provide a value for OVERRIDE_A11Y_COLOR, your value is used in the instances described in place of an automatically generated color.Overriding the accessible brand color only updates the first tile in your brand-based color palette, which affects colors like links and buttons. Overriding the accessibility brand color can make text harder to read.Must be a valid hex color string in the format #54C254.Available only for SLDS 1 themes. |
| OVERRIDE_LOADING_PAGE | Field TypebooleanDescriptionIndicates whether your provided brand logo displays while a Lighting Experience page loads or refreshes (true) or not (false). The default value is false. |
| PAGE_BACKGROUND_COLOR | Field TypestringDescriptionThe color used for page backgrounds. Must be a valid hex color string in the format #54C254.Available only for SLDS 1 themes. |
| PROFILE_BANNER_IMAGE | Field TypestringDescriptionThe default banner image for user profiles. Use a JPG, PNG, or GIF that's 1800x360 pixels and smaller than 5 MB. Users can change their profile banner image. Must refer to an asset file that already exists within the org. |
| USER_IMAGE | Field TypestringDescriptionThe default avatar image for user profiles. Use a JPG, PNG, or GIF that's 200x200 pixels and smaller than 5 MB. Users can change their profile avatar image. Must refer to an asset file that already exists within the org. |

## Declarative Metadata Sample Definition

The following is an example of a BrandingSet component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<BrandingSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <brandingSetProperty>
        <propertyName>TextTransformStyle</propertyName>
        <propertyValue>uppercase</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>DetailTextColor</propertyName>
        <propertyValue>#696969</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>BorderColor</propertyName>
        <propertyValue>#D4D4D4</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>HeaderImage</propertyName>
        <propertyValue></propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>HeaderFonts</propertyName>
        <propertyValue>Montserrat</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>CardBackgroundColor</propertyName>
        <propertyValue>rgba(255, 255, 255, 0)</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>LoginBackgroundColor</propertyName>
        <propertyValue>#F4F4F4</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>ActionColor</propertyName>
        <propertyValue>#2574A9</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>_ActionColorTrans</propertyName>
        <propertyValue>rgba(25, 124, 190, 0.9)</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>CompanyLogo</propertyName>
        <propertyValue></propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>LoginBackgroundImage</propertyName>
        <propertyValue>../../../../sfsites/picasso/core/external/
            salesforceIdentity/images/background.jpg?v=1</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>_LinkColorDarker</propertyName>
        <propertyValue>#135F90</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>_ActionColorDarker</propertyName>
        <propertyValue>#135F90</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>_HoverColor</propertyName>
        <propertyValue>rgba(25, 124, 190, 0.1)</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>ErrorFontColor</propertyName>
        <propertyValue>#ff9e9e</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>TextColor</propertyName>
        <propertyValue>#333</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>OverlayTextColor</propertyName>
        <propertyValue>#FFFFFF</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>PrimaryFont</propertyName>
        <propertyValue>Lato</propertyValue>
    </brandingSetProperty>
    <brandingSetProperty>
        <propertyName>LinkColor</propertyName>
        <propertyValue>#2574A9</propertyValue>
    </brandingSetProperty>
    <masterLabel>ex</masterLabel>
    <type>napili:branding-napili-merged</type>
</BrandingSet>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>MyBrandingSet</members>
        <name>BrandingSet</name>
    </types>
    <version>40.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
