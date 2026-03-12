---
title: "Plugin Interface"
domain: apex-reference
topic: plugin-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.878Z
estimatedTokens: 786
namespace: Process
keywords: [Plugin, Allows, pass, data, between, organization, specified, flow., Tip, describe, invoke, request, Example, Implementation, Test]
---

# Plugin Interface

> Allows you to pass data between your organization and a
specified flow.

**Namespace:** `Process`

# Plugin Interface

Allows you to pass data between your organization and a specified flow.

## Namespace

[Process](atlas.en-us.apexref.meta/apexref/apex_namespace_process.htm "The Process namespace provides an interface and classes for passing data between your organization and a flow.")

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexref)

#### Tip

We recommend using the @InvocableMethod annotation instead of the Process.Plugin interface.

-   The interface doesn’t support Blob, Collection, and sObject, data types, and it doesn’t support bulk operations. After you implement the interface on a class, the class can be referenced only from flows.
-   The annotation supports all data types and bulk operations. After you implement the annotation on a class, the class can be referenced from flows, processes, and the Custom Invocable Actions REST API endpoint.
-   Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex actions are only available to be added in free-form in Flow Builder. Existing actions can be edited in both auto-layout and free-form mode.

-   **[Plugin Methods](atlas.en-us.apexref.meta/apexref/apex_interface_Process_Plugin.htm#apex_Process_Plugin_methods)**

-   **[Plugin Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_Process_Plugin.htm#apex_interface_Process_Plugin_example)**


## Plugin Methods

The following are instance methods for Plugin.

-   **[describe()](atlas.en-us.apexref.meta/apexref/apex_interface_Process_Plugin.htm#apex_Process_Plugin_describe)**
    Returns a Process.PluginDescribeResult object that describes this method call.
-   **[invoke(request)](atlas.en-us.apexref.meta/apexref/apex_interface_Process_Plugin.htm#apex_Process_Plugin_invoke)**
    Primary method that the system invokes when the class that implements the interface is instantiated.

### describe()

Returns a Process.PluginDescribeResult object that describes this method call.

#### Signature

public Process.PluginDescribeResult describe()

#### Return Value

Type: [Process.PluginDescribeResult](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_class_Process_PluginDescribeResult "Describes the input and output parameters for Process.PluginResult.")

### invoke(request)

Primary method that the system invokes when the class that implements the interface is instantiated.

#### Signature

public Process.PluginResult invoke(Process.PluginRequest request)

#### Parameters

request

Type: [Process.PluginRequest](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginRequest.htm#apex_class_Process_PluginRequest "Passes input parameters from the class that implements the Process.Plugin interface to the flow.")

#### Return Value

Type: [Process.PluginResult](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginResult.htm#apex_class_Process_PluginResult "Returns output parameters from the class that implements the Process.Plugin interface to the flow.")

## Plugin Example Implementation

```

```

### Test Class

The following is a test class for the above class.

```

```

## Code Examples

```apex
global class flowChat implements Process.Plugin { 

// The main method to be implemented. The Flow calls this at run time.
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

- Process (atlas.en-us.apexref.meta/apexref/apex_namespace_process.htm)
- Plugin Methods (atlas.en-us.apexref.meta/apexref/apex_interface_Process_Plugin.htm)
- Plugin Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_Process_Plugin.htm)
- describe() (atlas.en-us.apexref.meta/apexref/apex_interface_Process_Plugin.htm)
- invoke(request) (atlas.en-us.apexref.meta/apexref/apex_interface_Process_Plugin.htm)
- Process.PluginDescribeResult (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm)
- Process.PluginRequest (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginRequest.htm)
- Process.PluginResult (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginResult.htm)
