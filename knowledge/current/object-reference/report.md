---
title: "Report"
domain: object-reference
topic: report
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.214Z
estimatedTokens: 1627
keywords: [Report, data, meets, certain, criteria, organized, way, Access, read-only, API, version, 20.0, later, Calls, Query]
---

# Report

> Represents a report, a set of data that meets certain criteria,
			displayed in an organized way. Access is read-only. This object is available in API
		version 20.0 and later.

# Report

Represents a report, a set of data that meets certain criteria, displayed in an organized way. Access is read-only. This object is available in API version 20.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description of the report. Limit: 255 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Report Unique Name.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| FolderName | TypestringPropertiesFilter, Nillable, SortDescriptionName of the folder that contains the report. Available in API version 35.0 and later. |
| Format | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. Indicates the format of the report. This field is available in API version 29.0 and later. Can have one of these values:Tabular for reports in that format. In the application, the label is Tabular.Summary for reports in that format. In the application, the label is Summary.Matrix for reports in that format. In the application, the label is Matrix.Multiblock for reports in joined format. In the application, the label is Joined. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastRunDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionReturns the date the report was last run. Label is Last Run. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. The report label used in the user interface. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.This field can’t be accessed unless the logged-in user has the Customize Application permission. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the folder that contains the report. There are 2 special folders:Private, where the ID is the user IDPublic, where the ID is the org IDThis is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToFolder, Organization, User |

## Supported Query Scopes

Use these scopes to help specify the data your SOQL query returns.

allPrivate

Records saved in all users’ private folders.

Requires the user permission "Manage All Private Reports and Dashboards" and [Enhanced Analytics Folder Sharing](https://help.salesforce.com/HTViewHelpDoc?id=analytics_sharing_enable.htm&language=en_US). If your organization was created after the Summer ’13 release, you already have Enhanced Analytics Folder Sharing. Available in API version 36.0 and later.

created

Records created by the user running the query.

everything

All records except records saved in other users’ private folders.

mine

Records saved in the private folder of the user running the query.

organizationOwned

Records saved in Unfiled Public Reports. In Lightning Experience, the Unfiled Public Reports folder is called Public Reports.

## Usage

Use the report object to get report metadata. Query, search, or retrieve specific metadata on reports. Report object fields are read-only.

## Example: Reports with “Sales” in Their Name

This SOQL query returns reports that contain the name “Sales” and lists their developer names, format, ID, and report name.

```

```

## Example: Reports in an Inactive User’s Private Folder

This SOQL query returns reports saved in a specific user’s private folder.

```

```

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ReportFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

#### See Also

-   [ReportTag](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_reporttag.htm "Associates a word or short phrase with a Report. This object is available in API version 20.0 and later.")

-   [Dashboard](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dashboard.htm "Represents a dashboard, which shows data from custom reports as visual components. Access is read-only. This object is available in API version 20.0 and later.")

## Code Examples

```
SELECT DeveloperName,Format,Id,Name FROM Report WHERE Name LIKE '%Sales%'
```

```
SELECT Id FROM Report USING SCOPE allPrivate WHERE OwnerId = ‘005A0000000Bc2deFG’
```

## Related Topics

- ReportFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ReportTag (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_reporttag.htm)
- Dashboard (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dashboard.htm)
