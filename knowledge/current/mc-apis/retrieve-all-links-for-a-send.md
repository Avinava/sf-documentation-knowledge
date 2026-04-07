---
title: "Retrieve All Links for a Send"
domain: mc-apis
topic: retrieve-all-links-for-a-send
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:18.791Z
estimatedTokens: 959
keywords: [Retrieve, Links, Send, retrieving, Why, How, Sample, NET, Code, PHP]
---

> This page contains information  about retrieving all links for a send.

# Retrieve All Links for a Send

This page contains information about retrieving all links for a send.

## Why Retrieve All Links for a Send

By retrieving all links for a send, you can see which links are included in your email and how your subscribers have interacted with those links. For example, you can retrieve information relating to clicks on a specific link, allowing you to take action related to those click numbers.

## How To Retrieve All Links for a Send

Use the sample code below as an example to construct your own API calls.

### Sample .NET Code

```apex
// Filter by SendID SimpleFilterPart listSendFilter = new SimpleFilterPart();
listSendFilter.Property = "SendID";
listSendFilter.SimpleOperator = SimpleOperators.equals;
listSendFilter.Value = new string[] { "2057" };
// Create the RetrieveRequest
RetrieveRequest request = new RetrieveRequest();
request.ObjectType = "LinkSend";
request.Filter = listSendFilter;
request.Properties = new string[] { "ID", "SendID", "Client.ID", "Client.PartnerClientKey", "Link.ID", "Link.TotalClicks", "Link.UniqueClicks", "Link.URL", "Link.Alias" };
// Execute the Retrieve
APIObject[] results;
string status = integrationFramework.Retrieve(request, out requestID, out results);
// Output the results
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("Link Send Summary");
sb.AppendFormat("
Overall result: {0}.  RequestID: {1}", status, requestID);
// Print out results for each new object created
for (int cntr = 0; cntr < results.Length; cntr++)
{
       sb.Append(string.Format("
 ---- Index {0}", cntr));
       LinkSend id = results[cntr] as LinkSend;
       sb.Append("
 SendID: " + id.SendID);
       sb.Append("
 Link.ID: " + id.Link.ID);
       sb.Append("
 Link.TotalClicks: " + id.Link.TotalClicks);
       sb.Append("
 Link.UniqueClicks: " + id.Link.UniqueClicks);
       sb.Append("
 Link.URL: " + id.Link.URL);
       sb.Append("
 Link.Alias: " + id.Link.Alias);
       sb.Append("
");
}
Console.WriteLine(sb.ToString());
```

### Output

```
Link Send Summary Overall result: OK.
RequestID: 0dc6c6a8-dc74-4c69-a3de-48297304fd0e ---- Index 0
SendID: 2057
Link.ID: 5658
Link.TotalClicks: 2
Link.UniqueClicks: 1
Link.URL: http://click.preview.exacttarget.com/unsub_center.aspx
Link.Alias: Unsubscribe
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
$client->username = XXXXX;
$client->password = XXXXX;
$rr = new Marketing Cloud_RetrieveRequest();
$rr->ObjectType = 'LinkSend';
//Set the properties to return
$props = array("ID", "SendID", "Client.ID", "Client.PartnerClientKey", "Link.ID", "Link.TotalClicks", "Link.UniqueClicks", "Link.URL", "Link.Alias");
$rr->Properties = $props;
//Setup account filtering, to look for a given account MID
$filterPart = new Marketing Cloud_SimpleFilterPart();
$filterPart->Property = 'SendID';
$values = array('27537821');
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

## Code Examples

```
Link Send Summary Overall result: OK.  
RequestID: 0dc6c6a8-dc74-4c69-a3de-48297304fd0e ---- Index 0 
SendID: 2057 
Link.ID: 5658 
Link.TotalClicks: 2 
Link.UniqueClicks: 1 
Link.URL: http://click.preview.exacttarget.com/unsub_center.aspx 
Link.Alias: Unsubscribe
```
