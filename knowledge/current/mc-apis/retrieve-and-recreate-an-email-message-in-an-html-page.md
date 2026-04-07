---
title: "Retrieve and Recreate an Email Message in an HTML Page"
domain: mc-apis
topic: retrieve-and-recreate-an-email-message-in-an-html-page
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.615Z
estimatedTokens: 1013
keywords: [Retrieve, Recreate, Email, Message, HTML, retrieving, content, structure, Marketing, Cloud, account, rendering, Why, How, Sample]
---

# Retrieve and Recreate an Email Message in an HTML Page

> This page contains information  about retrieving the content and structure of an email message from a Marketing Cloud account and rendering that content within an HTML page.

# Retrieve and Recreate an Email Message in an HTML Page

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.

This page contains information about retrieving the content and structure of an email message from a Marketing Cloud account and rendering that content within an HTML page.

## Why Retrieve an Email Message and Recreate That Message in an HTML Page

You can use the HTML page to display the email message on a page outside of Marketing Cloud, depending on the needs of your users. Use this page to review the email message or show a preview for approval. Note that this page shows the email message before the send and processing occurs, so variables and AMPscript display as code and do not show any values.

## How to Retrieve an Email Message and Recreate That Message in an HTML Page

Use the sample code below as a model for your own call.

### Sample PHP Code

```
<?php
$path = $_SERVER[DOCUMENT_ROOT].'/php_api_starter_kit/PHP/00 Includes/';
require($path . 'exacttarget_soap_client.php');
require($path . 'exacttarget_object_definition.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
    try{
/* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'xxxxx';
        $client->password = 'xxxxx';
/* Create the retrieve request and set the object type to AsyncActivityStatus */
        $request = new Marketing Cloud_RetrieveRequest();
        $objectType= "Email";
        $request->ObjectType= $objectType;
        $et_objdefClass = new ObjectDefinitionClass();

/* Define the properties we want to retrieve */
        $request->Properties=array("Name","Subject","ID","HTMLBody","ContentAreas") ;
/* Create a simple filter part to filter out the status of the program we want */
/* In this case it is ParentInteractionObjectID == 0319cb20-946d-df11-b817-00237d540dfc */

// Filter retrieve on a particular email address
        $filter1 = new Marketing Cloud_SimpleFilterPart() ;
        $filter1->Property= "Name";
        $filter1->SimpleOperator=ExactTarget_SimpleOperators::equals;
        $filter1->Value=array("sample-email");   //email address to filter on
// Assign the filter to the retrieve request
$request->Filter = new SoapVar($filter1, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
/* Execute the retreive */
        $requestMsg = new Marketing Cloud_RetrieveRequestMsg();
        $requestMsg->RetrieveRequest=$request;
        $results = $client->Retrieve($requestMsg);
/* Print the results to the page */
if($results->Results!=null){
echo '<pre>';
//var_dump($results);
echo "emails: " .count($results) . "<br/>";
$resultsObj = $results->Results;
echo "content areas: " . count($resultsObj->ContentAreas) . "<br/>";
$html = $resultsObj->HTMLBody;
if(count($resultsObj->ContentAreas) > 0){
for($i=0; $i < count($resultsObj->ContentAreas); $i++){
$j = $i+1;
$contentAreaObj = $resultsObj->ContentAreas;
$cellName =  '<custom type="content" name="cell'. $j.'">';
$content = $contentAreaObj[$i]->Content;
$html = str_replace($cellName,$content,$html);
}
}echo $html;
echo '</pre>';
        }

  } catch (SoapFault $e) {
    /* output the resulting SoapFault upon an error */
echo '<pre>';
    var_dump($e);
echo '</pre>';
}
/* Output the request and response
print "<br /><br />";
print "Request: <br />".$client->__getLastRequestHeaders()."<br />";
print "Request: <br />".$client->__getLastRequest() ."<br />";
print "Response: <br />".$client->__getLastResponseHeaders()."<br />";
print "Response: <br />".$client->__getLastResponse()."<br />";
*/
?>
```

## Related Items

[REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
