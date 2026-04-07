---
title: "Describe a Subscriber"
domain: mc-apis
topic: describe-a-subscriber
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:21.529Z
estimatedTokens: 1662
keywords: [Describe, Subscriber, ExtendedProperties, include, base, attribute, metadata, call, ideally, suited, building, profile, center, Why, How]
---

# Describe a Subscriber

> The Subscriber object is the only object that returns both Properties and ExtendedProperties. Properties include the base Subscriber properties, and ExtendedProperties include subscriber attribute metadata. This call is ideally suited for building a profile center.

# Describe a Subscriber

## Why Describe a Subscriber

The Subscriber object is the only object that returns both Properties and ExtendedProperties. Properties include the base Subscriber properties, and ExtendedProperties include subscriber attribute metadata. This call is ideally suited for building a profile center.

## How To Describe a Subscriber

Use the information below to create your own API to describe a subscriber.

### Sample .NET Code

```
// Instantiate a Request Object for Subscriber
ObjectDefinitionRequest request = new ObjectDefinitionRequest();
request.ObjectType = "Subscriber";
// Execute the Request
ObjectDefinition[] results = integrationFramework.Describe(new ObjectDefinitionRequest[] { request }, out requestID);
// Output the Results
Console.WriteLine("_________Properties______________");
Console.WriteLine(results[0].Name);
for (int i = 0; i < results[0].Properties.Length; i++)
{
       Console.WriteLine("Name:\t" + results[0].Properties[i].Name);
       Console.WriteLine("PropertyType:\t" + results[0].Properties[i].PropertyType);
       Console.WriteLine("isRetrievable:\t" + results[0].Properties[i].IsRetrievable);
}
Console.WriteLine("_________ExtendedProperties______________");
if (results[0].ExtendedProperties != null)
{
       for (int i = 0; i < results[0].ExtendedProperties.Length; i++)
       {
              Console.WriteLine("Name:\t" + results[0].ExtendedProperties[i].Name);
              Console.WriteLine("PropertyType:\t" + results[0].ExtendedProperties[i].PropertyType);
              Console.WriteLine("isRequired:\t" + results[0].ExtendedProperties[i].IsRequired);
              Console.WriteLine("isViewable:\t" + results[0].ExtendedProperties[i].IsViewable);
              Console.WriteLine("isRetrievable:\t" + results[0].Properties[i].IsRetrievable);
       }
}
```

### Output

```
_________Properties______________
Name:           ID
PropertyType:   string
isRetrievable:  True
Name:           CreatedDate
PropertyType:   string
isRetrievable:  True
Name:           Client.ID
PropertyType:   string
isRetrievable:  True
Name:           EmailAddress
PropertyType:   string
isRetrievable:  True
Name:           SubscriberKey
PropertyType:   string
isRetrievable:  True
Name:           UnsubscribedDate
PropertyType:   string
isRetrievable:  True
Name:           Status
PropertyType:   string
isRetrievable:  True
Name:           EmailTypePreference
PropertyType:   string
isRetrievable:  True
Name:           Attributes
PropertyType:   string
isRetrievable:  False
Name:           PartnerType
PropertyType:   string
isRetrievable:  False
Name:           Lists
PropertyType:   string
isRetrievable:  False
Name:           GlobalUnsubscribeCategory
PropertyType:   string
isRetrievable:  False
Name:           SubscriberTypeDefinition
PropertyType:   string
isRetrievable:  False
Name:           Client
PropertyType:   string
isRetrievable:  False
Name:           PartnerProperties
PropertyType:   string
isRetrievable:  False
Name:           ModifiedDate
PropertyType:   string
isRetrievable:  False
Name:           ObjectID
PropertyType:   string
isRetrievable:  False
Name:           CustomerKey
PropertyType:   string
isRetrievable:  False
Name:           Owner
PropertyType:   string
isRetrievable:  False
_________ExtendedProperties______________
Name:           CarId
PropertyType:   double
isRequired:     False
isViewable:     True
isRetrievable:  True
Name:           Birthday
PropertyType:   datetime
isRequired:     False
isViewable:     True
isRetrievable:  True
Name:           CollegeName
PropertyType:   string
isRequired:     False
isViewable:     True
isRetrievable:  True
Name:           Hair Color
PropertyType:   string
isRequired:     False
isViewable:     True
isRetrievable:  True
Name:           ZIP Code
PropertyType:   string
isRequired:     False
isViewable:     True
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try          {
                /* Create the Soap Client */
                $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
                /* Set username and password
                *
                *  here */
                $client->username = 'xxx';
                $client->password = 'xxx';

                $request = new Marketing Cloud_DefinitionRequestMsg();
                $odr = new Marketing Cloud_ObjectDefinitionRequest();
                $odr->ObjectType = "Subscriber";
                $request->DescribeRequests = array($odr);
                $results = $client->Describe($request);

                foreach ($results->ObjectDefinition->ExtendedProperties->ExtendedProperty as $eprop){
                                                                //var_dump($eprop);
                                                                print('Name: '.$eprop->Name.'<br>');
                                                                print('DataType: '.$eprop->DataType.'<br>');
                                                                print('<br>');
                                }
} catch (SoapFault $e) {
                var_dump($e);
}
?>
```

### Sample SOAP Envelope

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-31606811" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <DefinitionRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <DescribeRequests>
            <ClientIDs>
               <ID>12345</ID>
            </ClientIDs>
            <ObjectDefinitionRequest>
               <ObjectType>Subscriber</ObjectType>
            </ObjectDefinitionRequest>
         </DescribeRequests>
      </DefinitionRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

## Related Items

-   [Subscriber Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/subscriber.htm)
-   [Profile Center](https://help.salesforce.com/articleView?id=mc_es_profile_center.htm&type=5)

## Related Topics

- Subscriber Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/subscriber.htm)
