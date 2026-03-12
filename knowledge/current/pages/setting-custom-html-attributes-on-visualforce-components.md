---
title: "Setting Custom HTML Attributes on Visualforce Components"
domain: pages
topic: setting-custom-html-attributes-on-visualforce-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.666Z
estimatedTokens: 887
keywords: [Setting, Custom, HTML, Attributes, Visualforce, Components, add, arbitrary, “passed, through”, rendered, useful, JavaScript, frameworks, jQuery]
---

# Setting Custom HTML Attributes on Visualforce Components

> You can add arbitrary attributes
        to many Visualforce components that
        are “passed through” to the rendered HTML. This is useful, for example, when using Visualforce with JavaScript
        frameworks, such as jQuery Mobile, AngularJS, and Knockout, which use data-* or other attributes as hooks to activate framework
        functions.

# Setting Custom HTML Attributes on Visualforce Components

You can add arbitrary attributes to many Visualforce components that are “passed through” to the rendered HTML. This is useful, for example, when using Visualforce with JavaScript frameworks, such as jQuery Mobile, AngularJS, and Knockout, which use data-\* or other attributes as hooks to activate framework functions.

Pass-through attributes can also be used to improve usability with HTML5 features such as placeholder “ghost” text, pattern client-side validation, and title help text attributes.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

The behavior of HTML5 features is determined by the user’s browser, not Visualforce, and varies considerably from browser to browser. If you want to use these features, test early and often on every browser and device you plan to support.

To add a pass-through attribute to, for example, an <apex:outputPanel\> component, prefix the attribute with “html-” and set the attribute value as normal.

```

```

This produces the following HTML output.

```

```

Every attribute that begins with “html-” is passed through to the resulting HTML, with the “html-” removed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Pass-through attributes that conflict with built-in attributes for the component generate a compilation error.

Pass-through attributes are supported by the following Visualforce components.

-   <apex:column\>
-   <apex:commandButton\>
-   <apex:commandLink\>
-   <apex:component\>
-   <apex:dataTable\>
-   <apex:form\>
-   <apex:iframe\>
-   <apex:image\>
-   <apex:includeScript\>
-   <apex:input\>
-   <apex:inputCheckbox\>
-   <apex:inputField\>
-   <apex:inputHidden\>
-   <apex:inputSecret\>
-   <apex:inputText\>
-   <apex:inputTextarea\>
-   <apex:messages\>
-   <apex:outputField\>
-   <apex:outputLabel\>
-   <apex:outputLink\>
-   <apex:outputPanel\>
-   <apex:outputText\>
-   <apex:page\>
-   <apex:pageBlock\>
-   <apex:pageBlockButtons\>
-   <apex:pageBlockSection\>
-   <apex:pageBlockSectionItem\>
-   <apex:pageBlockTable\>
-   <apex:panelBar\>
-   <apex:panelBarItem\>
-   <apex:panelGrid\>
-   <apex:sectionHeader\>
-   <apex:selectCheckboxes\>
-   <apex:selectList\>
-   <apex:selectOption\>
-   <apex:selectOptions\>
-   <apex:selectRadio\>
-   <apex:stylesheet\>
-   <apex:tab\>
-   <apex:tabPanel\>

For additional information about individual components, including the specifics of where pass-through attributes are added to their rendered HTML, see [Standard Visualforce Component Reference](atlas.en-us.pages.meta/pages/pages_compref.htm "This section provides a full list of standard Visualforce components.").

To create HTML markup that can’t be generated using components that support pass-through attributes, combine Visualforce tags with static HTML. For example, to create a jQuery Mobile listview, combine the <apex:repeat\> tag with the HTML tags you need.

```

```

Pass-through attributes aren’t supported in dynamic Visualforce.

#### See Also

-   [Using a Custom Doctype](atlas.en-us.pages.meta/pages/pages_styling_doctype.htm "You can specify a different “doctype” (document type, or DTD) for a Visualforce page by using the docType attribute on the <apex:page> tag. This changes the doctype declaration at the beginning of the page. This is particularly useful if you’re working with HTML5, and might also allow you to address browser compatibility issues.")

## Code Examples

```
<apex:page showHeader="false" standardStylesheets="false" doctype="html-5.0">

    <apex:outputPanel layout="block" html-data-role="panel" html-data-id="menu">
        <apex:insert name="menu"/>    
    </apex:outputPanel>

    <apex:outputPanel layout="block" html-data-role="panel" html-data-id="main">
        <apex:insert name="main"/>    
    </apex:outputPanel>

</apex:page>
```

```
<!DOCTYPE HTML>
<html>
<head> ... </head>
<div id="..." data-id="menu" data-role="panel">
    <!-- contents of menu -->
</div>

<div id="..." data-id="main" data-role="panel">
    <!-- contents of main -->
</div>
</html>
```

```
<ul data-role="listview" data-inset="true" data-filter="true">
    <apex:repeat value="{! someListOfItems}" var="item">
        <li><a href="#">{! item.Name}</a></li>
    </apex:repeat>
</ul>
```

## Related Topics

- Standard Visualforce Component Reference (atlas.en-us.pages.meta/pages/pages_compref.htm)
- Using a Custom Doctype (atlas.en-us.pages.meta/pages/pages_styling_doctype.htm)
