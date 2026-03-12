---
title: "PltnImpactRiskOppSummary"
domain: netzero-cloud-dev-guide
topic: pltnimpactriskoppsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.686Z
estimatedTokens: 2286
keywords: [PltnImpactRiskOppSummary, pollution, impacts, risks, opportunities, company, discloses, part, ESRS, Water, marine, resources, API, version, 65.0]
---

# PltnImpactRiskOppSummary

> Represents the pollution impacts, risks, and opportunities that a company
         discloses as part of ESRS E3 - Water and marine resources. This object is available in
      API version 65.0 and later.

# PltnImpactRiskOppSummary

Represents the pollution impacts, risks, and opportunities that a company discloses as part of ESRS E3 - Water and marine resources. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the company's pollution-related impacts, risks and opportunities disclosed as part of ESRS E1 - Climate change. |
| DisclsReportingPeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier of the reporting period.This field is a relationship field.Relationship NameDisclsReportingPeriodRefers ToDisclsReportingPeriod |
| E2AmountSbstncCncrnHazardCls | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of substances of concern that are generated or used during production, or procured, broken down by main hazard classes of substances of concern. |
| E2AmountSbstncCncrnProcured | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of substances of concern that are generated or used during production or that are procured. |
| E2AmtSbstncCncrnEmssnHazardCls | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of substances of concern that leave facilities as emissions by main hazard classes of substances of concern. |
| E2AmtSbstncCncrnEmssnPrdct | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of substances of concern that leave facilities as emissions, as products, or as part of products or services. |
| E2AmtSbstncCncrnPartPrdctHzrd | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of substances of concern that leave facilities as part of products by main hazard classes of substances of concern. |
| E2AmtSbstncCncrnPrdctHazardCls | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of substances of concern that leave facilities as products by main hazard classes of substances of concern. |
| E2AmtSbstncCncrnSrvcsHazardCls | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of substances of concern that leave facilities as services by main hazard classes of substances of concern. |
| E2AmtSbstncHighCncrnEmssnHzrd | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of substances of very high concern that leave facilities as emissions by main hazard classes of substances of concern. |
| E2AmtSbstncHighCncrnPartHzrd | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of substances of very high concern that leave facilities as part of products by main hazard classes of substances of concern. |
| E2AmtSbstncHighCncrnPrdctHzrd | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of substances of very high concern that leave facilities as products by main hazard classes of substances of concern. |
| E2AmtSbstncHighCncrnSrvcsHzrd | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of substances of very high concern that leave facilities as services by main hazard classes of substances of concern. |
| E2AntcpFinclEffMaterialRisks | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe anticipated financial effect of material risks and opportunities arising from pollution-related impacts. |
| E2CptlExpIncidentsDeposits | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe capital expenditure (CapEx) incurred in conjunction with major incidents and deposits (pollution). |
| E2EmissionsAirPollutant | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe emissions to air by pollutant (tCO2e). |
| E2EmissionsSoilPollutant | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe emissions to soil by pollutant (tCO2e). |
| E2EmissionsWaterPollutant | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe emissions to water by pollutant (tCO2e). |
| E2OpExpIncidentsDeposits | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe operating expenditure (OpEx) incurred in conjunction with major incidents and deposits (pollution). |
| E2PctEmssnPolutSoilWtrRisk | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of total emissions of pollutants to soil occurring in areas at water risk. |
| E2PctEmssnPolutSoilWtrStrss | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of total emissions of pollutants to soil occurring in areas of high-water stress. |
| E2PctEmssnPolutWtrAreaWtrRisk | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of total emissions of pollutants to water that occur in areas at water risk. |
| E2PctEmssnPolutWtrAreaWtrStrss | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of total emissions of pollutants to water occurring in areas of high-water stress. |
| E2PctNetRevSrvcsSbstncCncrn | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of net revenue from products and services containing substances of concern. |
| E2PctNetRevSvcSbstncHighCncrn | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of net revenue from products and services containing substances of very high concern. |
| E2PrvsnEnvrPrtcRemediationCost | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe provisions for environmental protection and remediation costs (pollution). |
| E2TotSbstncHighCncrnGenHzrdCls | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of substances of very high concern that are generated or used during production or that are procured by main hazard classes of substances of concern. |
| E2TotSbstncHighCncrnPrdctHzrd | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of substances of very high concern that leave facilities as emissions, as products, or as part of products or services by main hazard classes of substances of concern. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SubsidiaryAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that's identified as a subsidiary company.This field is a relationship field.Relationship NameSubsidiaryAccountRefers ToAccount |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PltnImpactRiskOppSummaryChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PltnImpactRiskOppSummaryHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PltnImpactRiskOppSummaryShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PltnImpactRiskOppSummaryChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- PltnImpactRiskOppSummaryHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- PltnImpactRiskOppSummaryShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
