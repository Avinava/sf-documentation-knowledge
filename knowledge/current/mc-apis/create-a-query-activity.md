---
title: "Create a Query Activity"
domain: mc-apis
topic: create-a-query-activity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.170Z
estimatedTokens: 1203
keywords: [Query, Activity, Creating, retrieve, account, criteria, call, Why, How, Sample, NET, Code, PHP, SOAP, Envelope, Items]
---

> Creating a query activity allows you to retrieve tracking information from your account based on criteria specified in your call.

# Create a Query Activity

## Why Create a Query Activity

Creating a query activity allows you to retrieve tracking information from your account based on criteria specified in your call.

## How to Create a Query Activity

Use the sample code below as a model to create your own API call. You cannot retrieve the status or completion time of the query activity.

### Sample .NET Code

```apex
private void button12_Click(object sender, EventArgs e)
        {
            SoapClient framework = new SoapClient();
            framework.ClientCredentials.UserName.UserName = Properties.Settings.Default.UN_S1;
            framework.ClientCredentials.UserName.Password = Properties.Settings.Default.PW_S1;
            String requestID;
            String status;
            QueryDefinition qd = new QueryDefinition();
            qd.Name = "New Query333";
            qd.CustomerKey = "New Query Key32";
            qd.Description = "Some Description";
            qd.TargetUpdateType = "Overwrite";
            qd.TargetType = "DE";
            qd.QueryText = "Select EMAIL_ADDRESS as EMAIL from [Example DE]";
            InteractionBaseObject ibo = new InteractionBaseObject();
            ibo.CustomerKey = "FIRST SEND";
            ibo.Name = "First Send";
            qd.DataExtensionTarget = ibo;
            CreateResult[] uoResults = framework.Create(new CreateOptions(), new APIObject[] { qd }, out requestID, out status);
            Console.WriteLine("Status: " + status);
            Console.WriteLine("Request ID: " + requestID);
        }
```

### Sample PHP Code

```
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try          {
/* Create the Soap Client */
$client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
/* Set username and password here */
$client->username = 'xxx';
$client->password = 'yyy';
$qd = new Marketing Cloud_QueryDefinition();
$qd->Name = "de_sql";
$qd->CustomerKey = "de_sql";
$qd->Description = "API_Query";
$qd->TargetUpdateType = "Overwrite";
$qd->TargetType = "DE";
$qd->QueryText = "SELECT SubscriberKey FROM _open";
$ibo = new Marketing Cloud_InteractionBaseObject();
$ibo->CustomerKey = "de_sql";
$ibo->Name = "de_sql";
$qd->DataExtensionTarget = $ibo;

$object = new SoapVar($qd, SOAP_ENC_OBJECT, 'QueryDefinition', "http://exacttarget.com/wsdl/partnerAPI");
var_dump($object);
print_r($object);
//SOAP_ENC_OBJECT
$request = new Marketing Cloud_CreateRequest();
$request->Options = NULL;
$request->Objects = array($object);
$results = $client->Create($request);
var_dump($results);
$p_results = array($results);
print_r($p_results);
} catch (SoapFault $e) {
                var_dump($e);
}
```

### Sample SOAP Envelope

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
 <s:Header>
  <a:Action s:mustUnderstand="1">Create</a:Action>
  <a:MessageID>urn:uuid:ffac578d-73d8-46ac-b125-9cbf3952da25</a:MessageID>
  <a:ReplyTo>
   <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
  </a:ReplyTo>
  <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
  <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
   <u:Timestamp u:Id="_0">
    <u:Created>2009-12-01T23:29:41.590Z</u:Created>
    <u:Expires>2009-12-01T23:34:41.590Z</u:Expires>
   </u:Timestamp>
   <o:UsernameToken u:Id="uuid-f356ce91-93e2-43bc-b890-b93bedb5dc47-1">
    <o:Username>XXXXX</o:Username>
    <o:Password>XXXXX</o:Password>
   </o:UsernameToken>
  </o:Security>
 </s:Header>
 <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
   <Options>
   </Options>
   <Objects xsi:type="QueryDefinition">
    <PartnerKey xsi:nil="true">
    </PartnerKey>
    <ObjectID xsi:nil="true">
    </ObjectID>
    <CustomerKey>New Query Key</CustomerKey>
    <Name>New Query</Name>
    <Description>Some Description</Description>
    <QueryText>Select EMAIL_ADDRESS as EMAIL from [Example DE]</QueryText>
    <TargetType>DE</TargetType>
    <DataExtensionTarget>
     <PartnerKey xsi:nil="true">
     </PartnerKey>
     <ObjectID xsi:nil="true">
     </ObjectID>
     <CustomerKey>FIRST SEND</CustomerKey>
     <Name>First Send</Name>
    </DataExtensionTarget>
    <TargetUpdateType>Overwrite</TargetUpdateType>
   </Objects>
  </CreateRequest>
 </s:Body>
</s:Envelope>
```

## Related Items

[Query Activity](https://help.salesforce.com/articleView?id=mc_es_query_activity.htm&type=5)
