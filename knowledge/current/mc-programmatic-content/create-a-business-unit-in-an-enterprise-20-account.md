---
title: "Create a Business Unit in an Enterprise 2.0 Account"
domain: mc-programmatic-content
topic: create-a-business-unit-in-an-enterprise-20-account
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:27.520Z
estimatedTokens: 810
keywords: [Business, Unit, Enterprise, 2.0, Account, sample, code, posts, SOAP, envelope, API, application, uses, call]
---

# Create a Business Unit in an Enterprise 2.0 Account

> This sample code posts a SOAP envelope to the SOAP API. The application uses the information in that SOAP envelope within the API call to create the business unit.

# Create a Business Unit in an Enterprise 2.0 Account

This sample code posts a SOAP envelope to the SOAP API. The application uses the information in that SOAP envelope within the API call to create the business unit.

```
<script language=javascript runat=server>
Platform.Load("core", "1");
var buName="testbu";
var payload="";
var endpoint="https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx";
var username = "XXXXX";
var password = "XXXXX";
var parentId = 123456
payload += '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">';
payload += '       <soap:Header>';
payload += '          <wsa:Action>CreateRequest</wsa:Action>';
payload += '          <wsa:MessageID>MessageID</wsa:MessageID>';
payload += '          <wsa:ReplyTo>';
payload += '            <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>';
payload += '          </wsa:ReplyTo>';
payload += '          <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>';
payload += '          <wsse:Security soap:mustUnderstand="1">';
payload += '            <wsse:UsernameToken xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" wsu:Id="SecurityToken-db1066a9-acf1-4f1b-a455-12e721913742">';
payload += '              <wsse:Username>' + username + '</wsse:Username>';
payload += '              <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + password + '</wsse:Password>';
payload += '            </wsse:UsernameToken>';
payload += '          </wsse:Security>';
payload += '        </soap:Header>';
payload += '   <soap:Body>';
payload += '      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">';
payload += '         <Options/>';
payload += '         <Objects xsi:type="BusinessUnit" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">';
payload += '            <AccountType>BUSINESS_UNIT</AccountType>';
payload += '            <CustomerKey>' + buName + '</CustomerKey>';
payload += '            <Name>' + buName + '</Name>';
payload += '            <ParentID>' + parentId + '</ParentID>';
payload += '            <Address>123 Main St.</Address>';
payload += '            <City>Indianapolis</City>';
payload += '            <State>IN</State>';
payload += '            <Zip>46202</Zip>';
payload += '            <FromName>Test BU</FromName>';
payload += '            <Email>help@example.com</Email>';
payload += '         </Objects>';
payload += '      </CreateRequest>';
payload += '   </soap:Body>';
payload += '</soap:Envelope>';

var result = HTTP.Post(endpoint,"text/xml",payload,null,null);
if (result.StatusCode != 200){
    //Bad response
    Write("Error:
" + Stringify(result.Response));
}
//else
{
    //Good response
    Write("Business Unit Successfully Created");
}
</script>
```
