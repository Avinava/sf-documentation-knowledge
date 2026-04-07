---
title: "Clear Data from a Data Extension"
domain: mc-apis
topic: clear-data-from-a-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.665Z
estimatedTokens: 983
keywords: [Prerequisites, Clear, Extension, clearing, How, Sample, NET, Code, Java, CXF, Bundle, 2.3.3, SOAP]
---

> This page contains information  about clearing data from an existing data extension.

# Clear Data from a Data Extension

This page contains information about clearing data from an existing data extension.

## Prerequisites

This feature applies only to administrative users in an Enterprise 2.0 account. Your API user must have the appropriate permissions to perform this API call. Please contact your Marketing Cloud representative to have these permissions enabled.

Use this call to clear all existing data from a data extension. While the data itself is cleared, the data extension remains intact and can be repopulated with more data later.

## How to Clear Data from a Data Extension

Use the sample code below as a model for your own API call.

### Sample .NET Code

```apex
public void ClearDE()
{
    SoapClient api = new SoapClient();
    api.ClientCredentials.UserName.UserName = "XXXXX";
    api.ClientCredentials.UserName.Password = "XXXXX";
    string requestID;
    string status;
    string statusmessage;
    DataExtension DE = new DataExtension();
    DE.ObjectID = "a23790c3-88c0-4f08-a253-1024d9e74a2c";
    PerformResult[] presult = api.Perform(new PerformOptions(), "ClearData", new APIObject[] { DE }, out status, out statusmessage, out requestID);
    foreach (PerformResult result in presult)
    {
        Console.WriteLine(result.StatusMessage);
    }
    Console.WriteLine(requestID + ": " + status);
}
```

### Sample Java CXF (Bundle 2.3.3) Code

```apex
private static void clearDE(Soap port)
    {
        DataExtension de = new DataExtension();
        de.setCustomerKey("My data extension"); //External key of the data extension

        try {
            com.exacttarget.wsdl.partnerapi.PerformRequestMsg.Definitions def = new
                            com.exacttarget.wsdl.partnerapi.PerformRequestMsg.Definitions();

            PerformRequestMsg parameters = new PerformRequestMsg();
            parameters.setAction("ClearData");   //Clear data action
            def.getDefinition().add(de);
            parameters.setDefinitions(def);

            com.exacttarget.wsdl.partnerapi.PerformResponseMsg result = port.perform(parameters); //perform the data clearance
            System.out.println("Result = "+result.getOverallStatus());
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
```

### Sample SOAP Request

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Header>
            <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" soap:mustUnderstand="1">
                  <wsse:UsernameToken xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" wsu:Id="UsernameToken-1">
                        <wsse:Username>XXXXX</wsse:Username>
                        <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
                        <wsse:Nonce EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary">Zop82o/bN5h16q2ZmCnucw==</wsse:Nonce>
                        <wsu:Created>2012-01-13T15:53:33.982Z</wsu:Created>
                  </wsse:UsernameToken>
            </wsse:Security>
      </soap:Header>
      <soap:Body>
            <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI" xmlns:ns2="urn:fault.partner.exacttarget.com">
                  <Action>ClearData</Action>
                  <Definitions>
                        <Definition xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="DataExtension">
                              <CustomerKey>Test Data Extension</CustomerKey>
                        </Definition>
                  </Definitions>
            </PerformRequestMsg>
      </soap:Body>
</soap:Envelope>
```

## Code Examples

```apex
private static void clearDE(Soap port)
    {     
        DataExtension de = new DataExtension();
        de.setCustomerKey("My data extension"); //External key of the data extension

        try {
            com.exacttarget.wsdl.partnerapi.PerformRequestMsg.Definitions def = new
                            com.exacttarget.wsdl.partnerapi.PerformRequestMsg.Definitions();

            PerformRequestMsg parameters = new PerformRequestMsg();
            parameters.setAction("ClearData");   //Clear data action
            def.getDefinition().add(de);
            parameters.setDefinitions(def);

            com.exacttarget.wsdl.partnerapi.PerformResponseMsg result = port.perform(parameters); //perform the data clearance
            System.out.println("Result = "+result.getOverallStatus());
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
```
