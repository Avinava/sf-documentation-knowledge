---
title: "Using JavaScript Libraries with Visualforce"
domain: pages
topic: using-javascript-libraries-with-visualforce
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.733Z
estimatedTokens: 363
keywords: [JavaScript, Libraries, Visualforce, include, pages, take, advantage, functionality, provided, best, way, creating, resource, including, library]
---

# Using JavaScript Libraries with Visualforce

> You can include JavaScript libraries in your Visualforce pages to take advantage of
    functionality provided by these libraries. The best way to include JavaScript libraries is by
    creating a static resource, and then including the library by adding an <apex:includeScript> component to your page.

# Using JavaScript Libraries with Visualforce

You can include JavaScript libraries in your Visualforce pages to take advantage of functionality provided by these libraries. The best way to include JavaScript libraries is by creating a static resource, and then including the library by adding an <apex:includeScript\> component to your page.

For example, if you are using jQuery ([https://js.foundation/](https://js.foundation/ "html (New Window)")), create a static resource from the library called jquery, and then reference it in a page like this:

```

```

You can then use it in a page by adding a <script\> to call functions from the library.

If you’re using a JavaScript library in a Visualforce page, and that library defines $ as a special character, you’ll need to modify your JavaScript to override this usage. For example, with jQuery you can override the definition of $ by using the jQuery.noConflict() function.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

-   The use of third-party JavaScript libraries and frameworks is supported and encouraged by Salesforce. However, Salesforce can’t help you debug your JavaScript code, except as it specifically relates to Salesforce functionality.
-   Don’t use Ext JS versions less than version 3 on pages that use Chatter components, <apex:enhancedList\>, <knowledge:articleCaseToolbar\>, or <knowledge:articleRendererToolbar\>.

## Code Examples

```
<apex:page>
    <apex:includeScript value="{!$Resource.jquery}"/>
</apex:page>
```

```
<apex:page >
<apex:includeScript value="{!$Resource.jquery}"/>
<html>
<head>
  <script>
    jQuery.noConflict();
    
    jQuery(document).ready(function() {    
        jQuery("a").click(function() {
          alert("Hello world, part 2!");
        });
    });
  </script>
</head>
...
</apex:page>
```
