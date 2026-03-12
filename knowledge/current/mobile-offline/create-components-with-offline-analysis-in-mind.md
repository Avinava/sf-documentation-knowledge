---
title: "Create Components with Offline Analysis In Mind"
domain: mobile-offline
topic: create-components-with-offline-analysis-in-mind
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.700Z
estimatedTokens: 880
keywords: [Components, Offline, Analysis, Mind, feature, implemented, Lightning, web, preloaded, primed, Workaround]
---

# Create Components with Offline Analysis In Mind

> To use a feature implemented with Lightning web components while offline, it must be
  preloaded, or primed, before you go offline.

# Create Components with Offline Analysis In Mind

To use a feature implemented with Lightning web components while offline, it must be preloaded, or primed, **before** you go offline.

Specifically, an LWC Offline-enabled mobile app must prime:

-   The component, and all its dependencies.
-   The data to be displayed by the component, and all its dependencies.

The process for determining and resolving component dependencies is complex, and our implementation is continually improving. The fundamental aspect to understand is that this dependency resolution is done without executing or rendering the component. Dependency calculations are performed by static analysis of the component code, recursively applied to every child component, module, and wire adapter used by the top-level component.

In general, anything that requires code to execute to determine its execution path can’t be resolved during static dependency analysis. The following guidelines are an incomplete list of ways to avoid anti-patterns that can prevent a complete dependency analysis of a component.

-   Don’t use a private property as an input value to a wire adapter.
-   Don’t use a getter as an input value to a wire adapter when the getter result depends on an instance member or *any* computation.
-   Don’t use any computed value as an input value to a wire adapter where the value can’t be determined without creating and executing the component, or which might be null when the component is instantiated.
-   Don’t create a wire adapter chain where an earlier wire adapter outputs its results into a function.
-   Don’t reference an array member from an array that is chained between wire adapters.
-   Don’t reference an inherited property in an input value to a wire adapter in a subclass.
-   Don’t create getter functions or properties that match an imported name. If a property name and import name are the same, the static analyzer can’t differentiate them, and the imported item can’t be primed. For example:

    ```

    ```


![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=mobile_offline)

#### Tip

See [Validate Lightning Web Components for Offline Use](atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline.htm "Use the Komaci Static Analyzer (or static analyzer for short) during component development to validate your Lightning web components for offline use. Using the static analyzer helps you ensure that code dependencies and data your component depends on can be primed when a network connection is available, making the component and its data available offline when the network has limited or no connectivity.") to install validation tools that provide support within VS Code for the previous guidelines.

## Example and Workaround

Let’s consider an example. It’s common for a component to use CurrentPageReference in its code.

```

```

During initial priming when the app loads, the “current page” can’t be known. This means that resources associated with that page — layout metadata, object and field metadata, record data — can’t be fully determined in advance. And so the component can’t be primed completely.

The workaround in this case, and in general, is to find another way to make these dependencies explicit, instead of implicitly defined by a reference that can’t be resolved until runtime. Referencing a specific recordId, recordTypeId, or apiName provides enough information to determine the dependencies without the specific page context.

## Code Examples

```
import { recordContextQuery } from 'c/myModule';
export default class GetterTest extends LightningElement {
    @api objectApiName;\

    // Don’t make the getter name the same as the import name
    // This prevents priming the imported recordContextQuery
    get recordContextQuery() {
        return recordContextQuery(this.objectApiName);
    }
}
```

```
import { CurrentPageReference } from 'lightning/navigation';
// ...@wire(CurrentPageReference) pageRef;
```

## Related Topics

- Validate Lightning Web Components for Offline Use (atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline.htm)
