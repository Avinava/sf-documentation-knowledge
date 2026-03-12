---
title: "logout"
domain: service-cloud
topic: logout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.112Z
estimatedTokens: 154
keywords: [logout, Logs, agent, Omni-Channel, API, versions, 32.0, later, Arguments, Sample, Code–Visualforce]
---

# logout

> Logs an agent out of Omni-Channel. Available in API versions 32.0 and later.

# logout

Logs an agent out of Omni-Channel. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method to call when the agent is logged out of Omni-Channel. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if the logout was successful; false if the logout wasn’t successful. |

## Code Examples

```
sforce.console.presence.logout((optional) callback:function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testLogout();return false;">Log out of Omni-Channel</a> 

    <script type="text/javascript">
        function testLogout() {
            sforce.console.presence.logout(function(result) { 
                if (result.success) { 
                    alert('Logout successfully');
                } else {
                    alert('Logout failed');
                }
           }); 
        }
    </script>
</apex:page>
```
