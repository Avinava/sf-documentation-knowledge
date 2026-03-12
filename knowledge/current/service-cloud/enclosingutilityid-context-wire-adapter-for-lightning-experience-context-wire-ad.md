---
title: "EnclosingUtilityId Context Wire Adapter for Lightning Experience Context
            Wire Adapter for Lightning Experience"
domain: service-cloud
topic: enclosingutilityid-context-wire-adapter-for-lightning-experience-context-wire-ad
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.126Z
estimatedTokens: 320
keywords: [EnclosingUtilityId, Context, Wire, Adapter, Lightning, Experience, Determines, component, utility, Web, Components, LWC, Sample, Code]
---

# EnclosingUtilityId Context Wire Adapter for Lightning Experience Context
            Wire Adapter for Lightning Experience

> Determines if the component is within a utility. This wire adapter is available for
        Lightning Web Components (LWC) only.

# EnclosingUtilityId Context Wire Adapter for Lightning Experience Context Wire Adapter for Lightning Experience

Determines if the component is within a utility. This wire adapter is available for Lightning Web Components (LWC) only.

To obtain the ID of the enclosing utility, use this context wire adapter. If a caller component isn’t using the wire adapter inside a panel, the enclosing utility ID is null.

## LWC Sample Code

This component minimizes a utility bar panel using the enclosing utility ID and the [minimize()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_minimize.htm "Minimizes a utility. This method is available for Lightning Web Components (LWC) only.") method.

```

```

To make your component available for use in a utility bar, specify the lightning\_\_UtilityBar target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-utility-bar.html).

## Response

Returns the enclosing utility ID if the caller component is within a utility,  or null otherwise.

#### See Also

-   [*LWC Dev Guide*: Understand the Wire Service](https://developer.salesforce.com/docs/platform/lwc/guide/data-wire-service-about.html "LWC Dev Guide: Understand the Wire Service - HTML (New Window)")

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import { EnclosingUtilityId, minimizeUtility } from 'lightning/platformUtilityBarApi';

export default class MinimizeUtilityExample extends LightningElement {
  @wire(EnclosingUtilityId) utilityId;

  handleClick() {
    if (!this.utilityId) {
      return;
    }
    // Minimize the utility bar panel
    minimize(this.utilityId);
  }
}
```

## Related Topics

- minimize() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_minimize.htm)
