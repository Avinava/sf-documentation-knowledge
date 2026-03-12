---
title: "JSON Generator"
domain: apex-guide
topic: json-generator
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.574Z
estimatedTokens: 220
keywords: [JSON, Generator, JSONGenerator, generate, standard, JSON-encoded, content., Sample]
---

# JSON Generator

> Using the JSONGenerator class methods, you can generate standard JSON-encoded content.

# JSON Generator

Using the JSONGenerator class methods, you can generate standard JSON-encoded content.

You can construct JSON content, element by element, using the standard JSON encoding. To do so, use the methods in the JSONGenerator class.

## JSONGenerator Sample

This example generates a JSON string in pretty print format by using the methods of the JSONGenerator class. The example first adds a number field and a string field, and then adds a field to contain an object field of a list of integers, which gets deserialized properly. Next, it adds the A object into the Object A field, which also gets deserialized.

```

```

#### See Also

-   [*Apex Reference Guide*: JSONGenerator Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_JsonGenerator.htm "Apex Reference Guide: JSONGenerator Class - HTML (New Window)")

## Code Examples

```apex
public class JSONGeneratorSample{

    public class A { 
        String str;
        
        public A(String s) { str = s; }
    }

    static void generateJSONContent() {
        // Create a JSONGenerator object.
        // Pass true to the constructor for pretty print formatting.
        JSONGenerator gen = JSON.createGenerator(true);
        
        // Create a list of integers to write to the JSON string.
        List<integer> intlist = new List<integer>();
        intlist.add(1);
        intlist.add(2);
        intlist.add(3);
        
        // Create an object to write to the JSON string.
        A x = new A('X');
        
        // Write data to the JSON string.
        gen.writeStartObject();
        gen.writeNumberField('abc', 1.21);
        gen.writeStringField('def', 'xyz');
        gen.writeFieldName('ghi');
        gen.writeStartObject();
        
        gen.writeObjectField('aaa', intlist);
        
        gen.writeEndObject();
        
        gen.writeFieldName('Object A');
        
        gen.writeObject(x);
        
        gen.writeEndObject();
        
        // Get the JSON string.
        String pretty = gen.getAsString();
        
        System.assertEquals('{
' +
        '  "abc" : 1.21,
' +
        '  "def" : "xyz",
' +
        '  "ghi" : {
' +
        '    "aaa" : [ 1, 2, 3 ]
' +
        '  },
' +
        '  "Object A" : {
' +
        '    "str" : "X"
' +
        '  }
' +
        '}', pretty);
    }
}
```
