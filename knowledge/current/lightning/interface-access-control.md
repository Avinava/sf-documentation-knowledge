---
title: "Interface Access Control"
domain: lightning
topic: interface-access-control
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.857Z
estimatedTokens: 112
keywords: [Access, Control, attribute, aura, tag, whether, outside, interface’s]
---

# Interface Access Control

> The access attribute on the aura:interface tag controls whether the interface can be used
  outside of the interface’s namespace.

# Interface Access Control

The access attribute on the aura:interface tag controls whether the interface can be used outside of the interface’s namespace.

Possible values are listed below.

| Modifier | Description |
| --- | --- |
| public | Available within your org only. This is the default access value. |
| global | Available in all orgs. |

A component can implement an interface using the implements attribute on the aura:component tag.
