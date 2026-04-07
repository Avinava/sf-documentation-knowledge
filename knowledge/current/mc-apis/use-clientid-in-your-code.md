---
title: "Use ClientID in Your Code"
domain: mc-apis
topic: use-clientid-in-your-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:21.051Z
estimatedTokens: 2047
keywords: [ClientID, Code, control, account, Marketing, Cloud, Enterprise, 2.0, Agency, editions, ensure, created, right, specify, client, passed, API, Sample, NET, Authenticate, SOAP, Parent, Partner, Key, Retrieve, Specific, PHP, Envelopes, Perform]
---

> Use ClientID to control which account an object is associated with when using Marketing Cloud Enterprise, Enterprise 2.0, and Agency editions. To ensure the object is created in the right account, specify the client ID on all objects passed into the API.

# Use ClientID in Your Code

Use ClientID to control which account an object is associated with when using Marketing Cloud Enterprise, Enterprise 2.0, and Agency editions. To ensure the object is created in the right account, specify the client ID on all objects passed into the API.

When provisioning an account through the API, you can set a PartnerKey for the account to identify it externally. Reference the PartnerKey in the ClientID object PartnerClientKey property. If you don't associate PartnerKey with the account, use the ClientID objectID property with your account ID as the value.

> Marketing Cloud maintains the PartnerClientKey property for legacy functionality and backwards compatibility. To avoid performance issues, we discourage the use of this property in new code or integrations. Replace this property with ClientID whenever possible.

### Sample .NET Code

#### Authenticate to the SOAP API Using the Parent Account

```
// Initialize the web service proxy
PartnerAPIWse integrationFramework = new PartnerAPIWse();
// Set the username/password.  This is using the Username token of WS-Security 1.0
UsernameTokenProvider utp = new UsernameTokenProvider("username", "password");
integrationFramework.SetClientCredential<UsernameToken>(utp.GetToken());
// Declare the policy
policy = new Policy(new UsernameOverTransportAssertion());
integrationFramework.SetPolicy(policy);
...
```

#### Create an Account with a Partner Key

```
Account account = new Account();
account.Name = "Account " + name;
account.PartnerKey = "12345"; // partner key eases the management of sub-accounts
account.FromName = "Account " + name;
... // Marketing Cloudcreate call
```

#### Create a ClientID

```
ClientID clientId = new ClientID();
// Option #1 - Use Marketing Cloud Account ID
//clientId.ID = 12345;
//clientId.IDSpecified = true;
// Option #2 - Use the partner key you provided for the account
clientId.PartnerClientKey = "12345";
...
```

#### Create a List

```
List list = new List();
list.Client = clientID; // The owner of the list
list.PartnerKey = "121245"; // Your identifier for the list
list.ListName = "Campaign 1";
list.Description = "Subscriber in Campaign 1";
... // Marketing Cloudcreate call
```

#### Retrieve a List from a Specific Account

```
ClientID rrclient = new ClientID();
rrclient.ID = 12345;
rrclient.IDSpecified = true;
rr.Options.Client = rrclient;
... // Retrive the list
```

or

```
ClientID[] clients = new ClientID[1];
clients[0] = new ClientID();
clients[0].ID = 12345;
clients[0].IDSpecified = true;
rr.ClientIDs = clients;
... // Retrive the list
```

### Sample PHP Code

```
<?php
/* Create the Soap Client */
    require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
    try{            $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
            /* Set username and password here */
            $client->username = "XXXXX";
            $client->password = "XXXXX";
                /* point to client level account */
                $objClient = new Marketing Cloud_ClientID();
                $objClient->ID = "12345";// the account ID of the subaccount
                /* set up email template push */
                $objET = new Marketing Cloud_Email();
                $objET->Subject = "Test";
                $objET->Name = DATE("Ymd").'_API';
                $objET->HTMLBody = "<html>Hello World</html>";
                $objET->TextBody = "Hello";
                $objET->IsHTMLPaste = TRUE;
                $objET->CharacterSet = "iso-8859-1";
                //Specifiy the client property on the email object
                $objET->Client = $objClient;
                $object = new SoapVar($objET, SOAP_ENC_OBJECT, 'Email', "http://exacttarget.com/wsdl/partnerAPI");
                $objOpt = new Marketing Cloud_CreateOptions();
                $objOpt->Client = "12345";
            $reqET = new Marketing Cloud_CreateRequest();
                $reqET->Options = $objOpt;
                $reqET->Objects = array($object);
                $resET = $client->Create($reqET);
var_dump($resET);;
    } catch (SoapFault $e) {
        die("Caught SOAP error, failing. ".$e->getMessage());
    }
?>
```

## SOAP Envelopes

Use ClientID in your SOAP calls differently, depending on the method. In each of these examples, notice the unique placement and usage of the Client property in the SOAP body.

### ClientID for Create

```
<CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI" xmlns:ns2="urn:fault.partner.exacttarget.com">
         <Options>
            <RequestType>Asynchronous</RequestType>
         </Options>
         <Objects xsi:type="DataFolder" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <Client>
               <ID>1234567</ID>
            </Client>
            <ModifiedDate xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <CustomerKey>LandingPageExample V2</CustomerKey>
            <ParentFolder>
               <ModifiedDate xsi:nil="true"/>
               <ID>1651427</ID>
               <ObjectID xsi:nil="true"/>
            </ParentFolder>
            <Name>testtest</Name>
            <Description>Words</Description>
            <ContentType>content</ContentType>
            <IsActive>true</IsActive>
            <IsEditable>true</IsEditable>
            <AllowChildren>true</AllowChildren>
         </Objects>
      </CreateRequest>
```

### ClientID for Delete

```
<DeleteRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Objects xsi:type="DataExtensionObject">
            <Client>
               <ID>1234567</ID>
            </Client>
            <CustomerKey>DE_SNKRS_REL_12345-YYY_1WEEK</CustomerKey>
            <Keys>
               <Key>
                  <Name>SubscriberKey</Name>
                  <Value>TRANS_example1@bh.exacttarget.com</Value>
               </Key>
            </Keys>
         </Objects>
      </DeleteRequest>
```

### ClientID for Perform

```
<PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Action>start</Action>
         <Definitions>
            <Definition xsi:type="Automation">
               <Client>
                  <ID>1234567</ID>
               </Client>
               <ObjectID>d3f5e492-f1a9-47be-a510-15b0d8de65d3</ObjectID>
            </Definition>
         </Definitions>
      </PerformRequestMsg>
```

### ClientID for Retrieve

```
<RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ClientIDs>
               <ClientID>1234567</ClientID>
            </ClientIDs>
            <ObjectType>DataFolder</ObjectType>
            <Properties>Client.ID</Properties>
            <Properties>CreatedDate</Properties>
            <Properties>CustomerKey</Properties>
            <Properties>Description</Properties>
            <Properties>ID</Properties>
            <Properties>IsActive</Properties>
            <Properties>Name</Properties>
            <Properties>ObjectID</Properties>
            <Filter xsi:type="SimpleFilterPart">
               <Property>ID</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>69236</Value>
            </Filter>
            <QueryAllAccounts>false</QueryAllAccounts>
         </RetrieveRequest>
      </RetrieveRequestMsg>
```

### ClientID for Update

```
<UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="DataExtension">
            <Client>
               <ID>1234567</ID>
            </Client>
            <partnerkey xsi:nil="true"/>
            <modifieddate xsi:nil="true"/>
            <objectid xsi:nil="true"/>
            <CustomerKey>TSD_BASE_TEMPLATE</CustomerKey>
            <Fields>
               <Field>
                  <partnerkey xsi:nil="true"/>
                  <modifieddate xsi:nil="true"/>
                  <Name>cp_code</Name>
                  <ObjectID>e83ef05e-5487-4252-bb0c-48c0a632db0b</ObjectID>
                  <MaxLength>190</MaxLength>
               </Field>
            </Fields>
         </Objects>
      </UpdateRequest>
```
