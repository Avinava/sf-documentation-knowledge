---
title: "CRDMetricData"
domain: health-cloud-object-reference
topic: crdmetricdata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.440Z
estimatedTokens: 1182
keywords: [CRDMetricData, FHIR, resource, maps, ServiceInformationRequest, ServiceInfoRequestDetail, ServiceInfoResponseCoverage, SvcInfoRespCoverageDetail, ServiceInfoResponseAction, ServiceInfoRespSuggestion, ServiceInfoRespOvrideOptobjects, V4.0, Coverage, Requirement, Discovery]
---

# CRDMetricData

> The CRDMetricData FHIR resource maps to the
   ServiceInformationRequest, ServiceInfoRequestDetail,
   ServiceInfoResponseCoverage,
   SvcInfoRespCoverageDetail,ServiceInfoResponseAction
  ServiceInfoRespSuggestion,
  ServiceInfoRespOvrideOptobjects.

# CRDMetricData

The CRDMetricData FHIR resource maps to the ServiceInformationRequest, ServiceInfoRequestDetail, ServiceInfoResponseCoverage, SvcInfoRespCoverageDetail,ServiceInfoResponseAction ServiceInfoRespSuggestion, ServiceInfoRespOvrideOptobjects.

## FHIR V4.0 - Coverage Requirement Discovery Data Model Mapping

Here’s how the fields defined by FHIR for [CRDMetricData](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-CRDMetricData.html) and the [CDS hooks specifications](https://cds-hooks.hl7.org/2.0/) map to the fields in Salesforce.

| CRDMetricdata element | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| source | ServiceInformationRequest.SourceType | Picklist | 1.1 | N/A |
| hookInstance | ServiceInformationRequest.SvcRqstInvocationIdentifier | Text | 1.1 | N/A |
| hookType | ServiceInformationRequest.ServiceType | Picklist | 1.1 | N/A |
| providerId | ServiceInformationRequest.RequesterStandardIdentifier | Lookup: Identifier | 1.1 | N/A |
| groupId | ServiceInformationRequest.RequesterOrgStdIdentifier | Lookup: Identifier | 1.1 | N/A |
| payerId | ServiceInformationRequest.RecipientOrgIdentifier | Lookup: Identifier | 1.1 | N/A |
| requestTime | ServiceInformationRequest.RequestDateTime | DateTime | 1.1 | N/A |
| responseTime | ServiceInformationRequest.ResponseDateTime | DateTime | 0.1 | N/A |
| httpResponse | ServiceInformationRequest.ResponseCode | Integer | 1.1 | N/A |
| issue | ServiceInfoRequestDetail.DetailType | Picklist | 0.M | Select Issue as the picklist value in DetailType. |
| issue.code | ServiceInfoRequestDetail.DetailCodeType | Picklist | 1.1 | N/A |
| issue.details | ServiceInfoRequestDetail.DetailCode | Lookup: Code Set, Code Set Bundle | 0.1 | N/A |
| tokenUse | ServiceInformationRequest.AccessTokenUsageStatus | Picklist | 0.1 | N/A |
| orderDetail | ServiceInfoRequestDetail.DetailType | Picklist | 0.M | Select Order Detail as the picklist value in DetailType. |
| Card.summary | ServiceInformationResponse.Summary | Text | 0.1 | CDS specifications of Cardattributes. |
| Card.uuid | ServiceInformationResponse.Identifier | Text | 0.1 |
| Card.detail | ServiceInformationResponse.AdditionalNote | String Plus Clob | 0.1 |
| Card.indicator | ServiceInformationResponse.UrgencyIndicator | Picklist | 0.1 |
| Card.selectionBehavior | ServiceInformationResponse.SuggestionSelectionType | Picklist | 0.1 |
| Card.suggestions | ServiceInfoRespSuggestion | Object | 0.1 |
| Suggestion. label | ServiceInfoRespSuggestion.Name | Text | 1.1 | CDS specifications of Suggestionattributes. |
| Suggestion.uuid | ServiceInfoRespSuggestion.Identifier | Text | 0.1 |
| Suggestion.isRecommended | ServiceInfoRespSuggestion.IsHighlyRecommended | Boolean | 0.1 |
| Suggestion.action | ServiceInfoResponseAction | Object | 0.1 |
| Action.type | ServiceInfoResponseAction.Type | Picklist | 1.1 | CDS specifications of Actionattributes. |
| Action.description | ServiceInfoResponseAction.Description | String Plus Clob | 1.1 |
| Action.resource | ServiceInfoResponseAction.Context | String Plus Clob | 0.1 |
| Action.resourceId | ServiceInfoResponseAction.ContextIdentifier | Text | 0.1 |
| Card.overrideReasons | ServiceInfoRespOvrideOpt | Object | 0.M | N/A |
| Source.label | ServiceInformationResponse.ReferenceSourceName | String | 0.1 | CDS specifications of Sourceattributes. |
| Source.url | ServiceInformationResponse.ReferenceSourceUrl | URL | 0.1 |
| Source.icon | ServiceInformationResponse.ReferenceSourceIconUrl | URL | 0.1 |
| Source.topic | ServiceInformationResponse.ReferenceSourceCategoryCodeId | Lookup: Code Set | 0.1 |
| response.type | ServiceInformationResponse.ResponseSubtype | Picklist | 0.1 | N/A |
| response.focus | ServiceInformationResponse.FocusType | Multi-picklist | 0.M | N/A |
| response.engagement | ServiceInformationResponse.ResponseEngagementStatus | Picklist | 0.1 | N/A |
| response.coverageInfo.covered | ServiceInfoResponseCoverage.CoverageIndicator | Picklist | 0.1 | N/A |
| response.coverageInfo.paNeeded | ServiceInfoResponseCoverage.PreapprovalRequirementInd | Picklist | 0.1 | N/A |
| response.coverageInfo.docNeeded | ServiceInfoResponseCoverage.RequiredDocumentationType | Picklist | 0.1 | N/A |
| response.coverageInfo.infoNeeded | ServiceInfoResponseCoverage.RequiredAddlInfoType | Picklist | 0.1 | N/A |
| response.coverageInfo.assertionId | ServiceInfoResponseCoverage.CoverageAssertionIdentifier | Picklist | 0.1 | N/A |
| response.coverageInfo.satisfiedId | ServiceInfoResponseCoverage.PreapprovalIdentifier | String | 0.1 | N/A |
| response.coverageInfo.businessLine | ServiceInfoResponseCoverage.CoveragePlanTypeId | Lookup: Code Set, Code Set Bundle | 0.1 | N/A |
