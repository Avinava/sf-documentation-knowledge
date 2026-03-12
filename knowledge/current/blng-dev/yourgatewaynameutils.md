---
title: "YourGatewayNameUtils"
domain: blng-dev
topic: yourgatewaynameutils
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.013Z
estimatedTokens: 191
keywords: [YourGatewayNameUtils, singleton, utility, interacts, external, payment, gateway, user, API, classes, different, needs, However, we've, provided]
---

# YourGatewayNameUtils

> YourGatewayNameUtils is a singleton utility class that interacts with an external
        payment gateway. All user gateway API classes will be different based on your needs.
        However, we've provided a template that you can use to help create your own.

# YourGatewayNameUtils

YourGatewayNameUtils is a singleton utility class that interacts with an external payment gateway. All user gateway API classes will be different based on your needs. However, we've provided a template that you can use to help create your own.

| Available in: All Salesforce Billing Editions |
| --- |


This code shows an example of how to generate a void token request for CyberSource. The class contains several methods.

-   A utility method to construct the void token request payload for CyberSource
-   A utility method to validate gateway settings
-   A utility to return a map of CyberSource Gateway Return code to a friendly description
-   A utility method to pass the XML node and retrieve a map of element to value

```

```

## Code Examples

```apex
public class YourGatewayNameUtils 
{

    // ============================================================================
    // STATIC VARIABLES
    // ============================================================================

    // private Attribute to implement singleton pattern for YourGatewayNameUtils class
    private static YourGatewayNameUtils yourGatewayNameUtilsInstance;



    /**
     * @name getInstance
     * @description get an Instance of Service class
     * @param NA
     * @return YourGatewayNameUtils Generator Class Instance
     */
    public static YourGatewayNameUtils getInstance() {
        if (NULL == yourGatewayNameUtilsInstance) {
            yourGatewayNameUtilsInstance = new YourGatewayNameUtils();
        }
        return yourGatewayNameUtilsInstance;
    }

    /**
    * @name validateGatewaySettings
    * @description Validates Gateway Details
    * @param TransactionParameter
    * @return NA
    * @exception NA
    */
    public static void validateGatewaySettings(blng.TransactionParameter transactionParameterToProcess) {
        if (String.IsBlank(transactionParameterToProcess.getGateWay().MerchantId__c)) {
            transactionParameterToProcess.transactionResult.setError('MerchantId is missing');
        } else if (String.IsBlank(transactionParameterToProcess.getGateWay().MerchantReference__c)) {
            transactionParameterToProcess.transactionResult.setError('MerchantReference is missing');
        } else if (String.IsBlank(transactionParameterToProcess.getGateWay().TransactionSecurityKey__c)) {
            transactionParameterToProcess.transactionResult.setError('TransactionSecurityKey is missing');
        }
    }

        /**
        * @name getErrorCyberSourceCode
        * @description Return's Map of Cyber source error description By code
        * @param NA
        * @return Map [Key => String [Code] , Value => String [Error Message]]
        */
      /// include mapping of all  codes based on gateway you are implementing
     public static map<string, string> getGatewayReturnCode() {
        Map<string, string> mapOfMessageByErrorCode = new Map<string, string>();
        mapOfMessageByErrorCode.put('100', 'Successful transaction');
        mapOfMessageByErrorCode.put('101', 'The request is missing one or more required fields. 
           Possible action: see the reply fields missingField_0...N for which fields are missing. Resend the request with the complete information. For information about missing or invalid fields');
        mapOfMessageByErrorCode.put('102', 'Invalid data');
        mapOfMessageByErrorCode.put('151', 'This error does not include timeouts between the client and the server.
           To avoid duplicating the transaction, do not resend the request until you have reviewed the transaction status at the Business Center');
        mapOfMessageByErrorCode.put('152', 'The request was received, but a service did not finish running in time.
           To avoid duplicating the transaction, do not resend the request until you have reviewed the transaction status at the Business Center');
        mapOfMessageByErrorCode.put('201', 'The issuing bank has questions about the request. 
           You will not receive an authorization code programmatically, but you can obtain one verbally by calling the processor');
      /// include mapping of all error codes based on gateway you are implementing
        return mapOfMessageByErrorCode;
    }


    /**
     * @name getElements
     * @description Populates's map Of Response Value By Key
     * @param Dom XML Node
     * @return Map [Key => String [Name] , Value => String [text]]
     * @exception NA
     */
    public static Map<string, string> getElements(DOM.XMLNode node) {
        if (node.getNodeType() == DOM.XMLNodeType.ELEMENT) {
            if (String.IsNotBlank(node.getText().trim())) {
                mapOfResponseValueByKey.put(node.getName(), node.getText().trim());
            }

            for (Dom.XMLNode child : node.getChildElements()) {
                getElements(child);
            }
        }
        return mapOfResponseValueByKey;
    }


    public void generateToken(List<blng.TransactionParameter> listOfTransactionParameter) 
    {
        //Frame xml/json for generate token api method
    }


    // Example from Cybersource to generate a voidToken Request
    public void generateVoidToken(List<blng.TransactionParameter> listOfTransactionParameter) 
    {
        //Frame xml/json for void token api method 
         XmlStreamWriter writer = new XmlStreamWriter();
        // Populate Document start
        writer.writeStartDocument('utf-8', '1.0');
        // Populate Envelope start
        writer.writeStartElement('s', 'Envelope', 'http://schemas.xmlsoap.org/soap/envelope/');
        writer.writeAttribute('xmlns', 'http://schemas.xmlsoap.org/soap/envelope/', 's', 'http://schemas.xmlsoap.org/soap/envelope/');
        // Populate Header start
        writer.writeStartElement('s', 'Header', 'http://schemas.xmlsoap.org/soap/envelope/');
        // Populate Security start
        writer.writeStartElement('wsse', 'Security', 'http://schemas.xmlsoap.org/soap/envelope/');
        writer.writeAttribute('xmlns', 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd', 'wsse', 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd');
        // Populate UsernameToken start
        writer.writeStartElement('wsse', 'UsernameToken', '');
        // Populate the Username start
        writer.writeStartElement('wsse', 'Username', '');
        writer.writeCharacters(transactionParameterToProcess.getGateWay().MerchantId__c);
        writer.writeEndElement();
        // Populate the Username end
        // Populate the Password start
        writer.writeStartElement('wsse', 'Password', '');
        writer.writeAttribute(NULL, NULL, 'Type', 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText');
        writer.writeCharacters(transactionParameterToProcess.getGateWay().TransactionSecurityKey__c);
        writer.writeEndElement();
        // Populate the Password end
        writer.writeEndElement();
        // Populate UsernameToken end
        writer.writeEndElement();
        // Populate Security end
        writer.writeEndElement();
        // Populate Header end
        // Populate Body start
        writer.writeStartElement('s', 'Body', '');
        // Populate RequestMessage start
        writer.writeStartElement('', 'requestMessage', '');
        writer.writeAttribute('', '', 'xmlns', 'urn:schemas-cybersource-com:transaction-data-1.137');
        // Populate merchantID start
        writer.writeStartElement('', 'merchantID', '');
        writer.writeCharacters(transactionParameterToProcess.getGateWay().MerchantId__c);
        writer.writeEndElement();
        // Populate merchantID end
        // Populate merchantReferenceCode start
        writer.writeStartElement('', 'merchantReferenceCode', '');
        writer.writeCharacters(transactionParameterToProcess.getGateWay().MerchantReference__c);
        writer.writeEndElement();
        // Populate merchantReferenceCode end
        // Populate recurringSubscriptionInfo start
        writer.writeStartElement('', 'recurringSubscriptionInfo', '');
        // Populate subscriptionID start
        writer.writeStartElement('', 'subscriptionID', '');
        //Added by DL,W-3931366, for cardmapping
        writer.writeCharacters(getCardMapping(transactionParameterToProcess.getPaymentMethod()));
        writer.writeEndElement();
        // Populate subscriptionID end
        writer.writeEndElement();
        // Populate recurringSubscriptionInfo end
        // Populate paySubscriptionDeleteService start
        writer.writeStartElement('', 'paySubscriptionDeleteService', '');
        writer.writeAttribute('', '', 'run', 'true');
        writer.writeEndElement();
        // Populate paySubscriptionDeleteService end
        // Populate RequestMessage end
        writer.writeEndElement();
        // Populate Body end
        writer.writeEndElement();
        // Populate Envelope end
        writer.writeEndDocument();
        transactionParameterToProcess.setRequestBody(writer.getXmlString());
        writer.close();
    }
   
    public void generateAuthorize(Map<String, blng.TransactionParameter> mapOfTransactionParameterByInvoiceId)
    {
        //Frame xml/json for generate authorize api method 
    } 

    public void generateCapture(Map<String, blng.TransactionParameter> mapOfTransactionParameterByInvoiceId)
    {
        //Frame xml/json for generate capture api method
    }

    public void generateCharge(Map<String, blng.TransactionParameter> mapOfTransactionParameterByInvoiceId)
    {
        //Frame xml/json for generate charge api method
    }

    public void generateVoid(Map<String, blng.TransactionParameter> mapOfTransactionParameterByInvoiceId)
    {
        //Frame xml/json for generate void api method
    }
   
    public void generateRefund(Map<String, blng.TransactionParameter> mapOfTransactionParameterByInvoiceId)
    {
        //Frame xml/json for generate refund api method
    }

     public void generatenonReferencedRefund(Map<String, blng.TransactionParameter> mapOfTransactionParameterByInvoiceId)
    {
        //Frame xml/json for generate non referenced refund api method
    }
   
    public void generateVoidRefund(Map<String, blng.TransactionParameter> mapOfTransactionParameterByInvoiceId)
    {
        //Frame xml/json for generate void refund api method
    }

    public void generateGetPaymentStatus(List<blng.TransactionParameter> listOfTransactionParameter) 
    {
        //Frame xml/json for generate get payment status api method
    }

    public void generateGetRefundStatus(List<blng.TransactionParameter> listOfTransactionParameter) 
    {
        //Frame xml/json for generate get refund status api method
    }
}
```
