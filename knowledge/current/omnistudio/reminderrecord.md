---
title: "ReminderRecord"
domain: omnistudio
topic: reminderrecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:54.350Z
estimatedTokens: 257
keywords: [ReminderRecord, Represents, reminder, that's, sent., API, version, 60.0, later., Supported, Calls, Fields]
---

# ReminderRecord

> Represents a reminder that's sent. This object is available in API
      version 60.0 and later.

# ReminderRecord

Represents a reminder that's sent. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ChannelType | TypepicklistPropertiesCreate, Filter, Restricted picklist, SortDescriptionSpecifies the channel that's used to send the reminder.Valid values are:CustomEmailFacebookSms—SMSWhatsapp |
| ErrorMessage | TypestringPropertiesCreate, NillableDescriptionThe error message when the reminder fails to send. |
| LastReminderDateTime | TypedateTimePropertiesCreate, Filter, SortDescriptionThe date when the reminder is sent. |
| ScheduledReminder | TypestringPropertiesCreate, NillableDescriptionThe reminder criteria that's associated with the distribution. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Restricted picklist, SortDescriptionThe status of the reminder that's associated with a record.Valid values are:FailedSuccessThe default value is Success. |
