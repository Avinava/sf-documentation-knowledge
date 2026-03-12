---
title: "EmailInsight"
domain: object-reference
topic: emailinsight
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.350Z
estimatedTokens: 714
keywords: [EmailInsight, insight, generated, email, interaction, EmailInsights, acts, central, place, store, various, insights, messages, stored, include]
---

# EmailInsight

> Represents an insight generated from an email interaction. EmailInsights acts
         as a central place to store various types of insights related to email messages. The
         insights stored include status, type, and time of generation. Only certain types of
         insights can be created based on a pre-configured list of insight types. This object
      is available in API version 63.0 and later.

# EmailInsight

Represents an insight generated from an email interaction. EmailInsights acts as a central place to store various types of insights related to email messages. The insights stored include status, type, and time of generation. Only certain types of insights can be created based on a pre-configured list of insight types. This object is available in API version 63.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

EmailStream and SiqC2CProvisioned permissions must be enabled.

EmailStreamPref, SiqOrgProvisioned, and SyncEmailToCoreActivity Org prefs must be enabled.

To be able to see SyncEmailToCoreActivity pref, EACLegacyEmailSyncAWS Org perm, AnalyticsActivity, UnifiedActivities, and ActivityMetrics must be disabled. In addition, license to Standard Einstein Activity Capture and turning on Einstein Activity Capture and EmailInsights provisions the required permissions and prefs.

## Fields

| Field | Details |
| --- | --- |
| EmailMessageId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the email message the insight is generated for.This field is a relationship field.Relationship NameEmailMessageRefers ToEmailMessage |
| GeneratedDate | TypedateTimePropertiesFilter, SortDescriptionRequired. The date and time when the insight was generated in the legacy system. |
| InsightTypeDescription | TypetextareaPropertiesNoneDescriptionRequired. Description of the insight type. |
| InsightTypeIdentifier | TypestringPropertiesFilter, Group, SortDescriptionRequired. The ID of the insight type based on which the insight is generated. |
| InsightTypeLabel | TypestringPropertiesFilter, Group, SortDescriptionRequired. The display name of the insight type. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the email insight record is locked or not.The default value is false. |
| LegacyInsightIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. The unique ID of the insight that was generated and stored in the legacy system. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the email insight record can be edited or not.The default value is false. |
| RowVersion | TypestringPropertiesDefaulted on create, Filter, Group, SortDescriptionA system-generated, read-only field that tracks the version of a record. Each time a record is created or updated, the RowVersion value increments, providing a mechanism to detect changes and manage concurrency. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The status of the insight record.Possible values are:ActiveCompletedDeprecatedDismissedThe default value is Active. |
