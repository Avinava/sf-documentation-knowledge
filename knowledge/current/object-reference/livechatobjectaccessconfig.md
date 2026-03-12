---
title: "LiveChatObjectAccessConfig"
domain: object-reference
topic: livechatobjectaccessconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.375Z
estimatedTokens: 410
keywords: [LiveChatObjectAccessConfig, action, perform, Chat, API, version, 53.0, later, Calls, Special, Access, Rules]
---

# LiveChatObjectAccessConfig

> Represents the action you can perform on a specified object by the Chat
         API. This object is available in API version 53.0 and later.

# LiveChatObjectAccessConfig

Represents the action you can perform on a specified object by the Chat API. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, enable Chat. To see the list of objects you can find or create in the UI using this API, enable the "Turns on findOrCreate in chat API" permission. You can find this permission in the Chat Settings page of the Setup UI.

## Fields

| Field | Details |
| --- | --- |
| AccessType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe API action you can perform on the object specified in SobjectType.Possible values are:CreateFind |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated LiveChatObjectAccessDefinition record.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToLiveChatObjectAccessDefinition |
| SobjectType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe object that the action specified by AccessType applies to.Possible values are all standard and custom objects. Custom objects are available as picklist values in API version 55.0 and later. |

#### See Also

-   [LiveChatObjectAccessDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatobjectaccessdefinition.htm "Represents the parent record for one or more LiveChatObjectAccessConfig objects. This object is available in API version 53.0 and later.")

## Related Topics

- LiveChatObjectAccessDefinition (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_livechatobjectaccessdefinition.htm)
