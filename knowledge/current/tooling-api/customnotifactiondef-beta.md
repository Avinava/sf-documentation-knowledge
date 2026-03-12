---
title: "CustomNotifActionDef (Beta)"
domain: tooling-api
topic: customnotifactiondef-beta
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:45.030Z
estimatedTokens: 709
keywords: [CustomNotifActionDef, Beta, Represents, metadata, associated, mobile, action, group, notification, definition., API, version, 66.0, later., Important, Note, Supported, Calls, Special, Access]
---

# CustomNotifActionDef (Beta)

> Represents the metadata associated with a mobile action group notification
         definition.  This object is available in API version 66.0 and later.

# CustomNotifActionDef (Beta)

Represents the metadata associated with a mobile action group notification definition. This object is available in API version 66.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Actionable notifications is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this pilot or beta service is at the Customer's sole discretion.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| ActionGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionUnique identifier for the field.This field is a relationship field.Relationship NameActionGroupRelationship TypeMaster-detailRefers ToCustomNotificationActionGroup (the master object) |
| ActionName | TypestringPropertiesCreate, Filter, Group, SortDescriptionName of the mobile action group. Use a unique name per custom notification type. The field can contain only underscores and alphanumeric characters. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| ActionOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionOrder in which this action appears in the mobile action group. Select a number between 1 and 3, as there are 3 maximum actions in a group. |
| ActionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPossible values are:NotificationApiActionShare |
| Label | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the action. |
| TargetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis relationship field is the name of the ApexClass that implements handling of the action. TargetId is used only when the ActionType is set to NotificationApiAction.Relationship NameTargetRefers ToApexClass |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

CustomNotifActionDef is exposed in Tooling API to user profiles with the View Setup and Configuration permission. To create and edit mobile action groups, the Customize Application permission is required.
