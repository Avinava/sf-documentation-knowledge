---
title: "Maintenance Information"
domain: chatterapi
topic: maintenance-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.381Z
estimatedTokens: 432
keywords: [Maintenance, upcoming, scheduled, organization]
---

# Maintenance Information

> Information about the upcoming scheduled maintenance for the
      organization.

# Maintenance Information

Information about the upcoming scheduled maintenance for the organization.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the maintenance. | Small, 34.0 | 34.0 |
| maintenance​Title | String | Title of the maintenance. | Small, 34.0 | 34.0 |
| maintenance​Type | String | Type of maintenance. Values are:Downtime—Downtime maintenance.GenerallyAvailable—Generally available mode.MaintenanceAndAvailable—Maintenance with available mode.MaintenanceWithDowntime—Scheduled maintenance with downtime.ReadOnly—Maintenance with read-only mode. | Small, 34.0 | 34.0 |
| message​EffectiveTime | String | Effective time when users start seeing the maintenance message. Format is ISO 8601. | Small, 34.0 | 34.0 |
| message​ExpirationTime | String | Expiration time of the maintenance message. Format is ISO 8601. | Small, 34.0 | 34.0 |
| scheduledEnd​Downtime | String | Scheduled end of downtime. null for GenerallyAvailable and ReadOnly maintenance types. Format is ISO 8601. | Small, 34.0 | 34.0 |
| scheduledEnd​MaintenanceTime | String | Scheduled end of maintenance. null for Downtime maintenance type. Format is ISO 8601. | Small, 34.0 | 34.0 |
| scheduledStart​Downtime | String | Scheduled start of downtime. null for GenerallyAvailable and ReadOnly maintenance types. Format is ISO 8601. | Small, 34.0 | 34.0 |
| scheduledStart​MaintenanceTime | String | Scheduled start time of maintenance. null for Downtime maintenance type. Format is ISO 8601. | Small, 34.0 | 34.0 |

#### See Also

-   [Organization](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_organization.htm "An org.")

## Related Topics

- Organization (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_organization.htm)
