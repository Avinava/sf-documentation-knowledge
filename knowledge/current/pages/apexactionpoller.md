---
title: "apex:actionPoller"
domain: pages
topic: apexactionpoller
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.080Z
estimatedTokens: 924
keywords: [apex, actionPoller, timer, AJAX, server, according, time, interval, specify, result, full, partial, Attributes]
---

# apex:actionPoller

> A timer that sends an AJAX request to the server according to a time interval that you
			specify. Each request can result in a full or partial page update.

# apex:actionPoller

A timer that sends an AJAX request to the server according to a time interval that you specify. Each request can result in a full or partial page update.

An <apex:actionPoller\> must be within the region it acts upon. For example, to use an <apex:actionPoller\> with an <apex:actionRegion\>, the <apex:actionPoller\> must be within the <apex:actionRegion\>.

**Considerations When Using <apex:actionPoller\>**

-   Action methods used by <apex:actionPoller\> should be lightweight. It's a best practice to avoid performing DML, external service calls, and other resource-intensive operations in action methods called by an <apex:actionPoller\>. Consider carefully the effect of your action method being called repeatedly by an <apex:actionPoller\> at the interval you specify, especially if it's used on a page that will be widely distributed, or left open for long periods.
-   <apex:actionPoller\> refreshes the connection regularly, keeping login sessions alive. A page with <apex:actionPoller\> on it won't time out due to inactivity.
-   To prevent concurrent AJAX requests from overriding each other and breaking your Visualforce page, don’t use <apex:actionPoller\> on a page with other components that submit AJAX requests.
-   If an <apex:actionPoller\> is ever re-rendered as the result of another action, it resets itself.
-   You can’t use a Visualforce expression to define the time interval for server requests from an Apex controller.
-   Avoid using this component with enhanced lists.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| action | ApexPages.Action | The action method invoked by the periodic AJAX update request from the component. Use merge-field syntax to reference the method. For example, action="{!incrementCounter}" references the incrementCounter() method in the controller. If an action is not specified, the page simply refreshes. |  | 10.0 | global |
| enabled | Boolean | A Boolean value that specifies whether the poller is active. If not specified, this value defaults to true. |  | 10.0 | global |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 10.0 | global |
| interval | Integer | The time interval between AJAX update requests, in seconds. This value must be 5 seconds or greater, and if not specified, defaults to 60 seconds. Note that the interval is only the amount of time between update requests. Once an update request is sent to the server, it enters a queue and can take additional time to process and display on the client. |  | 10.0 | global |
| oncomplete | String | The JavaScript invoked when the result of an AJAX update request completes on the client. |  | 10.0 | global |
| onsubmit | String | The JavaScript invoked before an AJAX update request has been sent to the server. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| reRender | Object | The ID of one or more components that are redrawn when the result of an AJAX update request returns to the client. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. |  | 10.0 | global |
| status | String | The ID of an associated component that displays the status of an AJAX update request. See the actionStatus component. |  | 10.0 | global |
| timeout | Integer | The amount of time (in milliseconds) before an AJAX update request should time out. |  | 10.0 | global |

## Code Examples

```apex
<!--  Page -->
			
<apex:page controller="exampleCon">
    <apex:form>
        <apex:outputText value="Watch this counter: {!count}" id="counter"/>
        <apex:actionPoller action="{!incrementCounter}" reRender="counter" interval="15"/>
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
