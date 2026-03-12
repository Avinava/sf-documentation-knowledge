---
title: "Customizing the Appearance and Output of Visualforce Pages"
domain: pages
topic: customizing-the-appearance-and-output-of-visualforce-pages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.655Z
estimatedTokens: 709
keywords: [Customizing, Appearance, Output, Visualforce, Pages, components, HTML, that’s, sent, browser, rendering, Visualforce’s, generation, sophisticated, automatically]
---

# Customizing the Appearance and Output of Visualforce Pages

> Visualforce pages and components
  output HTML that’s sent to the browser for rendering. Visualforce’s HTML generation is
  sophisticated, automatically providing page structure, contents, and styling. Visualforce also provides a number of ways to
  alter Visualforce’s default HTML,
  substitute your own, or associate additional resources, such as CSS stylesheets or JavaScript
  files, with a page.

# Customizing the Appearance and Output of Visualforce Pages

Visualforce pages and components output HTML that’s sent to the browser for rendering. Visualforce’s HTML generation is sophisticated, automatically providing page structure, contents, and styling. Visualforce also provides a number of ways to alter Visualforce’s default HTML, substitute your own, or associate additional resources, such as CSS stylesheets or JavaScript files, with a page.

-   **[Styling Visualforce Pages](atlas.en-us.pages.meta/pages/pages_styling.htm)**
    It’s easy to style a Visualforce page, either by mimicking the look and feel of a standard Salesforce page, or by using your own stylesheets or content types.
-   **[HTML Comments and IE Conditional Comments](atlas.en-us.pages.meta/pages/pages_html_features_ie_conditional_comments.htm)**
    Visualforce removes most HTML and XML comments from the page before rendering, without processing their contents. Internet Explorer conditional comments, however, *won’t* be removed, allowing you to include IE-specific resources and meta tags.
-   **[HTML Tags Added or Modified by Visualforce](atlas.en-us.pages.meta/pages/pages_html_features_tags_auto.htm)**
    By default, Visualforce automatically adds required HTML tags to a page to ensure the result is a valid HTML (and XML) document. You can relax and even override this behavior.
-   **[Using a Custom Doctype](atlas.en-us.pages.meta/pages/pages_styling_doctype.htm)**
    You can specify a different “doctype” (document type, or DTD) for a Visualforce page by using the docType attribute on the <apex:page\> tag. This changes the doctype declaration at the beginning of the page. This is particularly useful if you’re working with HTML5, and might also allow you to address browser compatibility issues.
-   **[Change the MIME type of Your Visualforce Page](atlas.en-us.pages.meta/pages/pages_styling_content_type.htm)**
    You can specify a different format for a Visualforce page by using the contentType attribute on the <apex:page\> tag. This sets the HTTPContent-Type header for the response to the value of the page’s contentType attribute.
-   **[Setting Custom HTML Attributes on Visualforce Components](atlas.en-us.pages.meta/pages/pages_html_features_pass_through_attributes.htm)**
    You can add arbitrary attributes to many Visualforce components that are “passed through” to the rendered HTML. This is useful, for example, when using Visualforce with JavaScript frameworks, such as jQuery Mobile, AngularJS, and Knockout, which use data-\* or other attributes as hooks to activate framework functions.
-   **[Render a Visualforce Page as a PDF File](atlas.en-us.pages.meta/pages/pages_output_pdf_renderas.htm)**
    You can generate a downloadable, printable PDF file of a Visualforce page using the PDF rendering service.

## Related Topics

- Styling Visualforce Pages (atlas.en-us.pages.meta/pages/pages_styling.htm)
- HTML Comments and IE Conditional Comments (atlas.en-us.pages.meta/pages/pages_html_features_ie_conditional_comments.htm)
- HTML Tags Added or Modified by Visualforce (atlas.en-us.pages.meta/pages/pages_html_features_tags_auto.htm)
- Using a Custom Doctype (atlas.en-us.pages.meta/pages/pages_styling_doctype.htm)
- Change the MIME type of Your Visualforce Page (atlas.en-us.pages.meta/pages/pages_styling_content_type.htm)
- Setting Custom HTML Attributes on Visualforce Components (atlas.en-us.pages.meta/pages/pages_html_features_pass_through_attributes.htm)
- Render a Visualforce Page as a PDF File (atlas.en-us.pages.meta/pages/pages_output_pdf_renderas.htm)
