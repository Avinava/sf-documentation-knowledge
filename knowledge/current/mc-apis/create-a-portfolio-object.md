---
title: "Create a Portfolio Object"
domain: mc-apis
topic: create-a-portfolio-object
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:21.020Z
estimatedTokens: 1968
keywords: [Portfolio, creating, account's, via, SOAP, API, Why, How, Sample, NET, Code, Java, Axis, 1.4, PHP]
---

# Create a Portfolio Object

> This page contains information  for creating an object in your account's portfolio via the SOAP API.

# Create a Portfolio Object

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.

This page contains information for creating an object in your account's portfolio via the SOAP API.

The object must be located in your FTP location in order to add it to your Portfolio.

## Why Create a Portfolio Object

By placing an object in your FTP location and using a call to add it to your Portfolio, you can make the content available for future sends.

## How To Create a Portfolio Object

Use the sample code below as an example of how to add your object to your Portfolio.

### Sample .NET Code

```apex
private void CreatePortfolio()
{
    SoapClient framework2 = new SoapClient();
    framework2.ClientCredentials.UserName.UserName = "xxx";
    framework2.ClientCredentials.UserName.Password = "xxx";
    String requestID;
    String status;
    Portfolio portfolio = new Portfolio();
    portfolio.DisplayName = "API Uploaded2";
    portfolio.CustomerKey = "API 12213123wewe12";
    portfolio.Source = new ResourceSpecification();
    // Use the syntax below to get the file from a public HTTP site
    portfolio.Source.URN = "http://email.exacttarget.com/images/RequestADemo_button.jpg";
    portfolio.FileName = "RequestADemo_button.jpg";
    // Use the syntax below to get the file from your Enhanced FTP site
    //portfolio.Source.URN = "File://ETFTP/Import/image1.jpg";
    //portfolio.FileName = "image1.jpg";
    CreateResult[] cresults = framework2.Create(new CreateOptions(), new APIObject[] { portfolio }, out requestID, out status);
    foreach (CreateResult result in cresults)
    {
        Console.WriteLine(result.StatusMessage);
    }
    Console.WriteLine(requestID + ": " + status);
}
```

If you wish to place the new object within a specific Portfolio folder, be sure to specify the CategoryID, as shown below:

```
portfolio.CategoryID = 123456;
portfolio.CategoryIDSpecified = true;
```

### Sample Java Code (Axis 1.4)

```apex
public void testUPloadImageToPortfolio() {
    Soap stub = init();
    Portfolio p = new Portfolio();
    p.setFileName("smallGraphic03.jpg");
    ResourceSpecification rs = new ResourceSpecification();
    rs.setURN("http://email.exacttarget.com/images/smallGraphic03.jpg");
    p.setSource(rs);
    //"PortfolioIMageUpload_PartnerKey"
        /* ClientID clientID = new ClientID();
    clientID.setPartnerClientKey("PortfolioIMageUpload_PartnerKey");
    p.setClient(clientID);*/
    try {
        CreateRequest request = new CreateRequest();
        request.setObjects(new APIObject[]{p});
        CreateOptions createOptions = new CreateOptions();
        request.setOptions(createOptions);
        CreateResponse response;
        response = stub.create(request);
        System.out.println(response);
        CreateResult[] list = response.getResults();
        if (list != null && list.length > 0) {
            CreateResult createResult = response.getResults(0);
            System.out.println("[statusMessage] " + createResult.getStatusMessage());
            System.out.println("[statusCode] " + createResult.getStatusCode());
            System.out.println("[errorCode] " + createResult.getErrorCode());
            }
        } catch (Exception e) {
          e.printStackTrace();
    }
}
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl ';
try    {
    $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
    $client->username = $username;
    $client->password = $password;
    $port = new Marketing Cloud_Portfolio();
    $port->DisplayName = 'API Uploaded Test v10';
    $port->CustomerKey = 'API Uploaded Test v10';
    $rs = new Marketing Cloud_ResourceSpecification();
    $rs->URN = 'http://email.exacttarget.com/images/RequestADemo_button.jpg';
    $port->Source = $rs;
    $port->FileName = 'APIUploadedTestv10.jpg';
    $object = new SoapVar($port, SOAP_ENC_OBJECT, 'Portfolio', "http://exacttarget.com/wsdl/partnerAPI ");
    $request = new Marketing Cloud_CreateRequest();
    $request->Options = NULL;
    $request->Objects = array($object);
    $results = $client->Create($request);
    print_r($results);
} catch (SoapFault $e) {
    print_r($e);
}
?>
```

### SOAP Envelope for Creating an Image from Enhanced FTP

```
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope
 xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
 xmlns:xsd="http://www.w3.org/2001/XMLSchema"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 <SOAP-ENV:Header>
  <wsse:Security
   xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
     xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <wsu:Timestamp>
    <wsu:Created>2008-07-02T13:01:11Z</wsu:Created>
    <wsu:Expires>2008-07-02T13:06:11Z</wsu:Expires>
   </wsu:Timestamp>
   <wsse:UsernameToken>
    <wsse:Username>XXX</wsse:Username>
    <wsse:Password
   Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXX</wsse:Password>
    <wsse:Nonce>AAUzRUrwKojyzrbRN4FAASzoew0=</wsse:Nonce>
    <wsu:Created>2008-07-02T13:01:11Z</wsu:Created>
   </wsse:UsernameToken>
  </wsse:Security>
 </SOAP-ENV:Header>
 <SOAP-ENV:Body>
  <CreateRequest
    xmlns="http://exacttarget.com/wsdl/partnerAPI">
   <Options/>
   <ns1:Objects
    xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI"
     xsi:type="ns1:Portfolio">
    <ns1:ModifiedDate
     xsi:nil="true"/>
    <ns1:ObjectID
      xsi:nil="true"/>
    <ns1:CustomerKey/>
    <ns1:Source>
     <ns1:ModifiedDate
      xsi:nil="true"/>
     <ns1:ObjectID xsi:nil="true"/>
     <ns1:URN>File://ETFTP/Import/Football.jpg</ns1:URN>
    </ns1:Source>
    <ns1:FileName>PF-20080702090111892.jpg</ns1:FileName>
   </ns1:Objects>
  </CreateRequest>
 </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

### Sample SOAP Envelope

```
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Header>
      <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
         <wsse:UsernameToken>
            <wsse:Username>XXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </SOAP-ENV:Header>
   <SOAP-ENV:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <ns1:Objects xsi:type="ns1:Portfolio" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
            <ns1:ModifiedDate xsi:nil="true"/>
            <ns1:ObjectID xsi:nil="true"/>
            <ns1:CustomerKey/>
            <ns1:Source>
               <ns1:ModifiedDate xsi:nil="true"/>
               <ns1:ObjectID xsi:nil="true"/>
               <ns1:URN>File://ETFTP/Import/MAC/Images/f5af8670-b92e-4720-870d-72b2089709c0/sales_logo_win10.gif</ns1:URN>
            </ns1:Source>
            <ns1:FileName>sales_logo_win10.gif</ns1:FileName>
         </ns1:Objects>
      </CreateRequest>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

## Related Items

-   [REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
-   [Portfolio Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/portfolio.htm)

## Code Examples

```
<?php 
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl ';
try    {
    $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
    $client->username = $username;
    $client->password = $password;
    $port = new Marketing Cloud_Portfolio();
    $port->DisplayName = 'API Uploaded Test v10';
    $port->CustomerKey = 'API Uploaded Test v10';
    $rs = new Marketing Cloud_ResourceSpecification();    
    $rs->URN = 'http://email.exacttarget.com/images/RequestADemo_button.jpg';
    $port->Source = $rs;
    $port->FileName = 'APIUploadedTestv10.jpg';
    $object = new SoapVar($port, SOAP_ENC_OBJECT, 'Portfolio', "http://exacttarget.com/wsdl/partnerAPI ");
    $request = new Marketing Cloud_CreateRequest();
    $request->Options = NULL;
    $request->Objects = array($object);
    $results = $client->Create($request);
    print_r($results);
} catch (SoapFault $e) {
    print_r($e);
}
?>
```

## Related Topics

- Portfolio Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/portfolio.htm)
