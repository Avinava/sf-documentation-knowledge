---
title: "SearchLayout"
domain: object-reference
topic: searchlayout
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.711Z
estimatedTokens: 647
keywords: [SearchLayout, search, layout, defined, API, version, 35.0, later, Calls, Special, Access, Rules, Usage]
---

# SearchLayout

> Represents a search layout defined for an object. This object is
      available in API version 35.0 and later.

# SearchLayout

Represents a search layout defined for an object. This object is available in API version 35.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

Users with the View Setup and Configuration permission can access this object.

## Fields

| Field | Details |
| --- | --- |
| ButtonsDisplayed | TypeSearchLayoutButtonsDisplayedPropertiesNillableDescriptionThe list of buttons available in list views for an object.This field is equivalent to the listViewButtons field on SearchLayouts in Metadata API. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. DurableId in queries allows you to find the right record without having to retrieve the entire record. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the record in EntityDefinition. Use in subqueries.This field is a relationship field.Relationship NameEntityDefinitionRefers ToEntityDefinition |
| FieldsDisplayed | TypeSearchLayoutFieldsDisplayedPropertiesNillableDescriptionThe list of fields displayed in a search result for the object. The name field is required. It’s always displayed as the first column header, so it isn’t included in this list; all additional fields are included. The field name relative to the object name, for example MyCustomField__c, is specified for each custom field.This field is equivalent to searchResultsAdditionalFields on SearchLayouts in Metadata API. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label for this search layout. |
| LayoutType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of search layout. |
| ListLayout | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Identifies the list layout a search layout is related to. Available in API version 48.0 and later. |
| Profile | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Identifies the profile to which a search layout applies. Available in API version 48.0 and later. |
| ProfileName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the profile to which a search layout applies. Available in API version 48.0 and later. |

## Usage

Use the SearchLayout object to control the fields displayed and actions available to a user profile. The search layout applies to global and lookup searches.
