---
title: "ActionCadenceStep"
domain: object-reference
topic: actioncadencestep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.811Z
estimatedTokens: 4223
keywords: [ActionCadenceStep, step, cadence, steps, belong, how, connected, API, version, 48.0, later, Calls, Usage, Associated, Objects]
---

# ActionCadenceStep

> Represents a step in a cadence. Use ActionCadenceStep to learn which
			steps belong to a cadence, and how the steps are connected to each other. This
		object is available in API version 48.0 and later.

# ActionCadenceStep

Represents a step in a cadence. Use ActionCadenceStep to learn which steps belong to a cadence, and how the steps are connected to each other. This object is available in API version 48.0 and later.

An ActionCadenceStep record is created to represent a step. If the step is a branch step, then corresponding ActionCadenceRule and ActionCadenceRuleCondition records are also created.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

An ActionCadenceStep with IsOrphan equal to true can be part of a cadence but is never executed. To retrieve the steps that can be executed by the cadence, query for ActionCadenceStep records with IsOrphan equal to false. ActionCadenceStep records with IsOrphan equal to true are deleted.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionCadenceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the ActionCadence that this step belongs to.This field is a relationship field.Relationship NameActionCadenceRelationship TypeLookupRefers ToActionCadence |
| AllCallsCallBackLater | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls having the call outcome Call Back Later. |
| AllCallsLeftVoicemail | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls having the call outcome Left Voicemail. |
| AllCallsMeaningfulConnect | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls having the call outcome Meaningful Connect. |
| AllCallsNotInterested | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls having the call outcome Not Interested. |
| AllCallsUncategorized | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls where the call outcome isn’t categorized. |
| AllCallsUnqualified | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls having the call outcome Unqualified. |
| AllEmailsBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that weren’t delivered successfully.This field is a calculated field. |
| AllEmailsDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails delivered.This field is a calculated field. |
| AllEmailsHardBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails returned for a permanent reason — for example, the email address doesn’t exist. This field is available in API version 50.0 and later. |
| AllEmailsLinkClickedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of links inside an email that the target clicked during this step. Multiple clicks on the same link count towards this total. This field is available in API version 50.0 and later. |
| AllEmailsOpenedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that the target opened while working on this step. Multiple opens of the same email count towards this total. |
| AllEmailsOutOfOfficeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that were returned because the recipient set an out-of-office responder. Multiple replies count towards this total. This field is available in API version 50.0 and later. |
| AllEmailsRepliedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that targets replied to as part of this step. Multiple replies to the same email count towards this total, This field is available in API version 50.0 and later. |
| AllEmailsSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of sent emails. |
| AllEmailsSoftBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that were returned for temporary reasons — for example, the email is too large. This field is available in API version 50.0 and later. |
| AllEmailsTrackedSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent by this user with engagement tracking enabled. |
| AllEmailsUntrackedSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent by this user without engagement tracking. |
| AllManuallyCompletedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of steps manually completed. |
| AllOnTimeCompletedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of steps completed on time. |
| AllOverdueCompletedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of overdue steps that were completed. |
| AllSkippedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of steps skipped. |
| AllTotalCallsCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls that the sales rep made during this step.This field is a calculated field. |
| BranchDefaultStepName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the default step. |
| ChainedCadenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ActionCadence for the linked action cadence. Available only if the step type is DaisyChain (meaning that another action cadence is connected to this action cadence).This field is a relationship field.Relationship NameChainedCadenceRelationship TypeLookupRefers ToActionCadence |
| GoToStepIntervalInMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains information about when the step should be repeated next, in minutes. Available in API version 58.0 and later. |
| GoToStepIterationLimit | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains the maximum number of repeat (goto) step iterations allowed. Available in API version 58.0 and later. |
| GoToStepName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf this step’s original next step was removed during an edit after activation, this field specifies the updated next step. |
| GraphState | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents the state of the ActionCadenceStep within the step graph, or sequence, of the action cadence.Possible values are:Included—This step is part of the step graph.Orphaned—This step was removed from the step graph before the action cadence was activated. Orphaned steps are deleted upon activation.Pending—This step has been created but hasn’t been added to the step graph. Pending steps can be added to the step graph in the future.Retired—This step was previously part of an active action cadence step graph and was removed during an edit after activation. Retired steps can have associated step trackers. |
| HasVariant | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThis field is valid for email and call step types. If true, the step has email or call template variants. The template variants are defined in ActionCadenceStepVariant records. Available in API version 53.0 and later.The default value is false. |
| IsImmediateWakeUp | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a listener branch is immediate wake up (true) or not (false).The default value is false. |
| IsOrphan | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, this step isn’t executed by the action cadence and will be deleted. Steps with IsOrphan equal to true have ParentStepName equal to null.NoteTo retrieve the active steps in an action cadence, include IsOrphan=false in your query.The default value is false.This field is available in API version 49.0 and later.This field is a calculated field. |
| IsScheduledDueDateLocked | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether assignees can change the due date (true) or not (false). Available in API version 58.0 and later.The default value is false. |
| IsScreenFlowActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the flow is active and can be executed (true) or not (false).The default value is false. |
| IsStepAutomationActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the flow referenced in the StepAutmationReference field is active. If false, the flow isn’t active. Only active flows can be executed. The default value isfalse. This field is available in API version 56.0 and later. |
| IsThreaded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is valid for email steps. Email steps have ActionCadence.StepType equal to SendAnEmail. If true, the email for this email step is sent as a reply to the email conversation from the previous email step. By sending the email as a reply to a previous email, customers see a "conversation" view of the emails. Only emails from the same action cadence are grouped as conversations.This field can’t be true for the first email step in an action cadence, because the first email from an action cadence must start a new conversation with the prospect.The default value is false. This field is available in API version 49.0 and later. |
| ParentStepName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe step name (ActionCadenceStep.StepName) of the previous step in the action cadence. Must contain a valid step name value unless this step is the root step. null if this step is a parent step. |
| RootStepId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the root step for this action cadence. Every action cadence has exactly one root step (so that the Salesforce API can find all the steps for this cadence).This field is a relationship field.Relationship NameRootStepRelationship TypeLookupRefers ToActionCadenceStep |
| ScheduledDaysUntilDue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days after which this current step is due. Available in API version 58.0 and later. |
| ScheduledDaysUntilStart | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days when this step starts after the previous step completes. For delays of greater than one day from ScheduledStartTimeInMinutes. Available in API version 58.0 and later. |
| ScheduledStartDelayInMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAny hard waits in minutes is captured in this field. Waits greater than 1 day need to set ScheduledDaysUntilStart. Available in API version 58.0 and later. |
| ScheduledStartTimeInMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe specific time of day when the step starts. The time represents minutes after 00:00. Available in API version 58.0 and later. |
| ScreenFlowReference | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe namespace__fullname of the screen flow. Used to describe flow objects and launch flows client side. |
| StepAutomationReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the flow that the step uses. Cadence steps can launch a cadence step flow as the step or as a cadence autolaunched flow when a rep completes the step. The format is namespace__fullName. This field is available in API version 56.0 and later. |
| StepComments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA comment that provides additional information about this step. |
| StepName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique identifier for this step. Generated by Salesforce. |
| StepTitle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title given to the step when it was created. |
| TemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf a template was added to this step, this field contains the template's ID. For example, if this step is a call step it can contain a template for a call script. Or, if this step is an email step, it can contain a template for an email.This field is a polymorphic relationship field.Relationship NameTemplateRelationship TypeLookupRefers ToCallTemplate, EmailTemplate |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of step. Possible values are:AutoSendAnEmail — Salesforce automatically sends the specified email.Branch — A branch step in the action cadence.CreateTask — Used for custom steps.DaisyChain — A daisy chain step. A daisy chain step connects this action cadence to another action cadence. It must be the last step in the path.LinkedInConnectionLinkedInMailListenerBranch — A branch step for emails.MakeACall — The sales rep must call the prospect at this step.PlatformScreenFlowRoot — This step is the root step for the action cadence.SendAnEmail — The sales rep must send the prospect an email at this step.Wait — A wait step tells the sales rep not to do anything at this point in the action cadence. |
| TypeDetail | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMore detail about the step type. If the step is a cadence step flow, this field contains the flow name. Otherwise, this field contains the same value as the Type field. This field is available in API version 56.0 and later. |
| UniqueEmailsLinkClickedCount | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe number of links inside an email that the target clicked during this step. Multiple clicks on the same link aren’t counted. This field is available in API version 50.0 and later. |
| UniqueEmailsOpenedCount | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that the target opened as part of this step. Multiple openings of the same email aren’t counted. This field is available in API version 50.0 and later. |
| UniqueEmailsRepliedCount | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that targets replied to as part of this step. Multiple replies to the same email aren’t counted. This field is available in API version 50.0 and later. |
| WaitTimeInSeconds | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired if the step type is Wait. The time in seconds for this step to wait. |

## Usage

Use ActionCadenceStep to see what steps your action cadence has:

```

```

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionCadenceStepChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

#### See Also

-   [ActionCadence](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadence.htm "Represents the definition of a cadence. This object is available in API version 45.0 and later.")

-   [ActionCadenceRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerule.htm "Represents the logic that a branch step uses to determine which branch an action cadence tracker follows in an action cadence. Use ActionCadenceRule to learn about a branch step, including its logic and what the next step is. This object is available in API version 48.0 and later.")

-   [ActionCadenceRuleCondition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerulecondition.htm "Represents the logic for a branch step. This object is available in API version 48.0 and later.")

-   [ActionCadenceStepTracker](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencesteptracker.htm "Represents a step in an active cadence for a specific cadence target. This object is available in API version 48.0 and later.")

## Code Examples

```
select StepTitle from ActionCadenceStep where ActionCadence.ID= <the id of an action cadence> and IsOrphan=false
```

## Related Topics

- ActionCadenceStepChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ActionCadence (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadence.htm)
- ActionCadenceRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerule.htm)
- ActionCadenceRuleCondition (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerulecondition.htm)
- ActionCadenceStepTracker (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencesteptracker.htm)
