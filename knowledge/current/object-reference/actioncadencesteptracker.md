---
title: "ActionCadenceStepTracker"
domain: object-reference
topic: actioncadencesteptracker
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.829Z
estimatedTokens: 2343
keywords: [ActionCadenceStepTracker, step, active, cadence, specific, target, API, version, 48.0, later, Calls, Usage, Associated, Objects]
---

# ActionCadenceStepTracker

> Represents a step in an active cadence for a specific cadence
      target. This object is available in API version 48.0 and later.

# ActionCadenceStepTracker

Represents a step in an active cadence for a specific cadence target. This object is available in API version 48.0 and later.

An ActionCadenceStepTracker record is created when a target moves to a new step in a cadence. Use ActionCadenceStepTracker to find information such as the step's current state, the reason it completed, and its type.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ActionCadenceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the ActionCadence that is related to the ActionCadenceStep.This field is a relationship field.Relationship NameActionCadenceRelationship TypeLookupRefers ToActionCadence |
| ActionCadenceName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the related ActionCadence object. |
| ActionCadenceStepId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionActionCadenceStepTracker is the runtime version of an ActionCadenceStep. This field contains the ID of the related ActionCadenceStep.This field is a relationship field.Relationship NameActionCadenceStepRelationship TypeLookupRefers ToActionCadenceStep |
| ActionCadenceTrackerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related ActionCadenceTracker.This field is a relationship field.Relationship NameActionCadenceTrackerRelationship TypeLookupRefers ToActionCadenceTracker |
| ActionTakenDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the action described in this step was taken. |
| CompletedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe user ID of the sales rep who completed this step. A step can be assigned to several users before it’s completed. This field is available in API version 50.0 and later.This field is a relationship field.Relationship NameCompletedByRelationship TypeLookupRefers ToUser |
| CompletionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date this step completed. A step is completed either when the action is taken, or the step is skipped. |
| CompletionReason | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe reason that this step completed: Possible values are:AutomaticallyCompleted — The sales rep successfully completed this step and moved to the next one. Salesforce automatically marks this step as completed.AutomaticallyExited — The step exited because a global exit condition occurred. This value is available in API version 49.0 and later.ManuallyCompleted — The sales rep manually marked this step as completed.ManuallySkipped — The sales rep skipped this step. |
| DueDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionSome steps have a due date to indicate when they must be completed. If this step has been assigned a due date, this field contains the date and time it is due. |
| ErrorCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionPossible values are:AUTO_EMAIL_DAILY_LIMIT_REACHEDAUTO_EMAIL_ORG_SETTING_OFFAUTO_LIST_MQ_MAX_RETRIES_FAILEDBCC_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLEDEAC_GLOBAL_DATA_SOURCE_ERROR—EAC data source errorEMAIL_ORG_SETTING_OFFEXCHANGE_MAX_MAILBOX_SIZE—Max Exchange mailbox size reachedEXCHANGE_SEND_AS_DENIEDFIX_WITH_RECONNECT—Data connection failedGOOGLE_MAIL_SERVICE_NOT_ENABLED—Gmail service not enabledINVALID_DRAFT—Invalid email draftINVALID_TARGET_EMAILINVALID_TEMPLATE_IDINVALID_USER_EMAILMAIL_PROVIDER_RATE_LIMIT_REACHED—Email provider rate limit reachedNON_EMAIL_UNKNOWN_ERROR—Unknown errorNO_ATTACHMENT_ACCESSNO_CONTENT_VERSION_ACCESSNO_LIST_EMAIL_PERMISSIONNO_TARGET_ACCESSORG_WIDE_AUTO_EMAIL_LIMIT_REACHEDORG_WIDE_DAILY_EMAIL_LIMIT_REACHEDOTHER_REQ_FIELD_MISSING—Other required field missingPARDOT_MERGE_FIELD_RENDERING_ERRORPOST_SEND_EXCEPTIONRETRIES_MAX_EXCEEDED—Maximum retries exceededRETRY_LATERSCHEDULED_EMAIL_FAILED—Unknown errorSENDER_MAILBOX_NOT_FOUNDTARGET_DO_NOT_CONTACT_ON—Target has Do Not Contact onTARGET_EMAIL_BOUNCEDTARGET_EMAIL_EMPTYTEMPLATE_DELETEDTEMPLATE_EMPTY—Email subject or body missingTEMPLATE_HAS_INVALID_MERGE_FIELDTEMPLATE_MERGE_FIELD_RENDERING_ERRORTEMPLATE_NOT_PUBLIC—No access to templateTEMPLATE_TOO_LARGEUNKNOWN—Email unknown errorUSER_HAS_LOST_HVS_ACCESSUSER_IS_INACTIVE |
| GoToStepIterationCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times the action cadence step tracker was created for the same step in a cadence. Available in API version 58.0 and later. |
| IsActionTaken | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptiontrue if the sales rep completed an action during this step, such as making a phone call, otherwise false.The default value is false.This field is a calculated field. |
| ScheduledStartDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the step starts. Available in API version 58.0 and later. |
| SecondsOverdue | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIf this step has a due date that has passed, this field contains the number of seconds that has elapsed since the due date. Once a sales rep takes action on the cadence step, the value of this field is the number of seconds elapsed between the due date and the time the action was taken.This field is a calculated field. |
| State | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe current state of this step. Possible values are:Possible values are:Active — The current step that the sales rep is performing. There can only be one active step for a given target.Cancelled — The sales rep canceled the step. Salesforce doesn’t run any canceled steps.Completed — This step is finished. Either the work in the step completed, or the step was skipped.Error — An error occurred while executing this step.InProgress — The sales rep has started the step, but it isn’t yet completed.Paused —The sales rep paused the step.Queued — Used for automated email steps. The email step has started but the email is waiting in the queue to be sent.Scheduled — Used for email steps. An email can be scheduled to be sent later. |
| StepTitle | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the related step. |
| StepType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of step to execute. Possible values are:AutoSendAnEmailBranchCreateTaskDaisyChainLinkedInConnectionLinkedInMailListenerBranchMakeACallPlatformScreenFlowRootSendAnEmailSubRootWait |
| TargetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the prospect that is assigned to this cadence.This field is a polymorphic relationship field.Relationship NameTargetRelationship TypeLookupRefers ToContact, Lead |
| WasEverPaused | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the sales rep had ever paused this step (true), or not (false). This field is available in API version 50.0 and later. |

## Usage

List all the steps that this prospect has completed in a given cadence:

```

```

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionCadenceStepTrackerChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

#### See Also

-   [ActionCadence](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadence.htm "Represents the definition of a cadence. This object is available in API version 45.0 and later.")

-   [ActionCadenceRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerule.htm "Represents the logic that a branch step uses to determine which branch an action cadence tracker follows in an action cadence. Use ActionCadenceRule to learn about a branch step, including its logic and what the next step is. This object is available in API version 48.0 and later.")

-   [ActionCadenceStep](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencestep.htm "Represents a step in a cadence. Use ActionCadenceStep to learn which steps belong to a cadence, and how the steps are connected to each other. This object is available in API version 48.0 and later.")

-   [ActionCadenceRuleCondition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerulecondition.htm "Represents the logic for a branch step. This object is available in API version 48.0 and later.")

## Code Examples

```
select StepTitle from ActionCadenceStepTracker where TargetID = <target ID> 
          and ActionCadenceId=<action cadence id> and StepType="Completed"
```

## Related Topics

- ActionCadenceStepTrackerChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ActionCadence (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadence.htm)
- ActionCadenceRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerule.htm)
- ActionCadenceStep (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencestep.htm)
- ActionCadenceRuleCondition (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerulecondition.htm)
