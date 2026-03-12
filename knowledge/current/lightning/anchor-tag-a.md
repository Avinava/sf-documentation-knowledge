---
title: "Anchor Tag:  <a>"
domain: lightning
topic: anchor-tag-a
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.839Z
estimatedTokens: 487
keywords: [Anchor, Tag, <a>, Don’t, hard, code, dynamically, generate, Salesforce, URLs, href, attribute, events, force, navigateToSObject]
---

# Anchor Tag:  <a>

> Don’t hard code or dynamically generate Salesforce URLs in the href attribute of an <a>
  tag. Use events, such as force:navigateToSObject or force:navigateToURL, instead.

# Anchor Tag: <a>

Don’t hard code or dynamically generate Salesforce URLs in the href attribute of an <a> tag. Use events, such as force:navigateToSObject or force:navigateToURL, instead.

## Avoid the href Attribute

Using the href attribute of an <a> tag leads to inconsistent behavior in different apps and shouldn’t be relied on. For example, don’t use this markup to link to a record:

```

```

If you use # in the href attribute, a secondary issue occurs. The hash mark (#) is a URL fragment identifier and is often used in Web development for navigation within a page. Avoid # in the href attribute of anchor tags in Lightning components as it can cause unexpected navigation changes, especially in the Salesforce mobile app. That’s another reason not to use href.

## Use the Navigation Service

Use the navigation service for consistent linking behavior across Lightning Experience, the Salesforce mobile app, and Experience Builder sites.

lightning:navigation

Navigates to a page or component.

lightning:isUrlAddressable

Enable a component to be navigated directly via a URL.

We recommend replacing these navigation events with the navigation service.

force:navigateToList

Navigates to a list view.

force:navigateToObjectHome

Navigates to an object home.

force:navigateToRelatedList

Navigates to a related list.

force:navigateToSObject

Navigates to a record.

force:navigateToURL

Navigates to a URL.

As well as consistent behavior, using navigation events instead of <a> tags reduces the number of full app reloads, leading to better performance.

#### See Also

-   [Navigate Across Your Apps with Page References](atlas.en-us.lightning.meta/lightning/components_navigation.htm "The pageReference JavaScript object represents a URL for a page. You can use a pageReference instead of parsing or creating a URL directly. This approach helps you avoid broken navigation if Salesforce changes URL formats in the future.")

## Code Examples

```
<a href="/XXXXXXXXXXXXXXXXXX">Salesforce record ID (DON'T DO THIS)</a>
```

## Related Topics

- Navigate Across Your Apps with Page References (atlas.en-us.lightning.meta/lightning/components_navigation.htm)
