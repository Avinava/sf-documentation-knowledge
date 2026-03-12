---
title: "Webservice Methods"
domain: apex-guide
topic: webservice-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.225Z
estimatedTokens: 165
keywords: [Webservice]
---

# Webservice Methods

# Webservice Methods

Apex class methods can be exposed as custom SOAP Web service calls. This allows an external application to invoke an Apex Web service to perform an action in Salesforce. Use the webservice keyword to define these methods. For example:

```

```

A developer of an external application can integrate with an Apex class containing webservice methods by generating a WSDL for the class. To generate a WSDL from an Apex class detail page:

1.  In the application from Setup, enter “Apex Classes” in the Quick Find box, then select **Apex Classes**.
2.  Click the name of a class that contains webservice methods.
3.  Click **Generate WSDL**.

## Code Examples

```apex
global class MyWebService {
    webservice static Id makeContact(String contactLastName, Account a) {
        Contact c = new Contact(lastName = contactLastName, AccountId = a.Id);
        insert c;
        return c.id;
    }
}
```
