---
title: "WaveXmd"
domain: metadata-api
topic: wavexmd
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:55.347Z
keywords: [WaveXmd, File, Suffix, Directory, Location, Version, Fields, WaveXmdDate, WaveXmdDimension, WaveXmdFormattingProperty, WaveXmdFormattingBin, WaveXmdFormattingPredicate, WaveXmdDimensionCustomAction, WaveXmdDimensionMember, WaveXmdRecordDisplayLookup, WaveXmdDimensionSalesforceAction, WaveXmdMeasure, WaveXmdOrganization, Declarative, Metadata]
---

# WaveXmd

# WaveXmd

Represents the WaveXmd object in the Analytics application. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

WaveXmd components have the suffix .xmd and are stored in the wave folder.

## Version

WaveXmd components are available in API version 39.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| application | string | The name of the Analytics application the XMD is associated with. Available in API version 43.0 and later. |
| dataset | string | Required. Specifies the dataset associated with this XMD. |
| datasetConnector | string | The name of the connector source for the dataset. |
| datasetFullyQualifiedName | string | Specifies the fully qualified name of the dataset version associated with this XMD. |
| dates | WaveXmdDate | List of dates, with formatting information. |
| dimensions | WaveXmdDimension | List of dimensions, with formatting information. |
| measures | WaveXmdMeasure | List of measures, with formatting information. |
| organizations | WaveXmdOrganization | List of organizations, for multi-organization support. |
| origin | string | The origin of the dataset version. |
| type | string | The XMD type. Valid values are:SystemUserMainAssetAvailable in API version 43.0 and later. |
| waveVisualization | string | The visualization behavior for Analytics assets. Valid values are:dashboardlensAvailable in API version 43.0 and later. |

## WaveXmdDate

WaveXmdDate represents a date.

| Field | Field Type | Description |
| --- | --- | --- |
| alias | string | Required. Alias of the Date column. |
| compact | boolean | Indicates whether the date is displayed in compact form (true) or not (false). |
| dateFieldDay | string | The day field. |
| dateFieldEpochDay | string | The epoch day field. |
| dateFieldEpochSecond | string | The epoch second field. |
| dateFieldFiscalMonth | string | The fiscal month field. |
| dateFieldFiscalQuarter | string | The fiscal quarter field. |
| dateFieldFiscalWeek | string | The fiscal week field. |
| dateFieldFiscalYear | string | The fiscal year field. |
| dateFieldFullYear | string | The full year field. |
| dateFieldHour | string | The hour field. |
| dateFieldMinute | string | The minute field. |
| dateFieldMonth | string | The month field. |
| dateFieldQuarter | string | The quarter field. |
| dateFieldSecond | string | The second field. |
| dateFieldWeek | string | The week field. |
| dateFieldYear | string | The year field. |
| description | string | The description of the date column. |
| firstDayOfWeek | int | Required. Represents the first day of the week. |
| fiscalMonthOffset | int | Required. Offset number of months for the fiscal year in relation to the calendar year. |
| isYearEndFiscalYear | boolean | Indicates whether the year end is the fiscal year (true) or not (false). |
| label | string | The label of the date column. |
| showInExplorer | boolean | Indicates whether the date is displayed in the explorer (true) or not (false). |
| sortIndex | int | Required. The index value the system assigns to indicate where the item appears in a list. |
| type | string | Required. The type of date. Valid values are:Date—A legacy date type. Available when the time zone isn’t enabled.DateOnly—A date type without an associated time. Available when the time zone is enabled.DateTime—A date type that contains both date and time parts. Available when the time zone is enabled. |

## WaveXmdDimension

WaveXmdDimension represents a dimension.

| Field | Field Type | Description |
| --- | --- | --- |
| conditionalFormatting | WaveXmdFormattingProperty | The conditional formatting property for the dimension. Available in API version 43.0 and later. |
| customActions | WaveXmdDimensionCustomAction | Custom actions linked to this dimension. |
| customActionsEnabled | boolean | Indicates whether the dimension has custom actions enabled (true) or not (false). |
| dateFormat | string | The format used for a date that is a dimension. |
| defaultAction | string | The default action assigned to a dimension. An action for a dimension can be openSfdcRecord, openActionsMenu, none, or a valid API name with dot notation like Global.LogACall or FeedItem.Post. |
| description | string | The description of the dimension. |
| field | string | Required. The field name of the dimension (used in queries). |
| fullyQualifiedName | string | The fully qualified name of the dimension. |
| imageTemplate | string | The image template. |
| isDerived | boolean | Required. Indicates whether the dimension is derived (true) or not (false). |
| isMultiValue | boolean | Indicates whether the dimension is multi-value (true) or not (false). |
| label | string | The label for the dimension. |
| linkTemplate | string | The template for formatting a link. |
| linkTemplateEnabled | boolean | Indicates whether the dimension has link templates enabled (true) or not (false). |
| linkTooltip | string | The tooltip to be displayed for links. |
| members | WaveXmdDimensionMember | The member overrides for a dimension. |
| origin | string | The origin of this dimension. |
| recordDisplayFields | WaveXmdRecordDisplayLookup | Ordered list of dimensions. The list defines the default order in which to display the dimensions in the user interface. |
| recordIdField | string | The record ID for this dimension. |
| recordOrganizationIdField | string | The record organization ID for this dimension. |
| salesforceActions | WaveXmdDimensionSalesforceAction | Salesforce actions linked to this dimension. |
| salesforceActionsEnabled | boolean | Indicates whether the dimension has Salesforce actions enabled (true) or not (false). |
| showDetailsDefaultFieldIndex | int | Default order in which to show the dimensions in the user interface. |
| showInExplorer | boolean | Indicates whether the dimension is displayed in the explorer (true) or not (false). |
| sortIndex | int | Required. The index value the system assigns to indicate where the item appears in a list. |

## WaveXmdFormattingProperty

WaveXmdFormattingProperty represents an XMD formatting property for conditional formatting.

| Field | Field Type | Description |
| --- | --- | --- |
| formattingBins | WaveXmdFormattingBin | The formatting bins for this property. |
| formattingPredicates | WaveXmdFormattingPredicate | The formatting predicates for this property. |
| property | string | Required. The property name. |
| referenceField | string | Required. The reference field for this property. |
| sortIndex | int | Required. The index value the system assigns to indicate where the item appears in a list. |
| type | string | Required. The property type. |

## WaveXmdFormattingBin

WaveXmdFormatttingBin represents an XMD formatting bin for conditional formatting.

| Field | Field Type | Description |
| --- | --- | --- |
| bin | string | Required. The formatting bin. |
| formatValue | string | Required. The format value for the bin. |
| label | string | Required. The label for the bin. |
| sortIndex | int | Required. The index value the system assigns to indicate where the item appears in a list. |

## WaveXmdFormattingPredicate

WaveXmdFormattingPredicate represents an XMD formatting predicate for conditional formatting.

| Field | Field Type | Description |
| --- | --- | --- |
| formatValue | string | Required. The format value for the predicate. |
| operator | string | Required. The operator for the predicate. |
| sortIndex | int | Required. The index value the system assigns to indicate where the item appears in a list. |
| value | string | Required. The value for the predicate. |

## WaveXmdDimensionCustomAction

WaveXmdDimensionCustomAction represents a custom action in a dimension.

| Field | Field Type | Description |
| --- | --- | --- |
| customActionName | string | Required. The name of this custom action. |
| enabled | boolean | Required. Indicates whether the action is enabled for a specific dimension (true) or not (false). |
| icon | string | The icon for the action. |
| method | string | The method for the action. |
| sortIndex | int | Required. The index value the system assigns to indicate where the item appears in a list. |
| target | string | The target for the action. |
| tooltip | string | The tooltip for the action. |
| url | string | The URL for the action. |

## WaveXmdDimensionMember

WaveXmdDimensionMember represents a dimension.

| Field | Field Type | Description |
| --- | --- | --- |
| color | string | The color for the member. |
| label | string | The label for the member.NoteMulti-line text isn't supported |
| member | string | Required. The member value. |
| sortIndex | int | Required. The index value the system assigns to indicate where the item appears in a list. |

## WaveXmdRecordDisplayLookup

WaveXmdDimensionRecordDisplayLookup represents a record display field.

| Field | Field Type | Description |
| --- | --- | --- |
| recordDisplayField | string | Required. The field to display. |
| sortIndex | int | Required. The index value the system assigns to indicate where the item appears in a list. |

## WaveXmdDimensionSalesforceAction

WaveXmdDimensionSalesforceAction represents an action in a dimension.

| Field | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether the action is enabled for a specific dimension (true) or not (false). |
| salesforceActionName | string | Required. The name of the action. |
| sortIndex | int | Required. The index value the system assigns to indicate where the item appears in a list. |

## WaveXmdMeasure

WaveXmdMeasure represents a measure.

| Field | Field Type | Description |
| --- | --- | --- |
| conditionalFormatting | WaveXmdFormattingProperty | The conditional formatting for the measure. Available in API version 43.0 and later. |
| currencies | WaveXmdMeasure[] | The list of currency formats for multiple currencies. Use this field to set the format for each currency used in the dataset. |
| currencyCode | String | The default currency code for the dataset. |
| dateFormat | string | The format used for a date that is a measure. |
| description | string | The description of the measure. |
| field | string | Required. The field name of the measure (used in queries). |
| formatCustomFormat | string | The original (XMD 1.1) format array as a single string. |
| formatDecimalDigits | int | The number of digits displayed after the decimal place. |
| formatDecimalSeparator | string | The custom separator for the decimal place. Available in API version 48.0 and later. |
| formatIsNegativeParens | boolean | Indicates whether to display negative numbers with parentheses, rather than a minus sign (true) or not (false). |
| formatPrefix | string | The prefix placed before the field value. |
| formatSuffix | string | The suffix placed after the field value. |
| formatThousandsSeparator | string | The custom separator for the thousands place. Available in API version 48.0 and later. |
| formatUnit | string | The unit string for the measure. For example, 'cm'. |
| formatUnitMultiplier | double | The multiplier for the unit. |
| fullyQualifiedName | string | The fully qualified name of the measure. |
| isDerived | boolean | Required. Indicates whether the measure is derived (true) or not (false). |
| isMultiCurrency | boolean | Indicates whether multiple currencies are available for this dataset (true) or not (false). |
| label | string | The label for the measure. |
| origin | string | The origin of the measure. |
| showDetailsDefaultFieldIndex | int | Default order in which to show the measures in the user interface. |
| showInExplorer | boolean | Indicates whether the measure is displayed in the explorer (true) or not (false). |
| sortIndex | int | Required. The index value the system assigns to indicate where the item appears in a list. |

## WaveXmdOrganization

WaveXmdOrganization represents a Salesforce organization.

| Field | Field Type | Description |
| --- | --- | --- |
| instanceUrl | string | Required. The instance URL for the organization. |
| label | string | Required. The label for the organization. |
| organizationIdentifier | string | Required. The ID of the organization. |
| sortIndex | int | Required. The index value the system assigns to indicate where the item appears in a list. |

## Declarative Metadata Sample Definition

The following is an example of a WaveXmd component for an Asset XMD belonging to a dashboard.

```

```