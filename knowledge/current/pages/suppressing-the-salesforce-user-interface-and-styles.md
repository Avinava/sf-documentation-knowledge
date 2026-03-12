---
title: "Suppressing the Salesforce User Interface and
    Styles"
domain: pages
topic: suppressing-the-salesforce-user-interface-and-styles
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.224Z
estimatedTokens: 659
keywords: [Suppressing, Salesforce, User, Styles, Visualforce, pages, adopt, visual, styling, “chrome”, rest, behavior, lets, look, they’re]
---

# Suppressing the Salesforce User Interface and
    Styles

> By default, Visualforce pages adopt the same visual styling and user interface “chrome”
    as the rest of Salesforce. This default styling behavior lets you create pages that look like
    they’re built right into Salesforce. If you don’t want a page to have the Salesforce look and
    feel, you can suppress various aspects of the Salesforce page and visual design.

# Suppressing the Salesforce User Interface and Styles

By default, Visualforce pages adopt the same visual styling and user interface “chrome” as the rest of Salesforce. This default styling behavior lets you create pages that look like they’re built right into Salesforce. If you don’t want a page to have the Salesforce look and feel, you can suppress various aspects of the Salesforce page and visual design.

You can change the page-level user interface resources added by Visualforce using the following attributes on the <apex:page\> component.

-   sidebar—Set to false to suppress the standard sidebar. Removing the sidebar gives your page a wider canvas. For example, you can show more columns in a table.

    This attribute doesn’t affect the rest of the Salesforce look and feel. You can continue to use components like <apex:pageBlock\>, <apex:detail\>, and <apex:inputField\> that render with Salesforce user interface styling.

-   showHeader—Set to false to suppress the standard Salesforce page design. The header, tabs, and sidebar are removed, along with their associated style sheets and JavaScript resources, like scripts that aid with redirects on session timeout. You have a blank page ready to fill in with your own user interface.

    However, suppressing standard page design does not suppress all the style sheets and scripts that provide the Salesforce visual design or other scripts included the page. Visualforce components that you add to the page continue to adopt the Salesforce visual design.

-   standardStylesheets—Set to false, along with setting showHeader to false, to suppress the inclusion of the style sheets that support the Salesforce visual design. When you suppress the standard style sheets, your page is unstyled, except for your own style sheets.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    If you don’t load the Salesforce style sheets, components that require them don’t display correctly.

    Setting this attribute to false has no effect if showHeader isn’t also set to false.


#### See Also

-   [Using Custom Styles](atlas.en-us.pages.meta/pages/pages_styling_custom.htm "Use the <apex:stylesheet> tag or static HTML to include your own style sheet or styles.")

-   [Creating an Empty HTML5 “Container” Page](atlas.en-us.pages.meta/pages/pages_html_container_page.htm "Use an empty container page when you want to bypass most of Visualforce and add your own markup. A container page is especially useful for HTML5 and mobile development and other web apps for which standard Visualforce output isn’t desired.")

## Related Topics

- Using Custom Styles (atlas.en-us.pages.meta/pages/pages_styling_custom.htm)
- Creating an Empty HTML5 “Container” Page (atlas.en-us.pages.meta/pages/pages_html_container_page.htm)
