---
title: "Using the Salesforce Lightning Design System in Apps"
domain: lightning
topic: using-the-salesforce-lightning-design-system-in-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.018Z
estimatedTokens: 605
keywords: [Salesforce, Lightning, Design, System, Apps, SLDS, look, feel, that’s, consistent, Experience, styles, give, custom, stand-alone]
---

# Using the Salesforce Lightning Design System in Apps

> The Salesforce Lightning Design System (SLDS) provides a look and
      feel that’s consistent with Lightning Experience. Use Lightning Design System styles to give your custom stand-alone Lightning applications
      a UI that is consistent with Salesforce, without having to reverse-engineer our styles.

# Using the Salesforce Lightning Design System in Apps

The Salesforce Lightning Design System (SLDS) provides a look and feel that’s consistent with Lightning Experience. Use Lightning Design System styles to give your custom stand-alone Lightning applications a UI that is consistent with Salesforce, without having to reverse-engineer our styles.

Your application automatically gets Lightning Design System styles and design tokens if it extends force:slds. This method is the easiest way to stay up to date and consistent with Lightning Design System enhancements.

To extend force:slds:

```

```

## Using a Static Resource

When you extend force:slds, the version of Lightning Design System styles is automatically updated whenever the CSS changes. If you want to use a specific Lightning Design System version, download the version and add it to your org as a static resource.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

We recommend extending force:slds instead so that you automatically get the latest Lightning Design System styles. If you stick to a specific Lightning Design System version, your app’s styles will gradually start to drift from later versions in Lightning Experience or incur the cost of duplicate CSS downloads.

To download a version of Lightning Design System that doesn’t exceed the maximum size for a static resource, go to the Lightning Design System [downloads page](https://www.lightningdesignsystem.com/resources/downloads/ "HTML (New Window)").

Salesforce recommends that you name the Lightning Design System archive static resource using the name format SLDS###, where ### is the Lightning Design System version number (for example, SLDS252). This lets you have multiple versions of the Lightning Design System installed, and manage version usage in your components.

To use the static version of the Lightning Design System in a component, include it using <ltng:require/>. For example:

```

```

#### See Also

-   [Styling with Design Tokens and Styling Hooks](atlas.en-us.lightning.meta/lightning/tokens_intro.htm "Capture the essential values of your visual design into named tokens or global styling hooks. Reuse these values throughout your Lightning components CSS resources. Tokens and styling hooks make it easy to ensure that your design is consistent, and even easier to update your design as it evolves.")

## Code Examples

```
<aura:application extends="force:slds">
    <!-- customize your application here -->
</aura:application>
```

```
<aura:component>
    <ltng:require 
        styles="{!$Resource.SLDS252 +
            '/styles/salesforce-lightning-design-system.min.css'}" />
</aura:component>
```

## Related Topics

- Styling with Design Tokens and Styling Hooks (atlas.en-us.lightning.meta/lightning/tokens_intro.htm)
