---
title: "CustomNotificationActionGroup (Beta)"
domain: tooling-api
topic: customnotificationactiongroup-beta
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:45.035Z
estimatedTokens: 454
keywords: [CustomNotificationActionGroup, Beta, Stores, information, custom, notification, action, groups., API, version, 66.0, later., Important, Note, Supported, Calls, Fields]
---

# CustomNotificationActionGroup (Beta)

> Stores information about custom notification action groups.
      This object is available in API version 66.0 and later.

# CustomNotificationActionGroup (Beta)

Stores information about custom notification action groups. This object is available in API version 66.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Actionable notifications is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this pilot or beta service is at the Customer's sole discretion.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CustomNotificationTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThis field is a relationship field.Relationship NameCustomNotificationTypeRelationship TypeMaster-detailRefers ToCustomNotificationType (the master object) |
| GroupName | TypestringPropertiesCreate, Filter, Group, SortDescriptionName of the mobile action group. Use a unique name per custom notification type. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

CustomNotificationActionGroup is exposed in Tooling API to user profiles with the View Setup and Configuration permission. To create and edit mobile action groups, the Customize Application permission is required.
