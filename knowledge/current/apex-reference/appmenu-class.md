---
title: "AppMenu Class"
domain: apex-reference
topic: appmenu-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.666Z
keywords: [AppMenu, Class, Sets, individual, user’s, default, sort, order, App, Launcher, based, List, app, menu, item, IDs, desired, order., setUserSortOrder, appIds]
---

# AppMenu Class

> Sets an individual user’s default sort order for the App Launcher
      based on a List of app menu item IDs in the desired order.

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