---
title: "Utility Bar API Method Parity"
domain: service-cloud
topic: utility-bar-api-method-parity
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:55.722Z
estimatedTokens: 681
keywords: [Utility, Bar, API, Parity, Aura, Components, Lightning, Web, LWC, Experience, Salesforce, Classic, isn’t, Bars, Considerations]
---

# Utility Bar API Method Parity

> The utility bar API provides methods for Aura Components and Lightning Web Components
        (LWC) in Lightning Experience only. Salesforce Classic isn’t supported.

# Utility Bar API Method Parity

The utility bar API provides methods for Aura Components and Lightning Web Components (LWC) in Lightning Experience only. Salesforce Classic isn’t supported.

This table shows how the LWC methods map to Aura Components methods. Both can interoperate on the same page. We recommend using LWC to build user interfaces using modern web standards.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_console)

#### Important

Before you can use the utility bar API with LWC, Lightning Web Security must be enabled in your organization.

## Methods for Utility Bars

| Utility Bar Methods for LWC | Utility Bar Methods for Aura Components |
| --- | --- |
| enableModal() | toggleModalMode() |
| enablePopout() | disableUtilityPopOut() |
| getAllUtilityInfo() | Same as LWC. |
| getInfo() | getUtilityInfo() |
| minimize() | minimizeUtility() |
| onUtilityClick() | Same as LWC. |
| open() | openUtility() |
| updatePanel() | Update a utility panel using one or more of these methods.setPanelHeaderIcon()setPanelHeaderLabel()setPanelHeight()setPanelWidth() |
| updateUtility() | Update a utility using one or more of these methods.setUtilityHighlighted()setUtilityIcon()setUtilityLabel() |
| EnclosingUtilityId context wire adapter | getEnclosingUtilityId() |

## Utility Bar API Considerations

Consider these additional guidelines.

-   For LWC, the utilityId parameter is always required. For Aura Components, utilityId can be optional if it’s called from within a utility.
-   For LWC, to retrieve the record context from a component in a utility, use the [CurrentPageReference wire adapter](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_utility_bar_page_context.htm "In both Lightning console apps and standard navigation apps, utilities can respond to the context of the current page. For a Lightning web component, use the CurrentPageReference wire adapter. For an Aura component, specify implements=\"force:hasRecordId\" to access the recordId of the record a user is viewing."). For Aura Components, implement the force:hasRecordId interface on your custom component.
-   The [isUtilityPoppedOut()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_isUtilityPoppedOut.htm "Determines whether the utility is in a popped-out state. This method isn’t supported for Lightning Web Components (LWC).") Aura Components method doesn’t have an LWC equivalent. You can use the [getAllUtilityInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getAllUtilityInfo.htm "Returns the state of all utilities as an array of utilityInfo objects.") method to retrieve the same information.

## Related Topics

- enableModal() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enableModal.htm)
- toggleModalMode() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_toggleModalMode.htm)
- enablePopout() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enablePopout.htm)
- disableUtilityPopOut() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_disableUtilityPopOut.htm)
- getAllUtilityInfo() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getAllUtilityInfo.htm)
- getInfo() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_getInfo.htm)
- getUtilityInfo() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getUtilityInfo.htm)
- minimize() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_minimize.htm)
- minimizeUtility() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_minimizeItem.htm)
- onUtilityClick() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_onUtilityClick.htm)
