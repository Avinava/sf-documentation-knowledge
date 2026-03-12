---
title: "apex:slds"
domain: pages
topic: apexslds
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.141Z
estimatedTokens: 855
keywords: [apex, slds, Visualforce, pages, Lightning, Design, System, styling, include, custom, themes, component, instead, uploading, resource]
---

# apex:slds

> Allows Visualforce pages to reference Lightning Design System styling and to include
			custom themes. Use this component instead of uploading the Lightning Design System as a
			static resource.

# apex:slds

Allows Visualforce pages to reference Lightning Design System styling and to include custom themes. Use this component instead of uploading the Lightning Design System as a static resource.

Include <apex:slds /> in a Visualforce page to use Lightning Design System stylesheets in the page.

In general, the Lightning Design System is already scoped. Visualforce pages that have showHeader="true" already apply a scoping CSS class slds-scope to the content of the page, so that your content is styled with the Lightning Design System. Additionally, pages with showHeader="false" and applyBodyTag="true" have the scoping class added to the <body\> element in the page. If you set applyBodyTag or applyHtmlTag to false, however, you must include the scoping class slds-scope. Within the scoping class, your markup can reference Lightning Design System styles and assets.

To reference assets in the Lightning Design System, such as SVG icons and other images, use the URLFOR() formula function and the $Asset.SLDS global variable. To use SVG icons, add the required XML namespaces by using xmlns="http://www.w3.org/2000/svg" and xmlns:xlink="http://www.w3.org/1999/xlink" in the html tag.

Currently, if you are using the Salesforce sidebar, header, or built-in stylesheets, you can’t add attributes to the html tag. SVG icons aren’t supported on your page if you don’t have showHeader, standardStylesheets, and sidebar set to false.

**Note:** The <apex:slds\> component has known issues when creating PDF files from Visualforce pages. This component isn't supported for creating PDF files using <apex:page renderAs="pdf"\> or in calls to PageReference.getContentAsPDF().

To include SLDS on your Visualforce page, add the Visualforce component <apex:slds> to the HTML <head\> tag and the HTML class slds-scope to the <body\> tag. This example displays the SLDS announcement icon.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the SLDS component to be referenced by other components in the page. |  | 14.0 | global |
| lightningStyleMode | String | Specify the version of SLDS to use within this component block. Allowed values are:Auto (default)SLDS1The default value of Auto uses your org theme settings to determine which version of SLDS to use. For more details, see Customize the User Interface in the Salesforce Help.SLDS1 is available for backwards compatibility as you adopt the latest version of Lightning Design System. Use SLDS1 when your org is using the latest version of SLDS, but this page hasn’t been updated for the new design and depends on the older version of SLDS. |  | 65.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 39.0 |  |

#### See Also

-   [apex:stylesheet](atlas.en-us.pages.meta/pages/pages_compref_stylesheet.htm)

-   [Using the Lightning Design System](atlas.en-us.pages.meta/pages/pages_styling_slds.htm "Use the <apex:slds> element to incorporate the Lightning Design System in your Visualforce pages and align them with the styling of Lightning Experience. This component is a streamlined alternative to uploading the Lightning Design System as a static resource and using it in your Visualforce pages.")

## Code Examples

```
<apex:page showHeader="false" applyHtmlTag="true" applyBodyTag="false">
    <head>
        <apex:slds />
    </head>
    <body class="slds-scope" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Your SLDS-styled content -->
        <span class="slds-icon_container slds-icon-utility-announcement" title="Description of icon when needed">
            <svg class="slds-icon slds-icon-text-default" aria-hidden="true">
                <use xlink:href="{!URLFOR($Asset.SLDS, '/assets/icons/utility-sprite/svg/symbols.svg#announcement')}"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
        </span>
    </body>
</apex:page>
```

## Related Topics

- apex:stylesheet (atlas.en-us.pages.meta/pages/pages_compref_stylesheet.htm)
- Using the Lightning Design System (atlas.en-us.pages.meta/pages/pages_styling_slds.htm)
