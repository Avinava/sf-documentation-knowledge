---
title: "StandardAction"
domain: tooling-api
topic: standardaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.930Z
estimatedTokens: 761
keywords: [StandardAction, buttons, links, actions, standard, custom, API, version, 34.0, later, SOAP, Calls, REST, HTTP]
---

# StandardAction

> Represents the buttons, links, and
            actions (standard actions) for a standard or custom object. This object is available in
            API version 34.0 and later.

# StandardAction

Represents the buttons, links, and actions (standard actions) for a standard or custom object. This object is available in API version 34.0 and later.

You can view the standard actions from an object’s management settings by going to Buttons, Links, and Actions.

## Supported SOAP Calls

query()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| ContentType | TypestringPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates whether the button or link is standard, URL, s-control, JavaScript action, or Visualforce page. This value maps to the Content Source field in the user interface. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionText displayed to an administrator in the standard action setup page. Description can be different from the Label, which is the label displayed in the user interface to end users. It can also be different from Name, which is a unique string used in merge fields. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. DurableId in queries allows you to find the right record without having to retrieve the entire record. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the standard or custom object for which this standard action is defined. |
| IsOverridden | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this standard action has been overridden (true, or not. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe text that displays in a user interface for the standard action. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Name | TypestringPropertiesFilter, Group,SortDescriptionThe unique name for the button or link when referenced from a merge field. This name can contain only underscores and alphanumeric characters, and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| OverrideContentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of an OverrideContent record. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

StandardAction fields are exposed in SOAP API version 45.0 and later. You can use Tooling API to query for StandardAction fields in guest user mode in API version 44.0 and earlier. In API version 45.0 and later, use SOAP API to get this data in guest user mode. StandardAction is still exposed in Tooling API to User Profiles with the ViewSetup permission.
