---
title: "FeedLayoutComponent Properties"
domain: apex-reference
topic: feedlayoutcomponent-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.908Z
keywords: [FeedLayoutComponent, Properties, Represents, component, feed, view, feed-based, page, layout., type, required., componentType, Signature, Property, Value, height]
---

# FeedLayoutComponent Properties

> Represents a component in the feed view of a feed-based page layout.
      The type of component is required.

## FeedLayoutComponent Properties

The following are properties for FeedLayoutComponent.

See FeedLayoutComponent in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm)

-   **[componentType](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutComponent.htm#apex_Metadata_FeedLayoutComponent_componentType)**  
    Represents a component in the feed view of a feed-based page layout. The type of component is required.
-   **[height](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutComponent.htm#apex_Metadata_FeedLayoutComponent_height)**  
    The height, in pixels, of the component. Doesn’t apply to standardComponents
-   **[page\_x](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutComponent.htm#apex_Metadata_FeedLayoutComponent_page_x)**  
    The name of the Visualforce page used as a custom component.

### componentType

Represents a component in the feed view of a feed-based page layout. The type of component is required.

#### Signature

public Metadata.FeedLayoutComponentType componentType {get; set;}

#### Property Value

Type: [Metadata.FeedLayoutComponentType](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_FeedLayoutComponentType.htm#apex_enum_Metadata_FeedLayoutComponentType "Indicates the type of feed layout component.")

### height

The height, in pixels, of the component. Doesn’t apply to standardComponents

#### Signature

public Integer height {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### page\_x

The name of the Visualforce page used as a custom component.

#### Signature

public String page\_x {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")