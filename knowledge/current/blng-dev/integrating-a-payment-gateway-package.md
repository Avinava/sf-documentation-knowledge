---
title: "Integrating a Payment Gateway Package"
domain: blng-dev
topic: integrating-a-payment-gateway-package
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.944Z
estimatedTokens: 868
keywords: [Integrating, Payment, Gateway, Package, Configure, Salesforce, Billing, communicate, external]
---

# Integrating a Payment Gateway Package

> Configure Salesforce Billing and your payment gateway package to communicate with an
  external payment gateway.

# Integrating a Payment Gateway Package

Configure Salesforce Billing and your payment gateway package to communicate with an external payment gateway.

-   **[Configure Payment Gateways in Salesforce](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_configure_pg_in_salesforce.htm)**
    Install a payment gateway package and configure your payment gateway entities to communicate with your payment gateway provider.
-   **[Salesforce Billing Payment Gateway Interfaces](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_interface_intro.htm)**
    A payment gateway package requires three interfaces to communicate with Salesforce Billing. Each interface contains methods that the user-defined PaymentGatewayAPI class implements to process different types of transaction actions.
-   **[Configuring Salesforce Billing to Access Your PaymentGatewayAPI Class](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_configure_pgc_request.htm)**
    To integrate with a payment gateway package, Salesforce Billing must know which gateway package class contains the methods required to process a payment request and convert the results to data that Salesforce Billing can read. The Salesforce Billing custom setting Payment Gateway Config defines the class that Salesforce Billing calls from the gateway package. You must also add code that installs a record of the class in PaymentGatewayConfig.
-   **[Mapping Gateway Response Codes to Salesforce Billing Gateway Statuses](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_mapping_response_codes.htm)**
    Payment gateways have many response codes for payment operations. Salesforce Billing categorizes these codes into one of seven Gateway Status field values on your payment transaction record. The gateway status lets you know the result of a gateway call and whether you must correct anything. When you configure a payment gateway package, create metadata that maps your chosen gateway’s response codes to one of the statuses.
-   **[Capture Externally Authorized Payments](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_capture_external_authorized_payments.htm)**
    Authorize payments in an external system, then capture the payment in Salesforce Billing using our Capture Transaction API methods. You can then use Salesforce Billing to manage the payment lifecycle and settle invoices.
-   **[Merchant Credential Fields](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_merchant_credential_fields.htm)**
    Each payment gateway package installs merchant credential fields on the Salesforce Billing payment gateway object. You can use these fields to provide merchant information when making a transaction request to the payment gateway.
-   **[Required Gateway Classes](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_gateway_required_fields.htm)**
    All payment gateway and payment method records require several fields to communicate with the payment gateway, regardless of the gateway type. Specific gateway types may also require additional fields.
-   **[Payment Method Handling for Guest Users](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_guest_user_payment_method_handling.htm)**
    The Billing package automatically creates PaymentMethod objects when processing payments from guest users through the Lightning Platform Payment site.
-   **[Configure a Payment Gateway in Salesforce Billing](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_setup_gateways.htm)**
    Configure Salesforce Billing to send data to your chosen payment gateway.

## Related Topics

- Configure Payment Gateways in Salesforce (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_configure_pg_in_salesforce.htm)
- Salesforce Billing Payment Gateway Interfaces (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_interface_intro.htm)
- Configuring Salesforce Billing to Access Your PaymentGatewayAPI Class (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_configure_pgc_request.htm)
- Mapping Gateway Response Codes to Salesforce Billing Gateway Statuses (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_mapping_response_codes.htm)
- Capture Externally Authorized Payments (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_capture_external_authorized_payments.htm)
- Merchant Credential Fields (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_merchant_credential_fields.htm)
- Required Gateway Classes (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_gateway_required_fields.htm)
- Payment Method Handling for Guest Users (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_guest_user_payment_method_handling.htm)
- Configure a Payment Gateway in Salesforce Billing (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_setup_gateways.htm)
