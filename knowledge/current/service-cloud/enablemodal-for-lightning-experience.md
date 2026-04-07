---
title: "enableModal() for Lightning Experience"
domain: service-cloud
topic: enablemodal-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:36:50.237Z
estimatedTokens: 222
keywords: [Arguments, enableModal, Lightning, Experience, Toggles, modal, mode, utility, overlay, blocks, users, console, panel, visible, Web, LWC, Sample, Code]
---

> Toggles modal mode for a utility. While in modal mode, an overlay blocks users from
  using the console while the utility panel is visible. This method is available for Lightning Web
  Components (LWC) only.

# enableModal() for Lightning Experience

Toggles modal mode for a utility. While in modal mode, an overlay blocks users from using the console while the utility panel is visible. This method is available for Lightning Web Components (LWC) only.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility for which to toggle modal mode. |
| enabled | boolean | Specifies whether to enable the utility's modal mode. |

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
import { enableModal, EnclosingUtilityId } from 'lightning/platformUtilityBarApi';

export default class EnableModalExample extends LightningElement {
    @wire(EnclosingUtilityId) utilityId;
    isModalEnabled = false;
    
    async handleToggle() {
        const enable = !this.isModalEnabled;
        this.isModalEnabled = enable;
        await enableModal(this.utilityId, enable);
    }
}
```
