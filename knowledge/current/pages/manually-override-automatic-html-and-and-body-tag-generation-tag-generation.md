---
title: "Manually Override Automatic  <html> and and <body> Tag Generation Tag
            Generation"
domain: pages
topic: manually-override-automatic-html-and-and-body-tag-generation-tag-generation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.679Z
estimatedTokens: 732
keywords: [Manually, Override, Automatic, <html>, <body>, Tag, Generation, applyHtmlTag, applyBodyTag, attributes, <apex, page>, suppress, tags, favor]
---

# Manually Override Automatic  <html> and and <body> Tag Generation Tag
            Generation

> Use the applyHtmlTag and applyBodyTag attributes of the <apex:page> tag to suppress the automatic generation
        of <html> and <body> tags, in favor of static markup you add to the page
        yourself.

# Manually Override Automatic <html> and and <body> Tag Generation Tag Generation

Use the applyHtmlTag and applyBodyTag attributes of the <apex:page\> tag to suppress the automatic generation of <html\> and <body\> tags, in favor of static markup you add to the page yourself.

Here’s an example that illustrates how to do this:

```

```

The attributes act independently of each other; you can use them in any combination of true, false, or unset. When both attributes are set to true, the default, automatic generation of <html\> and <body\> tags is preserved. When either is set to false, you are fully responsible for adding the corresponding tags to your markup. In this mode, Visualforce won’t prevent you from creating nonsense tag combinations or attributes that give even modern browsers fits.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

A <head\> section is always generated if required, regardless of the values for applyHtmlTag and applyBodyTag. For example, a <head\> tag is generated if you use <apex:includeScript\> or <apex:stylesheet\> tags, set the page title, and so on.

There’s one exception to this rule. If applyHtmlTag is set to false and there are no other elements in the page except for <apex:includeScript\>, no <head\> is generated. For example, the following code automatically adds <body\> tags, but *doesn’t* add a <head\> section:

```

```

This behavior shouldn’t cause problems for real-world pages.

The applyHtmlTag attribute is available on the <apex:page\> tag for Visualforce pages set to API version 27.0 or higher. The applyBodyTag attribute is available on the <apex:page\> tag for Visualforce pages set to API version 28.0 or higher. They both have the following additional restrictions:

-   The showHeader attribute must be set to false for the page, for example, <apex:page showHeader="false"\>.
-   The contentType attribute must be set to “text/html” (the default).
-   The values for the top level, or outermost, <apex:page\> tag are used; applyHtmlTag and applyBodyTag attributes on pages added using the <apex:include\> tag are ignored.

#### See Also

-   [Using a Custom Doctype](atlas.en-us.pages.meta/pages/pages_styling_doctype.htm "You can specify a different “doctype” (document type, or DTD) for a Visualforce page by using the docType attribute on the <apex:page> tag. This changes the doctype declaration at the beginning of the page. This is particularly useful if you’re working with HTML5, and might also allow you to address browser compatibility issues.")

-   [Creating an Empty HTML5 “Container” Page](atlas.en-us.pages.meta/pages/pages_html_container_page.htm "Use an empty container page when you want to bypass most of Visualforce and add your own markup. A container page is especially useful for HTML5 and mobile development and other web apps for which standard Visualforce output isn’t desired.")

## Code Examples

```
<apex:page showHeader="false" sidebar="false" standardStylesheets="false"
    applyHtmlTag="false" applyBodyTag="false" docType="html-5.0">

<html>
    <body>
        <header>
            <h1>Congratulations!</h1>
        </header>
        <article>
            <p>This page looks almost like HTML5!</p>
        </article>
    </body>
</html>

</apex:page>
```

```
<apex:page showHeader="false" applyHtmlTag="false">
<html>
    <apex:includeScript value="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"/>
</html>
</apex:page>
```

## Related Topics

- Using a Custom Doctype (atlas.en-us.pages.meta/pages/pages_styling_doctype.htm)
- Creating an Empty HTML5 “Container” Page (atlas.en-us.pages.meta/pages/pages_html_container_page.htm)
