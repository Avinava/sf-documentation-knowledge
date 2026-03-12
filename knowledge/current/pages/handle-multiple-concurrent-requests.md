---
title: "Handle Multiple Concurrent Requests"
domain: pages
topic: handle-multiple-concurrent-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.870Z
estimatedTokens: 841
keywords: [Handle, Multiple, Concurrent, Requests, long-running, tasks, block, pending, reduce, delays, move, code, asynchronous, blocks, possible]
---

# Handle Multiple Concurrent Requests

> Concurrent requests are long-running tasks that can block other pending tasks. To reduce
    delays, move code to asynchronous code blocks when possible and make sure action methods that
    use the <apex:actionPoller> component are
    lightweight.

# Handle Multiple Concurrent Requests

Concurrent requests are long-running tasks that can block other pending tasks. To reduce delays, move code to asynchronous code blocks when possible and make sure action methods that use the <apex:actionPoller> component are lightweight.

## Write Asynchronous Code

To offload expensive processing, use Asynchronous JavaScript and XML (Ajax) to move non-essential logic to an asynchronous code block. For example, for a page built with only synchronous code, a user clicks a button and waits for a long-running task to complete before they see a confirmation message. In contrast, if the page queues the long-running task for asynchronous processing, then the control immediately returns to the user. You can configure the page to notify the user when the task completes.

## Keep <apex:actionPoller> Lightweight

The <apex:actionPoller> component is a timer that makes Ajax requests. Pages that use the <apex:actionPoller> component make continuous requests on the server. If a user leaves the page open for long periods of time or opens multiple windows on the same page—for example, to get details for multiple accounts—performance decreases.

To avoid performance degradation, avoid performing DML, external service calls, and other resource-intensive operations in action methods that <apex:actionPoller> calls. Carefully consider the effects of <apex:actionPoller> action methods called at repeated intervals. Tasks are likely to be blocked when the method is used on a widely distributed or continuously active page.

To avoid hitting governor limits, increase the time interval between Ajax requests. The <apex:actionPoller> component’s interval attribute measures the time interval between Ajax update requests in seconds. This value must be 5 seconds or greater, and if not specified, defaults to 60 seconds.

The <apex:actionPoller> component is appropriate on pages that don’t require expensive processing, but for pages where the calculations require more server time, consider using the <apex:actionFunction> component with JavaScript remoting instead. This alternative requires more code but offers greater flexibility and efficiency.

#### See Also

-   [Use Ajax in a Page](atlas.en-us.pages.meta/pages/pages_quick_start_ajax.htm "Some Visualforce components are Ajax aware. With these components, you can add Ajax behaviors to a page without writing any JavaScript.")

-   [*Apex Developer Guide*: Make Long-Running Callouts with Continuations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_continuation_overview.htm "Apex Developer Guide: Make Long-Running Callouts with
    Continuations - HTML (New Window)")

-   [*Salesforce Developers Blog*: Two Visualforce Pages: ActionFunction and JavaScript Remoting](https://developer.salesforce.com/blogs/developer-relations/2011/05/tale-of-two-visualforce-pages-actionfunction-and-javascript-remoting "Salesforce Developers Blog: Two Visualforce Pages: ActionFunction and
    JavaScript Remoting - HTML (New Window)")

-   [JavaScript Remoting for Apex Controllers](atlas.en-us.pages.meta/pages/pages_js_remoting.htm "Use JavaScript remoting in Visualforce to call methods in Apex controllers from JavaScript. Create pages with complex, dynamic behavior that isn’t possible with the standard Visualforce AJAX components.")

## Related Topics

- Use Ajax in a Page (atlas.en-us.pages.meta/pages/pages_quick_start_ajax.htm)
- JavaScript Remoting for Apex Controllers (atlas.en-us.pages.meta/pages/pages_js_remoting.htm)
