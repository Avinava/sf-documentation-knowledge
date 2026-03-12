---
title: "Action"
domain: psc-api
topic: action
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.632Z
estimatedTokens: 176
keywords: [Action, Output, representation, part, search, configuration, metadata]
---

# Action

> Output representation of the action that is returned as part of the search configuration
    metadata.

# Action

Output representation of the action that is returned as part of the search configuration metadata.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionReference | String | Action that a user can launch for a search result. | Small, 59.0 | 59.0 |
| actionScope | String | Scope of the action that the user can launch. For example, select Global to apply the action to all record types in the search result. | Small, 59.0 | 59.0 |
| actionType | String | Type of action that a user can launch. | Small, 59.0 | 59.0 |
| displayName | String | Name of the action that's displayed in the search page. | Small, 59.0 | 59.0 |
