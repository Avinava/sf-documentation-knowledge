---
title: "randomUUID()"
domain: apex-reference
topic: randomuuid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.545Z
keywords: [randomUUID, static, method, randomly, generates, version, UUID., Signature, Return, Value, Example]
---

# randomUUID()

> A static method that randomly generates a version 4 UUID.

### randomUUID()

A static method that randomly generates a version 4 UUID.

#### Signature

public static System.UUID randomUUID()

#### Return Value

Type: System.UUID

A 32 hexadecimal value of the UUID generated.

#### Example

UUID randomUUID = UUID.randomUUID(); system.debug(randomUUID); // Prints the UUID string that was randomly generated