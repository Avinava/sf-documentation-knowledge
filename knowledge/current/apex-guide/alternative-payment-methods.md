---
title: "Alternative Payment  Methods"
domain: apex-guide
topic: alternative-payment-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.804Z
estimatedTokens: 401
keywords: [Alternative, Payment, customers, store, represent, represented, another, pre-defined, CardPaymentMethod, DigitalWallet, Common, examples, include, CashOnDeliver, Klarna]
---

# Alternative Payment  Methods

> An alternative payment method allows customers to store and represent payment method
  information not represented by another pre-defined payment method such as CardPaymentMethod or DigitalWallet. Common examples of alternative payment methods include CashOnDeliver,
  Klarna, and Direct Debit. Alternative payment methods are available in API v51.0 and
  later.

# Alternative Payment Methods

An alternative payment method allows customers to store and represent payment method information not represented by another pre-defined payment method such as CardPaymentMethod or DigitalWallet. Common examples of alternative payment methods include CashOnDeliver, Klarna, and Direct Debit. Alternative payment methods are available in API v51.0 and later.

| Available in: Salesforce Spring '21 and later |
| --- |


Create a unique record type for each type of alternative payment method in your org. This way, each of your alternative payment methods can show different picklist values and page layouts based on the method provider and gateway provider’s requirements. For example, you could have one alternative payment method record type for direct debit and a different record type for cash on deliver.

We also recommend creating a GtwyProviderPaymentMethodType for each of your unique alternative payment method record types.

AlternativePaymentMethod has the private sharing model enabled as default for both internal and external users. Only the record owner and users with higher ownership have Read, Edit, and Delete access.

## Example

Let's say you wanted to make an alternative payment method for GiroPay. First, create an AlternativePaymentMethod record type.

**New RecordType**

```

```

```

```

Next, create an alternative payment method record for the AlternativePaymentMethod record type.

**New AlternativePaymentMethod**

```

```

```

```

You can also create a gateway provider payment method type.

**New GtwyProvPaymentMethodType**

```

```

## Code Examples

```
/services/data/v51.0/sobjects/RecordType
```

```
{
 "Name" : "Giro Pay",
 "DeveloperName" : "GiroPay",
 "SobjectType" : "AlternativePaymentMethod"
}
```

```
/services/data/v51.0/sobjects/AlternativePaymentMethod
```

```
{
 "ProcessingMode": "External",
 "status":"Active",
 "GatewayToken":"mHkDsh0oIA3mnWjo9UL",
"NickName" : "MyGiroPay",
"RecordTypeId" : "{record_type_id}"
}
```

```
{
 "PaymentGatewayProviderId": "XXXXXXXXXXXXXXX",
 "PaymentMethodType":"AlternativePaymentMethod",
 "GtwyProviderPaymentMethodType" : "PM_Giro",
 "DeveloperName" : "DevName",
 "MasterLabel" : "MasterLabel",
 "RecordTypeId" : "{record_type_id}"
}
```
