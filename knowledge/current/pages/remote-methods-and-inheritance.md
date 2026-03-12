---
title: "Remote Methods and Inheritance"
domain: pages
topic: remote-methods-and-inheritance
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.778Z
estimatedTokens: 158
keywords: [Remote, Inheritance, call, actions, Apex, controller, inherited, @RemoteAction, looked, Visualforce, inspects, controller’s, hierarchy, finds, ancestor]
---

# Remote Methods and Inheritance

> You can call remote actions on your Apex controller that are inherited methods. When
        a @RemoteAction method is looked up or called, Visualforce inspects the page
        controller’s inheritance hierarchy and finds @RemoteAction methods in the controller’s ancestor classes.

# Remote Methods and Inheritance

You can call remote actions on your Apex controller that are inherited methods. When a @RemoteAction method is looked up or called, Visualforce inspects the page controller’s inheritance hierarchy and finds @RemoteAction methods in the controller’s ancestor classes.

Here’s an example demonstrating this capability. The following Apex classes form a three-tier inheritance hierarchy:

```

```

This Visualforce page simply calls the sayHello remote action.

```

```

The remote method doesn’t exist in the ChildRemoteController class. Instead, it’s inherited from GrandparentRemoteController.

## Code Examples

```apex
global with sharing class ChildRemoteController 
    extends ParentRemoteController { }
global virtual with sharing class ParentRemoteController 
    extends GrandparentRemoteController { }

global virtual with sharing class GrandparentRemoteController {
    @RemoteAction
    global static String sayHello(String helloTo) {
        return 'Hello ' + helloTo + ' from the Grandparent.';
    }
}
```

```
<apex:page controller="ChildRemoteController" >
    <script type="text/javascript">
        function sayHello(helloTo) {
            ChildRemoteController.sayHello(helloTo, function(result, event){
                if(event.status) {
                    document.getElementById("result").innerHTML = result;
                }
            });
        }
    </script>

    <button onclick="sayHello('Jude');">Say Hello</button><br/>
    <div id="result">[Results]</div>
    
</apex:page>
```
