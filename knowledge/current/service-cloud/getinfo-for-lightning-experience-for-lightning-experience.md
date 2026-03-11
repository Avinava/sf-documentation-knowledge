---
title: "getInfo() for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: getinfo-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.439Z
keywords: [getInfo, Lightning, Experience, Arguments, LWC, Sample, Code, Response, See]
---

# getInfo() for Lightning Experience for Lightning
            Experience

# getInfo() for Lightning Experience for Lightning Experience

Returns the state of the current utility as a utilityInfo object. This method is available for Lightning Web Components (LWC) only.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility for which to retrieve the state. |

## LWC Sample Code

This component retrieves the utilityInfo object.

```

```

To make your component available for use in a utility bar, specify the lightning\_\_UtilityBar target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-utility-bar.html).

## Response

This method returns a promise that resolves to a utilityInfo object representing the enclosing utility, containing the following fields. The promise is rejected on error.

| Name | Type | Description |
| --- | --- | --- |
| id | string | The ID of the utility. |
| isLoaded | boolean | Whether the utility is loaded. |
| utilityLabel | string | The label of the utility. |
| utilityIcon | string | The SLDS icon ID of the utility’s icon. |
| utilityIconVariant | string | The SLDS icon variant of the utility’s icon. |
| utilityHighlighted | boolean | Whether the utility is highlighted. |
| utilityVisible | boolean | Whether the utility is visible. |
| utilityPoppedOut | boolean | Whether the utility is popped out. |
| panelHeaderLabel | string | The label of the utility panel. |
| panelHeaderIcon | string | The SLDS icon ID of the utility panel’s icon. |
| panelHeaderIconVariant | string | The SLDS icon variant of the utility panel’s icon. |
| panelHeight | integer | The height of the utility panel in pixels. |
| panelWidth | integer | The width of the utility panel in pixels |

#### See Also

-   [*MDN Web Docs*: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function "MDN Web Docs: async function - HTML (New Window)")