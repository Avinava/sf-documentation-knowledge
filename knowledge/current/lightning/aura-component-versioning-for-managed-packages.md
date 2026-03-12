---
title: "Aura Component Versioning for Managed Packages"
domain: lightning
topic: aura-component-versioning-for-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.487Z
estimatedTokens: 806
keywords: [Aura, Component, Versioning, Managed, Packages, declare, dependencies, against, specific, revisions, installed, package]
---

# Aura Component Versioning for Managed Packages

> Aura component versioning enables you to declare dependencies against
   specific revisions of an installed managed
    package.

# Aura Component Versioning for Managed Packages

Aura component versioning enables you to declare dependencies against specific revisions of an installed managed package.

By assigning a version to your component, you have granular control over how the component functions when new versions of a managed package are released. For example, imagine that a <packageNamespace>:button is pinned to version 2.0 of a package. Upon installing version 3.0, the button retains its version 2.0 functionality.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The package developer is responsible for inserting versioning logic into the markup when updating a component. If the component wasn’t changed in the update or if the markup doesn’t account for version, the component behaves in the context of the most recent version.

Versions are assigned declaratively in the Developer Console. When you’re working on a component, click **Bundle Version Settings** in the right panel to define the version. You can only version a component if you’ve installed a package, and the valid versions for the component are the available versions of that package. Versions are in the format <major>.<minor>. So if you assign a component version 1.4, its behavior depends on the first major release and fourth minor release of the associated package.

![The versioning interface in the Developer Console.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fdev_console_versioning.png&folder=lightning)

When working with components, you can version:

-   Apex controllers
-   JavaScript controllers
-   JavaScript helpers
-   JavaScript renderers
-   Bundle markup
    -   Applications (.app)
    -   Components (.cmp)
    -   Interfaces (.intf)
    -   Events (.evt)

You can’t version any other types of resources in bundles. Unsupported types include:

-   Styles (.css)
-   Documentation (.doc)
-   Design (.design)
-   SVG (.svg)

Once you’ve assigned versions to components, or if you’re developing components for a package, you can retrieve the version in several contexts.

| Resource | Return Type | Expression |
| --- | --- | --- |
| Apex | Version | System.requestVersion() |
| JavaScript | String | cmp.getVersion() |
| Aura component markup | String | {!Version} |

You can use the retrieved version to add logic to your code or markup to assign different functionality to different versions. Here’s an example of using versioning in an <aura:if> statement.

```

```

#### See Also

-   [Base Components with Minimum API Version Requirements](atlas.en-us.lightning.meta/lightning/components_versioning_min_version.htm "Some Lightning base components require the custom components that use them to be set to a minimum API version. A custom component’s API version must be equal to or later than the latest API version required by any of the components it uses.")

-   [*Security for Lightning Components:* Disable Lightning Locker for an Aura Component](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/locker-disable.html "Security for Lightning Components: Disable Lightning Locker for an Aura
    Component - HTML (New Window)")

## Code Examples

```
<aura:component>
 <aura:if isTrue="{!Version > 1.0}"> 
  <c:newVersionFunctionality/> 
 </aura:if> 
 <c:oldVersionFunctionality/> 
 ...
</aura:component>
```

## Related Topics

- Base Components with Minimum API Version Requirements (atlas.en-us.lightning.meta/lightning/components_versioning_min_version.htm)
