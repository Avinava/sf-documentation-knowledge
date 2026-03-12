---
title: "Debugging JavaScript Remoting"
domain: pages
topic: debugging-javascript-remoting
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.751Z
estimatedTokens: 219
keywords: [Debugging, JavaScript, Remoting, pages, requires, debug, Visualforce, Apex]
---

# Debugging JavaScript Remoting

> Debugging pages that use JavaScript remoting requires you to debug
            Visualforce, Apex, and
        JavaScript.

# Debugging JavaScript Remoting

Debugging pages that use JavaScript remoting requires you to debug Visualforce, Apex, and JavaScript.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

Keep your JavaScript console open during development when using JavaScript remoting. Errors and exceptions encountered by JavaScript remoting are logged to the JavaScript console, if enabled, and are otherwise silently ignored.

When a @RemoteAction method throws an exception due to a programming error or other failure, the Apex stack trace is returned to the browser within the event object. Inspect the stack trace in a JavaScript debugger console or use it in the error handling of your response callback function.

Here’s a callback function that simply displays the stack trace when there’s an exception.

```

```

## Code Examples

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
                document.getElementById("responseErrors").innerHTML = 
                    event.message + "<br/>
<pre>" + event.where + "</pre>";
            } else {
                document.getElementById("responseErrors").innerHTML = event.message;
            }
        }
    );
}
</script>
```
