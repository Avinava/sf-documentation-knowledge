---
title: "CommerceTax Namespace"
domain: apex-reference
topic: commercetax-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.155Z
keywords: [CommerceTax, Namespace]
---

# CommerceTax Namespace

# CommerceTax Namespace

Manage the communication between Salesforce and an external tax engine.

The CommerceTax namespace includes these classes.

-   **[AbstractTransactionResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_class_commercetax_AbstractTransactionResponse)**  
    Abstract class that contains methods for setting tax fields based on the external tax provider's response. Response classes that extend AbstractTransactionResponse inherit these methods.
-   **[AddressesResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AddressesResponse.htm#apex_class_commercetax_AddressesResponse)**  
    Sets the tax address fields based on a response from the external tax engine. Contains setter methods for the Ship From, Ship To, and Sold To addresses.
-   **[AddressResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AddressResponse.htm#apex_class_commercetax_AddressResponse)**  
    Contains a location code sent from the external tax engine.
-   **[AmountDetailsResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AmountDetailsResponse.htm#apex_class_commercetax_AmountDetailsResponse)**  
    Sets tax amount fields based on a response from the external tax engine.
-   **[CalculateTaxRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_CalculateTaxRequest.htm#apex_class_commercetax_CalculateTaxRequest)**  
    Represents a request to an external tax engine to calculate tax. Extends the TaxTransactionRequest class and is the top-level request class.
-   **[CalculateTaxResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_CalculateTaxResponse.htm#apex_class_commercetax_CalculateTaxResponse)**  
    Sets the values of the tax transaction following a response from the external tax engine. Extends the AbstractTransactionResponse class and is the top-level response class.
-   **[CalculateTaxType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercetax_CalculateTaxType.htm)**  
    Shows whether a tax calculation request is for estimated or actual tax.
-   **[CustomTaxAttributesResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_CustomTaxAttributesResponse.htm#apex_class_commercetax_CustomTaxAttributesResponse)**  
    Sets additional data or custom attributes in the tax response.
-   **[ErrorResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ErrorResponse.htm#apex_class_commercetax_ErrorResponse)**  
    Use to respond with an error after receiving errors from the PaymentGatewayAdapter methods of the [CommercePayments](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_commercepayments.htm "HTML (New Window)") namespace, such as request-forbidden responses, custom validation errors, or expired API tokens.
-   **[HeaderTaxAddressesRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_class_commercetax_HeaderTaxAddressesRequest)**  
    Captures the address values that are applicable for the quote or order transaction.
-   **[ImpositionResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ImpositionResponse.htm#apex_class_commercetax_ImpositionResponse)**  
    Stores details of tax impositions from the external tax engine.
-   **[JurisdictionResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm#apex_class_commercetax_JurisdictionResponse)**  
    Stores details from the external tax engine about the tax jurisdiction used in the tax calculation process. A tax jurisdiction represents a government entity that collects tax.
-   **[LineItemResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineItemResponse.htm#apex_class_commercetax_LineItemResponse)**  
    Response class that stores details of a list of one or more line items on which the tax engine has calculated tax.
-   **[LineTaxAddressesRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_class_commercetax_LineTaxAddressesRequest)**  
    Stores details of the addresses applied per line item in a tax calculation request.
-   **[RequestType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercetax_RequestType.htm)**  
    Shows the type of tax request made to the tax engine.
-   **[ResultCode Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercetax_ResultCode.htm)**  
    Code that represents the results of a tax request made to the tax engine.
-   **[RuleDetailsResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_RuleDetailsResponse.htm#apex_class_commercetax_RuleDetailsResponse)**  
    Contains details about the tax rules used for tax calculation.
-   **[TaxAddressesRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_class_commercetax_TaxAddressesRequest)**  
    Contains methods to get and set tax address values.
-   **[TaxAddressRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest)**  
    Contains address details used for tax calculation.
-   **[TaxApiException Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxApiException.htm#apex_class_commercetax_TaxApiException)**  
    Contains details about any exceptions during the tax calculation process. Extends the ApexBaseException class.
-   **[TaxCustomerDetailsRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_class_commercetax_TaxCustomerDetailsRequest)**  
    Contains customer details used in tax calculation.
-   **[TaxDetailsResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxDetailsResponse.htm#apex_class_commercetax_TaxDetailsResponse)**  
    Stores details of the tax values that an external tax engine calculates in response to a tax calculation request.
-   **[TaxEngineAdapter Interface](atlas.en-us.apexref.meta/apexref/apex_interface_commercetax_TaxEngineAdapter.htm#apex_interface_commercetax_TaxEngineAdapter)**  
    Retrieves information from the tax engine and evaluates the information to define tax details.
-   **[TaxEngineContext Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxEngineContext.htm#apex_class_commercetax_TaxEngineContext)**  
    Wrapper class that stores details about the type of a tax calculation request.
-   **[TaxLineItemRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_class_commercetax_TaxLineItemRequest)**  
    Contains line item details of a tax request.
-   **[TaxSellerDetailsRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxSellerDetailsRequest.htm#apex_class_commercetax_TaxSellerDetailsRequest)**  
    Contains tax code details used in the tax calculation request.
-   **[TaxTransactionRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_class_commercetax_TaxTransactionRequest)**  
    Abstract class for storing customer details used in tax calculation and estimation requests.
-   **[TaxTransactionStatus Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercetax_TaxTransactionStatus.htm)**  
    Shows whether the tax transaction has been committed or uncommitted.
-   **[TaxTransactionType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercetax_TaxTransactionType.htm)**  
    Shows whether the tax transaction is for a credit or debit transaction.