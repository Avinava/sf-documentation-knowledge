---
title: "Transaction Dispute Management Use Case"
domain: omnistudio
topic: transaction-dispute-management-use-case
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:51.637Z
estimatedTokens: 1705
keywords: [Transaction, Dispute, Management, Case, streamlined, process, users, capture, submit, customer, disputes, financial, transactions, Service, connect]
---

# Transaction Dispute Management Use Case

> Transaction dispute management provides a streamlined process for users to capture and
    submit customer disputes related to financial transactions. You can use the Service Process
    connect API resource to create all the records related to a transaction dispute.

# Transaction Dispute Management Use Case

Transaction dispute management provides a streamlined process for users to capture and submit customer disputes related to financial transactions. You can use the Service Process connect API resource to create all the records related to a transaction dispute.

Transaction dispute management uses a dedicated data model with entities such as [Dispute](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_dispute.htm), mapping base attributes to fields in Dispute data model entities.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

The optional [Assessment Questions](https://help.salesforce.com/s/articleView?id=ind.fsc_admin_add_transaction_dispute_questions.htm&type=5&language=en_US) portion of transaction dispute management isn’t included in this use case.

## Configure Objects, Permissions, and Mulesoft Integration

Before you can create transaction disputes using the Service Process connect API resource, you must create or modify objects, set user permissions, and connect to Mulesoft. Perform these tasks described in the Financial Services Cloud Administration Guide:

-   [Configure the Dispute Object](https://help.salesforce.com/s/articleView?id=ind.fsc_admin_configure_the_dispute_object.htm&type=5&language=en_US)
-   [Assign Transaction Dispute Management Permissions to User](https://help.salesforce.com/s/articleView?id=ind.fsc_admin_assign_transaction_dispute_management_permissions_to_user.htm&type=5&language=en_US)
-   [Connect to MuleSoft and Enable Integration](https://help.salesforce.com/s/articleView?id=ind.fsc_admin_connect_to_mulesoft_and_enable_integration.htm&type=5&language=en_US)
-   [Create an Integration Definition](https://help.salesforce.com/s/articleView?id=ind.fsc_admin_create_an_integration_definition.htm&type=5&language=en_US)
-   [Add the Picklist Values Required for a Dispute Request](https://help.salesforce.com/s/articleView?id=ind.fsc_admin_add_picklist_values.htm&type=5&language=en_US)
-   [Create a Transaction Dispute Service Process Definition with the Default Template](https://help.salesforce.com/s/articleView?id=ind.fsc_admin_create_a_transaction_dispute_spd_with_the_default_template.htm&type=5&language=en_US)
-   [Activate the Transaction Dispute Service Process](https://help.salesforce.com/s/articleView?id=ind.fsc_admin_activate_the_transaction_dispute_service_process.htm&type=5&language=en_US) (skip steps 3 and 4)

These tasks are optional but helpful for viewing Case records in your Salesforce org:

-   [Add Related Lists to the Page Layout](https://help.salesforce.com/s/articleView?id=ind.fsc_admin_add_related_lists_to_the_page_layout.htm&type=5&language=en_US)
-   [Add the Case Details Lightning Component to the Case Record Page](https://help.salesforce.com/s/articleView?id=ind.fsc_admin_add_the_case_details_lightning_component_to_the_case_record_page.htm&type=5&language=en_US)

## Review the Dispute Management Objects and Fields

Transaction dispute management uses Dispute and Dispute Item records in addition to the Case and Document Checklist Item records common to all service processes. Setting values for the following fields is required. You can include additional fields.

-   [Dispute](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_dispute.htm) object — AccountId, ActualAmount, ApprovedAmount, AssessmentId, Description, DisputeSubtype, DisputeType, DisputedAmount, FinancialAccountId, ReceivedDate, Status
-   [Dispute Item](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_disputeitem.htm) object, one record for each disputed transaction — TransactionAmount, TransactionDate, TransactionDescription, TransactionIdentifier
-   [Case](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_case.htm) object — Subject, Origin, AccountId
-   [Document Checklist Item](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_documentchecklistitem.htm) object — No requirements specific to transaction disputes

The TransactionIdentifier value typically references an ID in an external banking system. If you include the Case record’s Type field, setting its value to Dispute is recommended. You can use Document Checklist Item fields to specify documentation such as bank statements or receipts.

## Set Up the Service Process Request Payload

The [Service Process](atlas.en-us.industries_reference.meta/industries_reference/connect_resources_service_process_create.htm "Create a service process.") POST payload has four top-level properties: attributes, caseInfo, documentInfo, and svcCatalogItemDefApiName. For the transaction dispute management process, certain attributes are mapped to specific objects:

-   Under the attributes property, configure a dispute\_info property for the [Dispute](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_dispute.htm) record and a disputed\_transactions\_info property for the list of [Dispute Item](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_disputeitem.htm) records.
-   Configure caseInfo and documentInfo as you do for any service process.
-   Set svcCatalogItemDefApiName to Dispute\_Management.

Arrange the properties in JSON format as shown in the following example. Within this structure, all attributes are of type Text except for these fields:

-   Amount Fields (type Number)
    -   disputed\_amount
    -   transaction\_amount
    -   actual\_amount
    -   approved\_amount
-   Date Fields (type Date)
    -   received\_date
    -   transaction\_date

```

```

## Invoke the Service Process Resource

After you assemble the payload, you’re ready to invoke the [Service Process](atlas.en-us.industries_reference.meta/industries_reference/connect_resources_service_process_create.htm "Create a service process.") resource using your favorite REST client. This resource creates all the object records related to a transaction dispute record and returns a response like this:

```

```

All records related to the transaction dispute directly or indirectly reference the Case record or the SvcCatalogRequest record.

## Code Examples

```
{
  "attributes": {
    "data": {
      "dispute_info": {
        "data": {
          "dispute_type": {
            "value": "Consumer Dispute"
          },
          "dispute_subtype": {
            "value": "Undelivered Product or Service"
          },
          "description": {
            "value": "Order from acmemerchant.com not delivered but credit card charged."
          },
          "received_date": {
            "value": "2023-07-14"
          },
          "account_id": {
            "value": "001DI000001o10QYAQ"
          },
          "assessment_id": {
            "value": "0U3DI000000018m0AA"
          },
          "financial_account_id": {
            "value": "a0EDI000000Ce6W2AS"
          },
          "actual_amount": {
            "value": 593.63
          },
          "disputed_amount": {
            "value": 400
          },
          "approved_amount": {
            "value": 100
          },
          "status": {
            "value": "Submitted"
          }
        }
      },
      "disputed_transactions_info": {
        "value": [
          {
            "transaction_date": "2023-01-01",
            "transaction_identifier": "1",
            "transaction_amount": 213.1,
            "transaction_description": "t1"
          },
          {
            "transaction_date": "2023-01-01",
            "transaction_identifier": "2",
            "transaction_amount": 150.94,
            "transaction_description": "t2"
          },
          {
            "transaction_date": "2023-01-01",
            "transaction_identifier": "3",
            "transaction_amount": 199.0,
            "transaction_description": "t3"
          },
          {
            "transaction_date": "2023-01-01",
            "transaction_identifier": "4",
            "transaction_amount": 30.59,
            "transaction_description": "t4"
          }
        ]
      }
    }
  },
  "caseInfo": {
    "data": {
      "Subject": {
        "value": "Julia Green Transaction Dispute Request"
      },
      "Origin": {
        "value": "Phone"
      },
      "AccountId": {
        "value": "001DI000001o10QYAQ"
      }
    }
  },
  "documentInfo": {
    "data": [
      {
        "id": "content document id-1",
        "name": "Julia Green credit card statement"
      },
      {
        "id": "content document id-2",
        "name": "acmemerchant.com receipt"
      }
    ]
  },
  "svcCatalogItemDefApiName": "Dispute_Management"
}
```

```
{
  "caseId": "500SM000000ecOLYAY",
  "caseNumber": "00001035",
  "svcCatalogRequestId": "946SM00000000CvYAI"
}
```

## Related Topics

- Service Process (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_service_process_create.htm)
