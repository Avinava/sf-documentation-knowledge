---
title: "Manage Apps"
domain: uiapi
topic: manage-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.032Z
estimatedTokens: 820
keywords: [Manage, Apps, app, collection, items, work, together, serve, particular, function, Salesforce, come, two, flavors, Classic]
---

# Manage Apps

> An app is a collection of items that work together to serve a
      particular function. Salesforce apps come in two flavors: Classic apps and Lightning apps.
      Classic apps are created and managed in Salesforce Classic. Lightning apps are created and
      managed in Lightning Experience. Admins customize both types of apps to match the way users
      work.

# Manage Apps

An app is a collection of items that work together to serve a particular function. Salesforce apps come in two flavors: Classic apps and Lightning apps. Classic apps are created and managed in Salesforce Classic. Lightning apps are created and managed in Lightning Experience. Admins customize both types of apps to match the way users work.

Classic apps are a collection of standard and custom tabs, including most standard objects, custom objects, Visualforce tabs, Lightning component tabs, Canvas apps via Visualforce tabs, and web tabs. In Salesforce Classic, users use tabs to access objects, like accounts and leads. Tabs also serve up other features, such as the Home page or Chatter.

Lightning apps are a collection of items that include everything from the Classic apps list, plus Lightning page tabs, and utilities like Sales Dialer. In Lightning apps, admins customize the app’s logo and enhance branding by customizing the color of the navigation bar. Navigation in Lightning Experience is similar to navigation in Salesforce Classic, but with some improvements. In Lightning Experience, users can complete actions and access recent records and lists directly from the navigation bar. Users can also switch between apps that have custom colors and branding.

Users can also personalize which items appear in their navigation bar in Lightning Experience or tabs in Salesforce Classic. Although users can’t completely override the navigation created by admins, they can add and reorder items or tabs from their view. In addition, in Lightning Experience, users can add Favorite items directly to their navigation bar.

Using these App resources, you can get a list of apps, items from an app, and the presentation data for a user’s navigation.

To return metadata for a list of all apps for the current user, use this [resource](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps.htm "Get metadata for all the apps a user has access to. Metadata for the selected app includes tabs on the app’s navigation bar. Metadata for other apps doesn’t include tabs on the navigation bar.").

```

```

To return metadata about a specific app, use this [resource](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_id.htm "Get the metadata for an app.").

```

```

To return metadata about a specific app, and save the app as the last accessed app for the user, use this [resource](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_id_update.htm "Returns metadata for an app, and saves an app as the last selected for a user.").

```

```

To return metadata about the app the current user last selected, or sees by default, use this [resource](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_selected.htm "Retrieves the app the current user last selected or the app the user sees by default.").

```

```

To return metadata about a user’s personalized navigation, use this [resource](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_user_nav_items.htm "Get a user’s personalized navigation items (tabs).").

```

```

To return metadata for a list of all navigation tabs for the current user, use this [resource](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_all_nav_items.htm "Gets all navigation items (tabs) that the user has access to.").

```

```

## Code Examples

```
GET /ui-api/apps
```

```
GET /ui-api/apps/${appId}
```

```
PATCH /ui-api/apps/${appId}
```

```
GET /ui-api/apps/selected
```

```
GET /ui-api/apps/${appId}/user-nav-items
```

## Related Topics

- resource (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps.htm)
- resource (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_id.htm)
- resource (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_id_update.htm)
- resource (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_selected.htm)
- resource (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_user_nav_items.htm)
- resource (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_all_nav_items.htm)
