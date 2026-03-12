---
title: "Loyalty Engine Run Settings Input"
domain: loyalty
topic: loyalty-engine-run-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.930Z
estimatedTokens: 132
keywords: [Loyalty, Engine, Run, Settings, Input, representation, simulation, transaction, journals]
---

# Loyalty Engine Run Settings Input

> Input representation of the loyalty engine settings to run simulation
      on the transaction journals.

# Loyalty Engine Run Settings Input

Input representation of the loyalty engine settings to run simulation on the transaction journals.

Root XML tag

<loyaltyEngineRunSettingsRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isSimulation | Boolean | Indicates whether to run a simulation on the transaction journals (true) or not (false). Default value is false. | Required for simulation otherwise optional. | 55.0 |

## Code Examples

```
{
  "runSetting": {
    "isSimulation": true
  }
}
```
