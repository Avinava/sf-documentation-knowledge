---
title: "Use CSS Outside Components"
domain: packagingGuide
topic: use-css-outside-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.145Z
estimatedTokens: 223
keywords: [CSS, Outside, Components, Salesforce, Platform, tries, ensure, isolated, sandbox, isolation, can’t, always, guaranteed, breach, occurs]
---

# Use CSS Outside Components

> The Salesforce Platform tries to ensure that each namespace is an isolated sandbox, but
    isolation can’t always be guaranteed. Where a namespace isolation breach occurs, one component
    can steal clicks from another component, or otherwise interfere with another component’s
    intended use. To prevent this type of abuse, don’t use CSS directives known to be incompatible
    with style isolation in your components.

# Use CSS Outside Components

The Salesforce Platform tries to ensure that each namespace is an isolated sandbox, but isolation can’t always be guaranteed. Where a namespace isolation breach occurs, one component can steal clicks from another component, or otherwise interfere with another component’s intended use. To prevent this type of abuse, don’t use CSS directives known to be incompatible with style isolation in your components.

## CSS Example

This CSS code is vulnerable because it uses absolute positioning, which is incompatible with style isolation.

```

```

This CSS code prevents the vulnerability by using relative positioning.

```

```

For more information, see [Tips for CSS in Components](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/components_css_tips.htm "HTML (New Window)") in the Lightning Aura Components Developer Guide.

## Code Examples

```
#some_element {
   position: absolute;
   right: 80px;
   top: 160px;
}
```

```
#some_element_revised {
   position: relative;
   right: 80px;
   top: 160px;
}
```
