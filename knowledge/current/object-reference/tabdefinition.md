---
title: "TabDefinition"
domain: object-reference
topic: tabdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.684Z
estimatedTokens: 509
keywords: [TabDefinition, custom, tab, tabs, current, user, access, API, version, 43.0, later, Calls]
---

# TabDefinition

> Represents a custom tab. Returns only the tabs that the current user
			has access to. This object is available in API version 43.0 and later.

# TabDefinition

Represents a custom tab. Returns only the tabs that the current user has access to. This object is available in API version 43.0 and later.

## Supported Calls

describeSObjects(), query(), search()

## Fields

| Field Name | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the tab. Always retrieve this value before using it, because the value isn’t guaranteed to stay the same from one release to the next. Simplify queries by using this field instead of making multiple queries. |
| IsAvailableInAloha | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the tab is available in Salesforce Classic. |
| IsAvailableInDesktop | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the tab is available on desktop. |
| IsAvailableInLightning | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the tab is available in Lightning Experience. |
| IsAvailableInMobile | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the tab is available in the Salesforce mobile app. |
| IsCustom | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the tab is a custom tab created by admins in the org. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe localized label corresponding to the MasterLabel field in the Tooling API object. |
| MobileUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL that can be used to launch this tab in the Salesforce mobile app. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe developer name of the tab. |
| SobjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the sObject corresponding to the tab. |
| Url | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL that can be used to launch this tab on desktop. |
