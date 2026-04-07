---
title: "Scenarios"
domain: mc-apis
topic: scenarios
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:24.828Z
estimatedTokens: 857
keywords: [Scenarios, sample, code, Marketing, Cloud, AppExchange, API, Calls, Call, Re-subscribe, SOAP]
---

# Scenarios

> This section provides sample code related to Marketing Cloud for AppExchange API.

# Scenarios

## Sample Code for Marketing Cloud for AppExchange API Calls

This section provides sample code related to Marketing Cloud for AppExchange API.

### Sample Create Call

```
// Action: Create SalesforceSend object
CreateResult[] results = etForAppx.Create(new CreateOptions(), new APIObject[] { sfs }, out requestID, out status);
```

This code sample represents the create call, and it executes one Salesforce send. Note the following aspects about this call:

-   Default CreationOptions properties are used.
-   One or many SalesforceSend or Email objects can be created with a single Create call.
-   One CreateResult object is associated with one APIObject - in this case, a SalesforceSend object.
-   Returned "out" parameters are subject to your development environment. In .NET, they are exposed as parameters on the Create call.

### Sample Re-subscribe Call

```apex
private void Activate()
{
Console.WriteLine("updating sf subscriber");
int subTypeID = -1;
string status = null;
string rid = null;
PartnerAPI.Subscriber wsdlSub = new PartnerAPI.Subscriber();
//set the 18 digit SF ID
wsdlSub.SubscriberKey = "0037000000UyRdo";
//set the status to active
wsdlSub.Status = SubscriberStatus.Active;
wsdlSub.StatusSpecified = true;
//set the subscriber Type
PartnerAPI.SubscriberTypeDefinition std = new PartnerAPI.SubscriberTypeDefinition();
std.SubscriberType = "salesforcecontact"; //"salesforcelead"
wsdlSub.SubscriberTypeDefinition = std;
wsdlSub.IDSpecified = false;
wsdlSub.Client = new ClientID();
wsdlSub.Client.ID = 3069; //wsdlSub.Client.UserID = objPrincipal.EmployeeID; PartnerAPI.ServiceWse partnerAPI = new PartnerAPI.ServiceWse();
UsernameTokenProvider utp = new UsernameTokenProvider("etsfdev2", "xxxx"); partnerAPI.SetClientCredential<UsernameToken>(utp.GetToken());
Policy policy = new Policy(new UsernameOverTransportAssertion());
partnerAPI.SetPolicy(policy);
partnerAPI.Timeout = -1;
UpdateResult[] results = partnerAPI.Update(new PartnerAPI.UpdateOptions(), new PartnerAPI.APIObject[] { wsdlSub }, out rid, out status);
for (int cntr = 0; cntr < results.Length; cntr++)
{
Console.WriteLine(string.Format("Results for object {0}: Status code: {1}. Message: {2}.", cntr, results[cntr].StatusCode, results[cntr].StatusMessage));
}
Console.ReadLine();
}
```

### Sample SOAP API Call

```
//1. Create email
Email email = new Email();
email.ID = 3079342;
email.IDSpecified = true;
//2. Specify target recipients
Target report = new Target();
report.ObjectID = "00O60000001PWEa";
report.ObjectType = ObjectTypes.Report;
//3. Specify target recipients to exclude from the send
Target reportExclude = new Target();
reportExclude.ObjectID = "00O60000001PWEc";
reportExclude.ObjectType = ObjectTypes.Report;
// 4. Create Salesforce send object
SalesforceSend sfs = new SalesforceSend();
sfs.Email = email;
sfs.Targets = new Target[] { report };
sfs.Exclusions = new Target[] { reportExclude };
sfs.FromName = "Lead/Contact Owner Name"; // Use CRM Record owner from from address and name
sfs.SendDate = DateTime.UtcNow.Add(3); // Use UTC time for Scheduling sends
//5. Use Create call to initiate the send
CreateResult[] results = etForAppx.Create(new CreateOptions(), new APIObject[] { sfs }, out requestID, out status);
//6. Print out overall results
Console.WriteLine(string.Format("Overall result: {0}. RequestID: {1}. Result Message: {2}", status, requestID, results[0].StatusMessage));
```
