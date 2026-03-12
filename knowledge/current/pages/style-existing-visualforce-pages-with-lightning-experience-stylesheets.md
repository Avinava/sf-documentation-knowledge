---
title: "Style Existing Visualforce Pages with Lightning Experience
      Stylesheets"
domain: pages
topic: style-existing-visualforce-pages-with-lightning-experience-stylesheets
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.601Z
estimatedTokens: 1422
keywords: [Style, Visualforce, Pages, Lightning, Experience, Stylesheets, control, whether, styled, look, viewed, Salesforce, mobile, app, lightningStylesheets]
---

# Style Existing Visualforce Pages with Lightning Experience
      Stylesheets

> You can control whether a page is styled with the look of Lightning Experience when
    viewed in Lightning Experience or the Salesforce mobile app with the lightningStylesheets attribute.

# Style Existing Visualforce Pages with Lightning Experience Stylesheets

You can control whether a page is styled with the look of Lightning Experience when viewed in Lightning Experience or the Salesforce mobile app with the lightningStylesheets attribute.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The lightningStylesheets attribute isn’t supported in Experience Cloud sites.

To style your Visualforce page to match the Lightning Experience UI when viewed in Lightning Experience or the Salesforce mobile app, set lightningStylesheets="true" in the <apex:page\> tag. When the page is viewed in Salesforce Classic, it doesn’t get Lightning Experience styling.

```

```

If lightningStylesheets="true", the CSS scoping class slds-vf-scope is automatically applied to the Visualforce page’s <body\> element. The scoping class is applied so that your content matches the Lightning Experience UI. If you set applyBodyTag or applyHtmlTag to false, you must manually add the scoping class slds-vf-scope.

Here is a standard Visualforce page without the lightningStylesheets attribute. The page is styled with the Classic UI.![Visualforce page not styled with the lightningStylesheets attribute. It is styled with the Classic UI.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce1%2Fdeveloper%2Fimages%2Fvf_lightning_stylesheets_classic.png&folder=pages)

Here is the same Visualforce page with the lightningStylesheets attribute set to true.![Visualforce page with the lightningStylesheets attribute set to true. The UI matches Lightning Experience.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce1%2Fdeveloper%2Fimages%2Fvf_lightning_stylesheets_true.png&folder=pages)

You can style most commonly used Visualforce components with the lightningStylesheets attribute. However, some components differ slightly in style from Lightning Experience. For example, <apex:inputFile\>, and some <apex:inputField\> elements use the browser’s default styling instead. Commonly used Visualforce components that don’t require styling, such as <apex:form\>, <apex:outputText\>, and <apex:param\>, are still supported.

To include custom SLDS components that aren’t part of the Visualforce component library, use the <apex:slds/\> tag with the code and the lightningStylesheets attribute.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

-   ThelightningStylesheets attribute doesn’t affect custom styling. Custom code must be updated to match the page’s SLDS styling.
-   If set to false, the standardStylesheets attribute for <apex:page\> overrides and suppresses lightningStylesheets in Lightning Experience, Salesforce Classic, and the mobile app.
-   The <apex:slds> component has known issues when creating PDF files from Visualforce pages. For this reason, lightningStyleSheets does not support <apex:page renderAs="pdf"\> or calls to PageReference.getContentAsPDF().

When using lightningStylesheets="true", most Visualforce buttons display as the neutral variant. Neutral styling of buttons occurs because there’s no selector hook to reliably determine which buttons must be branded. Add the .slds-vf-button\_brand style attribute to the <apex:commandButton\> to create a button styled based on your org branding:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

When building new features, use <apex:slds\> and implement the button using the Lightning Design System Button blueprint.

The following Visualforce components support the lightningStylesheets attribute or don’t require styling.

-   analytics:reportChart
-   apex:actionFunction
-   apex:actionPoller
-   apex:actionRegion
-   apex:actionStatus
-   apex:actionSupport
-   apex:areaSeries
-   apex:attribute
-   apex:axis
-   apex:barSeries
-   apex:canvasApp
-   apex:chart
-   apex:chartLabel
-   apex:chartTips
-   apex:column
-   apex:commandButton
-   apex:commandLink
-   apex:component
-   apex:componentBody
-   apex:composition
-   apex:dataList
-   apex:dataTable
-   apex:define
-   apex:detail
-   apex:dynamicComponent
-   apex:enhancedList
-   apex:facet
-   apex:flash
-   apex:form
-   apex:gaugeSeries
-   apex:iframe
-   apex:image
-   apex:include
-   apex:includeLightning
-   apex:includeScript
-   apex:inlineEditSupport
-   apex:input
-   apex:inputCheckbox
-   apex:inputField
-   apex:inputFile
-   apex:inputHidden
-   apex:inputSecret
-   apex:inputText
-   apex:inputTextArea
-   apex:insert
-   apex:legend
-   apex:lineSeries
-   apex:listViews
-   apex:map
-   apex:mapMarker
-   apex:message
-   apex:messages
-   apex:outputField
-   apex:outputLabel
-   apex:outputLink
-   apex:outputPanel
-   apex:outputText
-   apex:page
-   apex:pageBlock
-   apex:pageBlockButtons
-   apex:pageBlockSection
-   apex:pageBlockSectionItem
-   apex:pageBlockTable
-   apex:pageMessage
-   apex:pageMessages
-   apex:panelBar
-   apex:panelBarItem
-   apex:panelGrid
-   apex:panelGroup
-   apex:param
-   apex:pieSeries
-   apex:radarSeries
-   apex:relatedList
-   apex:remoteObjectField
-   apex:remoteObjectModel
-   apex:remoteObjects
-   apex:repeat
-   apex:scatterSeries
-   apex:scontrol
-   apex:sectionHeader
-   apex:selectCheckboxes
-   apex:selectList
-   apex:selectOption
-   apex:selectOptions
-   apex:selectRadio
-   apex:stylesheet
-   apex:tab
-   apex:tabPanel
-   apex:toolbar
-   apex:toolbarGroup
-   apex:variable
-   chatter:feed
-   chatter:feedWithFollowers
-   chatter:follow
-   chatter:newsFeed
-   flow:interview
-   site:googleAnalyticsTracking
-   site:previewAsAdmin
-   topics:widget

## Code Examples

```
<apex:page lightningStylesheets="true">
```

```
<apex:commandButton styleClass="slds-vf-button_brand" value="Refresh the Page">
```
