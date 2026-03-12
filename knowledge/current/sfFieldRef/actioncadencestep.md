---
title: "ActionCadenceStep"
domain: sfFieldRef
topic: actioncadencestep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.171Z
estimatedTokens: 1228
keywords: [ActionCadenceStep, step, cadence, steps, belong, how, connected]
---

# ActionCadenceStep

> Represents a step in a cadence. Use ActionCadenceStep to learn which
			steps belong to a cadence, and how the steps are connected to each other.

# ActionCadenceStep

Represents a step in a cadence. Use ActionCadenceStep to learn which steps belong to a cadence, and how the steps are connected to each other.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActionCadenceStep](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_ActionCadenceStep.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionCadenceId | Cadence ID | reference |  | 18 |  |  |
| AllCallsCallBackLater | All Calls Call Back Later Count | int | 9 |  |  |  |
| AllCallsLeftVoicemail | All Calls Left Voicemail Count | int | 9 |  |  |  |
| AllCallsMeaningfulConnect | All Calls Meaningful Connect Count | int | 9 |  |  |  |
| AllCallsNotInterested | All Calls Not Interested Count | int | 9 |  |  |  |
| AllCallsUncategorized | All Calls Uncategorized Count | int | 9 |  |  |  |
| AllCallsUnqualified | All Calls Unqualified Count | int | 9 |  |  |  |
| AllEmailsBouncedCount | All Emails Bounced Count | int | 9 |  |  |  |
| AllEmailsDeliveredCount | All Emails Delivered Count | int | 9 |  |  |  |
| AllEmailsHardBouncedCount | All Emails Hard Bounced Count | int | 9 |  |  |  |
| AllEmailsLinkClickedCount | All Emails Link Clicked Count | int | 9 |  |  |  |
| AllEmailsOpenedCount | All Emails Opened Count | int | 9 |  |  |  |
| AllEmailsOutOfOfficeCount | All Emails Out Of Office Count | int | 9 |  |  |  |
| AllEmailsRepliedCount | All Emails Replied Count | int | 9 |  |  |  |
| AllEmailsSentCount | All Emails Sent Count | int | 9 |  |  |  |
| AllEmailsSoftBouncedCount | All Emails Soft Bounced Count | int | 9 |  |  |  |
| AllEmailsTrackedSentCount | All Emails Tracked Sent Count | int | 9 |  |  |  |
| AllEmailsUntrackedSentCount | All Emails Untracked Sent Count | int | 9 |  |  |  |
| AllManuallyCompletedCount | All Manually Completed | int | 9 |  |  |  |
| AllOnTimeCompletedCount | All On Time Completed | int | 9 |  |  |  |
| AllOverdueCompletedCount | All Overdue Completed | int | 9 |  |  |  |
| AllSkippedCount | All Skipped | int | 9 |  |  |  |
| AllTotalCallsCount | Total Calls | int | 9 |  |  |  |
| BranchDefaultStepName | Branch Default Step Name | string |  | 255 |  |  |
| ChainedCadenceId | Cadence ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DayGroup | Day Group | int | 9 |  |  |  |
| GoToStepIntervalInMinutes | Go To Step Interval In Minutes | int | 9 |  |  |  |
| GoToStepIterationLimit | Go To Step Iteration Limit | int | 9 |  |  |  |
| GoToStepName | Go To StepName | string |  | 255 |  |  |
| GraphState | State | picklist |  | 255 |  |  |
| Id | Cadence Step ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsImmediateWakeUp | Immediate Wake Up | boolean |  |  |  |  |
| IsOrphan | Orphan | boolean |  |  |  |  |
| IsScheduledDueDateLocked | Is Scheduled Due Date Locked | boolean |  |  |  |  |
| IsScreenFlowActive | Is Screen Flow Active | boolean |  |  |  |  |
| IsStepAutomationActive | Is Step Automation Active | boolean |  |  |  |  |
| IsThreaded | Send Email as Reply All | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MinuteGroup | Minute Group | int | 9 |  |  |  |
| ParentStepName | Parent Step Name | string |  | 255 |  |  |
| RootStepId | Cadence Step ID | reference |  | 18 |  |  |
| ScheduledDaysUntilDue | Scheduled Days Until Due | int | 9 |  |  |  |
| ScheduledDaysUntilStart | Scheduled Days Until Start | int | 9 |  |  |  |
| ScheduledStartDelayInMinutes | Scheduled Start Delay In Minutes | int | 9 |  |  |  |
| ScheduledStartTimeInMinutes | Scheduled Start Time In Minutes | int | 9 |  |  |  |
| ScreenFlowReference | Screen Flow Reference | string |  | 255 |  |  |
| StepAutomationReference | Step Automation Reference | string |  | 255 |  |  |
| StepComments | Step Comments | textarea |  | 4000 |  |  |
| StepName | Step Name | string |  | 255 |  |  |
| StepTitle | Step Title | string |  | 255 |  |  |
| SubCadenceName | SubCadence Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TemplateId | Template ID | reference |  | 18 |  |  |
| Type | Type | picklist |  | 255 |  |  |
| TypeDetail | Type Detail | string |  | 255 |  |  |
| UniqueEmailsLinkClickedCount | Unique Emails Link Clicked Count | int | 9 |  |  |  |
| UniqueEmailsOpenedCount | Unique Emails Opened Count | int | 9 |  |  |  |
| UniqueEmailsRepliedCount | Unique Emails Replied Count | int | 9 |  |  |  |
| WaitTimeInSeconds | Wait Time In Seconds | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
