---
title: "apex:actionStatus"
domain: pages
topic: apexactionstatus
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.098Z
estimatedTokens: 1419
keywords: [apex, actionStatus, component, displays, status, AJAX, either, progress, Attributes, Facets]
---

# apex:actionStatus

> A component that displays the status of an AJAX update request. An AJAX request can either be in progress or complete.

# apex:actionStatus

A component that displays the status of an AJAX update request. An AJAX request can either be in progress or complete.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| for | String | The ID of an actionRegion component for which the status indicator is displaying status. |  | 10.0 | global |
| id | String | An identifier that allows the actionStatus component to be referenced by other components in the page. |  | 10.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| layout | String | The manner with which the actionStatus component should be displayed on the page. Possible values include "block", which embeds the component in a div HTML element, or "inline", which embeds the component in a span HTML element. If not specified, this value defaults to "inline". |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the component is clicked. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the component is clicked twice. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the component. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the component. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| onstart | String | The JavaScript invoked at the start of the AJAX request. |  | 10.0 | global |
| onstop | String | The JavaScript invoked upon completion of the AJAX request. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| startStyle | String | The style used to display the status element at the start of an AJAX request, used primarily for adding inline CSS styles. |  | 10.0 | global |
| startStyleClass | String | The style class used to display the status element at the start of an AJAX request, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| startText | String | The status text displayed at the start of an AJAX request. |  | 10.0 | global |
| stopStyle | String | The style used to display the status element when an AJAX request completes, used primarily for adding inline CSS styles. |  | 10.0 | global |
| stopStyleClass | String | The style class used to display the status element when an AJAX request completes, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| stopText | String | The status text displayed when an AJAX request completes. |  | 10.0 | global |
| style | String | The style used to display the status element, regardless of the state of an AJAX request, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the status element, regardless of the state of an AJAX request, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |

## Facets

| Facet Name | Description | API Version |
| --- | --- | --- |
| start | The components that display when an AJAX request begins. Use this facet as an alternative to the startText attribute. Note that the order in which a start facet appears in the body of an actionStatus component does not matter, because any facet with the attribute name="start" controls the appearance of the actionStatus component when the request begins. | 10.0 |
| stop | The components that display when an AJAX request completes. Use this facet as an alternative to the stopText attribute. Note that the order in which a stop facet appears in the body of an actionStatus component does not matter, because any facet with the attribute name="stop" controls the appearance of the actionStatus component when the request completes. | 10.0 |

## Code Examples

```apex
<!--  Page: -->
			
<apex:page controller="exampleCon">
    <apex:form>
        <apex:outputText value="Watch this counter: {!count}" id="counter"/>
        <apex:actionStatus startText=" (incrementing...)"
            stopText=" (done)" id="counterStatus"/>
        <apex:actionPoller action="{!incrementCounter}" rerender="counter"
            status="counterStatus" interval="15"/>
    </apex:form>
</apex:page>
			
/*** Controller: ***/
			
public class exampleCon {
    Integer count = 0;
                        
    public PageReference incrementCounter() {
            count++;
            return null;
    }
                        
    public Integer getCount() {
        return count;
    }
}
```
