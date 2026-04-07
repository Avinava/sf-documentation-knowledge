---
title: "Retrieve the Availability Status of a Marketing Cloud Account"
domain: mc-apis
topic: retrieve-the-availability-status-of-a-marketing-cloud-account
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:23.675Z
estimatedTokens: 1247
keywords: [Retrieve, Availability, Status, Marketing, Cloud, Account, GetSystemStatus, API, call, SOAP, How, Retrieving, System, Container, Scheduled]
---

# Retrieve the Availability Status of a Marketing Cloud Account

> You can use the GetSystemStatus API call to retrieve the status of the Marketing Cloud SOAP API.

# Retrieve the Availability Status of a Marketing Cloud Account

You can use the GetSystemStatus API call to retrieve the status of the Marketing Cloud SOAP API.

Use this call in exception-handling circumstance, NOT prior to every API call. New SOAP faults provide more information on application issues resulting in failed logins.

Take the following actions based on the status of Marketing Cloud:

-   If the GetSystemStatus call returns **OK**, no action is required.
-   If the GetSystemStatus call returns **InMaintenance**, place your application into a queuing mode and periodically make the GetSystemStatus call until the status returns to OK.
-   If the GetSystemStatus call returns **UnplannedOutage**, place your application into a queuing mode, contact Marketing Cloud, and periodically make the GetSystemStatus call until the status returns to OK.

## How to Retrieve the Availability Status of a Marketing Cloud Account

Use the sample code below as a model to set up your own API call. The code uses the GetSystemStatus call, which returns one of the following three result messages:

-   **OK**: All systems are up and running
-   **InMaintenance**: Marketing Cloud systems are in planned maintenance
-   **UnplannedOutage**: Marketing Cloud systems are having an unplanned outage

The SystemStatusResult object contains the applicable message.

### Retrieving the System Status of Marketing Cloud

To properly understand and act upon the system status of Marketing Cloud, your environment must include the following elements:

#### Global Status Container

Your application must include a global Marketing Cloud status container. The value of this container allows your application to change code paths to ensure all messages are stored while waiting for Marketing Cloud's status to return to **OK**. If the global status container contains an **InMaintenance** or **UnplannedOutage** status, be sure to wait for the scheduled status call (described below) to update the global status container to the **OK** status.

#### Scheduled Status Calls

Your application must include a scheduled status-checking component that can respond to error situations and update the global status container if the status is different. Marketing Cloud recommends executing the GetCurrentStatus call every 10 minutes. Don't run the call prior to every API call or every 30 seconds.

#### Exception Handling

Your application must execute the GetSystemStatus call when SOAP exceptions (or other unplanned exceptions) occur in your application. If the GetSystemStatus call returns anything other than**OK**, the API updates the global status container to allow Marketing Cloud to safely respond to the exception scenario.

### Sample Code

```
// 1. Invoke the GetSystemStatus Call
string message;
SystemStatusResult[] results = integrationFramework.GetSystemStatus(null, out status, out message, out requestID);
// 2. Output the Overall Status of the Request
Console.WriteLine("Status: {0}", status);
// 3. Output the Status of the System
foreach (SystemStatusResult result in results)
{
    Console.WriteLine("_________________");
    Console.WriteLine(result.SystemStatus);
}
```

### Output

```
Status: OK
_________________
OK
```

### Sample SOAP Envelope

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <soap:Header>
        <wsa:Action>GetSystemStatus</wsa:Action>
        <wsa:MessageID>urn:uuid:fc2849b5-e480-43a4-ad07-5cb1be9a37c9</wsa:MessageID>
        <wsa:ReplyTo>
            <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
        </wsa:ReplyTo>
        <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
        <wsse:Security soap:mustUnderstand="1">
            <wsse:UsernameToken xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" wsu:Id="SecurityToken-db1066a9-acf1-4f1b-a455-12e721913742">
                <wsse:Username>XXXX</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXX</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <SystemStatusRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
<Options />
        </SystemStatusRequestMsg>
  </soap:Body>
</soap:Envelope>
```

## Related Items

-   [GetSystemStatus Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/getsystemstatus.htm)
-   [SystemStatusResult Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/systemstatusresult.htm)

## Related Topics

- GetSystemStatus Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/getsystemstatus.htm)
- SystemStatusResult Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/systemstatusresult.htm)
