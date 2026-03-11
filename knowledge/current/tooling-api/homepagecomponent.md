---
title: "HomePageComponent"
domain: tooling-api
topic: homepagecomponent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.111Z
keywords: [HomePageComponent, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# HomePageComponent

# HomePageComponent

Represents a home page component.

This object is available in API version 35.0 and later.

## Supported SOAP Calls

query(), retrieve(), search()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| Body | TypestringPropertiesNillableDescriptionIf this component is an HTML page component, this field is the body of the HTML. |
| Height | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRequired for Visualforce Area components. Indicates the height (in pixels) of the component. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Name | TypestringPropertiesFilter, Group, idLookup, Namefield, SortDescriptionThe name of the home page component. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique string to distinguish this type from any others. |
| ShowLabel | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionID of the home page layout. |
| ShowScrollbars | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionID of the home page layout. |