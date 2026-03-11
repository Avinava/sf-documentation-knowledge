---
title: "HistoryRetentionPolicy"
domain: metadata-api
topic: historyretentionpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.017Z
keywords: [HistoryRetentionPolicy, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, Sample, Definition]
---

# HistoryRetentionPolicy

# HistoryRetentionPolicy

Represents the policy for archiving field history data. When you set a policy, you specify the number of months that you want to keep field history in Salesforce before archiving it. By default, when Field Audit Trail is enabled, all field history is retained.

This component is only available to users with the RetainFieldHistory permission.

## Declarative Metadata File Suffix and Directory Location

Field history retention policies are defined as part of a standard or custom object. You can set field history retention policies for objects individually. See [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.") for more information.

## Version

Available in API version 31.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| archiveAfterMonths | int | Required. The number of months that you want to keep field history data in Salesforce before archiving. You can set a minimum of 1 month and a maximum of 18 months. If you don't set a number, the default is 18 months. (That is, Salesforce maintains data for 18 months before archiving.) |
| archiveRetentionYears | int | The number of years until you manually delete data from the archive. Use this field as a reminder for manually deleting data. By default, field history data isn’t automatically deleted when Field Audit Trail is enabled. |
| description | string | A text description for the history retention. |
| gracePeriodDays | int | The number of days of extra time after the archiveAfterMonths period before the data is archived. The gracePeriodDays interval applies only to the first time that the data is archived; because all the data is copied the first time, the operation can take longer than subsequent times when only the data that changed since the last archival operation is copied. The gracePeriodDays provides extra time for the administrator to prepare the organization before the initial archive operation. You can set a minimum of zero days and a maximum of 10 days. If no number is set, the default is 1 day. |

## Declarative Metadata Sample Definition

This sample shows the definition of a history retention policy for a custom object.

```

```

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_fieldset.htm "FieldSet")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_index.htm "Index")