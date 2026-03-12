---
title: "ShippingMethod Class"
domain: apex-reference
topic: shippingmethod-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.783Z
estimatedTokens: 1702
namespace: RichMessaging
keywords: [ShippingMethod, Represents, shipping, listed, payment, requests, sent, enhanced, Messaging, channels., Example, label, amount, detail, identifier, amountValue, detailValue, identifierValue, labelValue, shippingMethodType]
---

# ShippingMethod Class

> Represents a shipping method listed in payment requests sent in enhanced Messaging
    channels.

**Namespace:** `RichMessaging`

# ShippingMethod Class

Represents a shipping method listed in payment requests sent in enhanced Messaging channels.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## Example

```

```

-   **[ShippingMethod Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_constructors)**

-   **[ShippingMethod Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_properties)**


## ShippingMethod Constructors

The following are constructors for ShippingMethod.

-   **[ShippingMethod(label, amount, detail, identifier)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_ctor)**
    Creates a new instance of the RichMessaging.ShippingMethod class.
-   **[ShippingMethod()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_ctor_2)**
    Creates a new instance of the RichMessaging.ShippingMethod class.

### ShippingMethod(label, amount, detail, identifier)

Creates a new instance of the RichMessaging.ShippingMethod class.

#### Signature

public ShippingMethod(String label, Double amount, String detail, String identifier)

#### Parameters

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The label of the shipping method.

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount of the shipping method.

detail

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Details about the shipping method.

identifier

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The identifier of the shipping method.

### ShippingMethod()

Creates a new instance of the RichMessaging.ShippingMethod class.

#### Signature

public ShippingMethod()

## ShippingMethod Properties

The following are properties for ShippingMethod.

-   **[amount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_amount)**
    The amount of the shipping method.
-   **[amountValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_amountValue)**
    The amount value of the shipping method.
-   **[detail](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_detail)**
    Details about the shipping method.
-   **[detailValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_detailValue)**
    The detail value of the shipping method.
-   **[identifier](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_identifier)**
    The identifier of the shipping method.
-   **[identifierValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_identifierValue)**
    The identifier value of the shipping method.
-   **[label](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_label)**
    The label of the shipping method.
-   **[labelValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_labelValue)**
    The label value of the shipping method.
-   **[shippingMethodType](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_shippingMethodType)**
    The shipping method type. Read only.

### amount

The amount of the shipping method.

#### Signature

public Double amount {get; set;}

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### amountValue

The amount value of the shipping method.

#### Signature

public Double amountValue {get; set;}

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### detail

Details about the shipping method.

#### Signature

public String detail {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### detailValue

The detail value of the shipping method.

#### Signature

public String detailValue {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### identifier

The identifier of the shipping method.

#### Signature

public String identifier {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### identifierValue

The identifier value of the shipping method.

#### Signature

public String identifierValue {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### label

The label of the shipping method.

#### Signature

public String label {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### labelValue

The label value of the shipping method.

#### Signature

public String labelValue {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### shippingMethodType

The shipping method type. Read only.

#### Signature

public String shippingMethodType {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```apex
public with sharing class MessagingShippingMethods {
    
    @InvocableMethod
    public static List<List<RichMessaging.ShippingMethod>> getShippingMethods(){
        Double amount = 0.25;
        List<List<RichMessaging.ShippingMethod>> result = new List<List<RichMessaging.ShippingMethod>>();
        
        List<RichMessaging.ShippingMethod> options = new List<RichMessaging.ShippingMethod>{
            new RichMessaging.ShippingMethod('doordash', amount, '1 hour delivery to your door', 'ddash'),
            new RichMessaging.ShippingMethod('UPS', amount, '2 days delivery', 'UPS')
        };
        result.add(options);
        return result;
    }
    
}
```

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- ShippingMethod Constructors (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm)
- ShippingMethod Properties (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm)
- ShippingMethod(label, amount, detail, identifier) (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm)
- ShippingMethod() (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- amount (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm)
- amountValue (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm)
- detail (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm)
