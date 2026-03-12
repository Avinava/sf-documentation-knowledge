---
title: "HTML Comments and IE Conditional Comments"
domain: pages
topic: html-comments-and-ie-conditional-comments
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.658Z
estimatedTokens: 439
keywords: [HTML, Comments, Conditional, Visualforce, removes, XML, rendering, processing, their, contents, Internet, Explorer, however, won’t, removed]
---

# HTML Comments and IE Conditional Comments

> Visualforce removes most HTML and
        XML comments from the page before rendering, without processing their contents. Internet
        Explorer conditional comments, however, won’t be removed, allowing you to include
        IE-specific resources and meta tags.

# HTML Comments and IE Conditional Comments

Visualforce removes most HTML and XML comments from the page before rendering, without processing their contents. Internet Explorer conditional comments, however, *won’t* be removed, allowing you to include IE-specific resources and meta tags.

Visualforce doesn’t evaluate anything enclosed within standard HTML comments (<!-- -->), whether the comments are single line or multiline. For non-Internet Explorer comments, the Visualforce compiler replaces the contents of the HTML comment with asterisks. This replacement makes HTML comments unsuitable for commenting out JavaScript code in older browsers.

[Internet Explorer conditional comments](http://msdn.microsoft.com/en-us/library/ms537512.aspx "HTML (New Window)") are most commonly used to address browser compatibility issues, generally with older versions of IE. Although conditional comments work wherever they’re used on the page, they’re frequently placed inside the page’s <head\> tags, where they can be used to include version-specific stylesheets or JavaScript compatibility “shims.”

To place conditional comments inside a page’s <head\> tag, disable the standard Salesforce header, sidebar, and stylesheets, and add your own <head\> and <body\> tags:

```

```

Visualforce doesn’t support or evaluate Visualforce tags, for example, <apex:includeScript/\>, within standard HTML comments. However, it will evaluate the following expressions within IE conditional comments:

-   Global variables, such as $Resource and $User
-   The URLFOR() function

See [Microsoft’s documentation for Internet Explorer conditional comments](http://msdn.microsoft.com/en-us/library/ms537512.aspx "HTML (New Window)") for further details of how to use them.

## Code Examples

```
<apex:page docType="html-5.0" showHeader="false" standardStylesheets="false">
    <head>
      <!-- Base styles -->
      <apex:stylesheet value="{!URLFOR($Resource.BrowserCompatibility, 'css/style.css')}"/>
        
      <!--[if lt IE 7]>
          <script type="text/javascript" 
              src="{!URLFOR($Resource.BrowserCompatibility, 'js/obsolete-ie-shim.js')}>
          </script>
          <link rel="stylesheet" type="text/css" 
              href="{!URLFOR($Resource.BrowserCompatibility, 'css/ie-old-styles.css')}" />
      <![endif]--> 
    
      <!--[if IE 7]>
          <link rel="stylesheet" type="text/css" 
              href="{!URLFOR($Resource.BrowserCompatibility, 'css/ie7-styles.css')}" />
      <![endif]-->
    </head>

    <body>
        <h1>Browser Compatibility</h1>
        <p>It's not just a job. It's an adventure.</p>
    </body>
</apex:page>
```
