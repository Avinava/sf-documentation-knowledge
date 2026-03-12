---
title: "Organization"
domain: chatterapi
topic: organization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.185Z
estimatedTokens: 194
keywords: [Organization, org]
---

# Organization

> An org.

# Organization

An org.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accessTimeout | Integer | Amount of time after which the system prompts users who have been inactive to log out or continue working. | Small, 29.0 | 24.0 |
| features | Features | Information about features available in the org or site. | Small, 29.0 | 24.0 |
| maintenanceInfo | Maintenance Information[] | Information about a list of upcoming scheduled maintenances for the org. | Medium, 34.0 | 34.0 |
| name | String | Org name. | Small, 29.0 | 26.0 |
| orgId | String | 18-character ID for the org. | Small, 29.0 | 24.0 |
| userSettings | User Setting | Information about the org permissions for the user. | Small, 29.0 | 24.0 |

## Related Topics

- Features (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_features.htm)
- Maintenance Information (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_maintenance_info.htm)
- User Setting (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_settings.htm)
