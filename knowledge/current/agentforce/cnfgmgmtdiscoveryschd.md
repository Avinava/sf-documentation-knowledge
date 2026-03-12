---
title: "CnfgMgmtDiscoverySchd"
domain: agentforce
topic: cnfgmgmtdiscoveryschd
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.396Z
estimatedTokens: 578
keywords: [CnfgMgmtDiscoverySchd, Represents, definition, schedule, controls, discovery, scan, should, run., example, daily, weekly, cron-based, scanning, cloud, infrastructure., API, version, 65.0, later.]
---

# CnfgMgmtDiscoverySchd

> Represents the definition of a schedule that controls when a discovery scan
         should run. For example, a daily or weekly cron-based schedule for scanning cloud
         infrastructure. This object is available in API version 65.0 and later.

# CnfgMgmtDiscoverySchd

Represents the definition of a schedule that controls when a discovery scan should run. For example, a daily or weekly cron-based schedule for scanning cloud infrastructure. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| CronExpression | TypestringPropertiesFilter, Group, SortDescriptionFull cron expression representing the scan schedule. |
| Days | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the day-of-month component of the cron schedule. |
| Hours | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the hours component of the cron schedule. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionSpecifies the date an object was last referenced. |
| LastScanSchedule | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the last discovery scan was initiated. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionSpecifies the date an object was last viewed. |
| Minutes | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the minutes component of the cron schedule. |
| Months | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the months component of the cron schedule. |
| Name | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionName of the cron schedule. |
| NextScanSchedule | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the next discovery scan is scheduled to run. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionRefers to a unique identifier that designates the user.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Seconds | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the seconds component of the cron schedule. |
| TimeZone | TypestringPropertiesFilter, Group, SortDescriptionTime zone in which the cron schedule is evaluated. |
| Weeks | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the day-of-week component of the cron schedule. |
| Years | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the years component of the cron schedule. |
