---
title: "Roundtrip Serialization and Deserialization"
domain: apex-guide
topic: roundtrip-serialization-and-deserialization
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:33.571Z
estimatedTokens: 727
keywords: [Roundtrip, Serialization, Deserialization, JSON, perform, roundtrip, serialization, deserialization, content., enable, serialize, objects, JSON-formatted, strings, deserialize, back, objects., Example, Serialize, Deserialize]
---

# Roundtrip Serialization and Deserialization

> Use the JSON class methods to perform roundtrip
        serialization and deserialization of your JSON content. These methods enable you to
        serialize objects into JSON-formatted strings and to deserialize JSON strings back into
        objects.

# Roundtrip Serialization and Deserialization

Use the JSON class methods to perform roundtrip serialization and deserialization of your JSON content. These methods enable you to serialize objects into JSON-formatted strings and to deserialize JSON strings back into objects.

## Example: Serialize and Deserialize a List of Invoices

This example creates a list of InvoiceStatement objects and serializes the list. Next, the serialized JSON string is used to deserialize the list again and the sample verifies that the new list contains the same invoices that were present in the original list.

```

```

## JSON Serialization Considerations

The behavior of the serialize method differs depending on the Salesforce API version of the Apex code saved.

Serialization of queried sObject with additional fields set

For Apex saved using Salesforce API version 27.0 and earlier, if queried sObjects have additional fields set, these fields aren’t included in the serialized JSON string returned by the serialize method. Starting with Apex saved using Salesforce API version 28.0, the additional fields are included in the serialized JSON string.

This example adds a field to a contact after it has been queried, and then serializes the contact. The assertion statement verifies that the JSON string contains the additional field. The assertion passes for Apex saved using Salesforce API version 28.0 and later.

```

```

Serialization of aggregate query result fields

For Apex saved using Salesforce API version 27.0, results of aggregate queries don’t include the fields in the SELECT statement when serialized using the serialize method. For earlier API versions or for API version 28.0 and later, serialized aggregate query results include all fields in the SELECT statement.

This aggregate query returns two fields: the count of ID fields and the account name.

```

```

Serialization of empty fields

Starting with API version 28.0, null fields aren’t serialized and aren’t included in the JSON string, unlike in earlier versions. This change doesn’t affect deserializing JSON strings with JSON methods, such as [Json.deserialize()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_deserialize). This change is noticeable when you inspect the JSON string. For example:

```

```

Serialization of IDs

In API version 34.0 and earlier, ID comparison using \== fails for IDs that have been through roundtrip JSON serialization and deserialization.

## JSON Deserialization Considerations

JSON from aggregate results can’t be deserialized back into Apex AggregateResult objects because they have no named fields.

#### See Also

-   [*Apex Reference Guide*: JSON Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Json.htm "Apex Reference Guide: JSON Class - HTML (New Window)")

## Code Examples

```apex
public class JSONRoundTripSample {
  
    public class InvoiceStatement {
        Long invoiceNumber;
        Datetime statementDate;
        Decimal totalPrice;
        
        public InvoiceStatement(Long i, Datetime dt, Decimal price)
        {
            invoiceNumber = i;
            statementDate = dt;
            totalPrice = price;
        }
    }
    
    public static void SerializeRoundtrip() {
        Datetime dt = Datetime.now(); 
        // Create a few invoices.
        InvoiceStatement inv1 = new InvoiceStatement(1,Datetime.valueOf(dt),1000);
        InvoiceStatement inv2 = new InvoiceStatement(2,Datetime.valueOf(dt),500);
        // Add the invoices to a list.
        List<InvoiceStatement> invoices = new List<InvoiceStatement>();
        invoices.add(inv1);
        invoices.add(inv2);
              
        // Serialize the list of InvoiceStatement objects.
        String JSONString = JSON.serialize(invoices);
        System.debug('Serialized list of invoices into JSON format: ' + JSONString);
        
        // Deserialize the list of invoices from the JSON string.
        List<InvoiceStatement> deserializedInvoices = 
          (List<InvoiceStatement>)JSON.deserialize(JSONString, List<InvoiceStatement>.class);
        System.assertEquals(invoices.size(), deserializedInvoices.size());
        Integer i=0;
        for (InvoiceStatement deserializedInvoice :deserializedInvoices) {
            system.debug('Deserialized:' + deserializedInvoice.invoiceNumber + ',' 
            + deserializedInvoice.statementDate.formatGmt('MM/dd/yyyy  HH:mm:ss.SSS')
            + ', ' + deserializedInvoice.totalPrice); 
            system.debug('Original:' + invoices[i].invoiceNumber + ',' 
            + invoices[i].statementDate.formatGmt('MM/dd/yyyy  HH:mm:ss.SSS') 
            + ', ' + invoices[i].totalPrice); 
            i++;
        }
    }
}
```

```apex
Contact con = [SELECT Id, LastName, AccountId FROM Contact LIMIT 1]; 
// Set additional field
con.FirstName = 'Joe'; 
String jsonstring = Json.serialize(con); 
System.debug(jsonstring); 
System.assert(jsonstring.contains('Joe') == true);
```

```apex
String jsonString = JSON.serialize(
    Database.query('SELECT Count(Id),Account.Name FROM Contact WHERE Account.Name != null GROUP BY Account.Name LIMIT 1'));
    System.debug(jsonString);

// Expected output in API v 26 and earlier or v28 and later
// [{"attributes":{"type":"AggregateResult"},"expr0":2,"Name":"acct1"}]
```

```apex
String jsonString = JSON.serialize(
                 [SELECT Id, Name, Website FROM Account WHERE Website = null LIMIT 1]);
System.debug(jsonString);

// In v27.0 and earlier, the string includes the null field and looks like the following.
// {"attributes":{...},"Id":"001D000000Jsm0WIAR","Name":"Acme","Website":null}

// In v28.0 and later, the string doesn’t include the null field and looks like 
//  the following.
// {"attributes":{...},"Name":"Acme","Id":"001D000000Jsm0WIAR"}}
```
