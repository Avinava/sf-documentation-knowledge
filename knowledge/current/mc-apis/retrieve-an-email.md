---
title: "Retrieve an Email"
domain: mc-apis
topic: retrieve-an-email
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.620Z
estimatedTokens: 2130
keywords: [Retrieve, Email, retrieving, message, via, SOAP, API, Why, How, anEmail, Sample, NET, Code, Java, Axis]
---

# Retrieve an Email

> This page contains information  about retrieving an email message via the SOAP API.

# Retrieve an Email

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.

This page contains information about retrieving an email message via the SOAP API.

## Why Retrieve an Email

You can retrieve an email message for use in an email send or to update the information contained within the email.

## How to Retrieve anEmail

Use the sample code below as a model to construct your own API code.

### Sample .NET Code

```
//Retrieve Email named "Sample"
            //Local variables
            SoapClient client = new SoapClient();
            APIObject[] Results;
            String requestID;
            String status;
            // Instantiate the retrieve request
            RetrieveRequest rr = new RetrieveRequest();
            rr.ObjectType = "Email";//required
            // Setting up a simple filter
            SimpleFilterPart sf = new SimpleFilterPart();
            sf.SimpleOperator = SimpleOperators.equals;
            sf.Property = "Name";
            sf.Value = new String[] { "Sample" };
            //Add Filter
            rr.Filter = sf;
            rr.Properties = new string[] { "ID", "Name" };//required
            status = client.Retrieve(rr, out requestID, out Results);
            Email email = (Email)Results[0];
```

### Sample Java Code (Axis 1.4)

```apex
public Email testGetEmailById() throws RemoteException {
    Soap stub = init();
    RetrieveRequest retrieveRequest = new RetrieveRequest();
    retrieveRequest.setObjectType("Email");
    String[] stringArray = {"ID", "Name"};
    retrieveRequest.setProperties(stringArray);
    SimpleFilterPart filter = new SimpleFilterPart();
    filter.setProperty("Name");
    filter.setSimpleOperator(SimpleOperators.equals);
    java.util.List filterValues = new ArrayList();
    filterValues.add(new String("Sample"));
    filter.setValue((String[]) filterValues.toArray(new String[filterValues.size()]));
    retrieveRequest.setFilter(filter);
    RetrieveRequestMsg retrieveRequestMsg = new RetrieveRequestMsg(retrieveRequest);
    RetrieveResponseMsg retrieveResponseMsg = stub.retrieve(retrieveRequestMsg);
    System.out.println("[overall status message] " + retrieveResponseMsg.getOverallStatus());
    Email email = (Email) retrieveResponseMsg.getResults(0);
    return email;
}
```

### Sample PHP Code

```
<?php
    echo '<pre>';
$path = $_SERVER[DOCUMENT_ROOT].'/00 Includes/';
require($path . 'exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
/* Create the Soap Client */
    $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
    /* Set username and password here */
    $client->username = 'XXXXX';
    $client->password = 'XXXXX';
    $rr = new Marketing Cloud_RetrieveRequest();
    $rr->ObjectType = 'Email';
    //Set the properties to return
    $props = array('ID', 'Name');
    $rr->Properties = $props;
    //Setup account filtering, to look for a given account MID
    $filterPart = new Marketing Cloud_SimpleFilterPart();
    $filterPart->Property = 'Name';
    $values = array('Welcome Email');
    $filterPart->Value = $values;
    $filterPart->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
    //Encode the SOAP package
    $filterPart = new SoapVar($filterPart, SOAP_ENC_OBJECT,'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
    //Set the filter to NULL to return all MIDs, otherwise set to filter object
    //$rr->Filter = NULL;
    $rr->Filter = $filterPart;
    //Setup and execute request
    $rrm = new Marketing Cloud_RetrieveRequestMsg();
    $rrm->RetrieveRequest = $rr;
    $results = $client->Retrieve($rrm);
    print_r($results);
} catch (SoapFault $e) {
    /* output the resulting SoapFault upon an error */
    var_dump($e);
}
    echo '</pre>';
?>
```

### Sample Python Code

```
import logging
from suds.client import Client
from suds.wsse import *
errors = 0
import logging as log

### we setup the service logging
LOG_FILENAME = '/Users/username/Documents/Logs/request-log.txt'
### we setup a debugging logging
log.basicConfig(filename=LOG_FILENAME,level=log.debug)
#https://fedorahosted.org/suds/wiki/Documentation (Suds documentation and ws-security details)
def PrintAsHTML(url):
    try:
        client = Client(url)
        email = client.factory.create('Email')
        print client
        prop = ['ID','Name']
        rr = client.factory.create('RetrieveRequest')
        rr.Properties=prop
        rr.ObjectType='Email'
        sec = Security()
        token= UsernameToken('username','password')
        sec.tokens.append(token)
        client.set_options(wsse=sec)
        resp = client.service.Retrieve(rr)

        out_str ='Response ::: '
        print resp.OverallStatus

        print out_str
        #Prints Client.last_received---> SOAP response
        print client.last_received()
        sent= client.last_sent()
        print 'Soap Request ::: '
        log.debug('Done')
        print sent
    except Exception, e:
        print e
try:
    PrintAsHTML('https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl')
except Exception, e:
    print e
```

### Sample SOAP Request

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <Header>
        <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
    </Header>
    <Body>
        <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <RetrieveRequest>
                <ObjectType>Email</ObjectType>
                <Properties>ID</Properties>
                <Properties>Name</Properties>
                <Properties>Subject</Properties>
                <Properties>Status</Properties>
                <Properties>PartnerKey</Properties>
                <Properties>CreatedDate</Properties>
                <Properties>Folder</Properties>
                <Properties>CategoryID</Properties>
                <Properties>EmailType</Properties>
                <Filter xsi:type="SimpleFilterPart">
                    <Property>ID</Property>
                    <SimpleOperator>equals</SimpleOperator>
                    <Value>3096663</Value>
                </Filter>
            </RetrieveRequest>
        </RetrieveRequestMsg>
    </Body>
</Envelope>
```

### Sample SOAP Response

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <soap:Header>
        <wsa:Action>RetrieveResponse</wsa:Action>
        <wsa:MessageID>urn:uuid:e6973425-e466-4c0c-909f-fb7ecff76cb5</wsa:MessageID>
        <wsa:RelatesTo>urn:uuid:079cf30b-4337-47d0-bca3-52d45ddb15bd</wsa:RelatesTo>
        <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
        <wsse:Security>
            <wsu:Timestamp wsu:Id="Timestamp-6bd4770a-d7ab-4358-8831-94191d8469e6">
                <wsu:Created>2017-02-21T13:47:25Z</wsu:Created>
                <wsu:Expires>2017-02-21T13:52:25Z</wsu:Expires>
            </wsu:Timestamp>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <RetrieveResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <OverallStatus>OK</OverallStatus>
            <RequestID>94531ae9-7448-4e2b-aff0-a37c881a56f7</RequestID>
            <Results xsi:type="Email">
                <PartnerKey/>
                <CreatedDate>2009-07-01T08:45:34.71</CreatedDate>
                <ID>3096663</ID>
                <ObjectID xsi:nil="true"/>
                <Name>Example Test</Name>
                <Folder>my emails</Folder>
                <CategoryID>578613</CategoryID>
                <Subject>Example Subject</Subject>
                <Status>New</Status>
                <EmailType>Normal</EmailType>
            </Results>
        </RetrieveResponseMsg>
    </soap:Body>
</soap:Envelope>
```

## Related Items

[REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
