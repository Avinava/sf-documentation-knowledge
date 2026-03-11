---
title: "deleteEngagements(engagementInteractionId)"
domain: omnistudio
topic: deleteengagementsengagementinteractionid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.540Z
keywords: [deleteEngagements, engagementInteractionId, API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# deleteEngagements(engagementInteractionId)

# deleteEngagements(engagementInteractionId)

Delete an engagement interaction record.

## API Version

55.0

## Requires Chatter

No

## Signature

public static Void deleteEngagements(String engagementInteractionId)

## Parameters

engagementInteractionId

Type: String

The unique external identifier of an engagement interaction.

## Return Value

Type: Void

## Example

ConnectApi.EngagementContainerConnect.deleteEngagements('<EngagementInteractionId>');