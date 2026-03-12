---
title: "login"
domain: service-cloud
topic: login
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.109Z
estimatedTokens: 230
keywords: [login, Logs, agent, Omni-Channel, specific, presence, status, reconnect, connection, error, API, versions, 32.0, later, Arguments]
---

# login

> Logs an agent into Omni-Channel with a specific presence status. You also can use
        this method to reconnect to Omni-Channel after a connection error. Available in API versions
        32.0 and later.

# login

Logs an agent into Omni-Channel with a specific presence status. You also can use this method to reconnect to Omni-Channel after a connection error. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| statusId | String | The ID of the presence status. Agents must be given access to this presence status through their associated profile or permission set. |
| callback | function | JavaScript method to call when the agent is logged in with the presence status associated with statusId. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if the login was successful; false if the login wasn’t successful. |

## Code Examples

```
sforce.console.presence.login(statusId:String, (optional) callback:function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testLogin('0N5xx00000000081');return false;">Log In to Omni-Channel</a> 

    <script type="text/javascript">
        function testLogin(statusId) {
            //Gets the Salesforce ID of the presence status entity which the current user has been assigned through their permission set or profile. 
            //These values are for example purposes only.
            sforce.console.presence.login(statusId, function(result) { 
                if (result.success) { 
                    alert('Login successful');
                } else {
                    alert('Login failed');
                }
           }); 
        }
    </script>
</apex:page>
```
