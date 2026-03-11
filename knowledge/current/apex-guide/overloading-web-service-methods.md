---
title: "Overloading Web Service Methods"
domain: apex-guide
topic: overloading-web-service-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.775Z
keywords: [Overloading, Web, Service, Methods]
---

# Overloading Web Service Methods

# Overloading Web Service Methods

SOAP and WSDL do not provide good support for overloading methods. Consequently, Apex does not allow two methods marked with the webservice keyword to have the same name. Web service methods that have the same name in the same class generate a compile-time error.