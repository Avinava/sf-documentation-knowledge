---
title: "Hosted Card Payments Lightning Component"
domain: blng-dev
topic: hosted-card-payments-lightning-component
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:08.858Z
estimatedTokens: 1286
keywords: [Hosted, Card, Payments, Lightning, Component, force, cardPayment, user, payment, uses, Salesforce, Billing, collect, perform, actions]
---

# Hosted Card Payments Lightning Component

> The force:cardPayment (Hosted Card Payments)
        component provides a user interface in a hosted payment page that uses Salesforce Billing to
        collect card payment information, make a payment, or perform both actions. Salesforce stores
        and processes the customer card information under PCI-compliant standards. You can host the
        payment page in an Experience Cloud site Page or Lightning Page.

# Hosted Card Payments Lightning Component

The force:cardPayment (Hosted Card Payments) component provides a user interface in a hosted payment page that uses Salesforce Billing to collect card payment information, make a payment, or perform both actions. Salesforce stores and processes the customer card information under PCI-compliant standards. You can host the payment page in an Experience Cloud site Page or Lightning Page.

| Available in: Salesforce Billing Winter ‘20 and later |
| --- |


To use this component, you must also have Salesforce Billing installed in your org. For more information, see [Install Salesforce Billing](https://help.salesforce.com/articleView?id=blng_install_billing.htm&type=5&language=en_US) in Salesforce Help.

The user interface contains a form that takes customer credit card and payment details, such as cardholder name and address, and a button for submitting them. You can customize the card component to hide fields, make fields required, and change the labels of fields and buttons. These customizations affect what admins see when they add the component to their Experience Cloud site or Lightning Pages, and what end customers see when they make a payment using your component. For example, in this component, we’ve defined the following customizations.

-   The Expiration Month is required
-   The Expiration Year is required
-   The Email field is hidden
-   The first address line has a label of "Street"
-   The Pay Button's label has been changed to Save Card.

```

```

Once you’ve configured your component, you can embed it in a wrapper component that’s available in Experience Builder. Here’s a sample wrapper component with the cardPayment component embedded.

```

```

You must handle the force:paymentTransactionCompleted event, which is fired after the transaction is completed.

```

```

You can also add attributes to a design resource so that your admins have the option of hiding fields, making fields required, and changing labels. When your design resource is active, admins can select the payment component in Experience Builder to show a properties pane with checkboxes or text boxes for each of the attributes. Save your design resource as a .design file in the same directory as your wrapper component. For example, if you want to present your five customized attributes for your admins to select or deselect from the properties pane, add the following Design section.

```

```

## Response Formats

Success

During a successful response, isSuccess becomes true. If transactionType had a value of PaymentSale, salesforceResponse response contains paymentId, paymentMethodId, and paymentTransactionId. If transactionType had a value of SavePaymentCard, salesforceResponse contains only paymentMethodId. The attributes of gatewayResponse varies based on the gateway. This example shows a Success response for a PaymentSale transaction and all possible attributes for gatewayResponse.

```

```

Failure in the gateway

```

```

Failure Internally

```

```

## Security Considerations and PCI Compliance

When end users are done entering their credit card information, they click the payment button so that the component sends the information to the payment gateway. Based on how you've configured your component, the gateway either tokenizes the card information and sends it back to the component, or the gateway tokenizes the card information, processes it for payment, and sends the results to the component.

Salesforce Billing uses security guardrails to ensure that end users aren’t charged more than once if they accidentally click the Pay Now button multiple times, or in the event of fraudulent activity. After the component sends a request to the payment gateway, it generates a nonce associated with that specific request. Salesforce Billing won't send another request unless the page is refreshed and the Hosted Card Payments component is re-rendered. The component validates the nonce before sending payment information to the gateway. If the nonce is valid, the component removes the nonce and sends the request to the gateway.

You can also use Javascript controllers to manage error handling and response handling. Here's a sample Javascript controller that uses the handler that we introduced earlier.

```

```

-   **[Attributes for the Card Hosted Payments Component](atlas.en-us.blng_dev.meta/blng_dev/blng_dev_cardpayment_component_attributes.htm)**
    Review the attributes for the Card Hosted Payments component.
-   **[Guidelines for the Hosted Card Payments Lightning Component](atlas.en-us.blng_dev.meta/blng_dev/blng_dev_cardpayment_component_guidelines.htm)**
    When you set up the wrapper and design for your hosted payment component, consider important guidelines.
-   **[HostedPaymentPageTransactionAPI Class](atlas.en-us.blng_dev.meta/blng_dev/apex_class_System_HostedPaymentPageTransactionAPI.htm#apex_class_System_HostedPaymentPageTransactionAPI)**
    Global API Apex class for Salesforce Billing. Contains methods that customers can call to save a credit card with tokenization or make a transaction using a new credit card.

## Code Examples

```
<force:CardPayment
          paymentProvider = "{!v.paymentProvider}"
          transactionType = "{!v.transactionType}"
          transactionParams = "{!v.transactionParams}"
          expiryMonthRequired = "true"
          expiryYearRequired = "true"     
          hideEmail = "true"                                           
          addressLine1Label = "Street"
          payButtonLabel="Save Card"/>
```

```
<aura:component>

    <aura:handler name="paymentTransactionCompleted"
              event="force:paymentTransactionCompleted"
              action="{!c.handleTransactionResponse}"/>

    <aura:attribute name="accountId" type="String" default="abcd"
        description="Account to which the transaction details are related"/>

    <aura:attribute name="gatewayId" type="String" default="1234"
        description="Gateway to be used for the transaction"/>

    <aura:attribute name="amount" type="Decimal" default="10"
        description="amount to be charged for the transaction"/>

    <aura:attribute name="paymentProvider" type="String" default='SalesforceBilling'
        description="Payments provider for this component"/>

    <aura:attribute name="transactionType" type="String" default='PaymentSale'
        description="Transaction to be done after submitting the button"/>

    <aura:attribute name="transactionParams" type="Object"
        description="Contains details about account id and gateway id to use"/> 

    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>

    <force:cardPayment
          paymentProvider = "{!v.paymentProvider}"
          transactionType = "{!v.transactionType}"
          transactionParams = "{!v.transactionParams}"
          expiryMonthRequired = "true"
          expiryYearRequired = "true"     
          hideEmail = "true"                                           
          addressLine1Label = "Street"
          payButtonLabel="Save Card"/>
</aura:component>
```

```
handleTransactionResponse : function(cmp, event, helper) {
        var response = event.getParam("response");
        if(response.isSuccess) {
            alert("isSuccess : " + response.isSuccess);
        }
    }
```

```
<design:component>
    <design:attribute name="expiryMonthRequired" label="Expiry month is required"/>
    <design:attribute name="expiryYearRequired" label="Expiry year is required"/>
    
    <design:attribute name="hideSaveForFuture" label="Hide save for future"/>
    <design:attribute name="hideBillingAddressSection" label="Hide billing address section"/>
    
    <design:attribute name="payButtonLabel" label="Pay button label"/>
</design:component>
```

```
{
             "isSuccess" : true,
             "salesforceResponse" : {
	             "paymentId" : "paymentId",
	             "paymentMethodId" : "paymentMethodId",
	             "paymentTransactionId" : "paymentTransactionId"
             },
             "gatewayResponse": {
	             "message": "mes",
	             "responseCodeMessage": "rcm",
	             "responseMessage": "rm",
	             "responseCode": "rc",
	             "responseStatus": "rs"
             }
            }
```

## Related Topics

- Attributes for the Card Hosted Payments Component (atlas.en-us.blng_dev.meta/blng_dev/blng_dev_cardpayment_component_attributes.htm)
- Guidelines for the Hosted Card Payments Lightning Component (atlas.en-us.blng_dev.meta/blng_dev/blng_dev_cardpayment_component_guidelines.htm)
- HostedPaymentPageTransactionAPI Class (atlas.en-us.blng_dev.meta/blng_dev/apex_class_System_HostedPaymentPageTransactionAPI.htm)
