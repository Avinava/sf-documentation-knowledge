---
title: "Add Subscribers to a List"
domain: mc-apis
topic: add-subscribers-to-a-list
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:20.107Z
estimatedTokens: 2154
keywords: [Add, Subscribers, adding, subscriber, publication, suppression, via, SOAP, API, document, Why, How, Sample, NET, Code]
---

# Add Subscribers to a List

> This page contains information on adding subscribers to a subscriber, publication, or suppression list via the SOAP API. You can add subscribers to an existing list using the the information in this document.

# Add Subscribers to a List

This page contains information on adding subscribers to a subscriber, publication, or suppression list via the SOAP API. You can add subscribers to an existing list using the the information in this document.

## Why Add Subscribers to a List

You can use the SOAP API to programmatically add users to a list.

## How To Add Subscribers to a List

Use the sample code below as an example of how to construct your calls. Modify the call as necessary to fit the needs of your development environment or other system.

When dealing with batches of subscribers, start the process with an update call and fall back to a create call as necessary, as each subscriber only needs to be created once. After being created, the subscriber is on the All Subs list. All other list operations are performed with an update.

Setting subscriber status to Active ensures that, when they are added to the list, that subscriber is always added in Active status, regardless of what happened in the past.

### Sample .NET Code

```apex
public void CreateSubscriber(SoapClient soapClient)
        {
            Subscriber sub = new Subscriber();
            sub.EmailAddress = "help@example.com";
            //This line is needed if SubscriberKey functionality is enabled in your account
            sub.SubscriberKey = "help@example.com";
            //Declare the list we want to add them to
            SubscriberList list = new SubscriberList();
            list.ID = 12345;
            list.IDSpecified = true;
            list.Status = SubscriberStatus.Active;
            //Relate the List to the Subscriber
            sub.Lists = new SubscriberList[] { list };
            //Specify Create Options
            CreateOptions createOptions = new CreateOptions();
            //The 4 lines below are only necessary if you want to do an UpdateAdd(Upsert), without the call fails if subscriber already exists
            SaveOption saveOption = new SaveOption();
            saveOption.SaveAction = SaveAction.UpdateAdd;
            saveOption.PropertyName = "*";
            createOptions.SaveOptions = new SaveOption[] { saveOption };
            String requestID;
            String status;
            CreateResult[] dresults = soapClient.Create(createOptions, new APIObject[] { sub }, out requestID, out status);
            foreach (CreateResult result in dresults)
            {
                Console.WriteLine("Subscriber Status ::: " + result.StatusCode + " " + result.StatusMessage);
            }
            Console.WriteLine("Overall Status ::: " + status);
        }
```

### Sample Java (Axis2) Code

```apex
public static void CreateSubscriber( PartnerAPIStub stub)
    {

     try {
            Subscriber sub = Subscriber.Factory.newInstance();
            sub.setEmailAddress("help@example.com");
            //This line is needed if SubscriberKey functionality is enabled in your account
            sub.setSubscriberKey("help@example.com");

            //Declare the list we want to add them to
            SubscriberList list = SubscriberList.Factory.newInstance();
            list.setID(12345);
            list.setStatus(SubscriberStatus.ACTIVE);

            //Relate the List to the Subscriber
            sub.setListsArray(new SubscriberList[]{list});

            //Specify Create Options
            CreateOptions createOptions = CreateOptions.Factory.newInstance();
            //The 6 lines below are only necessary if you want to do an UpdateAdd(Upsert), without it the call fails if subscriber already exists
            SaveOption saveOption = SaveOption.Factory.newInstance();
            saveOption.setSaveAction(SaveAction.UPDATE_ADD);
            saveOption.setPropertyName("*");
            SaveOptions sa = SaveOptions.Factory.newInstance();
            sa.setSaveOptionArray(new SaveOption[] {saveOption});
            createOptions.setSaveOptions(sa);

            CreateRequestDocument createRequestDocument = CreateRequestDocument.Factory.newInstance();
            CreateRequestDocument.CreateRequest createRequest = CreateRequestDocument.CreateRequest.Factory.newInstance();
            createRequest.setObjectsArray(new APIObject[]{sub});
            createRequest.setOptions(createOptions);
            createRequestDocument.setCreateRequest(createRequest);
            CreateResponseDocument responseDoc = stub.Create(createRequestDocument);
            CreateResponse CR = responseDoc.getCreateResponse();

            for(CreateResult result : CR.getResultsArray()){
                System.out.println("Subscriber Status :::  " + result.getStatusCode() + " " + result.getStatusMessage() );
            }

            System.out.println("Overall Status :::  " + CR.getOverallStatus() );
        }
        catch (RemoteException e) {
            e.printStackTrace();
        }
        catch (Exception e) {
            e.printStackTrace();
        }

    }
```

### Sample PHP Code

```
<?php
// This call creates a Subscriber record if one does not exist.
// If a record already exists with that key value (Email Address by default or Subscriber Key if enabled) then it updates.
require('../exacttarget_soap_client.php');
require('../creds.php');

try          {

                $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
                $client->username = $username;
                $client->password = $password;

                $subscriber = new Marketing Cloud_Subscriber();
                $subscriber->EmailAddress = "jsmith@example.com";
                $subscriber->SubscriberKey = "jsmith@example.com";

                $FirstNameAttribute = new Marketing Cloud_Attribute();
                $FirstNameAttribute->Name = "First Name";
                $FirstNameAttribute->Value = "John";

                $LastNameAttribute = new Marketing Cloud_Attribute();
                $LastNameAttribute->Name = "Last Name";
                $LastNameAttribute->Value = "Smith";

                $subscriber->Attributes=array($FirstNameAttribute,$LastNameAttribute);

                $subscriber->Lists = array();
                $list = new Marketing Cloud_SubscriberList();
                $list->ID = "1938565";
                $subscriber->Lists[] = $list;

                $so = new Marketing Cloud_SaveOption();
                $so->PropertyName = "*";
                $so->SaveAction = Marketing Cloud_SaveAction::UpdateAdd;
                $soe = new SoapVar($so, SOAP_ENC_OBJECT, 'SaveOption', "http://exacttarget.com/wsdl/partnerAPI");
                $opts = new Marketing Cloud_UpdateOptions();
                $opts->SaveOptions = array($soe);

                $object = new SoapVar($subscriber, SOAP_ENC_OBJECT, 'Subscriber', "http://exacttarget.com/wsdl/partnerAPI");

                $request = new Marketing Cloud_CreateRequest();
                $request->Options = $opts;
                $request->Objects = array($object);
                $results = $client->Create($request);

                print_r($results);

     } catch (SoapFault $e) {
                var_dump($e);
     }
?>
```

You can also review the PHP sample code available in the SDK on Github.

### Sample SOAP Envelope

```
<envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <header>
            <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
    </header>
    <body>
        <createrequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <objects xsi:type="Subscriber">
                <partnerkey xsi:nil="true"></partnerkey>
                <objectid xsi:nil="true"></objectid>
                <emailaddress>help@example.com</emailaddress>
                <subscriberkey>help@example.com</subscriberkey>
                <emailtypepreference>HTML</emailtypepreference>
                <attributes>
                    <name>First Name</name>
                    <value>John</value>
                </attributes>
                <attributes>
                    <name>Last Name</name>
                    <value>Smith</value>
                </attributes>
                <lists>
                    <partnerkey xsi:nil="true"></partnerkey>
                    <id>12345</id>
                    <objectid xsi:nil="true"></objectid>
                    <status>Active</status>
                </lists>
                <status>Active</status>
            </objects>
        </createrequest>
    </body>
</envelope>
```

## Related Items

[Sample PHP Code](https://github.com/salesforce-marketingcloud/FuelSDK-PHP/blob/master/objsamples/sample-list.subscriber.php)
