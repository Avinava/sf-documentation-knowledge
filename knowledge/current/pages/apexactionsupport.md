---
title: "apex:actionSupport"
domain: pages
topic: apexactionsupport
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.106Z
estimatedTokens: 1010
keywords: [apex, actionSupport, component, adds, AJAX, support, another, allowing, refreshed, asynchronously, server, particular, event, occurs, button]
---

# apex:actionSupport

> A component that adds AJAX support to another component, allowing
		the component to be refreshed asynchronously by the server when a
		particular event occurs, such as a button click or hover.

# apex:actionSupport

A component that adds AJAX support to another component, allowing the component to be refreshed asynchronously by the server when a particular event occurs, such as a button click or hover.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| action | ApexPages.Action | The action method invoked by the AJAX request to the server. Use merge-field syntax to reference the method. For example, action="{!incrementCounter}" references the incrementCounter() method in the controller. If an action is not specified, the page simply refreshes. |  | 10.0 | global |
| disabled | Boolean | A Boolean value that allows you to disable the component. When set to "true", the action is not invoked when the event is fired. |  | 16.0 |  |
| disableDefault | Boolean | A Boolean value that specifies whether the default browser processing should be skipped for the associated event. If set to true, this processing is skipped. If not specified, this value defaults to true. |  | 10.0 | global |
| event | String | The DOM event that generates the AJAX request. Possible values include "onblur", "onchange", "onclick", "ondblclick", "onfocus", "onkeydown", "onkeypress", "onkeyup", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onselect", and so on. These values are case sensitive. |  | 10.0 | global |
| focus | String | The ID of the component that is in focus after the AJAX request completes. |  | 10.0 | global |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 10.0 | global |
| immediate | Boolean | A Boolean value that specifies whether the action associated with this component should happen immediately, without processing any validation rules associated with the fields on the page. If set to true, the action happens immediately and validation rules are skipped. If not specified, this value defaults to false. See Use the immediate Attribute Carefully. |  | 11.0 | global |
| onbeforedomupdate | String | The JavaScript invoked when the onbeforedomupdate event occurs--that is, when the AJAX request has been processed, but before the browser's DOM is updated. |  | 11.0 | global |
| oncomplete | String | The JavaScript invoked when the result of an AJAX update request completes on the client. |  | 10.0 | global |
| onsubmit | String | The JavaScript invoked before an AJAX update request has been sent to the server. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| reRender | Object | The ID of one or more components that are redrawn when the result of an AJAX update request returns to the client. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. |  | 10.0 | global |
| status | String | The ID of an associated component that displays the status of an AJAX update request. See the actionStatus component. |  | 10.0 | global |
| timeout | Integer | The amount of time (in milliseconds) before an AJAX update request should time out. |  | 10.0 | global |

#### See Also

-   [apex:actionFunction](atlas.en-us.pages.meta/pages/pages_compref_actionFunction.htm "A component that provides support for invoking controller action methods directly from JavaScript code using an AJAX request.")

-   [Refreshing Chart Data Using <apex:actionSupport>](atlas.en-us.pages.meta/pages/pages_charting_refreshing_data_actionsupport.htm "Update a Visualforce chart in response to a user’s actions by adding the <apex:actionSupport> component to Visualforce user interface elements that affect the chart’s data.")

## Code Examples

```apex
<!--  Page: -->
<apex:page controller="exampleCon">
    <apex:form>
        <apex:outputpanel id="counter">
            <apex:outputText value="Click Me!: {!count}"/>
            <apex:actionSupport event="onclick" 
                                action="{!incrementCounter}" 
                                rerender="counter" status="counterStatus"/>
        </apex:outputpanel>
        <apex:actionStatus id="counterStatus" 
                           startText=" (incrementing...)" 
                           stopText=" (done)"/>
    </apex:form>
</apex:page>	

/***  Controller: ***/
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

## Related Topics

- Use the immediate Attribute Carefully (atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm)
- apex:actionFunction (atlas.en-us.pages.meta/pages/pages_compref_actionFunction.htm)
- Refreshing Chart Data Using <apex:actionSupport> (atlas.en-us.pages.meta/pages/pages_charting_refreshing_data_actionsupport.htm)
