---
title: "AnalyticsVisualization"
domain: metadata-api
topic: analyticsvisualization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.527Z
keywords: [AnalyticsVisualization, Parent, Type, File, Suffix, Directory, Location, Version, Limits, Fields, AnalyticsVizField, AnalyticsVizViewDef, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# AnalyticsVisualization

# AnalyticsVisualization

Represents a Tableau Next visualization.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AnalyticsVisualization components have the suffix .uaviz and are stored in the analyticsVisualizations folder.

## Version

AnalyticsVisualization components are available in API version 64.0 and later.

## Limits

| Definition | Limit |
| --- | --- |
| The maximum number of AnalyticsVisualization components in a single deploy operation. | 50 |
| The maximum number of AnalyticsVisualization components in a single retrieve operation. | 100 |
| The maximum number of AnalyticsVisualization components across all deploy operations in a 24-hour window. | 100 |
| The maximum number of AnalyticsVisualization components across all retrieve operations in a 24-hour window. | 200 |

## Fields

| Field Name | Description |
| --- | --- |
| actions | Field TypeAnalyticsAssetAction[]DescriptionThe actions for the visualization. A visualization has 0 or more actions. |
| analyticsWorkspace | Field TypestringDescriptionRequired.The Tableau Next workspace the visualization belongs to. |
| dataSource | Field TypestringDescriptionRequired.The data source for the visualization. |
| description | Field TypestringDescriptionThe description for the visualization. |
| fields | Field TypeAnalyticsVizField[]DescriptionA list of data fields for the visualization. A visualization has 0 or more fields. |
| lastDraftModifiedDate | Field TypedateTimeDescriptionThe date and time the workspace draft was last modified. |
| lastPublishedDate | Field TypedateTimeDescriptionThe date and time the workspace was last published. |
| masterLabel | Field TypestringDescriptionRequired.The name of the visualization. |
| templateAssetSourceName | Field TypestringDescriptionIf the visualization was created from a template, the name of the source visualization in the template. |
| templateSource | Field TypestringDescriptionIf the visualization was created from a template, the name of the source template. |
| version | Field TypedoubleDescriptionThe API version of the visualization. |
| views | Field TypeAnalyticsVizViewDef[]DescriptionA list of views for the visualization. A visualization has 0 or more views. |
| visualSpecification | Field Typebase64BinaryDescriptionRequired.The visual specification for the visualization. |
| workspaceAssetRelationships | Field TypeAnalyticsWorkspaceAsset[]DescriptionA list of analytics assets in the workspace this visualization is associated with. A visualization has 0 or more workspace asset relationships. |

## AnalyticsVizField

Represents a data field in a visualization.

| Field Name | Description |
| --- | --- |
| adHoCalc | Field TypestringDescriptionThe expression to do an ad-hoc calculation with. |
| analyticsVizVersion | Field TypestringDescriptionThe version of the visualization the field is associated with. |
| computeUsing | Field TypestringDescriptionThe expression to compute the field value with. |
| displayCategory | Field TypeVisualizationFieldDisplayCategoryType (enumeration of type string)DescriptionThe display category type for the visualization field.Values are:ContinuousDiscrete |
| fieldKey | Field TypestringDescriptionRequired.The key for the field. |
| fieldName | Field TypestringDescriptionThe name of the field. |
| function | Field TypeVisualizationFieldFunctionType (enumeration of type string)DescriptionThe function type of the visualization field.Values are:AvgCountCountDDatePartDayDatePartMonthDatePartQuarterDatePartWeekDatePartWeekDayDatePartYearDateTruncDayDateTruncMonthDateTruncQuarterDateTruncWeekDateTruncYearFiscalDatePartMonthFiscalDatePartQuarterFiscalDatePartWeekFiscalDatePartYearFiscalDateTruncMonthFiscalDateTruncQuarterFiscalDateTruncWeekFiscalDateTruncYearMaxMdyMedianMinMyStdevStdevpSumUserAggVarVarp |
| hierarchyName | Field TypestringDescriptionThe hierarchy name for the field. |
| label | Field TypestringDescriptionThe label for the field. |
| objectName | Field TypestringDescriptionThe name of the data source object for the field. |
| quickTableCalc | Field TypestringDescriptionThe expression to do a quick table calculation with. |
| role | Field TypeVisualizationFieldRoleType (enumeration of type string)DescriptionThe role type of the visualization field.Values are:DimensionMeasure |
| type | Field TypeVisualizationFieldType (enumeration of type string)DescriptionThe type of the visualization field.Values are:FieldMeasureNamesMeasureValues |

## AnalyticsVizViewDef

Represents a view definition for a Tableau Next visualization.

| Field Name | Description |
| --- | --- |
| analyticsVizVersion | Field TypestringDescriptionThe version of the visualization the view is associated with. |
| fullName | Field TypestringDescriptionRequired.The full name of the view definition. |
| isOriginal | Field TypebooleanDescriptionRequired.Indicates whether the view is original (true) or not (false). |
| masterLabel | Field TypestringDescriptionRequired.The name of the view definition. |
| version | Field TypedoubleDescriptionThe API version of the visualization view. |
| viewSpecification | Field TypestringDescriptionThe specification for the view definition. |

## Declarative Metadata Sample Definition

The following is an example of an AnalyticsVisualization component.

```

```

The following is an example package.xml that references the metadata definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").