---
title: "FlexiPage"
domain: metadata-api
topic: flexipage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:39.948Z
estimatedTokens: 7801
keywords: [FlexiPage, Represents, metadata, associated, Lightning, page., page, represents, customizable, screen, made, regions, containing, components., Important, Note, File, Suffix, Directory, Location]
---

# FlexiPage

> Represents the metadata associated with a Lightning page. A
         Lightning page represents a customizable screen made up of regions containing Lightning
         components.

# FlexiPage

Represents the metadata associated with a Lightning page. A Lightning page represents a customizable screen made up of regions containing Lightning components.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

These pages are known as FlexiPages in the API, but are referred to as Lightning pages in the rest of the Salesforce documentation and UI.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

In API version 49.0 and later, arrays in a FlexiPage are represented as valueList. Each array element is represented as valueListItem, and the element name is represented as value. In API version 48.0 and earlier, arrays are represented as value and array elements are formatted as a comma-separated list. Any FlexiPage retrieved using API version 49.0 or later uses valueList to represent component property array values, regardless of which API version was used to create the FlexiPage.

Lightning pages are used in several places.

-   In the Salesforce mobile app, a Lightning page is the home page for an app that appears in the navigation menu.
-   In Lightning Experience, Lightning pages can be used:
    -   To customize the layout of record pages, the Salesforce Home page, and the Email Application pane in the Outlook and Gmail integrations.
    -   As the home page for an app.
    -   As the utility bar for a Lightning app.

For more information on Lightning pages, see Salesforce Help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The namespace prefix is important to help identify the source of items like fields, custom objects, and more. For example, when working with FlexiPages, we recommend keeping namespaces for object fields, because removing them can cause unexpected results such as name collisions.

## File Suffix and Directory Location

FlexiPage components have the suffix .flexipage and are stored in the flexipages folder.

## Version

FlexiPage components are available in API version 29.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | The optional description text of the Lightning page. |
| events | FlexiPageEvent[] | The list of events associated with the Lightning page.This field is available in API version 53.0 and later. |
| flexiPageRegions | FlexiPageRegion[] | The list of regions of a page. |
| masterLabel | string | Required. The label for the Lightning page, which displays in Setup. |
| pageTemplate | string | Deprecated. Use this field in API versions 33.0 to 38.0 only. In later versions, use template.Required. The template associated with the Lightning page. |
| parentFlexiPage | string | The name of the Lightning page that this page inherits behavior from.This field is available in API version 37.0 or later. |
| platformActionlist | PlatformActionList | The list of all actions, and their order, that display on a Lightning app page. In the Salesforce mobile app, the actions appear in the action bar.This field is available in API version 34.0 and later. |
| quickActionList | QuickActionList | The list of quick actions associated with the Lightning page. |
| sobjectType | string | The object the Lightning page is associated with. For Lightning pages of type AppPage or HomePage, this field is null.After the value of this field is set, it can’t be changed.This field is available in API version 37.0 or later. |
| template | FlexiPageTemplateInstance | Required. The template associated with the Lightning page.This field is available in API version 39.0 and later. |
| type | FlexiPageType (enumeration of type string) | Required. The type of a page. In API versions 32.0 through 36.0, this field can only have a value of AppPage.Valid values are:CdpRecordPage—A Lightning page that is used to override a CDPNearCoreObject record page in Lightning Experience. This value is available in API version 54.0 and later for orgs that have Data 360 enabled.AppPage—A Lightning page that is used as the home page for a custom app.CommAppPage—A Lightning page that is used to represent a custom page, as created in the Experience Builder. This value is available in API version 37.0 and later.CommContractDetailViewPage—This value is available in API version 64.0 and later.CommCheckoutPage—A Lightning page that is used to create a B2B Commerce checkout, as created in the Experience Builder. This value is available in API version 46.0 and later.CommFlowPage A Lightning page used to override a flow page, as created in the Experience Builder. This value is available in API version 45.0 and later.CommForgotPasswordPage—A Lightning page that’s used to override a forgot-password page, as created in Experience Builder. This value is available in API version 39.0 and later.CommFlowPage—An out-of-the-box flow page, as created in Experience Builder. This value is available in API version 45.0 and later.CommGlobalSearchResultPage A Lightning page used to override the global search result page, as created in Experience Builder. This value is available in API version 41.0 and later.CommLoginPage—A Lightning page that’s used to override the login page, as created in Experience Builder. This value is available in API version 39.0 and later.CommNoSearchResultsPage—An Experience Builder site page for B2B searches that return no results. The URL for this page is no-results/:term. The page starts out empty. You can add any component to it that accepts parameters to achieve the desired “no results” experience. For example, you can place an HTML Editor component or CMS components for recommendations, banners, help, and support. This value is available in API version 48.0 and later.CommObjectPage—A Lightning page used to override an object page, as created in Experience Builder. This value is available in API version 38.0 and later.CommOrderComfirmationPage—A Lightning page that is used to create a B2B Commerce order confirmation page in checkout, as created in the Experience Builder. This value is available in API version 46.0 and later.CommQuickActionCreatePage—A Lightning page used to override the create record page, as created in Experience Builder. This value is available in API version 38.0 and later.CommRecordPage—A Lightning page used to override a record page, as created in the Experience Builder. This value is available in API version 38.0 and later.CommRelatedListPage—A Lightning page used to override a related list page, as created in the Experience Builder. This value is available in API version 38.0 and later.CommSearchResultPage—A Lightning page used to override the search result page, as created in Experience Builder. This value is available in API version 38.0 and later.CommSelfRegisterPage—A Lightning page used to override the self-registration page, as created in Experience Builder. This value is available in API version 39.0 and later.CommThemeLayoutPage—A Lightning page used to override a theme layout page, as created in the Experience Builder. This value is available in API version 38.0 and later.EmbeddedServicePage This value is available in API version 45.0 and later.EmailContentPage — A page that contains the builder markup for your email content. When you edit email content in the builder, the FlexiPage object remembers where you put the components.Because they include builder markup, you can't retrieve or deploy FlexiPages when type is EmailContentPage.EmailTemplatePage — A page that contains the builder markup for your email template. When you edit an email template in the builder, the FlexiPage object remembers where you put the components.Because they include builder markup, you can't retrieve or deploy FlexiPages when type is EmailTemplatePage or EmailContentPage.ForecastingPage —A Lightning page that is used to override the default forecasts page in Lightning Experience. This value is available in API version 57.0 and later.HomePage—A Lightning page that is used to override the Home page in Lightning Experience. This value is available in API version 37.0 and later.MailAppAppPage—An email application pane used to override the default layout in the Outlook and Gmail integrations. This value is available in API version 38.0 and later.OmniSupervisorPageType—A Lightning page used to customize the user interface on the Omni-Channel Supervisor page. This value is available in API version 60.0 and later.RecordPage—A Lightning page used to override an object record page in Lightning Experience. This value is available in API version 37.0 and later.RecordPreview A Lightning page used to override standard lookup previews when hovering over previewable records in Lightning Experience.This value is available in API version 45.0 and later.UtilityBar—A Lightning page used as the utility bar in Lightning Experience apps. This value is available in API version 38.0 and later.VoiceExtension—A Lightning page used to customize user interfaces and agent actions in the Omni-Channel widget for Service Cloud Voice. This value is available in API version 57.0 and later.This field is available in API version 32.0 and later. |

## FlexiPageEvent

An event associated with the Lightning page. Available in API version 53.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| sourceName | string | Required. The name of the event source item. If the source is a custom Lightning web component, this field is the name of the component.In API 53.0, a source can be only a Lightning web component. |
| sourceProperties | FlexiPageEventSourceProperty[] | The list of properties associated with the event source. |
| sourceType | FlexipageEventSourceTypeEnum (enumeration of type string) | Required. The type of item assigned as the event source.In API version 53.0, this field can have only a value of Component. |
| targets | FlexiPageEventTarget[] | The list of targets associated with the event source. |

## FlexiPageEventSourceProperty

A property associated with an event. Available in API version 53.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Required. In API version 53.0 and later, the value of this field can be only eventName. |
| value | string | Required. If the name field value is eventName, this field is the name of the event.If the event source is a Lightning web component, this value must be the same as the event name defined in the source component’s js-meta.xml file. |

## FlexiPageEventTarget

A target associated with an event source on the Lightning page. Available in API version 53.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| mappings | FlexiPageEventPropertyMapping[] | A list of key-value pairs for an event’s source-to-target bindings. |
| method | string | Required.The only valid value is updateProperties. |
| name | string | Required. The name of the event target.Valid values are:flexipage:componentService |
| properties | FlexiPageEventTargetProperty[] | List of properties of the event target. |
| type | FlexiPageEventTargetTypeEnum (enumeration of type string) | Required. The type of item assigned as the event target.Valid values are:FlexipageServices—A component on the Lightning page. |

## FlexiPageEventPropertyMapping

A key-value pair for an event’s source-to-target bindings. Available in API version 53.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Required. Name of the target property that changes when the event is triggered. |
| value | string | Value of the target property when the event occurs.For properties of type string, integer, and boolean, you can use an expression to define their value. Valid expression format is {!Event.eventPropertyName}. Event is the only context supported for expressions in interactions. |

## FlexiPageEventTargetProperty

A property on the event source’s target represented as a key-value pair. Available in API version 53.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Required. In API version 53.0 and later, the value of this field can be only componentIdentifier |
| value | string | Required. The ComponentInstance identifier value for the component. |

## FlexiPageRegion

FlexiPage Region represents the properties of a region of a page. A region can contain a record list component or a recent items component that can be scoped to a set of entities.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

A Lightning page region can contain up to 100 components.

| Field Name | Field Type | Description |
| --- | --- | --- |
| appendable | RegionFlagStatus (enumeration of type string) | This field is available in Digital Experiences in API 45.0 or later, but is reserved for future use for all other areas.Valid values are:disabledenabledThis field is assessed in combination with replaceable and prependableIf all the properties are set to enabled, the region is unlockedIf all the properties are set to disabled, the region is lockedIf none of the properties are specified OR any of these three properties are missing, the region is unlocked.This field is available in API version 35.0 or later. |
| componentInstances | ComponentInstance[] | Properties and name of the component instance.This field was removed in API version 49.0. In API version 49.0 and later, use the itemInstances field instead. |
| itemInstances | ItemInstance[] | Array of item instances, which can contain components and fields.This field is available in API version 49.0 or later. |
| mode | FlexiPageRegionMode (enumeration of type string) | This field is reserved for future use.Valid values are:AppendPrependReplaceThis field is available in API version 35.0 or later. |
| name | string | Required. Unique name of the FlexiPage region. |
| prependable | RegionFlagStatus (enumeration of type string) | This field is available in Digital Experiences in API 45.0 or later, but is reserved for future use for all other areas.Valid values are:disabledenabledThis field is assessed in combination with appendable and replaceable.If all the properties are set to enabled, the region is unlockedIf all the properties are set to disabled, the region is lockedIf none of the properties are specified OR any of these three properties are missing, the region is unlocked.This field is available in API version 35.0 or later. |
| replaceable | RegionFlagStatus (enumeration of type string) | This field is available in Digital Experiences in API 45.0 or later, but is reserved for future use for all other areas.Valid values are:disabledenabledThis field is assessed in combination with appendable and prependable.If all the properties are set to enabled, the region is unlockedIf all the properties are set to disabled, the region is lockedIf none of the properties are specified OR any of these three properties are missing, the region is unlocked.This field is available in API version 35.0 or later. |
| type | FlexiPageRegionType (enumeration of type string) | Required. The type of FlexiPage region.Valid values are:Background—Represents a region for background utility items, which aren’t visible in the UI. Supported for utility bars only.FacetRegionThis field is available in API version 35.0 or later. |

## ItemInstance

Instance of a component or field on a Lightning page. Available in API version 49.0 or later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| componentInstance | ComponentInstance | Properties and name of the component instance. |
| fieldInstance | FieldInstance | API name, label, and visibility rule information of the field component. This field is available only on Lightning pages that use Dynamic Forms. |

## ComponentInstance

Instance of a component in a page, such as a filter list.

| Field Name | Field Type | Description |
| --- | --- | --- |
| componentInstanceProperties | ComponentInstanceProperty[] | The value of a single property in a component instance. |
| componentName | string | Required. The name of a single instance of a component. |
| identifier | string | Required. The unique name of the ComponentInstance. Provides a way to uniquely identify an individual instance of a component on a Lightning page. This field has a maximum limit of 120 characters.This field is available in API version 53.0 and later. |
| visibilityRule | UiFormulaRule | A set of one or more filters that define the conditions under which the component displays on the page.If the rule evaluates to true, the component displays on the page. If false, it doesn't display. If this field is null, the component displays by default.This field is available in API version 41.0 and later. |

## ComponentInstanceProperty

Value of a single property in a component instance. ComponentInstanceProperty has a maximum limit of 10,000 characters.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Name of the property, unique within the component instance. For Lightning components, this value is the <aura:attribute> as defined in the .cmp file. |
| type | ComponentInstancePropertyTypeEnum (enumeration of type string) | If this field value is null, then the ComponentInstanceProperty values apply to the Lightning component. If this field value is decorator, then the ComponentInstanceProperty values apply to the component decorator for the Lightning component.The component decorator is a wrapper around a Lightning component. The decorator can apply more capabilities to the component when it renders on a specific page in Lightning Experience. For example, you can configure a component decorator around a component on the Lightning Experience utility bar to set the component’s height or width when opened. The UtilityBar is the only page type that supports component decorators.Valid values are:decoratorThis field is available in API version 38.0 or later. |
| value | string | Reference or value of the property.When defining a Related List component, to use a parent record set the parentFieldApiName value to object.field_name. If you don’t want to use a parent record, set the value to object.Id. |
| valueList | ComponentInstancePropertyList | An array of values in a component instance. Available in API version 49.0 and later. |

**Tabs**

When you give a standard label to a tab in a Tabs component—such as Activity, Collaborate, or Details—and when the name field is set to title, the value field uses a system-defined value instead of the label. Here are some examples of the system-defined values:

-   Standard.Tab.activity
-   Standard.Tab.collaborate
-   Standard.Tab.detail
-   Standard.Tab.feed
-   Standard.Tab.preview
-   Standard.Tab.relatedLists

For example, let’s say you have a Lightning page that contains a tab with the standard label “Activity”. If you query the definition that page, you see the system-defined name of the tab, not the label, in value.

```

```

**Save Options**

Save options are available on pages of type RecordPage only, when users edit an account or when they create, edit, or clone a case or lead. Save options are configured as a ComponentInstanceProperty under FlexiPageTemplateInstance.

Set the ComponentInstanceProperty name to saveOptions and use value to define the checkbox values. The value field in this case is not a ComponentInstancePropertyList, but instead is a string representation of a JSON array of name and value pairs representing each checkbox name and its value.

| API Name | Available Objects | Available Values | UI Label |
| --- | --- | --- | --- |
| UseDefaultAssignmentRule | Account | NONEAPPLY_OPTION_WITHOUT_CHECKBOX_DISPLAYSHOW_CHECKBOX_WITH_DEFAULT_OFFSHOW_CHECKBOX_WITH_DEFAULT_ON | Evaluate this account against territory rules on save |
| UseDefaultAssignmentRule | Lead | NONESHOW_CHECKBOX_WITH_DEFAULT_OFFSHOW_CHECKBOX_WITH_DEFAULT_ON | Assign using active assignment rule |
| UseDefaultAssignmentRule | Case | NONEAPPLY_OPTION_WITHOUT_CHECKBOX_DISPLAYSHOW_CHECKBOX_WITH_DEFAULT_OFFSHOW_CHECKBOX_WITH_DEFAULT_ON | Assign using active assignment rule |
| triggerOtherEmail | Case | NONESHOW_CHECKBOX_WITH_DEFAULT_OFFSHOW_CHECKBOX_WITH_DEFAULT_ON | Send notification email to Contact |

| Value | UI Result |
| --- | --- |
| NONE | Don’t display the checkbox and don’t apply any save options during save. |
| APPLY_OPTION_WITHOUT_CHECKBOX_DISPLAY | Don’t display the checkbox, but apply the save option value during save. |
| SHOW_CHECKBOX_WITH_DEFAULT_OFF | Display the checkbox, unchecked by default. |
| SHOW_CHECKBOX_WITH_DEFAULT_ON | Display the checkbox, checked by default. |

For example, you can set cases, when saved, to run the **Assign using active assignment rule** without displaying a checkbox, and display the **Send notification email to Contact** checkbox, checked by default.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Set assignment rules, territory rules, and email templates before configuring them as save options.

## ComponentInstancePropertyList

Value of an element in an array in a component instance.

| Field Name | Field Type | Description |
| --- | --- | --- |
| valueListItems | ComponentInstancePropertyListItem[] | An array of elements in a component instance. |

## ComponentInstancePropertyListItem

Name of an element in an array in a component instance.

| Field Name | Field Type | Description |
| --- | --- | --- |
| value | string | Name of an element in an array in a component instance. |

In API version 49.0 and later, arrays in a FlexiPage are represented as valueList. Each array element is represented as valueListItem, and the element name is represented as value.

For example, if you have an array of actions with API names Clone and Edit, the array is represented as valueList, with two valueListItems. One valueListItems has the value Clone, and one valueListItems has the value Edit.

```

```

## UiFormulaRule

A set of one or more filters that define the conditions under which a component displays on a Lightning page. For example, you could construct a filter that causes a rich text component on an opportunity page to display only when the Amount is greater than $1,000,000. Available in API version 41.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Specifies advanced filter conditions such as 1 AND 2. |
| criteria | UiFormulaCriterion[] | List of one or more filters that, when evaluated, determine component visibility. |

## UiFormulaCriterion

A single filter that when evaluated, helps define component visibility on a Lightning page. Available in API version 41.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| leftValue | string | Required. The field upon which the filter is based. For example, AMOUNT. |
| operator | string | Required. Defines the operator used to filter the data. Valid values are:CONTAINSEQUALNE—not equalGT—greater thanGE—greater than or equalLE—less than or equalLT—less than |
| rightValue | string | The value by which you want to evaluate the component’s visibility. For example, 1000000. |

You can use these expressions in the leftValue field when setting filters for component visibility.

-   {!$Client.FormFactor}—Use this expression to control component visibility based on the device the page is being rendered on. Valid values are Small (phone), Medium (tablet), and Large (Lightning Experience desktop). Setting the value to Small for record pages is supported only in orgs that are enabled for the new Salesforce mobile app. This expression is supported for app pages in API version 41.0 and later, and record pages in API version 47.0 and later.
-   {!$Permission.CustomPermission.permissionName}—Use this expression to control component visibility based on the custom permissions of the user viewing the Lightning page. Supported for app, Home, and record pages only.
-   {!$Permission.StandardPermission.permissionName}—Use this expression to control component visibility based on the standard permissions of the user viewing the Lightning page. Supported for app, Home, and record pages only.
-   {!Record.field}—Supported for record pages only.
-   {!$User.field}—Supported for app, Home, and record pages only.

For example, to display a component only when it renders on a phone, add this filter: {!$Client.FormFactor} EQUAL "SMALL". Or, to display a component only to the System Administrator, use {!$User.Profile.Name} EQUAL "System Administrator".

Expressions in component visibility rules can span no more than five fields. For example, {!Record.Account.Owner.Manager.Manager.Manager.LastName} has six spans and therefore isn’t supported.

## FieldInstance

Represents a single field component that resides on a Lightning page. Available in API version 49.0 and later. This subtype is available only on Lightning Pages that have enabled Dynamic Forms.

| Field Name | Field Type | Description |
| --- | --- | --- |
| fieldInstanceProperties | FieldInstanceProperty[] | Properties of the field instance. Contains a name and value pair for each property associated with the field. |
| fieldItem | string | The API name of the field, prefixed with its context. For example, record fields are prefixed with Record.. |
| identifier | string | Required. The unique name of the FieldInstance. Provides a way to uniquely identify an individual instance of a field on a Dynamic Forms-enabled Lightning page. This field has a maximum limit of 120 characters.This field is available in API version 53.0 and later. |
| visibilityRule | UiFormulaRule | A set of one or more filters that define the conditions under which the component displays on the page. If the rule evaluates to true, the component displays on the page. If false, it doesn't display. If this field is null, the component displays by default. |

## FieldInstanceProperty

Represents a single property of a field instance. Available in API version 49.0 and later. This subtype is available only on Lightning pages that have enabled Dynamic Forms.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Name of the property, unique within the field instance.Valid values are:conditionalFormatRulesetAvailable in API version 62.0 and later.uiBehaviorAvailable in API version 49.0 and later. |
| value | string | Reference or value of the property.When the name value is uiBehavior, valid values for this field are:NoneReadonlyRequired |

## FlexiPageTemplateInstance

FlexiPageTemplateInstance represents an instance of a Lightning page template.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Required. The name of a single instance of a template. |
| properties | ComponentInstanceProperty[] | The value of a single property in a template instance.Valid only for:CommThemeLayoutPageDynamic Forms-enabled pages of type RecordPage that are associated with account, case, or lead objectsContains a name and value pair for each theme layout property associated with the page template. In Experience Builder, the theme layout and its properties appear in the Theme area. |

## PlatformActionList

PlatformActionList represents the list of actions, and their order, that display on a Lightning app page. Available in API version 34.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionListContext | PlatformActionListContext (enumeration of type string) | Required. The context of the action list. Valid values are:AssistantBannerPhotoChatterDockableFeedElementFlexipageGlobalListViewListViewDefinitionListViewRecordLookupMruListMruRowObjectHomeChartPhotoRecordRecordEditRelatedListRelatedListRecord |
| platformActionListItems | PlatformActionListItem[] | The actions in the PlatformActionList. |
| relatedSourceEntity | string | When the ActionListContext is RelatedList or RelatedListRecord, this field represents the API name of the related list to which the action belongs. |

## PlatformActionListItem

PlatformActionListItem represents an action in the PlatformActionList. Available in API version 34.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionName | string | Required. The API name for the action in the list. |
| actionType | PlatformActionType (enumeration of type string) | Required. The type of action. Valid values are:ActionLink—An indicator on a feed element that targets an API, a web page, or a file, represented by a button in the Salesforce Chatter feed UI.CustomButton—When clicked, opens a URL or a Visualforce page in a window or executes JavaScript.InvocableActionProductivityAction—Productivity actions are predefined and attached to a limited set of objects. Productivity actions include Send Email, Call, Map, View Website, and Read News. Except for the Call action, you can’t edit productivity actions.QuickAction—A global or object-specific action.StandardButton—A predefined Salesforce button such as New, Edit, and Delete. |
| sortOrder | int | Required. The placement of the action in the list. |
| subtype | string | The subtype of the action. For quick actions, the subtype is QuickActionType. For custom buttons, the subtype is WebLinkTypeEnum. For action links, subtypes are Api, ApiAsync, Download, and Ui. Standard buttons and productivity actions have no subtype. |

## Declarative Metadata Sample Definition

Here’s a sample XML FlexiPage component definition for a custom opportunity record page. It includes a tab set and a rich text component with visibility rules assigned to it.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

As an Experience Builder site page, three initial regions in the definition show the header region as locked, the content region as unlocked, and the footer region as unlocked.

```

```

And, here’s the sample package.xml file that references the FlexiPage component definition:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<componentInstances>
  <componentInstanceProperties>
    <name>title</name>
    <value>Standard.Tab.activity</value>
  </componentInstanceProperties>
    <componentName>flexipage:tab</componentName>
</componentInstances>
```

```
saveOptions = [{"name":"UseDefaultAssignmentRule","value":"APPLY_OPTION_WITHOUT_CHECKBOX_DISPLAY"}, {"name":"triggerOtherEmail","value":"SHOW_CHECKBOX_WITH_DEFAULT_ON"}]
```

```
<componentInstances>
  <componentInstanceProperties> 
    <name>actionApiName</name>
    <valueList>
      <valueListItems>
        <value>Clone</value>
      </valueListItems>
      <valueListItems>
        <value>Edit</value>
      </valueListItems>
    </valueList>
  </componentInstanceProperties>
</componentInstances>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<FlexiPage xmlns="http://soap.sforce.com/2006/04/metadata">
    <flexiPageRegions>
        <itemInstances>
            <componentInstance>
                <componentInstanceProperties>
                    <name>collapsed</name>
                    <value>false</value>
                </componentInstanceProperties>
                <componentInstanceProperties>
                    <name>hideChatterActions</name>
                    <value>false</value>
                </componentInstanceProperties>
                <componentInstanceProperties>
                    <name>numVisibleActions</name>
                    <value>3</value>
                </componentInstanceProperties>
                <componentName>force:highlightsPanel</componentName>
            </componentInstance>
        </itemInstances>
        <name>header</name>
        <type>Region</type>
    </flexiPageRegions>
    <flexiPageRegions>
        <itemInstances>
            <componentInstance>
                <componentInstanceProperties>
                    <name>hideUpdateButton</name>
                    <value>false</value>
                </componentInstanceProperties>
                <componentInstanceProperties>
                    <name>variant</name>
                    <value>linear</value>
                </componentInstanceProperties>
                <componentName>runtime_sales_pathassistant:pathAssistant</componentName>
            </componentInstance>
        </itemInstances>
        <name>subheader</name>
        <type>Region</type>
    </flexiPageRegions>
    <flexiPageRegions>
        <itemInstances>
            <componentInstance>
                <componentInstanceProperties>
                    <name>entityNames</name>
                    <valueList>
                        <valueListItems>
                            <value>Opportunity</value>
                        </valueListItems>
                    </valueList>
                </componentInstanceProperties>
                <componentInstanceProperties>
                    <name>maxRecords</name>
                    <value>3</value>
                </componentInstanceProperties>
                <componentName>flexipage:recentItems</componentName>
            </componentInstance>
        </itemInstances>
        <name>Facet-afbed70e-277a-41f5-9919-34651ff97773</name>
        <type>Facet</type>
    </flexiPageRegions>
    <flexiPageRegions>
        <itemInstances>
            <componentInstance>
                <componentInstanceProperties>
                    <name>relatedListComponentOverride</name>
                    <value>NONE</value>
                </componentInstanceProperties>
                <componentName>force:relatedListContainer</componentName>
            </componentInstance>
        </itemInstances>
        <name>facet-77f21b6f-ad73-4d79-838a-79e0df27cc63</name>
        <type>Facet</type>
    </flexiPageRegions>
    <flexiPageRegions>
        <itemInstances>
            <componentInstance>
                <componentName>force:detailPanel</componentName>
            </componentInstance>
        </itemInstances>
        <name>facet-c22fcfa7-d6f2-46ab-ac03-6c92e7398da1</name>
        <type>Facet</type>
    </flexiPageRegions>
    <flexiPageRegions>
        <itemInstances>
            <componentInstance>
                <componentName>runtime_sales_activities:activityPanel</componentName>
            </componentInstance>
        </itemInstances>
        <name>Facet-u9v2x6h8u4k</name>
        <type>Facet</type>
    </flexiPageRegions>
    <flexiPageRegions>
        <itemInstances>
            <componentInstance>
                <componentInstanceProperties>
                    <name>body</name>
                    <value>Facet-afbed70e-277a-41f5-9919-34651ff97773</value>
                </componentInstanceProperties>
                <componentInstanceProperties>
                    <name>title</name>
                    <value>Recent Items</value>
                </componentInstanceProperties>
                <componentName>flexipage:tab</componentName>
            </componentInstance>
        </itemInstances>
        <itemInstances>
            <componentInstance>
                <componentInstanceProperties>
                    <name>active</name>
                    <value>true</value>
                </componentInstanceProperties>
                <componentInstanceProperties>
                    <name>body</name>
                    <value>facet-77f21b6f-ad73-4d79-838a-79e0df27cc63</value>
                </componentInstanceProperties>
                <componentInstanceProperties>
                    <name>title</name>
                    <value>Standard.Tab.relatedLists</value>
                </componentInstanceProperties>
                <componentName>flexipage:tab</componentName>
            </componentInstance>
        </itemInstances>
        <itemInstances>
            <componentInstance>
                <componentInstanceProperties>
                    <name>body</name>
                    <value>facet-c22fcfa7-d6f2-46ab-ac03-6c92e7398da1</value>
                </componentInstanceProperties>
                <componentInstanceProperties>
                    <name>title</name>
                    <value>Standard.Tab.detail</value>
                </componentInstanceProperties>
                <componentName>flexipage:tab</componentName>
            </componentInstance>
        </itemInstances>
        <itemInstances>
            <componentInstance>
                <componentInstanceProperties>
                    <name>body</name>
                    <value>Facet-u9v2x6h8u4k</value>
                </componentInstanceProperties>
                <componentInstanceProperties>
                    <name>title</name>
                    <value>Standard.Tab.activity</value>
                </componentInstanceProperties>
                <componentName>flexipage:tab</componentName>
            </componentInstance>
        </itemInstances>
        <name>facet-27334405-c871-463f-bc20-b3713bbb4884</name>
        <type>Facet</type>
    </flexiPageRegions>
    <flexiPageRegions>
        <itemInstances>
            <componentInstance>
                <componentInstanceProperties>
                    <name>tabs</name>
                    <value>facet-27334405-c871-463f-bc20-b3713bbb4884</value>
                </componentInstanceProperties>
                <componentName>flexipage:tabset</componentName>
            </componentInstance>
        </itemInstances>
        <name>main</name>
        <type>Region</type>
    </flexiPageRegions>
    <flexiPageRegions>
        <itemInstances>
            <componentInstance>
                <componentInstanceProperties>
                    <name>decorate</name>
                    <value>true</value>
                </componentInstanceProperties>
                <componentInstanceProperties>
                    <name>richTextValue</name>
                    <value>&lt;p style=&quot;text-align: center;&quot;&gt;&lt;span style=&quot;background-color: rgb(255, 255, 255); font-size: 18px; color: rgb(11, 11, 11);&quot;&gt;A million dollar opportunity closed! Oh yeah!&lt;/span&gt;&lt;/p&gt;</value>
                </componentInstanceProperties>
                <componentName>flexipage:richText</componentName>
                <visibilityRule>
                    <booleanFilter>1 AND 2</booleanFilter>
                    <criteria>
                        <leftValue>{!Record.Amount}</leftValue>
                        <operator>GE</operator>
                        <rightValue>1000000</rightValue>
                    </criteria>
                    <criteria>
                        <leftValue>{!Record.StageName}</leftValue>
                        <operator>EQUAL</operator>
                        <rightValue>Closed Won</rightValue>
                    </criteria>
                </visibilityRule>
            </componentInstance>
        </itemInstances>
        <itemInstances>
            <componentInstance>
                <componentInstanceProperties>
                    <name>decorate</name>
                    <value>true</value>
                </componentInstanceProperties>
                <componentInstanceProperties>
                    <name>richTextValue</name>
                    <value>&lt;p style=&quot;text-align: center;&quot;&gt;&lt;span style=&quot;background-color: rgb(255, 255, 255); font-size: 16px; color: rgb(244, 0, 0);&quot;&gt;This component is for mobile users only.&lt;/span&gt;&lt;/p&gt;</value>
                </componentInstanceProperties>
                <componentName>flexipage:richText</componentName>
                <visibilityRule>
                    <criteria>
                        <leftValue>{!$Client.formFactor}</leftValue>
                        <operator>EQUAL</operator>
                        <rightValue>Small</rightValue>
                    </criteria>
                </visibilityRule>
            </componentInstance>
        </itemInstances>
        <itemInstances>
            <componentInstance>
                <componentName>forceChatter:recordFeedContainer</componentName>
            </componentInstance>
        </itemInstances>
        <name>sidebar</name>
        <type>Region</type>
    </flexiPageRegions>
    <masterLabel>New Opportunity Page</masterLabel>
    <sobjectType>Opportunity</sobjectType>
    <template>
        <name>flexipage:recordHomeWithSubheaderTemplateDesktop</name>
    </template>
    <type>RecordPage</type>
</FlexiPage>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>New Opportunity Page</fullName>
    <types>
        <members>New_Opportunity_Page</members>
        <name>FlexiPage</name>
    </types>
    <version>49.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- QuickActionList (atlas.en-us.api_meta.meta/api_meta/meta_layouts.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip
            File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
