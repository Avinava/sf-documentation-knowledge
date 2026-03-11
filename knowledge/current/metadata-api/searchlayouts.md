---
title: "SearchLayouts"
domain: metadata-api
topic: searchlayouts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:54.530Z
keywords: [SearchLayouts, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, File, See]
---

# SearchLayouts

# SearchLayouts

Represents the metadata associated with the search layouts for an object. You can customize which fields to display for users in search results, search filter fields, lookup dialogs, and recent record lists on tab home pages. You can access SearchLayouts only by accessing its encompassing CustomObject.

For more information, see [Customize Layouts for Search Results](https://help.salesforce.com/articleView?id=ai.customizing_search_layouts.htm&type=5&language=en_US "HTML (New Window)") and [Customize Search Layouts for Custom Objects](https://help.salesforce.com/articleView?id=ai.customizing_search_layouts.htm&type=5&language=en_US) in Salesforce Help.

## Version

Search layouts for custom objects are available in API version 14.0 and later. The ability to modify search layouts for standard objects (except events and tasks) is available in API version 27.0 and later.

## Fields

When defining metadata for search layouts:

-   Any Name field defined as a text type is mandatory; it’s always displayed as the first column in the search results page. When you query for a list of fields; the name field isn’t returned but all other fields are. If you define the Name field as an autonumber type, it’s not mandatory and you can remove it from the list, but when you import the search layout with Metadata API, it will always add the Name field back. These rules apply to customTabListAdditionalFields, lookupDialogsAdditionalFields, lookupPhoneDialogsAdditionalFields, and searchResultsAdditionalFields
-   For custom objects, the search layout uses the API name, for example, MyCustomField\_\_c instead of the field name My Custom Field.

| Field | Field Type | Description |
| --- | --- | --- |
| customTabListAdditionalFields | string[] | The list of fields displayed in the Recent Object Name list view for an object. |
| excludedStandardButtons | string[] | The list of standard buttons excluded from the search layout. |
| listViewButtons | string[] | The list of buttons available in list views for an object.This field is equivalent to the Buttons Displayed value in the Object Name List View in the related list of the object detail page in the UI. |
| lookupDialogsAdditionalFields | string[] | The list of fields displayed in a lookup dialog for the object.Salesforce objects often include one or more lookup fields that allow users to associate two records together in a relationship. For example, a contact record includes an Account lookup field that represents the relationship between the contact and the organization with which the contact is associated. A lookup search dialog helps you search for the record associated with the one being edited. Lookup filter fields allow you to filter your lookup search by a customized list of fields in the object.This field is equivalent to the Lookup Dialogs related list on the object detail page in the UI. |
| lookupFilterFields | string[] | The list of fields that can be used to filter enhanced lookups for an object. Enhanced lookups are optionally enabled by your administrator.This field is equivalent to the Lookup Filter Fields related list on the object detail page in the application user interface. |
| lookupPhoneDialogsAdditionalFields | string[] | The list of phone-related fields displayed in a lookup dialog for the object.This list enables integration of the fields with a softphone dial pad.This field is equivalent to the Lookup Phone Dialogs related list on the object detail page in the application user interface. |
| massQuickActions | string[] | The list of actions that you can use to perform mass quick action on records. Use this field to add an existing create or update action.You can perform mass quick actions on custom objects and all standard objects that support quick actions and have a search layout in Lightning Experience. This includes but isn’t limited to cases, leads, accounts, campaigns, contacts, opportunities, and work orders. |
| searchFilterFields | string[] | The list of fields that can be used to filter a search for the object.This field is equivalent to the Search Filter Fields related list on the object detail page in the application user interface. |
| searchResultsAdditionalFields | string[] | The list of fields displayed in a search result for the object.This field is equivalent to the Search Results related list on the object detail page in the application user interface. |
| searchResultsCustomButtons | string[] | The list of custom buttons available in a search result for the object. The actions associated with the buttons can be applied to any of the records returned in the search result. |

## Declarative Metadata Sample Definition

A sample definition of object’s search layout is shown..

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_recordtype.htm "RecordType")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_apexsharingreason.htm "SharingReason")

#### See Also

-   [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.")
    
-   [ProfileSearchLayouts](atlas.en-us.api_meta.meta/api_meta/meta_profilesearchlayouts.htm "Represents a user profile’s search results layouts for an object. ProfileSearchLayouts are similar to SearchLayouts. However, with profile-specific layouts, each user profile can have a different search results layout for an object.")