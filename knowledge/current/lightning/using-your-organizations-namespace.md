---
title: "Using Your Organization’s Namespace"
domain: lightning
topic: using-your-organizations-namespace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.330Z
estimatedTokens: 391
namespace: If
keywords: [Organization’s, organization, prefix, components, events, custom, objects, items, Lightning, markup]
---

# Using Your Organization’s Namespace

> If your organization has set a namespace prefix, use that namespace to reference
    components, events, custom objects and fields, and other items in your  Lightning
    Lightning markup.

**Namespace:** `If`

# Using Your Organization’s Namespace

If your organization has set a namespace prefix, use that namespace to reference components, events, custom objects and fields, and other items in your Lightning Lightning markup.

The following items use your organization’s namespace when your organization has a namespace prefix set.

-   References to components that you’ve created
-   References to events that you’ve defined
-   References to custom objects
-   References to custom fields on standard and custom objects
-   References to Apex controllers
-   References to static resources

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Support for the c namespace in organizations that have set a namespace prefix is incomplete. The following items can use the c namespace if you prefer to use the shortcut, but it’s not currently a recommended practice.

-   References to components that you’ve created when used in Lightning markup, but not in expressions or JavaScript
-   References to events that you’ve defined when used in Lightning markup, but not in expressions or JavaScript
-   References to custom objects when used in component and event type and default system attributes, but not in expressions or JavaScript

See [Namespace Usage Examples and Reference](atlas.en-us.lightning.meta/lightning/namespace_using_reference.htm#namespace_using_reference "This topic provides examples of referencing components, objects, fields, and so on, in Aura components code.") for examples of the preceding items.

## Related Topics

- Namespace Usage Examples and Reference (atlas.en-us.lightning.meta/lightning/namespace_using_reference.htm)
