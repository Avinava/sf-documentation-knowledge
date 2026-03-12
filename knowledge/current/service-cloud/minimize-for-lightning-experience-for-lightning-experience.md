---
title: "minimize() for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: minimize-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.060Z
estimatedTokens: 227
keywords: [minimize, Lightning, Experience, Minimizes, utility., Web, Components, LWC, only., Arguments, Sample, Code, Response]
---

# minimize() for Lightning Experience for Lightning
            Experience

> Minimizes a utility. This method is available for Lightning Web Components (LWC)
  only.

# minimize() for Lightning Experience for Lightning Experience

Minimizes a utility. This method is available for Lightning Web Components (LWC) only.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility for which to minimize. |

## LWC Sample Code

This component minimizes a utility.

```

```

To make your component available for use in a utility bar, specify the lightning\_\_UtilityBar target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-utility-bar.html).

## Response

Returns a promise that resolves to true if successful. The promise is rejected on error.

#### See Also

-   [*LWC Dev Guide*: Understand the Wire Service](https://developer.salesforce.com/docs/platform/lwc/guide/data-wire-service-about.html "LWC Dev Guide: Understand the Wire Service - HTML (New Window)")

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import { minimize, EnclosingUtilityId } from 'lightning/platformUtilityBarApi';

export default class MinimizeUtilityExample extends LightningElement {
    @wire(EnclosingUtilityId) utilityId;
    
    async handleMinimize() {
        try {
            if (!this.utilityId) {
                return;
          }
        // Minimize the utility bar panel
        const isMinimized = await minimize(this.utilityId);
        console.log(`Minimize utility ${isMinimized ? 'successfully' : 'failed'}`);
        }
        catch (error) {
            // handle error
        }
    }
}
```
