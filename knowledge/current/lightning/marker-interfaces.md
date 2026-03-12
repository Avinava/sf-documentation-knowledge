---
title: "Marker Interfaces"
domain: lightning
topic: marker-interfaces
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.348Z
estimatedTokens: 195
keywords: [Marker, Interfaces, empty, attributes, events, enable, specific, usage, component, app]
---

# Marker Interfaces

> A marker interface is an empty interface with no attributes, events, or methods. A marker
  interface is used to enable specific usage for a component in an app.

# Marker Interfaces

A marker interface is an empty interface with no attributes, events, or methods. A marker interface is used to enable specific usage for a component in an app.

For example, a component that implements the force:appHostable interface can be used as a custom tab in Lightning Experience or the Salesforce mobile app.

In JavaScript, you can determine if a component implements an interface by using myCmp.isInstanceOf("mynamespace:myinterface").

#### See Also

-   [Configure Components for Custom Tabs](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_tab.htm "Add the force:appHostable interface to an Aura component to allow it to be used as a custom tab in Lightning Experience, the Salesforce mobile app, and Salesforce mobile web.")

## Related Topics

- Configure Components for Custom Tabs (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_tab.htm)
