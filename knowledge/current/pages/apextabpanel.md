---
title: "apex:tabPanel"
domain: pages
topic: apextabpanel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.203Z
estimatedTokens: 1839
keywords: [apex, tabPanel, area, displays, tabs, user, clicks, tab, tab's, associated, content, hiding, Simple, Advanced, Attributes]
---

# apex:tabPanel

> A page area that displays as a set of tabs. When a user clicks a
		tab header, the tab's associated content displays, hiding the content of
		other tabs.

# apex:tabPanel

A page area that displays as a set of tabs. When a user clicks a tab header, the tab's associated content displays, hiding the content of other tabs.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <table\> tag that contains all of the tabs.

## Simple Example

```

```

## Advanced Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| activeTabClass | String | The style class used to display a tab header in the tabPanel when it is selected, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| contentClass | String | The style class used to display tab content in the tabPanel component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| contentStyle | String | The style used to display tab content in the tabPanel component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| disabledTabClass | String | The style class used to display a tab header in the tabPanel when it is disabled, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| headerAlignment | String | The side of the tabPanel to which tab headers are aligned. Possible values include "left" or "right". If not specified, this value defaults to "left". |  | 10.0 | global |
| headerClass | String | The style class used to display all tab headers, regardless of whether or not they are selected, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 11.0 | global |
| headerSpacing | String | The distance between two adjacent tab headers, in pixels. If not specified, this value defaults to 0. |  | 10.0 | global |
| height | String | The height of the tab bar, expressed either as a percentage of the available vertical space (for example, height="50%") or as a number of pixels (for example, height="200px"). If not specified, this value defaults to 100%. |  | 10.0 | global |
| id | String | An identifier that allows the tabBar component to be referenced by other components in the page. |  | 10.0 | global |
| immediate | Boolean | A Boolean value that specifies whether the action associated with this component should happen immediately, without processing any validation rules associated with the fields on the page. If set to true, the action happens immediately and validation rules are skipped. If not specified, this value defaults to false. See Use the immediate Attribute Carefully. |  | 11.0 | global |
| inactiveTabClass | String | The style class used to display a tab header in the tabPanel when it is not selected, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the tabPanel. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the tabPanel twice. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the tabPanel component. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the tabPanel component. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| reRender | Object | The ID of one or more components that are redrawn when the result of an AJAX update request returns to the client. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. Note that this value only applies when the switchType attribute is set to "ajax". |  | 10.0 | global |
| selectedTab | Object | The name of the default selected tab when the page loads. This value must match the name attribute on a child tab component. If the value attribute is defined, the selectedTab attribute is ignored. |  | 10.0 | global |
| style | String | The style used to display the tabPanel component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the tabPanel component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| switchType | String | The implementation method for switching between tabs. Possible values include "client", "server", and "ajax". If not specified, this value defaults to "server". |  | 10.0 | global |
| tabClass | String | The style class used to display the tabPanel component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| value | Object | The current active tab. You can specify this with an expression to dynamically control the active tab. For example, value="{!TabInFocus}", where TabInFocus is a variable set by a custom controller. The value of this attribute overrides the one set in selectedTab. |  | 10.0 | global |
| width | String | The width of the tabPanel, expressed either as a percentage of the available horizontal space (for example, width="50%") or as a number of pixels (for example, width="800px"). If not specified, this value defaults to 100%. |  | 10.0 | global |

#### See Also

-   [apex:tab](atlas.en-us.pages.meta/pages/pages_compref_tab.htm "A single tab in an <apex:tabPanel>.")

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

```
<!-- For this example to render properly, you must associate the Visualforce page 
with a valid account record in the URL. 
For example, if 001D000000IRt53 is the account ID, the resulting URL should be: 
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->
                    
<!-- This example shows how to use the tabClass and inactiveTabClass attributes to
change the default styling of the tab bar. Note that in the style definitions,
'background-image:none' is required to override the default image with the
specified color. You can also provide your own image with .css styles. -->
            
<apex:page standardController="Account" showHeader="true">
    <!-- Define Tab panel .css styles -->
    <style>
    .activeTab {background-color: #236FBD; color:white; background-image:none}
    .inactiveTab { background-color: lightgrey; color:black; background-image:none}
    </style>
            
    <!-- Create Tab panel -->
    <apex:tabPanel switchType="client" selectedTab="name2" id="AccountTabPanel"
        tabClass='activeTab' inactiveTabClass='inactiveTab'>
        <apex:tab label="One" name="name1" id="tabOne">content for tab one</apex:tab>
        <apex:tab label="Two" name="name2" id="tabTwo">content for tab two</apex:tab>
    </apex:tabPanel>
</apex:page>
```

## Related Topics

- Use the immediate Attribute Carefully (atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm)
- apex:tab (atlas.en-us.pages.meta/pages/pages_compref_tab.htm)
