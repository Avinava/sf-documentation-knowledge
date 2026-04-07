---
title: "Retrieve an Item from Your Portfolio"
domain: mc-apis
topic: retrieve-an-item-from-your-portfolio
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:23.630Z
estimatedTokens: 1939
keywords: [Retrieve, Item, Portfolio, regarding, retrieving, account's, Why, How, Sample, NET, Code, Java, Axis, 1.4, PHP]
---

# Retrieve an Item from Your Portfolio

> This page contains information  regarding retrieving an object from your account's Portfolio.

# Retrieve an Item from Your Portfolio

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.

This page contains information regarding retrieving an object from your account's Portfolio.

## Why Retrieve an Item from Your Portfolio

You can use the Retrieve method to find out more information about and use those items in email sends and other activities.

## How to Retrieve an Item from Your Portfolio

Use the sample code below as a model for your own API call.

### Sample .NET Code

```apex
private void RetrievePortfolio()
{
    SoapClient framework = new SoapClient();
    framework.ClientCredentials.UserName.UserName = "xxx";
    framework.ClientCredentials.UserName.Password = "xxx";
    String requestID;
    String status;
    SimpleFilterPart sfp = new SimpleFilterPart();
    sfp.Property = "CustomerKey";
    sfp.SimpleOperator = SimpleOperators.equals;
    sfp.Value = new string[] { "Parka Guy" };
    RetrieveRequest rr = new RetrieveRequest();
    rr.ObjectType = "Portfolio";
    rr.Properties = new string[] { "FileURL", "CustomerKey", "FileName", "IsUploaded" };
    rr.Filter = sfp;
    APIObject[] results;
    status = framework.Retrieve(rr, out requestID, out results);
    Console.WriteLine(status);
    if (status.ToUpper() == "OK")
    {
foreach (Portfolio p in results)
{
    Console.WriteLine("FileName: " + p.FileName);
    Console.WriteLine("IsUploaded: " + p.IsUploaded);
    Console.WriteLine("FileURL: " + p.FileURL);
}
    }
}
```

### Sample Java Code (Axis 1.4)

```apex
public void testFileDetails() {
        try {
            Soap stub = init();
            RetrieveRequest retrieveRequest = new RetrieveRequest();
            retrieveRequest.setObjectType("Portfolio");
            String[] stringArray = { "FileName", "IsUploaded", "FileURL"};
            retrieveRequest.setProperties(stringArray);
            RetrieveRequestMsg retrieveRequestMsg = new RetrieveRequestMsg();
            retrieveRequestMsg.setRetrieveRequest(retrieveRequest);
            retrieveRequest.setQueryAllAccounts(true);
            SimpleFilterPart filter = new SimpleFilterPart();
            filter.setProperty("FileName");
            filter.setSimpleOperator(SimpleOperators.equals);
            java.util.List filterValues = new ArrayList();
            filterValues.add(new String("Test1.jpg"));
            filter.setValue((String[]) filterValues.toArray(new String[filterValues.size()]));
            retrieveRequest.setFilter(filter);
            RetrieveResponseMsg retrieveResponseMsg = stub.retrieve(retrieveRequestMsg);
            System.out.println("[overall status message] " + retrieveResponseMsg.getOverallStatus());
            APIObject[] apiObjectList = retrieveResponseMsg.getResults();
            List<APIObject> list1 =Arrays.asList(apiObjectList);
            Iterator it = list1.iterator();
            while (it.hasNext()) {
                Portfolio o = (Portfolio) it.next();
                System.out.println("FileLocation ::: " + o.getFileName());
            }
        } catch (RemoteException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
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
    $rr->ObjectType = 'Portfolio';
    //Set the properties to return
    $props = array('FileURL', 'CustomerKey', 'FileName', 'IsUploaded');
    $rr->Properties = $props;
    //Setup account filtering, to look for a given account MID
    $filterPart = new Marketing Cloud_SimpleFilterPart();
    $filterPart->Property = 'CustomerKey';
    $values = array('Image123');
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

### Sample SOAP Envelope

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-24440876" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>Portfolio</ObjectType>
            <Properties>RowObjectID</Properties>
            <Properties>ObjectID</Properties>
            <Properties>PartnerKey</Properties>
            <Properties>CustomerKey</Properties>
            <Properties>Client.ID</Properties>
            <Properties>CategoryID</Properties>
            <Properties>FileName</Properties>
            <Properties>DisplayName</Properties>
            <Properties>Description</Properties>
            <Properties>TypeDescription</Properties>
            <Properties>IsUploaded</Properties>
            <Properties>IsActive</Properties>
            <Properties>FileSizeKB</Properties>
            <Properties>ThumbSizeKB</Properties>
            <Properties>FileWidthPX</Properties>
            <Properties>FileHeightPX</Properties>
            <Properties>FileURL</Properties>
            <Properties>ThumbURL</Properties>
            <Properties>CacheClearTime</Properties>
            <Properties>CategoryType</Properties>
            <Properties>CreatedDate</Properties>
            <Properties>CreatedBy</Properties>
            <Properties>ModifiedBy</Properties>
            <Properties>ModifiedDate</Properties>
            <Properties>ModifiedByName</Properties>
            <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
               <Property>CustomerKey</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>header_image_01</Value>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

## Related Items

-   [REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
-   [Retrieve Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)

## Related Topics

- Retrieve Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)
