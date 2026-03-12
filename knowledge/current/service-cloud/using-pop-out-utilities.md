---
title: "Using Pop-Out Utilities"
domain: service-cloud
topic: using-pop-out-utilities
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.998Z
estimatedTokens: 720
keywords: [Pop-Out, Utilities, support, pop-out, “popped, out”, utility, bar, their, own, separate, child, windows., Note, Standard, Custom, Disabling]
---

# Using Pop-Out Utilities

> Utilities that support pop-out can be “popped out” of the utility bar and into their
        own separate child windows.

# Using Pop-Out Utilities

Utilities that support pop-out can be “popped out” of the utility bar and into their own separate child windows.

To pop a utility out, click the ![The pop-out icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_console%2Fimages%2Fpopout_icon.png&folder=api_console) icon. From there, you can pop the utility back into the utility bar with the ![The pop-in icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_console%2Fimages%2Fpopin_icon.png&folder=api_console) icon, or close the utility. Pop-out utilities are the Lightning equivalent to multi-monitor components in Classic.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Popping-out docked utility bar items isn't supported in Lightning Experience on iPad Safari.

## Standard Utilities

Pop-out is supported for these standard utilities. Standard utilities are utilities that are included with Salesforce.

-   Open CTI Softphone
-   History
-   Rich Text
-   Report Chart
-   Visualforce
-   Flow
-   List View
-   Recent Items
-   Chatter Feed
-   Chatter Publisher
-   Notes

## Custom Utilities

Pop-out is available for custom utilities. To enable pop-out for custom utilities, activate the **Utility Bar: Enable Pop-Out for Custom Utilities** critical update. The critical update enables pop-out for all utilities in the “Custom” and “Custom – Managed” categories. Test your custom utilities in a sandbox environment before you enable the update.

## Disabling Pop-Out

If you don’t want your custom utility to be popped out, you can disable pop-out in two ways.

**Disabling Pop-Out within the Component**

Use the lightning:utilityItem interface in your component and set the supportsPopOut attribute to false to disable pop-out.

```

```

Disabling pop-out within the component itself is a useful and simple way to ensure that the component can never be popped out.

**Disabling Pop-Out with the Lightning Console JavaScript API**

Use the disableUtilityPopOut() method and set the disabled argument to true to disable utility pop-out.

If you’re migrating from a Classic console app and using a Visualforce page for your utility, we automatically respect if setCustomConsoleComponentPopoutable is set to false.

Disabling pop-out with the Lightning Console JavaScript API allows you to enable and disable pop-out in real time.

-   **[Supported APIs](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_utility_popout_supported_apis.htm)**
    A list of methods and events that support utility pop-out.

#### See Also

-   [disableUtilityPopOut() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_disableUtilityPopOut.htm "Disables pop-out for a utility. This method isn’t supported for Lightning Web Components (LWC).")

## Code Examples

```
<aura:component implements="lightning:utilityItem">
    <aura:attribute name="supportsPopOut" type="Boolean" default="false" />
</aura:component>
```

## Related Topics

- Supported APIs (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_utility_popout_supported_apis.htm)
- disableUtilityPopOut() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_disableUtilityPopOut.htm)
