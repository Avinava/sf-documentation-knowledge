---
title: "Namespaces and JavaScript Remoting"
domain: pages
topic: namespaces-and-javascript-remoting
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.773Z
estimatedTokens: 485
keywords: [Namespaces, JavaScript, Remoting, $RemoteAction, automatically, resolve, correct, any, remote, action, easier, work, especially, pages, calls]
---

# Namespaces and JavaScript Remoting

> You can use the $RemoteAction global to
        automatically resolve the correct namespace, if any, for your remote action. This makes it
        easier to work with namespaces, especially for pages that make remoting calls to methods
        provided in packages.

# Namespaces and JavaScript Remoting

You can use the $RemoteAction global to automatically resolve the correct namespace, if any, for your remote action. This makes it easier to work with namespaces, especially for pages that make remoting calls to methods provided in packages.

To use this facility, you must explicitly invoke JavaScript remoting. The pattern for doing this is:

```

```

The fully qualified remote action is a string that represents the complete path to the remote action method, including namespace, base class, and so on: namespace\[.BaseClass\]\[.ContainingClass\].ConcreteClass.Method. Use $RemoteAction in an expression to automatically resolve the namespace, for example {!$RemoteAction.MyController.getAccount}.

Invocation parameters are the arguments used to perform the remote method invocation, and are the same arguments used to make a standard remoting call:

-   The parameters to send to the @RemoteAction method, if any.
-   The callback function, which handles the returned result.
-   Configuration details for the invocation, if any.

For example, you might define a remote invocation to retrieve an account like this:

```

```

This JavaScript remoting call doesn’t need to know the details of the namespace in which the controller is defined, whether it’s in your own namespace or something provided by an installed package. It also handles the situation where your organization doesn’t have a namespace defined.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Errors encountered when calling invokeAction are reported only in the JavaScript console. For example, if $RemoteAction finds matching @RemoteAction methods in multiple namespaces, it returns the first matching method and logs a warning to the JavaScript console. If a matching controller or action is not found, the call silently fails and an error is logged to the JavaScript console.

## Code Examples

```
Visualforce.remoting.Manager.invokeAction(
    'fully_qualified_remote_action', 
     invocation_parameters
);
```

```
<script type="text/javascript">
function getRemoteAccount() {
    var accountName = document.getElementById('acctSearch').value;

    Visualforce.remoting.Manager.invokeAction(
        '{!$RemoteAction.MyController.getAccount}', 
        accountName, 
        function(result, event){
            if (event.status) {
                document.getElementById('acctId').innerHTML = result.Id
                document.getElementById('acctName').innerHTML = result.Name;
            } else if (event.type === 'exception') {
                document.getElementById("responseErrors").innerHTML = event.message;
            } else {
                document.getElementById("responseErrors").innerHTML = event.message;
            }
        }, 
        {escape: true}
    );
}
</script>
```
