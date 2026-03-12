---
title: "ConnectApi.NewUserAudienceCriteriaInput"
domain: apex-reference
topic: connectapinewuseraudiencecriteriainput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.209Z
estimatedTokens: 156
keywords: [ConnectApi.NewUserAudienceCriteriaInput, Criteria, new, members, custom, recommendation, audience.]
---

# ConnectApi.NewUserAudienceCriteriaInput

> Criteria for the new members type of custom recommendation
      audience.

# ConnectApi.NewUserAudienceCriteriaInput

Criteria for the new members type of custom recommendation audience.

Subclass of [ConnectApi.AudienceCriteriaInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience_criteria.htm "Custom recommendation audience criteria type.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| value | Double | The maximum number of days since a user became a site member. For example, if you specify 30, anyone who became a site member in the last 30 days is included in the new members audience. | Required | 36.0 |

## Related Topics

- ConnectApi.AudienceCriteriaInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience_criteria.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
