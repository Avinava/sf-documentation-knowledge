---
title: "Carbon Credit Project Input"
domain: netzero-cloud-dev-guide
topic: carbon-credit-project-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.253Z
estimatedTokens: 606
keywords: [Carbon, Credit, Project, Input, representation]
---

# Carbon Credit Project Input

> Input representation of the carbon credit project.

# Carbon Credit Project Input

Input representation of the carbon credit project.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalBenefits | String | Specifies the additional benefits related to the carbon credit project.Possible values are:AccessBiodiversityEducationEnergyHealth | Optional | 57.0 |
| country | String | The country in which the carbon credit project is implemented. | Optional | 57.0 |
| crbnCrMethodology | String | The method that is used to adjust the carbon credits during the lifecycle of the project. | Optional | 57.0 |
| description | String | The description of the carbon credit project. | Optional | 57.0 |
| externalIdentifier | String | The external identifier of the data that is imported for the carbon credit project. | Required | 57.0 |
| fundedBy | String | The name of the organization that's funding the carbon credit project. | Optional | 57.0 |
| mitigationType | String | Specifies the mitigation strategy associated with this carbon credit project.Possible values are:PreventionReductionRemovalSequestration | Optional | 57.0 |
| name | String | The name of the environmental project that generates carbon credits by removing greenhouse gases or preventing a certain quantity of greenhouse gases from being released. | Required | 57.0 |
| projRegistryIdentifier | String | The unique identifier that's assigned by the registry to the carbon credit project. | Optional | 57.0 |
| projectType | String | Specifies the type of the carbon credit project.Possible values are:AgricultureForestryandLandUseFuelSwitchingHouseholdDevicesIndustrialManufacturingRenewableEnergyTransportationWasteDisposal | Optional | 57.0 |
| projectUrl | String | The URL that contains the carbon credit project details. | Optional | 57.0 |
| region | String | The region within the country where the carbon credit project is implemented. | Required | 57.0 |
| standardAgencyName | String | Name of the agency associated with the carbon credit project.Possible values are:Climate, CommunityandBiodiversityStandardsGoldStandardVerifiedCarbonStandardVoluntaryOffsetStandard | Optional | 57.0 |
| verifiedBy | String | The name of the organization that verified the carbon credit project. | Optional | 57.0 |
| voluntaryRegistryName | String | The name of the registry that lists the carbon credit projects. | Optional | 57.0 |
