---
title: "Render
            a Visualforce Page as a  PDF
            File"
domain: pages
topic: render-a-visualforce-page-as-a-pdf-file
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.878Z
estimatedTokens: 643
keywords: [Render, Visualforce, PDF, File, generate, downloadable, printable, rendering, service]
---

# Render
            a Visualforce Page as a  PDF
            File

> You can generate a downloadable, printable PDF file of a Visualforce page using the PDF
        rendering service.

# Render a Visualforce Page as a PDF File

You can generate a downloadable, printable PDF file of a Visualforce page using the PDF rendering service.

Convert a page to PDF by changing the <apex:page\> tag.

```

```

A Visualforce page rendered as a PDF file displays either in the browser or is downloaded, depending on the browser’s settings. Specific behavior depends on the browser, version, and user settings, and is outside the control of Visualforce.

The following page includes some account details and renders as a PDF file.

```

```

A Visualforce Page Rendered as a PDF File ![A Visualforce page rendered as a PDF](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_output_pdf_renderas_simple.png&folder=pages)

-   **[Render a Visualforce Page as PDF from Apex](atlas.en-us.pages.meta/pages/pages_output_pdf_render_in_apex.htm)**
    You can use the PageReference.getContentAsPDF() method in Apex to render a Visualforce page as PDF data. Then use Apex code to convert that PDF data to an email attachment, a document, a Chatter post, and so on.
-   **[Fonts Available When Using Visualforce PDF Rendering](atlas.en-us.pages.meta/pages/pages_output_pdf_supported_fonts.htm)**
    Visualforce PDF rendering supports a limited set of fonts. To ensure that PDF output renders as you expect, use the supported font names. The default font is sans-serif.
-   **[Visualforce PDF Rendering Considerations and Limitations](atlas.en-us.pages.meta/pages/pages_output_pdf_considerations.htm)**
    Review these considerations and limitations when designing Visualforce pages intended to be rendered to PDF. Always verify the formatting and appearance of the PDF version of your page before you put it into production.
-   **[Component Behavior When Rendered as PDF](atlas.en-us.pages.meta/pages/pages_output_pdf_component_behavior.htm)**
    Understanding how Visualforce components behave when converted to PDF is essential to creating pages that render well.

#### See Also

-   [Using Custom Styles](atlas.en-us.pages.meta/pages/pages_styling_custom.htm "Use the <apex:stylesheet> tag or static HTML to include your own style sheet or styles.")

-   [Extending Salesforce Styles with Stylesheets](atlas.en-us.pages.meta/pages/pages_styling_adding_stylesheets.htm "Use the <apex:stylesheet> tag to add additional stylesheets to a page. Use the style or styleClass attribute available on most Visualforce components to connect them to style definitions in your stylesheets. This technique lets you extend the Salesforce styles with your own.")

## Code Examples

```
<apex:page renderAs="pdf">
```

```
<apex:page standardController="Account" renderAs="pdf">

<-- Placeholder CSS file, supply your own, with your branding, etc. -->
<apex:stylesheet value="{!URLFOR($Resource.Styles,'pdf.css')}"/>

<h1>Welcome to Universal Samples!</h1>

<p>Thank you, <b><apex:outputText value=" {!Account.Name}"/></b>, for 
   becoming a new account with Universal Samples.</p>

<p>Your account details are:</p>

<table>
<tr><th>Account Name</th>
    <td><apex:outputText value="{!Account.Name}"/></td>
    </tr>
<tr><th>Account Rep</th>
    <td><apex:outputText value="{!Account.Owner.Name}"/></td>
    </tr>
<tr><th>Customer Since</th>
    <td><apex:outputText value="{0,date,long}">
        <apex:param value="{!Account.CreatedDate}"/>
        </apex:outputText></td>
    </tr>
</table>
    
</apex:page>
```

## Related Topics

- Render a Visualforce Page as PDF from Apex (atlas.en-us.pages.meta/pages/pages_output_pdf_render_in_apex.htm)
- Fonts Available When Using Visualforce PDF Rendering (atlas.en-us.pages.meta/pages/pages_output_pdf_supported_fonts.htm)
- Visualforce PDF Rendering Considerations and Limitations (atlas.en-us.pages.meta/pages/pages_output_pdf_considerations.htm)
- Component Behavior When Rendered as PDF (atlas.en-us.pages.meta/pages/pages_output_pdf_component_behavior.htm)
- Using Custom Styles (atlas.en-us.pages.meta/pages/pages_styling_custom.htm)
- Extending Salesforce Styles with Stylesheets (atlas.en-us.pages.meta/pages/pages_styling_adding_stylesheets.htm)
