---
title: "Start a Triggered Send Definition"
domain: mc-apis
topic: start-a-triggered-send-definition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.450Z
estimatedTokens: 1456
keywords: [Start, Triggered, Send, Definition, started, Once, receive, behave, according, how, created, Why, Sample, NET, Code, PHP, Items]
---

> Before a triggered send definition can be used, it must be started. Once the triggered send definition is started, it can receive information and behave according to how it was created.

# Start a Triggered Send Definition

## Why Start a Triggered Send Definition

Before a triggered send definition can be used, it must be started. Once the triggered send definition is started, it can receive information and behave according to how it was created.

## How to Start a Triggered Send Definition

Use the sample code below as a model for your own API call.

### Sample .NET Code

```apex
/**
    * Change Triggered Send status to Active using Update call
    */
     public void testUpdateTriggeredSendDefinitionStatusToActive()
        {
            TriggeredSendDefinition definition = new TriggeredSendDefinition();
            definition.CustomerKey = "Definition_Key";
            ClientID clientID = new ClientID();
            clientID.PartnerClientKey = "partnerkey_subaccount_2"; //this is sub-accounts partner-key
            //Tell system to create this definition in Sub-account
            definition.Client = clientID;
            //tells system that its ready to send emails now
            definition.TriggeredSendStatus = TriggeredSendStatusEnum.Active;
            definition.TriggeredSendStatusSpecified = true; //.Net specific
            APIObject[] apiobjects = { definition };

            soapClient.Update(new UpdateOptions(), apiobjects, out requestID, out overallStatus);
            Console.Write("Results ::: " + overallStatus);
        }
```

### Sample PHP Code

The sample below uses the Create method to start the triggered send.

```
<?php
require('exacttarget_soap_client.php');

$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
 /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
         $client->username = '*****';
        $client->password = '******';

        /*% Marketing Cloud_Subscriber */    $subscriber = new Marketing Cloud_Subscriber();
                $subscriber->SubscriberKey = "tsd@example.com";
                $subscriber->EmailAddress = "tsd@example.com";

                /*% Marketing Cloud_Subscriber */
                $attribute1 = new Marketing Cloud_Attribute();
                $attribute1->Name = "HTML__Body";
                $attribute1->Value = "<html><body><div align='center'><table border='1' cellspacing='0' cellpadding=0 width='95%' style='width:95.0%'><tr><td>Welcome, You are sending Email using TriggeredSend definition</td></tr></table></div><br>Testing</body></html>";

                /*% Marketing Cloud_Subscriber */
                $attribute2 = new Marketing Cloud_Attribute();
                $attribute2->Name = "Text__Body";
                $attribute2->Value = "Confirmation Email";
                /*% Marketing Cloud_Subscriber */
                $attribute3 = new Marketing Cloud_Attribute();
                $attribute3->Name = "ss_ordernum";
                $attribute3->Value = "SS-1234";

                $subscriber->Attributes[] = $attribute1;
                $subscriber->Attributes[] = $attribute2;
                $subscriber->Attributes[] = $attribute3;

                $ts = new Marketing Cloud_TriggeredSend();

                $tsd = new Marketing Cloud_TriggeredSendDefinition();
                $tsd->CustomerKey = "Shipping_Confirmation_Key";

                $ts->Subscribers = $subscriber;
                $ts->TriggeredSendDefinition = $tsd;
                $object = new SoapVar($ts, SOAP_ENC_OBJECT, 'TriggeredSend', "http://exacttarget.com/wsdl/partnerAPI");
                //var_dump($object);
                 echo "<br><br>";
                  $request = new Marketing Cloud_CreateRequest();
    $request->Options = NULL;
    $request->Objects = array($object);
    $results = $client->Create($request);
    var_dump($results);
     } catch (SoapFault $e) {
    /* output the resulting SoapFault upon an error */
    var_dump($e);
}
print "Request:
".   $client->__getLastRequestHeaders() ."
";
print "Request:
".
$client->__getLastRequest() ."
";
print "Response:
".
$client->__getLastResponseHeaders()."
";
print "Response:
".
$client->__getLastResponse()."
";

?>
```

The sample below uses the Update method to start the triggered send.

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
 echo "<pre>";
try {
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'XXXXX';
        $client->password = 'XXXXX';

                $tsd = new Marketing Cloud_TriggeredSendDefinition();
                $tsd->CustomerKey = "Shipping_Confirmation_Key";
                $tsd->TriggeredSendStatus = Marketing Cloud_TriggeredSendStatusEnum::Active  ;

    $object = new SoapVar($tsd, SOAP_ENC_OBJECT, 'TriggeredSendDefinition', "http://exacttarget.com/wsdl/partnerAPI");
                       $request = new Marketing Cloud_UpdateRequest();
                       $UpdateOption = new Marketing Cloud_UpdateOptions();
                      // Apply options and object to request
          $request->Options = new SoapVar($UpdateOption, SOAP_ENC_OBJECT, 'UpdateOptions', "http://exacttarget.com/wsdl/partnerAPI");
          $request->Objects = array($object);

                                // Execute the CreateRequest
    $results = $client->Update($request);
    var_dump($results);
} catch (SoapFault $e) {
 var_dump($e);
}
echo "</pre>";
print "Request:
".
$client->__getLastRequestHeaders() ."
";
print "Request:
".
$client->__getLastRequest() ."
";
print "Response:
".
$client->__getLastResponseHeaders()."
";
print "Response:
".
$client->__getLastResponse()."
";
```

## Related Items

[Triggered Send Definition](https://help.salesforce.com/articleView?id=mc_es_triggered_emails.htm&type=5)
