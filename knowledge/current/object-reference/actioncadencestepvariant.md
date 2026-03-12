---
title: "ActionCadenceStepVariant"
domain: object-reference
topic: actioncadencestepvariant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.835Z
estimatedTokens: 490
keywords: [ActionCadenceStepVariant, email, template, call, script, variant, associated, action, cadence, step, steps, variants, sales, teams, compare]
---

# ActionCadenceStepVariant

> Represents an email template or call script variant associated with an 
         action cadence step. Email and call steps can have up to 3 variants associated so sales teams 
         can compare the engagement results. This object is available in API version 53.0 and later.

# ActionCadenceStepVariant

Represents an email template or call script variant associated with an action cadence step. Email and call steps can have up to 3 variants associated so sales teams can compare the engagement results. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Sales Engagement and Allow Email Template and Call Script Variant Testing must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ActionCadenceStepId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related action cadence step.This is a relationship field.Relationship NameActionCadenceStepRelationship TypeLookupRefers ToActionCadenceStep |
| SplitPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of emails to send or calls to make using this email template or call script variant. The total for all variants must be 100%. |
| TemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the associated email template or call script.This is a polymorphic relationship field.Relationship NameTemplateRelationship TypeLookupRefers ToCallTemplate, EmailTemplate |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of the associated action cadence step.Possible values are:AutoSendAnEmailBranchCreateTaskDaisyChainLinkedInConnectionLinkedInMailListenerBranchMakeACallPlatformScreenFlow—Available in version 55.0 and later.RootSendAnEmailWaitOnly email and call steps can have an associated action cadence step variant. |

## Usage

Use ActionCadenceStepVariant to retrieve the email template or call script for an action cadence step:

```

```

Use ActionCadenceStepVariant to retrieve the call scripts from all call steps:

```

```

## Code Examples

```
SELECT SplitPercentage, TemplateId FROM ActionCadenceStepVariant WHERE ActionCadenceStepId=:[idValue]
```

```
SELECT SplitPercentage, TemplateId, ActionCadenceStepId FROM ActionCadenceStepVariant WHERE Type='MakeACall'
```
