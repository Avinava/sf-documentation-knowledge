---
title: "Brand Your Aura Site"
domain: communities-dev
topic: brand-your-aura-site
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.262Z
estimatedTokens: 1305
keywords: [Brand, Aura, Site, Customize, look, feel, Theme, panel, Experience, Builder, develop, own, custom, components, achieve]
---

# Brand Your Aura Site

> Customize the look and feel of your Aura site using the Theme panel in Experience
    Builder or develop your own custom components to achieve a pixel-perfect design.

# Brand Your Aura Site

Customize the look and feel of your Aura site using the Theme panel in Experience Builder or develop your own custom components to achieve a pixel-perfect design.

Within Experience Builder, you can modify styles that are specific to the template and therefore can’t be shared between sites. The options in Experience Builder are the simplest to use and don’t require component development.

-   [The Theme panel](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_brand.htm#communities_dev_customize_brand "Within Experience Builder, the simplest way to change the look of a template is with the Theme panel. Administrators can quickly style an entire sites using the theme panels to apply colors, specify fonts, add a logo, or adjust general page structure and defaults.") updates the template with simple, point-and-click properties. This approach is ideal for admins to use.

    Individual component property panels, such as for headers or search, provide additional more specific adjustments in look and feel.

-   [The CSS Editor](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_css.htm#communities_dev_customize_css "Use the CSS Editor in Experience Builder to create custom CSS to style elements across your Aura site. This option is suitable if you’re familiar with CSS and want to make only minor modifications to some template components.") lets you create custom CSS to style elements across your site. This option is suitable if you’re familiar with CSS and want to make only minor modifications to some template components. With theme swapping in Aura sites, custom CSS is tied directly to your active theme.

To customize the appearance of your site completely, however, you need to develop your own custom components. Aura sites support both Lightning web components and Aura components. Where possible, we recommend developing Lightning web components we because they perform better and are easier to develop.

-   Custom Lightning web components and Aura components encapsulate a CSS resource as part of the component bundle, making the components reusable across sites.
-   Content layout components define the content regions of your page and contain components.
-   [Theme layout components](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_theme.htm#communities_dev_customize_theme "To put your own stamp on a template theme and transform its appearance, build a custom theme layout component. You can customize the template’s structural layout, such as the header and footer, and override its default styles.") let you customize the structural layout of the template, such as the header and footer, and override its default styles.

-   **[Update a Template with the Theme Panel](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_brand.htm)**
    Within Experience Builder, the simplest way to change the look of a template is with the Theme panel. Administrators can quickly style an entire sites using the theme panels to apply colors, specify fonts, add a logo, or adjust general page structure and defaults.
-   **[Use the CSS Editor for Custom CSS](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_css.htm)**
    Use the CSS Editor in Experience Builder to create custom CSS to style elements across your Aura site. This option is suitable if you’re familiar with CSS and want to make only minor modifications to some template components.
-   **[Use Custom Fonts in Your Experience Builder Site](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_font.htm)**
    Upload custom fonts as static resources and use them for primary and header fonts throughout your site. If you’ve more than one font file to upload, use a .zip file.
-   **[Customize the Theme Layout of Your Template](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_theme.htm)**
    To put your own stamp on a template theme and transform its appearance, build a custom theme layout component. You can customize the template’s structural layout, such as the header and footer, and override its default styles.
-   **[Use Expressions to Add Dynamic Data to Aura Sites](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_expressions_aura.htm)**
    With expressions, you can access property values and other information to pass into a component's attributes.
-   **[Configure Swappable Search and Profile Menu Components](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_swappable.htm)**
    Create custom components to replace the template’s standard Profile Header and Search & Post Publisher components in Experience Builder.
-   **[Ensure Custom Components in Orgs with Experience Cloud Sites Are Secure](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_custom_comp_security.htm)**
    Developers can customize functionality and business logic in Experience Cloud sites by using custom components. As with any custom solution, developers must be aware of potential security-related pitfalls. Bypassing built-in defenses can expose sites and orgs to security risks.

## Related Topics

- The Theme panel (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_brand.htm)
- The CSS Editor (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_css.htm)
- Theme layout components (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_theme.htm)
- Update a Template with the Theme Panel (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_brand.htm)
- Use the CSS Editor for Custom CSS (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_css.htm)
- Use Custom Fonts in Your Experience Builder Site (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_font.htm)
- Customize the Theme Layout of Your Template (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_theme.htm)
- Use Expressions to Add Dynamic Data to Aura Sites (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_expressions_aura.htm)
- Configure Swappable Search and Profile Menu Components (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_swappable.htm)
- Ensure Custom Components in Orgs with Experience Cloud Sites Are Secure (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_custom_comp_security.htm)
