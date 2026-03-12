---
title: "Service Order"
domain: packagingGuide
topic: service-order
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.686Z
estimatedTokens: 789
keywords: [Service, Order, you’re, submitting, Salesforce, Partner, Operations, processing, activation]
---

# Service Order

> Represents an order that you’re submitting to Salesforce Partner Operations for
  processing and activation.

# Service Order

Represents an order that you’re submitting to Salesforce Partner Operations for processing and activation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Field names are prefixed with CHANNEL\_ORDERS\_\_ unless otherwise noted.

When you submit an order with the Channel Order App API, include these fields.

## Fields

| Field | Details |
| --- | --- |
| LabelCreated with New COANameCreated_with_new_COA__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that you’re using the latest version of the Channel Order App (COA). To ensure that your order is processed, check this field. |
| LabelContractNamePartner_Contract_Rules__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the related contract terms record. This field is required. |
| LabelCustomer NameNameCustomer__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to a customer record. Specify an existing customer record. You can’t populate customer details using the API. This field is required. |
| LabelDate Partner Received Customer OrderNameDate_Partner_Received_Customer_Order__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate you received the order from the customer. This field is required. |
| LabelDate Customer Accepted SFDC Service AgreementNameDate_Customer_Accepted_SFDC_Svc_Agrmnt__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the customer accepted the Salesforce service agreement. This field is required for OEM contracts. |
| LabelError CommentNameError_Comment__c | TypetextareaPropertiesCreate, Nillable, Sort, UpdateDescriptionStores comments or instructions from Salesforce Partner Operations when a submitted order can’t be processed. |
| LabelI Certify a Corresponding Order is Rec’dNameI_certify__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionConfirmation that the order was received. Possible values are Yes and No. This field is required. |
| LabelOrder TypeNameOrder_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of order that you’re submitting for processing and activation. Possible values are Initial, Add-On, Reduction, Cancellation Order, Upgrade - Partner App, and Upgrade - Org Edition. Specify Upgrade - Partner App for a renewal order. Specify Upgrade - Org Edition for an upgrade order. This field is required. |
| LabelService Order StatusNameService_Order_Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the order. Possible values are Draft, Submitted, Received, In Process, Error, Activated, and Provisioned. You can submit only orders with a status of Draft. |
| LabelService Start DateNameService_Start_Date__c | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionDate to activate or provision the customer’s order. You can specify today’s date or a date in the future. This field is required. |
