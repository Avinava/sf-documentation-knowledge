---
title: "YourGatewayName"
domain: blng-dev
topic: yourgatewayname
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.010Z
estimatedTokens: 208
keywords: [YourGatewayName, base, user, gateway, API, classes, different, needs, However, we've, provided, template, help, own]
---

# YourGatewayName

> YourGateWayName is a base class. All user gateway API classes will be different based
        on your needs. However, we've provided a template that you can use to help create your
        own.

# YourGatewayName

YourGateWayName is a base class. All user gateway API classes will be different based on your needs. However, we've provided a template that you can use to help create your own.

| Available in: All Salesforce Billing Editions |
| --- |


This class shows an example of a void token calling the CyberSource payment gateway. The gateway receives a request and then provides a response through the TransactionResult object. Salesforce Billing evaluates the response and filters it into one of several fields shown in the payment transaction record's Gateway Status field. For more information on payment transactions and managing gateway responses in Salesforce Billing, check out [Managing Payment Transactions](https://help.salesforce.com/articleView?id=blng_gateway_manage_parent.htm&language=en_US).

```

```

## Code Examples

```apex
Note : Map<String, blng.TransactionParameter> is the parameter in all methods of this class
       blng.TransactionParameter class is a global class which list of global method exposed detailed in next section 
       and String in the map is a Unique Id which could be Invoice or Account Id
       
       Map<String, blng.TransactionResult> is the return for all the Methods in this class
       blng.TransactionResult class is a global class with a list of global method detailed in next section
       the string should be the same string of parameter

       public class YourGatewayName
{
    //Add variables here
    //Gateway Status related variables
    private static Map<string, blng.TransactionResult.GatewayStatusType> mapGatewayStatusEnumTypesByStrings =
            new Map<string, blng.TransactionResult.GatewayStatusType>();
    static {
        List<blng.TransactionResult.GatewayStatusType> enumValues = blng.TransactionResult.GatewayStatusType.values();
        for (Integer i = 0; i < enumValues.size(); i++) {
            mapGatewayStatusEnumTypesByStrings.put(enumValues.get(i).name(), enumValues.get(i));
        }
    }


 // 
    // ============================================================================
    // CONSTANT 
    // ============================================================================
  
        private static final String ACCEPT = 'ACCEPT';
        private static final String REJECT = 'REJECT';
        private static final String SUCCESS = 'SUCCESS';
        private static final String FAILURE = 'FAILURE';
        private static final String ERROR = 'ERROR';
        private static final String DECISION = 'decision';

    /**
    * @name handleError
    * @description populates TransactionResult with error values
    * @Param
    * @return NA
    * @exception NA
    */
    private void handleError(blng.TransactionResult transactionResult,
            String pointOfFailure,
            blng.TransactionResult.GatewayStatusType gatewayStatus,
            Exception e) {
        String newErrorMessage = pointOfFailure + (e != null ? ': ' + e.getMessage() : '');

        // if there are previous errors, set the response message by concatenating them in the right order
        if (!transactionResult.getErrors().isEmpty()) {
            String prevErrorMessage = '';
            for (String err : transactionResult.getErrors()) {
                prevErrorMessage += (String.isEmpty(prevErrorMessage) ? '' : '. ') + err;
            }
            transactionResult.setResponseMessage(prevErrorMessage);
        } else {
            transactionResult.setResponseMessage(newErrorMessage);
        }

        // set the rest of the values
        transactionResult.setIsSuccess(false);
        transactionResult.setError(newErrorMessage);
        transactionResult.setResponseToValidate(FAILURE);
        if (transactionResult.getResponseCode() != null) {
            populateGatewayStatus(transactionResult);
        } else {
            // set the response code to ERROR if it does not exist, which will be in all cases except when the response returns from the gateway
            transactionResult.setResponseCode(ERROR);
            transactionResult.setGatewayStatus(gatewayStatus);
        }
    }
    
    /**
    * @name populateTransactionResultForVoidToken
    * @description Method to populate Transaction Result for CyberSource Void Token
    * @param Map[Key => String [unique Id],Value => TransactionParameter]
    * @return Map[Key => String [unique Id],Value => TransactionResult]
    */ 
    public Map<String, blng.TransactionResult> populateTransactionResultForVoidToken(Map<String, blng.TransactionParameter> mapOfTransactionParameterById)
    {
        Map<String, blng.TransactionResult> mapOfTransactionResultById = new Map<String, blng.TransactionResult>();
        for(String idToProcess : mapOfTransactionParameterById.KeySet())
        {
            blng.TransactionParameter transactionParameterToProcess;
            try {
                transactionParameterToProcess = mapOfTransactionParameterById.get(idToProcess);
                if (NULL != transactionParameterToProcess.transactionResult.getGatewayStatus()) {
                    mapOfTransactionResultById.put(idToProcess, transactionParameterToProcess.transactionResult);
                    continue;
                }
                //Populating the transaction Parameter class based on the response is success or failure
                if(transactionParameterToProcess.getResponseValueByKey().get(DECISION) == ACCEPT)
                {
                    //The response is success
                    transactionParameterToProcess.transactionResult.setResponseToValidate(SUCCESS);
                    transactionParameterToProcess.transactionResult.setIsSuccess(true);
                }
                else if(transactionParameterToProcess.getResponseValueByKey().get(DECISION) == REJECT)
                {
                    //The response is failure
                    transactionParameterToProcess.transactionResult.setResponseToValidate(FAILURE);
                    transactionParameterToProcess.transactionResult.setIsSuccess(false);
                }
                //Populating payment gateway response
                transactionParameterToProcess.transactionResult.setId(idToProcess);
                transactionParameterToProcess.transactionResult.setResponseCode
                    (transactionParameterToProcess.getResponseValueByKey().get(REASONCODE));

                if(NULL != transactionParameterToProcess.transactionResult.getResponseCode())
                {
                    transactionParameterToProcess.transactionResult.setResponseCodeMessage
                     (YourGatewayNameUtils.getGatewayReturnCode().get(transactionParameterToProcess.transactionResult.getResponseCode()));
                }
                //Populating payment gateway response
                transactionParameterToProcess.transactionResult.setPaymentToken
                   (transactionParameterToProcess.getResponseValueByKey().get(SUBSCRIPTIONID));
                //Populate gateway status
                populateGatewayStatus(transactionParameterToProcess.transactionResult);
                mapOfTransactionResultById.put(idToProcess,transactionParameterToProcess.transactionResult);
            } catch (Exception e) {
                handleError(transactionParameterToProcess.transactionResult, FAILED_POPULATING_RESULT + IN_VOID_TOKEN, blng.TransactionResult.GatewayStatusType.SystemError, e);
            }
        }
        //Return map of transaction results
        return mapOfTransactionResultById;
    } 



    // default Gateway Status
    private static final blng.TransactionResult.GatewayStatusType defaultGatewayStatus = blng.TransactionResult.GatewayStatusType.Indeterminate;
        
    //Generate Token method Salesforce billing interface class will use this class to Generate token 
    public static Map<String, blng.TransactionResult> generateToken(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
       //Actual Implementation for Token takes place here 
    }
    
    //Void Token method Salesforce billing interface class will use this class to void Token Transaction
    public static Map<String, blng.TransactionResult> voidTokenTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
       //Actual Implementation for Void Token takes place here 
       if(!mapOfTransactionParameterById.IsEmpty())
        {
            for(blng.TransactionParameter transactionParameterToProcess : mapOfTransactionParameterById.Values())
            {
                // validate gateway settings
                try {
                    YourGatewayNameUtils.validateGatewaySettings(transactionParameterToProcess);
                    if (!transactionParameterToProcess.transactionResult.getErrors().IsEmpty()) {
                        handleError(transactionParameterToProcess.transactionResult, FAILED_GATEWAY_SETTINGS + IN_VOID_TOKEN, blng.TransactionResult.GatewayStatusType.ValidationError, null);
                        continue;
                    }
                } catch (Exception e) {
                    handleError(transactionParameterToProcess.transactionResult, FAILED_GATEWAY_SETTINGS + IN_VOID_TOKEN, blng.TransactionResult.GatewayStatusType.ValidationError, e);
                    continue;
                }
                // Calling YourGatewayNameUtils class to populate the Request for generate void token XML
                try {
                    YourGatewayNameUtils.getInstance().generateVoidTokenXML(transactionParameterToProcess);
                } catch (Exception e) {
                    handleError(transactionParameterToProcess.transactionResult, FAILED_XML_GENERATION + IN_VOID_TOKEN, blng.TransactionResult.GatewayStatusType.SystemError, e);
                    continue;
                }
                try {
                    // Calling YourHttpService class to send a Request
                    YourHttpService sendHttpRequest = YourHttpService.getInstance();
                    sendHttpRequest.addHeader('Content-type', 'text/xml');
                    sendHttpRequest.setTokenisationHeader(transactionParameterToProcess.getGateWay().MerchantId__c, transactionParameterToProcess.getGateWay().TransactionSecurityKey__c);
                    // Sends the request to payment gateway
                    sendHttpRequest.post(transactionParameterToProcess.getGateWay().TestMode__c ? YOUR_GATEWAY_TEST_ENDPOINT_URL_SANDBOX : YOUR_GATEWAY_TEST_ENDPOINT_PRODUCTION,transactionParameterToProcess.getRequestBody());
                    if(!Test.isRunningTest())
                    {
                        // Populating the map of Response for transaction parameter class from the response received by payment gateway
                        transactionParameterToProcess.mapOfResponseValueByKey.putAll
                        (YourGatewayNameUtils.getElements(sendHttpRequest.getResponse().getBodyDocument().getRootElement()));
                    }
                    else
                    {
                        Dom.Document doc = new Dom.Document();
                        doc.load(TEST_RESPONSE_BODY); // You can provide a string for TEST_RESPONSE_BODY in test mode
                        transactionParameterToProcess.mapOfResponseValueByKey.putAll
                        (YourGatewayNameUtils.getElements(doc.getRootElement()));
                    }
                } catch (Exception e) {
                    handleError(transactionParameterToProcess.transactionResult, FAILED_CALLOUT + IN_VOID_TOKEN, blng.TransactionResult.GatewayStatusType.SystemError, e);
                }
            }
        }
        // Calling populate Transaction Result For Void Token class to Return map of transaction results
        return populateTransactionResultForVoidToken(mapOfTransactionParameterById);
    }
    
    //Authorize Transaction method Salesforce billing interface class will use this class to Authorize Transaction
    public static Map<String, blng.TransactionResult> authorizeTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        //Actual Implementation for Authorize takes place here 
    }
    
    //Capture Transaction method Salesforce billing interface class will use this class to capture Transaction
    public static Map<String, blng.TransactionResult> captureTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        //Actual Implementation for capture takes place here
    }

    //Charge Transaction method Salesforce billing interface class will use this class to Charge Transaction
    public static Map<String, blng.TransactionResult> chargeTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        //Actual Implementation for Charge takes place here
    }
    
    //void Transaction method Salesforce billing interface class will use this class to void Transaction
    public static Map<String, blng.TransactionResult> voidTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        //Actual Implementation for void Transaction takes place here
    }

    //RefundTransaction method Salesforce billing interface class will use this class to Refund Transaction
    public static Map<String, blng.TransactionResult> refundTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        //Actual Implementation for Refund takes place here
    }
    
    //Non Referenced Refund method Salesforce billing interface class will use this class to non referenced refund Transaction
    public static Map<String, blng.TransactionResult> nonReferencedRefund(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        //Actual Implementation for non referenced refund takes place here
    }
    
    //void Refund method Salesforce billing interface class will use this class to non void Refund Transaction
    public static Map<String, blng.TransactionResult> voidRefundTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        //Actual Implementation for void Refund Transaction takes place here
    }
    
    //Get payment status method Salesforce billing interface class will use this class to get payment status Transaction
    public static Map<String, blng.TransactionResult> getPaymentStatus(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        //Actual Implementation for get payment status takes place here
    }
    
    //Get refund status method Salesforce billing interface class will use this class to get refund status Transaction
    public static Map<String, blng.TransactionResult> getRefundStatus(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        //Actual Implementation for get refund status takes place here
    }
    /**
     * Does a SOQL lookup on the mapper table and gets the gateway status mapped to the return code
     * Returns the default enum if no match is found
     * @param transactionResult
     */
     public void populateGatewayStatus(blng.TransactionResult transactionResult) {
         blng.TransactionResult.GatewayStatusType gatewayStatus = defaultGatewayStatus;
         // actual implementation of mapping
         transactionResult.setGatewayStatus(gatewayStatus);
     }    
}
```
