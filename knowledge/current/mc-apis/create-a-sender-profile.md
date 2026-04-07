---
title: "Create a Sender Profile"
domain: mc-apis
topic: create-a-sender-profile
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.197Z
estimatedTokens: 1051
keywords: [Sender, Profile, specify, email, message, fallback, address, reused, over, several, having, individual, again, verified, verify, Sample, NET, Code, SOAP, Envelope, Items]
---

> You can use a sender profile to specify the From information of an email message and a fallback address. This From information can then be reused over several email sends without having to specify the individual elements again. The fallback address must be a verified email address. To verify email a

# Create a Sender Profile

You can use a sender profile to specify the From information of an email message and a fallback address. This From information can then be reused over several email sends without having to specify the individual elements again. The fallback address must be a verified email address. To verify email addresses, use the REST API domain verification resources.

Use the sample code below as a model to construct your own API calls.

## Sample .NET Code

```apex
public static void createSenderProfile() {
            SoapClient partnerApi = new SoapClient();
            partnerApi.ClientCredentials.UserName.UserName = "username";
            partnerApi.ClientCredentials.UserName.Password = "password";
            //Instantiate SenderProfile and set general properties
            SenderProfile sp = new SenderProfile();
            sp.FromAddress = "reply@example.com";
            sp.FromName = "Example Reply Name";
            sp.CustomerKey = "12345";
            sp.Name = "123456";
            sp.Description = "Used for overriding the RMM settings";
            //optional - override the default RMM
            sp.UseDefaultRMMRules = false;
            sp.UseDefaultRMMRulesSpecified = true;
            //optional - forward the email on with a triggered send (must specify override default RMM)
            TriggeredSendDefinition tsdForward = new TriggeredSendDefinition();
            tsdForward.CustomerKey = "12345";
            sp.AutoForwardTriggeredSend = tsdForward;
            sp.AutoForwardToEmailAddress = "acruz@example";
            sp.AutoForwardToName = "Angel Cruz";
            //optional - send Auto Reply (must specify override default RMM)
            sp.AutoReply = true;
            sp.AutoReplySpecified = true;
            TriggeredSendDefinition tsdAutoReply = new TriggeredSendDefinition();
            tsdAutoReply.CustomerKey = "My_TSD";
            sp.AutoReplyTriggeredSend = tsdAutoReply;
            //create the Sender Profile
            string requestID = string.Empty;
            string status = string.Empty;
            CreateResult[] results = partnerApi.Create(null, new APIObject[] { sp }, out requestID, out status);
            //parse the results for objectID or error
            if (status.ToUpper() == "OK") {
                Console.WriteLine("SenderProfile Created");
                Console.WriteLine("SenderProfile ID: " + results[0].NewObjectID.ToString());
            } else {
                Console.WriteLine("SenderProfile Created");
                Console.WriteLine(results[0].StatusMessage);
            }
        }
```

## Example SOAP Envelope

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
 <soap:Header>
 <wsse:Security soap:mustUnderstand="1">
 <wsse:UsernameToken wsu:Id="SecurityToken-d19fb7b0-ec6d-49a8-8fd3-796819ec7306">
 <wsse:Username>XXXXX</wsse:Username>
 <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
 </wsse:UsernameToken>
 </wsse:Security>
 </soap:Header>
 <soap:Body>
 <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
 <Objects xsi:type="SenderProfile">
 <PartnerKey xsi:nil="true"/>
 <ObjectID xsi:nil="true"/>
 <Name>API Created Sender Profile</Name>
 <CustomerKey>12345</CustomerKey>
 <Description>API Created Sender Profile</Description>
 <FromName>Angel Cruz</FromName>
 <FromAddress>acruz@example.com</FromAddress>
 </Objects>
 </CreateRequest>
 </soap:Body>
</soap:Envelope>
```

## Related Items

-   [What Is a Sender Profile?](https://help.salesforce.com/articleView?id=mc_es_sender_profile.htm&type=5)
-   [Domain Verification REST API: Create Record in an Authenticated Domain](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/domainVerificationCreateDetail.htm)
