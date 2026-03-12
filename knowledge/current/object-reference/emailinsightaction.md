---
title: "EmailInsightAction"
domain: object-reference
topic: emailinsightaction
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.356Z
estimatedTokens: 588
keywords: [EmailInsightAction, actions, taken, relation, email, insights, logs, different, associated, metadata, helping, track, manage, activities, decisions]
---

# EmailInsightAction

> Represents the actions that have been taken, or could be taken, in relation
         to email insights. It logs different types of actions and associated metadata, helping to
         track and manage the activities and decisions made based on email insights. This
      object is available in API version 63.0 and later.

# EmailInsightAction

Represents the actions that have been taken, or could be taken, in relation to email insights. It logs different types of actions and associated metadata, helping to track and manage the activities and decisions made based on email insights. This object is available in API version 63.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

EmailStream and SiqC2CProvisioned permissions must be enabled.

EmailStreamPref, SiqOrgProvisioned, and SyncEmailToCoreActivity Org prefs must be enabled.

To be able to see SyncEmailToCoreActivity pref, EACLegacyEmailSyncAWS Org perm, AnalyticsActivity, UnifiedActivities, and ActivityMetrics must be disabled. In addition, license to Standard Einstein Activity Capture and turning on Einstein Activity Capture and EmailInsights provisions the required permissions and prefs.

## Fields

| Field | Details |
| --- | --- |
| ActionMetadata | TypetextareaPropertiesNillableDescriptionThe metadata for the action. |
| EmailInsightId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the email insight where the action is applied.This field is a relationship field.Relationship NameEmailInsightRefers ToEmailInsight |
| InsightAction | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The action that's taken on the email insight.Possible values are:CreateCalendarEventCreateTaskWithDateEciCreateEmailEciScheduleMeetingsEciSendEmailEmailReplyEmailReplyLaterEmailReplyWithTemplateInsertFreeTimePostOnChatterViewCalendarViewContactProfileThe default value is EmailReply. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the email insight action record is locked or not.The default value is false. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the email insight action record can be edited or not.The default value is false. |
| RowVersion | TypestringPropertiesDefaulted on create, Filter, Group, SortDescriptionA system-generated, read-only field that tracks the version of a record. Each time a record is created or updated, the RowVersion value increments, providing a mechanism to detect changes and manage concurrency. |
