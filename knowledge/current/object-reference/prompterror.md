---
title: "PromptError"
domain: object-reference
topic: prompterror
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.674Z
estimatedTokens: 859
keywords: [PromptError, error, associated, PromptAction, API, version, 52.0, later, Calls, Special, Access, Rules, Objects]
---

# PromptError

> Represents the error or warning associated with the PromptAction. Available in API version 52.0 and later.

# PromptError

Represents the error or warning associated with the PromptAction. Available in API version 52.0 and later.

Prompts and walkthroughs help users discover your products and services, adopt your processes, or learn how to use a new feature. Add prompts and walkthroughs in Lightning Experience pages or apps or in supported Experience Cloud site pages. Add an optional action button or link that goes to a URL. Track views, action button clicks, and walkthrough completions.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

To add, edit, manage, and view prompts and walkthroughs in Lightning Experience or in Experience Cloud sites, multiple permissions are required. See [Permissions for Creating and Accessing In-App Guidance](https://help.salesforce.com/s/articleView?id=sales.customhelp_lex_wt_license.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| IsError | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the in-app guidance had an error true or a warning false. The default is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the PromptError record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the User or Group. |
| PromptActionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the PromptAction that the PromptError is related to. |
| StepNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the step number that the user encountered an error or warning in a walkthrough. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the type of error or warning. Possible values are:NoAccessToApp—A step on this walkthrough is on an app that some of your users don’t have access to.NoAccessToPage—A step on the walkthrough is on a page that some of your users don’t have access to.ReferenceElementNotFound—The target element has moved or is no longer on your page. Targeted prompts attached to unavailable elements convert to floating prompts. Check your access to the element, or enter targeting mode and reassign the targeted prompt.Unavailable—Users tried to open this walkthrough using its URL, but it's inactive or the users aren’t licensed to see it. To make it accessible to users, check its settings or activate it. |

## Associated Objects

This object has the following associated objects. They are available in API version 52.0 and later.

[PromptErrorOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PromptErrorShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PromptErrorOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PromptErrorShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
