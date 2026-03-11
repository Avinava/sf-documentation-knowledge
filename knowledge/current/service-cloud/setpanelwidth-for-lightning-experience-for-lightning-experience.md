---
title: "setPanelWidth() for Lightning Experience for Lightning
   Experience"
domain: service-cloud
topic: setpanelwidth-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.368Z
keywords: [setPanelWidth, Lightning, Experience, Arguments, Aura, Components, Sample, Code, Response]
---

# setPanelWidth() for Lightning Experience for Lightning
   Experience

# setPanelWidth() for Lightning Experience for Lightning Experience

Sets a utility panel’s width. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [updatePanel()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updatePanel.htm "Specifies a label and icon on the utility panel, and provides a height and width for the panel. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility of which to set the width. Optional when called within a utility. |
| widthPX | integer | The width of the utility panel in pixels. |

## Aura Components Sample Code

This component, when added to a single-column Lightning page used in a utility bar, sets the width of the utility panel to 800 pixels when the button is pressed.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true.