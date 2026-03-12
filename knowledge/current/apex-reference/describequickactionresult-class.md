---
title: "DescribeQuickActionResult Class"
domain: apex-reference
topic: describequickactionresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.845Z
estimatedTokens: 9755
namespace: QuickAction
keywords: [DescribeQuickActionResult, name, Canvas, application, invoked, custom, action., Usage, canvasapplicationname, colors, contextsobjecttype, defaultvalues, flowdevname, flowrecordidvar, height, iconname, icons, iconurl, layout, lightningcomponentbundleid]
---

# DescribeQuickActionResult Class

> The name of the Canvas application invoked by the custom
      action.

**Namespace:** `QuickAction`

# DescribeQuickActionResult Class

Contains describe metadata information for a quick action.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## Usage

The QuickAction describeQuickActions method returns an array of quick action describe result objects (QuickAction.DescribeQuickActionResult).

-   **[DescribeQuickActionResult Properties](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_properties)**

-   **[DescribeQuickActionResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_methods)**


## DescribeQuickActionResult Properties

The following are properties for DescribeQuickActionResult.

-   **[canvasapplicationname](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_canvasapplicationname)**
    The name of the Canvas application invoked by the custom action.
-   **[colors](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_colors)**
    Array of color information. Each color is associated with a theme.
-   **[contextsobjecttype](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_contextsobjecttype)**
    The object used for the action. Was getsourceSobjectType() in API version 29.0 and earlier.
-   **[defaultvalues](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_defaultvalues)**
    The action’s default values.
-   **[flowdevname](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_flowdevname)**
    If the custom action invokes a flow, the fully qualified name of the flow.
-   **[flowrecordidvar](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_flowrecordidvar)**
    If the custom action invokes a flow, the input variable that the custom action passes the record’s ID to.
-   **[height](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_height)**
    The height in pixels of the action pane.
-   **[iconname](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_iconname)**
    The name of the icon used for the action. If a custom icon is not used, this value isn’t set.
-   **[icons](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_icons)**
    Array of icons. Each icon is associated with a theme.
-   **[iconurl](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_iconurl)**
    The URL of the icon used for the action. This icon URL corresponds to the 32x32 icon used for the current Salesforce theme, introduced in Spring ’10, or the custom icon, if there is one.
-   **[layout](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_layout)**
    The section of the layout where the action resides.
-   **[lightningcomponentbundleid](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_lightningcomponentbundleid)**
    If the custom action invokes an Aura component, the ID of the Aura component bundle to which the component belongs.
-   **[lightningcomponentbundlename](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_lightningcomponentbundlename)**
    If the custom action invokes an Aura component, the name of the Aura component bundle to which the component belongs.
-   **[lightningcomponentqualifiedname](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_lightningcomponentqualifiedname)**
    The fully qualified name of the Aura component invoked by the custom action.
-   **[lightningwebcomponentbundleid](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_lightningwebcomponentbundleid)**
    If the custom action invokes a Lightning web component, the ID of the Lightning web component bundle to which the component belongs.
-   **[lightningwebcomponentbundlename](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_lightningwebcomponentbundlename)**
    If the custom action invokes a Lightning web component, the name of the Lightning web component bundle to which the component belongs.
-   **[lightningwebcomponentqualifiedname](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_lightningwebcomponentqualifiedname)**
    The fully qualified name of the Lightning web component invoked by the custom action.
-   **[miniiconurl](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_miniiconurl)**
    The icon’s URL. This icon URL corresponds to the 16x16 icon used for the current Salesforce theme, introduced in Spring ’10, or the custom icon, if there is one.
-   **[showquickactionlcheader](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_showquickactionlcheader)**
    Indicates whether the Lightning component quick action header and footer are shown. If false, then both the header containing the quick action title and the footer containing the Save and Cancel buttons aren’t displayed.
-   **[showquickactionvfheader](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_showquickactionvfheader)**
    Indicates whether the Visualforce quick action header and footer should be shown. If false, then both the header containing the quick action title and the footer containing the Save and Cancel buttons aren’t displayed.
-   **[targetparentfield](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_targetparentfield)**
    The parent object type of the action. Links the target object to the parent object. For example, the value is Account if the target object is Contact and the parent object is Account.
-   **[targetrecordtypeid](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_targetrecordtypeid)**
    The record type of the target record.
-   **[targetsobjecttype](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_targetsobjecttype)**
    The action’s target object type.
-   **[visualforcepagename](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_visualforcepagename)**
    The name of the Visualforce page associated with the custom action.
-   **[visualforcepageurl](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_visualforcepageurl)**
    The URL of the Visualforce page associated with the action.
-   **[width](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_width)**
    The width in pixels of the action pane, for custom actions that call Visualforce pages, Canvas apps, or Lightning components.

### canvasapplicationname

The name of the Canvas application invoked by the custom action.

#### Signature

public String canvasapplicationname {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### colors

Array of color information. Each color is associated with a theme.

#### Signature

public List<Schema.DescribeColorResult> colors {get; set;}

#### Property Value

Type: [List<Schema.DescribeColorResult>](atlas.en-us.apexref.meta/apexref/apex_class_schema_describecolorresult.htm#apex_class_schema_describecolorresult "Contains color metadata information for a tab.")

### contextsobjecttype

The object used for the action. Was getsourceSobjectType() in API version 29.0 and earlier.

#### Signature

public String contextsobjecttype {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### defaultvalues

The action’s default values.

#### Signature

public List<QuickAction.DescribeQuickActionDefaultValue> defaultvalues {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[QuickAction.DescribeQuickActionDefaultValue](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactiondefaultvalue.htm#apex_class_quickaction_describequickactiondefaultvalue "Returns a default value for a quick action.")\>

### flowdevname

If the custom action invokes a flow, the fully qualified name of the flow.

#### Signature

public String flowdevname {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### flowrecordidvar

If the custom action invokes a flow, the input variable that the custom action passes the record’s ID to.

#### Signature

public String flowrecordidvar {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Valid values are null or recordId.

### height

The height in pixels of the action pane.

#### Signature

public Integer height {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### iconname

The name of the icon used for the action. If a custom icon is not used, this value isn’t set.

#### Signature

public String iconname {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### icons

Array of icons. Each icon is associated with a theme.

#### Signature

public List<Schema.DescribeIconResult> icons {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.DescribeIconResult](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_class_schema_describeiconresult "Contains icon metadata information for a tab.")\>

If no custom icon was associated with the quick action and the quick action creates a specific object, the icons will correspond to the icons used for the created object. For example, if the quick action creates an Account, the icon array will contain the icons used for Account.

If a custom icon was associated with the quick action, the array will contain that custom icon.

### iconurl

The URL of the icon used for the action. This icon URL corresponds to the 32x32 icon used for the current Salesforce theme, introduced in Spring ’10, or the custom icon, if there is one.

#### Signature

public String iconurl {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### layout

The section of the layout where the action resides.

#### Signature

public QuickAction.DescribeLayoutSection layout {get; set;}

#### Property Value

Type: [QuickAction.DescribeLayoutSection](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutsection.htm#apex_class_quickaction_describelayoutsection "Represents a section of a layout and consists of one or more columns and one or more rows (an array of QuickAction.DescribeLayoutRow).")

### lightningcomponentbundleid

If the custom action invokes an Aura component, the ID of the Aura component bundle to which the component belongs.

#### Signature

public String lightningcomponentbundleid {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### lightningcomponentbundlename

If the custom action invokes an Aura component, the name of the Aura component bundle to which the component belongs.

#### Signature

public String lightningcomponentbundlename {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### lightningcomponentqualifiedname

The fully qualified name of the Aura component invoked by the custom action.

#### Signature

public String lightningcomponentqualifiedname {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### lightningwebcomponentbundleid

If the custom action invokes a Lightning web component, the ID of the Lightning web component bundle to which the component belongs.

#### Signature

public String lightningwebcomponentbundleid {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### lightningwebcomponentbundlename

If the custom action invokes a Lightning web component, the name of the Lightning web component bundle to which the component belongs.

#### Signature

public String lightningwebcomponentbundlename {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### lightningwebcomponentqualifiedname

The fully qualified name of the Lightning web component invoked by the custom action.

#### Signature

public String lightningwebcomponentqualifiedname {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### miniiconurl

The icon’s URL. This icon URL corresponds to the 16x16 icon used for the current Salesforce theme, introduced in Spring ’10, or the custom icon, if there is one.

#### Signature

public String miniiconurl {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### showquickactionlcheader

Indicates whether the Lightning component quick action header and footer are shown. If false, then both the header containing the quick action title and the footer containing the Save and Cancel buttons aren’t displayed.

#### Signature

public Boolean showquickactionlcheader {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### showquickactionvfheader

Indicates whether the Visualforce quick action header and footer should be shown. If false, then both the header containing the quick action title and the footer containing the Save and Cancel buttons aren’t displayed.

#### Signature

public Boolean showquickactionvfheader {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### targetparentfield

The parent object type of the action. Links the target object to the parent object. For example, the value is Account if the target object is Contact and the parent object is Account.

#### Signature

public String targetparentfield {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### targetrecordtypeid

The record type of the target record.

#### Signature

public String targetrecordtypeid {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### targetsobjecttype

The action’s target object type.

#### Signature

public String targetsobjecttype {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### visualforcepagename

The name of the Visualforce page associated with the custom action.

#### Signature

public String visualforcepagename {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### visualforcepageurl

The URL of the Visualforce page associated with the action.

#### Signature

public String visualforcepageurl {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### width

The width in pixels of the action pane, for custom actions that call Visualforce pages, Canvas apps, or Lightning components.

#### Signature

public Integer width {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

## DescribeQuickActionResult Methods

The following are methods for DescribeQuickActionResult. All are instance methods.

-   **[getActionEnumOrId()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getActionEnumOrId)**
    Returns the unique ID for the action. If the action doesn’t have an ID, its API name is used.
-   **[getCanvasApplicationName()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getCanvasApplicationName)**
    Returns the name of the Canvas application, if used.
-   **[getColors()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getColors)**
    Returns an array of color information. Each color is associated with a theme.
-   **[getContextSobjectType()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getContextSobjectType)**
    Returns the object used for the action. Replaces getsourceSobjectType() in API version 30.0 and later.
-   **[getDefaultValues()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getDefaultValues)**
    Returns the default values for a action.
-   **[getFlowDevName()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getFlowDevName)**
    If the custom action invokes a flow, returns the fully qualified name of the flow invoked by the custom action.
-   **[getFlowRecordIdVar()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getFlowRecordIdVar)**
    If the custom action invokes a flow, returns the input variable that the custom action passes the record’s ID to.
-   **[getHeight()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getHeight)**
    Returns the height in pixels of the action pane.
-   **[getIconName()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getIconName)**
    Returns the actions’ icon name.
-   **[getIconUrl()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getIconUrl)**
    Returns the URL of the 32x32 icon used for the action.
-   **[getIcons()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getIcons)**
    Returns a list of Schema.DescribeIconResult objects that describe colors used in a tab.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getLabel)**
    Returns the action label.
-   **[getLayout()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getLayout)**
    Returns the layout sections that comprise an action.
-   **[getLightningComponentBundleId()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getLightningComponentBundleId)**
    If the custom action invokes an Aura component, returns the ID of the Aura component bundle to which the component belongs.
-   **[getLightningComponentBundleName()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getLightningComponentBundleName)**
    If the custom action invokes an Aura component, returns the name of the Aura component bundle to which the component belongs.
-   **[getLightningComponentQualifiedName()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getLightningComponentQualifiedName)**
    If the custom action invokes an Aura component, returns the fully qualified name of the Aura component invoked by the custom action.
-   **[getLightningWebComponentBundleId()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getLightningWebComponentBundleId)**
    If the custom action invokes a Lightning web component, returns the ID of the Lightning web component bundle to which the component belongs.
-   **[getLightningWebComponentBundleName()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getLightningWebComponentBundleName)**
    If the custom action invokes a Lightning web component, returns the name of the Lightning web component bundle to which the component belongs.
-   **[getLightningWebComponentQualifiedName()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getLightningWebComponentQualifiedName)**
    If the custom action invokes a Lightning web component, returns the fully qualified name of the Lightning web component invoked by the custom action.
-   **[getMiniIconUrl()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getMiniIconUrl)**
    Returns the 16x16 icon URL.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getName)**
    Returns the action name.
-   **[getShowQuickActionLcHeader()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getShowQuickActionLcHeader)**
    Returns an indication of whether the Lightning component quick action header and footer are shown.
-   **[getShowQuickActionVfHeader()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getShowQuickActionVfHeader)**
    Returns an indication of whether the Visualforce quick action header and footer should be shown.
-   **[getSourceSobjectType()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getSourceSobjectType)**
    Returns the object type used for the action.
-   **[getTargetParentField()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getTargetParentField)**
    Returns the parent object’s type for the action.
-   **[getTargetRecordTypeId()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getTargetRecordTypeId)**
    Returns the record type of the targeted record.
-   **[getTargetSobjectType()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getTargetSobjectType)**
    Returns the action’s target object type.
-   **[getType()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getType)**
    Returns a create or custom Visualforce action.
-   **[getVisualforcePageName()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getVisualforcePageName)**
    If Visualforce is used, returns the name of the associated page for the action.
-   **[getVisualforcePageUrl()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getVisualforcePageUrl)**
    Returns the URL of the Visualforce page associated with the action.
-   **[getWidth()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_QuickAction_DescribeQuickActionResult_getWidth)**
    If a custom action is created, returns the width in pixels of the action pane.

### getActionEnumOrId()

Returns the unique ID for the action. If the action doesn’t have an ID, its API name is used.

#### Signature

public String getActionEnumOrId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getCanvasApplicationName()

Returns the name of the Canvas application, if used.

#### Syntax

public String getCanvasApplicationName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getColors()

Returns an array of color information. Each color is associated with a theme.

#### Signature

public List<Schema.DescribeColorResult> getColors()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.") <[Schema.DescribeColorResult](atlas.en-us.apexref.meta/apexref/apex_class_schema_describecolorresult.htm#apex_class_schema_describecolorresult "Contains color metadata information for a tab.")\>

### getContextSobjectType()

Returns the object used for the action. Replaces getsourceSobjectType() in API version 30.0 and later.

#### Signature

public String getContextSobjectType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDefaultValues()

Returns the default values for a action.

#### Signature

public List<QuickAction.DescribeQuickActionDefaultValue> getDefaultValues()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[QuickAction.DescribeQuickActionDefaultValue](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactiondefaultvalue.htm#apex_class_quickaction_describequickactiondefaultvalue "Returns a default value for a quick action.")\>

### getFlowDevName()

If the custom action invokes a flow, returns the fully qualified name of the flow invoked by the custom action.

#### Signature

public String getFlowDevName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getFlowRecordIdVar()

If the custom action invokes a flow, returns the input variable that the custom action passes the record’s ID to.

#### Signature

public String getFlowRecordIdVar()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getHeight()

Returns the height in pixels of the action pane.

#### Signature

public Integer getHeight()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getIconName()

Returns the actions’ icon name.

#### Signature

public String getIconName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getIconUrl()

Returns the URL of the 32x32 icon used for the action.

#### Signature

public String getIconUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getIcons()

Returns a list of Schema.DescribeIconResult objects that describe colors used in a tab.

#### Signature

public List<Schema.DescribeIconResult> getIcons()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.DescribeIconResult](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_class_schema_describeiconresult "Contains icon metadata information for a tab.")\>

### getLabel()

Returns the action label.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLayout()

Returns the layout sections that comprise an action.

#### Signature

public QuickAction.DescribeLayoutSection getLayout()

#### Return Value

Type: [QuickAction.DescribeLayoutSection](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutsection.htm#apex_class_quickaction_describelayoutsection "Represents a section of a layout and consists of one or more columns and one or more rows (an array of QuickAction.DescribeLayoutRow).")

### getLightningComponentBundleId()

If the custom action invokes an Aura component, returns the ID of the Aura component bundle to which the component belongs.

#### Signature

public String getLightningComponentBundleId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLightningComponentBundleName()

If the custom action invokes an Aura component, returns the name of the Aura component bundle to which the component belongs.

#### Signature

public String getLightningComponentBundleName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLightningComponentQualifiedName()

If the custom action invokes an Aura component, returns the fully qualified name of the Aura component invoked by the custom action.

#### Signature

public String getLightningComponentQualifiedName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLightningWebComponentBundleId()

If the custom action invokes a Lightning web component, returns the ID of the Lightning web component bundle to which the component belongs.

#### Signature

public String getLightningWebComponentBundleId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLightningWebComponentBundleName()

If the custom action invokes a Lightning web component, returns the name of the Lightning web component bundle to which the component belongs.

#### Signature

public String getLightningWebComponentBundleName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLightningWebComponentQualifiedName()

If the custom action invokes a Lightning web component, returns the fully qualified name of the Lightning web component invoked by the custom action.

#### Signature

public String getLightningWebComponentQualifiedName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getMiniIconUrl()

Returns the 16x16 icon URL.

#### Signature

public String getMiniIconUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

Returns the action name.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getShowQuickActionLcHeader()

Returns an indication of whether the Lightning component quick action header and footer are shown.

#### Signature

public Boolean getShowQuickActionLcHeader()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If false, then both the header containing the quick action title and the footer containing the Save and Cancel buttons aren’t displayed.

### getShowQuickActionVfHeader()

Returns an indication of whether the Visualforce quick action header and footer should be shown.

#### Signature

public Boolean getShowQuickActionVfHeader()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If false, then both the header containing the quick action title and the footer containing the Save and Cancel buttons aren’t displayed.

### getSourceSobjectType()

Returns the object type used for the action.

#### Signature

public String getSourceSobjectType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getTargetParentField()

Returns the parent object’s type for the action.

#### Signature

public String getTargetParentField()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getTargetRecordTypeId()

Returns the record type of the targeted record.

#### Signature

public String getTargetRecordTypeId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getTargetSobjectType()

Returns the action’s target object type.

#### Signature

public String getTargetSobjectType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getType()

Returns a create or custom Visualforce action.

#### Signature

public String getType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getVisualforcePageName()

If Visualforce is used, returns the name of the associated page for the action.

#### Signature

public String getVisualforcePageName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getVisualforcePageUrl()

Returns the URL of the Visualforce page associated with the action.

#### Signature

public String getVisualforcePageUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getWidth()

If a custom action is created, returns the width in pixels of the action pane.

#### Signature

public Integer getWidth()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

## Related Topics

- QuickAction (atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm)
- DescribeQuickActionResult Properties (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm)
- DescribeQuickActionResult Methods (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm)
- canvasapplicationname (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm)
- colors (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm)
- contextsobjecttype (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm)
- defaultvalues (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm)
- flowdevname (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm)
- flowrecordidvar (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm)
- height (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm)
