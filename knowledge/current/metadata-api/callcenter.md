---
title: "CallCenter"
domain: metadata-api
topic: callcenter
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:37.489Z
estimatedTokens: 1279
keywords: [CallCenter, Represents, Call, Center, definition, used, integrate, Salesforce, third-party, computer-telephony, integration, CTI, system, partner, telephony, Contact, Service, CCaaS, system., Parent]
---

# CallCenter

> Represents the Call Center definition used to integrate Salesforce with
            a third-party computer-telephony integration (CTI) system, a partner telephony system, or partner Contact Center as a Service (CCaaS) system.

# CallCenter

Represents the Call Center definition used to integrate Salesforce with a third-party computer-telephony integration (CTI) system, a partner telephony system, or partner Contact Center as a Service (CCaaS) system.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CallCenter components have the suffix .callCenter and are stored in the callCenters folder.

## Version

CallCenter components are available in API version 27.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| adapterUrl | Field TypestringDescriptionOptional field. A URL that points to an adapter. |
| contactCenterChannels | Field TypeContactCenterChannel[]DescriptionRelates Bring Your Own Channel for Contact Center as a Service (CCaaS) messaging channels to a CallCenter and represents the routing details for a voicemail configuration. |
| displayName | Field TypestringDescriptionRequired.The display name of this call center. |
| displayNameLabel | Field TypestringDescriptionRequired.The label of the displayName field in Call Center setup page. |
| internalNameLabel | Field TypestringDescriptionRequired.The label of the internalName field in Call Center setup page. |
| sections | Field TypeCallCenterSection[]DescriptionCustom setup items defined for this call center. |
| version | Field TypestringDescriptionThe version of this call center. |

## CallCenterSection

| Field Name | Description |
| --- | --- |
| items | Field TypeCallCenterItem[]DescriptionContains the label, name, and value that describe the sections. |
| label | Field TypestringDescriptionRequired.The label of the section. |
| name | Field TypestringDescriptionRequired.The name of the section. |

## CallCenterItem

| Field Name | Description |
| --- | --- |
| label | Field TypestringDescriptionRequired.The label of the custom setup item. |
| name | Field TypestringDescriptionRequired.The name of the custom setup item. |
| value | Field TypestringDescriptionRequired.The value of the custom setup item. |

## ContactCenterChannel

Represents a junction subtype that relates a Bring Your Own Channel for Contact Center as a Service (CCaaS) messaging channel to a CallCenter type for Bring Your Own Channel for CCaaS. This subtype also represents the routing details for a voicemail configuration and routing information for callback requests. This subtype is available in API version 56.0 and later.

| Field Name | Description |
| --- | --- |
| channel | Field TypestringDescriptionRequired.For Bring Your Own Channel for CCaaS, this field represents the unique ID of the Bring Your Own Channel messaging channel (MessagingChannel) that’s associated with the contact center (CallCenterId). Available in API version 60.0 and later. |
| contactCenter | Field TypestringDescriptionRequired.For Bring Your Own Channel for CCaaS, this field represents the unique ID of the contact center (CallCenterId) that’s associated with the Bring Your Own Channel messaging channel (MessagingChannel). Available in API version 60.0 and later. |
| omniCallbackFallbackQueue | Field TypestringDescriptionIf callbacks are configured for the contact center and the contact center uses Omni-Channel Unified Routing, this field represents the unique ID of the fallback queue to use if contact request routing through an Omni-Channel flow fails. Don't change the value in this field. Instead, configure contact request routing in Lightning Experience. Available in API version 65.0 and later. |
| omniCallbackHandler | Field TypestringDescriptionIf callbacks are configured for the contact center and the contact center uses Omni-Channel Unified Routing, this field represents the unique ID of the flow or queue used to route contact requests. Don't change the value in this field. Instead, configure contact request routing in Lightning Experience. Available in API version 65.0 and later. |
| voiceMailFallbackQueue | Field TypestringDescriptionIf voicemail routing is configured for the contact center, this field represents the unique ID of the fallback queue to use if voicemail routing fails. Don't change the value in this field. Instead, configure voicemail routing in Lightning Experience. |
| voiceMailHandler | Field TypestringDescriptionIf voicemail routing is configured for the contact center, this field represents the unique ID of the flow used to route voicemails. Don't change the value in this field. Instead, configure voicemail routing in Lightning Experience. |

## Declarative Metadata Sample Definition

The following is an example of a CallCenter component:

```

```

For information about the CallCenter definition file, see [Call Center Definition Files](https://developer.salesforce.com/docs/atlas.en-us.210.0.api_cti.meta/api_cti/sforce_api_cti_call_def_file.htm).

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CallCenter xmlns="http://soap.sforce.com/2006/04/metadata">
    <adapterUrl>http://localhost:11000</adapterUrl>
    <displayName>Demo Call Center Adapter</displayName>
    <displayNameLabel>Display Name</displayNameLabel>
    <internalNameLabel>Internal Name</internalNameLabel>
    <sections>
        <items>
            <label>Description</label>
            <name>reqDescription</name>
            <value>Demo Call Center Adapter</value>
        </items>
        <items>
            <label>CTI Connector ProgId</label>
            <name>reqProgId</name>
            <value>DemoAdapter.DemoAdapter.1</value>
        </items>
        <items>
            <label>Version</label>
            <name>reqVersion</name>
            <value>3.0</value>
        </items>
        <items>
            <label>CTI Adapter URL</label>
            <name>reqAdapterUrl</name>
            <value>http://localhost:11000</value>
        </items>
        <label>General Information</label>
        <name>reqGeneralInfo</name>
    </sections>
    <sections>
        <items>
            <label>Outside Prefix</label>
            <name>reqOutsidePrefix</name>
            <value>1</value>
        </items>
        <items>
            <label>Long Distance Prefix</label>
            <name>reqLongDistPrefix</name>
            <value>1</value>
        </items>
        <items>
            <label>International Prefix</label>
            <name>reqInternationalPrefix</name>
            <value>01</value>
        </items>
        <label>Dialing Options</label>
        <name>reqDialingOptions</name>
    </sections>
    <version>4</version>
</CallCenter>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
