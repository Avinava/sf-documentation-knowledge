---
title: "Configuring a JavaScript Remoting Request"
domain: pages
topic: configuring-a-javascript-remoting-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.746Z
estimatedTokens: 363
keywords: [Configuring, JavaScript, Remoting, Configure, providing, configuration, settings, declare]
---

# Configuring a JavaScript Remoting Request

> Configure a remoting request by providing an object with configuration settings when you
  declare the remoting request.

# Configuring a JavaScript Remoting Request

Configure a remoting request by providing an object with configuration settings when you declare the remoting request.

For example, the default configuration parameters look like this:

```

```

These configuration parameters aren’t ordered, and you can omit parameters you don’t want to change from the default.

JavaScript remoting supports the following configuration parameters:

| Name | Data Type | Description |
| --- | --- | --- |
| buffer | Boolean | Whether to group requests executed close to each other in time into a single request. The default is true.JavaScript remoting optimizes requests that are executed close to each other in time and groups the calls into a single request. This buffering improve the efficiency of the overall request-and-response cycle, but sometimes it’s useful to ensure all requests execute independently. |
| escape | Boolean | Whether to escape the Apex method’s response. The default is true. |
| timeout | Integer | The timeout for the request, in milliseconds. The default is 30,000 (30 seconds). The maximum is 120,000 (120 seconds, or 2 minutes). |

The request timeout can also be configured for all requests made by a page, by setting the timeout using the Visualforce remoting object:

```

```

Override a page-level timeout configuration on a per-request basis by setting the timeout in the configuration object for that request, as described above.

## Code Examples

```
{ buffer: true, escape: true, timeout: 30000 }
```

```
<script type="text/javascript">

    Visualforce.remoting.timeout = 120000; // Set timeout at page level

    function getRemoteAccount() {
        var accountName = document.getElementById('acctSearch').value;

        // This remoting call will use the page's timeout value
        Visualforce.remoting.Manager.invokeAction(
            '{!$RemoteAction.AccountRemoter.getAccount}',
            accountName, 
            handleResult
        );
    }

    function handleResult(result, event) { ... }
</script>
```
