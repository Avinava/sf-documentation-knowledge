---
title: "CustomNotificationType"
domain: tooling-api
topic: customnotificationtype
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:44.179Z
estimatedTokens: 714
keywords: [CustomNotificationType, Stores, custom, notification, API, version, 46.0, later, Calls]
---

# CustomNotificationType

> Stores information about custom notification types. This object is available in API version 46.0 and later.

# CustomNotificationType

Stores information about custom notification types. This object is available in API version 46.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CustomNotifTypeName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, Unique, UpdateDescriptionSpecifies a notification type name. The notification type name is unique within your organization. Maximum number of characters: 80. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies a general description of the notification type, which is displayed with the notification type name. Maximum number of characters: 255. |
| Desktop | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the desktop delivery channel is enabled (true) or not (false). The default value is false. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the API name of the notification type. |
| IsSlack | TypebooleanPropertiesReserved for future use.DescriptionReserved for future use. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the language of the custom notification type. The value for this field is the language value of the org. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the notification type label. |
| Mobile | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the mobile delivery channel is enabled (true) or not (false). The default value is false. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the namespace of the notification type, if installed with a managed package. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

CustomNotificationType is exposed in Tooling API to user profiles with the View Setup and Configuration permission. To create and edit notification types, the Customize Application permission is required.
