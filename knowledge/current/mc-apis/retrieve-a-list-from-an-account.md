---
title: "Retrieve a List from an Account"
domain: mc-apis
topic: retrieve-a-list-from-an-account
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:18.773Z
estimatedTokens: 1998
keywords: [Retrieve, Account, view, contained, Why, How, Sample, NET, Code, Filtering, ListID, ListName, PHP, Java, Axis, 2.0, SOAP, Envelope, Items]
---

> You can retrieve a list from your account to view the information contained within that list.

# Retrieve a List from an Account

## Why Retrieve a List from an Account

You can retrieve a list from your account to view the information contained within that list.

## How to Retrieve a List from an Account

Use the sample code below as a model to create your own API call.

### Sample .NET Code (Filtering by ListID)

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
public partial class ListRetrieve : System.Web.UI.Page
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
            rr.ObjectType = "List";//required
            // Setting up a simple filter
            SimpleFilterPart sf = new SimpleFilterPart();
            sf.SimpleOperator = SimpleOperators.equals;
            sf.Property = "ID";
            sf.Value = new String[] { "1007549" };
            //Add Filter
            rr.Filter = sf;
            rr.Properties = new string[] { "ID", "CreatedDate", "ModifiedDate", "Client.ID", "ListName", "Description", "Category", "Type", "ListClassification" };//required
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

### Sample .NET Code (Filtering by ListName)

```apex
private int getListID(string listName, string userName, string userPass)
        {
            SoapClient framework = new SoapClient();
            framework.ClientCredentials.UserName.UserName = userName;
            framework.ClientCredentials.UserName.Password = userPass;
            APIObject[] result;
            string requestID;
            string status;
            RetrieveRequest rr = new RetrieveRequest();
            rr.ObjectType = "List";
            SimpleFilterPart sf = new SimpleFilterPart();
            sf.SimpleOperator = SimpleOperators.equals;
            sf.Property = "ListName";
            sf.Value = new String[] { listName };
            rr.Filter = sf;
            rr.Properties = new string[] { "ID", "ListName" };
            status = framework.Retrieve(rr, out requestID, out result);
            List l = (List)result[0];
            return l.ID;
        }
```

### Sample PHP Code (Filtering by ListID)

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'XXXX';
        $client->password = 'XXXX';
        $rr = new Marketing Cloud_RetrieveRequest();
        $rr->ObjectType = "List";
        $rr->Properties =  array();
        $rr->Properties[] = "ID";
        $rr->Properties[] = "List.ListName";
        $rr->Options = NULL;
        $rrm = new Marketing Cloud_RetrieveRequestMsg();
        $rrm->RetrieveRequest = $rr;
        $results = $client->Retrieve($rrm);
            var_dump($results);
} catch (SoapFault $e) {
        var_dump($e);
}
?>
```

### Sample PHP Code (Filtering by ListName)

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'xxx';
        $client->password = 'xxx';
        $rr = new Marketing Cloud_RetrieveRequest();
        $rr->ObjectType = "List";
        $rr->Properties =  array();
        $rr->Properties[] = "ID";
            $rr->Properties[] = "ListName";
        $rr->Properties[] = "Description";
            $rr->Options = null;
        $rr->QueryAllAccounts = true;

            $sfp = new Marketing Cloud_SimpleFilterPart();
            $sfp->Property = "ListName";
            $sfp->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
            $sfp->Value = "All Subscribers";

        $rr->Filter = new SoapVar($sfp, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");

        $rrm = new Marketing Cloud_RetrieveRequestMsg();
        $rrm->RetrieveRequest = $rr;
        $results = $client->Retrieve($rrm);

var_dump($results);
} catch (Exception  $e) {
        var_dump($e);

}
?>
```

### Sample Java Code (Axis 2.0)

```apex
private static void RetrieveList(PartnerAPIStub stub) {
    try {
    RetrieveRequestMsgDocument retrieveRequestMsgDocument = RetrieveRequestMsgDocument.Factory.newInstance();
    RetrieveRequest rreq = com.exacttarget.wsdl.partnerapi.RetrieveRequest.Factory.newInstance();
    // Set the Type of object you are retrieving
    rreq.setObjectType("List");
    String[] fields = { "ID", "ListName"};
    rreq.setPropertiesArray(fields);
    SimpleFilterPart nameFilter = SimpleFilterPart.Factory.newInstance();
    nameFilter.setProperty("ListName");
    nameFilter.setSimpleOperator(SimpleOperators.EQUALS);
    nameFilter.setValueArray(new String[] { "Public 2" });
    //Setting a filter is optional, comment out the line below to not specify a filter
    rreq.setFilter(nameFilter);
    RetrieveRequestMsgDocument.RetrieveRequestMsg retrieveRequestMsg = retrieveRequestMsgDocument.addNewRetrieveRequestMsg();
    retrieveRequestMsg.setRetrieveRequest(rreq);
    RetrieveResponseMsgDocument retrieveResponseMsgDocument = stub.Retrieve(retrieveRequestMsgDocument);    RetrieveResponseMsgDocument.RetrieveResponseMsg retrieveResponseMsg = retrieveResponseMsgDocument
    .getRetrieveResponseMsg();
    APIObject[] results = retrieveResponseMsg.getResultsArray();
    System.out.println(retrieveResponseMsg.getOverallStatus());
    if (retrieveResponseMsg.getOverallStatus().equals("OK") || retrieveResponseMsg.getOverallStatus().equals("MoreDataAvailable")){
    for (APIObject apiObj : results) {
    if (apiObj instanceof List) {
    System.out.println("List");
    System.out.println("ListID:" + ((List) apiObj).getID() + "");
    System.out.println("ListName: " + ((List) apiObj).getListName());
    }
    }
    }
    } catch (RemoteException e) {
    e.printStackTrace();
    } catch (Exception e) {
    e.printStackTrace();
    }
    }
```

### SOAP Envelope (Filtering by ListName)

```
<soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>List</ObjectType>
            <Properties>ListName</Properties>
            <Properties>ID</Properties>
            <Filter xsi:type="SimpleFilterPart">
               <Property>ListName</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>All Subscribers</Value>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
</soapenv:Body>
```

## Related Items

[Subscriber Lists](https://help.salesforce.com/articleView?id=mc_es_lists_classic_subscriber.htm&type=5)

## Code Examples

```
<?php 
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'XXXX';
        $client->password = 'XXXX';
        $rr = new Marketing Cloud_RetrieveRequest();
        $rr->ObjectType = "List";   
        $rr->Properties =  array();
        $rr->Properties[] = "ID";
        $rr->Properties[] = "List.ListName";        
        $rr->Options = NULL;
        $rrm = new Marketing Cloud_RetrieveRequestMsg();
        $rrm->RetrieveRequest = $rr;        
        $results = $client->Retrieve($rrm);  
            var_dump($results);
} catch (SoapFault $e) {
        var_dump($e);
}
?>
```

```
<?php 
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'xxx';
        $client->password = 'xxx';      
        $rr = new Marketing Cloud_RetrieveRequest();
        $rr->ObjectType = "List";   
        $rr->Properties =  array();
        $rr->Properties[] = "ID";
            $rr->Properties[] = "ListName"; 
        $rr->Properties[] = "Description";
            $rr->Options = null;
        $rr->QueryAllAccounts = true;

            $sfp = new Marketing Cloud_SimpleFilterPart();
            $sfp->Property = "ListName";
            $sfp->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
            $sfp->Value = "All Subscribers";

        $rr->Filter = new SoapVar($sfp, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");

        $rrm = new Marketing Cloud_RetrieveRequestMsg();
        $rrm->RetrieveRequest = $rr;        
        $results = $client->Retrieve($rrm);  

var_dump($results);
} catch (Exception  $e) {
        var_dump($e);

}
?>
```
