---
title: "Methods for Navigation Items in Lightning Experience"
domain: service-cloud
topic: methods-for-navigation-items-in-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.492Z
keywords: [Methods, Navigation, Items, Lightning, Experience]
---

# Methods for Navigation Items in Lightning Experience

# Methods for Navigation Items in Lightning Experience

Lightning console apps display an item menu that lets users select navigation items, such as cases, contacts, and accounts. Salesforce admins choose which navigation items to display in the navigation menu.

These methods work with navigation items in Lightning console apps.

-   **[focusNavigationItem() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_focusNavigationItem.htm)**  
    Focuses on the selected navigation object and opens the object's home page. Typically, standard and custom objects open the object's list view. If split view is open, focus remains on the selected navigation object. This method works only in Lightning console apps.
-   **[getNavigationItems() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getNavigationItems.htm)**  
    Returns information about all the items in the navigation menu. This method works only in Lightning console apps.
-   **[getSelectedNavigationItem() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getSelectedNavigationItem.htm)**  
    Returns information about the selected navigation item. This method works only in Lightning console apps.
-   **[refreshNavigationItem() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_refreshNavigationItem.htm)**  
    Refreshes the selected navigation object's home page. Typically, standard and custom objects open the object's list view. If split view is open, it's refreshed. This method works only in Lightning console apps.
-   **[setSelectedNavigationItem() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setSelectedNavigationItem.htm)**  
    Sets the selected navigation item to a specific ID. This method works only in Lightning console apps.