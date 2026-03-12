---
title: "Best Practices for Rendering PDF Files"
domain: pages
topic: best-practices-for-rendering-pdf-files
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:22.133Z
estimatedTokens: 457
keywords: [Best, Practices, Rendering, PDF, Files, Visualforce, file, great, way, share, Salesforce, organization, consider]
---

# Best Practices for Rendering PDF Files

> Rendering a Visualforce page as a
  PDF file is a great way to share information about your Salesforce organization. Here are some best
  practices for you to consider.

# Best Practices for Rendering PDF Files

Rendering a Visualforce page as a PDF file is a great way to share information about your Salesforce organization. Here are some best practices for you to consider.

For better performance when rendering Visualforce pages, reference static image and style sheet resources through the [$Resource global variable](atlas.en-us.pages.meta/pages/pages_resources.htm "Static resources allow you to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. Static resources can be used only within your Salesforce org, so you can’t host content here for other apps or websites.").

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pages)

#### Warning

Referencing static resources on a remote server increases the time it takes to render a Visualforce page as a PDF file. Add remote servers to your permitted Remote Sites list: From Setup, enter Remote Sites Settings in the Quick Find box, then select **Remote Sites Settings**. You can’t reference remote resources when using Visualforce to render PDF files in an Apex trigger. Doing so results in an exception.

#### See Also

-   [Render a Visualforce Page as a PDF File](atlas.en-us.pages.meta/pages/pages_output_pdf_renderas.htm "You can generate a downloadable, printable PDF file of a Visualforce page using the PDF rendering service.")

-   [Visualforce PDF Rendering Considerations and Limitations](atlas.en-us.pages.meta/pages/pages_output_pdf_considerations.htm "Review these considerations and limitations when designing Visualforce pages intended to be rendered to PDF. Always verify the formatting and appearance of the PDF version of your page before you put it into production.")

## Related Topics

- $Resource global
   variable (atlas.en-us.pages.meta/pages/pages_resources.htm)
- Render a Visualforce Page as a PDF File (atlas.en-us.pages.meta/pages/pages_output_pdf_renderas.htm)
- Visualforce PDF Rendering Considerations and Limitations (atlas.en-us.pages.meta/pages/pages_output_pdf_considerations.htm)
