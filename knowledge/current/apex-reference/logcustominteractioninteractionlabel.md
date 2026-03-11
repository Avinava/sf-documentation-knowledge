---
title: "logCustomInteraction(interactionLabel)"
domain: apex-reference
topic: logcustominteractioninteractionlabel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.782Z
keywords: [logCustomInteraction, interactionLabel, Logs, custom, interaction, label, provide, enum, value., Signature, Parameters, Return, Value]
---

# logCustomInteraction(interactionLabel)

> Logs the custom interaction using a label that you provide as an  enum value.

### logCustomInteraction(interactionLabel)

Logs the custom interaction using a label that you provide as an enum value.

#### Signature

public static void logCustomInteraction(Object interactionLabel)

#### Parameters

interactionLabel

Type: Object

A value used to label the custom interaction. The value of interactionLabel must be an enum with the same namespace as the code that calls the logCustomInteraction method.

#### Return Value

Type: Void