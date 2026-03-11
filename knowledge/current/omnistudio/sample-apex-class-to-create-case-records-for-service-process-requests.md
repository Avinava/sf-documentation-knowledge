---
title: "Sample Apex Class to Create Case Records for Service Process Requests"
domain: omnistudio
topic: sample-apex-class-to-create-case-records-for-service-process-requests
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:25:11.407Z
keywords: [Sample, Apex, Class, Create, Case, Records, Service, Process, Requests, Record, Transaction, Dispute, Request]
---

# Sample Apex Class to Create Case Records for Service Process Requests

# Sample Apex Class to Create Case Records for Service Process Requests

When a service process request is submitted, an Apex class invokes the service process connect API to create a case. The apex class extracts the details provided for the service request and assigns these details to the data attributes defined for the service process in Service Process Studio. The Apex class then passes the attributes and their values to the connect API to create a case.

## Apex Class to Create a Case Record for a Transaction Dispute Service Process Request

This sample Apex class helps in processing a request related to a transaction dispute. It extracts details, such as the financial account associated with the dispute, dispute type and subtype, transaction description, status, dispute received date, disputed amount, actual amount, approved amount, supporting documents, and the list of disputed transactions. It maps these details to the data attributes that are defined for the service process in Service Process Studio. The Apex class then constructs an API payload using the retrieved data attributes and their extracted values and passes the payload to the connect API to create a case. When a case is created, service catalog request, dispute, and dispute items records are created.

The Apex class retrieves these data attributes. This set contains a mix of complex attributes, which includes attributes of type lookup, text, currency, date, and ListOfMaps. While defining the data attributes, you can choose relevant objects where to store the values for these attributes. For more information, see [Considerations for Selecting Base Objects](https://help.salesforce.com/s/articleView?id=ind.spd_considerations_for_selecting_base_objects.htm&type=5&language=en_US)

| DATA ATTRIBUTE NAME | DATA ATTRIBUTE API NAME | PARENT DATA ATTRIBUTE | DATA TYPE |
| --- | --- | --- | --- |
| Account Id | account_id | – | Lookup |
| Assessment Id | assessment_id | – | Lookup |
| Financial Account | financial_account_id | – | Lookup |
| Dispute Type | dispute_type | – | Text |
| Dispute Subtype | dispute_subtype | – | Text |
| Description | description | – | Text |
| Disputed Transactions Info | disputed_transactions_info | – | ListOfMaps |
| Transaction Description | transaction_description | disputed_transactions_info | Text |
| Transaction Identifier | transaction_identifier | disputed_transactions_info | Text |
| Transaction Date | transaction_date | disputed_transactions_info | Date |
| Transaction Amount | transaction_amount | disputed_transactions_info | Currency |
| Status | status | – | Text |
| Received Date | received_date | – | Date |
| Actual Amount | actual_amount | – | Currency |
| Disputed Amount | disputed_amount | – | Currency |
| Approved Amount | approved_amount | – | Currency |

This is a sample API payload constructed by the Apex class for the Connect API. The payload is based on the values extracted for the data attributes that were defined to capture the data for the service process request.

```

```

You can use this sample Apex class as a reference to create an Apex class that suits your transaction dispute service process requirements.

```

```