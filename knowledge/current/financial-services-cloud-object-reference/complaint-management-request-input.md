---
title: "Complaint Management Request Input"
domain: financial-services-cloud-object-reference
topic: complaint-management-request-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:28.301Z
estimatedTokens: 322
keywords: [Complaint, Management, Input, representation]
---

# Complaint Management Request Input

> Input representation of the request to create a public
    complaint.

# Complaint Management Request Input

Input representation of the request to create a public complaint.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assessmentId | String | Pre-complaint assessment ID.Pre-complaint assessment contains a set of questions for the customer before creating a complaint. It helps to better understand the customer issue. | Optional | 58.0 |
| caseInfo | Case Info Wrapper | Details of the case to be created to address the complaint.A case is created by default when you raise a complaint. Use this field to add more details to the case. | Optional | 58.0 |
| caseParticipantInfo | Case Participant Info Wrapper[] | Details of the case participant raising the complaint.A case participant can be a customer or a customer representative. | Required | 58.0 |
| complaintInfo | Complaint Info Wrapper | Details of the complaint to be raised. | Required | 58.0 |
| documentInfo | Document Info Attributes Wrapper [] | Details of the documents supporting the complaint. | Optional | 58.0 |
| shouldInclInRegulatoryRpt | Boolean | Indicates whether to include the complaint in regulatory reports (true) or not (false). The default value is false. | Optional | 58.0 |

## Code Examples

```
{
    "assessmentId": "0U3RO0000000Cp20AE",
    "complaintInfo": {
        "incidentDate": "2022-04-07",
        "complaintType": "Information, sums/charges or product performance",
        "complaintSubType": "Product disclosure information",
        "status": "In Progress",
        "subject": "Account Annual Maintenance Charges",
        "priority": "High",
        "description": "Annual maintenance charges not disclosed upfront",
        "email": "Tody@email.com",
        "productType": "Credit Card or Prepaid Card",
        "additionalInfo": {
            "data": {
                "Comments": {
                    "value": "This case needs to be handled on priority"
                }
            }
        }
    },
    "caseInfo": {
        "accountId": "001RO000004WKi1YAG",
        "subject": "Reversal of Account Annual Maintenance Charges",
        "status": "Pending",
        "description": "Annual maintenance charges to be reversed",
        "origin": "Email",
        "reason": "Other",
        "additionalInfo": {
            "data": {
                "Priority": {
                    "value": "High"
                }
            }
        }
    },
    "caseParticipantInfo": {
        "data": [
            {
                "role": "Complainant Representative",
                "status": "Pending",
                "participantId": "001RO000004WKi1YAG",
                "preferredCallTimeFrom": "10:30:30",
                "preferredCallTimeTo": "12:30:30",
                "preferredCommunicationMode": "Email",
                "authorizationProof": "Email",
                "additionalInfo": {
                    "data": {
                        "Name": {
                          "value": "CP-0000000039"
                }
            }
        }
    },
    "documentInfo": {
        "data": [
            {
                "id": "069RO0000004YynYAE",
                "name": "Aadhar"
            },
            {
                "id": "069RO0000004p1lYAA",
                "name": "Pan",
                "typeId": ”0deRO00000000J7YAI”
            }
        ]
    },
    "shouldInclInRegulatoryRpt": true
}
```

## Related Topics

- Case Info
                                                Wrapper (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_case_info_wrappe.htm)
- Case
                                                Participant Info Wrapper (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_case_participant_info_wrappe.htm)
- Complaint Info
                                                Wrapper (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_complaint_info_wrappe.htm)
- Document Info Attributes Wrapper (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_document_info_attributes_wrappe.htm)
