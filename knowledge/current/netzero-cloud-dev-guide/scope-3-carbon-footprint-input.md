---
title: "Scope 3 Carbon Footprint Input"
domain: netzero-cloud-dev-guide
topic: scope-3-carbon-footprint-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.256Z
estimatedTokens: 148
keywords: [Scope, Carbon, Footprint, Input, representation, source, calculate, covers, greenhouse, gas, emissions, sources, owned, controlled, entities]
---

# Scope 3 Carbon Footprint Input

> Input representation of the source to calculate the scope 3 carbon
      footprint. A scope 3 carbon footprint covers greenhouse gas emissions from sources owned or
      controlled by other entities in your organization.

# Scope 3 Carbon Footprint Input

Input representation of the source to calculate the scope 3 carbon footprint. A scope 3 carbon footprint covers greenhouse gas emissions from sources owned or controlled by other entities in your organization.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| footprintStage | String | Specifies the stage of the scope 3 carbon footprint. An annual emissions inventory is created only for the scope 3 carbon footprints with a footprint stage. | Required | 54.0 |

## Code Examples

```
"scope3CrbnFtprnt": {
  "footprintStage": "Internal Audit"
}
```
