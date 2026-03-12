---
title: "ConnectApi.ComplaintMgmtRequestInputRepresentation"
domain: financial-services-cloud-object-reference
topic: connectapicomplaintmgmtrequestinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.984Z
estimatedTokens: 329
keywords: [Input, representation, complaint]
---

# ConnectApi.ComplaintMgmtRequestInputRepresentation

> Input representation of the request to create a public
      complaint.

# ConnectApi.ComplaintMgmtRequestInputRepresentation

Input representation of the request to create a public complaint.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assessmentId | String | Pre-complaint assessment ID.Pre-complaint assessment contains a set of questions for the customer before creating a complaint. It helps to better understand the customer issue. | Optional | 58.0 |
| caseInfo | ConnectApi.CaseInfoWrapper | Details of the case to be created to address the complaint.A case is created by default when you raise a complaint. Use this field to add more details to the case. | Optional | 58.0 |
| caseParticipantInfo | List<ConnectApi.CaseParticipantInfoWrapper> | Details of the case participant raising the complaint.A case participant can be a customer or a customer representative. | Required | 58.0 |
| complaintInfo | ConnectApi.ComplaintInfoWrapper | Details of the complaint to be raised. | Required | 58.0 |
| documentInfo | List<ConnectApi.DocumentInfoAttributesWrapper> | Details of the documents supporting the complaint. | Optional | 58.0 |
| shouldInclInRegulatoryRpt | Boolean | Indicates whether to include the complaint in regulatory reports (true) or not (false). The default value is false. | Optional | 58.0 |

## Related Topics

- ConnectApi.CaseInfoWrapper (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_connectapi_input_case_info_wrappe.htm)
- ConnectApi.CaseParticipantInfoWrapper (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_connectapi_input_case_participant_info_wrappe.htm)
- ConnectApi.ComplaintInfoWrapper (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_connectapi_input_complaint_info_wrappe.htm)
- ConnectApi.DocumentInfoAttributesWrapper (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_connectapi_input_document_info_attributes_wrappe.htm)
