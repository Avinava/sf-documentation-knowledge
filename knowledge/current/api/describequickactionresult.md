---
title: "DescribeQuickActionResult"
domain: api
topic: describequickactionresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.120Z
estimatedTokens: 2801
keywords: [DescribeQuickActionResult, array, objects, DescribeQuickActionDefaultValue, DescribeLayoutSection, DescribeLayoutRow, DescribeLayoutItem, DescribeLayoutComponent, LayoutComponentType]
---

# DescribeQuickActionResult

> Returns an array of DescribeQuickActionResult objects.

# DescribeQuickActionResult

Returns an array of DescribeQuickActionResult objects.

The describeQuickActions() call returns an array of DescribeQuickActionResult objects. Each DescribeQuickActionResult object represents a quick action for a specified object.

| Name | Type | Description |
| --- | --- | --- |
| actionEnumOrId | string | The unique ID for the action. If the action doesn’t have an ID, its API name is used.This field is available in API version 35.0 and later. |
| canvasApplicationName | string | The name of your Canvas application, if you use it. |
| colors | DescribeColor[] | Array of color information. Each color is associated with a theme.This field is available in API version 29.0 and later. |
| defaultValues | DescribeQuickActionDefaultValue[] | The action’s default values. |
| height | int | The height in pixels of the action pane. |
| iconName | string | Name of icon used for the action. If a custom icon is not used, this value will not be set. |
| iconUrl | string | URL of icon used for the action. This icon URL corresponds to the 32x32 icon used for the current Salesforce theme, introduced in Spring ‘10, or the custom icon, if there is one. |
| icons | DescribeIcon[] | Array of icons. Each icon is associated with a theme.If no custom icon was associated with the quick action and the quick action creates a specific object, the icons will correspond to the icons used for the created object. For example, if the quick action creates an Account, the icon array will contain the icons used for Account.If a custom icon was associated with the quick action, the array will contain that custom icon.This field is available in API version 29.0 and later. API version 32.0 and later returns different icons than in earlier API versions. |
| label | string | Label of the action. |
| layout | DescribeLayoutSection | The section of the layout where the action resides. |
| lightningComponentBundleId | ID | If type is LightningComponent, the ID of the Lightning component bundle called by the action.This field is available in API version 38.0 and later. |
| lightningComponentBundleName | string | If type is LightningComponent, the name of the Lightning component bundle called by the action.This field is available in API version 38.0 and later. |
| miniIconUrl | string | The icon’s URL. This icon URL corresponds to the 16x16 icon used for the current Salesforce theme, introduced in Spring ’10, or the custom icon, if there is one. |
| name | string | Name of the action. |
| contextSobjectType | string | The object used for the action. Named sourceSobjectType in version 29.0 and earlier. |
| showQuickActionVfHeader | boolean | Whether or not the Visualforce quick action header and footer should be shown. If set to false, then both the header containing the quick action title and the footer containing the Save and Cancel buttons aren’t displayed. |
| targetParentField | string | The parent object type of the action. Links the target object to the parent object. For example, use Account if the target object is Contact and the parent object is Account. |
| targetRecordTypeId | ID | The record type of the target record. |
| targetSobjectType | string | The action’s target object type. |
| type | string | The action’s type. Valid values are:CanvasCreateFlow (This value is available as a Beta in API version 41.0 and later)LightningComponent (This value is available in API version 38.0 and later.)LogACallPostSendEmail (This value is available in API version 31.0 and later.)SocialPostUpdateVisualforcePage |
| visualforcePageName | string | If type is Visualforce, the page name of the associated page for the action. |
| visualforcePageUrl | string | If type is Visualforce, the URL of the associated page for the action. |
| width | int | If a custom action is created, this is the width in pixels of the action pane. |

## DescribeQuickActionDefaultValue

Represents the default values of fields to use in default layouts.

| Name | Type | Description |
| --- | --- | --- |
| defaultValue | string | The value of the auto-populated default action. |
| field | string | The field name of the action. |

## DescribeLayoutSection

Represents a section of a [DescribeLayout](atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm#describeLayout) and consists of one or more columns and one or more rows (an array of [DescribeLayoutRow](atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm#describeLayoutRow)).

| Name | Type | Description |
| --- | --- | --- |
| columns | int | Number of columns in this DescribeLayoutSection. |
| heading | string | Heading text (label) for this DescribeLayoutSection. |
| layoutRows | DescribeLayoutRow[] | Array of one or more DescribeLayoutRow objects. |
| parentLayoutId | ID | The ID of the layout upon which this DescribeLayoutSection resides.This field is available in API version 35.0 and later. |
| rows | int | Number of rows in this DescribeLayoutSection. |
| tabOrder | string | Indicates the tab order for the fields in the section in the edit view. Valid values are:LeftToRightTopToBottomThis field is available in API version 31.0 and later. |
| useCollapsibleSection | boolean | Indicates whether this DescribeLayoutSection is a collapsible section, also known as a “twistie” (true), or not (false). |
| useHeading | boolean | Indicates whether to display the heading (true) or not (false). |

## DescribeLayoutRow

Represents a row in a [DescribeLayoutSection](atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm#describeLayoutSection). A DescribeLayoutRow consists of one or more [DescribeLayoutItem](atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm#describeLayoutItem) objects. For each DescribeLayoutRow, a DescribeLayoutItem refers either to a specific field or to an “empty” DescribeLayoutItem (a DescribeLayoutItem that contains no [DescribeLayoutComponent](atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm#describeLayoutComponent) objects). An empty DescribeLayoutItem can be returned when a given DescribeLayoutRow is sparse (for example, containing more fields on the right column than on the left column). Where there are gaps in the layout, an empty DescribeLayoutItem is returned as a placeholder.

| Name | Type | Description |
| --- | --- | --- |
| layoutItems | DescribeLayoutItem[] | Refers to either a specific field or to an empty LayoutItem (a LayoutItem that contains no DescribeLayoutComponent objects). |
| numItems | int | Number of layoutItems. This information is redundant but, due to a bug in a popular SOAP toolkit, was required to avoid serialization problems. |

## DescribeLayoutItem

Represents an individual item in a [DescribeLayoutRow](atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm#describeLayoutRow). A DescribeLayoutItem consists of a set of components ([DescribeLayoutComponent](atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm#describeLayoutComponent)), each of which is either a field or a separator. For most fields on a layout, there is only one component per layout item. However, in a display-only view, the DescribeLayoutItem might be a composite of the individual fields (for example, an address can consist of street, city, state, country, and postal code data). On the corresponding edit view, each component of the address field would be split up into separate DescribeLayoutItems.

| Name | Type | Description |
| --- | --- | --- |
| editable | boolean | Indicates whether this DescribeLayoutItem can be edited (true) or not (false). This field is available in API version 30.0 and below. It was replaced by the editableForNew and editableForUpdate fields in API version 31.0. |
| editableForNew | boolean | Indicates whether a new DescribeLayoutItem can be edited when creating a new record (true) or not (false).This field is available in API version 31.0 and later. |
| editableForUpdate | boolean | Indicates whether an existing DescribeLayoutItem can be edited when editing a record (true) or not (false).This field is available in API version 31.0 and later. |
| label | string | Label text for this DescribeLayoutItem. |
| layoutComponents | DescribeLayoutComponent[] | DescribeLayoutComponent for this DescribeLayoutItem. |
| placeholder | boolean | Indicates whether this DescribeLayoutItem is a placeholder (true) or not (false). If true, then this DescribeLayoutItem is blank. |
| required | boolean | Indicates whether this DescribeLayoutItem is required (true) or not (false). This is useful to know if, for example, you wanted to render required fields in a contrasting color (such as red). |

## DescribeLayoutComponent

Represents the smallest unit in a layout—a field or a separator. To reference a field for display, a client application uses the following notation to reference a field in the [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") call: LayoutComponent.*fieldName*.

In API version 31.0 and later, DescribeLayoutComponent is extended with FieldLayoutComponent if both the [DescribeLayoutComponent](#describeLayoutComponent) value is Field, and the field being described is either the compound field Address or the compound field Person Name.

| Name | Type | Description |
| --- | --- | --- |
| displayLines | int | The number of vertical lines displayed for a field in the edit view. Applies to textarea and multi-select picklist fields. |
| tabOrder | int | Indicates the tab order for the item in the row. |
| type | LayoutComponentType | The LayoutComponentType for this LayoutComponent. |
| value | string | Value of this LayoutComponent. The name of the field if the LayoutComponentType value is Field. The API name of the canvas app if the LayoutComponentType value is Canvas. |

## LayoutComponentType

Represents the type for a [DescribeLayoutComponent](atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm#describeLayoutComponent).Contains one of these values:

-   AnalyticsCloud—A CRM Analytics dashboard on the page layout. Available in API version 34.0 and later.
-   Canvas—A canvas component on the page layout. This layout component type is available in API version 31.0 and later.
-   CustomLink—A custom link on the page layout.
-   EmptySpace—A blank space on the page layout.
-   ExpandedLookup—An Expanded Lookup component in the Mobile Cards section of the page layout.
-   Field—Field name. A mapping to the name field on the [describeSObjectResult](atlas.en-us.api.meta/api/sforce_api_calls_describesobject_result.htm "The describeSObject() call returns a DescribeSObjectResult object.").
-   ReportChart—A report chart on the page layout.
-   SControl—Reserved for future use.
-   Separator—Separator character, such as a semicolon (:) or slash (/).
-   VisualforcePage—A Visualforce component on the page layout.

## Related Topics

- DescribeColor (atlas.en-us.api.meta/api/sforce_api_calls_describecolor.htm)
- DescribeIcon (atlas.en-us.api.meta/api/sforce_api_calls_describeicon.htm)
- DescribeLayoutSection (atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm)
- DescribeLayout (atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm)
- DescribeLayoutRow (atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm)
- DescribeLayoutItem (atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm)
- DescribeLayoutComponent (atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- describeSObjectResult (atlas.en-us.api.meta/api/sforce_api_calls_describesobject_result.htm)
