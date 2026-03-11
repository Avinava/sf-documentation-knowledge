---
title: "getUtilityInfo() for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: getutilityinfo-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.241Z
keywords: [getUtilityInfo, Lightning, Experience, Arguments, Aura, Components, Sample, Code, Response]
---

# getUtilityInfo() for Lightning Experience for Lightning
            Experience

# getUtilityInfo() for Lightning Experience for Lightning Experience

Returns the state of the current utility as a utilityInfo object. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [getInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_getInfo.htm "Returns the state of the current utility as a utilityInfo object. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility for which to retrieve the state. |

## Aura Components Sample Code

This component has a button that, when pressed, retrieves the enclosing utility’s info and opens it if it’s not currently visible, and closes it otherwise.

Component code:

```

```

Controller code:

```

```

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