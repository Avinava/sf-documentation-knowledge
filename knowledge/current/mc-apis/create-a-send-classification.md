---
title: "Create a Send Classification"
domain: mc-apis
topic: create-a-send-classification
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.179Z
estimatedTokens: 1163
keywords: [Send, Classification, specify, sender, profile, delivery, CAN-SPAM, email, message, via, SOAP, API, includes, physical, address, sent, Why, How, Sample, NET, Code, PHP, Items]
---

> You can use a send classification to specify the sender profile, delivery profile, and CAN-SPAM classification for an email message you send via the SOAP API. This includes the From information, physical address, and other information required before an email can be sent.

# Create a Send Classification

## Why Create a Send Classification

You can use a send classification to specify the sender profile, delivery profile, and CAN-SPAM classification for an email message you send via the SOAP API. This includes the From information, physical address, and other information required before an email can be sent.

## How to Create a Send Classification

Use the sample code below as a model to create your own API call.

You must create both a sender profile and a delivery profile and know the external keys for both before executing the sample code below. If you don't know the external keys for the sender profile and the delivery profiles, perform a Retrieve call to get that information and include it in the sample code below.

### Sample .NET Code

```apex
public static void CreateSendClassification() {
            SoapClient partnerApi = new SoapClient();
            partnerApi.ClientCredentials.UserName.UserName = "username";
            partnerApi.ClientCredentials.UserName.Password = "password";
            string requestID = string.Empty;
            string status = string.Empty;
            //instantiate the SendClassification and set the general properties
            SendClassification sc = new SendClassification();
            sc.Name = "API Send Class";
            sc.Description = "Created through API";
            sc.CustomerKey = "API_SEND_CLASS";

            //set the classification type (default = Marketing/Commercial)
            //Marketing = Commercial
            //Operational = Transactional
            sc.SendClassificationType = SendClassificationTypeEnum.Marketing;
            sc.SendClassificationTypeSpecified = true;

            //set the sender profile
            SenderProfile sp = new SenderProfile();
            sp.CustomerKey = "12345";
            sc.SenderProfile = sp;
            //set the delivery profile
            DeliveryProfile dp = new DeliveryProfile();
            dp.CustomerKey = "1234";
            sc.DeliveryProfile = dp;
            //Optional - honor opt outs for transactions/operational sends (default = false)
            //sc.HonorPublicationListOptOutsForTransactionalSends = true;
            //sc.HonorPublicationListOptOutsForTransactionalSendsSpecified = true;
            //create the send classification
            CreateResult[] results = partnerApi.Create(null, new APIObject[] { sc }, out requestID, out status);
            //parse the results for objectID or error
            if (status.ToUpper() == "OK") {
                Console.WriteLine("Send Classification Created");
                Console.WriteLine("SendClassificationID: " + results[0].NewObjectID);
            } else {
                Console.WriteLine("Send Classification Create Failed");
                Console.WriteLine(results[0].StatusMessage);
            }
        }
```

### Sample PHP Code

```
//Create a send classification
try    {
    // Create the Soap Client
                $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
                // Set the credentials
                $client->username = xxxxxxx;
                $client->password = xxxxxxx;
                // Create the send classification object
                $sc = new Marketing Cloud_SendClassification();
                // Assign the name and customerkey
                $sc->Name= "Created with PHP";
                $sc->CustomerKey = $sc->Name;
                // Set the classfication type
                $sc->SendClassificationType = Marketing Cloud_SendClassificationTypeEnum::Operational;
                // Set the sender profile to an existing sender profile
                $sc->SenderProfile = new Marketing Cloud_SenderProfile();
                $sc->SenderProfile->CustomerKey = "5209";
                // Set the delivery profile to an existing delivery profile
                $sc->DeliveryProfile = new Marketing Cloud_DeliveryProfile();
                $sc->DeliveryProfile->CustomerKey = "3022";

                // Execute the call
                $object = new SoapVar($sc, SOAP_ENC_OBJECT, 'SendClassification', "http://exacttarget.com/wsdl/partnerAPI");

                $request = new Marketing Cloud_CreateRequest();
                $request->Options = null;
                $request->Objects = array ($object); // do the SOAP call

                $results = $client->Create($request);
                echo "<p>".$results->Results->StatusMessage."</p>";

} catch (SoapFault $e) {
    var_dump($e);
}
```

## Related Items

-   [Send Classifications](https://help.salesforce.com/articleView?id=mc_es_send_classifications.htm&type=5)
