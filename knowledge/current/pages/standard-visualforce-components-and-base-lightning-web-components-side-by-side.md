---
title: "Standard Visualforce Components and Base Lightning Web Components Side by Side"
domain: pages
topic: standard-visualforce-components-and-base-lightning-web-components-side-by-side
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.713Z
estimatedTokens: 759
keywords: [Standard, Visualforce, Components, Base, Lightning, Web, Side, equivalent, component, specific]
---

# Standard Visualforce Components and Base Lightning Web Components Side by Side

> Use this table to find the equivalent base Lightning web component for a specific
  standard Visualforce component.

# Standard Visualforce Components and Base Lightning Web Components Side by Side

Use this table to find the equivalent base Lightning web component for a specific standard Visualforce component.

| Visualforce component | Lightning web component |
| --- | --- |
| apex:pageBlock | lightning-card |
| apex:pageBlockButtons | Set actions slot on lightning-card |
| apex:pageBlockSection | lightning-accordion andlightning-accordion-section |
| apex:pageBlockSectionItem | lightning-layout andlightning-layout-item |
| apex:toolbarGroup | lightning-layout andlightning-layout-item |
| apex:panelGrid | lightning-layout andlightning-layout-item |
| apex:panelGroup | lightning-layout andlightning-layout-item |
| apex:tabPanel | lightning-tabset |
| apex:tab | lightning-tab |
| apex:repeat | template for:each or iterator |
| apex:pageBlockTable | lightning-datatable |
| apex:dataTable | lightning-datatable |
| apex:inlineEditSupport | lightning-datatable with inline editing in editable columns |
| apex:image | lightning-platform-resource-loader |
| apex:stylesheet | lightning-platform-resource-loader |
| apex:includeScript | lightning-platform-resource-loader |
| apex:map | lightning-map |
| apex:form | lightning-record-formlightning-record-view-formlightning-record-edit-form |
| apex:input | lightning-inputlightning-slider |
| apex:inputCheckbox | lightning-input type="checkbox"lightning-input type="checkbox-button" |
| apex:inputFile | lightning-input type="file"lightning-file-upload |
| apex:inputHidden | lightning-input class="slds-hide" |
| apex:inputSecret | lightning-input type="password" |
| apex:inputText | lightning-input type="text" |
| apex:inputTextArea | lightning-textarea |
| apex:inputField | lightning-input-field |
| apex:selectCheckboxes | lightning-checkbox-group |
| apex:selectList | lightning-combobox or lightning-dual-listbox |
| apex:selectRadio | lightning-radio-group |
| apex:outputLabel | Set label attribute on lightning-input |
| apex:outputField | lightning-output-field |
| apex:outputLink | lightning-formatted-url |
| apex:outputText | lightning-formatted-datetimelightning-formatted-numberlightning-formatted-rich-textlightning-formatted-textlightning-formatted-time |
| apex:commandButton | lightning-buttonlightning-button-statefullightning-button-iconlightning-button-icon-stateful |
| apex:commandLink | lightning-button with bare variant |
| apex:pageMessage | lightning-platform-show-toast-event |
| apex:messagesapex:message | Custom validity on lightning-input |
| apex:pageMessages | Automatic for lightning-record-formUse lightning-messages in lightning-record-view-form or lightning-record-edit-form |

#### See Also

-   [*Salesforce Developers Blog:* New Resources for Moving from Visualforce to Lightning Web Components](https://developer.salesforce.com/blogs/2020/07/new-resources-for-moving-from-visualforce-to-lightning-web-components.html "Salesforce Developers Blog: New Resources for Moving from Visualforce
    to Lightning Web Components - HTML (New Window)")
