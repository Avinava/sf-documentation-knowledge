---
title: "Using Static Resources"
domain: pages
topic: using-static-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.137Z
estimatedTokens: 465
keywords: [Resources, allow, upload, content, Visualforce, including, archives, zip, jar, files, images, style, sheets, JavaScript, Salesforce]
---

# Using Static Resources

> Static resources allow you to upload content that you can reference in a Visualforce
      page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and
      other files. Static resources can be used only within your Salesforce org, so you can’t host
      content here for other apps or websites.

# Using Static Resources

Static resources allow you to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. Static resources can be used only within your Salesforce org, so you can’t host content here for other apps or websites.

Using a static resource is preferable to uploading a file to the Documents tab because:

-   You can package a collection of related files into a directory hierarchy and upload that hierarchy as a .zip or .jar archive.
-   You can reference a static resource by name in page markup by using the $Resource global variable instead of hard coding document IDs.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

In addition, using static resources to refer to JavaScript or cascading style sheets (CSS) is preferable to including the markup inline. Managing this kind of content using static resources allows you to have a consistent look and feel for all your pages and a shared set of JavaScript functionality.

A single static resource can be up to 5 MB, and an organization can have up to 250 MB of static resources, total.

-   **[Creating a Static Resource](atlas.en-us.pages.meta/pages/pages_resources_create.htm)**
    You can use static resources to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. You can use static resources only within your org, so you can’t host content here for other apps or websites.
-   **[Referencing a Static Resource in Visualforce Markup](atlas.en-us.pages.meta/pages/pages_resources_reference.htm)**

-   **[Referencing Untrusted Third-Party Content with iframes](atlas.en-us.pages.meta/pages/pages_resources_iframe.htm)**

## Related Topics

- Creating a Static Resource (atlas.en-us.pages.meta/pages/pages_resources_create.htm)
- Referencing a Static Resource in Visualforce Markup (atlas.en-us.pages.meta/pages/pages_resources_reference.htm)
- Referencing Untrusted Third-Party Content with iframes (atlas.en-us.pages.meta/pages/pages_resources_iframe.htm)
