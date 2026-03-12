---
title: "ResolutionStates Enum"
domain: apex-reference
topic: resolutionstates-enum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.427Z
estimatedTokens: 133
keywords: [ResolutionStates, Potential, resolution, states, strategy., Values]
---

# ResolutionStates Enum

> Potential resolution states for a resolution strategy.

# ResolutionStates Enum

Potential resolution states for a resolution strategy.

## Enum Values

The following are the values of the CommerceExtension.ResolutionStates enum.

| Value | Description |
| --- | --- |
| EXECUTE_DEFAULT | Run the default domain logic (without running extension provider logic). |
| EXECUTE_REGISTERED | Run the extension provider logic provided by the Apex class registered for the endpoint provider name. |
| OFF | Don’t run any domain logic (default logic or logic provided by an extension provider). |
