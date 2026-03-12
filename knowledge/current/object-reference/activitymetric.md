---
title: "ActivityMetric"
domain: object-reference
topic: activitymetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.040Z
estimatedTokens: 1041
keywords: [ActivityMetric, activities, were, added, Salesforce, automatically, Einstein, Activity, Capture, manually, users, Calls, Special, Access, Rules]
---

# ActivityMetric

> Represents activities that were added to Salesforce automatically by
   Einstein Activity Capture and manually by users.

# ActivityMetric

Represents activities that were added to Salesforce automatically by Einstein Activity Capture and manually by users.

This object is available in API version 45.0.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Unless otherwise noted, Einstein Activity Capture and Activity Metrics must be enabled.

## Fields

| Field | Details |
| --- | --- |
| BaseId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, idLookup, SortDescriptionThe ID of the record that the activities apply to. |
| BaseType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe entity that corresponds to the BaseId |
| FirstCallDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the date when the first call was made. This field is available only to Sales Engagement users. Einstein Activity Capture and Activity Metrics aren’t required. |
| FirstEmailDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the date when the first email was sent. This field is available only to Sales Engagement users. Einstein Activity Capture and Activity Metrics aren’t required. |
| InactiveDays | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIndicates the number of days since the most recent activity was completed. This field is derived from the Last Activity Date field. |
| LastActivityDateLastModDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the LastActivityDateTime field was last modified. |
| LastActivityDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the date when the most recent activity was completed. |
| LastCallDateLastModDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the LastCallDateTime field was last modified. |
| LastCallDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the date when the most recent call was made through Sales Dialer or Inbox. |
| LastEmailDateLastModDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the LastEmailDateTime field was last modified. |
| LastEmailDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the date when the most recent email was sent or received. |
| LastEmailReceivedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the date when the most recent email was received.Available in API version 54.0 and later. |
| LastEmailSentDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the date when the most recent email was sent.Available in API version 54.0 and later. |
| LastEventDateLastModDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the LastEventDateTime field was last modified. |
| LastEventDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the date when the most recent event was completed. |
| LastTaskDateLastModDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the LastTaskDateTime field was last modified. |
| LastTaskDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the date when the last task was completed. |
| NextActivityDateLastModDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the NextActivityDateTime field was last modified. |
| NextActivityDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the date of the next scheduled task or event. Only open tasks in the future are included. |

## Usage

Use this object to see data about sales activities that were added to Salesforce manually and by Einstein Activity Capture. Activity Metric fields are derived from your activity data. For example, the Inactive Days field indicates the number of days since the most recent activity was completed. Create a trigger that notifies a user when there isn’t any activity on an account for a certain amount of time.
