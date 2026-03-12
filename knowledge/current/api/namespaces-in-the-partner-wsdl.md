---
title: "Namespaces in the Partner WSDL"
domain: api
topic: namespaces-in-the-partner-wsdl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.827Z
estimatedTokens: 145
namespace: API
keywords: [Namespaces, Partner, WSDL, XML, every, tag, defined, enterprise.wsdl, handled, implicitly, API, calls, however, explicitly, specify]
---

# Namespaces in the Partner WSDL

> In XML, every tag has a defined namespace. In the enterprise.wsdl,
   namespaces are handled implicitly. When using API calls with the partner WSDL, however, you need
   to explicitly specify the correct namespaces for API calls, objects, and fields, and faults. This
   rule applies to predefined an

**Namespace:** `API`

# Namespaces in the Partner WSDL

In XML, every tag has a defined namespace. In the enterprise.wsdl, namespaces are handled implicitly. When using API calls with the partner WSDL, however, you need to explicitly specify the correct namespaces for API calls, objects, and fields, and faults. This rule applies to predefined and custom objects and fields.

| For | Namespace |
| --- | --- |
| API Calls | urn:partner.soap.sforce.com |
| sObjects | urn:sobject.partner.soap.sforce.com |
| Fields | urn:sobject.partner.soap.sforce.com |
| Faults | urn:fault.partner.soap.sforce.com |
