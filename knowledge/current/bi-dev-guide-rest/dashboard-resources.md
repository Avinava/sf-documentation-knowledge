---
title: "Dashboard Resources"
domain: bi-dev-guide-rest
topic: dashboard-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.609Z
estimatedTokens: 1115
keywords: [Dashboard, Resources, Analytics, dashboards, allow, users, continuously, monitor, key, metrics, their, business, manage, collections, individual]
---

# Dashboard Resources

> Analytics dashboards allow users to continuously monitor key metrics of their
  business. These resources allow users to manage collections of dashboards, individual dashboards,
  dashboard saved views, dashboard histories, and dashboard publishers.

# Dashboard Resources

Analytics dashboards allow users to continuously monitor key metrics of their business. These resources allow users to manage collections of dashboards, individual dashboards, dashboard saved views, dashboard histories, and dashboard publishers.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Dashboards List Resource | Returns a collection of Analytics dashboards, or creates a dashboard. | GET, POST | /wave/dashboards |
| Dashboard Resource | Returns or updates the dashboard with the specified ID or API name. | GET, DELETE, PATCH | /wave/dashboards/<dashboardIdOrApiName> |
| Dashboard Bundle Resource | Returns or updates the dashboard bundle with the specified ID or API name. | GET, PUT | /wave/dashboards/<dashboardIdOrApiName>​/bundle |
| Dashboard Histories Resource | Returns the dashboard histories with the specified ID or API name. | GET | /wave/dashboards/<dashboardIdOrApiName>​/histories |
| Dashboard Publishers List Resource | Returns a list of users who are assigned as publishers for the given dashboard. Adds the current user to the list of publishers for the given dashboard. Removes all users from the dashboard's publisher list. | GET DELETE POST | /wave/dashboards/<dashboardIdOrApiName>​/publishers |
| Dashboard Publisher Resource | Returns user detail information about the publisher for the given dashboard. Removes a user from the list of publishers for the given dashboard. | GET DELETE | /wave/dashboards/<dashboardIdOrApiName>​/publishers/<assetPublisherId> |
| Dashboard Saved Views List Resource | Returns a list of dashboard saved views or creates a single view. | GET POST | /wave/dashboards/<dashboardIdOrApiName>​/savedviews |
| Dashboard Saved View Resource | Returns, deletes, and updates a dashboard saved view. | GET DELETE PATCH | /wave/dashboards/<dashboardIdOrApiName>​/savedviews/<viewID> |
| Dashboard Saved Views Initial Resource | Returns the initial view information for a dashboard saved view. In the UI, the initial view is the default view. | GET | /wave/dashboards/<dashboardIdOrApiName>​/savedviews/initial |

-   **[Dashboards List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards.htm)**
    Returns a list of Analytics dashboard or creates a dashboard.
-   **[Dashboard Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id.htm)**
    Returns, deletes, or updates the dashboard with the specified ID or API name.
-   **[Dashboard Bundle Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_bundle.htm)**
    Returns or updates the dashboard bundle with the specified ID or API name.
-   **[Dashboard Histories Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_histories.htm)**
    Returns the dashboard histories with the specified ID or API name.
-   **[Dashboard Publishers List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_publishers.htm)**
    Returns a list of users who are assigned as publishers for the given dashboard. Adds the current user to the list of publishers for the given dashboard. Removes all users from the dashboard's publisher list.
-   **[Dashboard Publisher Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_publishers_id.htm)**
    Returns user detail information about the publisher for the given dashboard. Removes a user from the list of publishers for the given dashboard.
-   **[Dashboard Image Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_image_imagefqn.htm)**
    Returns a dashboard’s image as an asset reference.
-   **[Dashboard Saved Views List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews.htm)**
    Returns a list of dashboard saved views or creates a single view.
-   **[Dashboard Saved View Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews_id.htm)**
    Returns, deletes, and updates a dashboard saved view.
-   **[Dashboard Saved Views Initial Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews_initial.htm)**
    Returns the initial view information for a dashboard saved view. In the UI, the initial view is the default view.

## Related Topics

- Dashboards List
           Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards.htm)
- Dashboard Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id.htm)
- Dashboard Bundle Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_bundle.htm)
- Dashboard Histories Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_histories.htm)
- Dashboard Publishers List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_publishers.htm)
- Dashboard Publisher Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_publishers_id.htm)
- Dashboard Saved Views List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews.htm)
- Dashboard Saved View Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews_id.htm)
- Dashboard Saved Views Initial Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews_initial.htm)
- Dashboards List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards.htm)
