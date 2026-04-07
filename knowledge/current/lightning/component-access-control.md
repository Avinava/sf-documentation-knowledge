---
title: "Component Access Control"
domain: lightning
topic: component-access-control
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:02.412Z
estimatedTokens: 143
keywords: [Control, attribute, aura, tag, whether, outside, component’s]
---

> The access attribute on the aura:component tag controls whether the component can be used
  outside of the component’s namespace.

# Component Access Control

The access attribute on the aura:component tag controls whether the component can be used outside of the component’s namespace.

Possible values are listed below.

| Modifier | Description |
| --- | --- |
| public | Available within your org only. This is the default access value. |
| global | Available in all orgs. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Components aren’t directly addressable via a URL. To check your component output, embed your component in a .app resource.
