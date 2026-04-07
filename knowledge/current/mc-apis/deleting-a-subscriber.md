---
title: "Deleting A Subscriber"
domain: mc-apis
topic: deleting-a-subscriber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.489Z
estimatedTokens: 1127
keywords: [Deleting, Subscriber, wish, entirely, remove, account, API, call, subscriber's, Why, How, Sample, NET, Code, Java]
---

# Deleting A Subscriber

> If you wish to entirely remove a subscriber from your account, you can use this API call to delete the subscriber's information.

# Deleting A Subscriber

## Why Delete a Subscriber

If you wish to entirely remove a subscriber from your account, you can use this API call to delete the subscriber's information.

You don't need to delete a subscriber's information from your account in order to unsubscribe that subscriber from an email list. Use this call only when you wish to totally remove a subscriber's information from your account.

When you delete a subscriber, your account also loses all tracking information related to that subscriber and a new instance of that subscriber could be added to lists from which that subscriber has previously unsubscribed. For this reason, Marketing Cloud recommends editing subscribers to an unsubscribed status rather than deleting that subscriber.

## How to Delete a Subscriber

Use the sample code below as a model for your own API call.

### Sample .NET Code

```apex
using System;
using System.Configuration;
using etAPI;
public partial class SubscriberDelete : System.Web.UI.Page
{
    //Global Variables
    private SoapClient client = new SoapClient();
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        try
        {
            Subscriber sub = new Subscriber();
            // Use one of the following to identify the subscriber
            sub.SubscriberKey = "12345"; // Preferred method
            sub.EmailAddress = "acruz@example.com";
            sub.ID = 123456789;
            try
            {
                string requestID = String.Empty;
                string status = String.Empty;
                DeleteResult[] results = null;
                //Call the Delete method on the Subscriber object
                results = client.Delete(null, new APIObject[] { sub }, out requestID, out status);
                //Display Results
                lblMessage.Text += "Overall Status: " + status;
                lblMessage.Text += "<br/>";
                lblMessage.Text += "Number of Results: " + results.Length;
                lblMessage.Text += "<br/>";
                //Loop through each object returned and display the StatusMessage
                foreach (DeleteResult result in results)
                {
                    lblMessage.Text += "Status Message: " + result.StatusMessage;
                    lblMessage.Text += "<br/>";
                }
            }
            catch (Exception ex)
            {
                lblMessage.Text += "<br/><br/>UPDATE ERROR:<br/>" + ex.Message;
            }
        }
        catch (Exception exc)
        {
            lblMessage.Text += "<br/><br/>###ERROR<br/>" + exc.Message;
        }
    }
}
```

### Sample Java Code (CXF)

```apex
// Deletes a subscriber from Marketing Cloud
        public void testDeleteSubscriber() throws RemoteException {

       try {
              Soap stub = init();

              Subscriber subscriber = new Subscriber();

              subscriber.setSubscriberKey("jdoe@example.com");

              DeleteRequest deleteRequest = new DeleteRequest();

              APIObject[] apiObjects = {subscriber};
              deleteRequest.getObjects().addAll(Arrays.asList(apiObjects));

              deleteRequest.setOptions(new DeleteOptions());

              DeleteResponse deleteResponse = stub.delete(deleteRequest);

              System.out.println("Deleted Subscriber ::: " + deleteResponse.getOverallStatus());
           } catch (Exception e) {
                e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.

        }
    }
```

### Sample SOAP Envelope

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
     <Header>
          <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
     </Header>
     <Body>
          <DeleteRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
               <Objects xsi:type="Subscriber">
                    <PartnerKey xsi:nil="true"/>
                    <ObjectID xsi:nil="true"/>
                    <EmailAddress>example@example.com</EmailAddress>
               </Objects>
          </DeleteRequest>
     </Body>
</Envelope>
```

## Related Items

-   [Delete Subscriber from Your Marketing Cloud Account](https://help.salesforce.com/articleView?id=mc_es_subscribers_without_enhanced_subscriber_features.htm&type=5)
-   [Unsubscriber Subscriber from an Email List](atlas.en-us.noversion.mc-apis.meta/mc-apis/unsubscribing_and_logging_an_unsubevent_with_a_logunsubevent_execute_call.htm)

## Related Topics

- Unsubscriber Subscriber from an Email List (atlas.en-us.noversion.mc-apis.meta/mc-apis/unsubscribing_and_logging_an_unsubevent_with_a_logunsubevent_execute_call.htm)
