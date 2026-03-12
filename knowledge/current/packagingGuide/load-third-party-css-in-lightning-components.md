---
title: "Load Third-Party CSS in Lightning Components"
domain: packagingGuide
topic: load-third-party-css-in-lightning-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.184Z
estimatedTokens: 402
keywords: [Load, Third-Party, CSS, Lightning, Components, Include, cascading, style, sheets, resources, rather, loading, third, party, Aura]
---

# Load Third-Party CSS in Lightning Components

> Include cascading style sheets (CSS) and other resources in static resources rather
    than loading from a third party.

# Load Third-Party CSS in Lightning Components

Include cascading style sheets (CSS) and other resources in static resources rather than loading from a third party.

This requirement is enforced for the same reasons outlined in [Loading JavaScript Files from Third-Party Endpoints](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_third_party_js.htm "Avoid dynamically loading third-party JavaScript files from content delivery networks (CDNs). Instead, load the code from the static resources folder of your package."). The entire solution must be under version control, and the org administrator and Salesforce security review team must be aware of the change.

Using the <link> tag to load an external CSS resource violates this security policy.

At a high level, the solution is:

-   Save third-party CSS files in static resources.
-   Add the resources to your solution package.
-   Reference the CSS using a <ltng:require> tag in your .cmp or .app markup.

For more information, see [Using External CSS](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/apps_css_external_platform.htm "HTML (New Window)") in the Lightning Aura Components Developer Guide.

## Aura Example

These code snippets depict the security violation and how to fix it in a Lightning component in Aura. This Aura component code isn’t secure because it uses the <link> tag to load an external CSS resource.

```

```

This Aura component code uses <ltng:require>, which is a more secure way to reference an external CSS resource that you uploaded as a static resource.

```

```

## Code Examples

```
<aura:component>
     <link rel="stylesheet" href="https://example.com/styles.css" type="text/css">
<aura:component>
```

```
<aura:component>
    <ltng:require styles="{!$Resource.SLDSv1 + '/assets/styles/lightning-design-system-ltng.css'}" />
</aura:component>
```

## Related Topics

- Loading JavaScript Files from Third-Party Endpoints (atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_third_party_js.htm)
