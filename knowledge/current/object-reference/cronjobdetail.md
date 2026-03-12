---
title: "CronJobDetail"
domain: object-reference
topic: cronjobdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.582Z
estimatedTokens: 217
keywords: [CronJobDetail, associated, scheduled, job, job’s, API, version, 29.0, later, Calls, Usage]
---

# CronJobDetail

> Contains details about the associated scheduled job, such as the
      job’s name and type.
    This object is available in API version 29.0 and later.

# CronJobDetail

Contains details about the associated scheduled job, such as the job’s name and type. This object is available in API version 29.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| JobType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of the associated scheduled job. The following are the available job types. Use the job type value when querying for a specific job type.1—Data Export3—Dashboard Refresh4—Reporting Snapshot6—Scheduled Flow7—Scheduled Apex8—Report Run9—Batch JobA—Reporting Notification |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the associated scheduled job. |

## Usage

Use this object to query additional information about a scheduled job, such as the job’s name and type.
