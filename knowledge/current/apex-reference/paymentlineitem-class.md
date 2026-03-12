---
title: "PaymentLineItem Class"
domain: apex-reference
topic: paymentlineitem-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.298Z
estimatedTokens: 2331
namespace: RichMessaging
keywords: [PaymentLineItem, payment, line, item, requests, sent, enhanced, Messaging, channels, label, amount, timing, amountValue, automaticReloadPaymentThresholdAmount, labelValue]
---

# PaymentLineItem Class

> Represents a payment line item in payment requests sent in enhanced Messaging
    channels.

**Namespace:** `RichMessaging`

# PaymentLineItem Class

Represents a payment line item in payment requests sent in enhanced Messaging channels.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## Example

```

```

-   **[PaymentLineItem Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_constructors)**

-   **[PaymentLineItem Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_properties)**

-   **[PaymentLineItem Methods](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_methods)**


## PaymentLineItem Constructors

The following are constructors for PaymentLineItem.

-   **[PaymentLineItem(label, amount, timing)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_ctor)**
    Creates a new instance of the RichMessaging.PaymentLineItem class.
-   **[PaymentLineItem(label, amount)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_ctor_2)**
    Creates a new instance of the RichMessaging.PaymentLineItem class.
-   **[PaymentLineItem()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_ctor_3)**
    Creates a new instance of the RichMessaging.PaymentLineItem class.

### PaymentLineItem(label, amount, timing)

Creates a new instance of the RichMessaging.PaymentLineItem class.

#### Signature

public PaymentLineItem(String label, Double amount, RichMessaging.AbstractTiming timing)

#### Parameters

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The label of the payment line item.

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount of the payment line item.

timing

Type: [RichMessaging.AbstractTiming](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AbstractTiming.htm#apex_class_RichMessaging_AbstractTiming "Parent class for other RichMessaging timing classes.")

The timing of the payment line item.

### PaymentLineItem(label, amount)

Creates a new instance of the RichMessaging.PaymentLineItem class.

#### Signature

public PaymentLineItem(String label, Double amount)

#### Parameters

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The label of the payment line item.

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount of the payment line item.

### PaymentLineItem()

Creates a new instance of the RichMessaging.PaymentLineItem class.

#### Signature

public PaymentLineItem()

## PaymentLineItem Properties

The following are properties for PaymentLineItem.

-   **[amount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_amount)**
    The amount of the payment line item.
-   **[amountValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_amountValue)**
    The amount value of the payment line item.
-   **[automaticReloadPaymentThresholdAmount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_automaticReloadPaymentThresholdAmount)**
    The automatic reload payment threshold amount of the payment line item.
-   **[automaticReloadPaymentThresholdAmountValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_automaticReloadPaymentThresholdAmountValue)**
    The automatic reload payment threshold amount value of the payment line item.
-   **[label](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_label)**
    The label of the payment line item.
-   **[labelValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_labelValue)**
    The label value of the payment line item.
-   **[lineItemType](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_lineItemType)**
    The line item type of the payment line item. Read-only variable.
-   **[status](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_status)**
    The status of the payment line item.
-   **[statusValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_statusValue)**
    The status value of the payment line item.
-   **[timing](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_timing)**
    The timing of the payment line item.
-   **[timingValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_timingValue)**
    The timing value of the payment line item.

### amount

The amount of the payment line item.

#### Signature

public Double amount {get; set;}

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### amountValue

The amount value of the payment line item.

#### Signature

public Double amountValue {get; set;}

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### automaticReloadPaymentThresholdAmount

The automatic reload payment threshold amount of the payment line item.

#### Signature

public Double automaticReloadPaymentThresholdAmount {get; set;}

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### automaticReloadPaymentThresholdAmountValue

The automatic reload payment threshold amount value of the payment line item.

#### Signature

public Double automaticReloadPaymentThresholdAmountValue {get; set;}

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### label

The label of the payment line item.

#### Signature

public String label {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### labelValue

The label value of the payment line item.

#### Signature

public String labelValue {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### lineItemType

The line item type of the payment line item. Read-only variable.

#### Signature

public String lineItemType {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### status

The status of the payment line item.

#### Signature

public String status {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### statusValue

The status value of the payment line item.

#### Signature

public RichMessaging.PaymentItemStatus statusValue {get; set;}

#### Property Value

Type: [RichMessaging.PaymentItemStatus](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_PaymentItemStatus.htm "Represents the status of a payment item in payment requests sent in enhanced Messaging channels. ")

### timing

The timing of the payment line item.

#### Signature

public RichMessaging.AbstractTiming timing {get; set;}

#### Property Value

Type: [RichMessaging.AbstractTiming](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AbstractTiming.htm#apex_class_RichMessaging_AbstractTiming "Parent class for other RichMessaging timing classes.")

### timingValue

The timing value of the payment line item.

#### Signature

public RichMessaging.AbstractTiming timingValue {get; set;}

#### Property Value

Type: [RichMessaging.AbstractTiming](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AbstractTiming.htm#apex_class_RichMessaging_AbstractTiming "Parent class for other RichMessaging timing classes.")

## PaymentLineItem Methods

The following are methods for PaymentLineItem.

## Code Examples

```apex
public with sharing class MessagingPaymentLineItems {
    
    @InvocableMethod
    public static List<List<RichMessaging.PaymentLineItem>> getLineItems() {
        Double amount = 0.25;
        List<List<RichMessaging.PaymentLineItem>> result = new List<List<RichMessaging.PaymentLineItem>>();
        RichMessaging.PaymentLineItem pizza = new RichMessaging.PaymentLineItem('pizza', amount);
        RichMessaging.PaymentLineItem pasta = new RichMessaging.PaymentLineItem('pasta', amount);
        pizza.statusValue = RichMessaging.PaymentItemStatus.FinalCost;
        pasta.statusValue = RichMessaging.PaymentItemStatus.FinalCost;
        
        List<RichMessaging.PaymentLineItem> options = new List<RichMessaging.PaymentLineItem>{
            pizza, pasta
        };
        result.add(options);
        return result;
    }
    
}
```

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- PaymentLineItem Constructors (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm)
- PaymentLineItem Properties (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm)
- PaymentLineItem Methods (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm)
- PaymentLineItem(label, amount, timing) (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm)
- PaymentLineItem(label, amount) (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm)
- PaymentLineItem() (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- RichMessaging.AbstractTiming (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AbstractTiming.htm)
