---
title: "Invoice Input for Ingestion"
domain: revenue-cloud
topic: invoice-input-for-ingestion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.177Z
estimatedTokens: 200
keywords: [Invoice, Input, Ingestion, representation, details, invoice, must, generated, ingested, Billing.]
---

# Invoice Input for Ingestion

> Input representation of the details of the invoice that must be generated for or
    ingested into Billing.

# Invoice Input for Ingestion

Input representation of the details of the invoice that must be generated for or ingested into Billing.

JSON example to ingest a draft invoice with a tax callout

```

```

JSON example to ingest a draft invoice without a tax callout

```

```

JSON example to ingest posted invoices

```

```

JSON example to generate invoices from debit memos

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invoices | Invoice Ingestion Input[] | List of invoices to be generated or ingested, enabling the submission and processing of multiple invoices in a single request. This API supports one invoice per request. To send 25 requests at a time, see the Composite Batch request. | Required | 63.0 |

## Code Examples

```
{
  "invoices": [
    {
      "shouldCalculateTax": true,
      "taxCalculationStatus": "Estimated",
      "graph": {
        "graphId": "CreateInvoice",
        "records": [
          {
            "referenceId": "refAccount",
            "record": {
              "attributes": {
                "type": "Account",
                "method": "GET",
                "id": "ExternalId__c/123"
              }
            }
          },
          {
            "referenceId": "refContact",
            "record": {
              "attributes": {
                "type": "Contact",
                "method": "GET",
                "id": "ExternalId__c/123"
              }
            }
          },
          {
            "referenceId": "refInvoice",
            "record": {
              "Attributes": {
                "type": "Invoice",
                "method": "POST"
              },
              "billingAccountId": "001SG00000mKFfGYAW",
              "billToContactId": "003SG00000Bnv5HYAR",
              "paymentTermId": "2OXxx0000004CFUGA2",
              "referenceEntityId": "801xx000003GeQQAA0",
              "status": "Draft",
              "invoiceDate": "2024-12-19",
              "currencyIsoCode": "USD",
              "dueDate": "2024-12-19",
              "invoiceNumber": "DOC-10",
              "description": "Sample Invoice",
              "uniqueIdentifier": "5873af8f-f007-4aa0-9e3d-53a08c3f59de"
            }
          },
          {
            "referenceId": "refBillingAddress",
            "record": {
              "Attributes": {
                "type": "InvoiceAddressGroup",
                "method": "POST"
              },
              "street": "123 Main St",
              "city": "NewYork",
              "postalCode": "10001",
              "state": "New York",
              "country": "US",
              "longitude": "123.456",
              "latitude": "78.910",
              "invoiceId": "3ttSG000000EPjJYAW"
            }
          },
          {
            "referenceId": "refShippingAddress",
            "record": {
              "attributes": {
                "type": "InvoiceAddressGroup",
                "method": "POST"
              },
              "street": "123 Main St",
              "city": "NewYork",
              "postalCode": "10001",
              "state": "New York",
              "country": "US",
              "longitude": "123.456",
              "latitude": "78.910",
              "invoiceId": "3ttSG000000EPjJYAW"
            }
          },
          {
            "referenceId": "refInvoiceLine1",
            "record": {
              "attributes": {
                "type": "InvoiceLine",
                "method": "POST"
              },
              "name": "productName1",
              "product2Id": "01txx0000006ic4AAA",
              "invoiceLineStartDate": "2024-11-10",
              "invoiceLineEndDate": "2024-11-13",
              "quantity": "10",
              "unitPrice": "10",
              "chargeAmount": "100",
              "invoiceId": "3ttSG000000EPjJYAW",
              "referenceEntityItemId": "802xx000001neB9AAI",
              "billingAddressId": "8zzSG0000000IbFYAU",
              "shippingAddressId": "8zzSG0000000IbGYAU",
              "taxTreatmentId": "1ttxx0000000BOTAA2",
              "legalEntityId": "0fwxx0000000001AAA",
              "legalEntityAccountingPeriodId": "1HLxx0000004C92GAE"
            }
          },
          {
            "referenceId": "refInvoiceLine2",
            "record": {
              "attributes": {
                "type": "InvoiceLine",
                "method": "POST"
              },
              "name": "productName2",
              "product2Id": "01txx0000006ic4AAA",
              "invoiceLineStartDate": "2024-11-10",
              "invoiceLineEndDate": "2024-11-15",
              "quantity": "10",
              "unitPrice": "10",
              "chargeAmount": "100",
              "invoiceId": "3ttSG000000EPjJYAW",
              "referenceEntityItemId": "802xx000001neB9AAI",
              "billingAddressId": "8zzSG0000000IbFYAU",
              "shippingAddressId": "8zzSG0000000IbGYAU",
              "taxTreatmentId": "1ttxx00000001DpAAI",
              "legalEntityId": "0fwxx0000000001AAA",
              "legalEntityAccountingPeriodId": "1HLxx0000004C92GAE"
            }
          },
          {
            "referenceId": "refInvoiceLineTax",
            "record": {
              "attributes": {
                "type": "InvoiceLineTax",
                "method": "POST"
              },
              "taxAmount": 7.25,
              "taxCode": "CA-94121",
              "taxName": "CALIFORNIA",
              "taxRate": 0.25,
              "taxEffectiveDate": "2024-11-10",
              "taxDocumentNumber": "123",
              "taxExemptAmount": 0,
              "taxTransactionNumber": "kl",
              "description": "Associated tax line.",
              "invoiceLineId": "5TVSG0000004dAr4AI"
            }
          },
          {
            "referenceId": "refInvoiceLineTax1",
            "record": {
              "attributes": {
                "type": "InvoiceLineTax",
                "method": "POST"
              },
              "taxAmount": "10",
              "taxCode": "CA-94121",
              "taxName": "CALIFORNIA",
              "taxRate": 0.25,
              "taxEffectiveDate": "2024-11-10",
              "taxDocumentNumber": "123",
              "taxExemptAmount": 0,
              "taxTransactionNumber": "125",
              "invoiceLineId": "5TVSG0000004xeD4AQ",
              "description": "Associated tax line."
            }
          }
        ]
      }
    }
  ]
}
```

```
{
  "invoices": [
    {
      "taxCalculationStatus": "Estimated",
      "graph": {
        "graphId": "123",
        "records": [
          {
            "referenceId": "refAccount",
            "record": {
              "attributes": {
                "type": "Account",
                "method": "GET",
                "id": "TestExternalId__c/123"
              }
            }
          },
          {
            "referenceId": "refInvoice",
            "record": {
              "Attributes": {
                "type": "Invoice",
                "method": "POST"
              },
              "billingAccountId": "@{refAccount.Id}",
              "billToContactId": "003xx000004Wk8qAAC",
              "paymentTermId": "2OXxx0000004CFUGA2",
              "referenceEntityId": "801xx000003GeQQAA0",
              "status": "Draft",
              "invoiceDate": "2024-12-19",
              "currencyIsoCode": "USD",
              "dueDate": "2024-12-19",
              "invoiceNumber": "DOC-10",
              "description": "testInvoice",
              "uniqueIdentifier": "c76011a1-e113-49d9-9c54-3b5c68950ada"
            }
          },
          {
            "referenceId": "refBillingAddress",
            "record": {
              "Attributes": {
                "type": "InvoiceAddressGroup",
                "method": "POST"
              },
              "street": "123 Main St",
              "city": "NewYork",
              "postalCode": "10001",
              "state": "New York",
              "country": "US",
              "longitude": "123.456",
              "latitude": "78.910",
              "invoiceId": "@{refInvoice.id}"
            }
          },
          {
            "referenceId": "refShippingAddress",
            "record": {
              "attributes": {
                "type": "InvoiceAddressGroup",
                "method": "POST"
              },
              "street": "123 Main St",
              "city": "NewYork",
              "postalCode": "10001",
              "state": "New York",
              "country": "US",
              "longitude": "123.456",
              "latitude": "78.910",
              "invoiceId": "@{refInvoice.id}"
            }
          },
          {
            "referenceId": "refInvoiceLine1",
            "record": {
              "attributes": {
                "type": "InvoiceLine",
                "method": "POST"
              },
              "name": "productName1",
              "product2Id": "01txx0000006ic4AAA",
              "invoiceLineStartDate": "2024-11-10",
              "invoiceLineEndDate": "2024-11-13",
              "quantity": "10",
              "unitPrice": "10",
              "chargeAmount": "100",
              "invoiceId": "@{refInvoice.id}",
              "referenceEntityItemId": "802xx000001neB9AAI",
              "billingAddressId": "@{refBillingAddress.id}",
              "shippingAddressId": "@{refShippingAddress.id}",
              "taxTreatmentId": "1ttxx0000000BOTAA2",
              "legalEntityId": "0fwxx0000000001AAA",
              "legalEntityAccountingPeriodId": "1HLxx0000004C92GAE"
            }
          },
          {
            "referenceId": "refInvoiceLine2",
            "record": {
              "attributes": {
                "type": "InvoiceLine",
                "method": "POST"
              },
              "name": "productName2",
              "product2Id": "01txx0000006ic4AAA",
              "invoiceLineStartDate": "2024-11-10",
              "invoiceLineEndDate": "2024-11-15",
              "quantity": "10",
              "unitPrice": "10",
              "chargeAmount": "100",
              "invoiceId": "@{refInvoice.id}",
              "referenceEntityItemId": "802xx000001neB9AAI",
              "billingAddressId": "@{refBillingAddress.id}",
              "shippingAddressId": "@{refShippingAddress.id}",
              "taxTreatmentId": "1ttxx00000001DpAAI",
              "legalEntityId": "0fwxx0000000001AAA",
              "legalEntityAccountingPeriodId": "1HLxx0000004C92GAE"
            }
          },
          {
            "referenceId": "refInvoiceLineTax",
            "record": {
              "attributes": {
                "type": "InvoiceLineTax",
                "method": "POST"
              },
              "taxAmount": 7.25,
              "taxCode": "CA-94121",
              "taxName": "CALIFORNIA",
              "taxRate": 0.25,
              "taxEffectiveDate": "2024-11-10",
              "taxDocumentNumber": "123",
              "taxExemptAmount": 0,
              "taxTransactionNumber": "kl",
              "description": "description for tax Line",
              "invoiceLineId": "@{refInvoiceLine1.id}"
            }
          },
          {
            "referenceId": "refInvoiceLineTax1",
            "record": {
              "attributes": {
                "type": "InvoiceLineTax",
                "method": "POST"
              },
              "taxAmount": "10",
              "taxCode": "CA-94121",
              "taxName": "CALIFORNIA",
              "taxRate": 0.25,
              "taxEffectiveDate": "2024-11-10",
              "taxDocumentNumber": "123",
              "taxExemptAmount": 0,
              "taxTransactionNumber": "125",
              "invoiceLineId": "@{refInvoiceLine2.id}",
              "description": "description for tax Line"
            }
          }
        ]
      }
    }
  ]
}
```

```
{
  "invoices": [
    {
      "taxCalculationStatus": "Posted",
      "graph": {
        "graphId": "123",
        "records": [
          {
            "referenceId": "refAccount",
            "record": {
              "attributes": {
                "type": "Account",
                "method": "GET",
                "id": "ExternalId__c/123"
              }
            }
          },
          {
            "referenceId": "refInvoice",
            "record": {
              "Attributes": {
                "type": "Invoice",
                "method": "POST"
              },
              "billingAccountId": "001SG00000njpF3YAI",
              "billToContactId": "003xx000004Wk8qAAC",
              "paymentTermId": "2OXxx0000004CFUGA2",
              "referenceEntityId": "801xx000003GeQQAA0",
              "status": "Posted",
              "invoiceDate": "2024-12-19",
              "currencyIsoCode": "USD",
              "dueDate": "2024-12-19",
              "invoiceNumber": "DOC-10",
              "description": "Sample Invoice",
              "uniqueIdentifier": "9994b2c4-c0c3-47c3-806f-ae6e1f16bac3"
            }
          },
          {
            "referenceId": "refBillingAddress",
            "record": {
              "Attributes": {
                "type": "InvoiceAddressGroup",
                "method": "POST"
              },
              "street": "123 Main St",
              "city": "NewYork",
              "postalCode": "10001",
              "state": "New York",
              "country": "US",
              "longitude": "123.456",
              "latitude": "78.910",
              "invoiceId": "3ttSG000000FFWbYAO"
            }
          },
          {
            "referenceId": "refShippingAddress",
            "record": {
              "attributes": {
                "type": "InvoiceAddressGroup",
                "method": "POST"
              },
              "street": "123 Main St",
              "city": "NewYork",
              "postalCode": "10001",
              "state": "New York",
              "country": "US",
              "longitude": "123.456",
              "latitude": "78.910",
              "invoiceId": "3ttSG000000FFWbYAO"
            }
          },
          {
            "referenceId": "refInvoiceLine1",
            "record": {
              "attributes": {
                "type": "InvoiceLine",
                "method": "POST"
              },
              "name": "productName1",
              "product2Id": "01txx0000006ic4AAA",
              "invoiceLineStartDate": "2024-11-10",
              "invoiceLineEndDate": "2024-11-13",
              "quantity": "10",
              "unitPrice": "10",
              "chargeAmount": "100",
              "invoiceId": "3ttSG000000FFWbYAO",
              "referenceEntityItemId": "802xx000001neB9AAI",
              "billingAddressId": "8zzSG0000000NmDYAU",
              "shippingAddressId": "8zzSG0000000IbGYAU",
              "taxTreatmentId": "1ttxx0000000BOTAA2",
              "legalEntityId": "0fwxx0000000001AAA",
              "legalEntityAccountingPeriodId": "1HLxx0000004C92GAE"
            }
          },
          {
            "referenceId": "refInvoiceLine2",
            "record": {
              "attributes": {
                "type": "InvoiceLine",
                "method": "POST"
              },
              "name": "productName2",
              "product2Id": "01txx0000006ic4AAA",
              "invoiceLineStartDate": "2024-11-10",
              "invoiceLineEndDate": "2024-11-15",
              "quantity": "10",
              "unitPrice": "10",
              "chargeAmount": "100",
              "invoiceId": "3ttSG000000FFWbYAO",
              "referenceEntityItemId": "802xx000001neB9AAI",
              "billingAddressId": "8zzSG0000000NmDYAU",
              "shippingAddressId": "8zzSG0000000IbGYAU",
              "taxTreatmentId": "1ttxx00000001DpAAI",
              "legalEntityId": "0fwxx0000000001AAA",
              "legalEntityAccountingPeriodId": "1HLxx0000004C92GAE"
            }
          },
          {
            "referenceId": "refInvoiceLineTax1",
            "record": {
              "attributes": {
                "type": "InvoiceLineTax",
                "method": "POST"
              },
              "taxAmount": "10",
              "taxCode": "CA-94121",
              "taxName": "CALIFORNIA",
              "taxRate": 0.25,
              "taxEffectiveDate": "2024-11-10",
              "taxDocumentNumber": "123",
              "taxExemptAmount": 0,
              "taxTransactionNumber": "125",
              "invoiceLineId": "5TVSG0000004mJ04AI",
              "description": "Associated tax line."
            }
          }
        ]
      }
    }
  ]
}
```

```
{
  "invoices": [
    {
      "shouldCalculateTax": true,
      "taxCalculationStatus": "Estimated",
      "graph": {
        "graphId": "CreateInvoice",
        "records": [
          {
            "referenceId": "refInvoice",
            "record": {
              "Attributes": {
                "type": "Invoice",
                "method": "POST"
              },
              "accountId": "001SB00001V3RxNYAV",
              "billToContactId": "003xx000004WhUQAA0",
              "referenceEntityId": "4DmAAC000008UP70BM",
              "status": "Draft",
              "invoiceDate": "2024-12-19",
              "dueDate": "2024-12-19",
              "description": "Sample Invoice"
            }
          }
        ]
      }
    }
  ]
}
```

## Related Topics

- Invoice Ingestion Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_invoice_ingestion_input.htm)
