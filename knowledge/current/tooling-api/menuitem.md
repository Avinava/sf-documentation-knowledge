---
title: "MenuItem"
domain: tooling-api
topic: menuitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.030Z
estimatedTokens: 602
keywords: [MenuItem, Represents, menu, item., Supported, SOAP, Calls, REST, HTTP, Fields, Usage]
---

# MenuItem

> Represents a menu item.

# MenuItem

Represents a menu item.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

query(), update()

## Supported REST HTTP Methods

GET, POST

## Fields

| Field | Details |
| --- | --- |
| Active | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the item in the menu is active (true) or not (false). |
| AppId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the app that this menu item is associated with. Can be an enum (such as Feed or People) or an alphanumeric ID.Use AppId as the unique ID for the menu item, not Id. |
| Color | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe color of the menu item that appears in the user interface. This field is described in Web color RGB format, such as 00FF00. |
| IconURL | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe URL of an icon in the menu item. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe menu item label that appears in the user interface. |
| MenuType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of menu that this menu item belongs to. Valid values are:AppSwitcher: the app menu, a drop-down menu that’s displayed at the top of every app pageSalesforce1: the Salesforce mobile app navigation menuNetworkTabs: the Digital Experiences tab setThis field is required for query(). |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe SortOrder value determines the order in which a menu item is displayed in the user interface. This field must be an ordinal number greater than 0, and must be unique in the list. Inactive menu items have a value of -1. |
| Theme | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe associated theme, which must be one of the following values.theme2: the Salesforce theme that was used prior to Spring ’10theme3: the Salesforce theme that was introduced in Spring ’10theme4: the theme that was introduced in Winter ’14 for the mobile touchscreen version of Salesforcecustom: the theme that’s associated with a custom iconThis field is required for query() for Color and IconURL. |

## Usage

MenuItem can be queried and manipulated to change how menu items appear in Salesforce. The following example modifies the Salesforce mobile app navigation menu.

```

```

## Code Examples

```
String query = "SELECT AppId, Label, Active, SortOrder FROM MenuItem "
+
     "WHERE MenuType = 'Salesforce'";
SObject[] records = sforce.query(query).getRecords();

//Activate all menu items
for (int i = 0; i < records.length; i++) {
   MenuItem item = (MenuItem)records[i];
   item.setOrder(i + 1);
   item.setActive(true);
}

sforce.update(records);
```
