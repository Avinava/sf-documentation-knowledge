---
title: "JSON Parsing"
domain: apex-guide
topic: json-parsing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.270Z
keywords: [JSON, Parsing, Example, Response, Web, Service, Callout, Parse, String, Deserialize, Objects, See]
---

# JSON Parsing

# JSON Parsing

Use the JSONParser class methods to parse JSON-encoded content. These methods enable you to parse a JSON-formatted response that's returned from a call to an external service, such as a web service callout.

The following are samples that show how to parse JSON strings.

## Example: Parsing a JSON Response from a Web Service Callout

This example parses a JSON-formatted response using JSONParser methods. It makes a callout to a web service that returns a response in JSON format. Next, the response is parsed to build up a map from api version numbers to the release labels.

```

```

## Example: Parse a JSON String and Deserialize It into Objects

This example uses a hardcoded JSON string, which is the same JSON string returned by the callout in the previous example. In this example, the entire string is parsed into Invoice objects using the readValueAs method. This code also uses the skipChildren method to skip the child array and child objects and parse the next sibling invoice in the list. The parsed objects are instances of the Invoice class that is defined as an inner class. Because each invoice contains line items, the class that represents the corresponding line item type, the LineItem class, is also defined as an inner class. Add this sample code to a class to use it.

```

```

#### See Also

-   [*Apex Reference Guide*: JSONParser Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_JsonParser.htm "Apex Reference Guide: JSONParser Class - HTML (New Window)")