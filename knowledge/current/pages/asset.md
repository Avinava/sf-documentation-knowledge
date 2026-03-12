---
title: "$Asset"
domain: pages
topic: asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.354Z
estimatedTokens: 359
keywords: [$Asset, merge, referencing, images, assets, part, Lightning, Design, System, Usage]
---

# $Asset

> A global merge field to use when referencing images and other assets that are part of
    the Lightning Design System.

# $Asset

A global merge field to use when referencing images and other assets that are part of the Lightning Design System.

## Usage

In a Visualforce page that uses <apex:slds>, $Asset.SLDS allows you to use the images, icons, and avatars that are part of the Lightning Design System. Use the URLFOR() formula function to reference assets using $Asset with dot notation.

To use SVG icons, add the required XML namespaces by using xmlns="http://www.w3.org/2000/svg" and xmlns:xlink="http://www.w3.org/1999/xlink" in the html tag.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If you’re using the Salesforce sidebar, header, or built-in style sheets, you can’t add attributes to the html. VG icons are supported only if showHeader, standardStylesheets, and sidebar are set to false.

## Example

The following markup references an avatar in the Lightning Design System.

```

```

The following markup references the Lightning Design System’s SVG account icon.

```

```

#### See Also

-   [Using the Lightning Design System](atlas.en-us.pages.meta/pages/pages_styling_slds.htm "Use the <apex:slds> element to incorporate the Lightning Design System in your Visualforce pages and align them with the styling of Lightning Experience. This component is a streamlined alternative to uploading the Lightning Design System as a static resource and using it in your Visualforce pages.")

## Code Examples

```
<apex:page>
    <apex:slds />
    <span class="slds-icon_container slds-icon--small slds-icon-standard-account" title="Contact Avatar">
        <img src="{!URLFOR($Asset.SLDS, 'assets/images/profile_avatar_96.png')}" alt="Contact Avatar" />
    </span>
</apex:page>
```

```
<apex:page>
    <html xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" lang="en">
        <apex:slds />
        <span class="slds-icon_container slds-icon-standard-account">
            <svg aria-hidden="true" class="slds-icon">
                <use xlink:href="{!URLFOR($Asset.SLDS, 'assets/icons/standard-sprite/svg/symbols.svg#account')}"></use>
            </svg>
             <span class="slds-assistive-text">Account Icon</span>
        </span>
    </html>
</apex:page>
```

## Related Topics

- Using the Lightning Design System (atlas.en-us.pages.meta/pages/pages_styling_slds.htm)
