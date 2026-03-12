---
title: "JSON Parsing"
domain: apex-guide
topic: json-parsing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.580Z
estimatedTokens: 389
keywords: [JSON, Parsing, JSONParser, parse, JSON-encoded, content., enable, JSON-formatted, response, that's, returned, call, external, service, such, web, callout., Example, Response, Web]
---

# JSON Parsing

> Use the JSONParser class methods to parse
        JSON-encoded content. These methods enable you to parse a JSON-formatted response that's
        returned from a call to an external service, such as a web service callout.

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

## Code Examples

```apex
public class JSONParserUtil {
    public static void parseJSONResponse() {        
        
        // Create HTTP request to send.
        HttpRequest request = new HttpRequest();
        // Set the endpoint URL.
        String endpoint = URL.getOrgDomainUrl().toExternalForm() + '/services/data';
        request.setEndPoint(endpoint);
        // Set the HTTP verb to GET.
        request.setMethod('GET');
        // Set the request header for JSON content type
        request.setHeader('Accept', 'application/json');
        
        // Send the HTTP request and get the response.
        // The response is in JSON format.
        Http httpProtocol = new Http();
        HttpResponse response = httpProtocol.send(request);
        System.debug(response.getBody());
        /* The JSON response returned is the following:
            {"label":"Summer '14","url":"/services/data/v31.0","version":"31.0"},
            {"label":"Winter '15","url":"/services/data/v32.0","version":"32.0"},
            {"label":"Spring '15","url":"/services/data/v33.0","version":"33.0"},
        */
        // Parse JSON response to build a map from API version numbers to labels
        JSONParser parser = JSON.createParser(response.getBody());
        Map<double, string> apiVersionToReleaseNameMap = new Map<double, string>();
        
        string label = null;
        double version = null;
        
        while (parser.nextToken() != null) {
            
            if (parser.getCurrentToken() == JSONToken.FIELD_NAME) {
                switch on parser.getText() {
                    when 'label' {
                    // Advance to the label value.
                    parser.nextToken();
                        label = parser.getText();
                    }
                    when 'version' {
                        // Advance to the version value.
                        parser.nextToken();
                        version = Double.valueOf(parser.getText());
                    }
                }
            }
            
            if(version != null && String.isNotEmpty(label)) {
                apiVersionToReleaseNameMap.put(version, label);
                version = null;
                label = null; 
            }
        }
        system.debug('Release with Rainbow logo = ' +
            apiVersionToReleaseNameMap.get(39.0D));
    }
}
```

```apex
public static void parseJSONString() {
    String jsonStr = 
        '{"invoiceList":[' +
        '{"totalPrice":5.5,"statementDate":"2011-10-04T16:58:54.858Z","lineItems":[' +
            '{"UnitPrice":1.0,"Quantity":5.0,"ProductName":"Pencil"},' +
            '{"UnitPrice":0.5,"Quantity":1.0,"ProductName":"Eraser"}],' +
                '"invoiceNumber":1},' +
        '{"totalPrice":11.5,"statementDate":"2011-10-04T16:58:54.858Z","lineItems":[' +
            '{"UnitPrice":6.0,"Quantity":1.0,"ProductName":"Notebook"},' +
            '{"UnitPrice":2.5,"Quantity":1.0,"ProductName":"Ruler"},' +
            '{"UnitPrice":1.5,"Quantity":2.0,"ProductName":"Pen"}],"invoiceNumber":2}' +
        ']}';

    // Parse entire JSON response.
    JSONParser parser = JSON.createParser(jsonStr);
    while (parser.nextToken() != null) {
        // Start at the array of invoices.
        if (parser.getCurrentToken() == JSONToken.START_ARRAY) {
            while (parser.nextToken() != null) {
                // Advance to the start object marker to
                //  find next invoice statement object.
                if (parser.getCurrentToken() == JSONToken.START_OBJECT) {
                    // Read entire invoice object, including its array of line items.
                    Invoice inv = (Invoice)parser.readValueAs(Invoice.class);
                    system.debug('Invoice number: ' + inv.invoiceNumber);
                    system.debug('Size of list items: ' + inv.lineItems.size());
                    // For debugging purposes, serialize again to verify what was parsed.
                    String s = JSON.serialize(inv);
                    system.debug('Serialized invoice: ' + s);

                    // Skip the child start array and start object markers.
                    parser.skipChildren();
                }
            }
        }
    }
} 

// Inner classes used for serialization by readValuesAs(). 

public class Invoice {
    public Double totalPrice;
    public DateTime statementDate;
    public Long invoiceNumber;
    List<LineItem> lineItems;
    
    public Invoice(Double price, DateTime dt, Long invNumber, List<LineItem> liList) {
        totalPrice = price;
        statementDate = dt;
        invoiceNumber = invNumber;
        lineItems = liList.clone();
    }
}  

public class LineItem {
    public Double unitPrice;
    public Double quantity;
    public String productName;
}
```
