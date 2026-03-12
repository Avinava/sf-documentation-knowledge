---
title: "selectors Properties"
domain: bi-dev-guide-json
topic: selectors-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.241Z
estimatedTokens: 278
keywords: [selectors, key, layout, specify, designer, grid, settings, background, requirements, devices]
---

# selectors Properties

> The selectors key contains layout properties that
    specify the layout name, designer grid settings, background settings, and requirements for
    devices that can use this layout.

# selectors Properties

The selectors key contains layout properties that specify the layout name, designer grid settings, background settings, and requirements for devices that can use this layout.

| Property Name | Details |
| --- | --- |
| minWidth(<width>) | TypeIntegerExposed in the Dashboard Designer's User InterfaceYesDescriptionMinimum width (in pixels) of the devices supported by this layout. |
| maxWidth(<width>) | TypeIntegerExposed in the Dashboard Designer's User InterfaceYesDescriptionMaximum width (in pixels) of the devices supported by this layout. |
| orientation( <orientation>) | TypeStringExposed in the Dashboard Designer's User InterfaceYesDescriptionOrientation of the devices supported by this layout. Valid values are: portrait or landscape. If this property is not specified, then the layout supports both orientations. |
| platform(<platform>) | TypeStringExposed in the Dashboard Designer's User InterfaceYesDescriptionPlatform of the devices supported by this layout. Valid values are: iOS or Android. If this property is not specified, the layout supports both platforms. |
