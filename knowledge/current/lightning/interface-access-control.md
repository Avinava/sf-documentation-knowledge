---
title: "Interface Access Control"
domain: lightning
topic: interface-access-control
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:02.421Z
estimatedTokens: 112
keywords: [Control, attribute, aura, tag, whether, outside, interface’s]
---

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
