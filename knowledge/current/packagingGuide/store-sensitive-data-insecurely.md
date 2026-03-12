---
title: "Store Sensitive Data Insecurely"
domain: packagingGuide
topic: store-sensitive-data-insecurely
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.181Z
estimatedTokens: 342
keywords: [Store, Sensitive, Data, Insecurely, Follow, enterprise, security, standards, export, Salesforce, Platform, secret, Metadata]
---

# Store Sensitive Data Insecurely

> Follow enterprise security standards when you export data from the Salesforce Platform
    and when you store secret data in the platform.

# Store Sensitive Data Insecurely

Follow enterprise security standards when you export data from the Salesforce Platform and when you store secret data in the platform.

Insecure sensitive data storage provides many avenues for hackers to pose threats. For example, an org administrator is the only person who is supposed to know the API key. Hackers can use an exposed key to communicate data over admin channels to remote endpoints.

Salesforce takes threats to data that originate in your solution seriously. A data breach or loss caused by a vulnerability in your solution jeopardizes your relationship with Salesforce.

Follow the enterprise standards in [Storing Sensitive Data](https://developer.salesforce.com/page/Secure_Coding_Storing_Secrets "HTML (New Window)") when:

-   Exporting customer data from the Salesforce platform.
-   Storing secrets such as cryptographic keys, session ids, or passwords in the Salesforce Platform.

## Metadata Example

The metadata in this example represents a custom object. This custom object definition isn’t secure because the <visibility\> tag for the API key field is set to Public. The field can be viewed in plain text.

```

```

When storing a secret in a custom object, such as an API key, encrypt it. Store the encryption key separately in a protected custom setting or a protected custom metadata API field.

## Code Examples

```
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
   <fields>
        <fullName>apiKey__c</fullName>
        <externalId>false</externalId>
        <fieldManageability>DeveloperControlled</fieldManageability>
        <label>apiKey</label>
        <length>50</length>
        <required>false</required>
        <type>Text</type>
        <unique>false</unique>
   </fields>
   <label>Phone Verify Setting</label>
   <pluralLabel>Phone Verify Settings</pluralLabel>
   <visibility>Public</visibility>
</CustomObject>
```
