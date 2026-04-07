---
title: "SaveAction"
domain: mc-apis
topic: saveaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.032Z
estimatedTokens: 480
keywords: [SaveAction, how, upsert, acts, nested, apply, Subscriber, DataExtension, Role, Send, Items]
---

> The SaveAction object defines how upsert acts on nested objects for Create and Update methods. You can apply SaveAction to Subscriber, List, DataExtension, Role, and Send objects.

# SaveAction

The SaveAction object defines how upsert acts on nested objects for Create and Update methods. You can apply SaveAction to Subscriber, List, DataExtension, Role, and Send objects.

The Default property indicates whether the object uses the default action when saving an object. In general, the default action is the same as the method being called. If the Create method is called, the object is inserted into the system if it does not exist. If it does exist, an error returns stating that the object already exists. If the Update method is called, the object is updated in the system if it already exists. If it does not exist, an error returns stating that the object does not exist.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AddOnly | Enumeration | Indicates that data is only added and not updated during a save action. |
| Default | Enumeration | Specifies default source of salutation when building an email (SalutationSourceEnum). Use the default action when saving an object. (SaveAction) |
| Delete | Enumeration | Indicates whether an object is deleted. |
| Nothing | Enumeration | Indicates that nothing is saved. |
| UpdateAdd | Enumeration | Indicates an UpdateAdd type for a save action. If this property is specified, the save action updates existing information and adds new information. |
| UpdateOnly | Enumeration | Indicates an UpdateOnly type for a save action. If this property is specified, the save action with update existing information only. |

## Related Items

-   [Subscriber Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/subscriber.htm)
-   [List Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/list.htm)
-   [DataExtension Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/dataextension.htm)
-   [Role Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/role.htm)
-   [Send Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/send.htm)

## Related Topics

- Subscriber Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/subscriber.htm)
- List Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/list.htm)
- DataExtension Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/dataextension.htm)
- Role Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/role.htm)
- Send Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/send.htm)
- Create Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/create_appex.htm)
- Update Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/update_appex.htm)
- Subscriber Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/subscriber_appex.htm)
- List Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/list_appex.htm)
