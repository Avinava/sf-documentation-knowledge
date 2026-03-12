---
title: "Methods for the Utility Bar in Lightning Experience"
domain: service-cloud
topic: methods-for-the-utility-bar-in-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.141Z
estimatedTokens: 2077
keywords: [Utility, Bar, Lightning, Experience, utility, bar, houses, Aura, components, web, providing, users, quick, access, tools, they, often., only., Both, Web]
---

# Methods for the Utility Bar in Lightning Experience

> The utility bar houses Aura components and Lightning web components, providing users
  quick access to tools they use often. The utility bar is available in Lightning Experience only.
  Both Lightning Web Components (LWC) and Aura Components support the utility bar methods, with
  usage differences noted on each method.

# Methods for the Utility Bar in Lightning Experience

The utility bar houses Aura components and Lightning web components, providing users quick access to tools they use often. The utility bar is available in Lightning Experience only. Both Lightning Web Components (LWC) and Aura Components support the utility bar methods, with usage differences noted on each method.

To understand how the utility bar methods for LWC map to the methods for Aura Components, see [Utility Bar API Method Parity](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_utility_parity.htm "The utility bar API provides methods for Aura Components and Lightning Web Components (LWC) in Lightning Experience only. Salesforce Classic isn’t supported.").

These methods are available for working with the utility bar.

-   **[disableUtilityPopOut() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_disableUtilityPopOut.htm)**
    Disables pop-out for a utility. This method isn’t supported for Lightning Web Components (LWC).
-   **[enableModal() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enableModal.htm)**
    Toggles modal mode for a utility. While in modal mode, an overlay blocks users from using the console while the utility panel is visible. This method is available for Lightning Web Components (LWC) only.
-   **[enablePopout() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enablePopout.htm)**
    Toggles pop-out mode on a utility. Enabling pop-out mode on a utility displays the utility in a separate child window. This method is available for Lightning Web Components (LWC) only.
-   **[getAllUtilityInfo() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getAllUtilityInfo.htm)**
    Returns the state of all utilities as an array of utilityInfo objects.
-   **[getEnclosingUtilityId() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getEnclosingUtilityId.htm)**
    Returns the ID of the enclosing utility, or false if not within a utility. This method isn’t supported for Lightning Web Components (LWC).
-   **[getInfo() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_getInfo.htm)**
    Returns the state of the current utility as a utilityInfo object. This method is available for Lightning Web Components (LWC) only.
-   **[getUtilityInfo() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getUtilityInfo.htm)**
    Returns the state of the current utility as a utilityInfo object. This method isn’t supported for Lightning Web Components (LWC).
-   **[isUtilityPoppedOut() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_isUtilityPoppedOut.htm)**
    Determines whether the utility is in a popped-out state. This method isn’t supported for Lightning Web Components (LWC).
-   **[minimize() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_minimize.htm)**
    Minimizes a utility. This method is available for Lightning Web Components (LWC) only.
-   **[minimizeUtility() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_minimizeItem.htm)**
    Minimizes a utility. This method isn’t supported for Lightning Web Components (LWC).
-   **[onUtilityClick() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_onUtilityClick.htm)**
    Registers an eventHandler for the utility. This eventHandler is called when the utility is clicked.
-   **[open() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_open.htm)**
    Opens a utility. If the utility is already open, this method has no effect. Only one utility can be open at a time. If another utility is already open, open() minimizes the utility. This method is available for Lightning Web Components (LWC) only.
-   **[openUtility() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_openUtility.htm)**
    Opens a utility. If the utility is already open, this method has no effect. Only one utility can be open at a time. If another utility is already open, openUtility() minimizes the utility. This method isn’t supported for Lightning Web Components (LWC).
-   **[setPanelHeaderIcon() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setPanelHeaderIcon.htm)**
    Sets the icon of a utility’s panel. This icon is displayed in the utility panel header. This method isn’t supported for Lightning Web Components (LWC).
-   **[setPanelHeaderLabel() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setPanelLabel.htm)**
    Sets the label of a utility’s panel. This label is displayed in the utility panel header. This method isn’t supported for Lightning Web Components (LWC).
-   **[setPanelHeight() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setPanelHeight.htm)**
    Sets a utility panel’s height. This method isn’t supported for Lightning Web Components (LWC).
-   **[setPanelWidth() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setPanelWidth.htm)**
    Sets a utility panel’s width. This method isn’t supported for Lightning Web Components (LWC).
-   **[setUtilityHighlighted() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setUtilityHighlighted.htm)**
    Sets a utility as highlighted, giving it a badge and a more prominent background color. This method isn’t supported for Lightning Web Components (LWC).
-   **[setUtilityIcon() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setUtilityIcon.htm)**
    Sets the icon of a utility. This icon is displayed in the utility bar. This method isn’t supported for Lightning Web Components (LWC).
-   **[setUtilityLabel() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setUtilityLabel.htm)**
    Sets the label of a utility. This text is displayed in the utility bar. This method isn’t supported for Lightning Web Components (LWC).
-   **[toggleModalMode() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_toggleModalMode.htm)**
    Toggles modal mode for a utility. While in modal mode, an overlay blocks users from using the console while the utility panel is visible. This method isn’t supported for Lightning Web Components (LWC).
-   **[updatePanel() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updatePanel.htm)**
    Specifies a label and icon on the utility panel, and provides a height and width for the panel. This method is available for Lightning Web Components (LWC) only.
-   **[updateUtility() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updateUtility.htm)**
    Specifies a label and icon on the utility bar, and sets a utility as highlighted. This method is available for Lightning Web Components (LWC) only.
-   **[EnclosingUtilityId Context Wire Adapter for Lightning Experience Context Wire Adapter for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enclosingUtilityId.htm)**
    Determines if the component is within a utility. This wire adapter is available for Lightning Web Components (LWC) only.

## Related Topics

- Utility Bar API Method Parity (atlas.en-us.api_console.meta/api_console/sforce_api_console_js_utility_parity.htm)
- disableUtilityPopOut() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_disableUtilityPopOut.htm)
- enableModal() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enableModal.htm)
- enablePopout() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enablePopout.htm)
- getAllUtilityInfo() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getAllUtilityInfo.htm)
- getEnclosingUtilityId() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getEnclosingUtilityId.htm)
- getInfo() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_getInfo.htm)
- getUtilityInfo() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getUtilityInfo.htm)
- isUtilityPoppedOut() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_isUtilityPoppedOut.htm)
- minimize() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_minimize.htm)
