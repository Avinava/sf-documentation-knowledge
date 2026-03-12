---
title: "Using a Namespace in or from a Managed Package"
domain: lightning
topic: using-a-namespace-in-or-from-a-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.308Z
estimatedTokens: 196
keywords: [Managed, Package, Always, referencing, items, creating, code, intend, distribute, own, packages]
---

# Using a Namespace in or from a Managed Package

> Always use the complete namespace when referencing items from a managed package, or when
  creating code that you intend to distribute in your own managed packages.

# Using a Namespace in or from a Managed Package

Always use the complete namespace when referencing items from a managed package, or when creating code that you intend to distribute in your own managed packages.

Another component or application can reference a component by adding <pkgNamespace:pkgComponent> in its markup. For example, let’s look at a package that contains the helloWorld component in the docsample namespace. Another component can reference the component from the package by adding <docsample:helloWorld /> in its markup.

#### See Also

-   [Namespace Usage Examples and Reference](atlas.en-us.lightning.meta/lightning/namespace_using_reference.htm "This topic provides examples of referencing components, objects, fields, and so on, in Aura components code.")

## Related Topics

- Namespace Usage Examples and Reference (atlas.en-us.lightning.meta/lightning/namespace_using_reference.htm)
