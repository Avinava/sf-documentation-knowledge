---
title: "SignalingApexProcessor Interface"
domain: revenue-cloud
topic: signalingapexprocessor-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:05.253Z
estimatedTokens: 860
namespace: RevSignaling
keywords: [SignalingApexProcessor, Defines, context-driven, orchestration, logic, based, procedure, plan, instance, contextual, instance., Usage, execute, var1, Example, Implementation]
---

# SignalingApexProcessor Interface

> Defines the context-driven orchestration logic based on procedure plan instance and
        contextual instance.

**Namespace:** `RevSignaling`

# SignalingApexProcessor Interface

Defines the context-driven orchestration logic based on procedure plan instance and contextual instance.

## Namespace

[RevSignaling](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSignaling.htm "The RevSignaling Namespace includes properties and methods to extend the standard procedure plan implementation through custom logic. Using this extension support, you can tailor implementations to your unique requirements.")

## Usage

Here's a sample implementation of the SignalingApexProcessor interface.

```

```

Refer to [Customize Your Pricing Procedures With Apex Hooks](https://help.salesforce.com/s/articleView?id=ind.pricing_customize_pricing_procedures_with_apex_hooks.htm&language=en_US "HTML (New Window)") for additional samples that cover unique pricing scenarios by implementing this interface.

-   **[SignalingApexProcessor Methods](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_interface_RevSignaling_SignalingApexProcessor.htm#apex_RevSignaling_SignalingApexProcessor_methods)**
    The SignalingApexProcessor method executes the specified transaction request, which returns the corresponding response.
-   **[SignalingApexProcessor Example Implementation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_interface_RevSignaling_SignalingApexProcessor.htm#apex_interface_RevSignaling_SignalingApexProcessor_Example)**
    Refer to the example implementation of the SignalingApexProcessor interface to define a context-driven orchestration logic.

## SignalingApexProcessor Methods

The SignalingApexProcessor method executes the specified transaction request, which returns the corresponding response.

The SignalingApexProcessor class includes these methods.

-   **[execute(var1)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_interface_RevSignaling_SignalingApexProcessor.htm#apex_RevSignaling_SignalingApexProcessor_execute)**
    Executes the parameter that's specified in the instance of a transaction request.

### execute(var1)

Executes the parameter that's specified in the instance of a transaction request.

#### Signature

public RevSignaling.TransactionResponse execute(RevSignaling.TransactionRequest var1)

```

```

#### Parameters

var1

Type: [RevSignaling.TransactionRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm#apex_class_RevSignaling_TransactionRequest "Represents the transaction request to the signaling Apex processor.")

Instance of the TransactionRequest class containing the execution parameter.

#### Return Value

Type: [RevSignaling.TransactionResponse](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionResponse.htm#apex_class_RevSignaling_TransactionResponse "Represents the transaction response from the signaling Apex processor.")

Response from the orchestration.

## SignalingApexProcessor Example Implementation

Refer to the example implementation of the SignalingApexProcessor interface to define a context-driven orchestration logic.

This is an example implementation of the RevSignaling.SignalingApexProcessor interface.

```

```

## Code Examples

```apex
public class SignalingApexProcessorImpl implements RevSignaling.SignalingApexProcessor {

    public RevSignaling.TransactionResponse execute(RevSignaling.TransactionRequest request) {
        System.debug('Executing SampleValidClass...');
        System.debug('Procedure Plan: ' + request.procedurePlanInstance);
        System.debug('Context Instance: ' + request.ctxInstanceId);
        
        // Add your logic here
        
        // Return the response
        RevSignaling.TransactionResponse response = new RevSignaling.TransactionResponse();
        response.status = RevSignaling.TransactionStatus.SUCCESS;
        response.message = 'Apex method was successfully executed!';
        return response;
    }
}
```

```
RevSignaling.SignalingApexProcessor, execute, [RevSignaling.TransactionRequest], RevSignaling.TransactionResponse
```

```apex
public class SignalingApexProcessorImpl implements RevSignaling.SignalingApexProcessor {

    public RevSignaling.TransactionResponse execute(RevSignaling.TransactionRequest request) {
        System.debug('Executing SampleValidClass...');
        System.debug('Procedure Plan: ' + request.procedurePlanInstance);
        System.debug('Context Instance: ' + request.ctxInstanceId);
        
        // Add your logic here
        
        // Return the response
        RevSignaling.TransactionResponse response = new RevSignaling.TransactionResponse();
        response.status = RevSignaling.TransactionStatus.SUCCESS;
        response.message = 'Apex method was successfully executed!';
        return response;
    }
}
```

## Related Topics

- RevSignaling (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSignaling.htm)
- SignalingApexProcessor Methods (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_interface_RevSignaling_SignalingApexProcessor.htm)
- SignalingApexProcessor Example Implementation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_interface_RevSignaling_SignalingApexProcessor.htm)
- execute(var1) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_interface_RevSignaling_SignalingApexProcessor.htm)
- RevSignaling.TransactionRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm)
- RevSignaling.TransactionResponse (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionResponse.htm)
