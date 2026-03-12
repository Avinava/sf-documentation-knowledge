---
title: "Fonts Available When Using Visualforce PDF Rendering"
domain: pages
topic: fonts-available-when-using-visualforce-pdf-rendering
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.887Z
estimatedTokens: 394
keywords: [Fonts, Visualforce, PDF, Rendering, supports, limited, ensure, output, renders, expect, font, sans-serif, Testing]
---

# Fonts Available When Using Visualforce PDF Rendering

> Visualforce PDF rendering supports a limited set of fonts. To ensure that PDF output
        renders as you expect, use the supported font names. The default font is sans-serif.

# Fonts Available When Using Visualforce PDF Rendering

Visualforce PDF rendering supports a limited set of fonts. To ensure that PDF output renders as you expect, use the supported font names. The default font is sans-serif.

For each typeface, the first font-family name listed is recommended.

| Typeface | font-family Values |
| --- | --- |
| Arial Unicode MS | Arial Unicode MS |
| Helvetica | sans-serifSansSerifDialog |
| Times | serifTimes |
| Courier | monospaceCourierMonospacedDialogInput |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

-   These rules apply to server-side PDF rendering. Viewing pages in a web browser can have different results.
-   Text styled with a value not listed here uses Times. For example, if you use the word “Helvetica,” it renders as Times, because that’s not a supported value for the Helvetica font. We recommend using “sans-serif”.
-   Arial Unicode MS is the only multibyte font available. It’s the only font that provides support for the extended range of characters of languages that don’t use the Latin character set.
-   Arial Unicode MS doesn’t support bold or italic font-weight.
-   Web fonts aren’t supported when the page is rendered as a PDF file. You can use web fonts in your Visualforce pages when they’re rendered normally.

## Testing Font Rendering

You can use the following page to test font rendering with the Visualforce PDF rendering engine.

```

```

The preceding page uses the following controller, which provides a simple Save to PDF function.

```

```

## Code Examples

```
<apex:page showHeader="false" standardStylesheets="false" 
    controller="SaveToPDF" renderAs="{! renderAs }">

<apex:form rendered="{! renderAs != 'PDF' }" style="text-align: right; margin: 10px;">
    <div><apex:commandLink action="{! print }" value="Save to PDF"/></div>
    <hr/>
</apex:form>

<h1>PDF Fonts Test Page</h1>

<p>This text, which has no styles applied, is styled in the default font for the 
   Visualforce PDF rendering engine.</p>

<p>The fonts available when rendering a page as a PDF are as follows. The first 
listed <code>font-family</code> value for each typeface is the recommended choice.</p>

<table border="1" cellpadding="6">
<tr><th>Font Name</th><th>Style <code>font-family</code> Value to Use (Synonyms)</th></tr>
<tr><td><span style="font-family: Arial Unicode MS; font-size: 14pt; ">Arial 
    Unicode MS</span></td><td><ul>
   <li><span style="font-family: Arial Unicode MS; font-size: 14pt;">Arial Unicode MS</span></li>
    </ul></td></tr>
<tr><td><span style="font-family: Helvetica; font-size: 14pt;">Helvetica</span></td>
    <td><ul>
   <li><span style="font-family: sans-serif; font-size: 14pt;">sans-serif</span></li>
   <li><span style="font-family: SansSerif; font-size: 14pt;">SansSerif</span></li>
   <li><span style="font-family: Dialog; font-size: 14pt;">Dialog</span></li>
    </ul></td></tr>
<tr><td><span style="font-family: Times; font-size: 14pt;">Times</span></td><td><ul>
   <li><span style="font-family: serif; font-size: 14pt;">serif</span></li>
   <li><span style="font-family: Times; font-size: 14pt;">Times</span></li>
</ul></td></tr>
<tr><td><span style="font-family: Courier; font-size: 14pt;">Courier</span></td>
    <td><ul>
    <li><span style="font-family: monospace; font-size: 14pt;">monospace</span></li>
    <li><span style="font-family: Courier; font-size: 14pt;">Courier</span></li>
    <li><span style="font-family: Monospaced; font-size: 14pt;">Monospaced</span></li>
    <li><span style="font-family: DialogInput; font-size: 14pt;">DialogInput</span></li>
</ul></td></tr>
</table>

<p><strong>Notes:</strong>
<ul>
<li>These rules apply to server-side PDF rendering. You might see different results 
    when viewing this page in a web browser.</li>
<li>Text styled with any value besides those listed above receives the default font 
    style, Times. This means that, ironically, while Helvetica's synonyms render as 
    Helvetica, using "Helvetica" for the font-family style renders as Times. 
    We recommend using "sans-serif".</li>
<li>Arial Unicode MS is the only multibyte font available, providing support for the 
    extended character sets of languages that don't use the Latin character set.</li>
</ul>
</p>
 
</apex:page>
```

```apex
public with sharing class SaveToPDF {

    // Determines whether page is rendered as a PDF or just displayed as HTML
    public String renderAs { get; set; }


    // Action method to "print" to PDF
    public PageReference print() {
        renderAs = 'PDF';
        return null;
    }

}
```
