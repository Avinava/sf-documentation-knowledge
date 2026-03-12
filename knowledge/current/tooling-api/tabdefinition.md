---
title: "TabDefinition"
domain: tooling-api
topic: tabdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.951Z
estimatedTokens: 584
keywords: [TabDefinition, Represents, tab, tabs, org., API, version, 43.0, later., Note, Supported, SOAP, Calls, REST, HTTP, Fields]
---

# TabDefinition

> Represents a tab, and returns all tabs available in the org.
        Available in API version 43.0 and later.

# TabDefinition

Represents a tab, and returns all tabs available in the org. Available in API version 43.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

In API version 45.0 and later, only users with the “ViewSetup and Configuration” permission can access TabDefinition.

## Supported SOAP Calls

query(), search()

## Supported REST HTTP Methods

Query, GET

## Fields

| Field Name | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| IsAvailableInAloha | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSet to true if the tab is available in the Salesforce Classic user interface. If a tab is available in Salesforce Classic, then IsAvailableInMobile is false. |
| IsAvailableInDesktop | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSet to true if the tab is available in the desktop user interface. |
| IsAvailableInMobile | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSet to true if the tab is available in the Salesforce mobile app. |
| IsAvailableInLightning | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSet to true if the tab is available in the Lightning Experience user interface. |
| IsCustom | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSet to true if the tab is a custom tab. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe tab label in the Salesforce org. |
| MobileUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the tab is available in mobile, this is the URL that the tab directs the user to in the Salesforce mobile app. If the tab isn’t available in mobile, this is set to null. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the tab. |
| SobjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUsed with REST to retrieve the metadata for the tab. |
| Url | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL for where the tab directs the user. |
