---
title: "Standard Actions and Overrides Basics"
domain: lightning
topic: standard-actions-and-overrides-basics
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.450Z
estimatedTokens: 497
keywords: [Standard, Actions, Overrides, Basics, There, six, custom, objects, Tab, View, Edit, New, Salesforce, Classic, distinct]
---

# Standard Actions and Overrides Basics

> There are six standard actions available on most standard and all
   custom objects: Tab, List, View, Edit, New, and Delete. In Salesforce Classic, these are all
   distinct actions.

# Standard Actions and Overrides Basics

There are six standard actions available on most standard and all custom objects: Tab, List, View, Edit, New, and Delete. In Salesforce Classic, these are all distinct actions.

Lightning Experience and the Salesforce mobile app combine the Tab and List actions into one action, Object Home. However, Object Home is reached via the Tab action in Lightning Experience, and the List action in the Salesforce mobile app. Finally, the Salesforce mobile app has a unique Search action (reached via Tab). (Yes, it’s a bit awkward and complicated.)

This table lists the standard actions you can override for an object as the actions are named in Setup, and the resulting action that’s overridden in the three different user experiences.

| Override in Setup | Salesforce Classic | Lightning Experience | Mobile |
| --- | --- | --- | --- |
| Tab | object tab | object home | search |
| List | object list | n/a | object home |
| View | record view | record home | record home |
| Edit | record edit | record edit | record edit |
| New | record create | record create | record create |
| Delete | record delete | record delete | record delete |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

-   “n/a” doesn’t mean you can’t *access* the standard behavior, and it doesn’t mean you can’t *override* the standard behavior. It means you can’t *access the override*. It’s the override’s functionality that’s not available.
-   There are two additional standard actions, Accept and Clone. These actions are more complex, and overriding them is an advanced project. Overriding them isn’t supported.

## How and Where You Can Use Action Overrides

Aura components can be used to override the View, New, New Event, Edit, and Tab standard actions in Lightning Experience and the Salesforce mobile app. You can use an Aura component as an override in Lightning Experience and mobile, but not Salesforce Classic.
