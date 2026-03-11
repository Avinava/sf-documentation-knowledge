---
title: "FeedLayoutFilter Properties"
domain: apex-reference
topic: feedlayoutfilter-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.912Z
keywords: [FeedLayoutFilter, Properties, name, CustomFeedFilter, component., Names, prefixed, parent, object., example, Case.MyCustomFeedFilter., feedFilterName, Signature, Property, Value, feedFilterType, feedItemType]
---

# FeedLayoutFilter Properties

> The name of a CustomFeedFilter
      component. Names are prefixed with the name of the parent object. For example, Case.MyCustomFeedFilter.

## FeedLayoutFilter Properties

The following are properties for FeedLayoutFilter.

-   **[feedFilterName](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutFilter.htm#apex_Metadata_FeedLayoutFilter_feedFilterName)**  
    The name of a CustomFeedFilter component. Names are prefixed with the name of the parent object. For example, Case.MyCustomFeedFilter.
-   **[feedFilterType](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutFilter.htm#apex_Metadata_FeedLayoutFilter_feedFilterType)**  
    The type of filter.
-   **[feedItemType](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutFilter.htm#apex_Metadata_FeedLayoutFilter_feedItemType)**  
    The type of feed item to display.

### feedFilterName

The name of a CustomFeedFilter component. Names are prefixed with the name of the parent object. For example, Case.MyCustomFeedFilter.

#### Signature

public String feedFilterName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### feedFilterType

The type of filter.

#### Signature

public Metadata.FeedLayoutFilterType feedFilterType {get; set;}

#### Property Value

Type: [FeedLayoutFilterType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_FeedLayoutFilterType.htm#apex_enum_Metadata_FeedLayoutFilterType "The type of feed layout filter.")

### feedItemType

The type of feed item to display.

#### Signature

public Metadata.FeedItemTypeEnum feedItemType {get; set;}

#### Property Value

Type: [FeedItemTypeEnum Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_FeedItemTypeEnum.htm#apex_enum_Metadata_FeedItemTypeEnum "The type of feed item in a feed-based page layout.")