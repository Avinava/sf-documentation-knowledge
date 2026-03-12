---
title: "Create Theme Layouts in an LWR Site"
domain: exp-cloud-lwr
topic: create-theme-layouts-in-an-lwr-site
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.732Z
estimatedTokens: 1000
keywords: [Theme, Layouts, LWR, Site, layout, components, define, shared, regions, pages, component, determines, footer, often, includes]
---

# Create Theme Layouts in an LWR Site

> Theme layouts and theme layout components define the shared regions of LWR site
        pages. A theme layout component determines the header and footer for a site page and often
        includes navigation, search, and a user profile menu. You use the theme layout component in
        a theme layout and then assign the theme layout to a page. That way, every site page that
        you assign the theme layout to shows the same header and footer. LWR sites come with some
        theme layouts and theme layout components, and you can create your own.

# Create Theme Layouts in an LWR Site

Theme layouts and theme layout components define the shared regions of LWR site pages. A theme layout component determines the header and footer for a site page and often includes navigation, search, and a user profile menu. You use the theme layout component in a theme layout and then assign the theme layout to a page. That way, every site page that you assign the theme layout to shows the same header and footer. LWR sites come with some theme layouts and theme layout components, and you can create your own.

Let’s say that you have a primary theme layout for your site that uses the Scoped Header and Footer theme layout component. The Scoped Header and Footer component includes your logo, a navigation menu, and a user profile menu in the header, and contact links in the footer. Now you want to add a Create Case button to the header on your knowledge base page only. You can create a theme layout called Knowledge Base, apply it to the knowledge base page, and add the button to the header.

1.  In **Settings** | **Theme**, click **New Theme Layout**.
2.  Enter the name of the new theme layout, assign your chosen theme layout component to the new layout, and save the change.

    In this example, you add the Scoped Header and Footer theme layout component to your new Knowledge Base theme layout. Because Scoped Header and Footer includes your logo, the navigation menu, and the user profile menu in the page header, the new theme layout also includes those elements.

    ![Theme panel in Experience Builder showing Theme Layouts](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_theme_layout_panel.png&folder=exp_cloud_lwr)

3.  From the Pages menu in Experience Builder, select the page where you want to apply the new theme layout. In this example, you choose your site’s knowledge base page.
4.  In the page settings, select **Override the default theme layout for this page**, and then select your new theme layout.
5.  On the page itself, add your desired component or components to the header or footer. In this example, you add a Button component to the header.

    Now the header with the button appears on your knowledge base page, and the other pages on your site show the header without the button.


![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

To create your own theme layout component, see the Theme Layout section in [Create Custom Layout Components](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_layout.htm "Layouts are supported in the Build Your Own (LWR) template using Lightning web components instead of Aura components. You can also create your own custom layouts in the same way as for Aura sites, but with some minor changes in syntax.").

On sites created with the Build Your Own (LWR) template, additional layout options are available on pages whose theme layout uses the Scoped Header and Footer theme layout component. In **Theme** | **Theme Layout Settings**, select

-   **Fix theme header** when you want the entire header region to always remain visible at the top of the page.
-   **Hide theme footer** when you want to hide the footer from view.
-   **Position theme footer at page bottom** when you want the footer region to sit at the bottom of the page. Depending on the page length, site visitors could be required to scroll down to see the footer.

![Theme Layout Settings panel in the Experience Builder Theme tab](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_theme_layout_settings_panel.png&folder=exp_cloud_lwr)

These choices are also available in **Settings** | **Theme** in the property settings for any theme layout component of the type Scoped Header and Footer.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

When you change a theme layout, for example by fixing the theme header, that change appears on every page where this theme layout is assigned.

## Related Topics

- Create Custom
                    Layout Components (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_layout.htm)
