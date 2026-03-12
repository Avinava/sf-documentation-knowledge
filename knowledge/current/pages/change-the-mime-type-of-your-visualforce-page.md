---
title: "Change the MIME type of Your Visualforce Page"
domain: pages
topic: change-the-mime-type-of-your-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.187Z
estimatedTokens: 446
keywords: [Change, MIME, Visualforce, specify, different, contentType, attribute, <apex, page>, tag, HTTPContent-Type, page’s]
---

# Change the MIME type of Your Visualforce Page

> You can specify a different format for a Visualforce page by using the contentType attribute on the <apex:page> tag. This sets the HTTPContent-Type header for the response to the value of the
        page’s contentType attribute.

# Change the MIME type of Your Visualforce Page

You can specify a different format for a Visualforce page by using the contentType attribute on the <apex:page\> tag. This sets the HTTPContent-Type header for the response to the value of the page’s contentType attribute.

The contentType attribute takes a Multipurpose Internet Mail Extension (MIME) type as a value, such as application/vnd.ms-excel, text/csv, or image/gif.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Browsers can behave unpredictably if you set an invalid contentType. For information about valid MIME types, see [http://www.iana.org/assignments/media-types/](http://www.iana.org/assignments/media-types/ "html (New Window)").

The contentType attribute accepts any MIME type as a valid value. However, Visualforce supports content conversion of only PDFs, which you can do by specifying a [renderAs](atlas.en-us.pages.meta/pages/pages_output_pdf_renderas.htm "You can generate a downloadable, printable PDF file of a Visualforce page using the PDF rendering service.") attribute.

Visualforce doesn’t generate other file formats. It only sets the Content-Type field of the HTTP response header to the specified MIME type. Some file formats, such as .xlsx, can fail to render.

For example, to display Visualforce page data in a Microsoft Excel spreadsheet, use the contentType attribute on the <apex:page\> tag. Specify a value of application/vnd.ms-excel.

This Visualforce page builds a list of cases by using static HTML and the <apex:repeat> component.

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

If the page doesn’t display properly in Excel, try a different MIME type, such as text/csv.

## Code Examples

```
<!-- This page must be accessed with an Account Id in the URL. For example: 
https://MyDomainName--c.vf.force.com/apex/myPage?id=001D000000JRBet -->

<apex:page standardController="Account" contentType="application/vnd.ms-excel">
    <table border="0" >
        <caption>Cases</caption>
        <tr>
            <th>Case Number</th>
            <th>Origin</th>
            <th>Creator Email</th>
            <th>Status</th>
        </tr>
        <apex:repeat var="cases" value="{!Account.Cases}">
            <tr>
                <td>{!cases.CaseNumber}</td>
                <td>{!cases.Origin}</td>
                <td>{!cases.Contact.email}</td>
                <td>{!cases.Status}</td>
            </tr>
        </apex:repeat>
    </table>
</apex:page>
```

## Related Topics

- renderAs (atlas.en-us.pages.meta/pages/pages_output_pdf_renderas.htm)
