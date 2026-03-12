---
title: "Using JavaScript in Visualforce Pages"
domain: pages
topic: using-javascript-in-visualforce-pages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.729Z
estimatedTokens: 305
keywords: [JavaScript, Visualforce, Pages, gives, access, wide, range, functionality, libraries, ways, customize, Action, tags, <apex, actionFunction>]
---

# Using JavaScript in Visualforce Pages

> Using JavaScript in Visualforce
  pages gives you access to a wide range of existing JavaScript functionality, such as JavaScript
  libraries, and other ways to customize the functionality of your pages. Action tags, such as
   <apex:actionFunction> and <apex:actionSupport>, support Ajax requests.

# Using JavaScript in Visualforce Pages

Using JavaScript in Visualforce pages gives you access to a wide range of existing JavaScript functionality, such as JavaScript libraries, and other ways to customize the functionality of your pages. Action tags, such as <apex:actionFunction\> and <apex:actionSupport\>, support Ajax requests.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pages)

#### Warning

By including JavaScript in a page, you are introducing the possibility of cross-browser and maintenance issues that you do not have when using Visualforce. Before writing any JavaScript, you should be sure that there is not an existing Visualforce component that can solve your problem.

The best method for including JavaScript in a Visualforce page is placing the JavaScript in a static resource, then calling it from there. For example,

```

```

You can then use the functions defined within that JavaScript file within your page using <script\> tags.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

When using JavaScript within an expression, you need to escape quotes using a backslash (\\). For example,

```

```

## Code Examples

```
<apex:includeScript value="{!$Resource.MyJavascriptFile}"/>
```

```
onclick="{!IF(false, 'javascript_call("js_string_parameter")', 'else case')}"
```
