---
title: "AppMenu Class"
domain: apex-reference
topic: appmenu-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.949Z
estimatedTokens: 1033
namespace: AppLauncher
keywords: [AppMenu, appearance, apps, App, Launcher, setAppVisibility, appMenuItemId, isVisible, setOrgSortOrder, appIds, setUserSortOrder]
---

# AppMenu Class

> Contains methods to set the appearance of apps in the App
      Launcher.

**Namespace:** `AppLauncher`

# AppMenu Class

Contains methods to set the appearance of apps in the App Launcher.

## Namespace

[AppLauncher](atlas.en-us.apexref.meta/apexref/apex_namespace_applauncher.htm "The AppLauncher namespace provides methods for managing the appearance of apps in the App Launcher, including their visibility and sort order.")

-   **[AppMenu Methods](atlas.en-us.apexref.meta/apexref/apex_class_applauncher_AppMenu.htm#apex_applauncher_AppMenu_methods)**


## AppMenu Methods

The following are methods for AppMenu.

-   **[setAppVisibility(appMenuItemId, isVisible)](atlas.en-us.apexref.meta/apexref/apex_class_applauncher_AppMenu.htm#apex_applauncher_AppMenu_setAppVisibility)**
    Shows or hides specific apps in the App Launcher.
-   **[setOrgSortOrder(appIds)](atlas.en-us.apexref.meta/apexref/apex_class_applauncher_AppMenu.htm#apex_applauncher_AppMenu_setOrgSortOrder)**
    Sets the organization-wide default sort order for the App Launcher based on a List of app menu item IDs in the desired order.
-   **[setUserSortOrder(appIds)](atlas.en-us.apexref.meta/apexref/apex_class_applauncher_AppMenu.htm#apex_applauncher_AppMenu_setUserSortOrder)**
    Sets an individual user’s default sort order for the App Launcher based on a List of app menu item IDs in the desired order.

### setAppVisibility(appMenuItemId, isVisible)

Shows or hides specific apps in the App Launcher.

#### Signature

public static void setAppVisibility(Id appMenuItemId, Boolean isVisible)

#### Parameters

appMenuItemId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The 15-character application ID value for an app. For more information, see the ApplicationId field for [AppMenuItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_appmenuitem.htm "HTML (New Window)") or the AppMenuItemId field for [UserAppMenuItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userappmenuitem.htm "HTML (New Window)") in the Salesforce Object Reference

isVisible

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true, the app is visible.

#### Return Value

Type: void

### setOrgSortOrder(appIds)

Sets the organization-wide default sort order for the App Launcher based on a List of app menu item IDs in the desired order.

#### Signature

public static void setOrgSortOrder(List<Id> appIds)

#### Parameters

appIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

A list of application ID values. For more information, see the ApplicationId field for [AppMenuItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_appmenuitem.htm "HTML (New Window)") in the Salesforce Object Reference.

#### Return Value

Type: void

### setUserSortOrder(appIds)

Sets an individual user’s default sort order for the App Launcher based on a List of app menu item IDs in the desired order.

#### Signature

public static void setUserSortOrder(List<Id> appIds)

#### Parameters

appIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

A list of application ID values. For more information, see the AppMenuItemId field for [UserAppMenuItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userappmenuitem.htm "HTML (New Window)") in the Salesforce Object Reference.

#### Return Value

Type: void

## Related Topics

- AppLauncher (atlas.en-us.apexref.meta/apexref/apex_namespace_applauncher.htm)
- AppMenu Methods (atlas.en-us.apexref.meta/apexref/apex_class_applauncher_AppMenu.htm)
- setAppVisibility(appMenuItemId, isVisible) (atlas.en-us.apexref.meta/apexref/apex_class_applauncher_AppMenu.htm)
- setOrgSortOrder(appIds) (atlas.en-us.apexref.meta/apexref/apex_class_applauncher_AppMenu.htm)
- setUserSortOrder(appIds) (atlas.en-us.apexref.meta/apexref/apex_class_applauncher_AppMenu.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
