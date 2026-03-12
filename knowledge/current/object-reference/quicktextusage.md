---
title: "QuickTextUsage"
domain: object-reference
topic: quicktextusage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.821Z
estimatedTokens: 940
keywords: [QuickTextUsage, usage, quick, text, record, including, how, they, snippet, users, send, customer, API, version, 47.0]
---

# QuickTextUsage

> Represents the usage of quick text on a record, including which quick
			text was used, who used it, and how they used it. Quick text is a snippet of text
		that allows users to send a quick response to a customer. This object is available in API
		version 47.0 and later.

# QuickTextUsage

Represents the usage of quick text on a record, including which quick text was used, who used it, and how they used it. Quick text is a snippet of text that allows users to send a quick response to a customer. This object is available in API version 47.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is always read-only.

## Fields

| Field | Details |
| --- | --- |
| AppContext | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionContext in which the quick text was used. Possible values are:Aloha—Salesforce ClassicLightning—Lightning ExperienceUnknown |
| Channel | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe channel in which the quick text was used. Possible values are:EmailEventGenericInternalKnowledgeLive AgentMessagingPhonePortalSocialTask |
| FolderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the folder containing the quick text at the time it was used.This is a relationship field.Relationship NameFolderRelationship TypeLookupRefers ToFolder |
| LaunchSource | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionHow the user started the quick text. Possible values are:FloaterKeyboard shortcutMacroToolbar |
| LoggedTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time when the quick text was used. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the quick text. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the group or user that owns the quick text.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| QuickTextID | TypereferencePropertiesFilter, Group, SortDescriptionID of the quick text.This is a relationship field.Relationship NameQuickTextRelationship TypeLookupRefers ToQuickText |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the user that used the quick text.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[QuickTextUsageChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[QuickTextUsageOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[QuickTextUsageShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- QuickTextUsageChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- QuickTextUsageOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- QuickTextUsageShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
