---
title: "Converting a Page to a PDF File"
domain: pages
topic: converting-a-page-to-a-pdf-file
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.036Z
estimatedTokens: 496
keywords: [Converting, PDF, File, previous, tutorial, Visualforce, change, company, Suppose, wanted, generate, announcement, new, produces, along]
---

# Converting a Page to a PDF File

> In the previous tutorial, you used a Visualforce page to change the name of a company. Suppose you wanted to generate
an announcement of the new name as a PDF. The following example produces
such a page, along with the current date and time.

# Converting a Page to a PDF File

You can render any page as a PDF by adding the renderAs attribute to the <apex:page\> component, and specifying “pdf” as the rendering service. For example:

```

```

Visualforce pages rendered as PDFs will either display in the browser or download as a PDF file, depending on your browser settings.

In the previous tutorial, you used a Visualforce page to change the name of a company. Suppose you wanted to generate an announcement of the new name as a PDF. The following example produces such a page, along with the current date and time.

```

```

Things to note about the page:

-   <style\> is CSS markup, not Visualforce markup. It defines the font family used for the entire page, as well as a particular style for the company name.
-   Some of the output text is contained in an <apex:panelGrid\> component. A panel grid renders as an HTML table. Each component found in the body of the <apex:panelGrid\> component is placed into a corresponding cell in the first row until the number of columns is reached. As there is only a single cell, each output text is displayed in a separate row.

A Visualforce Page Rendered as PDF ![A Visualforce page rendered as a PDF](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_render_as_pdf.png&folder=pages)

Always verify the format of your rendered page before deploying it.

#### See Also

-   [Render a Visualforce Page as a PDF File](atlas.en-us.pages.meta/pages/pages_output_pdf_renderas.htm "You can generate a downloadable, printable PDF file of a Visualforce page using the PDF rendering service.")

-   [Visualforce PDF Rendering Considerations and Limitations](atlas.en-us.pages.meta/pages/pages_output_pdf_considerations.htm "Review these considerations and limitations when designing Visualforce pages intended to be rendered to PDF. Always verify the formatting and appearance of the PDF version of your page before you put it into production.")

## Code Examples

```
<apex:page renderAs="pdf">
```

```
<apex:page standardController="Account" renderAs="pdf" applyBodyTag="false">
    <head>
        <style> 
            body { font-family: 'Arial Unicode MS'; }
            .companyName { font: bold 30px; color: red; }  
        </style>
    </head>
    <body>
        <center>
        <h1>New Account Name!</h1>
     
        <apex:panelGrid columns="1" width="100%">
            <apex:outputText value="{!account.Name}" styleClass="companyName"/>
            <apex:outputText value="{!NOW()}"></apex:outputText>
        </apex:panelGrid>
        </center>
    </body>
</apex:page>
```

## Related Topics

- Render a Visualforce Page as a PDF File (atlas.en-us.pages.meta/pages/pages_output_pdf_renderas.htm)
- Visualforce PDF Rendering Considerations and Limitations (atlas.en-us.pages.meta/pages/pages_output_pdf_considerations.htm)
