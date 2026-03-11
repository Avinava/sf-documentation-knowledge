---
title: "refreshNavigationItem() for Lightning Experience for
            Lightning Experience"
domain: service-cloud
topic: refreshnavigationitem-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.330Z
keywords: [refreshNavigationItem, Lightning, Experience, Arguments, Sample, Code, Response]
---

# refreshNavigationItem() for Lightning Experience for
            Lightning Experience

# refreshNavigationItem() for Lightning Experience for Lightning Experience

Refreshes the selected navigation object's home page. Typically, standard and custom objects open the object's list view. If split view is open, it's refreshed. This method works only in Lightning console apps.

This method refreshes in the background. If the list view has unsaved changes, the method returns false and doesn’t refresh the navigation item. The method doesn’t set focus on the navigation tab.

The following navigation items aren’t supported:

-   Custom Visualforce tabs
-   Custom Aura component tabs
-   Custom web tabs
-   Dashboards
-   Reports

## Arguments

None

## Sample Code

This Aura component has a button that, when pressed, refreshes the navigation item.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true. The promise is rejected on error.