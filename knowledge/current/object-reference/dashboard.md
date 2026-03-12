---
title: "Dashboard"
domain: object-reference
topic: dashboard
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.816Z
estimatedTokens: 2230
keywords: [Dashboard, data, custom, reports, visual, components, Access, read-only, API, version, 20.0, later, Calls, Query, Scopes]
---

# Dashboard

> Represents a dashboard, which shows data from custom reports as visual
			components. Access is read-only. This object is available in API version 20.0 and
		later.

# Dashboard

Represents a dashboard, which shows data from custom reports as visual components. Access is read-only. This object is available in API version 20.0 and later.

## Supported Calls

describeSObjects(), describeLayout(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| BackgroundDirection | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionReturns the direction of the background fade. Available values are:Top to BottomLeft to RightDiagonal (default value)Label is Background Fade Direction. |
| BackgroundEnd | TypeintPropertiesFilter, Group, SortDescriptionReturns the ending fade color in hexadecimal. Label is Ending Color. |
| BackgroundStart | TypeintPropertiesFilter, Group, SortDescriptionReturns the starting fade color in hexadecimal. Label is Starting Color. |
| ChartTheme | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionReturns the background theme used for charts.Possible values are:dark—Dark Backgroundlight—Light Background |
| ColorPalette | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionReturns the color palette used for the dashboard.Possible values are:Default—Default Paletteaccessible—Mineral(Accessible) Palettebluegrass—Bluegrass PalettecolorSafe—Color Safe Palettedusk—Dusk Paletteearth—Lake Palettefire—Fire Palettegray—Gray Paletteheat—Heat Palettejustice—Wildflowers Palettenightfall—Nightfall Palettepond—Pond Palettesunrise—Sunrise Palettetropic—Ocean Paletteunity—Aurora Palettewater—Water Palettewatermelon—Watermelon Palette |
| DashboardResultRefreshedDate | TypestringPropertiesNillableDescriptionReturns the date on which the dashboard results were last refreshed. |
| DashboardResultRunningUser | TypestringPropertiesNillableDescription The user whose security settings were used to generate the dashboard results. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReturns the description of the dashboard. Limit: 255 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Dashboard Unique Name.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| FolderId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. Returns the ID of the Folder that contains the dashboard. See Folder.This is a relationship field.Relationship NameFolderRelationship TypeLookupRefers ToFolder, User |
| FolderName | TypestringPropertiesFilter, Nillable, SortDescriptionName of the folder that contains the dashboard. Available in API version 35.0 and later. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, Sort,DescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LeftSize | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionReturns the size of the left column of the dashboard.Available values are:NarrowMediumWide |
| MiddleSize | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionReturns the size of the middle column of the dashboard.Available values are:NarrowMediumWide |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| RightSize | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionReturns the size of the right column in the dashboard.Available values are:NarrowMediumWide |
| RunningUserId | TypereferencePropertiesFilter, Group, SortDescriptionReturns the ID of the running user specified for the dashboard.If the dashboard was created in Lightning Experience and is configured to run as the viewing user, it returns the user ID of the dashboard creator.If the dashboard was created in Salesforce Classic and is configured to run as the logged-in user, returns the user ID of the last specified running user.This is a relationship field.Relationship NameRunningUserRelationship TypeLookupRefers ToUser |
| TextColor | TypeintPropertiesFilter, Group, SortDescriptionReturns the body text color in hexadecimal. Label is Text Color. |
| Title | TypestringPropertiesFilter, Group, idLookup, SortDescriptionReturns the title of the dashboard. Limit: 80 characters. |
| TitleColor | TypeintPropertiesFilter, Group, SortDescriptionReturns the title text color in hexadecimal. Label is Title Color. |
| TitleSize | TypeintPropertiesFilter, Group, SortDescriptionReturns the title font size in points. Label is Title Size. |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionReturns the dashboard type. Available values are:SpecifiedUser—The dashboard displays data according to the access level of one specific running user.LoggedInUser—The dashboard displays data according to the access level of the logged-in user.MyTeamUser—The dashboard displays data according to the access level of the logged-in user, and managers can view dashboards from the point of view of users beneath them in the role hierarchy. |

## Supported Query Scopes

Use these scopes to help specify the data that your SOQL query returns.

allPrivate

Records saved in all users’ private folders.

Requires the user permission "Manage All Private Reports and Dashboards" and [Enhanced Analytics Folder Sharing](https://help.salesforce.com/HTViewHelpDoc?id=analytics_sharing_enable.htm&language=en_US). If your organization was created after the Summer ’13 release, you already have Enhanced Analytics Folder Sharing. Available in API version 36.0 and later.

created

Records created by the user running the query.

everything

All records except records saved in other users’ private folders.

mine

Records saved in the private folder of the user running the query.

## Usage

Provides read-only access to the current values in the dashboard fields.

## Example: Dashboards in an Inactive User’s Private Folder

This SOQL query returns dashboards saved in a specific user’s private folder.

```

```

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[DashboardFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

#### See Also

-   [DashboardTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dashboardtag.htm "Associates a word or short phrase with a Dashboard. This object is available in API version 20.0 and later.")

-   [Report](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_report.htm "Represents a report, a set of data that meets certain criteria, displayed in an organized way. Access is read-only. This object is available in API version 20.0 and later.")

## Code Examples

```
SELECT Id FROM Dashboard USING SCOPE allPrivate WHERE CreatedByID = ‘005A0000000Bc2deFG’
```

## Related Topics

- DashboardFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- DashboardTag (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dashboardtag.htm)
- Report (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_report.htm)
