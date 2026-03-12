---
title: "Creating Your First Page"
domain: pages
topic: creating-your-first-page
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.985Z
estimatedTokens: 662
keywords: [Creating, want, “HelloWorld”, Salesforce, organization, uses, MyDomain_login_URL, enter, http, apex, HelloWorld]
---

# Creating Your First Page

> For example, if you want to create a page called “HelloWorld” and your Salesforce
            organization uses MyDomain_login_URL, enter
                    http://MyDomain_login_URL/apex/HelloWorld.

# Creating Your First Page

With [development mode enabled](atlas.en-us.pages.meta/pages/pages_tools_intro.htm#pages_tools_intro "Before you begin to develop Visualforce pages and components, familiarize yourself with the different places to create them."), you can create your first Visualforce page by entering a URL for the page in your browser's address bar as follows:

```

```

For example, if you want to create a page called “HelloWorld” and your Salesforce organization uses MyDomain\_login\_URL, enter http://MyDomain\_login\_URL/apex/HelloWorld.

Because the page does not yet exist, you are directed to an intermediary page from which you can create your new page. Click **Create Page <myNewPageName>** to create it automatically.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If you do not have Visualforce development mode enabled, you can also create a new page from Setup by entering Visualforce Pages in the Quick Find box, then selecting **Visualforce Pages**, and then clicking **New**.

Visualforce pages can always be edited from this part of setup, but to see the results of your edits you have to navigate to the URL of your page. For that reason, most developers prefer to work with development mode enabled so they can view and edit pages in a single window.

A New Visualforce Page ![A new Visualforce page displayed above the Visualforce Page Editor](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_page_default.png&folder=pages)

You now have a Visualforce page that includes default text. To edit your new page, click the **Page Editor** bar that appears at the bottom of the browser. It expands to show you the following Visualforce markup:

```

```

This default markup includes the only required tag for any page— the <apex:page\> tag that begins and ends any page markup. Embedded within the start and close <apex:page\> tags is plain text, some of which is formatted with a standard HTML tag, <h1\>.

As long as you keep the required <apex:page\> tag you can add as much plain text or valid HTML to this page as you want. For example, after entering the following code and clicking **Save** in the Page Editor, the page displays the text “Hello World!” in bold:

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

Pay attention to warnings—the Visualforce editor displays a warning if you save a page with HTML that does not include a matching end tag for every opened tag. Although the page saves, this malformed HTML might cause problems in your rendered page.

## Code Examples

```
https://MyDomain_login_URL/apex/myNewPageName
```

```
<apex:page>
    <!-- Begin Default Content REMOVE THIS -->
    <h1>Congratulations</h1>
    This is your new Apex Page: HelloWorld
    <!-- End Default Content REMOVE THIS -->
</apex:page>
```

```
<apex:page>
    <b>Hello World!</b>
</apex:page>
```

## Related Topics

- development mode enabled (atlas.en-us.pages.meta/pages/pages_tools_intro.htm)
