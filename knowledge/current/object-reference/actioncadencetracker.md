---
title: "ActionCadenceTracker"
domain: object-reference
topic: actioncadencetracker
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.849Z
estimatedTokens: 2006
keywords: [ActionCadenceTracker, active, cadence, target, API, version, 45.0, later, Calls, Usage, Associated, Objects]
---

# ActionCadenceTracker

> Represents an active cadence target. This object is available in
		API version 45.0 and later.

# ActionCadenceTracker

Represents an active cadence target. This object is available in API version 45.0 and later.

An ActionCadenceTracker record is created when you add a target to a cadence. Use ActionCadenceTracker to learn about a running cadence target, including its state, current step, assigned prospect, and reason for completion.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ActionCadenceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related ActionCadence.Relationship NameActionCadenceRelationship TypeLookupRefers ToActionCadence |
| CompletionDisposition | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe target’s disposition when it exited the action cadence. This field contains a value if the target’s State is Complete. Sales reps can set this value when removing a target from a cadence. This field is available in API version 51.0 and later. Possible values are:Bad Data — some of the target’s data is incorrect or invalid.Contact Later — the target asked to be contacted at a later date.Customer Connected — the sales rep contacted the target.Customer Engaged — the target engaged with an email.Disqualified— a sales rep determined that the target isn’t qualified.Duplicate — the target has a duplicate lead, contact, or person account record.No Response — the target didn’t reply to any outreach.Not Interested — the target stated a lack of interest.Success — the cadence outreach was successful. |
| CompletionReason | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe reason that the target completed the cadence. This field contains a value if the target’s State is Complete. Possible values are:AutomaticallyExited — the target completed because a global exit condition occurred. This value is available in API version 49.0 and later.AutomaticallyExitedDeletedStepAutomaticallyExitedInvalidParentStepDaisyChained — the target completed because it’s connected to another action cadence.LeadConverted — the target completed because the lead converted.ManuallyRemoved — the target completed because the sales rep removed it from the cadence.ManuallyRemovedNoAccess— reserved for future use.NoMoreSteps — the target completed the action cadence because all the action cadence steps were completed. |
| CurrentStepId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the current ActionCadenceStepTracker.Relationship NameCurrentStepRelationship TypeLookupRefers ToActionCadenceStepTracker |
| DaisyChainIteration | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of this action cadence in a sequence of linked action cadences followed by this target. This value starts at 1 with the initial action cadence. A target can follow a sequence of up to 10 linked action cadences. Available in API version 53.0 and later. |
| ErrorMessage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf an error occurs while this target is being completed, this field contains the error message. |
| ExitGlobalRuleId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf a global exit condition occurs, a target completes. One example of a global exit condition is an email returned because of an invalid address. If the target completed because a global exit condition occurred, this field contains the ID of the ActionCadenceRule record that evaluated as true.This field is available in API version 49.0 and later.Relationship NameExitGlobalRuleRelationship TypeLookupRefers ToActionCadenceRule |
| IsTrackerActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the action cadence target is active (true) or not (false). The default value is false. An action cadence target is active if the state is Running, Paused, Processing, or Initializing. Only active targets count against the org limit of 150,000 trackers.This field is available in API version 50.0 and later. |
| LastCompletedStepId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the last completed ActionCadenceStepTracker.Relationship NameLastCompletedStepRelationship TypeLookupRefers ToActionCadenceStepTracker |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who is assigned to complete the cadence steps for the target.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RelatedToAttributionType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDefines when the cadence is related to an opportunity or invoice. Available in API version 51.0 and later.Possible values are:Activation—Attribute the opportunity to the cadence when the opportunity is created.Collected—Attribute the value to the cadence after payment for the invoice is collected.Collection Advancement—Attribute the value to the cadence when the invoice is out for collection.Maturation—Attribute the opportunity to the cadence only when the opportunity stage advances. |
| RelatedToId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related opportunity if there’s one. Available in API version 51.0 and later.This is a polymorphic relationship field.Relationship NameRelatedToRelationship TypeLookupRefers ToOpportunity, Invoice |
| ScheduledResumeDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the action cadence tracker is going to resume after it’s paused or on a wait step. Available in API version 53.0 and later. |
| State | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe state of the current action cadence tracker. Possible values are:CompleteErrorInitializingPausedProcessing—Salesforce is working on changing the state of this action cadence tracker. We recommend that you filter out steps that have this state from your dashboards.Running |
| TargetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the target that is assigned to this action cadence.Relationship NameTargetRelationship TypeLookupRefers ToContact, Lead |

## Usage

Use ActionCadenceTracker to see what targets are currently assigned to an active action cadence.

```

```

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionCadenceTrackerChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[ActionCadenceTrackerOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ActionCadenceTrackerShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
select TargetId from ActionCadenceTracker where ActionCadenceId=<Id of the action cadence> and State= "Running"
```

## Related Topics

- ActionCadenceTrackerChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ActionCadenceTrackerOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ActionCadenceTrackerShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
