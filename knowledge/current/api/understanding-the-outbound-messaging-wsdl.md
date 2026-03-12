---
title: "Understanding the Outbound Messaging WSDL"
domain: api
topic: understanding-the-outbound-messaging-wsdl
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:57.814Z
estimatedTokens: 535
keywords: [Understanding, Outbound, Messaging, WSDL, rest, topic, examines, relevant, sections, differ, depending, choices, made, particular, event]
---

# Understanding the Outbound Messaging WSDL

> The rest of this topic examines relevant sections of the outbound messaging WSDL. Your
            WSDL can differ, depending on the choices you made when you set up outbound messaging
            for a particular event on a particular object.

# Understanding the Outbound Messaging WSDL

The rest of this topic examines relevant sections of the outbound messaging WSDL. Your WSDL can differ, depending on the choices you made when you set up outbound messaging for a particular event on a particular object.

## notifications()

This section defines the notifications() call, which creates an outbound message containing specified fields and values for a particular object or objects, and sends the values to a specified endpoint URL:

```

```

Use this table to understand the elements named in the notifications method definition:

| Name | Type | Description |
| --- | --- | --- |
| OrganizationId | ID | ID of the organization sending the message. |
| ActionId | string | The workflow rule (action) that triggers the message. |
| SessionId | string | Optional, a session ID to be used by endpoint URL client that is responding to the outbound message. It’s used by the receiving code to make calls back to Salesforce. |
| EnterpriseURL | string | URL to use to make API calls back to Salesforce using the enterprise WSDL. |
| PartnerURL | string | URL to use to make API calls back to Salesforce using the partner WSDL. |
| Notification | Notification | Defined in the next section, contains the object datatype and its Id, for example OpportunityNotification or ContactNotification. |

The Notification datatype is defined in the WSDL. In the following example, a Notification for opportunities is defined, based on the Notification entry of the [notifications()](#i1473596) call definition:

```

```

Each object element (in our example, opportunities) contains the subset of the fields that you selected when you [created the outbound message](atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_setting_up.htm#api_om_defining). Each message Notification also has the object ID. Use the object ID to track redelivery attempts of notifications you've already processed.

## notificationsResponse

This element is the schema for sending an acknowledgment (ack) response to Salesforce.

```

```

You acknowledge all notifications in the message if there’s more than one.

## Code Examples

```
<schema elementFormDefault="qualified" xmlns="http://www.w3.org/2001/XMLSchema" 
         targetNamespace="http://soap.sforce.com/2005/09/outbound">
            <import namespace="urn:enterprise.soap.sforce.com" />
            <import namespace="urn:sobject.enterprise.soap.sforce.com" />
    
            <element name="notifications">
                <complexType> 
                    <sequence> 
                        <element name="OrganizationId" type="ent:ID" />
                        <element name="ActionId" type="ent:ID" />
                        <element name="SessionId" type="xsd:string" nillable="true" />
                        <element name="EnterpriseUrl" type="xsd:string" />
                        <element name="PartnerUrl" type="xsd:string" />
                        <element name="Notification" maxOccurs="100" 
                          type="tns:OpportunityNotification" />
                    </sequence> 
                </complexType> 
            </element>
        </schema>
```

```
<complexType name="OpportunityNotification">
                <sequence>
                    <element name="Id" type="ent:ID" />
                    <element name="sObject" type="ens:Opportunity" />
                </sequence>
            </complexType>
```

```
<element name="notificationsResponse">
                <complexType>
                    <sequence>
                        <element name="Ack" type="xsd:boolean" />
                    </sequence>
                </complexType>
            </element> //This section is the last in the types definition section.
```

## Related Topics

- created the outbound message (atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_setting_up.htm)
