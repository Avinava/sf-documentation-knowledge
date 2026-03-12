---
title: "Configure Components for Custom Tabs"
domain: lightning
topic: configure-components-for-custom-tabs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.477Z
estimatedTokens: 220
keywords: [Configure, Components, Custom, Tabs, Add, force, appHostable, Aura, component, allow, tab, Lightning, Experience, Salesforce, mobile]
---

# Configure Components for Custom Tabs

> Add the force:appHostable
   interface to an Aura component to allow it to be used as a custom tab in Lightning Experience,
   the Salesforce mobile app, and Salesforce mobile web.

# Configure Components for Custom Tabs

Add the force:appHostable interface to an Aura component to allow it to be used as a custom tab in Lightning Experience, the Salesforce mobile app, and Salesforce mobile web.

Components that implement this interface can be used to create tabs in both Lightning Experience, the Salesforce mobile app, and the Salesforce mobile web.

## Example Component

```

```

The appHostable interface makes the component available for use as a custom tab. It doesn’t require you to add anything else to the component.

#### See Also

-   [Add Aura Components as Custom Tabs in a Lightning Experience App](atlas.en-us.lightning.meta/lightning/components_using_lex_tab.htm "Make your Aura components available for Lightning Experience users on desktop and in the Salesforce mobile app by displaying them in a custom tab in a Lightning Experience app.")

## Code Examples

```
<!--simpleTab.cmp-->
<aura:component implements="force:appHostable">

    <!-- Simple tab content -->

    <h1>Lightning Component Tab</h1>

</aura:component>
```

## Related Topics

- Add Aura Components as Custom Tabs in a Lightning Experience App (atlas.en-us.lightning.meta/lightning/components_using_lex_tab.htm)
