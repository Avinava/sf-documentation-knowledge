---
title: "Using the Default Namespace in Organizations with No Namespace
  Set"
domain: lightning
topic: using-the-default-namespace-in-organizations-with-no-namespace-set
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.328Z
estimatedTokens: 238
namespace: Set
keywords: [Organizations, organization, hasn’t, prefix, referencing, Lightning, components, you’ve, created]
---

# Using the Default Namespace in Organizations with No Namespace
  Set

> If your organization hasn’t set a namespace prefix, use the default namespace c when referencing Lightning components that you’ve
  created.

**Namespace:** `Set`

# Using the Default Namespace in Organizations with No Namespace Set

If your organization hasn’t set a namespace prefix, use the default namespace c when referencing Lightning components that you’ve created.

The following items must use the c namespace when your organization doesn’t have a namespace prefix set.

-   References to components that you’ve created
-   References to events that you’ve defined

The following items use an implicit namespace for your organization and don’t require you to specify a namespace.

-   References to custom objects
-   References to custom fields on standard and custom objects
-   References to Apex controllers

See [Namespace Usage Examples and Reference](atlas.en-us.lightning.meta/lightning/namespace_using_reference.htm#namespace_using_reference "This topic provides examples of referencing components, objects, fields, and so on, in Aura components code.") for examples of all of the preceding items.

## Related Topics

- Namespace Usage Examples and Reference (atlas.en-us.lightning.meta/lightning/namespace_using_reference.htm)
