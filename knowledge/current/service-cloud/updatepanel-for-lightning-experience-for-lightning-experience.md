---
title: "updatePanel() for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: updatepanel-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.088Z
estimatedTokens: 753
keywords: [updatePanel, Lightning, Experience, Specifies, label, icon, utility, panel, provides, height, width, panel., Web, Components, LWC, only., Arguments, heightTransition, widthTransition, Sample]
---

# updatePanel() for Lightning Experience for Lightning
            Experience

> Specifies a label and icon on the utility panel, and provides a height and width for
        the panel. This method is available for Lightning Web Components (LWC) only.

# updatePanel() for Lightning Experience for Lightning Experience

Specifies a label and icon on the utility panel, and provides a height and width for the panel. This method is available for Lightning Web Components (LWC) only.

## Arguments

Optional parameters are passed into an object as the last argument of the method.

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility panel to update. |
| panelAttrs | object | Optional. Attributes that specify the appearance of the panel.label—The label of the utility that’s displayed in the panel header.icon—The Lightning Design System (SLDS) name of the icon in the format einstein, where einstein is the name of the SLDS utility icon. The icon is displayed in the utility panel header. See a full list of utility icon keys at the SLDS reference site. SLDS doctype, standard, custom, and action icons aren’t supported.iconVariant—The variant changes the color of the utility panel icon. Available variants are success (), warning (), and error ().height—The height of the utility panel in pixels.heightTransition—An object that describes the CSS transition for the utility panel's height. See the heightTransition section.width—The width of the utility panel in pixels.widthTransition—An object that describes the CSS transition for the utility panel's width. See the widthTransition section. |

## heightTransition

An optional object that describes the CSS transition for the utility panel's height. Pass this object to panelAttrs and use with height. Optional arguments include:

-   durationMs—The time in milliseconds. It takes for the height transition to complete. The default value is 0.
-   timingFunction—The transition timing function that sets the rate for panel height changes. Applies any CSS easing function that’s supported by your target browser. The default value is ease.
-   delayMs—The wait time in milliseconds before the height transition starts. The default value is 0.

## widthTransition

An optional object that describes the CSS transition for the utility panel's width. Pass this object to panelAttrs and use with width. Optional arguments include:

-   durationMs—The time in milliseconds. It takes for the width transition to complete. The default value is 0.
-   timingFunction—The transition timing function that sets the rate for panel width changes. Applies any CSS easing function that’s supported by your target browser. The default value is ease.
-   delayMs—The wait time in milliseconds before the width transition starts. The default value is 0.

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
import { updatePanel, EnclosingUtilityId } from 'lightning/platformUtilityBarApi';

export default class UpdatePanelExample extends LightningElement {
    @wire(EnclosingUtilityId) utilityId;

    panelAttrs = {
        label: 'Account Insights',
        icon: 'einstein',
        iconVariant: 'success',
        height: 600,
        width: 600
    }

    handleUpdate() {
        if (this.utilityId) {
            return updatePanel(this.utilityId, this.panelAttrs);
        }
    }
}
```
