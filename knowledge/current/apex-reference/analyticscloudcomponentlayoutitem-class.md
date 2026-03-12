---
title: "AnalyticsCloudComponentLayoutItem Class"
domain: apex-reference
topic: analyticscloudcomponentlayoutitem-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.278Z
estimatedTokens: 1905
namespace: Metadata
keywords: [AnalyticsCloudComponentLayoutItem, Represents, settings, Wave, Analytics, dashboard, standard, custom, page., Usage, assetType, devName, error, filter, height, hideOnError, showHeader, showSharing, showTitle, width]
---

# AnalyticsCloudComponentLayoutItem Class

> Represents the settings for a Wave Analytics dashboard on a standard
      or custom page.

**Namespace:** `Metadata`

# AnalyticsCloudComponentLayoutItem Class

Represents the settings for a Wave Analytics dashboard on a standard or custom page.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “AnalyticsCloudComponentLayoutItem” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[AnalyticsCloudComponentLayoutItem Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_Metadata_AnalyticsCloudComponentLayoutItem_properties)**

-   **[AnalyticsCloudComponentLayoutItem Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_Metadata_AnalyticsCloudComponentLayoutItem_methods)**


## AnalyticsCloudComponentLayoutItem Properties

The following are properties for AnalyticsCloudComponentLayoutItem.

-   **[assetType](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_Metadata_AnalyticsCloudComponentLayoutItem_assetType)**
    Specifies the type of Wave Analytics asset.
-   **[devName](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_Metadata_AnalyticsCloudComponentLayoutItem_devName)**
    Unique development name of the dashboard to add.
-   **[error](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_Metadata_AnalyticsCloudComponentLayoutItem_error)**
    An error string that is populated only when an error occurred in the underlying dashboard.
-   **[filter](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_Metadata_AnalyticsCloudComponentLayoutItem_filter)**
    Dashboard filters for mapping data fields in the dashboard to the object’s fields.
-   **[height](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_Metadata_AnalyticsCloudComponentLayoutItem_height)**
    Specifies the height of the dashboard, in pixels.
-   **[hideOnError](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_Metadata_AnalyticsCloudComponentLayoutItem_hideOnError)**
    Controls whether users see a dashboard that has an error.
-   **[showHeader](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_Metadata_AnalyticsCloudComponentLayoutItem_showHeader)**
    If true, includes the dashboard’s header bar. If false, the dashboard appears without a header bar.
-   **[showSharing](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_Metadata_AnalyticsCloudComponentLayoutItem_showSharing)**
    If set to true, and the dashboard is shareable the dashboard shows the Share icon. If set to false, the dashboard doesn’t show the Share icon.
-   **[showTitle](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_Metadata_AnalyticsCloudComponentLayoutItem_showTitle)**
    If true, includes the dashboard’s title above the dashboard. If false, the dashboard appears without a title.
-   **[width](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_Metadata_AnalyticsCloudComponentLayoutItem_width)**
    Specifies the width of the dashboard, in pixels or percentage.

### assetType

Specifies the type of Wave Analytics asset.

#### Signature

public String assetType {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### devName

Unique development name of the dashboard to add.

#### Signature

public String devName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### error

An error string that is populated only when an error occurred in the underlying dashboard.

#### Signature

public String error {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### filter

Dashboard filters for mapping data fields in the dashboard to the object’s fields.

#### Signature

public String filter {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### height

Specifies the height of the dashboard, in pixels.

#### Signature

public Integer height {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### hideOnError

Controls whether users see a dashboard that has an error.

#### Signature

public Boolean hideOnError {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### showHeader

If true, includes the dashboard’s header bar. If false, the dashboard appears without a header bar.

#### Signature

public Boolean showHeader {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### showSharing

If set to true, and the dashboard is shareable the dashboard shows the Share icon. If set to false, the dashboard doesn’t show the Share icon.

#### Signature

public Boolean showSharing {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### showTitle

If true, includes the dashboard’s title above the dashboard. If false, the dashboard appears without a title.

#### Signature

public Boolean showTitle {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### width

Specifies the width of the dashboard, in pixels or percentage.

#### Signature

public String width {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## AnalyticsCloudComponentLayoutItem Methods

The following are methods for AnalyticsCloudComponentLayoutItem.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_Metadata_AnalyticsCloudComponentLayoutItem_clone)**
    Makes a duplicate copy of the Metadata.AnalyticsCloudComponentLayoutItem.

### clone()

Makes a duplicate copy of the Metadata.AnalyticsCloudComponentLayoutItem.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- AnalyticsCloudComponentLayoutItem Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm)
- AnalyticsCloudComponentLayoutItem Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm)
- assetType (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm)
- devName (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm)
- error (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm)
- filter (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm)
- height (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm)
- hideOnError (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm)
