---
title: "Component Behavior When Rendered as PDF"
domain: pages
topic: component-behavior-when-rendered-as-pdf
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.846Z
estimatedTokens: 678
keywords: [Component, Behavior, Rendered, PDF, Understanding, how, Visualforce, components, behave, converted, essential, creating, pages, render, well]
---

# Component Behavior When Rendered as PDF

> Understanding how Visualforce
  components behave when converted to PDF is essential to creating pages that render
  well.

# Component Behavior When Rendered as PDF

Understanding how Visualforce components behave when converted to PDF is essential to creating pages that render well.

The Visualforce PDF rendering service renders static HTML and basic CSS that is explicitly provided by the page. As a rule, don’t use components that:

-   Rely on JavaScript to perform an action
-   Depend on Salesforce style sheets
-   Use assets such as style sheets or graphics that aren’t available in the page itself or in a static resource

To check if your Visualforce page falls into one of these categories, right-click anywhere on the page and view the HTML source. If you see a <script\> tag that refers to JavaScript (.js) or a <link\> tag that refers to a style sheet (.css), verify that the generated PDF file displays as expected.

## Components That Are Safe When Rendering as PDF

-   <apex:composition\> (as long as the page contains PDF-safe components)
-   <apex:dataList\>
-   <apex:define\>
-   <apex:facet\>
-   <apex:include\> (as long as the page contains PDF-safe components)
-   <apex:insert\>
-   <apex:image\>
-   <apex:outputLabel\>
-   <apex:outputLink\>
-   <apex:outputPanel\>
-   <apex:outputText\>
-   <apex:page\>
-   <apex:panelGrid\>
-   <apex:panelGroup\>
-   <apex:param\>
-   <apex:repeat\>
-   <apex:stylesheet\> (as long as the URL isn’t directly referencing Salesforce style sheets)
-   <apex:variable\>

## Components to Use with Caution When Rendering as PDF

-   <apex:attribute\>
-   <apex:column\>
-   <apex:component\>
-   <apex:componentBody\>
-   <apex:dataTable\>

## Components That Are Unsafe to Use When Rendering as PDF

-   <apex:actionFunction\>
-   <apex:actionPoller\>
-   <apex:actionRegion\>
-   <apex:actionStatus\>
-   <apex:actionSupport\>
-   <apex:commandButton\>
-   <apex:commandLink\>
-   <apex:detail\>
-   <apex:enhancedList\>
-   <apex:flash\>
-   <apex:form\>
-   <apex:iframe\>
-   <apex:includeScript\>
-   <apex:inputCheckbox\>
-   <apex:inputField\>
-   <apex:inputFile\>
-   <apex:inputHidden\>
-   <apex:inputSecret\>
-   <apex:inputText\>
-   <apex:inputTextarea\>
-   <apex:listViews\>
-   <apex:message\>
-   <apex:messages\>
-   <apex:outputField\>
-   <apex:pageBlock\>
-   <apex:pageBlockButtons\>
-   <apex:pageBlockSection\>
-   <apex:pageBlockSectionItem\>
-   <apex:pageBlockTable\>
-   <apex:pageMessage\>
-   <apex:pageMessages\>
-   <apex:panelBar\>
-   <apex:panelBarItem\>
-   <apex:relatedList\>
-   <apex:scontrol\>
-   <apex:sectionHeader\>
-   <apex:selectCheckboxes\>
-   <apex:selectList\>
-   <apex:selectOption\>
-   <apex:selectOptions\>
-   <apex:selectRadio\>
-   <apex:tab\>
-   <apex:tabPanel\>
-   <apex:toolbar\>
-   <apex:toolbarGroup\>
