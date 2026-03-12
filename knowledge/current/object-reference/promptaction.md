---
title: "PromptAction"
domain: object-reference
topic: promptaction
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.657Z
estimatedTokens: 1125
keywords: [PromptAction, how, user, interacted, in-app, guidance, prompt, walkthrough, API, version, 46.0, later, Calls, Special, Access]
---

# PromptAction

> Represents how the user interacted with the in-app guidance prompt or
         walkthrough. Available in API version 46.0 and later.

# PromptAction

Represents how the user interacted with the in-app guidance prompt or walkthrough. Available in API version 46.0 and later.

Prompts and walkthroughs help users discover your products and services, adopt your processes, or learn how to use a new feature. Add prompts and walkthroughs in Lightning Experience pages or apps or in supported Experience Cloud site pages. Add an optional action button or link that goes to a URL. Track views, action button clicks, and walkthrough completions.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

To add, edit, manage, and view prompts and walkthroughs in Lightning Experience or in Experience Cloud sites, multiple permissions are required. See [Permissions for Creating and Accessing In-App Guidance](https://help.salesforce.com/s/articleView?id=sales.customhelp_lex_wt_license.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| LastDisplayDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the date the in-app guidance was last displayed to the user. |
| LastResult | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the last user interaction. Valid values are:CustomActionDismissErrorFinish—(walkthroughs only)NoActionNotSeenSnooze |
| LastResultDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the date the in-app guidance was last interacted with. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the in-app guidance. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PromptVersionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the PromptVersion object.This is a relationship field.Relationship NamePromptVersionRelationship TypeLookupRefers ToPromptVersion |
| SnoozeUntil | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp for when the user’s snooze request expires. The user won’t see the prompt again until they navigate to the page after the snooze time expires. |
| StepCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the total number of steps in the walkthrough. Available in API version 49.0 and later. |
| StepNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the number of the last step the user viewed or interacted with in a walkthrough. Maximum value is 10. Available in API version 49.0 and later. |
| TimesActionTaken | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of times that the user took action on the in-app guidance. |
| TimesDismissed | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of times that the user dismissed the in-app guidance. |
| TimesDisplayed | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of times that the in-app guidance was displayed to the user. |
| TimesSnoozed | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of times the user snoozes the prompt. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the user.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Associated Objects

This object has the following associated objects. They are available in API version 46.0 and later.

[PromptActionOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PromptActionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PromptActionOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PromptActionShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
