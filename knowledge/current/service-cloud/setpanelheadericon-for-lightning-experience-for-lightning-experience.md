---
title: "setPanelHeaderIcon() for Lightning Experience for
   Lightning Experience"
domain: service-cloud
topic: setpanelheadericon-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.359Z
keywords: [setPanelHeaderIcon, Lightning, Experience, Arguments, Aura, Components, Sample, Code, Response]
---

# setPanelHeaderIcon() for Lightning Experience for
   Lightning Experience

# setPanelHeaderIcon() for Lightning Experience for Lightning Experience

Sets the icon of a utility’s panel. This icon is displayed in the utility panel header. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [updatePanel()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updatePanel.htm "Specifies a label and icon on the utility panel, and provides a height and width for the panel. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility to set the panel header icon on. Optional when called within a utility. |
| icon | string | An SLDS utility icon key. This is displayed in the utility bar. See a full list of utility icon keys on the SLDS reference site. |
| options | object | Optional. Additional options that modify the appearance of the utility panel icon.iconVariant—Changes the utility panel icon color. Available types are success (), warning (), and error (). |

## Aura Components Sample Code

This component, when added to a single-column Lightning page used in a utility bar, sets the icon of the utility panel to a yellow SLDS “frozen” icon when the button is pressed.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true.