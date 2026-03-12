---
title: "createBillingSchedulesFromTransaction(InsuranceTransactionBillingInput)"
domain: insurance-developer-guide
topic: createbillingschedulesfromtransactioninsurancetransactionbillinginput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.808Z
estimatedTokens: 316
keywords: [createBillingSchedulesFromTransaction, InsuranceTransactionBillingInput, billing, schedules, insurance, transaction, API, Version, Requires, Chatter]
---

# createBillingSchedulesFromTransaction(InsuranceTransactionBillingInput)

> Create billing schedules from an insurance transaction.

# createBillingSchedulesFromTransaction(InsuranceTransactionBillingInput)

Create billing schedules from an insurance transaction.

## API Version

66.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceTransactionBillingOutputRepresentation createBillingSchedulesFromTransaction(ConnectApi.InsuranceTransactionBillingInputRepresentation InsuranceTransactionBillingInput)

## Parameters

InsuranceTransactionBillingInput

Type: [ConnectApi.InsuranceTransactionBillingInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_transaction_billing.htm "Input representation of the details to create billing schedules from an insurance transaction.")

Details to create billing schedules from an insurance transaction.

## Return Value

Type: [ConnectApi.InsuranceTransactionBillingOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_transaction_billing_output.htm "Output representation of the result of creating billing schedules from an insurance transaction.")

## Example

This is a sample to call the Create Billing Schedules connect API from Apex.

Class Definition

```

```

Usage Example

```

```

## Code Examples

```apex
public with sharing class CreateInsuranceBillingScheduleCallable implements System.Callable{
    
    public Object call(String actionType, Map<String, Object> args) {
        
        // Retrieve the input and output maps from the arguments        
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');        
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');        
                       
        // Retrieve the insurance policy transaction input data from the input map        
        ConnectApi.InsuranceTransactionBillingInputRepresentation insuranceTransactionInput = (ConnectApi.InsuranceTransactionBillingInputRepresentation)inputMap.get('insuranceTransactionInput');        
        String insPolicyTransactionId = (String) inputMap.get('insPolicyTransactionId');        
        
        System.debug('Start of connect API call to Insurance Transaction Billing');        
        
        // Initialize the insurance transaction billing output representation        
        ConnectApi.InsuranceTransactionBillingOutputRepresentation transactionBillingOutcome;        
        
        // Call the Connect API to send the insurance transaction to billing       
        try {            
            transactionBillingOutcome = ConnectApi.InsuranceBillingFamily.createBillingSchedulesFromTransaction(insuranceTransactionInput);            
            System.debug('Policy transaction send to billing successfully: ' + transactionBillingOutcome);           
            // Put the transaction billing outcome in the output map            
            outputMap.put('transactionBillingOutcome', transactionBillingOutcome);        
        } catch (Exception e) {            
            System.debug('Error while sending transaction to billing: ' + e.getMessage());            
            outputMap.put('error', e.getMessage());        
        }        
        // Return the transaction billing outcome        
        return transactionBillingOutcome;            
    }
}
```

```apex
global class ConnectDriver {
    
    global static void callInsuranceBillingConnectAPI(String insPolicyTransactionId){                
        Map<String, Object> input = new Map<String, Object>();                      
        CreateInsuranceBillingScheduleCallable callable = new CreateInsuranceBillingScheduleCallable();                
        
        // Create and populate the InsuranceTransactionBillingInputRepresentation object        
        ConnectApi.InsuranceTransactionBillingInputRepresentation insuranceTransactionInput = new ConnectApi.InsuranceTransactionBillingInputRepresentation();                
        
        // Populate transactionId for InsuranceTransactionBillingInputRepresentation                     
        insuranceTransactionInput.insPolicyTransactionId = insPolicyTransactionId;                        
        
        // Add the insuranceTransactionInput to the input map        
        input.put('insuranceTransactionInput', insuranceTransactionInput);                
        
        // Prepare the output map        
        Map<String, Object> output = new Map<String, Object>();                
        
        // Prepare the args map        
        Map<String, Object> args = new Map<String, Object>();        
        args.put('input', input);        
        args.put('output', output);                
        
        // Call the 'insuranceBillingService' action        
        Object result = callable.call('InsuranceBilling', args);        
        
        // Retrieve the policy data from the result        
        ConnectApi.InsuranceTransactionBillingOutputRepresentation transactionBillingOutcome = (ConnectApi.InsuranceTransactionBillingOutputRepresentation) result;        
        
        // Output the policy data to the debug log        
        System.debug('Insurance Transaction Billing API Response: ' + JSON.serializePretty(transactionBillingOutcome));        
        
        // Check for errors in the output map        
        if (output.containsKey('error')) {            
            System.debug('Error: ' + output.get('error'));		
        }    
    }
}
```

## Related Topics

- ConnectApi.InsuranceTransactionBillingInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_transaction_billing.htm)
- ConnectApi.InsuranceTransactionBillingOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_transaction_billing_output.htm)
