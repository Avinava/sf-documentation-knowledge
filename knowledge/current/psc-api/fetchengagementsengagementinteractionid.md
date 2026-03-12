---
title: "fetchEngagements(engagementInteractionId)"
domain: psc-api
topic: fetchengagementsengagementinteractionid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.416Z
estimatedTokens: 164
keywords: [fetchEngagements, engagementInteractionId, engagement, interaction, record, API, Version, Requires, Chatter]
---

# fetchEngagements(engagementInteractionId)

> Get an engagement interaction record.

# fetchEngagements(engagementInteractionId)

Get an engagement interaction record.

## API Version

55.0

## Requires Chatter

No

## Signature

public static ConnectApi.EngagementInteractionFetchOutput fetchEngagements(String engagementInteractionId)

## Parameters

engagementInteractionId

Type: String

The unique external identifier of an engagement interaction.Description

## Return Value

Type: [ConnectApi.EngagementInteractionFetchOutput](atlas.en-us.psc_api.meta/psc_api/apex_connectapi_output_engagement_interaction_fetch_output.htm "Output representation to fetch an engagement interaction record along with the status.")

## Example

```

```

## Code Examples

```
ConnectApi.EngagementInteractionFetchOutput  output = ConnectApi.EngagementContainerConnect.fetchEngagements('<EngagementInteractionId>');
```

## Related Topics

- ConnectApi.EngagementInteractionFetchOutput (atlas.en-us.psc_api.meta/psc_api/apex_connectapi_output_engagement_interaction_fetch_output.htm)
