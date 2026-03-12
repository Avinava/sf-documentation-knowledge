---
title: "Metadata Namespace"
domain: apex-reference
topic: metadata-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.626Z
estimatedTokens: 2991
namespace: Metadata
keywords: [Metadata, classes, working, custom, Salesforce]
---

# Metadata Namespace

> The Metadata namespace provides classes and
    methods for working with custom metadata in Salesforce

**Namespace:** `Metadata`

# Metadata Namespace

The Metadata namespace provides classes and methods for working with custom metadata in Salesforce

Salesforce uses metadata types and components to represent org configuration and customization. Metadata is used for org settings that admins control or configuration information applied by installed apps and packages. Use the classes in the Metadata namespace to access metadata from within Apex code.

Metadata access in Apex is available for Apex classes using API version 40.0 and later.

For more information, see [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_metadata.htm).

The following are the classes in the Metadata namespace.

-   **[AnalyticsCloudComponentLayoutItem Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_class_Metadata_AnalyticsCloudComponentLayoutItem)**
    Represents the settings for a Wave Analytics dashboard on a standard or custom page.
-   **[ConsoleComponent Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ConsoleComponent.htm#apex_class_Metadata_ConsoleComponent)**
    Represents a custom console component on a section of a page layout.
-   **[Container Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm#apex_class_Metadata_Container)**
    Represents a location and style in which to display more than one custom console component in the sidebars of the console.
-   **[CustomConsoleComponents Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomConsoleComponents.htm#apex_class_Metadata_CustomConsoleComponents)**
    Represents custom console components (Visualforce pages, lookup fields, or related lists) on a page layout.
-   **[CustomMetadata Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm#apex_class_Metadata_CustomMetadata)**
    Represents records of custom metadata types.
-   **[CustomMetadataValue Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadataValue.htm#apex_class_Metadata_CustomMetadataValue)**
    Represents custom metadata values for a custom metadata component.
-   **[DeployCallback Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm#apex_interface_Metadata_DeployCallback)**
    An interface for metadata deployment callback classes.
-   **[DeployCallbackContext Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployCallbackContext.htm#apex_class_Metadata_DeployCallbackContext)**
    Represents context information for a deployment job.
-   **[DeployContainer Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_class_Metadata_DeployContainer)**
    Represents a container for custom metadata components to be deployed.
-   **[DeployDetails Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployDetails.htm#apex_class_Metadata_DeployDetails)**
    Contains detailed information on deployed components.
-   **[DeployMessage Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_class_Metadata_DeployMessage)**
    Represents result information for the deployment of a metadata component.
-   **[DeployProblemType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_DeployProblemType.htm)**
    Describes the problem type for an unsuccessful component deploy.
-   **[DeployResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_class_Metadata_DeployResult)**
    Represents the results of a metadata deployment.
-   **[DeployStatus Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_DeployStatus.htm)**
    The result status of a deployment.
-   **[FeedItemTypeEnum Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_FeedItemTypeEnum.htm)**
    The type of feed item in a feed-based page layout.
-   **[FeedLayout Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_class_Metadata_FeedLayout)**
    Represents the values that define the feed view of a feed-based page layout. Feed-based layouts are available on Account, Case, Contact, Lead, Opportunity, custom, and external objects. They include a feed view and a detail view.
-   **[FeedLayoutComponent Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutComponent.htm#apex_class_Metadata_FeedLayoutComponent)**
    Represents a component in the feed view of a feed-based page layout.
-   **[FeedLayoutComponentType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_FeedLayoutComponentType.htm)**
    Indicates the type of feed layout component.
-   **[FeedLayoutFilter Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutFilter.htm#apex_class_Metadata_FeedLayoutFilter)**
    Represents a feed filter option in the feed view of a feed-based page layout. A filter can have only standardFilter or feedItemType set.
-   **[FeedLayoutFilterPosition Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_FeedLayoutFilterPosition.htm)**
    Describes where the feed filters list is included in the layout.
-   **[FeedLayoutFilterType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_FeedLayoutFilterType.htm)**
    The type of feed layout filter.
-   **[Layout Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout)**
    Represents the metadata associated with a page layout.
-   **[LayoutColumn Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutColumn.htm#apex_class_Metadata_LayoutColumn)**
    Represents the items in a column within a layout section.
-   **[LayoutHeader Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_LayoutHeader.htm)**
    Represents tagging types used for Metadata.Layout.headers
-   **[LayoutItem Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_class_Metadata_LayoutItem)**
    Represents the valid values that define a layout item.
-   **[LayoutSection Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutSection.htm#apex_class_Metadata_LayoutSection)**
    Represents a section of a page layout, such as the Custom Links section.
-   **[LayoutSectionStyle Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_LayoutSectionStyle.htm)**
    Describes the possible styles for a layout section.
-   **[Metadata Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_class_Metadata_Metadata)**
    An abstract base class that represents a custom metadata component.
-   **[MetadataType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_MetadataType.htm)**
    Represents the custom metadata components available in Apex.
-   **[MetadataValue Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MetadataValue.htm#apex_class_Metadata_MetadataValue)**
    An abstract base class that represents a custom metadata component field.
-   **[MiniLayout Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MiniLayout.htm#apex_class_Metadata_MiniLayout)**
    Represents a mini view of a record in the Console tab, hover details, and event overlays.
-   **[Operations Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Operations.htm#apex_class_Metadata_Operations)**
    Represents a class to execute metadata operations, such as retrieving or deploying custom metadata.
-   **[PlatformActionList Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_class_Metadata_PlatformActionList)**
    Represents the list of actions, and their order, that display in the Salesforce mobile action bar for the layout.
-   **[PlatformActionListContextEnum Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_PlatformActionListContextEnum.htm)**
    Describes the different contexts of action lists.
-   **[PlatformActionListItem Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionListItem.htm#apex_class_Metadata_PlatformActionListItem)**
    Represents an action in the platform action list for a layout.
-   **[PlatformActionTypeEnum Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_PlatformActionTypeEnum.htm)**
    The type of action for a PlatformActionListItem.
-   **[PrimaryTabComponents Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PrimaryTabComponents.htm#apex_class_Metadata_PrimaryTabComponents)**
    Represents custom console components on primary tabs in the Salesforce console.
-   **[QuickActionList Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_QuickActionList.htm#apex_class_Metadata_QuickActionList)**
    Represents the list of actions associated with the page layout.
-   **[QuickActionListItem Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_QuickActionListItem.htm#apex_class_Metadata_QuickActionListItem)**
    Represents an action in the QuickActionList.
-   **[RelatedContent Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContent.htm#apex_class_Metadata_RelatedContent)**
    Represents the Mobile Cards section of the page layout.
-   **[RelatedContentItem Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContentItem.htm#apex_class_Metadata_RelatedContentItem)**
    Represents an individual item in the RelatedContent list.
-   **[RelatedList Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedList.htm#apex_class_Metadata_RelatedList)**
    Represents related list custom components on the sidebars of the Salesforce console.
-   **[RelatedListItem Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm#apex_class_Metadata_RelatedListItem)**
    Represents an item in the related list in a page layout.
-   **[ReportChartComponentLayoutItem Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_class_Metadata_ReportChartComponentLayoutItem)**
    Represents the settings for a report chart on a standard or custom page.
-   **[ReportChartComponentSize Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_ReportChartComponentSize.htm)**
    Describes the size of the displayed report chart component.
-   **[SidebarComponent Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_class_Metadata_SidebarComponent)**
    Represents a specific custom console component to display in a container that hosts multiple components in one of the sidebars of the Salesforce console.
-   **[SortOrder Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_SortOrder.htm)**
    Describes the sort order of a related list.
-   **[StatusCode Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_StatusCode.htm)**
    Describes the status code for an unsuccessful component deploy.
-   **[SubtabComponents Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SubtabComponents.htm#apex_class_Metadata_SubtabComponents)**
    Represents custom console components on subtabs in the Salesforce console.
-   **[SummaryLayoutStyleEnum Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_SummaryLayoutStyleEnum.htm)**
    Describes the highlights panel style for a SummaryLayout.
-   **[SummaryLayout Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm#apex_class_Metadata_SummaryLayout)**
    Controls the appearance of the highlights panel, which summarizes key fields in a grid at the top of a page layout, when Case Feed is enabled.
-   **[SummaryLayoutItem Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm#apex_class_Metadata_SummaryLayoutItem)**
    Controls the appearance of an individual field and its column and row position within the highlights panel grid, when Case Feed is enabled. You can have two fields per each grid in a highlights panel.
-   **[UiBehavior Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_UiBehavior.htm)**
    Describes the behavior for a layout item on a layout page.

## Related Topics

- AnalyticsCloudComponentLayoutItem Class (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm)
- ConsoleComponent Class (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ConsoleComponent.htm)
- Container Class (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm)
- CustomConsoleComponents Class (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomConsoleComponents.htm)
- CustomMetadata Class (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm)
- CustomMetadataValue Class (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadataValue.htm)
- DeployCallback Interface (atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm)
- DeployCallbackContext Class (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployCallbackContext.htm)
- DeployContainer Class (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm)
- DeployDetails Class (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployDetails.htm)
