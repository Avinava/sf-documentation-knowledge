---
title: "SearchLayout"
domain: tooling-api
topic: searchlayout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.741Z
keywords: [SearchLayout, Supported, SOAP, Calls, REST, HTTP, Methods, Limitations, Fields, SearchLayoutButtonsDisplayed, SearchLayoutButton, SearchLayoutFieldsDisplayed, SearchLayoutField]
---

# SearchLayout

# SearchLayout

Represents a search layout defined for an object.

This object is available in the Tooling API version 34.0 and later.

## Supported SOAP Calls

describeObjects(), query()

## Supported REST HTTP Methods

GET

## Limitations

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Details |
| --- | --- |
| ButtonsDisplayed | TypeSearchLayoutButtonsDisplayedPropertiesNillableDescriptionThe list of buttons available in list views for an object.This field is equivalent to the Buttons Displayed value in Object Name List View in the Search Layouts related list on the object detail page. It’s also equivalent to the listViewButtons field on SearchLayouts in Metadata API. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. DurableId in queries allows you to find the right record without having to retrieve the entire record. |
| EntityDefinition | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object associated with this search layout. Use in subqueries. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the record in EntityDefinition. Use in subqueries. |
| FieldsDisplayed | TypeSearchLayoutFieldsDisplayedPropertiesNillableDescriptionThe list of fields displayed in a search result for the object. The name field is required. It’s always displayed as the first column header, so it isn’t included in this list; all additional fields are included. The field name relative to the object name, for example MyCustomField__c, is specified for each custom field.This field is equivalent to the Search Results in the Search Layouts related list on the object detail page in the application user interface. It’s also equivalent to searchResultsAdditionalFields in Metadata API. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label for this search layout. |
| LayoutType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of search layout. |
| ListLayout | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Identifies the list layout a search layout is related to. Available in API version 48.0 and later. |
| Profile | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Identifies the profile to which a search layout applies. Available in API version 48.0 and later. |
| ProfileName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the profile to which a search layout applies. Available in API version 48.0 and later. |

## SearchLayoutButtonsDisplayed

| Type | Details |
| --- | --- |
| applicable | TypebooleanDescriptionIf true, the buttons listed in buttons apply to the object associated with this search layout. |
| buttons | TypeSearchLayoutButtonDescriptionThe list of buttons on the object associated with this search layout. |

## SearchLayoutButton

| Type | Details |
| --- | --- |
| apiName | TypestringDescriptionThe API name of the button. |
| label | TypestringDescriptionThe button’s label text. |

## SearchLayoutFieldsDisplayed

| Type | Details |
| --- | --- |
| applicable | TypebooleanDescriptionIf true, the fields listed in fields are available in the object associated with this search layout. |
| fields | TypestringDescriptionThe list of fields on the object associated with this search layout. |

## SearchLayoutField

| Type | Details |
| --- | --- |
| apiName | TypestringDescriptionThe API name of the field. |
| label | TypestringDescriptionThe field’s label text. |
| sortable | TypebooleanDescriptionIf true, the fields can be sorted. |