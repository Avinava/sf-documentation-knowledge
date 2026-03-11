---
title: "logCustomInteraction(interactionLabel, interactionUuid)"
domain: apex-reference
topic: logcustominteractioninteractionlabel-interactionuuid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.782Z
keywords: [logCustomInteraction, interactionLabel, interactionUuid, Logs, custom, interaction, label, provide, enum, value, Apex, UUID., Signature, Parameters, Return, Value]
---

# logCustomInteraction(interactionLabel, interactionUuid)

> Logs the custom interaction using a label that you provide as an  enum value and an
    interaction ID that you provide as an Apex UUID.

### logCustomInteraction(interactionLabel, interactionUuid)

Logs the custom interaction using a label that you provide as an enum value and an interaction ID that you provide as an Apex UUID.

#### Signature

public static void logCustomInteraction(Object interactionLabel, System.UUID interactionUuid)

#### Parameters

interactionLabel

Type: Object

A value used to label the custom interaction. The value of interactionLabel must be an enum with the same namespace as the code that calls the logCustomInteraction method.

interactionUuid

Type: System.UUID

An Apex UUID that is associated with the custom interaction. The interactionId that you provide is hashed and tokenized before being included in AppExchange App Analytics package usage logs.

#### Return Value

Type: Void