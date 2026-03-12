---
title: "Using the Process.PluginRequest Class"
domain: apex-guide
topic: using-the-processpluginrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.789Z
estimatedTokens: 327
keywords: [Process.PluginRequest, passes, input, implements, flow., Tip, Code, Example]
---

# Using the Process.PluginRequest Class

> The Process.PluginRequest class passes input
        parameters from the class that implements the interface to the flow.

# Using the Process.PluginRequest Class

The Process.PluginRequest class passes input parameters from the class that implements the interface to the flow.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

We recommend using the @InvocableMethod annotation instead of the Process.Plugin interface.

-   The interface doesn’t support Blob, Collection, and sObject, data types, and it doesn’t support bulk operations. After you implement the interface on a class, the class can be referenced only from flows.
-   The annotation supports all data types and bulk operations. After you implement the annotation on a class, the class can be referenced from flows, processes, and the Custom Invocable Actions REST API endpoint.
-   Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex actions are only available to be added in free-form in Flow Builder. Existing actions can be edited in both auto-layout and free-form mode.

This class has no methods.

Constructor signature:

```

```

Here’s an example of instantiating the Process.PluginRequest class with one input parameter.

```

```

## Code Example

In this example, the code returns the subject of a Chatter post from a flow and posts it to the current user's feed.

```

```

## Code Examples

```apex
Process.PluginRequest (Map<String,Object>)
```

```apex
Map<String,Object> inputParams = new Map<String,Object>();
            string feedSubject = 'Flow is alive';
            InputParams.put('subject', feedSubject);
            Process.PluginRequest request = new Process.PluginRequest(inputParams);
```

```apex
global Process.PluginResult invoke(Process.PluginRequest request) { 
        // Get the subject of the Chatter post from the flow
        String subject = (String) request.inputParameters.get('subject');
        
        // Use the Chatter APIs to post it to the current user's feed
        FeedPost fpost = new FeedPost(); 
        fpost.ParentId = UserInfo.getUserId(); 
        fpost.Body = 'Flow Update: ' + subject; 
        insert fpost; 

        // return to Flow
        Map<String,Object> result = new Map<String,Object>(); 
        return new Process.PluginResult(result); 
    } 

    // describes the interface 
    global Process.PluginDescribeResult describe() { 
        Process.PluginDescribeResult result = new Process.PluginDescribeResult(); 
        result.inputParameters = new List<Process.PluginDescribeResult.InputParameter>{ 
            new Process.PluginDescribeResult.InputParameter('subject', 
            Process.PluginDescribeResult.ParameterType.STRING, true) 
            }; 
        result.outputParameters = new List<Process.PluginDescribeResult.OutputParameter>{ }; 
        return result; 
    }
}
```
