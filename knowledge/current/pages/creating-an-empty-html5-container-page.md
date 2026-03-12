---
title: "Creating an Empty HTML5 “Container” Page"
domain: pages
topic: creating-an-empty-html5-container-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.652Z
estimatedTokens: 818
keywords: [Creating, Empty, HTML5, “Container”, container, want, bypass, Visualforce, add, own, markup, especially, useful, mobile, development]
---

# Creating an Empty HTML5 “Container” Page

> Use an empty container page when you want to bypass most of Visualforce and add your own
    markup. A container page is especially useful for HTML5 and mobile
    development
    and other web apps for which standard Visualforce output isn’t desired.

# Creating an Empty HTML5 “Container” Page

Use an empty container page when you want to bypass most of Visualforce and add your own markup. A container page is especially useful for HTML5 and mobile development and other web apps for which standard Visualforce output isn’t desired.

You use Remote Objects, JavaScript remoting, or other Lightning Platform APIs to make service requests and then render the results with JavaScript.

The following code provides a sample container page to start with.

```

```

The <apex:page\> component and its attributes is the core of a container page’s definition.

-   docType="html-5.0" sets the page to use the modern HTML5 docType.
-   applyHtmlTag="false" and applyBodyTag="false" tell Visualforce that your markup supplies the <html\> and <body\> tags so that it doesn’t generate its own.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    When you set applyHtmlTag or applyBodyTag to false, the title attribute of the <apex:page\> component is ignored.

-   The showHeader="false", sidebar="false", and standardStylesheets="false" attributes suppress the standard header, sidebar, and style sheets that add the Salesforce user interface and visual design to Visualforce pages. It also suppresses JavaScript resources, like scripts that aid with redirects on session timeout.

The <head\> tag isn’t required in a container page, but it’s a good idea to include it. If you must add values to the <head\> element, you must add the <head\> tag yourself. In that case, Visualforce adds any of its required values to your <head\>. Otherwise, Visualforce renders its own <head\> to add any necessary values.

You can use Visualforce components, such as <apex:includeScript\>, <apex:stylesheet\>, and <apex:image\>, to reference static resources on the page. The output of <apex:includeScript\> and <apex:stylesheet\> is added to the <head\> element. If you didn’t include one, Visualforce adds its own. The <apex:image\> output is rendered wherever you place it on the page.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

An “empty” Visualforce page renders the minimum amount of HTML markup, but it isn’t entirely empty, or free of resources you don’t control. JavaScript code that’s essential for Visualforce, such as instrumentation, is still added. Visualforce also automatically adds resources required for markup you add. For example, references to Remote Objects or JavaScript remoting resources, if you use them in your code.

#### See Also

-   [Using Custom Styles](atlas.en-us.pages.meta/pages/pages_styling_custom.htm "Use the <apex:stylesheet> tag or static HTML to include your own style sheet or styles.")

-   [Suppressing the Salesforce User Interface and Styles](atlas.en-us.pages.meta/pages/pages_styling_suppressing_salesforce_stylesheets.htm "By default, Visualforce pages adopt the same visual styling and user interface “chrome” as the rest of Salesforce. This default styling behavior lets you create pages that look like they’re built right into Salesforce. If you don’t want a page to have the Salesforce look and feel, you can suppress various aspects of the Salesforce page and visual design.")

## Code Examples

```
<apex:page docType="html-5.0" applyHtmlTag="false" applyBodyTag="false"
           showHeader="false" sidebar="false" standardStylesheets="false"
           title="Unused Title">
<html>
    
    <head>
        <title>HTML5 Container Page</title>
    </head>
    
    <body>
        <h1>An Almost Empty Page</h1>
  
        <p>This is a very simple page.</p>
    </body>
    
</html>
</apex:page>
```

## Related Topics

- Using Custom Styles (atlas.en-us.pages.meta/pages/pages_styling_custom.htm)
- Suppressing the Salesforce User Interface and Styles (atlas.en-us.pages.meta/pages/pages_styling_suppressing_salesforce_stylesheets.htm)
