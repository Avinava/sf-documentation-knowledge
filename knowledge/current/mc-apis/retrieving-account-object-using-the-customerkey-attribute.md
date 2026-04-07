---
title: "Retrieving Account Object Using The CustomerKey Attribute"
domain: mc-apis
topic: retrieving-account-object-using-the-customerkey-attribute
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.584Z
estimatedTokens: 1922
keywords: [Retrieving, Account, CustomerKey, Attribute, Why, Retrieve, How, Sample, NET, Code, Java, Axis, 1.4, PHP, SOAP]
---

# Retrieving Account Object Using The CustomerKey Attribute

> This page contains information  about retrieving the Account object using the CustomerKey attribute.

# Retrieving Account Object Using The CustomerKey Attribute

This page contains information about retrieving the Account object using the CustomerKey attribute.

## Why Retrieve the Account Object Using the CustomerKey Attribute

You can use the CustomerKey attribute to retrieve an account using the identifier that you specified for the account. The CustomerKey value is API-specific. The information is not mandated by or available in Marketing Cloud.

## How To Retrieve the Account Object Using the CustomerKey Attribute

Use the sample code below as a model to construct your own API calls.

### Sample .NET Code

```apex
/**
* Code to retrieve Account object using CustomerKey
*/
public void testGetAccountDetailsUsingCustomerKey()
{
    RetrieveRequest retrieveRequest = new RetrieveRequest();
    retrieveRequest.ObjectType = "Account"; //Object Type to retrieve

    String[] props = {"Name", "ID", "AccountType"};
    retrieveRequest.Properties = props;
    retrieveRequest.QueryAllAccounts=true;
    retrieveRequest.QueryAllAccountsSpecified = true; //scans all sub-Accounts of parent-Account
    //Query filter using Simplefilter.
    SimpleFilterPart filterPart = new SimpleFilterPart();
    filterPart.Property="CustomerKey";
    String[] values = { "GM_DLEAR_123" };
    filterPart.Value=values;
    filterPart.SimpleOperator=SimpleOperators.equals;
    retrieveRequest.Filter=filterPart;
    APIObject[] results = null;
    String requestId = null;
    String response = soapClient.Retrieve(retrieveRequest, out requestId,
    out results);
    Account account = null;
    if (response != null && response.ToLower().Equals("ok"))
    {
       if (results != null)
        {
        account = (Account)results[0];
        Console.WriteLine("Account Name ### " + account.Name);
        Console.WriteLine("Account.ID"  + account.ID);
        }
    }
}
```

### Sample Java Code (Axis 1.4)

```apex
/**
* Retrieves account object with simple-filter and by using CustomerKey of account.
*
* @return Account object
* @throws java.rmi.RemoteException
*/
public Account retrieveAccountByCustomerKey() throws RemoteException {
    Soap stub = init();
    RetrieveRequest request = new RetrieveRequest();
    request.setObjectType("Account");
    String[] stringArray = { "ID", "AccountType", "Name","FromName","BusinessName"};
    request.setProperties(props);
    request.setQueryAllAccounts(true); //scans all sub-Accounts of parent-Account
    //Query filter using Simplefilter.
    SimpleFilterPart filterPart = new SimpleFilterPart();
    filterPart.setProperty("CustomerKey");
    String[] values = {"CustomerKey_subaccount_1"};
    filterPart.setValue(values);
    filterPart.setSimpleOperator(SimpleOperators.equals);
    request.setFilter(filterPart);
    RetrieveRequestMsg requestMsg = new RetrieveRequestMsg();
    requestMsg.setRetrieveRequest(request);
    RetrieveResponseMsg responseMsg = stub.retrieve(requestMsg);  //Soap call to request Account object
    assertNotNull(responseMsg);
    assertNotNull(responseMsg.getResults(0));
    Account account = (Account) responseMsg.getResults(0);
    return account;
}
public void testRetrieveAccountByCustomerKey() throws RemoteException {
    Soap stub = init();
    RetrieveRequest request = new RetrieveRequest();
    request.setObjectType("Account");
    String[] props = getRetrievableObjectFieldNames(stub, "Account");
    request.setProperties(props);
    request.setQueryAllAccounts(true); //scans all sub-Accounts of parent-Account
    //Query filter using Simplefilter.
    SimpleFilterPart filterPart = new SimpleFilterPart();
    filterPart.setProperty("CustomerKey");
    String[] values = {"CustomerKey_subaccount_2"}; //ID = {java.lang.Integer@2338}"81711"
    filterPart.setValue(values);
    filterPart.setSimpleOperator(SimpleOperators.equals);
    request.setFilter(filterPart);
    RetrieveRequestMsg requestMsg = new RetrieveRequestMsg();
    requestMsg.setRetrieveRequest(request);
    RetrieveResponseMsg responseMsg = stub.retrieve(requestMsg);  //Soap call to request Account object
    assertNotNull(responseMsg);
    assertNotNull(responseMsg.getResults(0));
    Account account = (Account) responseMsg.getResults(0);
    }
}
```

### Sample PHP Code

```
<!--?php
//Code thoughtfully provided by Nick Holdren of FanMail Marketing
require('exacttarget_soap_client.php');
//SOAP API endpoint
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
    /* Create the Soap Client */
    $client = new Marketing CloudSoapClient($wsdl, array('trace'=-->1));
    /* Set username and password here */
    $client->username = 'username';
    $client->password = 'password';
    $rr = new Marketing Cloud_RetrieveRequest();
    $rr->ObjectType = 'Account';
    //Set the properties to return
    $props = array('Name', 'ID', 'AccountType');
    $rr->Properties = $props;
    //Set which accounts to return
    $rr->QueryAllAccounts = true;
    $rr->QueryAllAccountsSpecified = true;
    //Setup account filtering, to look for a given account MID
    $filterPart = new Marketing Cloud_SimpleFilterPart();
    $filterPart->Property = 'CustomerKey';
    $values = array('GM_DLEAR_123');
    $filterPart->Value = $values;
    $filterPart->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
    //Encode the SOAP package
    $filterPart = new SoapVar($filterPart, SOAP_ENC_OBJECT,'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
    //Set the filter to NULL to return all MIDs, otherwise set to filter object
    $rr->Filter = NULL; //$rr->Filter = $filterPart;
    //Setup and execute request
    $rrm = new Marketing Cloud_RetrieveRequestMsg();
    $rrm->RetrieveRequest = $rr;
    $results = $client->Retrieve($rrm);
    var_dump($results);
} catch (SoapFault $e) {
    var_dump($e);
}
?>
```

### Sample SOAP Envelope

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-24440876" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>ccc</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">ccc</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>Account</ObjectType>
            <Properties>CustomerKey</Properties>
            <Properties>Name</Properties>
            <Properties>ID</Properties>
            <Properties>EditionID</Properties>
            <Properties>FromName</Properties>
            <Properties>AccountType</Properties>
            <Properties>AccountType</Properties>
            <Properties>ObjectState</Properties>
            <Properties>Locale.LocaleCode</Properties>
            <Properties>ParentID</Properties>
            <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
               <Property>CustomerKey</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>GM_DLEAR_123</Value>
            </Filter>
            <QueryAllAccounts>true</QueryAllAccounts>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```
