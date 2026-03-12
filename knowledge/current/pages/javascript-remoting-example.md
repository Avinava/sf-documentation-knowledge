---
title: "JavaScript Remoting
            Example"
domain: pages
topic: javascript-remoting-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.759Z
estimatedTokens: 427
keywords: [JavaScript, Remoting, Here’s, basic, sample, demonstrating, how, Visualforce, pages]
---

# JavaScript Remoting
            Example

> Here’s a basic sample demonstrating how to use JavaScript remoting in your Visualforce pages.

# JavaScript Remoting Example

Here’s a basic sample demonstrating how to use JavaScript remoting in your Visualforce pages.

First, create an Apex controller called AccountRemoter:

```

```

Other than the @RemoteAction annotation, this looks like any other controller definition.

To make use of this remote method, create a Visualforce page that looks like this:

```

```

Notice the following about this markup:

-   The JavaScript uses the explicit invokeAction remoting call, and takes advantage of the $RemoteAction global to resolve the correct namespace for the remote action method.
-   The event.status variable is true only if the call was successful. The error handling illustrated by the example is deliberately simple and prints the error message and stack trace from the event.message and event.where values, respectively. You’re encouraged to implement more robust alternative logic for requests where your method call doesn’t succeed.
-   The result variable represents the object returned from the Apex getAccount method.
-   Accessing the DOM ID of a plain HTML element is simple, just use the ID of the item.
-   DOM IDs of Visualforce components are dynamically generated in order to ensure IDs are unique. The code above uses the technique illustrated in [Using $Component to Reference Components from JavaScript to Reference Components from JavaScript](atlas.en-us.pages.meta/pages/pages_access.htm#pages_access "Use the $Component global variable to simplify referencing the DOM ID that is generated for a Visualforce component, and reduce some of the dependency on the overall page structure.") to retrieve the component’s ID by accessing it via the $Component global variable.

## Code Examples

```apex
global with sharing class AccountRemoter {

    public String accountName { get; set; }
    public static Account account { get; set; }
    public AccountRemoter() { } // empty constructor
    
    @RemoteAction
    global static Account getAccount(String accountName) {
        account = [SELECT Id, Name, Phone, Type, NumberOfEmployees 
                   FROM Account WHERE Name = :accountName];
        return account;
    }
}
```

```
<apex:page controller="AccountRemoter">
    <script type="text/javascript">
    function getRemoteAccount() {
        var accountName = document.getElementById('acctSearch').value;

        Visualforce.remoting.Manager.invokeAction(
            '{!$RemoteAction.AccountRemoter.getAccount}',
            accountName, 
            function(result, event){
                if (event.status) {
                    // Get DOM IDs for HTML and Visualforce elements like this
                    document.getElementById('remoteAcctId').innerHTML = result.Id
                    document.getElementById(
                        "{!$Component.block.blockSection.secondItem.acctNumEmployees}"
                        ).innerHTML = result.NumberOfEmployees;
                } else if (event.type === 'exception') {
                    document.getElementById("responseErrors").innerHTML = 
                        event.message + "<br/>
<pre>" + event.where + "</pre>";
                } else {
                    document.getElementById("responseErrors").innerHTML = event.message;
                }
            }, 
            {escape: true}
        );
    }
    </script>

    <input id="acctSearch" type="text"/>
    <button onclick="getRemoteAccount()">Get Account</button>
    <div id="responseErrors"></div>

    <apex:pageBlock id="block">
        <apex:pageBlockSection id="blockSection" columns="2">
            <apex:pageBlockSectionItem id="firstItem">
                <span id="remoteAcctId"/>
            </apex:pageBlockSectionItem>
            <apex:pageBlockSectionItem id="secondItem">
                <apex:outputText id="acctNumEmployees"/>
            </apex:pageBlockSectionItem>
        </apex:pageBlockSection>
    </apex:pageBlock>
</apex:page>
```

## Related Topics

- Using $Component to Reference Components from JavaScript to Reference Components from JavaScript (atlas.en-us.pages.meta/pages/pages_access.htm)
