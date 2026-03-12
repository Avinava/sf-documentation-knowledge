---
title: "apex:toolbar"
domain: pages
topic: apextoolbar
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.216Z
estimatedTokens: 1422
keywords: [apex, toolbar, stylized, horizontal, contain, any, number, child, components, aligned, left, side, <apex, toolbarGroup>, component]
---

# apex:toolbar

> A stylized, horizontal toolbar that can contain any number of child components. By default, all child components are aligned to the left side of the toolbar. Use an <apex:toolbarGroup> component to align one or more child components to the right.

# apex:toolbar

A stylized, horizontal toolbar that can contain any number of child components. By default, all child components are aligned to the left side of the toolbar. Use an <apex:toolbarGroup\> component to align one or more child components to the right.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| contentClass | String | The style class used to display each child component in the toolbar, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| contentStyle | String | The style used to display each child component in the toolbar, used primarily for adding inline CSS styles. |  | 10.0 | global |
| height | String | The height of the toolbar, expressed as a relative percentage of the total height of the screen (for example, height="5%") or as an absolute number of pixels (for example, height="10px"). If not specified, this value defaults to the height of the tallest component. |  | 10.0 | global |
| id | String | An identifier that allows the toolbar component to be referenced by other components in the page. |  | 10.0 | global |
| itemSeparator | String | The symbol used to separate toolbar components. Possible values include "none", "line", "square", "disc", and "grid". If not specified, this value defaults to "none". |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the toolbar. |  | 16.0 |  |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the toolbar twice. |  | 16.0 |  |
| onitemclick | String | The JavaScript invoked if the user clicks on a component in the toolbar that is not in a toolbarGroup component. |  | 16.0 |  |
| onitemdblclick | String | The JavaScript invoked if the user clicks twice on a component in the toolbar that is not in a toolbarGroup component. |  | 16.0 |  |
| onitemkeydown | String | The JavaScript invoked if the user presses a keyboard key on a component in the toolbar that is not in a toolbarGroup component. |  | 16.0 |  |
| onitemkeypress | String | The JavaScript invoked if the user presses or holds down a keyboard key on an item in the toolbar that is not in a toolbarGroup component. |  | 16.0 |  |
| onitemkeyup | String | The JavaScript invoked if the user releases a keyboard key on an item in the toolbar that is not in a toolbarGroup component. |  | 16.0 |  |
| onitemmousedown | String | The JavaScript invoked if the user clicks a mouse button on an item in the toolbar that is not in a toolbarGroup component. |  | 16.0 |  |
| onitemmousemove | String | The JavaScript invoked if the user moves the mouse pointer while focused on an item in the toolbar that is not in a toolbarGroup component. |  | 16.0 |  |
| onitemmouseout | String | The JavaScript invoked if the user moves the mouse pointer away from the an item in the toolbar that is not in a toolbarGroup component. |  | 16.0 |  |
| onitemmouseover | String | The JavaScript invoked if the user moves the mouse pointer over an item in the toolbar that is not in a toolbarGroup component. |  | 16.0 |  |
| onitemmouseup | String | The JavaScript invoked if the user releases a mouse button on an item in the toolbar that is not in a toolbarGroup component. |  | 16.0 |  |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 16.0 |  |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 16.0 |  |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 16.0 |  |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 16.0 |  |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 16.0 |  |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the toolbar. |  | 16.0 |  |
| onmouseover | String | he JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the toolbar. |  | 16.0 |  |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 16.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the toolbar is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| separatorClass | String | The style class used to display the toolbar component separator, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. See also the itemSeparator attribute. |  | 10.0 | global |
| style | String | The style used to display the toolbar, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the toolbar, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| width | String | The width of the toolbar, expressed as a relative percentage of the total width of the screen (for example, width="5%") or as an absolute number of pixels (for example, width="10px"). If not specified, this value defaults to 100%. |  | 10.0 | global |

#### See Also

-   [apex:toolbarGroup](atlas.en-us.pages.meta/pages/pages_compref_toolbarGroup.htm)

## Code Examples

```
<!-- Page: sampleToolbar-->

<apex:page id="thePage">

<!-- A simple example of a toolbar -->

    <apex:toolbar id="theToolbar">

        <apex:outputText value="Sample Toolbar"/>

        <apex:toolbarGroup itemSeparator="line" id="toobarGroupLinks">

            <apex:outputLink value="https://salesforce.com">

              salesforce

            </apex:outputLink>

            <apex:outputLink value="https://developer.salesforce.com">

             apex developer network

            </apex:outputLink>

        </apex:toolbarGroup>

        <apex:toolbarGroup itemSeparator="line" location="right" id="toobarGroupForm">

            <apex:form id="theForm">

                <apex:inputText id="theInputText">Enter Text</apex:inputText>

                <apex:commandLink value="search" id="theCommandLink"/>

            </apex:form>

        </apex:toolbarGroup>

    </apex:toolbar>

</apex:page>



<!-- Page: toolBarEvents-->

<apex:page id="anotherPage">

<!-- A simple toolbar that includes toolbar events.  -->

  <apex:pageMessages/>

  <apex:form>

    <apex:toolbar 

          onclick="alert('You clicked the mouse button on a component in the toolbar.')"

          onkeydown="alert('You pressed a keyboard key in a component in the toolbar.')"

          onitemclick="alert('You clicked the mouse button on a component that is ' +

                              'not in a toolbarGroup.')"

          onitemkeydown="alert('You pressed a keyboard key in a component that is ' +

                                'not in a toolbarGroup.')">

      <apex:inputText/>

      Click outside of a toolbargroup

      <apex:toolbarGroup><apex:inputText/>Click in a toolbarGroup</apex:toolbarGroup>

    </apex:toolbar>

  </apex:form>

</apex:page>
```

## Related Topics

- apex:toolbarGroup (atlas.en-us.pages.meta/pages/pages_compref_toolbarGroup.htm)
