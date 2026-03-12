---
title: "Setting Up Outbound Messaging"
domain: api
topic: setting-up-outbound-messaging
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.804Z
estimatedTokens: 1961
keywords: [Setting, Outbound, Messaging, via, Salesforce, user, Profiles, Defining, Downloading, Client, Certificate, Viewing, Messages, Tracking, Message]
---

# Setting Up Outbound Messaging

> Before you can use outbound messaging, you must set it up via the Salesforce user
      interface.

# Setting Up Outbound Messaging

Before you can use outbound messaging, you must set it up via the Salesforce user interface.

-   [Setting Up User Profiles](#om_user_profile)
-   [Defining Outbound Messaging](#api_om_defining)
-   [Downloading the Salesforce Client Certificate](#om_client_cert)
-   [Viewing Outbound Messages](#api_om_viewing)
-   [Tracking Outbound Message Status](#api_om_queue)

## Setting Up User Profiles

It’s possible to create circular changes with outbound messaging. For example, if a user is performing integrations that trigger workflow, and the workflow actions trigger account updates, those account updates trigger new workflow, and so on. To prevent these circular changes, you can disable a user’s ability to send outbound messages.

Here’s another example of a circular change scenario.

1.  You configure an outbound message to include a [sessionId](atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm#i1429237) and specify a user in the **User to send as** field. The user doesn’t have outbound messaging disabled.
2.  A change in a contact record triggers an outbound message from the specified user, with the [sessionId](atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm#i1429237) to your outbound message listener.
3.  Your outbound message listener calls the Lightning Platform API and updates the same contact record which triggered the outbound message.
4.  The update triggers an outbound message.
5.  Your outbound message listener updates the record.
6.  The update triggers an outbound message.
7.  Your outbound message listener updates the record.

To disable outbound message notifications for a user, deselect **Send Outbound Messages** in the user’s [Profile](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_profile.htm "HTML (New Window)"). We recommend specifying a single user to respond to outbound messages and disabling this user's ability to send outbound messages.

## Defining Outbound Messaging

To define outbound messages, use this procedure in the Salesforce user interface:

1.  From Setup, enter Outbound Messages in the Quick Find box, then select **Outbound Messages** under Workflow Actions.
2.  Click **New Outbound Message**.
3.  Choose the object that has the information you want included in the outbound message, and click **Next**.
4.  Configure the outbound message.
    1.  Enter a name and description for this outbound message.
    2.  Enter an endpoint URL for the recipient of the message. Salesforce sends a SOAP message to this endpoint.

        For security reasons, Salesforce restricts the outbound ports you can specify to one of the following:

        -   80: This port only accepts HTTP connections.
        -   443: This port only accepts HTTPS connections.
        -   1024–66535 (inclusive): These ports accept HTTP or HTTPS connections.
    3.  Select the Salesforce user to use when sending the message by specifying a username in the **User to send as** field. The chosen user controls data visibility for the message that is sent to the endpoint.
    4.  Select **Send Session ID** if you want a [sessionId](atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm#i1429237) to be included in the outbound message. Include the [sessionId](atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm#i1429237) in your message if you intend to make API calls back to Salesforce from your listener. The [sessionId](atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm#i1429237) represents the user defined in the previous step and not the user who triggered the workflow.
    5.  Select the fields you want included in the outbound message and click **Add**.
5.  Click **Save**, and review the outbound message detail page:
    -   The API Version field is automatically generated and set to the current API version when the outbound message was created. This API version is used in API calls back to Salesforce using the enterprise or partner WSDL. The API Version can only be modified by using the Metadata API.
    -   Click **Click for WSDL** to view the WSDL associated with this message.

        The WSDL is bound to the outbound message and contains the instructions about how to reach the endpoint service and what data is sent to it.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

If you don’t have these options, your org doesn’t have outbound messaging enabled. Contact Salesforce to enable outbound messaging for your org.

## Downloading the Salesforce Client Certificate

Your application (endpoint) server's SSL/TLS can be configured to require client certificates (two-way SSL/TLS), in order to validate the identity of the Salesforce server when it takes the role of client to your server. You can download the Salesforce client certificate from the Salesforce application user interface. This certificate is the client certificate that Salesforce sends with each outbound message for authentication.

1.  From Setup, enter API in the Quick Find box, then select **API**.
2.  On the API WSDL page, click **Manage API Client Certificate**.
3.  On the Certificate and Key Management page, in the API Client Certificate section, click the **API Client Certificate**.
4.  On the Certificates page, click **Download Certificate**. The .crt file is saved in the download location specified in your browser.

    Import the downloaded certificate into your application server, and configure your application server to request the client certificate. The application server then checks that the certificate used in the SSL/TLS handshake matches the one you downloaded.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Your application (endpoint) server must send any intermediate certificates in the certificate chain, and the certificate chain must be in the correct order. The correct order is:

1.  Server certificate
2.  Intermediate certificate that signed the server certificate if the server certificate wasn’t signed directly by a root certificate
3.  Intermediate certificate that signed the certificate in step 2
4.  Any remaining intermediate certificates

    Don’t include the root certificate authority certificate. The root certificate isn’t sent by your server. Salesforce already has its own list of trusted certificates on file, and a certificate in the chain must be signed by one of those root certificate authority certificates.


## Viewing Outbound Messages

To view existing outbound messages, from Setup, enter Outbound Messages in the Quick Find box, then select **Outbound Messages** in the Salesforce user interface.

-   Click **New Outbound Message** to define a new outbound message.
-   Click **View Message Delivery Status** to track the status of an outbound message.
-   Select an existing outbound message to view details about it or view workflow rules and approval processes that use it.
-   Click **Edit** to make changes to an existing outbound message.
-   Click **Del** to delete an outbound message.

## Tracking Outbound Message Status

To track the status of an outbound message, from Setup, enter Outbound Messages in the Quick Find box, select **Outbound Messages**, and then click **View Message Delivery Status**. You can perform several tasks on this page.

-   View the status of your outbound messages, including the total number of attempted deliveries.
-   View the action that triggered the outbound message by clicking any workflow or approval process action ID.
-   Click **Retry** to change the **Next Attempt** date to now. This action causes the message delivery to be immediately retried.
-   Click **Del** to permanently remove the outbound message from the queue.

## Related Topics

- sessionId (atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm)
