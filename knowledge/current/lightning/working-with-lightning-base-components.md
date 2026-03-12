---
title: "Working with Lightning Base Components"
domain: lightning
topic: working-with-lightning-base-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.285Z
estimatedTokens: 3720
keywords: [Working, Lightning, Base, Components, building, blocks, modern, user, interfaces, Experience, Salesforce, app, Builder, sites, Buttons]
---

# Working with Lightning Base Components

> Lightning base components are the building blocks that make up the modern user
    interfaces in Lightning Experience, Salesforce app, and Experience Builder sites.

# Working with Lightning Base Components

Lightning base components are the building blocks that make up the modern user interfaces in Lightning Experience, Salesforce app, and Experience Builder sites.

Base components incorporate Lightning Design System markup and classes, providing improved performance and accessibility with a minimum footprint.

These base components handle the details of HTML and CSS for you. Each component provides simple attributes that enable variations in style. This means that you typically don’t need to use CSS at all. The simplicity of the base Lightning component attributes and their clean and consistent definitions make them easy to use, enabling you to focus on your business logic.

You can find base Lightning components in the lightning namespace to complement the existing ui namespace components. In instances where there are matching ui and lightning namespace components, we recommend that you use the lightning namespace component. The lightning namespace components are optimized for common use cases. Beyond being equipped with the Lightning Design System styling, they handle accessibility, real-time interaction, and enhanced error messages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Components in the lightning namespace are available as Aura components and Lightning web components. We recommend using Lightning web components whenever possible. Lightning web components are custom HTML elements built using HTML and modern JavaScript. Lightning web components and Aura components can coexist and interoperate on a page. These components are part of the Lightning Component framework. See the [Lightning Web Components (LWC) Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/lwc) for more information.

Base components are available for use with LWC. To migrate your base components, see [Migrate ui components](https://developer.salesforce.com/docs/platform/lwc/guide/migrate-map-ui-components.html).

While the base components are visual building blocks and provides minimum functionality out-of-the-box, they can be combined together to build “experience components” with richer capabilities and made accessible via the Lightning App Builder. Admins can drag-and-drop these experience components to build and configure user interfaces easily. For example, the Chatter Feed component in Lightning App Builder comprises a collection of tabs, a group of buttons, and a rich text editor.

The API version column denotes the minimum API version you must set to use the component in the Developer Console, the Salesforce Extensions for Visual Studio Code, or via API. Components that don’t specify a minimum API version are usable with any API version 37.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Interactive examples for the following components are available in the [Lightning Component Library](atlas.en-us.lightning.meta/lightning/component_library.htm "The Lightning Component Library is your hub for component reference information, including the Component Reference with live examples, and tools for Lightning Web Security and Lightning Locker.").

## Buttons

These components provide different button flavors.

| Type | Aura Component Name | Description | Lightning Design System | API Version |
| --- | --- | --- | --- | --- |
| Button | lightning:button | Represents a button element. | Buttons |  |
| Button Group | lightning:buttonGroup | Represents a group of buttons. | Button Groups |  |
| Button Icon | lightning:buttonIcon | An icon-only HTML button. | Button Icons |  |
| Button Icon (Stateful) | lightning:buttonIconStateful | An icon-only button that retains state. | Button Icons | 41.0 |
| Button Menu | lightning:buttonMenu | A dropdown menu with a list of actions or functions. | Menus |  |
| lightning:menuItem | A list item in lightning:buttonMenu. |  |
| lightning:menuDivider | A horizontal line separating menu items in lightning:buttonMenu. |  |
| lightning:menuSubheader | A subheading for menu items in lightning:buttonMenu. |  |
| Button Stateful | lightning:buttonStateful | A button that toggles between states. | Button Stateful |  |
| Insert Image Button | lightning:insertImageButton | A button for inserting images in lightning:inputRichText. | Button Icons | 43.0 |

## Data Entry

Use these components for data entry.

| Type | Lightning Component Name | Description | Lightning Design System | API Version |
| --- | --- | --- | --- | --- |
| Address | lightning:inputAddress | Represents an address compound field. | Form Layout | 42.0 |
| Checkbox Group | lightning:checkboxGroup | Enables single or multiple selection on a group of options. | Checkbox | 41.0 |
| Combobox | lightning:combobox | An input element that enables single selection from a list of options. | Combobox |  |
| Dual Listbox | lightning:dualListbox | Provides an input listbox accompanied with a listbox of selectable options. Options can be moved between the two lists. | Dueling Picklist | 41.0 |
| File Uploader and Preview | lightning:fileUpload | Enables file uploads to a record. | File Selector | 41.0 |
| lightning:fileCard | Displays a representation of uploaded content. | Files |
| Input | lightning:input | Represents interactive controls that accept user input depending on the type attribute. | Input |  |
| Input Field | lightning:inputField | Represents an editable input for a field on a Salesforce object. | Form Layout | 42.0 |
| Input Name | lightning:inputName | Represents a name compound field. | Form Layout | 42.0 |
| Input Location (Geolocation) | lightning:inputLocation | A geolocation compound field that accepts a latitude and longitude value. | Form Layout | 41.0 |
| Radio Group | lightning:radioGroup | Enables single selection on a group of options. | Radio ButtonRadio Button Group | 41.0 |
| Select | lightning:select | Creates an HTML select element. | Select |  |
| Slider | lightning:slider | An input range slider for specifying a value between two specified numbers. | Slider | 41.0 |
| Rich Text Area | lightning:inputRichText | A WYSIWYG editor with a customizable toolbar for entering rich text. | Rich Text Editor |  |
| Text Area | lightning:textArea | A multiline text input. | Textarea |  |

## Displaying Data

Use these components to display data.

| Type | Lightning Component Name | Description | Lightning Design System | API Version |
| --- | --- | --- | --- | --- |
| Address | lightning:formattedAddress | Displays a formatted address that provides a link to the given location on Google Maps. | N/A | 42.0 |
| Click-to-dial | lightning:clickToDial |  |  |
| Date/Time | lightning:formattedDateTime | Displays formatted date and time. |  |
| Email | lightning:formattedEmail | Displays an email as a hyperlink with the mailto: URL scheme. | 41.0 |
| Geolocation | lightning:formattedLocation | Displays a geolocation using the format latitude, longitude. | 41.0 |
| Name | lightning:formattedName | Displays a formatted name that can include a salutation and suffix. | 42.0 |
| Number | lightning:formattedNumber | Displays formatted numbers. |  |
| Output Field | lightning:outputField | Displays a label, help text, and value for a field on a Salesforce object. | 41.0 |
| Phone | lightning:formattedPhone | Displays a phone number as a hyperlink with the tel: URL scheme. | 41.0 |
| Rich Text | lightning:formattedRichText | Displays rich text that’s formatted with allowed tags and attributes. | 41.0 |
| Text | lightning:formattedText | Displays text, replaces newlines with line breaks, and linkifies if requested. | 41.0 |
| Time | lightning:formattedTime | Displays a formatted time based on the user’s locale. | 42.0 |
| URL | lightning:formattedUrl | Displays a URL as a hyperlink. | 41.0 |
| Relative Date/Time | lightning:relativeDateTime | Displays the relative time difference between the source date-time and the provided date-time. |  |

## Forms

use these components to edit and view records

| Type | Lightning Component Name | Description | Lightning Design System | API Version |
| --- | --- | --- | --- | --- |
| Record Edit Form | lightning:recordEditForm | A grouping of lightning:inputField components of record fields to be edited in a form. | Form Layout | 42.0 |
| Record Form | lightning:recordForm | A container to simplify form creation for viewing and editing record fields. | Form Layout | 43.0 |
| Record View Form | lightning:recordViewForm | A grouping of lightning:outputField components and other formatted display components to display record fields in a form. | Form Layout | 42.0 |

## Layout

The following components group related information together.

| Type | Lightning Component Name | Description | Lightning Design System | API Version |
| --- | --- | --- | --- | --- |
| Accordion | lightning:accordion | A collection of vertically stacked sections with multiple content areas. | Accordion | 41.0 |
| lightning:accordionSection | A single section that is nested in a llightning:accordion component. |
| Card | lightning:card | Applies a container around a related grouping of information. | Cards |  |
| Carousel | lightning:carousel | A collection of images that are displayed horizontally one at a time. | Carousel | 42.0 |
| Layout | lightning:layout | Responsive grid system for arranging containers on a page. | Grid |  |
| lightning:layoutItem | A container within a lightning:layout component. |  |
| Tabs | lightning:tab | A single tab that is nested in a lightning:tabset component. | Tabs |  |
| lightning:tabset | Represents a list of tabs. |  |
| Tile | lightning:tile | A grouping of related information associated with a record. | Tiles |  |

## Navigation Components

The following components organize links and actions in a hierarchy or to visit other locations in an app.

| Type | Lightning Component Name | Description | Lightning Design System | API Version |
| --- | --- | --- | --- | --- |
| Breadcrumb | lightning:breadcrumb | An item in the hierarchy path of the page the user is on. | Breadcrumbs |  |
| lightning:breadcrumbs | A hierarchy path of the page you're currently visiting within the website or app. |  |
| Navigation | lightning:navigation | Generates a URL for a page reference. | N/A | 43.0 |
| Map | lightning:map | Displays a map of one or more locations | Map | 44.0 |
| Tree | lightning:tree | Displays a structural hierarchy with nested items. | Trees | 41.0 |
| Vertical Navigation | lightning:verticalNavigation | A vertical list of links that take you to another page or parts of the page you’re in. | Vertical Navigation | 41.0 |
| lightning:verticalNavigationItem | A text-only link within lightning:verticalNavigationSection or lightning:verticalNavigationOverflow |
| lightning:verticalNavigationItemBadge | A link and badge within lightning:verticalNavigationSection or lightning:verticalNavigationOverflow |
| lightning:verticalNavigationItemIcon | A link and icon within lightning:verticalNavigationSection or lightning:verticalNavigationOverflow |
| lightning:verticalNavigationOverflow | An overflow of items in lightning:verticalNavigation |
| lightning:verticalNavigationSection | A section within lightning:verticalNavigation |

## Visual Components

The following components provide informative cues, for example, like icons and loading spinners.

| Type | Lightning Component Name | Description | Lightning Design System | API Version |
| --- | --- | --- | --- | --- |
| Avatar | lightning:avatar | A visual representation of an object. | Avatars |  |
| Badge | lightning:badge | A label that holds a small amount of information. | Badges |  |
| Data Table | lightning:datatable | A table that displays columns of data, formatted according to type. | Data Tables | 41.0 |
| Dynamic Icon | lightning:dynamicIcon | A variety of animated icons. | Dynamic Icons | 41.0 |
| Help Text (Tooltip) | lightning:helptext | An icon with a popover container a small amount of text. | Tooltips |  |
| Icon | lightning:icon | A visual element that provides context. | Icons |  |
| List View | lightning:listView | Displays a list view of the specified object | N/A | 42.0 |
| Messaging | lightning:overlayLibrary | Displays messages via modals and popovers. | Messaging | 41.0 |
| lightning:notificationsLibrary | Displays messages via notices and toasts. | Messaging | 41.0 |
| Path | lightning:path | Displays a path driven by a picklist field and Path Setup metadata. | Path | 41.0 |
| Picklist Path | lightning:picklistPath | Displays a path based on a specified picklist field. |
| Pill | lightning:pill | A pill represents an existing item in a database, as opposed to user-generated freeform text. | Pills |  |
| Pill Container | lightning:pillContainer | A list of pills grouped in a container. | Pills | 42.0 |
| Progress Bar | lightning:progressBar | A horizontal progress bar from left to right to indicate the progress of an operation. | Progress Bars | 41.0 |
| Progress Indicator and Path | lightning:progressIndicator | Displays steps in a process to indicate what has been completed. | Progress IndicatorsPath | 41.0 |
| Tree Grid | lightning:treeGrid | A hierarchical view of data presented in a table. | Trees | 42.0 |
| Spinner | lightning:spinner | Displays an animated spinner. | Spinners |  |

## Feature-Specific Components

The following components are usable only in the context of specific Salesforce features.

| Type | Lightning Component Name | Description | Lightning Design System | API Version |
| --- | --- | --- | --- | --- |
| Lightning Page Region | lightning:flexipageRegionInfo | Provides Lightning page region information to the component that contains it. | N/A | 41.0 |
| Flow Interview | lightning:flow | Represents a flow interview in Lightning runtime. | 41.0 |
| Omni-Channel Toolkit | lightning:omniToolkitAPI | Provides API access to methods for the Omni-channel toolkit. | 41.0 |
| Lightning Console Utility Bar | lightning:utilityBarAPI | Provides API access to methods for the utility bar in Lightning Console. | 41.0 |
| Lightning Console Workspace | lightning:workspaceAPI | Provides API access to methods for the workspace in Lightning Console. | 41.0 |
| Embedded Chat | lightningsnapin:prechatAPI | Enables customization of the user interface for the pre-chat page. | 42.0 |
| Embedded Chat | lightningsnapin:settingsAPI | Provides API access to Embedded Service settings within your custom Embedded Service components. | 43.0 |
| Embedded Chat | lightningsnapin:minimizedAPI | Enables customization of the user interface for the minimized chat window for Embedded Chat. | 43.0 |
| EmpJs Streaming API library | lightning:empApi | Provides access to methods for subscribing to a streaming channel and listening to event messages | 44.0 |

## Related Topics

- Lightning Component Library (atlas.en-us.lightning.meta/lightning/component_library.htm)
