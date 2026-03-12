---
title: "Sample Apex Class to Create Case Records for Service Process Requests"
domain: omnistudio
topic: sample-apex-class-to-create-case-records-for-service-process-requests
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:51.631Z
estimatedTokens: 799
keywords: [Sample, Apex, Case, Records, Service, Process, Requests, submitted, invokes, connect, API, extracts, provided, assigns, data]
---

# Sample Apex Class to Create Case Records for Service Process Requests

> When a service process request is submitted, an Apex class invokes the service process
  connect API to create a case. The apex class extracts the details provided for the service request
  and assigns these details to the data attributes defined for the service process in Service
  Process Studio. The Apex class then passes the attributes and their values to the connect API to
  create a case.

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

## Code Examples

```
{
  "attributes": {
    "data": {
      "disputed_transactions_info": {
        "data": {
          "dispute_type": {
            "value": "Consumer Dispute"
          },
          "dispute_subtype": {
            "value": "Undelivered Product or Service"
          },
          "description": {
            "value": "Order was never delivered but charge still appears on credit card statement. Order was placed via their website acmemerchant.com"
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
            "value": 400
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
            "transaction_amount": 199,
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
        "name": "document name-1"
      },
      {
        "id": "content document id-2",
        "name": "document name-2"
      }
    ]
  },
  "svcCatalogItemDefApiName": "Dispute_Management"
}
```

```apex
global with sharing class DisputeManagementHelper implements System.Callable {

    public Object call(String action, Map<String, Object> args) {

        Map<String, Object> inputMap = (Map<String, Object>)args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>)args.get('output');
        Map<String, Object> options = (Map<String, Object>)args.get('options');

        if (action == 'raiseDispute') {

            String accountId = (String)inputMap.get('AccountId');
            String assessmentId = (String)inputMap.get('AssessmentId');
            String FAId = (String)inputMap.get('FinancialAccountId');
            String disputeType = (String)inputMap.get('Type');
            String disputeSubType = (String)inputMap.get('SubType');
            String description = (String)inputMap.get('Description');
            List<Object> transactions = (List<Object>)inputMap.get('SelectedTransactions');

            // Set the input rep
            ConnectApi.ServiceProcessRequestInputRepresentation input = new ConnectApi.ServiceProcessRequestInputRepresentation();
            input.svcCatalogItemDefApiName = (String)inputMap.get('svcCatalogItemDefApiName');
            input.caseInfo = new Map<String, ConnectApi.GenericObject>();
            input.attributes = new Map<String, ConnectApi.GenericObject>();
            input.documentInfo = new List<ConnectApi.DocumentInfoAttributes>();

            //set case info
            ConnectApi.GenericObject subjectObj = new ConnectApi.GenericObject();
            subjectObj.value = 'Transaction Dispute';
            input.caseInfo.put('Subject', subjectObj);


            //set attributes
            ConnectApi.GenericObject accountIdObj = new ConnectApi.GenericObject();
            accountIdObj.value = accountId;

            ConnectApi.GenericObject assessmentIdObj = new ConnectApi.GenericObject();
            assessmentIdObj.value = assessmentId;

            ConnectApi.GenericObject financialAccountIdObj = new ConnectApi.GenericObject();
            financialAccountIdObj.value = FAId;

            ConnectApi.GenericObject disputeTypeObj = new ConnectApi.GenericObject();
            disputeTypeObj.value = disputeType;

            ConnectApi.GenericObject disputeSubTypeObj = new ConnectApi.GenericObject();
            disputeSubTypeObj.value = disputeSubType;

            ConnectApi.GenericObject descriptionObj = new ConnectApi.GenericObject();
            descriptionObj.value = description;

            ConnectApi.GenericObject createdDateObj = new ConnectApi.GenericObject();
            createdDateObj.value = Datetime.now().format('yyyy-MM-dd');

            ConnectApi.GenericObject statusObj = new ConnectApi.GenericObject();
            statusObj.value = 'Submitted';


            List<Map<String, Object>> transactionsList = new List<Map<String, Object>>();

            for (Object t : transactions) {

                Map<String, Object> transactionObj = (Map<String, Object>)t;
                Map<String, Object> transactionObjMap = new Map<String, Object>();

                String transactionDescription = (String)transactionObj.get('TransactionDescription');
                String transactionId = (String)transactionObj.get('TransactionId');
                String transactionDate = (String)transactionObj.get('TransactionPostedDate');
                Double transactionAmt = (Double)transactionObj.get('TransactionAmount');

                transactionObjMap.put('transaction_description', transactionDescription);
                transactionObjMap.put('transaction_identifier', transactionId);
                transactionObjMap.put('transaction_date', transactionDate.split('T', 2)[0]);
                transactionObjMap.put('transaction_amount', transactionAmt);

                transactionsList.add(transactionObjMap);
            }

            ConnectApi.GenericObject actualAmtObj = new ConnectApi.GenericObject();
            actualAmtObj.value = transactionsList[0].get('transaction_amount');

            ConnectApi.GenericObject disputedAmtObj = new ConnectApi.GenericObject();
            disputedAmtObj.value = transactionsList[0].get('transaction_amount');

            ConnectApi.GenericObject transactionObj = new ConnectApi.GenericObject();
            transactionObj.value = transactionsList;

            if (!String.isBlank(assessmentId)) {
                input.attributes.put('assessment_id', assessmentIdObj);
            }
            input.attributes.put('account_id', accountIdObj);
            input.attributes.put('received_date', createdDateObj);
            input.attributes.put('financial_account_id', financialAccountIdObj);
            input.attributes.put('description', descriptionObj);
            input.attributes.put('status', statusObj);
            input.attributes.put('actual_amount', actualAmtObj);
            input.attributes.put('disputed_amount', disputedAmtObj);
            input.attributes.put('disputed_transactions_info', transactionObj);


            // retrieve the documentInfo by the customer
            List<Object> uploadedDocumentInfoList = (List<Object>)inputMap.get('documentInfo');

            // set docInfo
            Set<ConnectApi.DocumentInfoAttributes> docInfoSet = new Set<ConnectApi.DocumentInfoAttributes>();
            if (uploadedDocumentInfoList != null && !uploadedDocumentInfoList.isEmpty()) {
                for(Object uploadedDocInfoMap : uploadedDocumentInfoList) {
                    ConnectApi.DocumentInfoAttributes doc = new ConnectApi.DocumentInfoAttributes();
                    Map<String, Object> uploadMap = (Map<String, Object>)uploadedDocInfoMap;
                    doc.id = (String) uploadMap.get('id');
                    doc.name = (String) uploadMap.get('name');
                    docInfoSet.add(doc);
                }
            }
            for (ConnectApi.DocumentInfoAttributes docInfoAttr : docInfoSet) {
                input.documentInfo.add(docInfoAttr);
            }
            System.debug(input);

            // Invoke API
            Map<String, String> responseMap = new Map<String, String>();
            ConnectApi.ServiceProcessRepresentation output = ConnectApi.IServiceProcessConnectFamily.createCaseServiceProcess(input);
            responseMap.put('caseId', output.caseId);
            responseMap.put('caseNumber', output.caseNumber);
            responseMap.put('svcCatalogRequestId', output.svcCatalogRequestId);

            outputMap.put('apiResponse', responseMap);
            return outputMap;
        }

        return null;
    }
}
```
