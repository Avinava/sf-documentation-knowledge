---
title: "LWR Template Limitations"
domain: exp-cloud-lwr
topic: lwr-template-limitations
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.806Z
estimatedTokens: 1517
keywords: [LWR, Template, Limitations, templates, Experience, Cloud, don’t, include, features, Aura, Check, current, differences, begin, creating]
---

# LWR Template Limitations

> LWR templates in Experience Cloud don’t include the same features as Aura templates.
    Check out the current differences and limitations before you begin creating your
    site.

# LWR Template Limitations

LWR templates in Experience Cloud don’t include the same features as Aura templates. Check out the current differences and limitations before you begin creating your site.

## Unsupported Features and Settings

The following items are unavailable.

-   Several of the [default components and pages](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_pages.htm "The Build Your Own (LWR) and the Microsite (LWR) templates in Experience Cloud provide only the most essential out-of-the-box pages and components.") that you get with Aura templates, such as Chatter feeds
-   Some preconfigured standard pages, such as Account Management, are used when [creating custom pages](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_create_pages.htm "LWR templates in Experience Cloud provide only a few key default pages, so you can create additional custom pages for your particular use case.")
-   Default themes and theme management
-   Right-to-left languages in standard components
-   Progressive rendering
-   Changes to the favicon at the site's root domain
-   Template, page, and theme export and Lightning Bolt Solutions
-   Template-level accessibility features, such as a skip link
-   App-level [events](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/events_application.htm "HTML (New Window)") that you get with Aura templates, although you can use [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent "HTML (New Window)")
-   [Some base components and features](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_limitations.htm "In LWR sites for Experience Cloud, you can use most of the components in the Lightning Component Library, but there are some limitations.") from the Lightning Component Library
-   Some properties in the [@salesforce/i18n module](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_module.htm "LWR sites in Experience Cloud support @salesforce modules, which add functionality to Lightning web components at runtime.")
-   Mobile and value providers such as [$Browser](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/expr_browser_value_provider.htm#! "HTML (New Window)")
-   The pageAccess property in the ExperienceBundle metadata type
-   Session timeout alerts
-   Salesforce Community Page Optimizer
-   Surveys

## Experience Workspaces Limitations

Only the Administration, Builder, Dashboards, and Guided Setup workspaces are available.

## Experience Builder Limitations

-   In the toolbar, the **Undo** and **Redo** buttons and some Help options are unavailable.
-   In the Theme panel, branding sets, theme settings, and the CSS editor are unavailable. For alternative solutions, such as creating section palettes or adding style sheets to the head markup, see [Brand Your LWR Site](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand.htm "Build LWR sites that consistently match your brand with the new Lightning Web Runtime (LWR) design system. The system includes base components that follow design best practices, and uses --dxp styling hooks to make it easier to get the look you want.").
-   For enhanced LWR sites, to show all components in the Components palette, you must enable **Show all components** in the Advanced panel each time you open or reload Experience Builder.
-   When working with components, some hover actions and some of the action menu options in the property editor are unavailable.
-   When you modify records while previewing your site in Experience Builder, you sometimes see stale record data when you navigate to a previous page. To fix this issue, refresh your browser.
-   Experience admins can't access record pages in Experience Builder for objects that they don't have access to.

## LWR Site Limitations

An LWR site supports up to 500 routes, or unique URLs. For best performance, keep the number of routes below 250. Dynamic content can help keep your number of routes lower. For example, don’t create an individual page with a unique route for each content item. Instead, use record details to represent your content, and then create a single page that shows record details and requires only one route.

## Enhanced LWR Site Limitations

For enhanced LWR sites, referential integrity for object API names in object routes is unsupported. If you rename an object that a page component references, the connection to the object breaks.

## Dynamic Component Import Limitations

You can import and instantiate a Lightning web component dynamically in LWR sites. However, LWR sites only support statically analyzable dynamic imports. For this use case, import(“c/analyzable”) works, but import(“c/” + “analyzable”) doesn’t work because it isn’t statically analyzable. Similarly, import(“c/” + componentName);  or import(“c/” + componentNameVariable) also don’t work.

## Lightning Web Security Limitations

Instead of Lightning Locker, LWR sites use Lightning Web Security (LWS), the new security architecture for Lightning web components. These properties are currently unsupported for LWS in LWR sites.

-   document.domain
-   document.location
-   window.location
-   window.top

## Asset Files in Sandbox Limitations

Full and Partial Copy sandboxes can support asset files along with other content entities. Asset files are unsupported in Developer and Developer Pro sandboxes. When defining the sandbox template for Full and Partial Copy sandboxes, make sure to select **Content Body** in the template also.

For unsupported sandboxes, if your site contains a Lightning web component with a [@salesforce/contentAsset](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/create_content_assets) reference, the reference breaks in the site on the sandbox org. In LWR sites, the component can’t render, and you can’t publish the site until you delete the component from the page or remove the asset reference from the component. In Aura sites, the imported reference resolves to an invalid URL.

## Related Topics

- default
            components and pages (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_pages.htm)
- creating custom pages (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_create_pages.htm)
- Some base components and features (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_limitations.htm)
- @salesforce/i18n module (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_module.htm)
- Brand Your LWR Site (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand.htm)
