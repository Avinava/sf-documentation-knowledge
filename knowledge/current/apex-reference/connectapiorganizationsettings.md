---
title: "ConnectApi.OrganizationSettings"
domain: apex-reference
topic: connectapiorganizationsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.313Z
estimatedTokens: 175
keywords: [ConnectApi.OrganizationSettings, Org, settings.]
---

# ConnectApi.OrganizationSettings

> Org settings.

# ConnectApi.OrganizationSettings

Org settings.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| accessTimeout | Integer | Amount of time after which the system prompts users who have been inactive to log out or continue working. | 28.0 |
| features | ConnectApi.Features | Information about features available in the org. | 28.0 |
| maintenanceInfo | List<ConnectApi.MaintenanceInfo> | Information about a list of upcoming scheduled maintenances for the org. | 34.0 |
| name | String | Org name. | 28.0 |
| orgId | String | 18-character ID for the org. | 28.0 |
| userSettings | ConnectApi.UserSettings | Information about the org permissions for the user. | 28.0 |

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.Features (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_features.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.MaintenanceInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_maintenance_info.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.UserSettings (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_usersettings.htm)
