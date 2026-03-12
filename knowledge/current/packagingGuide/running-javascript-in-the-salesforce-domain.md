---
title: "Running JavaScript in the Salesforce Domain"
domain: packagingGuide
topic: running-javascript-in-the-salesforce-domain
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.151Z
estimatedTokens: 483
namespace: REQUIRESCRIPT
keywords: [Running, JavaScript, Salesforce, Domain, code, multiple, vendors, run, origin, prevent, interference, vendor, sandboxed, Don’t, attempt]
---

# Running JavaScript in the Salesforce Domain

> JavaScript code from multiple vendors can run in the same origin. To prevent code
    interference, vendor JavaScript code is sandboxed. Don’t attempt to break out of a sandbox or
    run code outside your origin. Use Visualforce, Aura, or Lightning Web Components, which run in
    the proper origin.

**Namespace:** `REQUIRESCRIPT`

# Running JavaScript in the Salesforce Domain

JavaScript code from multiple vendors can run in the same origin. To prevent code interference, vendor JavaScript code is sandboxed. Don’t attempt to break out of a sandbox or run code outside your origin. Use Visualforce, Aura, or Lightning Web Components, which run in the proper origin.

Many different types of JavaScript code run in a Salesforce org, including unpackaged customer code, Salesforce code, and packaged code. Typically, the code is from multiple vendors that have no way of collaborating with each other. If their code runs in the same origin, code from one vendor can interfere with other vendors’ code.

To prevent code interference, vendor JavaScript code is sandboxed. With Visualforce solutions, JavaScript code is sandboxed in unique, vendor-specific origins. With Lightning solutions and Lightning Web Components (LWCs), JavaScript is sandboxed in unique, vendor-specific lockers.

Any attempt to break out of a sandbox and run code outside your origin is a secure coding violation. A secure coding violation includes attempts to run vendor-written JavaScript code in the Salesforce origin via homepage components, web links, or custom buttons.

In most situations, you can achieve the same functionality by using Visualforce, Aura, or Lightning Web Components, which run in the proper origin.

## Metadata Example

The metadata in this example represents a custom object. A web link within this custom object is defined using the REQUIRESCRIPT statement. In a managed package, using REQUIRESCRIPT is a security vulnerability because the vendor is injecting its code into a Salesforce origin. Managed packages must stay within their namespace sandbox and can’t execute scripts outside this sandbox.

```

```

Instead of embedding the code directly in the object, create a Visualforce button in a Visualforce Aura component, or use a Lightning Web Component.

## Code Examples

```
<?xml version=”1.0”encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
<actionOverrides>
<actionName>Accept</actionName>
      <type>Default</type>
</actionOverrides>
<webLinks>
     <fullName>Add_to_List</fullName>
     <openType>onClickJavaScript</openType>
     <url>{!REQUIRESCRIPT(&quot;/soap/ajax/30.0/connection.js&quot;)}</url>
</webLinks>
...
</CustomObject>
```
