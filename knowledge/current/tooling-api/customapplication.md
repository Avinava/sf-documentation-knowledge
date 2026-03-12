---
title: "CustomApplication"
domain: tooling-api
topic: customapplication
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.981Z
estimatedTokens: 732
keywords: [CustomApplication, Represents, custom, standard, application., application, list, tab, references, description, logo., includes, access, associated, related, fields, Metadata, API., Tooling, API]
---

# CustomApplication

> Represents a custom or standard application. An application is
        a list of tab references, a description, and a logo. It also includes access to the
        associated CustomApplication type and related fields in Metadata API. Available in Tooling
        API version 42.0 or later.

# CustomApplication

Represents a custom or standard application. An application is a list of tab references, a description, and a logo. It also includes access to the associated CustomApplication type and related fields in Metadata API. Available in Tooling API version 42.0 or later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update()

## Supported REST HTTP Methods

Query, GET, POST, PATCH

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe optional description of the application. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe developer name of the application. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the application. |
| IsNavAutoTempTabsDisabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the navigation automatically creates temporary tabs settings. Defaults to false. Available in API version 43.0 and later. |
| IsNavPersonalizationDisabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether navigation personalization is disabled. Defaults to false. Available in API version 43.0 and later. |
| IsNavTabPersistenceDisabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether workspace tabs are cleared for each new console session (true) or not (false). Defaults to false. Available in API version 54.0 and later. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label of the application. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | Typemns:CustomApplicationPropertiesCreate, Nillable, UpdateDescriptionProvides access to the associated CustomApplication type and related fields in Metadata API. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix of the application. |
| NavType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionNot updateable. The type of navigation the application uses. Valid values are:ConsoleStandard |
| UiType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of user interface that the application uses. Valid values are:AlohaLightning |
| UtilityBar | TypeFlexiPagePropertiesFilter, Group, Nillable, SortDescriptionThe Lightning page used as the utility bar for the application. |
| UtilityBarId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the utility bar associated with this application. |

## Related Topics

- FlexiPage (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flexipage.htm)
