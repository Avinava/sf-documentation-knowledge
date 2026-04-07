---
title: "SOAP Faults"
domain: mc-apis
topic: soap-faults
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:20.359Z
estimatedTokens: 1342
keywords: [SOAP, Faults, regarding, occur, reasons, addressed, error, messages, below, Fault, Schema, Server, Security, Client, Unplanned, Outage, Authentication, Login, Unexpected, Exception, Passing, Credentials, Authorization, Filter, Caused, System, Inaccessible, User, Authorized, User's, Account, Had, Web, Service, Feature, Activated, Missing, Action, Determined, HTTP, Unsupported, Always, Operation, Message, Maintenance, Member, Synchronous, Cannot, Requested]
---

> This page contains information regarding SOAP faults. These faults can occur for reasons addressed in the error messages details below.

# SOAP Faults

This page contains information regarding SOAP faults. These faults can occur for reasons addressed in the error messages details below.

## What Are SOAP Faults

SOAP faults reflect errors encountered when you send SOAP calls via the SOAP API to Marketing Cloud These faults indicate that the call was not completed successfully and give the reason why the error occurred.

## SOAP Fault Schema

You can review the framework for a SOAP fault via the SOAP API WSDL at [https://webservice.exacttarget.com/ETFrameworkFault.xsd](https://webservice.exacttarget.com/ETFrameworkFault.xsd). The SOAP API returns error codes for Server faults and logs the appropriate error information. However, the SOAP API does not return error codes or log error information for Security and Client errors.

### Server Fault Example

```
<soap:Fault>
    <faultcode>soap:Server</faultcode>
    <faultstring>Unplanned Outage</faultstring>
    <faultactor>http://localhost/PartnerAPI/Service.asmx</faultactor>
    <detail>
        <apifault xmlns="urn:fault.partner.exacttarget.com" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <Code>2</Code>
            <Message>Unplanned Outage</Message>
        </apifault>
    </detail>
</soap:Fault>
```

The Detail node appears only in Server faults. Only Server faults include an API fault structure.

### Security Fault Example

```
<soap:Fault>
    <faultcode xmlns:q0 = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">q0:Security</faultcode>
    <faultstring>Login failed</faultstring>
    <faultactor>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</faultactor>
</soap:Fault>
```

### Client Fault Example

```apex
<soap:Body>
    <soap:Fault>
        <faultcode>soap:Client</faultcode>
        <faultstring>Server did not recognize the value of HTTP Header SOAPAction: Test.</faultstring>
        <detail />
    </soap:Fault>
</soap:Body>
```

## SOAP Faults

The following examples include the SOAP fault, the error code, and the reason for the fault.

### Unplanned Outage

This general exception indicated that the server cannot process the requests because the servers are offline.

#### Authentication (Login has an Unexpected Exception)

-   Server Fault
-   Code: UnexpectedError = 2

#### Unexpected Error Passing Authentication Credentials to Authorization Filter

-   Server Fault
-   Code: UnexpectedError = 2

#### Caused By a Request When System is Inaccessible

-   Server Fault
-   Code: UnexpectedError = 2

### User Not Authorized

The following example indicates the user does not have the proper authorization to use the SOAP API.

#### The User's Access Has Not Been Set

-   Client Fault
-   Code: AuthorizationFailure = 11
-   Resolved by enabling web service permissions for the user

### Account Not Authorized

The following example indicates the user's account is in authorized to access the SOAP API.

#### The Account Has Not Had the Web Service Feature Activated

-   Client Fault
-   Code: AuthorizationFailure = 11
-   Resolved by contacting a Marketing Cloud representative and activating the SOAP API

### Missing SOAP Action

The following example indicates the SOAP API cannot determine the SOAP action in the call. The system expects the SOAP action as an HTTP header or WS-Addressing:Action.

#### SOAP Action Could Not Be Determined From HTTP or SOAP Header

-   Client Fault
-   Code: UnexpectedError = 2
-   Resolved by including appropriate SOAP header
-   Normally not an issue for requests generated in .NET or Axis framework

### Unsupported Objects for Always On Operation

The following examples indicate that arequest made to objects not authorized to be processed by the allowed operation during maintenance. The system checks every request for an account in maintenance mode to see if the operation requested is flagged as always on. If the request is allowed, the system performs a second check to validate the objects being requested to be processed. If any of the objects are not allowed to be processed by an always on operation during maintenance, the system rejects the whole request and returns a fault.

#### Error Message

Member: \[{0}\] is In Maintenance. The operation: \[{1}\] is authorized to process or queue while in maintenance however the object or objects: \[{2}\] are not. Please remove objects from request and try again or resubmit request once the member is out of maintenance state.

-   Client Fault
-   Code: UnsupportedObject = 8
-   Resolved by removing the objects causing the exception and resubmitting the call or waiting until maintenance is over.

### In Maintenance

The system processes only Always On requests while in maintenance. It rejects all other objects and returns an In Maintenance fault.

#### Request an Operation While Member is in Maintenance

-   Server Fault
-   Code: InMaintenance = 9

### Synchronous Request Cannot Be Requested

The system cannot receive synchronous requests at the time and returns this error.

#### Error Message

Synchronous request cannot be completed at this time due to database problems. This request was not processed.

-   Client Fault
-   Code: RemoteDBConnDetected\_SyncAPICallUnsupported= 1
-   Resolved by waiting for database connection or resubmitting request asynchronously
