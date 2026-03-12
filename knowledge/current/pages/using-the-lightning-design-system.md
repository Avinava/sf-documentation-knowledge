---
title: "Using the Lightning Design System"
domain: pages
topic: using-the-lightning-design-system
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.220Z
estimatedTokens: 862
keywords: [Lightning, Design, System, <apex, slds>, element, incorporate, Visualforce, pages, align, styling, Experience, component, streamlined, alternative]
---

# Using the Lightning Design System

> Use the <apex:slds> element
    to incorporate the Lightning Design System in your Visualforce pages and align them with the
    styling of Lightning Experience. This component is a streamlined alternative to uploading the
    Lightning Design System as a static resource and using it in your Visualforce pages.

# Using the Lightning Design System

Use the <apex:slds\> element to incorporate the Lightning Design System in your Visualforce pages and align them with the styling of Lightning Experience. This component is a streamlined alternative to uploading the Lightning Design System as a static resource and using it in your Visualforce pages.

You don’t have to upload the Lightning Design System as a static resource. That means you can keep the syntax of your page simple and stay under the 250-MB static resource limit. To use Lightning Design System style sheets in your Visualforce page, add <apex:slds /> anywhere in your page markup.

To use Lightning Design System style sheets in your Visualforce page:

1.  Add <apex:slds /> anywhere in your page markup.
2.  Set the <apex:page> applyBodyTag or applyHtmlTag attribute to false.
3.  Include the slds-scope class on any SLDS style or asset parent element.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pages)

#### Warning

Don’t wrap any Visualforce tags in the slds-scope element.

```

```

In general, the Lightning Design System is already scoped. However, if you set applyBodyTag or applyHtmlTag to false, you must include the scoping class slds-scope. Within the scoping class, your markup can reference Lightning Design System styles and assets.

To reference assets in the Lightning Design System, such as SVG icons and images, use the URLFOR() formula function and the $Asset global variable. Use the following markup, for example, to reference the SVG account icon.

```

```

To use SVG icons, add the required XML namespaces by using xmlns="http://www.w3.org/2000/svg" and xmlns:xlink="http://www.w3.org/1999/xlink" in the html tag.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If you’re using the Salesforce sidebar, header, or built-in style sheets, you can’t add attributes to the html. VG icons are supported only if showHeader, standardStylesheets, and sidebar are set to false.

## Example

The following markup shows a simple account detail page. This page uses the Lightning Design System card element and the account standard controller. This page also includes the account PNG icon.

This page doesn’t have any data in it, unless you load it with a record ID. The Lightning Design System doesn’t support components that bring data into your Visualforce pages, such as <apex:pageBlock> and <apex:detail>. To access Salesforce data from pages using the Lightning Design System, use Remote Objects, JavaScript remoting, or REST API instead.

```

```

For more examples of Lightning Design System styling, see the [Salesforce Lightning Design System](https://lightningdesignsystem.com "HTML (New Window)") reference site, and learn more about the Lightning Design System on [Trailhead](https://trailhead.salesforce.com/en/search?keywords=lightning+design+system "HTML (New Window)").

#### See Also

-   [*Salesforce Help*: Customize the User Interface](https://help.salesforce.com/s/articleView?id=xcloud.customize_ui.htm&type=5&language=en_US "Salesforce Help: Customize the User Interface - HTML (New Window)")

-   [apex:slds](atlas.en-us.pages.meta/pages/pages_compref_slds.htm)

-   [$Asset](atlas.en-us.pages.meta/pages/pages_variables_global_asset.htm "A global merge field to use when referencing images and other assets that are part of the Lightning Design System.")

## Code Examples

```
<apex:page standardController="Account" applyBodyTag="false">
    <apex:slds /> 
 
    <!-- any Visualforce component should be outside SLDS scoping element -->
    <apex:outputField value="{!Account.OwnerId}" /> 
 
    <div class="slds-scope">
    <!-- SLDS markup here -->
    </div>
</apex:page>
```

```
<svg aria-hidden="true" class="slds-icon">
    <use xlink:href="{!URLFOR($Asset.SLDS, 'assets/icons/standard-sprite/svg/symbols.svg#account')}"></use>
</svg>
```

```
<apex:page showHeader="false" standardStylesheets="false" sidebar="false" docType="html-5.0" standardController="Account" applyBodyTag="False" applyHtmlTag="False">
<head>
  <title>{! Account.Name }</title>
  <apex:slds /> 
</head>

<body class="slds-scope">
    <!-- MASTHEAD -->
    <p class="slds-text-heading--label slds-m-bottom--small">
      Using the Lightning Design System in Visualforce
    </p>
    <!-- / MASTHEAD -->
        
    <!-- PAGE HEADER -->
    <p class="slds-text-title_caps slds-line-height--reset">Accounts</p>
        <h1 class="slds-page-header__title slds-truncate" title="My Accounts">{! Account.Name }</h1>
        <span class="slds-icon_container slds-icon-standard-account" title="Account Standard Icon">
          <svg class="slds-icon slds-page-header__icon" aria-hidden="true">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{!URLFOR($Asset.SLDS, 'assets/icons/standard-sprite/svg/symbols.svg#account')}" />
          </svg>
        </span>
          <!-- / HEADING AREA -->
      <div class="slds-col slds-no-flex slds-grid slds-align-top">
        <button class="slds-button slds-button--neutral">New Account</button>
      </div>
    <!-- / PAGE HEADER -->

    <!-- ACCOUNT DETAIL CARD -->
    <div class="slds-panel slds-grid slds-grid--vertical slds-nowrap">
      <div class="slds-form--stacked slds-grow slds-scrollable--y">

        <div class="slds-panel__section">
          <h3 class="slds-text-heading--small slds-m-bottom--medium">Account Detail</h3>
          <div class="slds-form-element slds-hint-parent slds-has-divider--bottom">
            <span class="slds-form-element__label">Name</span>
            <div class="slds-form-element__control">
              <span class="slds-form-element__static">{! Account.Name }</span>
            </div>
          </div>
          <div class="slds-form-element slds-hint-parent slds-has-divider--bottom">
            <span class="slds-form-element__label">Phone</span>
            <div class="slds-form-element__control">
              <span class="slds-form-element__static">{! Account.Phone }</span>
            </div>
          </div>
        </div>
        <div class="slds-panel__section slds-has-divider--bottom">
          <div class="slds-media">
            <div class="slds-media__body">
              <div class="slds-button-group slds-m-top--small" role="group">
                <button class="slds-button slds-button--neutral slds-grow">Edit</button>
                <button class="slds-button slds-button--neutral slds-grow">Save</button>
                 <button class="slds-button slds-button--neutral slds-grow">New Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / ACCOUNT DETAIL CARD -->
</body>
</apex:page>
```

## Related Topics

- apex:slds (atlas.en-us.pages.meta/pages/pages_compref_slds.htm)
- $Asset (atlas.en-us.pages.meta/pages/pages_variables_global_asset.htm)
