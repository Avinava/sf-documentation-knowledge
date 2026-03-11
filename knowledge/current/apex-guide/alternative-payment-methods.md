---
title: "Alternative Payment  Methods"
domain: apex-guide
topic: alternative-payment-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.694Z
keywords: [Alternative, Payment, Methods, Example]
---

# Alternative Payment  Methods

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