---
title: "FeedLayout Properties"
domain: apex-reference
topic: feedlayout-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.903Z
keywords: [FeedLayout, Properties, Specifies, whether, publisher, collapsed, page, loads, true, false, autocollapsePublisher, Signature, Property, Value, compactFeed, feedFilterPosition, feedFilters, fullWidthFeed, hideSidebar, highlightExternalFeedItems]
---

# FeedLayout Properties

> Specifies whether the publisher is collapsed when the page loads
      (true) or not (false).

## FeedLayout Properties

The following are properties for FeedLayout.

-   **[autocollapsePublisher](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_Metadata_FeedLayout_autocollapsePublisher)**  
    Specifies whether the publisher is collapsed when the page loads (true) or not (false).
-   **[compactFeed](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_Metadata_FeedLayout_compactFeed)**  
    Specifies whether the feed-based page layout uses a compact feed (true) or not (false). If set to true, feed items on the page are collapsed by default, and the feed view has an updated design.
-   **[feedFilterPosition](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_Metadata_FeedLayout_feedFilterPosition)**  
    Indicates where the feed filters list is included in the layout.
-   **[feedFilters](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_Metadata_FeedLayout_feedFilters)**  
    The individual filters displayed in the feed filters list.
-   **[fullWidthFeed](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_Metadata_FeedLayout_fullWidthFeed)**  
    Specifies whether the feed expands horizontally to take up all available space on the page (true) or not (false).
-   **[hideSidebar](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_Metadata_FeedLayout_hideSidebar)**  
    Specifies whether the sidebar is hidden (true) or not (false).
-   **[highlightExternalFeedItems](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_Metadata_FeedLayout_highlightExternalFeedItems)**  
    Controls whether to highlight external feed items (true) or not (false).
-   **[leftComponents](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_Metadata_FeedLayout_leftComponents)**  
    The individual components displayed in the left column of the feed view.
-   **[rightComponents](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_Metadata_FeedLayout_rightComponents)**  
    Lists the individual components displayed in the right column of the feed view.
-   **[useInlineFiltersInConsole](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_Metadata_FeedLayout_useInlineFiltersInConsole)**  
    Indicates whether to use inline filters in the Salesforce console.

### autocollapsePublisher

Specifies whether the publisher is collapsed when the page loads (true) or not (false).

#### Signature

public Boolean autocollapsePublisher {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### compactFeed

Specifies whether the feed-based page layout uses a compact feed (true) or not (false). If set to true, feed items on the page are collapsed by default, and the feed view has an updated design.

#### Signature

public Boolean compactFeed {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### feedFilterPosition

Indicates where the feed filters list is included in the layout.

#### Signature

public Metadata.FeedLayoutFilterPosition feedFilterPosition {get; set;}

#### Property Value

Type: [FeedLayoutFilterPosition Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_FeedLayoutFilterPosition.htm#apex_enum_Metadata_FeedLayoutFilterPosition "Describes where the feed filters list is included in the layout.")

### feedFilters

The individual filters displayed in the feed filters list.

#### Signature

public List<Metadata.FeedLayoutFilter> feedFilters {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[FeedLayoutFilter Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutFilter.htm#apex_class_Metadata_FeedLayoutFilter "Represents a feed filter option in the feed view of a feed-based page layout. A filter can have only standardFilter or feedItemType set.")\>.

### fullWidthFeed

Specifies whether the feed expands horizontally to take up all available space on the page (true) or not (false).

#### Signature

public Boolean fullWidthFeed {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hideSidebar

Specifies whether the sidebar is hidden (true) or not (false).

#### Signature

public Boolean hideSidebar {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### highlightExternalFeedItems

Controls whether to highlight external feed items (true) or not (false).

#### Signature

public Boolean highlightExternalFeedItems {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### leftComponents

The individual components displayed in the left column of the feed view.

#### Signature

public List<Metadata.FeedLayoutComponent> leftComponents {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[FeedLayoutComponent Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutComponent.htm#apex_class_Metadata_FeedLayoutComponent "Represents a component in the feed view of a feed-based page layout.")\>

### rightComponents

Lists the individual components displayed in the right column of the feed view.

#### Signature

public List<Metadata.FeedLayoutComponent> rightComponents {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[FeedLayoutComponent Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutComponent.htm#apex_class_Metadata_FeedLayoutComponent "Represents a component in the feed view of a feed-based page layout.")\>

### useInlineFiltersInConsole

Indicates whether to use inline filters in the Salesforce console.

#### Signature

public Boolean useInlineFiltersInConsole {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")