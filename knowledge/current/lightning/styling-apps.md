---
title: "Styling Apps"
domain: lightning
topic: styling-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.967Z
estimatedTokens: 726
keywords: [Styling, Apps, app, special, top-level, component, whose, markup, resource, any, put, CSS, bundle, <appName>.css]
---

# Styling Apps

> An app is a special top-level component whose markup is in a .app
  resource. Just like any other component, you can put CSS in its bundle in a resource called
   <appName>.css.

# Styling Apps

An app is a special top-level component whose markup is in a .app resource. Just like any other component, you can put CSS in its bundle in a resource called <appName>.css.

For example, if the app markup is in notes.app, its CSS is in notes.css.

When viewed in Salesforce for Android, iOS, and Lightning Experience, the components include styling that matches those visual themes. For example, the lightning:button includes the slds-button\_neutral class to display a neutral style.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Styles added to Lightning components in Salesforce for Android, iOS, and Lightning Experience don’t apply to components in standalone apps.

-   **[Using the Salesforce Lightning Design System in Apps](atlas.en-us.lightning.meta/lightning/apps_slds.htm)**
    The Salesforce Lightning Design System (SLDS) provides a look and feel that’s consistent with Lightning Experience. Use Lightning Design System styles to give your custom stand-alone Lightning applications a UI that is consistent with Salesforce, without having to reverse-engineer our styles.
-   **[Using External CSS](atlas.en-us.lightning.meta/lightning/apps_css_external_platform.htm)**
    To reference an external CSS resource, upload it as a static resource and use a <ltng:require> tag in your .cmp or .app markup.
-   **[More Readable Styling Markup with the join Expression Expression](atlas.en-us.lightning.meta/lightning/apps_css_markup.htm)**
    Markup can get messy when you specify the class names to apply based on the component attribute values. Try using a join expression for easier-to-read markup.
-   **[Tips for CSS in Components](atlas.en-us.lightning.meta/lightning/components_css_tips.htm)**
    Here are some tips for configuring the CSS for components that you plan to use in Lightning pages, the Lightning App Builder, or the Experience Builder.
-   **[CSS for RTL Languages](atlas.en-us.lightning.meta/lightning/apps_css_rtl.htm)**
    When your Language setting in Salesforce is set to a right-to-left (RTL) language, the framework automatically flips property names, such as left and border-left to right and border-right respectively. The framework also rearranges certain values like padding, margin, and border-radius so that the right and left units are swapped.
-   **[Styling with Design Tokens and Styling Hooks](atlas.en-us.lightning.meta/lightning/tokens_intro.htm)**
    Capture the essential values of your visual design into named tokens or global styling hooks. Reuse these values throughout your Lightning components CSS resources. Tokens and styling hooks make it easy to ensure that your design is consistent, and even easier to update your design as it evolves.

#### See Also

-   [CSS in Components](atlas.en-us.lightning.meta/lightning/components_css.htm "Style your components with CSS.")

## Related Topics

- Using the Salesforce Lightning Design System in Apps (atlas.en-us.lightning.meta/lightning/apps_slds.htm)
- Using External CSS (atlas.en-us.lightning.meta/lightning/apps_css_external_platform.htm)
- More Readable Styling Markup with the join Expression Expression (atlas.en-us.lightning.meta/lightning/apps_css_markup.htm)
- Tips for CSS in Components (atlas.en-us.lightning.meta/lightning/components_css_tips.htm)
- CSS for RTL Languages (atlas.en-us.lightning.meta/lightning/apps_css_rtl.htm)
- Styling with Design Tokens and Styling Hooks (atlas.en-us.lightning.meta/lightning/tokens_intro.htm)
- CSS in Components (atlas.en-us.lightning.meta/lightning/components_css.htm)
