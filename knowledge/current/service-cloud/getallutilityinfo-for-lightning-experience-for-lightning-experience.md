---
title: "getAllUtilityInfo() for Lightning Experience for
   Lightning Experience"
domain: service-cloud
topic: getallutilityinfo-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.206Z
keywords: [getAllUtilityInfo, Lightning, Experience, Arguments, LWC, Sample, Code, Aura, Components, Response, See]
---

# getAllUtilityInfo() for Lightning Experience for
   Lightning Experience

# getAllUtilityInfo() for Lightning Experience for Lightning Experience

Returns the state of all utilities as an array of utilityInfo objects.

## Arguments

None.

## LWC Sample Code

This component returns the number of utilities in the utility bar using the utilityInfo object.

```

```

To make your component available for use in a utility bar, specify the lightning\_\_UtilityBar target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-utility-bar.html).

## Aura Components Sample Code

This component has a button that, when pressed, retrieves all utilityInfo objects and opens the first utility, ordered by ID.

Component code:

```

```

Controller code:

```

```

## Response

For both LWC and Aura Components, this method returns a promise that resolves to an array of utilityInfo objects, containing the following fields. The promise is rejected on error.

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