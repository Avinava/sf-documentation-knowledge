---
title: "Objects, Fields, and Field Data and the Partner WSDL"
domain: api
topic: objects-fields-and-field-data-and-the-partner-wsdl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.829Z
estimatedTokens: 343
keywords: [Objects, Data, Partner, WSDL, enterprise, file, specific, Account, Contact, Salesforce, org, contrast, generic, sObject, particular]
---

# Objects, Fields, and Field Data and the Partner WSDL

> The enterprise WSDL file defines all the specific objects (such as Account and Contact)
  in a Salesforce org. In contrast, the partner WSDL file defines a single, generic object (sObject)
  that represents all the objects. For a particular object, its type is defined in the name field in the returned DescribeSObjectResult.

# Objects, Fields, and Field Data and the Partner WSDL

The enterprise WSDL file defines all the specific objects (such as Account and Contact) in a Salesforce org. In contrast, the partner WSDL file defines a single, generic object (sObject) that represents all the objects. For a particular object, its type is defined in the name field in the returned DescribeSObjectResult.

With the partner WSDL, your client application code handles fields as arrays of name-value pairs that represent the field data. When referring to the name of an individual field, use the value in its name field of the Field type in the DescribeSObjectResult.

Languages vary in the way they handle name-value pairs and map typed values to the primitive XML data types defined in SOAP messages. With the enterprise WSDL, the mapping is handled implicitly. With the partner WSDL, however, you manually manage values and data types when building client applications. Specify the object type before you assign field values. When specifying the value of a particular field, use a value that is valid for the field (range, format, and data type). Make sure that you understand the mapping between data types in your programming language and XML primitive data types. See [SOAPType](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm#SOAPType) for more information.

## Related Topics

- SOAPType (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
