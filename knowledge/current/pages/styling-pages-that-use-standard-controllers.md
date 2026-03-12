---
title: "Styling Pages that Use Standard Controllers"
domain: pages
topic: styling-pages-that-use-standard-controllers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.417Z
estimatedTokens: 340
keywords: [Styling, Pages, Standard, Controllers, Any, associated, controller, automatically, inherits, style, Salesforce, tab, appears, selected, color]
---

# Styling Pages that Use Standard Controllers

> Any page associated with a standard controller automatically inherits
the style that is used for standard Salesforce pages
associated with the specified object. That is, the tab for the specified
object appears selected, and the associated color of the tab is used
to style all page elements.

# Styling Pages that Use Standard Controllers

Any page associated with a standard controller automatically inherits the style that is used for standard Salesforce pages associated with the specified object. That is, the tab for the specified object appears selected, and the associated color of the tab is used to style all page elements.

You can override the styling of a page that uses a standard controller with the tabStyle attribute on the <apex:page\> tag. For example, the following page uses the Account standard controller, but renders a page that highlights the Opportunities tab and uses the Opportunity tab's yellow coloring:

```

```

To use the styling associated with MyCustomObject:

```

```

To use the styling associated with a custom Visualforce tab, set the attribute to the name (not label) of the tab followed by a double-underscore and the word tab. For example, to use the styling of a Visualforce tab with the name Source and a label Sources, use:

```

```

Alternatively, you can override standard controller page styles with your own custom stylesheets and inline styles.

#### See Also

-   [Styling Visualforce Pages](atlas.en-us.pages.meta/pages/pages_styling.htm "It’s easy to style a Visualforce page, either by mimicking the look and feel of a standard Salesforce page, or by using your own stylesheets or content types.")

## Code Examples

```
<apex:page standardController="Account" tabStyle="Opportunity">
</apex:page>
```

```
<apex:page standardController="Account" tabStyle="MyCustomObject__c">
</apex:page>
```

```
<apex:page standardController="Account" tabStyle="Source__tab">
</apex:page>
```

## Related Topics

- Styling Visualforce Pages (atlas.en-us.pages.meta/pages/pages_styling.htm)
