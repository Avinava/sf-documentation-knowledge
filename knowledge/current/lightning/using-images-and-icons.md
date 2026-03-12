---
title: "Using Images and Icons"
domain: lightning
topic: using-images-and-icons
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:47.887Z
estimatedTokens: 922
keywords: [Images, Icons, display, HTML, <img>, element, Include, image, component, uploading, resource, content, asset.To, icon, lightning]
---

# Using Images and Icons

> To display images, use the HTML <img> element.
            Include an image in your component by uploading it as a static resource or content asset.To display
            an icon, use the lightning:icon component, which
            gives you access to Salesforce Lightning Design System icons or your

# Using Images and Icons

To display images, use the HTML <img> element. Include an image in your component by uploading it as a [static resource](atlas.en-us.lightning.meta/lightning/expr_resource_value_provider.htm "The $Resource global value provider lets you reference images, style sheets, and JavaScript code you’ve uploaded in static resources.") or [content asset](atlas.en-us.lightning.meta/lightning/expr_contentasset_value_provider.htm "The $ContentAsset global value provider lets you reference images, style sheets, and JavaScript used as asset files in your Lightning components.").To display an icon, use the lightning:icon component, which gives you access to Salesforce Lightning Design System icons or your own custom icon. To display an avatar, use lightning:avatar.Consider lightning:buttonIcon or lightning:buttonIconStateful to display an actionable image such as a Like or Follow image.

Follow these accessibility guidelines when using images and icons in your component.

## Informational Images and Icons

Informational images and icons can provide information that’s not available in the text, such as an image that represents an approved step. Include alternative text for images and icons to help users without access to the images and icons. Use the alt attribute with the <img> element and alternativeText attribute with the base components.

**Image with Alternative Text:**

```

```

**Icon with Alternative Text:**

```

```

**Avatar with Alternative Text:**

```

```

**Stateful Button Icon with Alternative Text:**

An informational image or icon, such as a Like icon, is actionable and can stand alone in a button or hyperlink.

```

```

**CSS with Alternative Text:**

If you use CSS to display an informational image, you must provide assistive text.

```

```

## Decorative Images and Icons

Decorative images are images that can be removed without affecting the logic or content of the page. Assistive text is optional for decorative images.

For example, placing an add icon or checkmark icon next to a text label reinforces the text’s meaning but adds no new information. Consider this Follow button with an add icon next to it. When clicked, the button label changes to “Following” and its icon updates to a checkmark. The icons don’t require assistive text.

```

```

The base components discussed in this topic implement the [iconography design and accessibility guidelines](https://lightningdesignsystem.com/guidelines/iconography/) in the Salesforce Lightning Design System.

#### See Also

-   [*Component Library*: lightning:avatar documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:avatar "Component Library: lightning:avatar
    documentation - HTML (New Window)")

-   [*Component Library*: lightning:buttonIcon documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:buttonIcon "Component Library: lightning:buttonIcon
    documentation - HTML (New Window)")

-   [*Component Library*: lightning:buttonIconStateful documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:buttonIconStateful "Component Library: lightning:buttonIconStateful
    documentation - HTML (New Window)")

-   [*Component Library*: lightning:buttonStateful documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:buttonStateful "Component Library: lightning:buttonStateful
    documentation - HTML (New Window)")

-   [*Component Library*: lightning:icon documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:icon "Component Library: lightning:icon documentation - HTML (New Window)")

## Code Examples

```
<img src="{!$Resource.profile_pic}" alt="User avatar"/>
```

```
<lightning:icon iconName="action:approval" size="large" alternativeText="Indicates approval"/>
```

```
<lightning:avatar src="{!$Resource.profile_pic}" alternativeText="John Smith"/>
```

```
<lightning:buttonIconStateful 
        iconName="utility:like"
        selected="{! v.liked }"
        onclick="{! c.handleLikeButtonClick }"
        alternativeText="Like" />
```

```
<div class="Following">
    <span class="slds-assistive-text">Following</span>
</div>
```

## Related Topics

- static resource (atlas.en-us.lightning.meta/lightning/expr_resource_value_provider.htm)
- content asset (atlas.en-us.lightning.meta/lightning/expr_contentasset_value_provider.htm)
