---
title: "Navigate to a Web Page"
domain: lightning
topic: navigate-to-a-web-page
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.388Z
estimatedTokens: 183
keywords: [Navigate, Web, navigation, service, supports, different, kinds, pages, Lightning, attributes, state]
---

# Navigate to a Web Page

> The navigation service supports different kinds of pages in Lightning. Each page
    reference type supports a different set of attributes and state properties.

# Navigate to a Web Page

The navigation service supports different kinds of pages in Lightning. Each page reference type supports a different set of attributes and state properties.

Instead of using force:navigateToURL, we recommend navigating to web pages using the lightning:navigate component with the standard\_\_webPage page type.

This code shows examples of navigating to a web page using the old force:navigateToURL event.

```

```

Replace the previous code that uses force:navigateToURL with the following code. This example shows how to navigate to a web page using the standard\_\_webPage page type. It assumes that you added <lightning:navigation aura:id="navigationService" /> in your component markup.

```

```

## Code Examples

```
// Old way to navigate to a web page
$A.get("markup://force:navigateToURL").setParams({ 
    url: 'https://salesforce.com', 
}).fire();
```

```
cmp.find("navigationService").navigate({ 
    type: "standard__webPage", 
    attributes: { 
        url: 'https://salesforce.com' 
    } 
});
```
