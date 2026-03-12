---
title: "AutomatedAction"
domain: object-reference
topic: automatedaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:05.434Z
estimatedTokens: 1296
keywords: [AutomatedAction, configuration, automated, action, workflow, rule, API, version, 57.0, later, Calls, Associated, Objects]
---

# AutomatedAction

> Represents the configuration of an automated action, such as a
         workflow rule. This object is available in API version 57.0 and later.

# AutomatedAction

Represents the configuration of an automated action, such as a workflow rule. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiVersion | TypeintPropertiesFilter, Group, SortDescriptionRequired. API version to use for executing the automated action. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the automated action. |
| ErrorDetail | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe source of the error encountered when executing the automated action.Possible values are:invalidConditioninvalidConditionReferenceinvalidConditionValueinvalidInvocableActioninvalidInvocableActionParaminvalidReferenceEntityunknownError |
| ErrorMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the error encountered when executing the automated action. |
| EvalType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionWhen the automated action runs.Possible values are:OnCreateOnCreateAndUpdate |
| ExecutionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionWhether the action runs automatically or generates a reminder.Possible values are:AutomaticReminder |
| ExtraFilterExpression | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional condition logic for cross-object filters. |
| ExtraFilterType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAdditional criteria for cross-object filters.Possible values are:AdvancedAndOr |
| FilterExpression | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf FilterType is Advanced, this field contains the condition logic. |
| FilterType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionCriteria for filters.Possible values are:AdvancedAndOr |
| InvocationName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionInvocable action to execute. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the automated action record is locked or not.The default value is false. |
| LastEditedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp when the automated action had a change that impacted rule evaluation. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record was likely referenced (LastReferencedDate) and not viewed. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the automated action record can be edited or not.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the automated action. |
| ReferenceEntity | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionEntity on which the automated action operates. |
| RuleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of workflow rule.Possible values are:ManagerAssignedManagerSubscribedPersonal |
| State | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the alert.Possible values are:ActiveErrorInactive |
| SubscriptionState | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionFor users who don’t have an override, the default value of the subscription.Possible values are:ActiveInactive |
| Summary | TypestringPropertiesFilter, Nillable, SortDescriptionA human-readable explanation of the automated action, its conditions, and its parameters. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AutomatedActionOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AutomatedActionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AutomatedActionOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AutomatedActionShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
