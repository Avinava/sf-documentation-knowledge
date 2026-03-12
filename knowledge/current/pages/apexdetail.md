---
title: "apex:detail"
domain: pages
topic: apexdetail
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:22.395Z
estimatedTokens: 776
keywords: [apex, detail, standard, particular, defined, associated, layout, Setup, component, includes, attributes, including, excluding, hover, links]
---

# apex:detail

> The standard detail page for a particular object, as defined by the associated page
			layout for the object in Setup. This component includes attributes for including or
			excluding the associated related lists, related list hover links, and title bar that
			appear in the standard Salesforce appl

# apex:detail

The standard detail page for a particular object, as defined by the associated page layout for the object in Setup. This component includes attributes for including or excluding the associated related lists, related list hover links, and title bar that appear in the standard Salesforce application interface.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Don’t wrap <apex:detail\> in an <apex:form\> component. <apex:detail\> already provides a <form\> element.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the detail component to be referenced by other components in the page. |  | 10.0 | global |
| inlineEdit | Boolean | Controls whether the component supports inline editing.See also: <apex:inlineEditSupport> |  | 20.0 |  |
| oncomplete | String | The JavaScript invoked if the oncomplete event occurs--that is, when the tab has been selected and its content rendered on the page.This attribute only works if inlineEdit or showChatter are set to true. |  | 20.0 |  |
| relatedList | Boolean | A Boolean value that specifies whether the related lists are included in the rendered component. If true, the related lists are displayed. If not specified, this value defaults to true. |  | 10.0 | global |
| relatedListHover | Boolean | A Boolean value that specifies whether the related list hover links are included in the rendered component. If true, the related list hover links are displayed. If not specified, this value defaults to true. Note that this attribute is ignored if the relatedList attribute is false, or if the "Enable Related List Hover Links" option is not selected under Setup \| Customize \| User Interface. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| rerender | Object | The ID of one or more components that are redrawn when the result of an AJAX update request returns to the client. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs.This attribute only works if inlineEdit or showChatter are set to true. |  | 20.0 |  |
| showChatter | Boolean | A Boolean value that specifies whether to display the Chatter information and controls for the record.If this is true, and showHeader on <apex:page> is false, then the layout looks exactly as if the <chatter:feedWithFollowers> is being used.If this is true, and showHeader on <apex:page> is true, then the layout looks like the regular Chatter UI. |  | 20.0 |  |
| subject | String | The ID of the record that should provide data for this component. |  | 10.0 | global |
| title | Boolean | A Boolean value that specifies whether the title bar is included in the rendered component. If true, the title bar is displayed. If not specified, this value defaults to true. |  | 10.0 | global |

## Code Examples

```
<!-- For this example to render properly, you must associate the Visualforce page 
with a valid account record in the URL. 
For example, if 001D000000IRt53 is the account ID, the resulting URL should be: 
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->
   
<apex:page standardController="Account">
   <apex:detail subject="{!account.ownerId}" relatedList="false" title="false"/> 
</apex:page>
```
