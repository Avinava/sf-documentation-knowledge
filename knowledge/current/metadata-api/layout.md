---
title: "Layout"
domain: metadata-api
topic: layout
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:40.271Z
estimatedTokens: 8860
keywords: [Layout, metadata, associated, Layouts, Salesforce, Help, File, Suffix, Directory, Location, Version, CustomConsoleComponents, PrimaryTabComponents, ConsoleComponent, Container]
---

# Layout

> Represents the metadata associated with a page layout.
        For more information, see Page Layouts in Salesforce Help.

# Layout

Represents the metadata associated with a page layout. For more information, see Page Layouts in Salesforce Help.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

To edit the Ideas layout, specify it by name in the package.xml file. In package.xml, use this code to retrieve the Ideas layout. In the <members> tag, specify the object name (Idea) and then the layout name (Idea Layout), separated by a hyphen.

```

```

## File Suffix and Directory Location

Layouts are stored in the layouts directory of the corresponding package directory. The extension is .layout.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Retrieving a component of this metadata type in a project makes the component appear in any Profile and PermissionSet components that are retrieved in the same package.

## Version

Layouts are available in API version 13.0 and later.

## Fields

This metadata type represents the valid values that define a page layout.

| Field Name | Field Type | Description |
| --- | --- | --- |
| customButtons | string[] | The custom buttons for this layout. Each button is a reference to a WebLink on the same object. For example, a ButtonLink refers to a Weblink on the same standard or custom object named ButtonLink. |
| customConsoleComponents | CustomConsoleComponents | Represents custom console components (Visualforce pages, lookup fields, or related lists; Canvas apps not available) on a page layout. Custom console components only display in the Salesforce console. |
| emailDefault | boolean | Only relevant if showEmailCheckbox is set; indicates the default value of that checkbox. |
| excludeButtons | string[] | List of standard buttons to exclude from this layout. For example, <excludeButtons>Delete</excludeButtons> excludes the Delete button from this layout. |
| feedLayout | FeedLayout | Represents the values that define the feed view of a feed-based page layout. Feed-based layouts are available on Account, Case, Contact, Lead, Opportunity, custom, and external objects. They include a feed view and a detail view. |
| headers | LayoutHeader[] (enumeration of type string) | Layout headers are currently only used for tagging, and only appear in the UI if tagging is enabled. Valid string values are:PersonalTagging—tag is private to user.PublicTagging—tag is viewable any other user who can access the record. |
| layoutSections | LayoutSection[] | The main sections of the layout containing fields, s-controls, and custom links. The order here determines the layout order. |
| miniLayout | MiniLayout | A mini layout is used in the mini view of a record in the Console tab, hover details, and event overlays. |
| multilineLayoutFields | string[] | Fields for the special multiline layout fields that appear in OpportunityProduct layouts. These fields are otherwise similar to miniLayoutFields. |
| platformActionList | PlatformActionList | The list of actions and their order that appear in the Salesforce mobile app action bar for the layout.This field is available in API version 34.0 and later. |
| quickActionList | QuickActionList | The list of quick actions that display in the full Salesforce site for the page layout. This field is available in API version 28.0 and later. |
| relatedContent | RelatedContent | The Related Content section of the page layout. This field is available in API version 29.0 and later. |
| relatedLists | RelatedListItem[] | The related lists for the layout, listed in the order they appear in the user interface. |
| relatedObjects | string[] | The list of related objects that appears in the mini view of the console. In database terms, these objects are foreign key fields on the object for the layout. For more information, see Choose Related Objects for the Agent Console’s Mini View in Salesforce Help. |
| runAssignmentRulesDefault | boolean | Only relevant if showRunAssignmentRulesCheckbox is set; indicates the default value of that checkbox. |
| showEmailCheckbox | boolean | Only allowed on Case, CaseClose, and Task layouts. If set, a checkbox appears to show email. |
| showHighlightsPanel | boolean | If set, the highlights panel displays on pages in the Salesforce console. This field is available in API version 22.0 and later. |
| showInteractionLogPanel | boolean | If set, the interaction log displays on pages in the Salesforce console. This field is available in API version 22.0 and later. |
| showKnowledgeComponent | boolean | Only allowed on Case layouts. If set, the Knowledge sidebar displays on cases in the Salesforce console. This field is available in API version 20.0 and later. |
| showRunAssignmentRulesCheckbox | boolean | Only allowed on Case, Lead, and Account objects. If set, a checkbox appears on the page to show assignment rules. |
| showSolutionSection | boolean | Only allowed on CaseClose layout. If set, the built-in solution information section shows up on the page. |
| showSubmitAndAttachButton | boolean | Only allowed on Case layout. If set, the Submit & Add Attachment button displays on case edit pages to portal users in the Customer Portal. |
| summaryLayout | SummaryLayout | Controls the appearance of the highlights panel in Salesforce Classic, which summarizes key fields in a grid at the top of a page layout, when Case Feed is enabled. This field is available in API version 18.0 and later. |

## CustomConsoleComponents

Represents custom console components (Visualforce pages, lookup fields, or related lists; Canvas apps not available) on a page layout. Custom console components only appear in the Salesforce console. Available in API version 25.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| primaryTabComponents | PrimaryTabComponents | Represents custom console components on primary tabs in the Salesforce console. Available in API version 25.0 and later. |
| subtabComponents | SubtabComponents | Represents custom console components on subtabs in the Salesforce console. Available in API version 25.0 and later. |

## PrimaryTabComponents

Represents custom console components on primary tabs in the Salesforce console. Available in API version 25.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| component | ConsoleComponent[] | Represents a custom console component (Visualforce page, lookup field, or related lists; Canvas apps not available) on a section of a page layout. Custom console components only appear in the Salesforce console. This field is available in API version 29.0 and earlier. |
| containers | Container[] | Represents a location and style to display more than one custom console component on the sidebars of the Salesforce console. You can specify up to five components for each of the four locations (left, right, top, and bottom). This field is available in API version 30.0 and later. |

## ConsoleComponent

Represents a custom console component (Visualforce page, lookup field, or related lists; Canvas apps not available) on a section of a page layout. Custom console components only appear in the Salesforce console. Available in API version 25.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| height | int | Required for components with a location of top or bottom. The height of the custom console component. The value must be specified in pixels and be greater than 0 but less than 999. |
| location | string | Required. The location of the custom console component on the page layout. Valid values are right, left, top, and bottom. A component can have one location for each page layout. |
| visualforcePage | string | Required. The unique name of the custom console component. For example, ConsoleComponentPage. |
| width | int | Required for components with a location of left or right. The width of the custom console component. The value must be specified in pixels and be greater than 0 but less than 999. |

## Container

Represents a location and style to display more than one custom console component in the sidebars of the Salesforce console. For example, you can show multiple components in the right sidebar of the console with a style of either stack, tabs, or accordion. Available in API version 30.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| height | int | Required for components with a location of top or bottom. The height of the components’ container. The unit field determines the unit of measurement, in pixels or percent. |
| isContainerAutoSizeEnabled | boolean | Required. If set to true, stacked console components in the sidebars autosize vertically. Set to true by default for newly created console components. Available in API version 32.0 and later. |
| region | string | Required. The location of the components’ container. Valid values include:rightlefttopbottom |
| sidebarComponents | SidebarComponent[] | Represents a specific custom console component to display in the components’ container. |
| style | string | Required. The style of the container to display multiple components. Valid values include:stack—a content area with multiple frames.tabs—a single content area with a list of multiple panels.accordian—a collapsible content area. |
| unit | string | Required. The unit of measurement, in pixels or percent, for the height or width of the components’ container.Pixel values are simply the number of pixels, for example, 500, and must be greater than 0 but less than 999. Percentage values must include the percent sign, for example, 20%, and must be greater than 0 but less than 100. |
| width | int | Required for components with a location of right or left. The width of the components’ container. The unit field determines the unit of measurement, in pixels or percent. |

## SidebarComponent

Represents a specific custom console component to display in a container that hosts multiple components in one of the sidebars of the Salesforce console. You can specify up to five components for each of the four container locations (left, right, top, and bottom). Available in API version 30.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| componentType | string | Specifies the component type. Valid values are KnowledgeOne, Lookup, Milestones, RelatedList, Topics, Files, and CaseExperts. This field is available in API version 31.0 and later. The Files and CaseExperts values are available in API version 32.0 and later.Case Experts is available through a pilot program. |
| createAction | string | If the component is a lookup field, the name of the quick action used to create a record. This field is available in API version 42.0 and later. |
| enableLinking | boolean | If the component is a lookup field, lets users associate a record with this field. This field is available in API version 42.0 and later.If false, the createAction and updateAction can’t be retrieved. |
| height | int | Required for components with a location of top or bottom. The height of the component in the container. The unit field determines the unit of measurement, in pixels or percent. |
| label | string | The name of the component as it appears to console users. Available for components in a container with the style of tabs or accordion. |
| lookup | string | If the component is a lookup field, the name of the field. |
| page | string | If the component is a Visualforce page, the name of the Visualforce page. |
| relatedlists | RelatedList[] | If the component is a related list, the name of the list. This field is available in API version 31.0 and later. |
| unit | string | The unit of measurement, in pixels or percent, for the height or width of the component in the container.Pixel values are simply the number of pixels, for example, 500, and must be greater than 0 but less than 999. Percentage values must include the percent sign, for example, 20%, and must be greater than 0 but less than 100. |
| updateAction | string | If the component is a lookup field, the name of the quick action used to update a record. This field is available in API version 42.0 and later. |
| width | int | Required for components with a location of right or left. The width of the component in the container. The unit field determines the unit of measurement, in pixels or percent. |

## RelatedList

Represents related list custom components on the sidebars of the Salesforce console. Available in API version 31.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| hideOnDetail | boolean | If set to true, the related list is hidden from detail pages where it appears as a component to prevent duplicate information from showing. |
| name | string | The name of the component as it appears to console users. |

## SubtabComponents

Represents custom console components on subtabs in the Salesforce console. Available in API version 25.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| component | ConsoleComponent[] | Represents a custom console component (Visualforce page, lookup field, or related lists; Canvas apps not available) on a section of a page layout. Custom console components only appear in the Salesforce console. This field is available in API version 29.0 and earlier. |
| containers | Container[] | Represents a location and style to display more than one custom console component on the sidebars of the Salesforce console. You can specify up to five components for each of the four locations (left, right, top, and bottom). This field is available in API version 30.0 and later. |

## FeedLayout

Represents the values that define the feed view of a feed-based page layout. Feed-based layouts are available on Account, Case, Contact, Lead, Opportunity, custom, and external objects. They include a feed view and a detail view. Available in API version 30.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| autocollapsePublisher | boolean | Specifies whether the publisher is automatically collapsed when the page loads (true) or not (false). |
| compactFeed | boolean | Specifies whether the feed-based page layout uses a compact feed (true) or not (false). If set to true, feed items on the page are collapsed by default, and the feed view has an updated design. |
| feedFilterPosition | FeedLayoutFilterPosition (enumeration of type string) | Where the feed filters list is included in the layout. Valid values are:centerDropDown—as a dropdown list in the center column.leftFixed—as a fixed list in the left column.leftFloat—as a floating list in the left column. |
| feedFilters | FeedLayoutFilter[] | The individual filters displayed in the feed filters list. |
| fullWidthFeed | boolean | Specifies whether the feed expands horizontally to take up all available space on the page (true) or not (false). |
| hideSidebar | boolean | Specifies whether the sidebar is hidden (true) or not (false). |
| leftComponents | FeedLayoutComponent[] | The individual components displayed in the left column of the feed view. |
| rightComponents | FeedLayoutComponent[] | The individual components displayed in the right column of the feed view. |

## FeedLayoutComponent

Represents a component in the feed view of a feed-based page layout. Available in API version 30.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| componentType | FeedLayoutComponentType (enumeration of type string) | Required. The type of component. Valid values are:HelpAndToolLinks—icons that link to the help topic for the page, the page layout, and, the printable view of the page. Available only on Case layouts.CustomButtons—a custom button.Following—an icon that toggles between a Follow button (if the user viewing a record doesn’t already follow it) and a Following indicator (if the user viewing a record does follow it).Followers—a list of users who follow the record.CustomLinks—a custom link.Milestones—the milestone tracker, which lets users see the status of a milestone on a case. Available only on Case layouts.Topics—a list of topics related to the record.CaseUnifiedFiles—a list of all files that are attached to the case.Visualforce—a custom Visualforce component. |
| height | int | The height, in pixels, of the component. Doesn’t apply to standardComponents |
| page | string | The name of a Visualforce page being used as a custom component. |

## FeedLayoutFilter

Represents a feed filter option in the feed view of a feed-based page layout. A filter must have only standardFilter or feedItemType set. Available in API version 30.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| feedFilterName | string | The name of a CustomFeedFilter component. Names are prefixed with the name of the parent object. For example, Case.MyCustomFeedFilter. |
| feedFilterType | FeedLayoutFilterType (enumeration of type string) | The type of filter. Valid values are:AllUpdates—shows all feed items on a record.FeedItemType—shows feed items only for a particular type of activity on the record. |
| feedItemType | FeedItemType (enumeration of type string) | The type of feed item to display. Valid values are:ActivityEvent—feed items related to activity on tasks and events associated with a case. Available only on Case layouts.AdvancedTextPost–feed items related to group announcements posted on a feed. This value is available in API version 31.0 and later.AnnouncementPost–Not used.ApprovalPost—feed items related to approvals that are submitted on a feed.AttachArticleEvent—feed items for activity related to attaching articles to cases. Available only on Case layouts.BasicTemplateFeedItem—Not used.CallLogPost—feed items for activity from the Log a Call action. Available only on layouts for objects that support Activities (tasks and events).CanvasPost—feed items related to posts that a canvas app makes on a feed.CaseCommentPost—feed items for activity from the Case Note action. Available only on Case layouts.ChangeStatusPost—feed items for activity from the Change Status action. Available only on Case layouts.ChatTranscriptPost—feed items for activity related to attaching Chat transcripts to cases. Available only on Case layouts.CollaborationGroupCreated—feed items related to creating a public group.CollaborationGroupUnarchived—Not used.ContentPost—feed items related to attaching a file to a post.CreatedRecordEvent—feed items related to creating a record from the publisher.DashboardComponentSnapshot—feed items related to posting a dashboard snapshot on a feed.EmailMessageEvent—feed items for activity from the Email action. Available only on Case layouts.FacebookPost—Not used.LinkPost—feed items related to attaching a URL to a post.MilestoneEvent—feed items for changes to the milestone status on a case. Available only on Case layouts.PollPost—feed items related to posting a poll on a feed.ProfileSkillPost—feed items related to skills added to a user’s Chatter profile. This value is available in API version 31.0 and later.QuestionPost—feed items related to posting a question on a feed. This value is available in API version 31.0 and later.ReplyPost—feed items for activity from the Portal action. Available only on Case layouts.RypplePost—feed items related to creating a Thanks badge in WDC.SocialPost—feed items for activity on Twitter from the Social Post action.TextPost—feed items for creating a text post from the publisher.TrackedChange—feed items related to a change or group of changes to a tracked field.UserStatus—Not used. |

## MiniLayout

Represents a mini view of a record in the Console tab, hover details, and event overlays.

| Field Name | Field Type | Description |
| --- | --- | --- |
| fields | string[] | The fields for the mini-layout, listed in the order they appear in the UI. Fields that appear here must appear in the main layout. |
| relatedLists | RelatedListItem[] | The mini related list, listed in the order they appear in the UI. You can’t set sorting on mini related lists. Fields that appear here must appear in the main layout. |

## LayoutSection

LayoutSection represents a section of a page layout, such as the Custom Links section.

| Field Name | Field Type | Description |
| --- | --- | --- |
| customLabel | boolean | Indicates if this section’s label is custom or standard (built-in). Custom labels can be any text, but must be translated. Standard labels have a predefined set of valid values, for example System Information, which are automatically translated. |
| detailHeading | boolean | Controls if this section appears in the detail page. In the UI, this setting corresponds to the checkbox in the section details dialog. |
| editHeading | boolean | Controls if this section appears in the edit page. |
| label | string | The label; either standard or custom, based on the customLabel flag. |
| layoutColumns | LayoutColumn[] | The columns of the layout, depending on the style. 1, 2, or 3 columns, ordered left to right, are possible. |
| style | LayoutSectionStyle (enumeration of type string) | The style of the layout:TwoColumnsTopToBottom - Two columns, tab goes top to bottomTwoColumnsLeftToRight - Two columns, tab goes left to rightOneColumn - One columnCustomLinks - Contains custom links only |

## LayoutColumn

LayoutColumn represents the items in a column within a layout section.

| Field Name | Field Type | Description |
| --- | --- | --- |
| layoutItems | LayoutItem[] | The individual items within a column (ordered from top to bottom). |
| reserved | string | This field is reserved for Salesforce. The field resolves an issue with some SOAP libraries. Any value entered in the field is ignored. |

## LayoutItem

LayoutItem represents the valid values that define a layout item. An item must have only one of the following values set: component, customLink, field, s-control, page, analyticsCloudComponent, or reportChartComponent.

| Field Name | Field Type | Description |
| --- | --- | --- |
| behavior | UiBehavior (enumeration of type string) | Determines the field behavior. Valid string values:Edit—The layout field can be edited but isn’t required.Required—The layout field can be edited and is required.Readonly—The layout field is read-only.Explicitly specifying UiBehavior for Knowledge articles results in an exception. |
| canvas | string | Reference to a canvas app.This field is available in API version 31.0 and later. |
| component | string | Reference to a component. Value must be sfa:socialCard.This field is available in API version 30.0 and later. This field is allowed only inside a RelatedContentItem. sfa:socialCard is supported only on page layouts for contacts, accounts, and leads. |
| customLink | string | The customLink reference. This field is allowed only inside a CustomLink layoutSection. |
| emptySpace | boolean | Controls if this layout item is a blank space. |
| field | string | The field name reference, relative to the layout object, for example Description or MyField__c. |
| height | int | For s-control and pages only, the height in pixels. |
| page | string | Reference to a Visualforce page. |
| analyticsCloudComponent | AnalyticsCloudComponentLayoutItem | Refers to a CRM Analytics dashboard that you can add to a standard or custom object page.This field is available in API version 34.0 and later. |
| reportChartComponent | ReportChartComponentLayoutItem | Refers to a report chart that you can add to a standard or custom object page. |
| scontrol | string | Reference to an s-control. |
| showLabel | boolean | For s-control and pages only, whether to show the label. |
| showScrollbars | boolean | For s-control and pages only, whether to show scrollbars. |
| width | string | For s-control and pages only, the width in pixels or percent. Pixel values are simply the number of pixels, for example, 500. Percentage values must include the percent sign, for example, 20%. |

## AnalyticsCloudComponentLayoutItem

Represents the settings for a CRM Analytics dashboard on a standard or custom page. Available in API version 34.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| assetType | string | Required. Specifies the type of CRM Analytics asset to add. The available asset type is dashboard. |
| devName | string | Required. Unique development name of the dashboard to add. |
| error | string | Error string; only populated if an error occurred in the underlying dashboard. |
| filter | string | Communicates initial dashboard filters for mapping data fields in the dashboard to the object’s fields, so that the dashboard shows only the data that’s relevant for the record being viewed. |
| height | int | Specifies the height of the dashboard, in pixels. The default is 400. |
| hideOnError | boolean | Controls whether users see a dashboard that has an error. When this attribute is set to true, if the dashboard has an error, the dashboard doesn’t appear on the page. When set to false, the dashboard appears but doesn’t show any data except the error. An error can happen when a user doesn’t have access to CRM Analytics or to the dashboard. The default is true. |
| showSharing | boolean | If set to true, and the dashboard is shareable, then the dashboard shows the Share icon. Users can click the icon to open the Share dialog and post or download from the dashboard. If set to false, the dashboard doesn’t show the Share icon. This field is available in API version 37.0 and later. |
| showTitle | boolean | If true, includes the dashboard’s title above the dashboard. If false, the dashboard appears without a title. The default is true. |
| width | string | Specifies the width of the dashboard, in pixels or percent. Pixel values are simply the number of pixels, for example, 500. Percentage values must include the percent sign, for example, 20%. The default is 100%. |

## ReportChartComponentLayoutItem

Represents the settings for a report chart on a standard or custom page.

| Field Name | Field Type | Description |
| --- | --- | --- |
| cacheData | boolean | Indicates whether to use cached data when displaying the chart. When the attribute is set to true, data is cached for 24 hours. If the attribute is set to false, the report isn’t run every time the page is refreshed.This field is available in API version 29.0 and later. |
| contextFilterableField | string | Unique development name of the field by which a report chart is filtered to return data relevant to the page. If set, the ID field for the parent object of the page or report type is the chart data filter. The parent object for the report type and the page must match for a chart to return relevant data. |
| error | string | Error string; only populated if an error occurred in the underlying report.This field is available in API version 31.0 and later. |
| hideOnError | boolean | Controls whether users see a chart that has an error. When there’s an error and this attribute is set, the chart doesn’t show any data except the error. An error can happen for many reasons, such as when a user doesn’t have access to fields used by the chart or a chart has been removed from the report. Set the attribute to true to hide the chart from a page on error.This field is available in API version 29.0 and later. |
| includeContext | boolean | If true, filters the report chart to return data that’s relevant to the page. |
| reportName | string | Unique development name of a report that includes a chart. |
| showTitle | boolean | If true, applies the title from the report to the chart. |
| size | ReportChartComponentSize(enumeration of type string) | The chart size is medium when no value is specified. Valid values:SMALLMEDIUMLARGE |

## PlatformActionList

PlatformActionList represents the list of actions and their order that appear in the Salesforce mobile app action bar for the layout. Available in API version 34.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionListContext | PlatformActionListContext (enumeration of type string) | Required. The context of the action list. Valid values are:AssistantBannerPhotoChatterDockableFeedElementFlexipageGlobalListViewListViewDefinitionListViewRecordLookupMruListMruRowObjectHomeChartPhotoRecordRecordEditRelatedListRelatedListRecord |
| platformActionListItems | PlatformActionListItem[] | The actions in the PlatformActionList. |
| relatedSourceEntity | string | When the ActionListContext is RelatedList or RelatedListRecord, this field represents the API name of the related list to which the action belongs. |

## PlatformActionListItem

PlatformActionListItem represents an action in the PlatformActionList. Available in API version 34.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionName | string | The API name for the action in the list. |
| actionType | PlatformActionType (enumeration of type string) | The type of action. Valid values are:ActionLink—An indicator on a feed element that targets an API, a web page, or a file, represented by a button in the Salesforce Chatter feed UI.CustomButton—When clicked, opens a URL or a Visualforce page in a window or executes JavaScript.InvocableActionProductivityAction—Productivity actions are predefined and attached to a limited set of objects. Productivity actions include Send Email, Call, Map, View Website, and Read News. Except for the Call action, you can’t edit productivity actions.QuickAction—A global or object-specific action.StandardButton—A predefined Salesforce button such as New, Edit, and Delete. |
| sortOrder | int | The placement of the action in the list. |
| subtype | string | The subtype of the action. For quick actions, the subtype is QuickActionType. For custom buttons, the subtype is WebLinkTypeEnum. For action links, subtypes are Api, ApiAsync, Download, and Ui. Standard buttons and productivity actions have no subtype. |

## QuickActionList

QuickActionList represents the list of actions associated with the page layout. Available in API version 28.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| quickActionListItems | QuickActionListItem[] | Array of zero or more QuickActionList objects. |

## QuickActionListItem

QuickActionListItem represents an action in the QuickActionList. Available in API version 28.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| quickActionName | string | The API name of the action. |

## RelatedContent

RelatedContent represents the Mobile Cards section of the page layout. Available in API version 29.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| relatedContentItems | RelatedContentItem[] | A list of layout items in the Mobile Cards section of the page layout. |

## RelatedContentItem

RelatedContentItem represents an individual item in the [RelatedContentItem](#RelatedContentItem) list. Available in API version 29.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| layoutItem | LayoutItem | An individual LayoutItem in the Mobile Cards section. |

## RelatedListItem

RelatedListItem represents a related list in a page layout.

| Field Name | Field Type | Description |
| --- | --- | --- |
| customButtons | string[] | A list of custom buttons that are used on the related list. |
| excludeButtons | string[] | A list of buttons that are excluded from the related list. |
| fields | string[] | A list of fields that are displayed in the related list.Retrieval of standard fields on related lists uses aliases instead of field or API names. For example, the Fax, Mobile, and Home Phone fields are retrieved as Phone2, Phone3, and Phone4, respectively. |
| quickActions | string[] | A list of quick actions that are used on the related list. |
| relatedList | string | Required. The name of the related list. |
| sortField | string | The name of the field that is used for sorting. |
| sortOrder | SortOrder (enumeration of type string) | If the sortField is set, the sortOrder field determines the sort order.Asc - Sort in ascending orderDesc - Sort in descending order |

## SummaryLayout

When Case Feed is enabled, controls the appearance of the highlights panel in Salesforce Classic, which summarizes key fields in a grid at the top of a page layout. Available in API version 25.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| masterLabel | string | Required. The name of the layout label. |
| sizeX | int | Required. Number of columns in the highlights pane, from 1 through 4 (inclusive). |
| sizeY | int | Required. Number of rows in each column, either 1 or 2. |
| sizeZ | int | Reserved for future use. If provided, the setting is visible to users. |
| summaryLayoutItems | SummaryLayoutItem[] | Controls the appearance of an individual field and its column and row position within the highlights panel grid, when Case Feed is enabled. At least one is required. |
| summaryLayoutStyle | SummaryLayoutStyle (enumeration of type string) | Highlights panel style. Valid string values are:DefaultQuoteTemplateDefaultQuoteTemplateCaseInteractionQuickActionLayoutLeftRight (Available in API version 28.0 and later.)QuickActionLayoutTopDown (Available in API version 28.0 and later.) |

## SummaryLayoutItem

Controls the appearance of an individual field and its column and row position within the highlights panel grid, when Case Feed is enabled. You can have two fields per each grid in a highlights panel. Available in API version 25.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| customLink | string | The customLink reference, if the item is a custom link. |
| field | string | The field name reference, relative to the page layout. Must be a standard or custom field that also exists on the detail page. |
| posX | int | Required. The item’s column position in the highlights panel grid. Must be within the range of sizeX. |
| posY | int | Required. The item’s row position in the highlights panel grid. Must be within the range of sizeY. |
| posZ | int | Reserved for future use. If provided, the setting is visible to users. |

## Declarative Metadata Sample Definition

This sample defines a page layout.

```

```

This example shows a layout using <summaryLayout\>.

```

```

This example shows a feed-based layout.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<types>
    <members>Idea-Idea Layout</members>
    <name>Layout</name>
</types>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Layout xmlns="http://soap.sforce.com/2006/04/metadata">
   <customConsoleComponents>
    <primaryTabComponents>
       <container>
           <region>left</region>
          <style>Stack</style>
          <unit>Pixel</unit>
          <width>101</width>
          <sidebarComponent>
                <width>60</width>
                <page>simplepage1</page>
                <unit>Percentage</unit>
          </sidebarComponent>
          <sidebarComponent>
                <width>40</width>
                <page>Hello_World</page>
                <unit>Percentage</unit>
          </sidebarComponent>
       </container>
    </primaryTabComponents>
    <subtabComponents>
       <component>
          <location>top</location>
          <visualforcePage>ConsoleComponentPage2</visualforcePage>
          <height>200</height>
       </component>
    </subtabComponents>
   </customConsoleComponents>
    <customButtons>ButtonLink</customButtons>
    <layoutSections>
        <editHeading>true</editHeading>
        <label>Information</label>
        <layoutColumns>
            <layoutItems>
                <behavior>Required</behavior>
                <field>Name</field>
            </layoutItems>
            <layoutItems>
                <height>180</height>
                <scontrol>LayoutSControl</scontrol>
                <showLabel>true</showLabel>
                <showScrollbars>true</showScrollbars>
                <width>50%</width>
            </layoutItems>
            <layoutItems>
                <reportChartComponent>
                   <contextFilterableField>CUST_ID</contextFilterableField>
                   <includeContext>true</includeContext>
                   <reportName>Open_Accounts_by_Cases</reportName>
                   <showTitle>false</showTitle>
                   <size>LARGE</size>
                <reportChartComponent>
            </layoutItems>
        </layoutColumns>
        <layoutColumns>
            <layoutItems>
                <behavior>Edit</behavior>
                <field>OwnerId</field>
            </layoutItems>
            <layoutItems>
                <behavior>Edit</behavior>
                <field>CurrencyIsoCode</field>
            </layoutItems>
        </layoutColumns>
        <style>TwoColumnsTopToBottom</style>
    </layoutSections>
    <layoutSections>
        <editHeading>true</editHeading>
        <label>System Information</label>
        <layoutColumns>
            <layoutItems>
                <behavior>Readonly</behavior>
                <field>CreatedById</field>
            </layoutItems>
            <layoutItems>
                <behavior>Readonly</behavior>
                <field>Alpha1__c</field>
            </layoutItems>
            <layoutItems>
                <height>200</height>
                <page>mcanvasPage</page>
                <showLabel>true</showLabel>
                <showScrollbars>false</showScrollbars>
                <width>100%</width>
            </layoutItems>
        </layoutColumns>
        <layoutColumns>
            <layoutItems>
                <behavior>Readonly</behavior>
                <field>LastModifiedById</field>
            </layoutItems>
            <layoutItems>
                <behavior>Edit</behavior>
                <field>TextArea__c</field>
            </layoutItems>
        </layoutColumns>
        <style>TwoColumnsTopToBottom</style>
    </layoutSections>
    <layoutSections>
        <customLabel>true</customLabel>
        <detailHeading>true</detailHeading>
        <label>Custom Links</label>
        <layoutColumns>
            <layoutItems>
                <customLink>CustomWebLink</customLink>
            </layoutItems>
        </layoutColumns>
        <style>CustomLinks</style>
    </layoutSections>
     <quickActionList>
        <quickActionListItems>
            <quickActionName>FeedItem.TextPost</quickActionName>
        </quickActionListItems>
        <quickActionListItems>
            <quickActionName>FeedItem.ContentPost</quickActionName>
        </quickActionListItems>
        <quickActionListItems>
            <quickActionName>FeedItem.LinkPost</quickActionName>
        </quickActionListItems>
        <quickActionListItems>
            <quickActionName>FeedItem.PollPost</quickActionName>
        </quickActionListItems>
    </quickActionList>
    <relatedContent>
        <relatedContentItems>
            <layoutItem>
                <component>sfa:socialPanel</component>
            </layoutItem>
        <relatedContentItems>
    </relatedContent>
    <miniLayoutFields>Name</miniLayoutFields>
    <miniLayoutFields>OwnerId</miniLayoutFields>
    <miniLayoutFields>CurrencyIsoCode</miniLayoutFields>
    <miniLayoutFields>Alpha1__c</miniLayoutFields>
    <miniLayoutFields>TextArea__c</miniLayoutFields>
    <miniRelatedLists>
        <relatedList>RelatedNoteList</relatedList>
    </miniRelatedLists>
    <relatedLists>
        <fields>StepStatus</fields>
        <fields>CreatedDate</fields>
        <fields>OriginalActor</fields>
        <fields>Actor</fields>
        <fields>Comments</fields>
        <fields>Actor.Alias</fields>
        <fields>OriginalActor.Alias</fields>
        <relatedList>RelatedProcessHistoryList</relatedList>
    </relatedLists>
    <relatedLists>
        <relatedList>RelatedNoteList</relatedList>
    </relatedLists>
</Layout>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Layout xmlns="http://soap.sforce.com/2006/04/metadata">
    <layoutSections>
        <editHeading>true</editHeading>
        <label>System Information</label>
        <layoutColumns>
            <layoutItems>
                <behavior>Readonly</behavior>
                <field>CreatedById</field>
            </layoutItems>
            <layoutItems>
                <behavior>Required</behavior>
                <field>Name</field>
            </layoutItems>
        </layoutColumns>
        <layoutColumns>
            <layoutItems>
                <behavior>Readonly</behavior>
                <field>LastModifiedById</field>
            </layoutItems>
        </layoutColumns>
        <style>TwoColumnsTopToBottom</style>
    </layoutSections>
    <summaryLayout>
        <masterLabel>Great Name</masterLabel>
        <sizeX>4</sizeX>
        <sizeY>2</sizeY>
        <summaryLayoutItems>
            <posX>0</posX>
            <posY>0</posY>
            <field>Name</field>
        </summaryLayoutItems>
    </summaryLayout>
</Layout>
```

```
<Layout>
...
    <feedLayout>
        <leftComponents>
            <componentType>customLinks</componentType>
        </leftComponents>
        <rightComponents>
            <componentType>follow</componentType>
        </rightComponents>
        <rightComponents>
            <componentType>followers</componentType>
        </rightComponents>
        <rightComponents>
            <componentType>visualforce</componentType>
            <page>accountCustomWidget</page>
            <height>200</height>
        </rightComponents>
        <hideSidebar>true</hideSidebar>
        <feedFilterPosition>centerDropDown</feedFilterPosition>
        <feedFilters>
    <feedFilerType>allUpdates</feedFilerType>
        </feedFilters>
        <feedFilters>
    <feedFilerType>feedItemType</feedFilerType>
    <feedItemType>CallLogPost</feedItemType>
        </feedFilters>
        <feedFilters>
    <feedFilerType>feedItemType</feedFilerType>
    <feedItemType>TextPost</feedItemType>
        </feedFilters>
    </feedLayout>
...
</Layout>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- WebLink (atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip
                    File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
