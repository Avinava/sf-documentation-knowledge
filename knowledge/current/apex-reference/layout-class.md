---
title: "Layout Class"
domain: apex-reference
topic: layout-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.927Z
estimatedTokens: 4219
namespace: Metadata
keywords: [Layout, metadata, associated, Usage, customButtons, customConsoleComponents, emailDefault, excludeButtons, feedLayout, layoutSections, miniLayout, multilineLayoutFields, platformActionList, quickActionList, relatedContent]
---

# Layout Class

> Represents the metadata associated with a page
    layout.

**Namespace:** `Metadata`

# Layout Class

Represents the metadata associated with a page layout.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class to access layout metadata components. For more information, see [Layout](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_layouts.htm) in the Metadata API Developer Guide.

-   **[Layout Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_properties)**

-   **[Layout Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_methods)**


## Layout Properties

The following are properties for Layout.

-   **[customButtons](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_customButtons)**
    The custom buttons for this layout.
-   **[customConsoleComponents](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_customConsoleComponents)**
    Represents custom console components (Visualforce pages, lookup fields, or related lists) on a page layout.
-   **[emailDefault](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_emailDefault)**
    Default value for the email checkbox. Only relevant if the showEmailCheckbox property is set.
-   **[excludeButtons](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_excludeButtons)**
    List of standard buttons to exclude from this layout.
-   **[feedLayout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_feedLayout)**
    Represents the values that define the feed view of a feed-based page layout.
-   **[headers](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_headers)**
    Represents the layout headers used for tagging.
-   **[layoutSections](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_layoutSections)**
    The main sections of the layout containing fields, s-controls, and custom links. The order here determines the layout order.
-   **[miniLayout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_miniLayout)**
    Represents a minilayout, which is used in the mini view of a record in the Console tab, hover details, and event overlays.
-   **[multilineLayoutFields](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_multilineLayoutFields)**
    Fields for special multiline layout fields which appear in OpportunityProduct layouts.
-   **[platformActionList](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_platformActionList)**
    The list of actions, and their order, that display in the Salesforce mobile action bar for the layout.
-   **[quickActionList](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_quickActionList)**
    The list of quick actions that display in the full Salesforce site for the page layout.
-   **[relatedContent](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_relatedContent)**
    The Related Content section of the page layout.
-   **[relatedLists](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_relatedLists)**
    The related lists for the layout, listed in the order they appear in the user interface.
-   **[relatedObjects](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_relatedObjects)**
    The list of related objects that appears in the mini view of the console.
-   **[runAssignmentRulesDefault](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_runAssignmentRulesDefault)**
    Default value for the “run assignment rules” checkbox. Only relevant if the showRunAssignmentRulesCheckbox property is set.
-   **[showEmailCheckbox](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_showEmailCheckbox)**
    Controls whether to show the email checkbox. Only allowed on Case, CaseClose, and Task layouts. The default state of checkbox is controlled by the emailDefault property.
-   **[showHighlightsPanel](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_showHighlightsPanel)**
    If set, the highlights panel displays on pages in the Salesforce console.
-   **[showInteractionLogPanel](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_showInteractionLogPanel)**
    If set, the interaction log displays on pages in the Salesforce console.
-   **[showKnowledgeComponent](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_showKnowledgeComponent)**
    Only allowed on Case layouts. If set, the Knowledge sidebar displays on cases in the Salesforce console.
-   **[showRunAssignmentRulesCheckbox](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_showRunAssignmentRulesCheckbox)**
    Controls whether to show the Run Assignment Rules checkbox. Only allowed on Lead and Case layouts. The default state of checkbox is controlled by the runAssignmentRulesDefault property.
-   **[showSolutionSection](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_showSolutionSection)**
    Only allowed on CaseClose layout. If set, the built-in solution information section shows up on the page.
-   **[showSubmitAndAttachButton](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_showSubmitAndAttachButton)**
    For Cast layouts only. If set, the Submit & Add Attachment button displays on case edit pages to portal users in the Customer Portal.
-   **[summaryLayout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_summaryLayout)**
    The summary layout for this layout.

### customButtons

The custom buttons for this layout.

#### Signature

public List<String\> customButtons {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### customConsoleComponents

Represents custom console components (Visualforce pages, lookup fields, or related lists) on a page layout.

#### Signature

public Metadata.CustomConsoleComponents customConsoleComponents {get; set;}

#### Property Value

Type: [CustomConsoleComponents Class](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomConsoleComponents.htm#apex_class_Metadata_CustomConsoleComponents "Represents custom console components (Visualforce pages, lookup fields, or related lists) on a page layout.")

### emailDefault

Default value for the email checkbox. Only relevant if the showEmailCheckbox property is set.

#### Signature

public Boolean emailDefault {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### excludeButtons

List of standard buttons to exclude from this layout.

#### Signature

public List<String\> excludeButtons {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### feedLayout

Represents the values that define the feed view of a feed-based page layout.

#### Signature

public Metadata.FeedLayout feedLayout {get; set;}

#### Property Value

Type: [Metadata.FeedLayout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayout.htm#apex_class_Metadata_FeedLayout "Represents the values that define the feed view of a feed-based page layout. Feed-based layouts are available on Account, Case, Contact, Lead, Opportunity, custom, and external objects. They include a feed view and a detail view.")

### headers

Represents the layout headers used for tagging.

#### Signature

public List<Metadata.LayoutHeader> headers {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.LayoutHeader](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_LayoutHeader.htm#apex_enum_Metadata_LayoutHeader "Represents tagging types used for Metadata.Layout.headers")\>

### layoutSections

The main sections of the layout containing fields, s-controls, and custom links. The order here determines the layout order.

#### Signature

public List<Metadata.LayoutSection> layoutSections {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.LayoutSection](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutSection.htm#apex_class_Metadata_LayoutSection "Represents a section of a page layout, such as the Custom Links section.")\>

### miniLayout

Represents a minilayout, which is used in the mini view of a record in the Console tab, hover details, and event overlays.

#### Signature

public Metadata.MiniLayout miniLayout {get; set;}

#### Property Value

Type: [Metadata.MiniLayout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MiniLayout.htm#apex_class_Metadata_MiniLayout "Represents a mini view of a record in the Console tab, hover details, and event overlays.")

### multilineLayoutFields

Fields for special multiline layout fields which appear in OpportunityProduct layouts.

#### Signature

public List<String\> multilineLayoutFields {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### platformActionList

The list of actions, and their order, that display in the Salesforce mobile action bar for the layout.

#### Signature

public Metadata.PlatformActionList platformActionList {get; set;}

#### Property Value

Type: [Metadata.PlatformActionList](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_class_Metadata_PlatformActionList "Represents the list of actions, and their order, that display in the Salesforce mobile action bar for the layout.")

### quickActionList

The list of quick actions that display in the full Salesforce site for the page layout.

#### Signature

public Metadata.QuickActionList quickActionList {get; set;}

#### Property Value

Type: [Meatadata.QuickActionL](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_QuickActionList.htm#apex_class_Metadata_QuickActionList "Represents the list of actions associated with the page layout.").

### relatedContent

The Related Content section of the page layout.

#### Signature

public Metadata.RelatedContent relatedContent {get; set;}

#### Property Value

Type: [Metadata.RelatedContent](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContent.htm#apex_class_Metadata_RelatedContent "Represents the Mobile Cards section of the page layout.")

### relatedLists

The related lists for the layout, listed in the order they appear in the user interface.

#### Signature

public List<Metadata.RelatedListItem> relatedLists {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.RelatedListItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm#apex_class_Metadata_RelatedListItem "Represents an item in the related list in a page layout.")\>

### relatedObjects

The list of related objects that appears in the mini view of the console.

#### Signature

public List<String\> relatedObjects {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### runAssignmentRulesDefault

Default value for the “run assignment rules” checkbox. Only relevant if the showRunAssignmentRulesCheckbox property is set.

#### Signature

public Boolean runAssignmentRulesDefault {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### showEmailCheckbox

Controls whether to show the email checkbox. Only allowed on Case, CaseClose, and Task layouts. The default state of checkbox is controlled by the emailDefault property.

#### Signature

public Boolean showEmailCheckbox {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### showHighlightsPanel

If set, the highlights panel displays on pages in the Salesforce console.

#### Signature

public Boolean showHighlightsPanel {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### showInteractionLogPanel

If set, the interaction log displays on pages in the Salesforce console.

#### Signature

public Boolean showInteractionLogPanel {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### showKnowledgeComponent

Only allowed on Case layouts. If set, the Knowledge sidebar displays on cases in the Salesforce console.

#### Signature

public Boolean showKnowledgeComponent {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### showRunAssignmentRulesCheckbox

Controls whether to show the Run Assignment Rules checkbox. Only allowed on Lead and Case layouts. The default state of checkbox is controlled by the runAssignmentRulesDefault property.

#### Signature

public Boolean showRunAssignmentRulesCheckbox {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### showSolutionSection

Only allowed on CaseClose layout. If set, the built-in solution information section shows up on the page.

#### Signature

public Boolean showSolutionSection {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### showSubmitAndAttachButton

For Cast layouts only. If set, the Submit & Add Attachment button displays on case edit pages to portal users in the Customer Portal.

#### Signature

public Boolean showSubmitAndAttachButton {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### summaryLayout

The summary layout for this layout.

#### Signature

public Metadata.SummaryLayout summaryLayout {get; set;}

#### Property Value

Type: [Metadata.SummaryLayout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm#apex_class_Metadata_SummaryLayout "Controls the appearance of the highlights panel, which summarizes key fields in a grid at the top of a page layout, when Case Feed is enabled.")

## Layout Methods

The following are methods for Layout.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_Metadata_Layout_clone)**
    Makes a duplicate copy of the Metadata.Layout.

### clone()

Makes a duplicate copy of the Metadata.Layout.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Layout Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- Layout Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- customButtons (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- customConsoleComponents (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- emailDefault (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- excludeButtons (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- feedLayout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- headers (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- layoutSections (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
