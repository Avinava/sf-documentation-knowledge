---
title: "Best Practices for Static Resources"
domain: pages
topic: best-practices-for-static-resources
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:22.125Z
estimatedTokens: 407
keywords: [Best, Practices, Resources]
---

# Best Practices for Static Resources

# Best Practices for Static Resources

Displaying the Content of a Static Resource with the action Attribute on <apex:page\>

You can use the action attribute on a <apex:page\> component to redirect from a Visualforce page to a static resource. This functionality allows you to add rich, custom help to your Visualforce pages. For example, to redirect a user to a PDF:

1.  Upload the PDF as a static resource named customhelp.
2.  Create the following page:

    ```

    ```


Notice that the static resource reference is wrapped in a URLFOR function. Without that, the page does not redirect properly.

This redirect is not limited to PDF files. You can also redirect a page to the content of any static resource. For example, you can create a static resource that includes an entire help system composed of many HTML files mixed with JavaScript, images, and other multimedia files. As long as there is a single entry point, the redirect works. For example:

1.  Create a zip file that includes your help content.
2.  Upload the zip file as a static resource named customhelpsystem.
3.  Create the following page:

    ```

    ```


When a user visits the page, the index.htm file in the static resource displays.

#### See Also

-   [Using Static Resources](atlas.en-us.pages.meta/pages/pages_resources.htm "Static resources allow you to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. Static resources can be used only within your Salesforce org, so you can’t host content here for other apps or websites.")

## Code Examples

```
<apex:page sidebar="false" showHeader="false" standardStylesheets="false" 
      action="{!URLFOR($Resource.customhelp)}">
</apex:page>
```

```
<apex:page sidebar="false" showHeader="false" standardStylesheets="false" 
      action="{!URLFOR($Resource.customhelpsystem, 'index.htm')}">
</apex:page>
```

## Related Topics

- Using Static Resources (atlas.en-us.pages.meta/pages/pages_resources.htm)
