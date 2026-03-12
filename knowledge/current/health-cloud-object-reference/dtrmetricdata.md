---
title: "DTRMetricData"
domain: health-cloud-object-reference
topic: dtrmetricdata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.487Z
estimatedTokens: 772
keywords: [DTRMetricData, FHIR, resource, maps, ServiceInformationRequest, ServiceInfoRequestDetail, ServiceInfoRequestOperation, andServiceInfoResponseCoverageobjects, V4.0, Documentation, Templates, Rules, Data, Model, Mapping]
---

# DTRMetricData

> The DTRMetricData FHIR resource maps to the
   ServiceInformationRequest, ServiceInfoRequestDetail,
   ServiceInfoRequestOperation,
  andServiceInfoResponseCoverageobjects.

# DTRMetricData

The DTRMetricData FHIR resource maps to the ServiceInformationRequest, ServiceInfoRequestDetail, ServiceInfoRequestOperation, andServiceInfoResponseCoverageobjects.

## FHIR V4.0 - Documentation Templates and Rules Data Model Mapping

Here’s how the fields defined by FHIR for [DTRMetricData](https://build.fhir.org/ig/HL7/davinci-dtr/StructureDefinition-DTRMetricData-definitions.html) map to the fields in Salesforce.

| DTRMetricdata element | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| source | ServiceInformationRequest.SourceType | Picklist | 1.1 | N/A |
| sofApp | ServiceInformationRequest.ApplicationUrl | URL | 0.1 | N/A |
| providerId | ServiceInformationRequest.RequesterStandardIdentifier | Lookup: Identifier | 1.1 | N/A |
| groupId | ServiceInformationRequest.RequesterOrgStdIdentifier | Lookup: Identifier | 1.1 | N/A |
| payerId | ServiceInformationRequest.RecipientOrgIdentifier | Lookup: Identifier | 1.1 | N/A |
| orderItem | ServiceInfoRequestDetail.DetailType | Picklist | 1.1 | Select Order Detail as the picklist value in DetailType. |
| assertion.Id | ServiceInfoRequestDetail.DetailType | Picklist | 1.1 | Select Assertion Identifier as the picklist value in DetailType. |
| ServiceInfoRequestDetail.DetailValue | String | 0.1 | Enter the assertion ID in Detail Value when the detail type is Assertion Identifier. |
| action.detail | ServiceInfoRequestOperation.OperationType |  | 1.1 | N/A |
| action.questionnaire | ServiceInfoRequestOperation.QuestionnaireUrl | URL | 0.1 | N/A |
| action.requestTime | ServiceInfoRequestOperation.InitiatedDateTime | DateTime | 1.1 | N/A |
| action.responseTime | ServiceInfoRequestOperation.ResponseDateTime | DateTime | 0.1 | N/A |
| action.httpResponse | ServiceInfoRequestOperation.ResponseStatusCode | Integer | 0.1 | N/A |
| issue | ServiceInfoRequestDetail.DetailType | Picklist | 0.M | Select Issue as the picklist value for DetailType. |
| issue.code | ServiceInfoRequestDetail.DetailCodeType | Picklist | 1.1 | N/A |
| issue.details | ServiceInfoRequestDetail.DetailCode | Lookup: Code Set, Code Set Bundle | 0.1 | N/A |
| doc.Reason | ServiceInformationRequest.DocRequiredReasonType | Multi-select Picklist | 0.M | N/A |
| launchMode | ServiceInformationRequest.ContextType | Picklist | 0.1 | N/A |
| coverageInfo.covered | ServiceInfoResponseCoverage.CoverageIndicator | Picklist | 0.1 | N/A |
| coverageInfo.paNeeded | ServiceInfoResponseCoverage.PreapprovalRequirementInd | Picklist | 0.1 | N/A |
| coverageInfo.docNeeded | ServiceInfoResponseCoverage.RequiredDocumentationType | Picklist | 0.1 | N/A |
| coverageInfo.infoNeeded | ServiceInfoResponseCoverage.RequiredAddlInfoType | Picklist | 0.1 | N/A |
| coverageInfo.assertionId | ServiceInfoResponseCoverage.CoverageAssertionIdentifier | Picklist | 0.1 | N/A |
| coverageInfo.satisfiedId | ServiceInfoResponseCoverage.PreapprovalIdentifier | String | 0.1 | N/A |
| coverageInfo.businessLine | ServiceInfoResponseCoverage.CoveragePlanTypeId | Lookup: Code Set, Code Set Bundle | 0.1 | N/A |
