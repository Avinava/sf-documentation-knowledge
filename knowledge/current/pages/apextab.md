---
title: "apex:tab"
domain: pages
topic: apextab
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.189Z
estimatedTokens: 1458
keywords: [apex, tab, <apex, tabPanel>, Attributes]
---

# apex:tab

> A single tab in an <apex:tabPanel>.

# apex:tab

A single tab in an <apex:tabPanel\>.

The <apex:tab\> component must be a child of a <apex:tabPanel\>.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <td\> tag that wraps the tab's contents.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| disabled | Boolean | A Boolean value that specifies whether the tab can be selected and viewed. If set to true, the tab cannot be selected. If not specified, this value defaults to false. |  | 10.0 | global |
| focus | String | The ID of the child component in focus when the tab content is displayed. |  | 10.0 | global |
| id | String | An identifier that allows the tab component to be referenced by other components in the page. |  | 10.0 | global |
| immediate | Boolean | A Boolean value that specifies whether the action associated with this component happens immediately, without processing any validation rules associated with the fields on the page. If set to true, the action happens immediately and validation rules are skipped. If not specified, this value defaults to false. See Use the immediate Attribute Carefully. |  | 11.0 | global |
| label | String | The text to display in the tab header. |  | 10.0 | global |
| labelWidth | String | The length of the tab header, in pixels. If not specified, this value defaults to the width of label text. |  | 10.0 | global |
| name | Object | The name of the tab. Use the value of this attribute to specify the default selected tab for the tabPanel. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the tab. |  | 10.0 | global |
| oncomplete | String | The JavaScript invoked if the oncomplete event occurs--that is, when the tab has been selected and its content rendered on the page. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the tab twice. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the tab. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the tab. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| ontabenter | String | The JavaScript invoked if the ontabenter event occurs--that is, if a tab component becomes in focus. |  | 11.0 | global |
| ontableave | String | The JavaScript invoked if the ontableave event occurs--that is, if a component outside the tab becomes in focus. |  | 11.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| reRender | Object | The ID of one or more components to redraw when the result of an AJAX update request returns to the client. This value can be a single id, a comma-separated list of ids, or a merge field expression for a list or collection of ids. This value is also only applicable when the value of the switchType attribute is "ajax". |  | 10.0 | global |
| status | String | The ID of an associated component that displays the status of an AJAX update request. See the actionStatus component. Note that this value is only applicable when the value of the switchType attribute is set to "ajax". |  | 10.0 | global |
| style | String | The style used to display all portions of the tab component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The CSS style class used to display all portions of the tab component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| switchType | String | The implementation method for switching to this tab. Possible values include "client", "server", and "ajax". If not specified, this value defaults to "server". If specified, this value overrides the switchTab attribute on the tabPanel component. |  | 10.0 | global |
| timeout | Integer | The amount of time (in milliseconds) before an AJAX update request should time out. Note that this value is only applicable when the value of the switchType attribute is set to "ajax". |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |

#### See Also

-   [apex:tabPanel](atlas.en-us.pages.meta/pages/pages_compref_tabPanel.htm "A page area that displays as a set of tabs. When a user clicks a tab header, the tab's associated content displays, hiding the content of other tabs.")

## Code Examples

```
<!-- Page: -->
<apex:page id="thePage">
    <apex:tabPanel switchType="client" selectedTab="name2" id="theTabPanel">
    <apex:tab label="One" name="name1" id="tabOne">content for tab one</apex:tab>
    <apex:tab label="Two" name="name2" id="tabTwo">content for tab two</apex:tab>
    </apex:tabPanel>
</apex:page>
```

## Related Topics

- Use the immediate Attribute Carefully (atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm)
- apex:tabPanel (atlas.en-us.pages.meta/pages/pages_compref_tabPanel.htm)
