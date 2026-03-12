---
title: "Attribute Access Control"
domain: lightning
topic: attribute-access-control
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.849Z
estimatedTokens: 177
keywords: [Attribute, Access, Control, aura, tag, whether, outside, attribute’s]
---

# Attribute Access Control

> The access attribute on the aura:attribute tag controls whether the attribute can be used
  outside of the attribute’s namespace.

# Attribute Access Control

The access attribute on the aura:attribute tag controls whether the attribute can be used outside of the attribute’s namespace.

Possible values are listed below.

| Access | Description |
| --- | --- |
| private | Available within the component, app, interface, or event, or method and can’t be referenced outside the resource.Accessing a private attribute returns undefined unless you reference it from the component in which it’s declared. You can’t access a private attribute from a sub-component that extends the component containing the private attribute. |
| public | Available within your org only. This is the default access value. |
| global | Available in all orgs. |
