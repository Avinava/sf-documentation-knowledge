---
title: "Retrieve Subscribers Using ListID"
domain: mc-apis
topic: retrieve-subscribers-using-listid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:18.874Z
estimatedTokens: 2095
keywords: [Retrieve, Subscribers, ListID, SOAP, API, subscriber, Why, How, Sample, NET, Code, PHP, Java, Axis, 1.4, Envelope, Items]
---

> This page contains information  about using the SOAP API to retrieve subscriber information based on the ListID object.

# Retrieve Subscribers Using ListID

This page contains information about using the SOAP API to retrieve subscriber information based on the ListID object.

## Why Retrieve Subscribers using ListID

Using the Retrieve method to get subscriber information allows you to review information on those subscribers subscribed to a specific list. You can also use this information to further segment or target specific users with more meaningful information or offers.

## How to Retrieve Subscribers using ListID

Use the sample code below as a model to construct your own API calls.

### Sample .NET Code

```
try
        {
            //Retrieve Subscriber
            //Local variables
            APIObject[] Results;
            String requestID;
            String status;
            ListSubscriber listSub = new ListSubscriber();
            int totalResults = 0;
            // Instantiate the retrieve request
            RetrieveRequest rr = new RetrieveRequest();
            rr.ObjectType = "ListSubscriber";
            // Setting up a simple listid filter
            SimpleFilterPart sf = new SimpleFilterPart();
            sf.SimpleOperator = SimpleOperators.equals;
            sf.Property = "ListID";
            sf.Value = new String[] { "1753489" };
            //Add Filter and properties
            rr.Filter = sf;
            rr.Properties = new string[] { "SubscriberKey", "Status" };

            do
            {
                //Retrieve Results
                status = client.Retrieve(rr, out requestID, out Results);

                //Display Results
                for (int i = 0; i < Results.Length; i++)
                {
                    listSub = (ListSubscriber)Results[i];
                    totalResults += 1;
                    lblMessage.Text += "<br/>Subscriber Key: " + listSub.SubscriberKey + ", Status: " + listSub.Status;
                }
            }
            while (status.Equals("MoreDataAvailable"));//This means there are more than 2500 records
        }
        catch (Exception ex)
        {
            lblMessage.Text += ex.Message;
            lblMessage.Text += "<br/>";
        }
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try     {
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'xxx';
        $client->password = 'xxx';
        $rr = new Marketing Cloud_RetrieveRequest();
        $rr->ObjectType = "SubscriberList";
        $rr->Properties =  array();
        $rr->Properties[] = "ID";
        $rr->Properties[] = "List.ListName";
            $rr->Properties[] = "List.ID";
        $rr->Properties[] = "Status";
        $rr->Properties[] = "Subscriber.EmailAddress";
        $sfp= new Marketing Cloud_SimpleFilterPart();
        $sfp->Value =  array("123123123"); // This is the ListID that you want to get the subscribers for
        $sfp->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
        $sfp->Property="List.ID";
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

### Sample Java Code (Axis 1.4)

```apex
/**
     * Return List of subscribers from given List ID
     */
    public void testGetSubscribersForList() {
        try {
            Soap stub = init();
            String OBJECT_LIST_SUBSCRIBERS = "ListSubscriber";
            java.util.List list = new ArrayList();
            list.add("SubscriberKey");
            list.add("ListID");
            list.add("Status");
            String listID = "12345";
            RetrieveRequest retrieveRequest = new RetrieveRequest();

            retrieveRequest.setObjectType(OBJECT_LIST_SUBSCRIBERS);
            String[] stringArray = (String[]) list.toArray(new String[list.size()]);
            retrieveRequest.setProperties(stringArray);
            SimpleFilterPart filter = new SimpleFilterPart();
            filter.setProperty("ListID");
            filter.setSimpleOperator(SimpleOperators.equals);
            java.util.List filterValues = new ArrayList();
            filterValues.add(listID);
            String[] filerValuesArray = (String[])filterValues.toArray(new String[filterValues.size()]);
            filter.setValue(filerValuesArray);
            retrieveRequest.setFilter(filter);
            RetrieveRequestMsg retrieveRequestMsg = new RetrieveRequestMsg();
            retrieveRequestMsg.setRetrieveRequest(retrieveRequest);
            RetrieveResponseMsg retrieveResponseMsg = stub.retrieve(retrieveRequestMsg);
            System.out.println("[overall status message] " + retrieveResponseMsg.getOverallStatus());
            APIObject[] apiObjectList = retrieveResponseMsg.getResults();
            for (APIObject dumpStepThrough : apiObjectList) {
                ListSubscriber listSubscriber = (ListSubscriber) dumpStepThrough;
                System.out.print("  [List ID ::: ] " + listSubscriber.getListID());
                System.out.print("  [Subscriber Key ::: ] " + listSubscriber.getSubscriberKey());
                System.out.println("  [Subscriber Status ::: ] " + listSubscriber.getStatus());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
```

## Sample SOAP Envelope

```
<soapenv:envelope xmlns:soapenv="&quot;http://schemas.xmlsoap.org/soap/envelope/&quot;" xmlns:xsd="&quot;http://www.w3.org/2001/XMLSchema&quot;" xmlns:xsi="&quot;http://www.w3.org/2001/XMLSchema-instance&quot;">
   <soapenv:header>
      <wsse:security soapenv:mustunderstand="&quot;1&quot;" xmlns:wsse="&quot;http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd&quot;">
         <wsse:usernametoken wsu:id="&quot;UsernameToken-24440876&quot;" xmlns:wsu="&quot;http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd&quot;">
            <wsse:username>XXXXX</wsse:username>
            <wsse:password type="&quot;http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText&quot;">XXXXX</wsse:password>
         </wsse:usernametoken>
      </wsse:security>
   </soapenv:header>
   <soapenv:body>
      <retrieverequestmsg xmlns="&quot;http://exacttarget.com/wsdl/partnerAPI&quot;">
         <retrieverequest>
            <objecttype>SubscriberList</objecttype>
            <properties>ID</properties>
            <properties>PartnerKey</properties>
            <properties>CreatedDate</properties>
            <properties>Client.ID</properties>
            <properties>Status</properties>
            <properties>List.ID</properties>
            <properties>List.ListName</properties>
            <properties>Subscriber.Status</properties>
            <properties>Subscriber.CreatedDate</properties>
            <properties>Subscriber.ID</properties>
            <properties>Subscriber.EmailAddress</properties>
            <properties>Subscriber.SubscriberKey</properties>
            <filter xsi:type="&quot;par:ComplexFilterPart&quot;" xmlns:par="&quot;http://exacttarget.com/wsdl/partnerAPI&quot;">
               <leftoperand xsi:type="&quot;par:SimpleFilterPart&quot;">
                  <property>List.ID</property>
                  <simpleoperator>equals</simpleoperator>
                  <value>1718921</value>
               </leftoperand>
               <logicaloperator>AND</logicaloperator>
               <rightoperand xsi:type="&quot;par:SimpleFilterPart&quot;">
                  <property>CreatedDate</property>
                  <simpleoperator>between</simpleoperator>
                  <datevalue>2013-03-01T08:42:00</datevalue>
                  <datevalue>2013-03-18T08:42:00</datevalue>
               </rightoperand>
            </filter>
            <queryallaccounts>false</queryallaccounts>
         </retrieverequest>
      </retrieverequestmsg>
   </soapenv:body>
</soapenv:envelope>
```

## Related Items

[Retrieve Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)

## Code Examples

```
<?php 
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try     {
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'xxx';
        $client->password = 'xxx';       
        $rr = new Marketing Cloud_RetrieveRequest();
        $rr->ObjectType = "SubscriberList";   
        $rr->Properties =  array();
        $rr->Properties[] = "ID";
        $rr->Properties[] = "List.ListName";     
            $rr->Properties[] = "List.ID";   
        $rr->Properties[] = "Status";
        $rr->Properties[] = "Subscriber.EmailAddress";
        $sfp= new Marketing Cloud_SimpleFilterPart();
        $sfp->Value =  array("123123123"); // This is the ListID that you want to get the subscribers for
        $sfp->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
        $sfp->Property="List.ID";
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

## Related Topics

- Retrieve Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)
