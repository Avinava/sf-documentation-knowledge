---
title: "Manage Subscribers On Lists"
domain: mc-apis
topic: manage-subscribers-on-lists
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:17.866Z
estimatedTokens: 3688
keywords: [SubscriberList, Identifiers, Manage, Subscribers, add, remove, part, importing, creating, Subscription, Centers, acted, upon, child, Subscriber, mentioned, cases, Why, How, Actions, Sample, Code, Adding, NET, Java, Axis2, PHP, SOAP, Envelope, Unsubscribe, Items]
---

> You can add and remove subscribers from lists as part of importing subscribers. You can also manage subscribers and lists as part of creating Subscription Centers. The SubscriberList object, when acted upon as the child of a Subscriber object, enables the before mentioned use cases.

# Manage Subscribers On Lists

## Why Manage Subscribers on Lists

You can add and remove subscribers from lists as part of importing subscribers. You can also manage subscribers and lists as part of creating Subscription Centers. The SubscriberList object, when acted upon as the child of a Subscriber object, enables the before mentioned use cases.

## How To Manage Subscribers on Lists

The information and sample code below presents the necessary information to manage subscribers on lists. Use the examples as models to construct your own API calls.

### SubscriberList

The SubscriberList object represents the union between subscribers and lists.

### SubscriberList Actions

-   Create: creates an existing subscriber on a list
-   Update: updates an existing subscriber on a list (for status purposes primarily)
-   Delete: deletes an existing subscriber from a list
-   Upsert: Creates the subscriber on the list if they don't exist or updates them if they already exist on the list.

### Identifiers

When using the SubscriberList object on Create and Update methods, the ID property represents the ID of the list. On the Retrieve method, the ID property represents the ID of the Subscriber (with the List.ID representing the List ID). Retrieve also supports Subscriber.SubscriberKey as an identifer.

## Sample Code

### Adding an Existing Subscriber to a List

This example assumes the subscriber exists in the account but not on the list.

#### Sample .NET Code

```apex
public static void UpdateSubscriber_AddToList(SoapClient soapClient,
            string iEmailAddress,
            int iListID)
        {
            Subscriber sub = new Subscriber();
            sub.EmailAddress = iEmailAddress;
            // Define the SubscriberList and set the status to Active
            SubscriberList subList = new SubscriberList();
            subList.ID = iListID;
            subList.IDSpecified = true;
            subList.Status = SubscriberStatus.Active;
            subList.StatusSpecified = true;
            // Action is set on the SubscriberList to 'create' meaning they are added if they don't exist.
            // If they already exist, it returns an error.
            subList.Action = "create";
            //Relate the SubscriberList defined to the Subscriber
            sub.Lists = new SubscriberList[] { subList };
            string sStatus = "";
            string sRequestId = "";
            UpdateResult[] uResults =
                soapClient.Update(new UpdateOptions(), new APIObject[] { sub }, out sRequestId, out sStatus);
            Console.WriteLine("Status: " + sStatus);
            Console.WriteLine("Request ID: " + sRequestId);
            foreach (UpdateResult ur in uResults)
            {
                Console.WriteLine("StatusCode: " + ur.StatusCode);
                Console.WriteLine("StatusMessage: " + ur.StatusMessage);
                Console.WriteLine("ErrorCode: " + ur.ErrorCode);
            }
        }
```

#### Sample Java (Axis2) Code

```apex
public static void Run(PartnerAPIStub ps, String iEmailAddress, int iListID) {
              try {
                     Subscriber sub = Subscriber.Factory.newInstance();
                     sub.setEmailAddress(iEmailAddress);
                     SubscriberList subList = SubscriberList.Factory.newInstance();
                     subList.setID(iListID);
                     subList.setStatus(SubscriberStatus.ACTIVE);

            // Action is set on the SubscriberList to 'create' meaning they are added if they don't exist.
            // If they already exist, it returns an error.
                     subList.setAction("create");
                     sub.setListsArray(new SubscriberList[] { subList });

                     UpdateRequestDocument updateRequestDocument = UpdateRequestDocument.Factory
                                  .newInstance();
                     UpdateRequestDocument.UpdateRequest UpdateRequest = UpdateRequestDocument.UpdateRequest.Factory
                                  .newInstance();
                     UpdateRequest.setObjectsArray(new APIObject[] { sub });
                     UpdateOptions updateOptions = UpdateOptions.Factory.newInstance();
                     UpdateRequest.setOptions(updateOptions);
                     updateRequestDocument.setUpdateRequest(UpdateRequest);
                     UpdateResponseDocument responseDoc = ps
                                  .update(updateRequestDocument);
                     UpdateResponse uResults = responseDoc.getUpdateResponse();
                     System.out.println("Status: " + uResults.getOverallStatus());
                     System.out.println("Request ID: " + uResults.getRequestID());
                     for (UpdateResult ur : uResults.getResultsArray())
                     {
                           System.out.println("StatusCode: " + ur.getStatusCode());
                           System.out.println("StatusMessage: " + ur.getStatusMessage());
                           System.out.println("ErrorCode: " + ur.getErrorCode());
                     }
              } catch (Exception e) {
                     e.printStackTrace();
              }
       }
```

#### PHP

```
function UpdateSubscriber_AddToList($client,
                $iEmailAddress,
                $iListID)
{
    $sub = new Marketing Cloud_Subscriber();
                $sub->EmailAddress = $iEmailAddress;

                $subList = new Marketing Cloud_SubscriberList();
                $subList->ID = $iListID;
                $subList->Status = Marketing Cloud_SubscriberStatus::Active;

                // Action is set on the SubscriberList to 'create' meaning they are added if they don't exist.
                // If they already exist, it returns an error.
                $subList->Action = "create";

    $sub->Lists = array($subList);

    $object = new SoapVar($sub, SOAP_ENC_OBJECT, 'Subscriber', "http://exacttarget.com/wsdl/partnerAPI");
    $request = new Marketing Cloud_UpdateRequest();
    $request->Options = NULL;
    $request->Objects = array($object);
    $results = $client->Update($request);

    echo 'Status: '.$results->OverallStatus.'<br />';
    echo 'Request ID: '.$results->RequestID.'<br />';

                if (property_exists($results, "Results"))
                {
                                if (!is_array($results->Results))
                                {
                                                $output = array();
                                                $output[] = $results->Results;
                                                $results->Results = $output;
                                }
                                foreach($results->Results as $ur)
                                {
                                                echo 'StatusCode: '.$ur->StatusCode.'<br>';
                                                echo 'StatusMessage: '.$ur->StatusMessage.'<br>';
                                                echo 'ErrorCode: '.$ur->ErrorCode.'<br>';
                                }
                }

}
```

#### Sample SOAP Envelope

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <Header>
      <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
   </Header>
   <Body>
      <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Objects xsi:type="Subscriber">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <EmailAddress>example@example.com</EmailAddress>
            <Lists>
               <PartnerKey xsi:nil="true"/>
               <ObjectID xsi:nil="true"/>
               <ID>123456</ID>
               <Status>Active</Status>
               <Action>create</Action>
            </Lists>
         </Objects>
      </UpdateRequest>
   </Body>
</Envelope>
```

### Unsubscribe an Existing Subscriber from a List

This example assumes the subscriber exists on the list already.

#### Sample .NET Code

```apex
public static void UpdateSubscriber_UnsubscribeFromList(SoapClient soapClient,
            string iEmailAddress,
            int iListID)
        {
            Subscriber sub = new Subscriber();
            sub.EmailAddress = iEmailAddress;
            // Define the SubscriberList and set the status to Active
            SubscriberList subList = new SubscriberList();
            subList.ID = iListID;
            subList.IDSpecified = true;
            subList.Status = SubscriberStatus.Unsubscribed;
            subList.StatusSpecified = true;
            // Action is set on the SubscriberList to 'update'.
            // An error is returned if the subscriber does not already exist on list.
            subList.Action = "update";
            //Relate the SubscriberList defined to the Subscriber
            sub.Lists = new SubscriberList[] { subList };
            string sStatus = "";
            string sRequestId = "";
            UpdateResult[] uResults =
                soapClient.Update(new UpdateOptions(), new APIObject[] { sub }, out sRequestId, out sStatus);
            Console.WriteLine("Status: " + sStatus);
            Console.WriteLine("Request ID: " + sRequestId);
            foreach (UpdateResult ur in uResults)
            {
                Console.WriteLine("StatusCode: " + ur.StatusCode);
                Console.WriteLine("StatusMessage: " + ur.StatusMessage);
                Console.WriteLine("ErrorCode: " + ur.ErrorCode);
            }
        }
```

#### Sample Java Code (Axis2)

The code below unsubscribes the subscriber from all lists the subscriber is on. Specify a ListID in the code to remove the subscriber from a specific list.

```apex
public static void Run(PartnerAPIStub ps, String iEmailAddress, int iListID) {
              try {
                     Subscriber sub = Subscriber.Factory.newInstance();
                     sub.setEmailAddress(iEmailAddress);
                     SubscriberList subList = SubscriberList.Factory.newInstance();
                     subList.setID(iListID);

                     subList.setStatus(SubscriberStatus.UNSUBSCRIBED);

            // Action is set on the SubscriberList to 'update'.
                     // An error is returned if the subscriber does not already exist on list.
                     subList.setAction("update");
                     sub.setListsArray(new SubscriberList[] { subList });

                     UpdateRequestDocument updateRequestDocument = UpdateRequestDocument.Factory
                                  .newInstance();
                     UpdateRequestDocument.UpdateRequest UpdateRequest = UpdateRequestDocument.UpdateRequest.Factory
                                  .newInstance();
                     UpdateRequest.setObjectsArray(new APIObject[] { sub });
                     UpdateOptions updateOptions = UpdateOptions.Factory.newInstance();
                     UpdateRequest.setOptions(updateOptions);
                     updateRequestDocument.setUpdateRequest(UpdateRequest);
                     UpdateResponseDocument responseDoc = ps
                                  .update(updateRequestDocument);
                     UpdateResponse uResults = responseDoc.getUpdateResponse();
                     System.out.println("Status: " + uResults.getOverallStatus());
                     System.out.println("Request ID: " + uResults.getRequestID());
                     for (UpdateResult ur : uResults.getResultsArray())
                     {
                           System.out.println("StatusCode: " + ur.getStatusCode());
                           System.out.println("StatusMessage: " + ur.getStatusMessage());
                           System.out.println("ErrorCode: " + ur.getErrorCode());
                     }
              } catch (Exception e) {
                     e.printStackTrace();
              }
       }
```

#### PHP

```
function UpdateSubscriber_UnsubscribeFromList($client,
                $iEmailAddress,
                $iListID)
{
    $sub = new Marketing Cloud_Subscriber();
                $sub->EmailAddress = $iEmailAddress;

                $subList = new Marketing Cloud_SubscriberList();
                $subList->ID = $iListID;
                $subList->Status = Marketing Cloud_SubscriberStatus::Unsubscribed;

                // Action is set on the SubscriberList to 'update'.
                // An error is returned if the subscriber does not already exist on list.
                $subList->Action = "update";

    $sub->Lists = array($subList);

    $object = new SoapVar($sub, SOAP_ENC_OBJECT, 'Subscriber', "http://exacttarget.com/wsdl/partnerAPI");
    $request = new Marketing Cloud_UpdateRequest();
    $request->Options = NULL;
    $request->Objects = array($object);
    $results = $client->Update($request);

    echo 'Status: '.$results->OverallStatus.'<br />';
    echo 'Request ID: '.$results->RequestID.'<br />';

                if (property_exists($results, "Results"))
                {
                                if (!is_array($results->Results))
                                {
                                                $output = array();
                                                $output[] = $results->Results;
                                                $results->Results = $output;
                                }
                                foreach($results->Results as $ur)
                                {
                                                echo 'StatusCode: '.$ur->StatusCode.'<br>';
                                                echo 'StatusMessage: '.$ur->StatusMessage.'<br>';
                                                echo 'ErrorCode: '.$ur->ErrorCode.'<br>';
                                }
                }
}
```

#### Sample SOAP Envelope

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <Header>
      <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
   </Header>
   <Body>
      <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Objects xsi:type="Subscriber">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <EmailAddress>example@example.com</EmailAddress>
            <Lists>
               <PartnerKey xsi:nil="true"/>
               <ObjectID xsi:nil="true"/>
               <ID>123456</ID>
               <Status>Unsubscribed</Status>
               <Action>update</Action>
            </Lists>
         </Objects>
      </UpdateRequest>
   </Body>
</Envelope>
```

## Related Items

[Subscription Center](https://help.salesforce.com/articleView?id=mc_es_preview_subscription_center.htm&type=5)
