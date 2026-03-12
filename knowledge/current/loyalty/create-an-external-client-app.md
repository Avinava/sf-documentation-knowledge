---
title: "Create an External Client App"
domain: loyalty
topic: create-an-external-client-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:52.231Z
estimatedTokens: 899
keywords: [External, Client, App, Amazon, Web, Services, AWS, connect, Loyalty, Management, Receipt, Scanner, Kit, unlocked, package]
---

# Create an External Client App

> Create an external client app for Amazon Web Services (AWS) to connect with the Loyalty
  Management Receipt Scanner Kit unlocked package. This external client app enables secure OAuth
  authentication so that the Expense Analysis API runs after the receipts are uploaded and creates
  transaction journals for the submitted receipts.

# Create an External Client App

Create an external client app for Amazon Web Services (AWS) to connect with the Loyalty Management Receipt Scanner Kit unlocked package. This external client app enables secure OAuth authentication so that the Expense Analysis API runs after the receipts are uploaded and creates transaction journals for the submitted receipts.

| Available in: all editions that have Loyalty Management enabled |
| --- |


| User Permissions Needed |
| --- |
| To create external client apps: | Customize ApplicationANDModify All Data OR Manage External Client Apps |

1.  From Setup, in the Quick Find box, enter certificate, and then select **Certificate and Key Management**.
2.  Under Certificates, click **Create Self-Signed Certificate**.
3.  Enter a label and unique name for the certificate.
4.  Save the new certificate.
5.  Click **Download Certificate**.
6.  Create an [External Client App](https://help.salesforce.com/s/articleView?id=xcloud.create_a_local_external_client_app.htm&type=5&language=en_US "HTML (New Window)").
7.  Under OAuth Settings, enable **Enable OAuth**.
8.  In the Callback URL, enter https://login.salesforce.com/services/oauth2/token/callback.
9.  Select **Use digital signatures**.
10.  Click **Choose file**, and upload the certificate that you downloaded.
11.  In the Selected OAuth Scopes section, move the **Manage user data via APIs (api)** and **Perform requests at any time (refresh\_token, offline\_access)** values to Selected OAuth Scopes.
12.  Save the external client app.
13.  From Setup, in the Quick Find box, enter External Client Apps Manager, and then select **External Client Apps Manager**.
14.  From the actions list for the external client app, select **Edit Policies**.
15.  Under OAuth Policies, from the Permitted Users dropdown, select **Admin approved users are Pre-authorized** as the permitted users.
16.  From Timeout Value, select **24 hours**.
17.  Save your changes. After you turn on this option, manage access using [profiles and permission sets](https://help.salesforce.com/s/articleView?id=platform.security_data_access_mgmt.htm&type=5&language=en_US "HTML (New Window)"). Select the profile or permission set that should have access by editing the external client app policies or the OAuth policies.
18.  In the Quick Find box, enter custom, and then select **Custom Settings**.
19.  For the Manage Authenticate Setting whose namespace prefix is ReceiptScanner, select **Manage**, and then select **New**.
20.  Under Manage Authenticate Setting Information, enter these values.

     -   Name: Enter Manage Authentication
     -   Audience: Based on your environment, enter one of the values: https://test.salesforce.com/ or https://login.salesforce.com/
     -   Certificate: Enter the certificate name, without the extension
     -   Consumer Key: Enter the consumer key. To get the consumer key, from the App Manager setup, for the Manage Authentication app, select **View**. Under API (Enable OAuth Settings), click **Manage Consumer Details**, enter your credentials, and then copy the consumer key.
     -   Subscriber: Enter the username of the Salesforce admin.
     -   Token Endpoint: Based on your environment, enter one of the values: https://test.salesforce.com/services/oauth2/token or https://login.salesforce.com/services/oauth2/token

21.  Save your changes.

-   [← Previous](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_create_namedcred.htm "Create a Named Credential")
-   [Next →](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_addprogramname.htm "Add a Loyalty Program Name")

## Related Topics

- ← Previous (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_create_namedcred.htm)
- Next → (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_addprogramname.htm)
