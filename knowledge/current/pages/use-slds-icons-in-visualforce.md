---
title: "Use SLDS Icons in Visualforce"
domain: pages
topic: use-slds-icons-in-visualforce
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.588Z
estimatedTokens: 415
keywords: [SLDS, Icons, Visualforce, Lightning, Design, System, includes, PNG, SVG, individual, spritemap, versions, action, custom, doctype]
---

# Use SLDS Icons in Visualforce

> The Lightning Design System (SLDS) includes PNG and SVG (both individual and spritemap)
    versions of our action, custom, doctype, standard, and utility icons.

# Use SLDS Icons in Visualforce

The Lightning Design System (SLDS) includes PNG and SVG (both individual and spritemap) versions of our action, custom, doctype, standard, and utility icons.

To use SVG spritemap icons in your Visualforce page, add the attributes xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"to the <html\> tag.

```

```

Since the icon is standalone and carries meaning, we placed it inside an outer span with the slds-icon\_container class.

The icons have no background color out of the box. To set a background color, we apply a second class to the span. To use the default color for a particular icon, construct the name of the icon's specific utility class by concatenating slds-icon-, the sprite map name, and \-icon. Apply that class to the <span\> element. In the example we are using the "standard" sprite map and the “account” icon so the class is slds-icon-standard-account.

Inside the <span\>, we have a <svg\> element with the slds-icon class. The <svg\> element in turn contains a <use> tag that specifies the icon to display based on its xlink:href attribute.

To set the xlink:href path:

1.  Select the icon you want to use from the icons page. Make a note of which category it’s in (action, custom, doctype, standard, or utility).
2.  Complete the xlink:href attribute by concatenating the category sprite (for example, “standard-sprite”), /svg/symbols.svg# and the specific icon within it (for example, “account”). This gives us the path assets/icons/standard-sprite/svg/symbols.svg#account.

After the <svg\> tag, the assistive text is within a span with the slds-assistive-text class.

## Code Examples

```
<span class="slds-icon_container slds-icon-standard-account" title="description of icon when needed">  
  <svg aria-hidden="true" class="slds-icon">  
    <use xlink:href="{!URLFOR($Asset.SLDS, 'assets/icons/standard-sprite/svg/symbols.svg#account')}"></use>
  </svg>  
   <span class="slds-assistive-text">Icon Assistive Text</span> 
</span>
```
