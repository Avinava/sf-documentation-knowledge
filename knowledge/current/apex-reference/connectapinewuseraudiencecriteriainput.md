---
title: "ConnectApi.NewUserAudienceCriteriaInput"
domain: apex-reference
topic: connectapinewuseraudiencecriteriainput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.349Z
keywords: [ConnectApi.NewUserAudienceCriteriaInput]
---

# ConnectApi.NewUserAudienceCriteriaInput

# ConnectApi.NewUserAudienceCriteriaInput

Criteria for the new members type of custom recommendation audience.

Subclass of [ConnectApi.AudienceCriteriaInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience_criteria.htm "Custom recommendation audience criteria type.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| value | Double | The maximum number of days since a user became a site member. For example, if you specify 30, anyone who became a site member in the last 30 days is included in the new members audience. | Required | 36.0 |