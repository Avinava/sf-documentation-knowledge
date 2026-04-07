---
title: "Create an Account"
domain: mc-apis
topic: create-an-account
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.255Z
estimatedTokens: 1475
keywords: [Account, agency, embedded, partner, may, want, another, new, client, specify, attributes, including, How, Sample, NET, Code, SOAP, Envelope]
---

> As an agency or embedded partner, you may want to create another account for a new client. You can specify the attributes of the account when you create the account, including the following elements:

# Create an Account

As an agency or embedded partner, you may want to create another account for a new client. You can specify the attributes of the account when you create the account, including the following elements:

-   Account Name
-   Account Type (specified by the [AccountTypeEnum](atlas.en-us.noversion.mc-apis.meta/mc-apis/accounttypeenum.htm "AccountTypeEnum") values)
-   Default Display Name
-   Default From Email Address
-   Physical Mailing Address

## How to Create an Account

Use the sample code below as a model for your own API call.

### Sample .NET Code

```apex
private void CreateAccount()
        {
            SoapClient framework = new SoapClient();
            framework.ClientCredentials.UserName.UserName = "XXXXX";
            framework.ClientCredentials.UserName.Password = "XXXXX";
            String requestID;
            String status;
            Account acct = new Account();
            acct.CustomerKey = "Example Client";
            acct.AccountType = AccountTypeEnum.PRO_CONNECT_CLIENT;
            acct.Name = "Account Name";
            acct.Email = "testAccount@example.com";
            acct.FromName = "AGENCY CLIENT";
            acct.BusinessName = "AGENCY CLIENT";
            acct.Address = "123 ABC Street";
            acct.City = "Indianapolis";
            acct.State = "IN";
            acct.Zip = "46202";
            acct.IsTestAccount = true;
            acct.IsTestAccountSpecified = true;
            acct.EditionID = 3;
            acct.EditionIDSpecified = true;
            acct.IsActive = 1;
            acct.IsActiveSpecified = true;
            CreateOptions co = new CreateOptions();
            CreateResult[] cresults = framework.Create(co, new APIObject[] { acct }, out requestID, out status);
            foreach (CreateResult result in cresults)
            {
                Console.WriteLine(result.StatusMessage);
            }
            Console.WriteLine(requestID + ": " + status);
            //Readline pauses the output so you can see the results
            Console.ReadLine();
        }
```

### Sample SOAP Envelope

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <a:Action s:mustUnderstand="1">Create</a:Action>
      <a:MessageID>urn:uuid:5dfca442-f1a0-4f7c-9419-8ace5658d2a3</a:MessageID>
      <a:ReplyTo>
         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
      </a:ReplyTo>
      <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <o:UsernameToken u:Id="uuid-88b91f91-bac2-489b-90fb-37e7b256e20c-1">
            <o:Username>XXXXX</o:Username>
            <o:Password>XXXXX</o:Password>
         </o:UsernameToken>
      </o:Security>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options>
            <SaveOptions>
               <SaveOption>
                  <PropertyName>*</PropertyName>
                  <SaveAction>UpdateAdd</SaveAction>
               </SaveOption>
            </SaveOptions>
         </Options>
         <Objects xsi:type="Account">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <AccountType>PRO_CONNECT_CLIENT</AccountType>
            <Name>SampleAccount</Name>
            <Email>help@example.com</Email>
            <FromName>My Sample Account</FromName>
            <BusinessName>Northern Trail Outfitters</BusinessName>
            <Address>123 Main St.</Address>
            <City>Indianapolis</City>
            <State>IN</State>
            <Zip>46202</Zip>
            <IsActive>1</IsActive>
            <IsTestAccount>false</IsTestAccount>
            <EditionID>3</EditionID>
            <Subscription xsi:nil="true"/>
         </Objects>
      </CreateRequest>
   </s:Body>
</s:Envelope>
```

Once you create the account, you can modify the name, mailing address, or other account properties:

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>Update</wsa:Action>
      <wsa:MessageID>urn:uuid:5c2b51ff-c1c3-4d5a-a76e-bc9c3438611b</wsa:MessageID>
      <wsa:ReplyTo>
         <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
      </wsa:ReplyTo>
      <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
      <wsse:Security soap:mustUnderstand="1">
         <wsse:UsernameToken wsu:Id="SecurityToken-35c067d1-5207-43f5-8172-bd0e60bf7e82">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Objects xsi:type="Account">
            <PartnerKey/>
            <ID>12345</ID>
            <ObjectID xsi:nil="true"/>
            <Name>New Subaccount Name</Name>
         </Objects>
      </UpdateRequest>
   </soap:Body>
</soap:Envelope>
```

## Related Topics

- AccountTypeEnum (atlas.en-us.noversion.mc-apis.meta/mc-apis/accounttypeenum.htm)
