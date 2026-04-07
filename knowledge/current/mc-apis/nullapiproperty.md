---
title: "NullAPIProperty"
domain: mc-apis
topic: nullapiproperty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:22.795Z
estimatedTokens: 150
keywords: [NullAPIProperty, API, avoid, problems, associated, sending, empty]
---

# NullAPIProperty

> The NullAPIProperty object takes an API property and specifies a null property for that value. Use this object to avoid problems associated with sending an empty string.

# NullAPIProperty

The NullAPIProperty object takes an API property and specifies a null property for that value. Use this object to avoid problems associated with sending an empty string.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Name | xsd:string | Name of the object or property. |
| Value | xsd:string | Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignores any supplied values and don't return an error. |
