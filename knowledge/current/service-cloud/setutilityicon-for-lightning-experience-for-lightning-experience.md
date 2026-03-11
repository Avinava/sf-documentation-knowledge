---
title: "setUtilityIcon() for Lightning Experience for Lightning
   Experience"
domain: service-cloud
topic: setutilityicon-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.389Z
keywords: [setUtilityIcon, Lightning, Experience, Arguments, Aura, Components, Sample, Code, Response]
---

# setUtilityIcon() for Lightning Experience for Lightning
   Experience

# setUtilityIcon() for Lightning Experience for Lightning Experience

Sets the icon of a utility. This icon is displayed in the utility bar. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [updateUtility() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updateUtility.htm "Specifies a label and icon on the utility bar, and sets a utility as highlighted. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility on which to set the icon. Optional when called within a utility. |
| icon | string | An SLDS utility icon key that is displayed in the utility bar. See a full list of utility icon keys on the SLDS reference site. |
| options | object | Optional. Additional options that modify the appearance of the utility icon.iconVariant—Changes the utility icon color. Available types are success (), warning (), and error (). |

## Aura Components Sample Code

This component, when added to a single-column Lightning page used in a utility bar, sets the icon of the utility to a green SLDS “insert\_tag\_field” icon when the button is pressed.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true.