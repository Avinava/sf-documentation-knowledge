---
title: "Retrieve a Subscriber"
domain: mc-apis
topic: retrieve-a-subscriber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:18.720Z
estimatedTokens: 463
keywords: [Diagram, Retrieve, Subscriber, scenario, how, account, primary, key, whether, email, address, Referenced, Code, Sample, Links, Case, Center, Items, retrieving, via, SOAP, API, Why, How, NET, PHP, Subscribers, Java, Axis, 1.4, Envelope]
---

> This page contains information  about retrieving a subscriber via the SOAP API.

# Retrieve a Subscriber

This page contains information about retrieving a subscriber via the SOAP API.

## Why Retrieve a Subscriber

By retrieving a subscriber, you can view the applicable information for that subscriber. You can include this information in a profile center or in your own application as part of a screen that displays subscriber information.

## How To Retrieve a Subscriber

Use the sample code below as a model to create your own API calls.

### Sample .NET Code

```apex
using System;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using etAPI;
public partial class RetrieveSubscriber : System.Web.UI.Page
{
    //Global Variables
    private SoapClient client = new SoapClient();
    protected void Page_Load(object sender, EventArgs e)
    {
        //Authenticate
        client.ClientCredentials.UserName.UserName = System.Configuration.ConfigurationSettings.AppSettings["wsUserName"];
        client.ClientCredentials.UserName.Password = System.Configuration.ConfigurationSettings.AppSettings["wsPassword"];
        if (!IsPostBack)
        {
        }
    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        try
        {
            //Retrieve Subscriber
            //Local variables
            APIObject[] Results;
            String requestID;
            String status;
            // Instantiate the retrieve request
            RetrieveRequest rr = new RetrieveRequest();
            rr.ObjectType = "Subscriber";//required
            // Setting up a simple filter
            SimpleFilterPart sf = new SimpleFilterPart();
            sf.SimpleOperator = SimpleOperators.equals;
            sf.Property = "SubscriberKey";
            sf.Value = new String[] { "0613d278-888e-4825-b796-74a21a071391" };
            //Add Filter
            rr.Filter = sf;
            rr.Properties = new string[] { "ID", "CreatedDate", "Client.ID", "EmailAddress", "SubscriberKey", "UnsubscribedDate", "Status", "EmailTypePreference" };//required //Adding "ID" triggers all of the Subscriber Attributes to be returned
            status = client.Retrieve(rr, out requestID, out Results);
            lblMessage.Text += "<br/>Total Records: " + Results.Length;
        }
        catch (Exception ex)
        {
            lblMessage.Text += ex.Message;
            lblMessage.Text += "<br/>";
        }
    }
}
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
    /* Create the Soap Client */
    $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
    /* Set username and password here */
    $client->username = 'XXX';
    $client->password = 'XXX';
    $rr = new Marketing Cloud_RetrieveRequest();
    $rr->ObjectType = "Subscriber";
    $rr->Properties =  array();
    $rr->Properties[] = "ID";
    $rr->Properties[] = "SubscriberKey";
    $rr->Properties[] = "EmailAddress";

    $sfp= new Marketing Cloud_SimpleFilterPart();
    $sfp->Value =  array("help@example.com");
    $sfp->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
    $sfp->Property="EmailAddress";
    $rr->Filter = new SoapVar($sfp, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
    $rr->Options = NULL;
    $rrm = new Marketing Cloud_RetrieveRequestMsg();
    $rrm->RetrieveRequest = $rr;

    $results = $client->Retrieve($rrm);
    var_dump($results);
} catch (Exception  $e) {
var_dump($e);
}
?>
```

### Sample PHP Code - Retrieving Subscribers with More Data Available

The code below signals more data is available if the number of subscribers exceeds 2500.

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
set_time_limit(360);
try {
    print_r('<br>');
    /* Create the Soap Client */
    $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
    /* Set username and password here */
    $client->username = 'XXX';
    $client->password = 'XXX';

    $rr = new Marketing Cloud_RetrieveRequest();
    $rr->ObjectType = "Subscriber";
    $rr->Properties = array("ID","EmailAddress", "SubscriberKey", "Status");
    $rr->Options = NULL;
    $rrm = new Marketing Cloud_RetrieveRequestMsg();
    $rrm->RetrieveRequest = $rr;
    $results = $client->Retrieve($rrm);
    print_r($results->OverallStatus.' : '.$results->RequestID.' : '.count($results->Results));
    print_r('<br>');
    while ($results->OverallStatus=="MoreDataAvailable") {
        $rr = new Marketing Cloud_RetrieveRequest();
        $rr->ContinueRequest = $results->RequestID;
        $rrm = new Marketing Cloud_RetrieveRequestMsg();
        $rrm->RetrieveRequest = $rr;
        $results = null;
        $results = $client->Retrieve($rrm);
        $tempRequestID = $results->RequestID;
        print_r($results->OverallStatus.' : '.$results->RequestID.' : '.count($results->Results));
        print_r('<br>');
    }
}
catch (Exception  $e) {
    var_dump($e);
}
?>
```

### Sample Java Code (Axis 1.4)

```apex
public void testRetrieveSubcriberByKey() throws RemoteException {
    Soap stub = init();
    RetrieveRequest request = new RetrieveRequest();
    request.setObjectType("Subscriber");
    String[] props = { "ID", "SubscriberKey };
    request.setProperties(props);
    request.setQueryAllAccounts(true); //scans all sub-Accounts of parent-Account
    //Query filter using Simplefilter.
    SimpleFilterPart filterPart = new SimpleFilterPart();
    filterPart.setProperty("SubscriberKey");
    String[] values = {"acruz@example.com"};
    filterPart.setValue(values);
    filterPart.setSimpleOperator(SimpleOperators.equals);
    request.setFilter(filterPart);
    RetrieveRequestMsg requestMsg = new RetrieveRequestMsg();
    requestMsg.setRetrieveRequest(request);
    RetrieveResponseMsg responseMsg = stub.retrieve(requestMsg);  //Soap call to request Account object
    assertNotNull(responseMsg);
    assertNotNull(responseMsg.getResults(0));
    Subscriber sub = (Subscriber) responseMsg.getResults(0);
    if(sub!=null && sub.getAttributes()!=null && sub.getAttributes().length >0){
        Attribute[] a = sub.getAttributes();
        for(int i=0; i< sub.getAttributes().length-1; i ++) {
        Attribute a1 = sub.getAttributes(i);
        System.out.println("Name :: " + a1.getName() + "  Value :: " + a1.getValue());
        }
    }
```

### Sample SOAP Envelope - Retrieve Subscribers

In this example, the request includes a filter to retrieve subscribers by the CreatedDate.

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-32259181" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>Subscriber</ObjectType>
            <Properties>CreatedDate</Properties>
            <Properties>Client.ID</Properties>
            <Properties>EmailAddress</Properties>
            <Properties>SubscriberKey</Properties>
            <Properties>Status</Properties>
            <Properties>UnsubscribedDate</Properties>
            <Properties>EmailTypePreference</Properties>
            <Filter xsi:type="SimpleFilterPart">
               <Property>CreatedDate</Property>
               <SimpleOperator>greaterThan</SimpleOperator>
               <DateValue>2012-01-04T10:19:00</DateValue>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

## Code Examples

```
<?php 
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
    /* Create the Soap Client */
    $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
    /* Set username and password here */
    $client->username = 'XXX';
    $client->password = 'XXX';
    $rr = new Marketing Cloud_RetrieveRequest();
    $rr->ObjectType = "Subscriber";  
    $rr->Properties =  array();
    $rr->Properties[] = "ID";       
    $rr->Properties[] = "SubscriberKey";
    $rr->Properties[] = "EmailAddress";

    $sfp= new Marketing Cloud_SimpleFilterPart();
    $sfp->Value =  array("help@example.com");
    $sfp->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
    $sfp->Property="EmailAddress";
    $rr->Filter = new SoapVar($sfp, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
    $rr->Options = NULL;
    $rrm = new Marketing Cloud_RetrieveRequestMsg();
    $rrm->RetrieveRequest = $rr; 

    $results = $client->Retrieve($rrm);  
    var_dump($results);
} catch (Exception  $e) {
var_dump($e);
}
?>
```

```
<?php 
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
set_time_limit(360);
try {
    print_r('<br>');
    /* Create the Soap Client */
    $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
    /* Set username and password here */
    $client->username = 'XXX';
    $client->password = 'XXX';

    $rr = new Marketing Cloud_RetrieveRequest();
    $rr->ObjectType = "Subscriber";   
    $rr->Properties = array("ID","EmailAddress", "SubscriberKey", "Status");
    $rr->Options = NULL;
    $rrm = new Marketing Cloud_RetrieveRequestMsg();
    $rrm->RetrieveRequest = $rr;        
    $results = $client->Retrieve($rrm);  
    print_r($results->OverallStatus.' : '.$results->RequestID.' : '.count($results->Results));
    print_r('<br>');                
    while ($results->OverallStatus=="MoreDataAvailable") {       
        $rr = new Marketing Cloud_RetrieveRequest();
        $rr->ContinueRequest = $results->RequestID;
        $rrm = new Marketing Cloud_RetrieveRequestMsg();
        $rrm->RetrieveRequest = $rr;
        $results = null;
        $results = $client->Retrieve($rrm);                      
        $tempRequestID = $results->RequestID;
        print_r($results->OverallStatus.' : '.$results->RequestID.' : '.count($results->Results));                    
        print_r('<br>');
    }
} 
catch (Exception  $e) {
    var_dump($e);
}
?>
```

## Related Topics

- Retrieve (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)
- Subscriber (atlas.en-us.noversion.mc-apis.meta/mc-apis/subscriber.htm)
- List (atlas.en-us.noversion.mc-apis.meta/mc-apis/list.htm)
- Retrieve a Subscriber (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve_a_subscriber_via_the_web_service_api.htm)
- Retrieve Subscribers by Subscriber Key (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_subscribers_by_subscriber_key.htm)
- Retrieve Subscribers By ListID (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_subscribers_using_listid.htm)
