---
title: "logCustomInteraction(interactionLabel, interactionId)"
domain: apex-reference
topic: logcustominteractioninteractionlabel-interactionid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.782Z
keywords: [logCustomInteraction, interactionLabel, interactionId, Logs, custom, interaction, label, provide, enum, value, ID., Signature, Parameters, Return, Value]
---

# logCustomInteraction(interactionLabel, interactionId)

> Logs the custom interaction using a label that you provide as an enum value and an
    interaction ID.

### logCustomInteraction(interactionLabel, interactionId)

Logs the custom interaction using a label that you provide as an enum value and an interaction ID.

#### Signature

public static void logCustomInteraction(Object interactionLabel, Id interactionId)

#### Parameters

interactionLabel

Type: Object

A value used to label the custom interaction. The value of interactionLabel must be an enum with the same namespace as the code that calls the logCustomInteraction method.

interactionId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

An Apex ID that is associated with the custom interaction. The interactionId that you provide is hashed and tokenized before it’s included in AppExchange App Analytics package usage logs.

#### Return Value

Type: Void