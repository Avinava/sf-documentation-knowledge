---
title: "Implementing the Process.Plugin Interface"
domain: apex-guide
topic: implementing-the-processplugin-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.805Z
estimatedTokens: 392
keywords: [Implementing, Process.Plugin, built-in, allows, pass, data, between, organization, specified, flow., Tip, Example, Implementation, Test]
---

# Implementing the Process.Plugin Interface

> Process.Plugin is a built-in interface that
        allows you to pass data between your organization and a specified flow.

# Implementing the Process.Plugin Interface

Process.Plugin is a built-in interface that allows you to pass data between your organization and a specified flow.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

We recommend using the @InvocableMethod annotation instead of the Process.Plugin interface.

-   The interface doesn’t support Blob, Collection, and sObject, data types, and it doesn’t support bulk operations. After you implement the interface on a class, the class can be referenced only from flows.
-   The annotation supports all data types and bulk operations. After you implement the annotation on a class, the class can be referenced from flows, processes, and the Custom Invocable Actions REST API endpoint.
-   Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex actions are only available to be added in free-form in Flow Builder. Existing actions can be edited in both auto-layout and free-form mode.

The class that implements the Process.Plugin interface must call these methods.

| Name | Arguments | Return Type | Description |
| --- | --- | --- | --- |
| describe |  | Process.PluginDescribeResult | Returns a Process.PluginDescribeResult object that describes this method call. |
| invoke | Process.PluginRequest | Process.PluginResult | Primary method that the system invokes when the class that implements the interface is instantiated. |

## Example Implementation

```

```

## Test Class

The following is a test class for the preceding class.

```

```

## Code Examples

```apex
global class flowChat implements Process.Plugin { 

// The main method to be implemented. The Flow calls this at runtime.
global Process.PluginResult invoke(Process.PluginRequest request) { 
        // Get the subject of the Chatter post from the flow
        String subject = (String) request.inputParameters.get('subject');
        
        // Use the Chatter APIs to post it to the current user's feed
        FeedItem fItem = new FeedItem(); 
        fItem.ParentId = UserInfo.getUserId(); 
        fItem.Body = 'Flow Update: ' + subject; 
        insert fItem; 

        // return to Flow
        Map<String,Object> result = new Map<String,Object>(); 
        return new Process.PluginResult(result); 
    } 

    // Returns the describe information for the interface
    global Process.PluginDescribeResult describe() { 
        Process.PluginDescribeResult result = new Process.PluginDescribeResult(); 
        result.Name = 'flowchatplugin';
        result.Tag = 'chat';
        result.inputParameters = new 
           List<Process.PluginDescribeResult.InputParameter>{ 
               new Process.PluginDescribeResult.InputParameter('subject', 
               Process.PluginDescribeResult.ParameterType.STRING, true) 
            }; 
        result.outputParameters = new 
           List<Process.PluginDescribeResult.OutputParameter>{ }; 
        return result; 
    }
}
```

```apex
@isTest
private class flowChatTest {

    static testmethod void flowChatTests() {
      
        flowChat plugin = new flowChat();
        Map<String,Object> inputParams = new Map<String,Object>();

        string feedSubject = 'Flow is alive';
        InputParams.put('subject', feedSubject);

        Process.PluginRequest request = new Process.PluginRequest(inputParams);           
        
        plugin.invoke(request);
    } 
}
```

## Related Topics

- Process.PluginDescribeResult (atlas.en-us.apexcode.meta/apexcode/apex_plugin_describe_result.htm)
- Process.PluginRequest (atlas.en-us.apexcode.meta/apexcode/apex_plugin_request.htm)
- Process.PluginResult (atlas.en-us.apexcode.meta/apexcode/apex_plugin_result.htm)
