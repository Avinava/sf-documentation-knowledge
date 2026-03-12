---
title: "FeedLayout Class"
domain: apex-reference
topic: feedlayout-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.385Z
estimatedTokens: 2078
namespace: Metadata
keywords: [FeedLayout, Represents, values, define, feed, view, feed-based, page, layout., Feed-based, layouts, Account, Case, Contact, Lead, Opportunity, custom, external, objects., They]
---

# FeedLayout Class

> Represents the values that define the feed view of a feed-based page
      layout. Feed-based layouts are available on Account, Case, Contact, Lead, Opportunity, custom,
      and external objects. They include a feed view and a detail view.

**Namespace:** `Metadata`

# FeedLayout Class

Represents the values that define the feed view of a feed-based page layout. Feed-based layouts are available on Account, Case, Contact, Lead, Opportunity, custom, and external objects. They include a feed view and a detail view.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “FeedLayout” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[FeedLayout Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_Metadata_FeedLayout_properties)**

-   **[FeedLayout Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_Metadata_FeedLayout_methods)**


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

## FeedLayout Methods

The following are methods for FeedLayout.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_Metadata_FeedLayout_clone)**
    Makes a duplicate copy of the Metadata.FeedLayout.

### clone()

Makes a duplicate copy of the Metadata.FeedLayout.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- FeedLayout Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm)
- FeedLayout Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm)
- autocollapsePublisher (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm)
- compactFeed (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm)
- feedFilterPosition (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm)
- feedFilters (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm)
- fullWidthFeed (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm)
- hideSidebar (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm)
