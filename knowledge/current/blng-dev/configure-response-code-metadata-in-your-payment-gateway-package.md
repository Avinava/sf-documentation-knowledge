---
title: "Configure Response Code Metadata in Your Payment Gateway Package"
domain: blng-dev
topic: configure-response-code-metadata-in-your-payment-gateway-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.903Z
estimatedTokens: 651
keywords: [Configure, Code, Metadata, Payment, Gateway, Package, packages, require, custom, file, communicate, Salesforce, Billing, uses, store]
---

# Configure Response Code Metadata in Your Payment Gateway Package

> Payment gateway packages require a custom metadata type file to communicate with
        Salesforce Billing. The custom metadata type defines the custom object and fields that the
        gateway package uses to store request and response information sent from the payment
        gateway. Your custom metadata type file evaluates the value of your gateway package’s custom
        gateway field. Then, the file must convert the gateway field to a value that Salesforce
        Billing sends to the payment transaction’s Status field.

# Configure Response Code Metadata in Your Payment Gateway Package

Payment gateway packages require a custom metadata type file to communicate with Salesforce Billing. The custom metadata type defines the custom object and fields that the gateway package uses to store request and response information sent from the payment gateway. Your custom metadata type file evaluates the value of your gateway package’s custom gateway field. Then, the file must convert the gateway field to a value that Salesforce Billing sends to the payment transaction’s Status field.

The fields used to store gateway request and response values vary between payment gateway packages. Let’s look at a few examples from the custom metadata created for the AuthorizeDotNet, CyberSource, and Payeezy packages. In each, we provide a recommended metadata name.

| Package | Metadata Name | API Names | Field Labels |
| --- | --- | --- | --- |
| AuthorizeDotNet | adnblng__GatewayStatusMApping__mdt | Response from GatewayAdditional Gateway ResponseCorresponding Gateway Status | adnblng_ResponseCode__cadnblng_ResponseCode2__cadnblng__GatewayStatus__c |
| CyberSource | csblng__GatewayStatusMapping__mdt | Response from GatewayCorresponding Gateway Status | csblng_ResponseCode__ccsblng__GatewayStatus__c |
| Payeezy | pyzblng__GatewayStatusMapping__mdt | Response from GatewayCorresponding Gateway Status | pyzblng_ResponseCode__cpyzblng__GatewayStatus__c |

## Example

Cybersource’s response code 100 represents a successful communication with the payment gateway. Let’s look at a metadata file that evaluates the Cybersource gateway package field ResponseCode\_\_c for a value of 100 and then sets the payment transaction’s status field to Success.

```

```

## Example

Some payment gateways return multiple response codes for one gateway transaction. Responses with multiple codes can occur when the gateway processes the transaction successfully but then the customer card provider responds with another value. For example, the AuthorizeDotNet code I00001 indicates that the payment gateway successfully processed a request. However, the card provider can then send a response code of 3, which indicates that the transaction was declined. The provider can also send a response code of 7, which indicates that the credit card expiration date is invalid. Let’s look at metadata samples for processing I00001 - 3 and I00001 - 7 respectively.

In this case, we assign I00001 - 3 to a Salesforce Billing value of Permanent Fail.

```

```

In this case, we assign I00001 - 7 to a Salesforce Billing value of Decline.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>100</label>
    <values>
        <field>ResponseCode__c</field>
        <value xsi:type="xsd:string">100</value>
    </values>
    <values>
        <field>GatewayStatus__c</field>
        <value xsi:type="xsd:string">Success</value>
    </values>
</CustomMetadata>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
<label>I00001-3</label>
     <values>
        <field>ResponseCode__c</field>
        <value xsi:type="xsd:string">I00001</value>
    </values>
    <values>
        <field>ResponseCode2__c</field>
        <value xsi:type="xsd:string">3</value>
    </values>
    <values>
        <field>GatewayStatus__c</field>
        <value xsi:type="xsd:string">PermanentFail</value>
    </values>
</CustomMetadata>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
<label>I00001-2</label>
     <values>
        <field>ResponseCode__c</field>
        <value xsi:type="xsd:string">I00001</value>
    </values>
    <values>
        <field>ResponseCode2__c</field>
        <value xsi:type="xsd:string">2</value>
    </values>
    <values>
        <field>GatewayStatus__c</field>
        <value xsi:type="xsd:string">Decline</value>
    </values>
</CustomMetadata>
```
