---
title: "ActionCadence"
domain: object-reference
topic: actioncadence
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.764Z
estimatedTokens: 2371
keywords: [ActionCadence, definition, cadence, API, version, 45.0, later, Calls, Usage, Associated, Objects]
---

# ActionCadence

> Represents the definition of a cadence. This object is available
    in API version 45.0 and later.

# ActionCadence

Represents the definition of a cadence. This object is available in API version 45.0 and later.

Use ActionCadence and its related objects to learn about an action cadence, including:

-   The current state of the action cadence.
-   The steps that the action cadence contains.
-   Which leads, contacts, or person accounts are assigned to the action cadence.

The ActionCadence, ActionCadenceStep, ActionCadenceRule, and ActionCadenceRuleCondition objects define an action cadence and the steps that it contains. ActionCadenceTracker and ActionCadenceStepTracker track a prospect's movement through an active action cadence.

By learning when the action cadence objects are created and deleted, you can make the most of the action cadence API.

-   An ActionCadence record is created when you use the Sales Engagement app to create a cadence.
-   An ActionCadenceStep record is created to represent a step. If the step is a branch step, then corresponding ActionCadenceRule and ActionCadenceRuleCondition records are also created.
-   An ActionCadenceTracker record is created when you assign a prospect to an action cadence.
-   An ActionCadenceStepTracker record is created each time the prospect moves to a new step.

All of these action cadence records exist until you use the Sales Engagement app to delete an action cadence. If many prospects have been assigned to the action cadence, there can be many associated ActionCadenceTracker and ActionCadenceStepTracker records. In this case, deleting the action cadence can take some time. While the action cadence is being deleted, the value for the State field is Deleting on the ActionCadence record.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(),

## Fields

| Field | Details |
| --- | --- |
| ActivatedDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date that the user activated the action cadence. ActionCadence objects are created in a draft state and must be manually activated before they’re used. |
| ActiveTargets | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of active targets that are currently assigned with this cadence. Available in API version 58.0 and later. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of this action cadence. |
| ErrorMessage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf there was an error when activating the action cadence, this field contains the error message. |
| FolderId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the folder that contains the action cadence. Available in API version 49.0 and later.This is a polymorphic relationship field.Relationship NameFolderRelationship TypeLookupRefers ToFolder, Organization, User |
| FolderName | TypestringPropertiesFilter, Nillable, SortDescriptionThe name of the folder that contains the action cadence. Available in API version 49.0 and later. |
| IsWaitAllowedBeforeDaisyChain | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhether the cadence is allowed to have a wait step before a daisy chain step (true) or not (false).The default value is false. |
| LastEditedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time this object was last edited. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date this object was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date this action cadence was last viewed in the Sales Engagement app. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this action cadence. Every action cadence in an org must have a unique name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the action cadence (typically the user who created it).NoteTo change the owner of an action cadence, the new owner must have read access to action cadences enabled in their user profile.This field is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| State | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThis entity's state.Possible values are:ActiveThe user finished modifying the action cadence and has activated it. At this point, you can't make any more changes to the steps in the action cadence.DeletingAll records associated with this action cadence, including the ActionCadence record and all its related records, are being deleted. While in this state, the ActionCadence can’t be attached to a prospect.DraftActionCadence objects are in the draft state when they’re created. In this state, the ActionCadence can’t be assigned to any prospect.ErrorAn error occurred while trying to activate the action cadence.InactiveThe user deactivated the action cadence. New targets can’t be added to the action cadence. Existing targets continue in the action cadence until completion. |
| SuccessfulCompletions | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of successful dispositions this cadence has upon completion. For example, customer engaged or customer connected. Available in API version 58.0 and later. |
| TotalSteps | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of total steps associated with this cadence. This value doesn’t include special step types such as root, branch, and daisy chain. Available in API version 58.0 and later. |
| TotalTargets | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of targets that have been assigned with this cadence. Available in API version 58.0 and later. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the type of ActionCadence. Available in API version 56.0 and later.Possible values are:StandardStandard cadences can contain multiple steps and are usually built by sales managers in the Cadence Builder.QuickQuick cadences can contain only one step, are built by reps for their personal use, and don't require the Cadence Builder. |

## Usage

Use ActionCadence to learn how many action cadences are currently active:

```

```

Retrieve all ActionCadence records that have "West Coast" in their name:

```

```

Retrieve all ActionCadence records owned by a specific user:

```

```

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionCadenceChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[ActionCadenceOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ActionCadenceShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [ActionCadenceRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerule.htm "Represents the logic that a branch step uses to determine which branch an action cadence tracker follows in an action cadence. Use ActionCadenceRule to learn about a branch step, including its logic and what the next step is. This object is available in API version 48.0 and later.")

-   [ActionCadenceRuleCondition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerulecondition.htm "Represents the logic for a branch step. This object is available in API version 48.0 and later.")

-   [ActionCadenceStep](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencestep.htm "Represents a step in a cadence. Use ActionCadenceStep to learn which steps belong to a cadence, and how the steps are connected to each other. This object is available in API version 48.0 and later.")

-   [ActionCadenceStepTracker](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencesteptracker.htm "Represents a step in an active cadence for a specific cadence target. This object is available in API version 48.0 and later.")

## Code Examples

```
select COUNT() from ActionCadence where State="Active"
```

```
SELECT ActionCadenceId FROM ActionCadence WHERE NAME LIKE '[West Coast Cadence]%'
```

```
SELECT ActionCadenceId  FROM ActionCadence WHERE OwnerId = '<owner id>'
```

## Related Topics

- ActionCadenceChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ActionCadenceOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ActionCadenceShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- ActionCadenceRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerule.htm)
- ActionCadenceRuleCondition (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerulecondition.htm)
- ActionCadenceStep (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencestep.htm)
- ActionCadenceStepTracker (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencesteptracker.htm)
