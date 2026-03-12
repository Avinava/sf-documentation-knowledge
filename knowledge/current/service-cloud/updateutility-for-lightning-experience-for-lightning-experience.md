---
title: "updateUtility() for Lightning Experience for
            Lightning Experience"
domain: service-cloud
topic: updateutility-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.174Z
estimatedTokens: 372
keywords: [updateUtility, Lightning, Experience, label, icon, utility, bar, highlighted, Web, Components, LWC, Arguments, Sample, Code]
---

# updateUtility() for Lightning Experience for
            Lightning Experience

> Specifies a label and icon on the utility bar, and sets a utility as highlighted.
        This method is available for Lightning Web Components (LWC) only.

# updateUtility() for Lightning Experience for Lightning Experience

Specifies a label and icon on the utility bar, and sets a utility as highlighted. This method is available for Lightning Web Components (LWC) only.

## Arguments

Optional parameters are passed into an object as the last argument of the method.

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility to update. |
| utilityAttrs | object | Optional. Attributes that specify the appearance of the icon.label—The label of the utility that’s displayed in the utility bar.icon—The Lightning Design System (SLDS) name of the icon in the format einstein, where einstein is the name of the SLDS utility icon. The icon is displayed in the utility bar. See a full list of utility icon keys at the SLDS reference site. SLDS doctype, standard, custom, and action icons aren’t supported.iconVariant—The variant changes the color of the utility bar. Available variants are success (), warning (), and error ().highlighted—Applies a different background color. |

## LWC Sample Code

This component opens a utility using the enclosing utility ID.

```

```

To make your component available for use in a utility bar, specify the lightning\_\_UtilityBar target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-utility-bar.html).

## Response

Returns a promise that resolves to true if successful. The promise is rejected on error.

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import { updateUtility, EnclosingUtilityId } from 'lightning/platformUtilityBarApi';

export default class UpdatePanelExample extends LightningElement {
    @wire(EnclosingUtilityId) utilityId;

    utilityAttrs = {
        label: 'Account Insights',
        icon: 'einstein',
        iconVariant: 'success',
        highlighted: true
    }

    handleUpdate() {
        if (this.utilityId) {
            return updateUtility(this.utilityId, this.utilityAttrs);
        }
    }
}
```
