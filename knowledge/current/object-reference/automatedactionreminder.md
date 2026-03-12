---
title: "AutomatedActionReminder"
domain: object-reference
topic: automatedactionreminder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.463Z
estimatedTokens: 801
keywords: [AutomatedActionReminder, reminder, end, user, take, action, future, API, version, 58.0, later, Calls, Associated, Objects]
---

# AutomatedActionReminder

> Represents a reminder to the end user to take an action in the future.
      This object is available in API version 58.0 and later.

# AutomatedActionReminder

Represents a reminder to the end user to take an action in the future. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionTakenDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of when the user took the action suggested by the reminder. |
| AutomatedActionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the automated action.This field is a relationship field.Relationship NameAutomatedActionRelationship TypeLookupRefers ToAutomatedAction |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the automated action reminder record is locked or not.The default value is false. |
| IsValidForUser | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the automated action is active and accessible to the user who owns the record (true) or not (false).The default value is false. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the automated action reminder record can be edited or not.The default value is false. |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record that triggered the reminder. For example, when a rule is set to Case, the value of this field is CaseId.This field is a polymorphic relationship field.Relationship NameReferenceRecordRelationship TypeLookupRefers ToAccount, Case, Contact, Invoice, Lead, Opportunity |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time this reminder is scheduled to be displayed to the user. |
| State | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the reminder.Possible values are:ActiveCompletedDisabledDismissedExpired |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of automated action reminder.Possible values are:Reminder |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AutomatedActionReminderOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AutomatedActionReminderShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AutomatedActionReminderOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AutomatedActionReminderShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
