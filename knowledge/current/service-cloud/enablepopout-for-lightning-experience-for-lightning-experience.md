---
title: "enablePopout() for Lightning Experience for Lightning
   Experience"
domain: service-cloud
topic: enablepopout-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.119Z
estimatedTokens: 275
keywords: [enablePopout, Lightning, Experience, Toggles, pop-out, mode, utility, Enabling, displays, separate, child, window, Web, Components, LWC]
---

# enablePopout() for Lightning Experience for Lightning
   Experience

> Toggles pop-out mode on a utility. Enabling pop-out mode on a utility displays the
  utility in a separate child window. This method is available for Lightning Web Components (LWC)
  only.

# enablePopout() for Lightning Experience for Lightning Experience

Toggles pop-out mode on a utility. Enabling pop-out mode on a utility displays the utility in a separate child window. This method is available for Lightning Web Components (LWC) only.

## Arguments

Optional parameters are passed into an object as the last argument of the method.

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility for which to toggle pop-out mode. |
| enabled | boolean | Specifies whether to enable the utility's modal mode. |
| disabledText | string | Optional. Hover text for pop-out button when the utility is not enabled for pop-out mode. |

## LWC Sample Code

This component toggles modal mode in a utility bar.

```

```

To make your component available for use in a utility bar, specify the lightning\_\_UtilityBar target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-utility-bar.html).

## Response

Returns a promise that resolves to true if successful. The promise is rejected on error.

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import { enablePopout, EnclosingUtilityId } from 'lightning/platformUtilityBarApi';

export default class EnablePopoutExample extends LightningElement {
    @wire(EnclosingUtilityId) utilityId;
    enable = true;
    
    async handleToggle() {
        const enable = !this.isPopoutEnabled;
        await enablePopout(this.utilityId, enable, { disabledText: 'disabled' });
        this.isPopoutEnabled = enable;
    }
}
```
