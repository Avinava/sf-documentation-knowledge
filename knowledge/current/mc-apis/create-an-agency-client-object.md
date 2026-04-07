---
title: "Create an Agency Client Object"
domain: mc-apis
topic: create-an-agency-client-object
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:21.124Z
estimatedTokens: 978
keywords: [Agency, Client, creating, Why, How, Sample, NET, Code, SOAP, Envelope]
---

# Create an Agency Client Object

> This page contains information  about creating an agency client object.

# Create an Agency Client Object

This page contains information about creating an agency client object.

## Why Create an Agency Client Object

You can create an agency client object if you are an embedded partner who wants to create sub-accounts to your main account.

## How To Create an Agency Client Object

Use the sample code below as a model to create your own API call.

## Sample .NET Code

```apex
/**
* Code to create Sub-Accounts in Marketing Cloud. Applicable to Embedded Clients.
* Account Type is called "Agency-Client" in Code it is PRO_CONNECT_CLIENT
*/
public void CreateAccount()
{
    string strAttributes = "";
    string status = null; // overall status flag
    string requestID = null;
    // '---------------------------------------------
    // '****** CREATINFG NULL ARRAY OF CREATE RESULT.
    CreateResult[] results;
    //'----------------------------------------------
    //'****** CREATING NEW INSTANCE OF ACCOUNT CLASS.
    Account objNewAccount = new Account();
    //'----------------------------------------------------------------
    //'****** SETTING ALL REQUIRED VALUES FOR THE ACCOUNT CREATION.
    objNewAccount.Name = "OMNIE Account";
    objNewAccount.PartnerKey = partnerKey;
    objNewAccount.FromName = "OMNIE Account";
    objNewAccount.BusinessName = "OMNIE Account";
    objNewAccount.Email = "johndoe@example.com";
    objNewAccount.Address = "D - 108, Sector - II";
    objNewAccount.City = "Chicago";
    objNewAccount.State = "IL";
    objNewAccount.Zip = "20130";
        objNewAccount.EditionID = 3; //EditionID for Agency Edition
        objNewAccount.EditionIDSpecified = true;
    objNewAccount.AccountType = AccountTypeEnum.PRO_CONNECT_CLIENT;
    try
    {
        // '****** SENDING REQUEST TO THE EXACT TARGET TO CREATE THE ACCOUNT.
        results = soapClient.Create(null, new APIObject[] {
        objNewAccount} , out requestID, out status);
        Console.WriteLine(status);
        Console.WriteLine(results[0].StatusCode.ToString());
        Console.WriteLine(results[0].StatusMessage.ToString());
        Console.WriteLine(results[0].ErrorCode.ToString());
        Console.WriteLine(results[0].NewID.ToString());
    }
    catch (Exception e)
    {
        Console.WriteLine(e.Message);
    }
}
```

## Sample SOAP Envelope

```
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
        <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
        <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <o:UsernameToken u:Id="uuid-b82c6428-caa1-49fc-986b-dc613c990c49-1">
                <o:Username>
                    <!-- Removed-->
                </o:Username>
                <o:Password>
                    <!-- Removed-->
                </o:Password>
            </o:UsernameToken>
        </o:Security>
    </s:Header>
    <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
<CreateRequest xmlns = "http://exacttarget.com/wsdl/partnerAPI">
    <Options></Options>
    <Objects xsi:type = "Account">
        <PartnerKey xsi:nil="true />
        <ObjectID xsi:nil = "true" />
              <EditionID>3</EditionID>
        <AccountType>PRO_CONNECT_CLIENT</AccountType>
        <Name>Sub Account Name</Name>
        <Email>example@example.com</Email>
        <FromName>From Name</FromName>
        <BusinessName>Business Name</BusinessName>
        <Address>20 North Meridian Street</Address>
        <City>Indianapolis</City>
        <State>IN</State>
        <Zip>46204</Zip>
   </Objects>
</CreateRequest>
    </s:Body>
</s:Envelope>
```
