---
title: "Retrieve Data from a Data Extension"
domain: mc-apis
topic: retrieve-data-from-a-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:23.646Z
estimatedTokens: 3135
keywords: [Retrieve, Data, Extension, Sample, NET, Code, Retrieving, Subscriber, Java, Axis, 1.4, PHP, SOAP, Envelope, Items]
---

# Retrieve Data from a Data Extension

# Retrieve Data from a Data Extension

Use the SOAP API to retrieve information from a data extension in order to better target email sends or construct new groups of subscribers. You can retrieve up to 2500 records per request.

For calls that occur less often than once per hour, you can achieve better performance and efficiency using a data extract activity to deliver the data to your Enhanced FTP location. You can also implement this method if you notice drastically degraded performance as the number of rows in your call increases.

Use the sample code as an example to construct your own API calls. The sample code below retrieves data from a data extension named **Airlines**. In this example, the code pulls data from all columns in the data extension and filters the rows where **IATA-Code** is greater than or equal to 7. The code also continues to retrieve batches of data until all data has been retrieved.

> The DataExtensionObject does not support LIKE operators in filters for the retrieve method.

### Sample .NET Code

```apex
public static void RetrieveDataExtensionObjectAirlines()
{
    etpf.PartnerAPIWse proxy = DefaultProxy;
    etpf.APIObject[] Results = null;
    etpf.RetrieveRequest request = new etpf.RetrieveRequest();
    etpf.SimpleFilterPart sfp = null;
    string status = null;
    string requestID = null;

    request.ObjectType = "DataExtensionObject[Airlines]";
    request.Properties = new string[] { "IATA-Code", "ICAO-Code",
        "Prefix-Code", "Airline", "Country", "Callsign", "Website" };
    sfp = new etpf.SimpleFilterPart();
    sfp.Property = "IATA-Code";
    sfp.SimpleOperator = etpf.SimpleOperators.greaterThanOrEqual;
    sfp.Value = new string[] { "7" };
    request.Filter = sfp;

    do
    {
        status = proxy.Retrieve(request, out requestID, out Results);

        for (int i = 0; i < Results.Length; i++)
        {
            etpf.DataExtensionObject deo = Results[i] as etpf.DataExtensionObject;
            for (int j = 0; j < deo.Properties.Length; j++)
            {
                Console.Write(
                string.Format("{0}-{1}     ", deo.Properties[j].Name, deo.Properties[j].Value));
            }

            Console.WriteLine();
        }

        request = new etpf.RetrieveRequest();
        request.ContinueRequest = requestID;
        request.ObjectType = "DataExtensionObject[Airlines]";
        request.Properties = new string[] { "IATA-Code", "ICAO-Code",
            "Prefix-Code", "Airline", "Country", "Callsign", "Website" };

    } while (status.Equals("MoreDataAvailable"));
}
```

If you want to use the customer key (in this example, **AirlinesKey**) to identify the data extension instead of the data extension's name (in this example, **Airlines**), change the two lines from:

```
request.ObjectType = "DataExtensionObject[Airlines]";
```

to

```
request.ObjectType = "DataExtensionObject[AirlinesKey]";
```

### Sample .NET Code - Retrieving a Subscriber from a Data Extension

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
public partial class DataExtensionObjectRetrieve : System.Web.UI.Page
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
            rr.ObjectType = "DataExtensionObject[810f461c-231a-440a-8543-837460be6c7a]";//required
            // Setting up a simple filter
            SimpleFilterPart sf = new SimpleFilterPart();
            sf.SimpleOperator = SimpleOperators.equals;
            sf.Property = "subscriber_key";
            sf.Value = new String[] { "5261922b-9c45-4fe9-85f8-32b8142bc907" };
            //Add Filter
            rr.Filter = sf;
            rr.Properties = new string[] { "subscriber_key" };//required //Any Column on the Data Extension
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

### Sample Java Code (Axis 1.4)

```apex
public void testGetDataFromDE() throws RemoteException {
        Soap stub = init();
        RetrieveRequest retrieveRequest = new RetrieveRequest();
        //fields of Data Extension
        String[] properties = new String[]{"EmailAddress", "SubscriberKey", "CampaignId"};
        //Data Extension CustomerKey
        retrieveRequest.setObjectType("DataExtensionObject[Campaign_DE_Key]");
        retrieveRequest.setProperties(properties);
        RetrieveRequestMsg requestMsg = new RetrieveRequestMsg();
        requestMsg.setRetrieveRequest(retrieveRequest);
        RetrieveResponseMsg responseMsg = stub.retrieve(requestMsg);
        System.out.println("Resposne :::  " + responseMsg.getOverallStatus());
        if (responseMsg.getResults() != null && responseMsg.getResults().length > 0) {
            DataExtensionObject dataExtensionTemplate = (DataExtensionObject) responseMsg.getResults(0);
        }
    }
    public void testRetrieveDataExtensionData() throws RemoteException {
        RetrieveRequest request = new RetrieveRequest();
        SimpleFilterPart sfp = null;

        request.setObjectType("DataExtensionObject[VetStreet Test]");
        request.setProperties(new String[]{"Number", "Shots"});
        sfp = new SimpleFilterPart();
        sfp.setProperty("Number");
        sfp.setSimpleOperator(SimpleOperators.equals);
        sfp.setValue(new String[]{"123"});
        request.setFilter(sfp);
        APIObject[] Results = null;
        Soap portType = init();
        RetrieveRequestMsg requestMsg = new RetrieveRequestMsg();
        requestMsg.setRetrieveRequest(request);
        RetrieveResponseMsg responseMsg = portType.retrieve(requestMsg);
        System.out.println("Resposne :::  " + responseMsg.getOverallStatus());
        if (responseMsg.getResults() != null && responseMsg.getResults().length > 0) {
            DataExtensionObject extensionObject = (DataExtensionObject) responseMsg.getResults(0);
            APIProperty[] apiProperty = extensionObject.getProperties();
            System.out.println(apiProperty[0].getValue());
        }
    }
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try          {
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = '*****';
        $client->password = '*****';

        $rr = new Marketing Cloud_RetrieveRequest();
        $rr->ObjectType = "DataExtensionObject[Example DE]";   // Example DE is the name of the data extension
        $rr->Properties =  array();
        $rr->Properties[] = "EMAIL_ADDRESS";
        $rr->Properties[] = "CUSTOMER_ID";
        $rr->Properties[] = "FIRST_NAME";
        $rr->Properties[] = "SITE_GROUP";

                                // Setup a simple filter based on the key column you want to match on
        $sfp= new Marketing Cloud_SimpleFilterPart();
        $sfp->Value =  array("acruz@example.com");
        $sfp->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
        $sfp->Property="EMAIL_ADDRESS";

        $rr->Filter = new SoapVar($sfp, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
        $rr->Options = NULL;
        $rrm = new Marketing Cloud_RetrieveRequestMsg();
        $rrm->RetrieveRequest = $rr;
        $results = $client->Retrieve($rrm);
                                var_dump($results);

                                foreach ($results->Results->Properties->Property as $CurrentProp){
                                echo '<br>';
                                echo '<br>';
                                                                print('Name: '.$CurrentProp->Name.'<br>');
                                                                print('Value: '.$CurrentProp->Value.'<br>');
                                }
} catch (Exception  $e) {
                var_dump($e);
}
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
 <ObjectType>DataExtensionObject[Example DE]</ObjectType>
 <Properties>EMAIL_ADDRESS</Properties>
 <Properties>CUSTOMER_ID</Properties>
 <Properties>FIRST_NAME</Properties>
 <Properties>SITE_GROUP</Properties>
 <Filter xsi:type="SimpleFilterPart">
 <Property>EMAIL_ADDRESS</Property>
 <SimpleOperator>equals</SimpleOperator>
 <Value>acruz@example.com</Value>
 </Filter>
 </RetrieveRequest>
 </RetrieveRequestMsg>
 </soapenv:Body>
</soapenv:Envelope>
```

### Example SOAP Response Envelope

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
 <soap:Header>
   <wsa:Action>RetrieveResponse</wsa:Action>
   <wsa:MessageID>urn:uuid:fbc1f23d-1a67-48f4-8e9d-3ad472d41635</wsa:MessageID>
   <wsa:RelatesTo>urn:uuid:727f331a-60cb-468b-9c33-65a1a6a9cb9d</wsa:RelatesTo>
   <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
   <wsse:Security>
    <wsu:Timestamp wsu:Id="Timestamp-5619f5a0-d41d-45b9-8d1e-813c4e68e438">
      <wsu:Created>2014-03-21T16:21:15Z</wsu:Created>
      <wsu:Expires>2014-03-21T16:26:15Z</wsu:Expires>
    </wsu:Timestamp>
   </wsse:Security>
 </soap:Header>
 <soap:Body>
   <RetrieveResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
    <OverallStatus>OK</OverallStatus>
    <RequestID>a484cd16-5cf8-4eb7-b4a1-ea2fba75f6fc</RequestID>
    <Results xsi:type="DataExtensionObject">
      <PartnerKey xsi:nil="true"/>
      <ObjectID xsi:nil="true"/>
      <Type>DataExtensionObject</Type>
      <Properties>
       <Property>
         <Name>EMAIL_ADDRESS</Name>
         <Value>acruz@example.com</Value>
       </Property>
       <Property>
         <Name>CUSTOMER_ID</Name>
         <Value>11111</Value>
       </Property>
       <Property>
         <Name>FIRST_NAME</Name>
         <Value>A</Value>
       </Property>
       <Property>
         <Name>SITE_GROUP</Name>
         <Value>22222</Value>
       </Property>
      </Properties>
    </Results>
   </RetrieveResponseMsg>
 </soap:Body>
</soap:Envelope>
```

## Related Items

-   [Create a Data Extract Activity](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_data_extract_activity_with_the_soap_web_service_api.htm)
-   [Data Extension](https://help.salesforce.com/articleView?id=mc_overview_glossary.htm&type=5)

## Related Topics

- Create a Data Extract Activity (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_data_extract_activity_with_the_soap_web_service_api.htm)
