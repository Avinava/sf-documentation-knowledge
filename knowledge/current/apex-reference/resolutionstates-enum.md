---
title: "ResolutionStates Enum"
domain: apex-reference
topic: resolutionstates-enum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.334Z
keywords: [ResolutionStates, Enum, Values]
---

# ResolutionStates Enum

# ResolutionStates Enum

Potential resolution states for a resolution strategy.

## Enum Values

The following are the values of the CommerceExtension.ResolutionStates enum.

| Value | Description |
| --- | --- |
| EXECUTE_DEFAULT | Run the default domain logic (without running extension provider logic). |
| EXECUTE_REGISTERED | Run the extension provider logic provided by the Apex class registered for the endpoint provider name. |
| OFF | Don’t run any domain logic (default logic or logic provided by an extension provider). |