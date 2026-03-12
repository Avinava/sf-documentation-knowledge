---
title: "Migrate Components from the  ui Namespace Namespace"
domain: lightning
topic: migrate-components-from-the-ui-namespace-namespace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.978Z
estimatedTokens: 1637
namespace: If
keywords: [Migrate, Components, you’re, replace, their, lightning, counterparts, Complex, Interactive, Input, Control, Visual]
---

# Migrate Components from the  ui Namespace Namespace

> If you’re using components in the ui namespace, replace them with
    their lightning namespace counterparts.

**Namespace:** `If`

# Migrate Components from the ui Namespace Namespace

If you’re using components in the ui namespace, replace them with their lightning namespace counterparts.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Components in the ui namespace are deprecated as of API version 47.0, the Winter ’20 release. We recommend that you use components in the lightning namespace instead or use the [Lightning web component equivalent](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.migrate_map_aura_lwc_components "HTML (New Window)"). You can continue to use the ui components beyond Summer ’21 but Salesforce plans to cease support for them in Summer ’21. For more information, see [Working with Lightning Base Components](atlas.en-us.lightning.meta/lightning/lightning_overview.htm "Lightning base components are the building blocks that make up the modern user interfaces in Lightning Experience, Salesforce app, and Experience Builder sites.").

For migration recommendations for each ui component, refer to the [Component Library](https://developer.salesforce.com/docs/component-library "HTML (New Window)"). For example, the [ui:button](https://developer.salesforce.com/docs/component-library/bundle/ui:button/specification "HTML (New Window)") specification notes that you can use lightning:button, lightning:buttonIcon, or lightning:buttonIconStateful instead, depending on your use case. To view examples and usage guidelines for lightning namespace components, refer to the Component Library.

The following tables list ui components and their recommended counterparts in the lightning namespace.

## Complex, Interactive Components

The following components contain one or more subcomponents and are interactive.

| Type | ui Component (Deprecated) | Description | lightning Component |
| --- | --- | --- | --- |
| Message | ui:message | A message notification of varying severity levels | lightning:notificationsLibrary |
| Menu | ui:menu | A dropdown list with a trigger that controls its visibility | lightning:buttonMenu |
| ui:menuList | A list of menu items |
| ui:actionMenuItem | A menu item that triggers an action | lightning:menuItem |
| ui:checkboxMenuItem | A menu item that supports multiple selection and can be used to trigger an action |
| ui:radioMenuItem | A menu item that supports single selection and can be used to trigger an action |
| ui:menuItemSeparator | A visual separator for menu items | lightning:menuDivider |
| ui:menuItem | An abstract and extensible component for menu items in a ui:menuList component | lightning:menuItem |
| ui:menuTrigger | A trigger that expands and collapses a menu | lightning:buttonMenu |
| ui:menuTriggerLink | A link that triggers a dropdown menu. This component extends ui:menuTrigger |

## Input Control Components

The following components are interactive, for example, like buttons and checkboxes.

| Type | Key Components (Deprecated) | Description | lightning Component |
| --- | --- | --- | --- |
| Button | ui:button | An actionable button that can be pressed or clicked | lightning:button, lightning:buttonIcon, or lightning:buttonIconStateful |
| Checkbox | ui:inputCheckbox | A selectable option that supports multiple selections | lightning:input with checkbox, toggle, or checkbox-button type |
| ui:outputCheckbox | Displays a read-only value of the checkbox | lightning:input with checkbox type and readonly attribute |
| Radio button | ui:inputRadio | A selectable option that supports only a single selection | lightning:input with radio type or lightning:radioGroup |
| Dropdown List | ui:inputSelect | A dropdown list with options | lightning:combobox |
| ui:inputSelectOption | An option in a ui:inputSelect component |

## Visual Components

The following components provide informative cues, for example, like error messages and loading spinners.

| Type | Key Components (Deprecated) | Description | lightning Component |
| --- | --- | --- | --- |
| Field-level error | ui:inputDefaultError | An error message that is displayed when an error occurs | lightning:input with field validation |
| Spinner | ui:spinner | A loading spinner | lightning:spinner |

## Field Components

The following components enable you to enter or display values.

| Type | Key Components (Deprecated) | Description | lightning Component |
| --- | --- | --- | --- |
| Currency | ui:inputCurrency | An input field for entering currency | lightning:input with number type and currency formatter |
| ui:outputCurrency | Displays currency in a default or specified format | lightning:formattedNumber with currency style |
| Email | ui:inputEmail | An input field for entering an email address | lightning:input with email type |
| ui:outputEmail | Displays a clickable email address | lightning:formattedEmail |
| Date and time | ui:inputDate | An input field for entering a date | lightning:input with date type |
| ui:inputDateTime | An input field for entering a date and time | lightning:input with datetime type |
| ui:outputDate | Displays a date in the default or specified format | lightning:formattedDateTime |
| ui:outputDateTime | Displays a date and time in the default or specified format | lightning:formattedDateTime or lightning:formattedTime |
| Password | ui:inputSecret | An input field for entering secret text | lightning:input with password type |
| Phone Number | ui:inputPhone | An input field for entering a phone number | lightning:input with phone type |
| ui:outputPhone | Displays a phone number | lightning:formattedPhone |
| Number | ui:inputNumber | An input field for entering a numerical value | lightning:input with number type |
| ui:outputNumber | Displays a number | lightning:formattedNumber |
| Range | ui:inputRange | An input field for entering a value within a range | lightning:slider |
| Rich Text | ui:inputRichText | An input field for entering rich text | lightning:inputRichText |
| ui:outputRichText | Displays rich text | lightning:formattedRichText |
| Text | ui:inputText | An input field for entering a single line of text | lightning:input |
| ui:outputText | Displays text | lightning:formattedText |
| Text Area | ui:inputTextArea | An input field for entering multiple lines of text | lightning:textarea |
| ui:outputTextArea | Displays a read-only text area | lightning:formattedText |
| URL | ui:inputURL | An input field for entering a URL | lightning:input with url type |
| ui:outputURL | Displays a clickable URL | lightning:formattedUrl |

## Related Topics

- Working with Lightning Base Components (atlas.en-us.lightning.meta/lightning/lightning_overview.htm)
