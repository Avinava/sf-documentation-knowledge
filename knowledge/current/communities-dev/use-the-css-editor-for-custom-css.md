---
title: "Use the CSS Editor for Custom CSS"
domain: communities-dev
topic: use-the-css-editor-for-custom-css
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.269Z
estimatedTokens: 880
keywords: [CSS, Editor, Custom, Experience, Builder, style, elements, across, Aura, site, option, suitable, you’re, familiar, want]
---

# Use the CSS Editor for Custom CSS

> Use the CSS Editor in Experience Builder to create custom CSS to style elements across
    your Aura site. This option is suitable if you’re familiar with CSS and want to make only minor
    modifications to some template components.

# Use the CSS Editor for Custom CSS

Use the CSS Editor in Experience Builder to create custom CSS to style elements across your Aura site. This option is suitable if you’re familiar with CSS and want to make only minor modifications to some template components.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=communities_dev)

#### Warning

Use custom CSS sparingly and avoid targeting DOM elements in components that you don’t own. Doing so is brittle because changes to the component’s internal DOM structure is likely to break hard-coded CSS selectors. Salesforce can change the internal implementation of Salesforce components at any point . Additionally, Salesforce Customer Support can’t help resolve any issues with custom CSS.

![CSS Editor](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fcustom_css5.png&folder=communities_dev)

To make minor CSS modifications to a component, use Chrome DevTools to inspect the page and discover the item’s fully qualified name and CSS class.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=communities_dev)

#### Tip

For substantial template customizations, instead of using custom CSS, use the CSS resource in custom Lightning web components or Aura components and in custom theme layout components. If you use global overrides, always test your site in sandbox when it’s updated each release.

You can link to a CSS style sheet as either a static or external resource in the head markup in **Settings** | **Advanced**. However, because global value providers aren’t supported in the head markup or in CSS overrides, you can’t use $resource to reference static resources. Instead, use a relative URL using the syntax /sfsites/c/resource/resource\_name.

For example, if you upload an image as a static resource called Headline, reference it in the CSS Editor as follows:

```

```

Head markup is also useful for adding favicon icons, SEO meta tags, and other items. However, be aware that using the default [strict CSP security level](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_csp.htm#communities_dev_security_locker_csp "Aura and LWR sites in Experience Cloud use Content Security Policy (CSP) and either Lightning Web Security (LWS) or Lightning Locker to secure the site from malicious attacks and custom code vulnerabilities. Factor in the potential impact of these security features when you develop your own custom components, use third-party components, or add custom code in the head markup.") can affect your code.

-   **[Migrate CSS Overrides](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_migrate_css.htm)**
    Between Spring ’17 and Winter ’19, the CSS selectors of several Experience Builder components were updated. If you haven’t updated your template since then, and your site uses custom CSS to override the default template and Theme panel styles, you must migrate to the new selectors.

#### See Also

-   [*Salesforce Help*: Static Resources](https://help.salesforce.com/articleView?id=pages_static_resources.htm&language=en_US "Salesforce Help: Static Resources - HTML (New Window)")

-   [*Salesforce Help*: Add Markup to the Page <head\> to Customize Your Experience Builder Site](https://help.salesforce.com/articleView?id=community_builder_page_head.htm&language=en_US "Salesforce Help: Add Markup to the Page <head> to Customize Your Experience Builder Site - HTML (New Window)")

## Code Examples

```
.forceCommunityHeadline
{
    background-image: url('/sfsites/c/resource/headline')
}
```

## Related Topics

- strict CSP security level (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_csp.htm)
- Migrate CSS Overrides (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_migrate_css.htm)
