---
title: "DescribeLayoutResult"
domain: api
topic: describelayoutresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.100Z
estimatedTokens: 6911
keywords: [DescribeLayoutResult, describeLayout, call, containing, top-level, record, passed-in, sObjectType, well, mapping, layouts, client, application, traverse, retrieve]
---

# DescribeLayoutResult

> The describeLayout() call returns a
    DescribeLayoutResult object containing top-level record type information about the passed-in
      sObjectType, as well as a mapping of record types to layouts. Your
    client application can traverse this object to retrieve detailed metadata about the
    layout.

# DescribeLayoutResult

The describeLayout() call returns a DescribeLayoutResult object containing top-level record type information about the passed-in sObjectType, as well as a mapping of record types to layouts. Your client application can traverse this object to retrieve detailed metadata about the layout.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api)

#### Tip

If you have actions in the publisher enabled in your organization, you can retrieve the layout definition for a global publisher layout by using Global as the sObjectType and null as the recordTypeId.

A DescribeLayoutResult object has these fields.

| Name | Type | Description |
| --- | --- | --- |
| feedView | DescribeLayoutFeedView[] | Feed view related layout data for a feed-based layout. This field is null for page layouts that aren’t feed-based. |
| layouts | DescribeLayout[] | Layouts associated with the specified sObjectType. In general, there’s a one-to-one correspondence between layouts and objects. However, in some cases, an object has multiple layouts in the context of a given user profile. |
| recordTypeMappings | RecordTypeMapping[] | Record type mappings available for the user. The objects on a user profile can have multiple record types. All record types are returned, not just those record types available to the calling user. Returning all record types lets the client application display a layout appropriate for a given user profile. For example, suppose User A owns a record, and this record has record type X set. If User B tries to view this record, then the client application can display the record using the layout associated with this record type for User B's profile (even if the record type isn’t available for the user). |
| recordTypeSelectorRequired | boolean | If true, a record type selector page is required; if false, use the default record type. |

## DescribeLayout

Represents a specific layout for the specified sObjectType. Each DescribeLayout is referenced by its unique layout ID and consists of two types of views (represented in this object as arrays of DescribeLayoutSection):

-   Detail view—Read-only display of the object. In a detail layout, certain pieces of information (such as address details) can be aggregated into a single DescribeLayoutItem.
-   Edit view—Editable display of the object. In an edit layout, individual pieces of information (such as an address) are broken up into separate fields.

An individual DescribeLayout consists of these fields.

| Name | Type | Description |
| --- | --- | --- |
| buttonLayoutSection | DescribeLayoutButtonSection[] | Standard and custom button sections associated with the specified layout. |
| detailLayoutSections | DescribeLayoutSection[] | Layout sections for the detail view. |
| editLayoutSections | DescribeLayoutSection[] | Layout sections for the edit view. |
| highlightsPanelLayoutSection | DescribeLayoutSection[] | Layout sections for the highlights panel view. |
| multirowEditLayoutSections | DescribeLayoutSection[] | Layout sections for the multiline layout view. This field is available in API version 35.0 and later. |
| id | ID | Unique ID of this layout. For information on IDs, see ID Field Type. |
| quickActionList | DescribeQuickActionListResult | List of actions associated with the specified layout. This field is available in API version 28.0 and later. |
| relatedContent | RelatedContent | Mobile Cards section associated with the specified layout. This field is available in API version 29.0 and later. |
| relatedLists | RelatedList[] | Related lists associated with the specified layout. |
| saveOptions | DescribeLayoutSaveOption[] | List of save options for the layout. |

## DescribeLayoutButtonSection

Represents one of two sections of the layout containing either standard or custom buttons.

| Name | Type | Description |
| --- | --- | --- |
| detailButtons | DescribeLayoutButton[] | Standard or custom buttons associated with the specified button section. |

## DescribeLayoutButton

Represents a single standard button, custom button, or custom link in a [DescribeLayout](#describeLayout).

| Name | Type | Description |
| --- | --- | --- |
| behavior | WebLinkWindowType | What the button or link does when clicked, such as execute JavaScript or open its content source in a new window.This field is available in API version 31.0 and later. |
| colors | DescribeColor[] | Array of color information for icons associated with this button or link. Each color is associated with a theme.This field is available in API version 32.0 and later. |
| content | string | The API name of the Visualforce page or s-control being delivered.This field is available in API version 31.0 and later. |
| contentSource | WebLinkType | The content source of the custom button or link. The contentSource for a standard button that hasn't been overridden is null.This field is available in API version 31.0 and later. |
| custom | boolean | Required. Indicates whether it's a custom button or link (true) or not (false). |
| encoding | string | The type of encoding assigned to the URL called by the button or link. Valid values are:UTF-8—Unicode (UTF-8)ISO-8859-1—General US & Western Europe (ISO-8859–1, ISO-LATIN-1)Shift_JIS—Japanese (Shift-JIS)ISO-2022-JP—Japanese (JIS)EUC-JP—Japanese (EUC-JP)x-SJIS_0213—Japanese (Shift-JIS_2004)ks_c_5601-1987—Korean (ks_c_5601-1987)Big5—Traditional Chinese (Big5)GB2312—Simplified Chinese (GB2312)Big5-HKSCS—Traditional Chinese Hong Kong (Big5–HKSCS)This field is available in API version 31.0 and later. |
| height | int | The height (in pixels) when a button or link's behavior field value is set to newWindow, sidebar, or noSidebar.This field is available in API version 31.0 and later. |
| icons | DescribeIcon[] | Array of icons for this button or link. Each icon is associated with a theme. This field is available in API version 29.0 and later. |
| label | string | Label for the button or link displayed in the Salesforce user interface. |
| menubar | boolean | Indicates whether the menu bar displays (true) or not (false) when a button or link's behavior field value is set to newWindow.This field is available in API version 31.0 and later. |
| name | string | API name of the button or link. |
| overridden | boolean | Required. Indicates whether a standard button has been overridden (true) or not (false).This field is available in API version 31.0 and later. |
| resizeable | boolean | Indicates whether the new window is resizeable (true) or not (false) when a button or link's behavior field value is set to newWindow.This field is available in API version 31.0 and later. |
| scrollbars | boolean | Indicates whether scrollbars display (true) or not (false) when a button or link's behavior field value is set to newWindow.This field is available in API version 31.0 and later. |
| showsLocation | boolean | Indicates whether the address bar displays (true) or not (false) when a button or link's behavior field value is set to newWindow.This field is available in API version 31.0 and later. |
| showsStatus | boolean | Indicates whether the status bar displays (true) or not (false) when a button or link's behavior field value is set to newWindow.This field is available in API version 31.0 and later. |
| toolbar | boolean | Indicates whether the toolbars display (true) or not (false) when a button or link's behavior field value is set to newWindow.This field is available in API version 31.0 and later. |
| url | string | The URL called by the button or link. This field is null for standard buttons in a related list.This field is available in API version 31.0 and later. |
| width | int | The width (in pixels) when a button or link's behavior field value is set to newWindow.This field is available in API version 31.0 and later. |
| windowPosition | WebLinkPosition | Indicates the window position when a button or link's behavior field value is set to newWindow.This field is available in API version 31.0 and later. |

## DescribeLayoutComponent

Represents the smallest unit in a layout—a field or a separator. To reference a field for display, a client application uses the following notation to reference a field in the [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") call: LayoutComponent.*fieldName*.

In API version 31.0 and later, DescribeLayoutComponent is extended with [FieldLayoutComponent](#fieldLayoutComponent) if both the [LayoutComponentType](#layoutComponentType) value is Field, and the field being described is either the compound field Address or the compound field Person Name.

| Name | Type | Description |
| --- | --- | --- |
| displayLines | int | The number of vertical lines displayed for a field in the edit view. Applies to textarea and multi-select picklist fields. |
| tabOrder | int | Indicates the tab order for the item in the row. |
| type | LayoutComponentType | The LayoutComponentType for this LayoutComponent. |
| value | string | Value of this LayoutComponent. The name of the field if the LayoutComponentType value is Field. The API name of the canvas app if the LayoutComponentType value is Canvas. |

## DescribeLayoutFeedFilter

Represents an individual feed filter option that you can use to filter the feed.

| Name | Type | Description |
| --- | --- | --- |
| label | string | The label of the filter. |
| name | string | The API name of the filter. |
| type | FeedLayoutFilterType enum | Standard feed filter types:AllUpdatesFeedItemType |

## DescribeLayoutFeedView

Represents the layout of the feed view for a feed-based page layout.

| Name | Type | Description |
| --- | --- | --- |
| feedFilters | DescribeLayoutFeedFilter[] | Lists the feed filter options that are displayed with the feed. |

## DescribeLayoutItem

Represents an individual item in a [DescribeLayoutRow](#describeLayoutRow). A DescribeLayoutItem consists of a set of components ([DescribeLayoutComponent](#describeLayoutComponent)), each of which is either a field or a separator. For most fields on a layout, there’s only one component per layout item. However, in a display-only view, the DescribeLayoutItem can be a composite of the individual fields (for example, an address can consist of street, city, state, country, and postal code data). On the corresponding edit view, each component of the address field would be split up into separate DescribeLayoutItems.

| Name | Type | Description |
| --- | --- | --- |
| editable | boolean | Indicates whether this DescribeLayoutItem can be edited (true) or not (false). This field is available in API version 30.0 and below. It was replaced by the editableForNew and editableForUpdate fields in API version 31.0. |
| editableForNew | boolean | Indicates whether a new DescribeLayoutItem can be edited when creating a record (true) or not (false).This field is available in API version 31.0 and later. |
| editableForUpdate | boolean | Indicates whether an existing DescribeLayoutItem can be edited when editing a record (true) or not (false).This field is available in API version 31.0 and later. |
| label | string | Label text for this DescribeLayoutItem. |
| layoutComponents | DescribeLayoutComponent[] | DescribeLayoutComponent for this DescribeLayoutItem. |
| placeholder | boolean | Indicates whether this DescribeLayoutItem is a placeholder (true) or not (false). If true, then this DescribeLayoutItem is blank. |
| required | boolean | Indicates whether this DescribeLayoutItem is required (true) or not (false). Useful to know if, for example, you wanted to render required fields in a contrasting color (such as red). |
| uiBehavior | string | Indicates the DescribeLayoutItem behavior on the specified layout. The value doesn't reflect user-level or profile-level access. Available values are:Edit—The layout field can be edited but isn’t required.Required—The layout field can be edited and is required.Readonly—The layout field is read-only.This field applies only to page layouts and mini layouts. For other types of layouts such as compact layouts or quick action layouts, this field is null. |

## DescribeLayoutRow

Represents a row in a [DescribeLayoutSection](#describeLayoutSection). A DescribeLayoutRow consists of one or more [DescribeLayoutItem](#describeLayoutItem) objects. For each DescribeLayoutRow, a DescribeLayoutItem refers either to a specific field or to an “empty” DescribeLayoutItem (a DescribeLayoutItem that contains no [DescribeLayoutComponent](#describeLayoutComponent) objects). An empty DescribeLayoutItem can be returned when a given DescribeLayoutRow is sparse (for example, containing more fields on the right column than on the left column). Where there are gaps in the layout, an empty DescribeLayoutItem is returned as a placeholder.

| Name | Type | Description |
| --- | --- | --- |
| layoutItems | DescribeLayoutItem[] | Refers to either a specific field or to an empty LayoutItem (a LayoutItem that contains no DescribeLayoutComponent objects). |
| numItems | int | Number of layoutItems. This information is redundant but, due to a bug in a popular SOAP toolkit, was required to avoid serialization problems. |

## DescribeLayoutSection

Represents a section of a [DescribeLayout](#describeLayout) and consists of one or more columns and one or more rows (an array of [DescribeLayoutRow](#describeLayoutRow)).

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

## DescribeQuickActionListResult

Represents a list of actions assigned to the page layout. Available in API version 28.0 and later.

| Name | Type | Description |
| --- | --- | --- |
| quickActionListItems | DescribeQuickActionListResult[] | Array of zero or more QuickActionListItemResult objects. |

## DescribeQuickActionListItemResult

Represents a QuickAction assigned to the actions list for a page layout. Available in API version 28.0 and later.

| Name | Type | Description |
| --- | --- | --- |
| colors | DescribeColor[] | Array of color information. Each color is associated with a theme. This field is available in API version 29.0 and later. |
| iconUrl | string | The URL of the icon associated with the action. This icon URL corresponds to the 32x32 icon used for the current Salesforce theme, introduced in Spring ‘10. |
| icons | DescribeIcon[] | Array of icons for this action. Each icon is associated with a theme. This field is available in API version 29.0 and later. |
| label | string | The label of the action. |
| miniIconUrl | string | The URL of the mini-icon associated with the action. This icon URL corresponds to the 16x16 icon used for the current Salesforce theme, introduced in Spring ‘10. |
| quickActionName | string | The API name of the action. |
| targetSobjectType | string | The API name of the action's target object. |
| type | string | The QuickActionType of the action. Valid values are:CreateVisualforcePage |

## CustomLinkComponent

When the [LayoutComponentType](#layoutComponentType) value is CustomLink, this type contains information about a single custom link on the page layout.

| Name | Type | Description |
| --- | --- | --- |
| customLink | DescribeLayoutButton | A single LayoutComponent object of type CustomLink. |

## FieldLayoutComponent

Extends the information returned by describeLayoutComponent. When the [LayoutComponentType](#layoutComponentType) value is Field, and the field being described is an Address or Person Name field, FieldLayoutComponent includes information about the field's components. When the [LayoutComponentType](#layoutComponentType) value is Field, and the field being described is a compound field, such as Address or Person Name, FieldLayoutComponent includes information about its components.

Available in API version 31.0 and later.

| Name | Type | Description |
| --- | --- | --- |
| components | describeLayoutComponent[] | Array of zero or more LayoutComponent objects of type Field. |
| fieldType | FieldType | The field type. |

## Sample Code for Usage of FieldLayoutComponent

```

```

## LayoutComponentType

Represents the type for a [DescribeLayoutComponent](#describeLayoutComponent). Contains one of these values:

-   AnalyticsCloud—A CRM Analytics dashboard on the page layout. Available in API version 34.0 and later.
-   Canvas—A canvas component on the page layout. This layout component type is available in API version 31.0 and later.
-   CustomLink—A custom link on the page layout.
-   EmptySpace—A blank space on the page layout.
-   ExpandedLookup—An Expanded Lookup component in the Mobile Cards section of the page layout.
-   Field—Field name. A mapping to the [RecordTypeInfo](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm#recordTypeInfo) field on the [describeSObjectResult](atlas.en-us.api.meta/api/sforce_api_calls_describesobject_result.htm "The describeSObject() call returns a DescribeSObjectResult object.").
-   ReportChart—A report chart on the page layout.
-   SControl—Reserved for future use.
-   Separator—Separator character, such as a semicolon (:) or slash (/).
-   VisualforcePage—A Visualforce component on the page layout.

## PicklistForRecordType

Represents a single record type picklist in a [RecordTypeMapping](#recordTypeMapping). The picklistName matches up with the name attribute of each field in the fields array in [describeSObjectResult](atlas.en-us.api.meta/api/sforce_api_calls_describesobject_result.htm "The describeSObject() call returns a DescribeSObjectResult object."). The picklistValues are the set of acceptable values for the recordType.

| Name | Type | Description |
| --- | --- | --- |
| picklistName | string | Name of the picklist. |
| picklistValues | PicklistEntry[] | Set of picklist values associated with the recordTypeIds in the RecordTypeMapping.Note: If you retrieve picklistValues, the PicklistEntry value is null. If you need the PicklistEntry value, get it from the PicklistEntry object obtained from the Field object associated with the DescribeSObjectResult. |

## RecordTypeMapping

Represents a single record type mapping in the recordTypeMappings field in a DescribeLayoutResult object. This object is a map of valid recordTypeIds to layoutId. For displaying a detail view, a client application uses this mapping to determine which layout is associated with the record type on the record. For displaying an edit view, a client application uses this mapping to determine which layout to use (and possibly to allow the user to choose between multiple record types); it also determines the set of available picklist values.

| Name | Type | Description |
| --- | --- | --- |
| available | boolean | Indicates whether this record type is available (true) or not (false). Availability is used to display a list of available record types to the user when they’re creating a record. |
| defaultRecordTypeMapping | boolean | Indicates whether it's the default record type mapping (true) or not (false). |
| layoutId | ID | ID of the layout associated with this record type. |
| name | string | Name of this record type. |
| picklistsForRecordType | PicklistForRecordType[] | Record type picklists mapped to the recordTypeIds. |
| recordTypeId | ID | ID of this record type. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Some fields previously in this result have moved to [RecordTypeInfo](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm#recordTypeInfo).

## RelatedContent

Represents the Mobile Cards section in a [DescribeLayout](#describeLayout). Available in API version 29.0 and later.

| Name | Type | Description |
| --- | --- | --- |
| relatedContentItems | DescribeRelatedContentItem[] | An array of items in the Mobile Cards section of the page layout. |

## DescribeRelatedContentItem

Represents an individual item in the [DescribeRelatedContentItem](#describeRelatedContentItem) list. Available in API version 29.0 and later.

| Name | Type | Description |
| --- | --- | --- |
| describeLayoutItem | DescribeLayoutItem | An individual layout item in the Mobile Cards section. Item must be wrapped in a DescribeRelatedContentItem to be added to the Mobile Cards section. |

## RelatedList

Represents a single related list in a DescribeLayoutResult.

| Name | Type | Description |
| --- | --- | --- |
| buttons | DescribeLayoutButton[] | Buttons associated with this related list. This field is available in API version 32.0 and later. |
| columns | RelatedListColumn[] | Columns associated with this related list.You can pair this value with Field to achieve a number of useful tasks, including determining whether the field is:A name field, in order to present a link to the detailSortable, (to allow the user to include it in an ORDER BY clause to sort the rows by the given columnA currency field, to include the currency symbol or code |
| custom | boolean | If true, this related list is custom. |
| field | string | Name of the field on the related (associated) object that establishes the relationship with the associating object. For example, for the Contact related list on Account, the value is AccountId. |
| label | string | Label for the related list, displayed in the Salesforce user interface. |
| limitRows | int | Number of rows to display. |
| name | string | Name of the ChildRelationship in the DescribeSObjectResult for the sObjectType that was provided as the argument to DescribeLayout. |
| sobject | string | Name of the sObjectType that is the row type for rows within this related list. |
| sort | RelatedListSort[] | If not null, the columns that are used to order the related objects. |

## RelatedListColumn

Represents a single field in a related list returned by DescribeLayoutResult.

| Name | Type | Description |
| --- | --- | --- |
| field | string | API name of the field. This value is always of the form object_type.field_name. For example, if name is Contact.Account.Owner.Alias, then this value is User.Alias. |
| fieldApiName | string | SOQL field syntax for the field in relation to the main sObject for the related list. This value is always of the form object_type.field_name. Unlike name, it doesn’t return a value in the Translate Returned SOQL Results format. |
| format | string | Display in date or dateTime format. |
| label | string | Label of the field. |
| lookupId | string | Optional SOQL field syntax to retrieve the lookup ID value for the main related list sObject. This value can be an expression that uses SOQL relationship query dot notation.For example, if the related list sObjectType is Case and the column display value is Owner.Alias, then the lookup ID value would be Owner.Id. |
| name | string | SOQL field syntax for the field in relation to the main sObject for the related list. This value can be an expression that uses SOQL relationship query dot notation, or it can use the Translate Returned SOQL Results or convertCurrency() format.For example, if the related list sObjectType is Case, then the value can be Owner.Alias, or it can be toLabel(Case.Status). |

## RelatedListSort

Represents the sorting preference for objects in the related list.

| Name | Type | Description |
| --- | --- | --- |
| column | string | Name of the field that is used to order the related objects. |
| ascending | boolean | If true, sort order is ascending. If false, descending. |

Although in most cases there’s only one RelatedListSort in the array, for some special standard related lists, there’s more than one RelatedListSort. If an array has multiple RelatedListSorts, they're ordered according to how they're included in a corresponding SOQL query. For example:

```

```

## DescribeLayoutSaveOption

Represents the save options for the layout. Save options define the behavior that occurs when objects are created or modified using the given layout. For example, for Cases and Leads, a “UseDefaultAssignmentRule” save option is exposed to control whether assignment rules are applied when Cases or Leads are created or edited.

| Name | Type | Description |
| --- | --- | --- |
| defaultValue | boolean | Default value for the save option. Controls whether the save option defaults to enabled or not in the Salesforce user interface.For example, for the “UseDefaultAssignmentRule” save option, if defaultValue is true, then by default the system triggers the default assignment rules when an Account, Case, or Lead is created or edited. If false, then the default assignment rules aren’t applied when an Account, Case, or Lead is created or edited, unless the user enables the save option in the Salesforce user interface. |
| isDisplayed | boolean | If true, then the save option is displayed in the layout. If false, then the save option isn’t displayed in the layout. |
| label | string | Label for the save option that is displayed in the Salesforce user interface. |
| name | string | API name for the save option. |
| restHeaderName | string | The corresponding REST API header for the save option. |
| soapHeaderName | string | The corresponding SOAP API header for the save option. |

## WebLinkPosition

Represents the window position for a new window opened upon clicking a [DescribeLayoutButton](#describeLayoutButton). Applies only to custom buttons. Available in API version 31.0 and later. Contains one of these values:

-   fullScreen—The new window opens in a full screen. If this option is selected, any width or height parameters set for the new window are ignored.
-   none—No window position preference is set.
-   topLeft—The new window opens, positioned at the top left of the screen.

## WebLinkType

Represents the content that the custom button delivers. Contains one of these values:

-   javascript
-   page—Visualforce page
-   sControl
-   url

## WebLinkWindowType

Represents the behavior for a [DescribeLayoutButton](#describeLayoutButton). Applies only to custom buttons. Available in API version 31.0 and later. Contains one of these values:

-   newWindow—The custom button's content opens in a new browser window.
-   noSidebar—The custom button's content displays in the existing browser window without a sidebar.
-   onClickJavaScript—Valid only when the [DescribeLayoutButton](#describeLayoutButton)'s contentSource field value is javascript. Clicking the button or link executes JavaScript.
-   replace—The custom button's content displays in the existing browser window without a sidebar or header.
-   sidebar—The custom button's content displays in the existing browser window with a sidebar.

## Code Examples

```
DescribeLayoutComponent layoutComponent = layoutComponents[n];
        // Look for a component representing the BillingAddress field
        if (layoutComponent.getType() == LayoutComponentType.Field.toString() &&
        layoutComponent.getValue().equals("BillingAddress") {
        // Cast this component as a FieldLayoutComponent
        DescribeLayoutComponent.FieldLayoutComponent addressFieldComponent =
(FieldLayoutComponent)layoutComponent;
        // At this point you can access addressFieldComponent
FieldLayoutComponent-specific methods such as getComponents() or
getFieldType()
        }
```

```
ORDER BY relatedListSort[0].getColumn() DIRECTION, relatedListSort[1].getColumn() DIRECTION
```

## Related Topics

- DescribeColor (atlas.en-us.api.meta/api/sforce_api_calls_describecolor.htm)
- DescribeIcon (atlas.en-us.api.meta/api/sforce_api_calls_describeicon.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- FieldType (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
- RecordTypeInfo (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
- describeSObjectResult (atlas.en-us.api.meta/api/sforce_api_calls_describesobject_result.htm)
- PicklistEntry (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
- DescribeSObjectResult (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
- Field (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
- ChildRelationship (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
