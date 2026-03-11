---
title: "ConnectApi.MaintenanceInfo"
domain: apex-reference
topic: connectapimaintenanceinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.075Z
keywords: [ConnectApi.MaintenanceInfo, See]
---

# ConnectApi.MaintenanceInfo

# ConnectApi.MaintenanceInfo

Information about the upcoming scheduled maintenance for the organization.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| description | String | Description of the maintenance. | 34.0 |
| maintenanceTitle | String | Title of the maintenance. | 34.0 |
| maintenanceType | ConnectApi.​MaintenanceType | Type of maintenance. Values are:Downtime—Downtime maintenance.GenerallyAvailable—Generally available mode.MaintenanceAndAvailable—Maintenance with available mode.MaintenanceWithDowntime—Scheduled maintenance with downtime.ReadOnly—Maintenance with read-only mode. | 34.0 |
| message​EffectiveTime | Datetime | Effective time when users start seeing the maintenance message. | 34.0 |
| message​ExpirationTime | Datetime | Expiration time of the maintenance message. | 34.0 |
| scheduledEnd​Downtime | Datetime | Scheduled end of downtime. null for GenerallyAvailable and ReadOnly maintenance types. | 34.0 |
| scheduledEnd​MaintenanceTime | Datetime | Scheduled end of maintenance. null for Downtime maintenance type. | 34.0 |
| scheduledStart​Downtime | Datetime | Scheduled start of downtime. null for GenerallyAvailable and ReadOnly maintenance types. | 34.0 |
| scheduledStart​MaintenanceTime | Datetime | Scheduled start time of maintenance. null for Downtime maintenance type. | 34.0 |

#### See Also

-   [ConnectApi.OrganizationSettings](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_organization.htm "Org settings.")