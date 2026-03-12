---
title: "DashboardComponent"
domain: object-reference
topic: dashboardcomponent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.821Z
estimatedTokens: 367
keywords: [DashboardComponent, dashboard, component, chart, metric, gauge, Access, read-only, API, version, 21.0, later, Calls, Usage, Associated]
---

# DashboardComponent

> Represents a dashboard component, which can be a chart, metric,
			table, or gauge on a dashboard. Access is read-only. This object is available in
		API version 21.0 and later.

# DashboardComponent

Represents a dashboard component, which can be a chart, metric, table, or gauge on a dashboard. Access is read-only. This object is available in API version 21.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CustomReportId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequires the user permission "Manage All Private Reports and Dashboards." The ID of the report that provides data for the dashboard component. See Report. |
| DashboardId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the dashboard that contains the dashboard component. See Dashboard.This is a relationship field.Relationship NameDashboardRelationship TypeLookupRefers ToDashboard |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the dashboard component. |

## Usage

Provides read only access to the current values in dashboard component fields.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[DashboardComponentFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

## Related Topics

- Report (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_report.htm)
- Dashboard (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dashboard.htm)
- DashboardComponentFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
