---
title: "LimitInfoHeader"
domain: api
topic: limitinfoheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.719Z
estimatedTokens: 245
keywords: [LimitInfoHeader, calls, SOAP, API, limit, organization, monitor, limits, against, Sample, Code]
---

# LimitInfoHeader

> A response header returned from calls to SOAP API. This
            header returns limit information for the organization. Use this header to monitor your
            API limits as you make calls against the organization.

# LimitInfoHeader

A response header returned from calls to SOAP API. This header returns limit information for the organization. Use this header to monitor your API limits as you make calls against the organization.

## API Calls

All calls, except for [login()](atlas.en-us.api.meta/api/sforce_api_calls_login.htm "Logs in to the login server and starts a client session.").

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| current | long | The number of calls for the specified limit type that have already been used in the organization. |
| limit | long | The organization’s limit for the specified limit type. |
| type | string | The type of limit information specified in the header.API REQUESTS— the daily API usage for the organization against which the call was made. |

## Sample Code

This example shows a response to a SOAP request for a Merchandise record. The LimitInfoHeader contains the API usage information for the organization.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns="urn:partner.soap.sforce.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:sf="urn:sobject.partner.soap.sforce.com">
    <soapenv:Header>
        <LimitInfoHeader>
            <limitInfo>
                <current>5</current>
                <limit>100000</limit>
                <type>API REQUESTS</type>
            </limitInfo>
    </soapenv:Header>
    <soapenv:Body>
        <queryResponse>
            <result xsi:type="QueryResult">
                <done>true</done>
                <queryLocator xsi:nil="true"/>
                <records xsi:type="sf:sObject">
                    <sf:type>dev_ns__Merchandise__c</sf:type>
                    <sf:Id>a00D0000008pQSNIA2</sf:Id>
                    <sf:dev_ns__Description__c>Phone Case for iPhone
                        4/4S</sf:dev_ns__Description__c>
                    <sf:dev_ns__Price__c>16.99</sf:dev_ns__Price__c>
                    <sf:dev_ns__Stock_Price__c>12.99</sf:dev_ns__Stock_Price__c>
                    <sf:dev_ns__Total_Inventory__c>108.0</sf:dev_ns__Total_Inventory__c>
                    <sf:Id>a00D0000008pQSNIA2</sf:Id>
                </records>
                <size>1</size>
            </result>
        </queryResponse>
    </soapenv:Body>
</soapenv:Envelope>
```

## Related Topics

- login() (atlas.en-us.api.meta/api/sforce_api_calls_login.htm)
