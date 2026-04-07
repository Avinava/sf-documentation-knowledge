---
title: "Retrieve All Lists for a Send"
domain: mc-apis
topic: retrieve-all-lists-for-a-send
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.602Z
estimatedTokens: 763
keywords: [Retrieve, Send, retrieving, Why, How, Sample, NET, Code, Output]
---

# Retrieve All Lists for a Send

> This page contains information  about retrieving all lists for a send.

# Retrieve All Lists for a Send

This page contains information about retrieving all lists for a send.

## Why Retrieve All Lists for a Send

By retrieving all lists for a specific send, you can understand which lists and which subscribers received the send.

## How To Retrieve All Lists for a Send

Use the sample code below as an example for constructing your own API call.

### Sample .NET Code

```apex
// Specify the SendID SimpleFilterPart listSendFilter = new SimpleFilterPart();
listSendFilter.Property = "SendID";
listSendFilter.SimpleOperator = SimpleOperators.equals;
listSendFilter.Value = new string[] { "2057" };
// Create the RetrieveRequest
RetrieveRequest request = new RetrieveRequest();
request.ObjectType = "ListSend";
request.Filter = listSendFilter;
request.Properties = new string[] { "Client.ID", "SendID", "List.ID", "List.ListName", "Duplicates", "InvalidAddresses", "ExistingUndeliverables", "ExistingUnsubscribes", "HardBounces", "SoftBounces", "OtherBounces", "ForwardedEmails", "UniqueClicks", "UniqueOpens", "NumberSent", "NumberDelivered", "Unsubscribes", "MissingAddresses" };
// Execute the Retrieve
APIObject[] results;
string requestID;
string status = integrationFramework.Retrieve(request, out requestID, out results);
// Output the results
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("List Send Summary");
sb.AppendFormat("
Overall result: {0}.  RequestID: {1}", status, requestID);
// Print out results for each object retrieved
for (int cntr = 0; cntr < results.Length; cntr++)
{
       sb.Append(string.Format("
 ---- Index {0}", cntr));
       ListSend id = results[cntr] as ListSend;
       sb.Append("
 Duplicates: " + id.Duplicates);
       sb.Append("
 ExistingUndeliverables: " + id.ExistingUndeliverables);
       sb.Append("
 ExistingUnsubscribes: " + id.ExistingUnsubscribes);
       sb.Append("
 ForwardedEmails: " + id.ForwardedEmails);
       sb.Append("
 HardBounces: " + id.HardBounces);
       sb.Append("
 InvalidAddresses: " + id.InvalidAddresses);
       sb.Append("
 MissingAddresses: " + id.MissingAddresses);
       sb.Append("
 NumberDelivered: " + id.NumberDelivered);
       sb.Append("
 NumberSent: " + id.NumberSent);
       sb.Append("
 OtherBounces: " + id.OtherBounces);
       sb.Append("
 SendID: " + id.SendID);
       sb.Append("
 SoftBounces: " + id.SoftBounces);
       sb.Append("
 UniqueClicks: " + id.UniqueClicks);
       sb.Append("
 UniqueOpens: " + id.UniqueOpens);
       sb.Append("
 Unsubscribes: " + id.Unsubscribes);
       sb.Append("
 List Name: " + id.List.ListName);
       sb.Append("
");
}
Console.WriteLine(sb.ToString());
```

### Output

```
List Send Summary Overall result: OK.
RequestID: 0feb70b2-f73b-4b85-b012-96b0c855407f  ----  Index 0
Duplicates: 0ExistingUndeliverables: 0
ExistingUnsubscribes: 0
ForwardedEmails: 0
HardBounces: 0
InvalidAddresses: 0
MissingAddresses: 0
NumberDelivered: 4
NumberSent: 4
OtherBounces: 0
SendID: 2057
SoftBounces: 0
UniqueClicks: 1
UniqueOpens: 0
Unsubscribes: 1
List Name: Me
```
