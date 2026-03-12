---
title: "AnnualEmssnInventoryExtension"
domain: netzero-cloud-dev-guide
topic: annualemssninventoryextension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.488Z
estimatedTokens: 2421
keywords: [AnnualEmssnInventoryExtension, additional, company's, total, carbon, emissions, particular, year, metric, tonnes, CO2e, tCO2e, API, version, 65.0]
---

# AnnualEmssnInventoryExtension

> Represents additional information about a company's total carbon emissions
         for a particular year in metric tonnes of CO2e (tCO2e). This object is available in
      API version 65.0 and later.

# AnnualEmssnInventoryExtension

Represents additional information about a company's total carbon emissions for a particular year in metric tonnes of CO2e (tCO2e). This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AllocScope1EmssnCmclBuildings | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 emissions allocated to stationary assets of type commercial building. |
| AllocScope1EmssnDataCenters | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 emissions allocated to stationary assets of type data center. |
| AllocScope1EmssnFleetVehicles | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 emissions allocated to vehicle assets of type fleet vehicle. |
| AllocScope1EmssnPrivateJets | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 emissions allocated to vehicle assets of type private jet. |
| AllocScope2EmssnFleetVehicles | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 2 emissions allocated to vehicle assets of type fleet vehicle. |
| AllocScope2EmssnPrivateJets | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 2 emissions allocated to vehicle assets of type private jet. |
| AllocScope2LocBsdEmssnCmclBld | TypedoublePropertiesFilter, Nillable, SortDescriptionThe location-based scope 2 emissions allocated to stationary assets of type commercial building. |
| AllocScope2LocBsdEmssnDataCtr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe location-based scope 2 emissions allocated to stationary assets of type data center. |
| AllocScope2MktBsdEmssnCmclBld | TypedoublePropertiesFilter, Nillable, SortDescriptionThe market-based scope 2 emissions allocated to stationary assets of type commercial building. |
| AllocScope2MktBsdEmssnDataCtr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe market-based scope 2 emissions allocated to stationary assets of type data center. |
| AllocScope3EmssnDnstrmLsdAst | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to downstream leased assets across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp1EmssnWstGenInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 emissions allocated to waste generated in operations. |
| AllocScp3EmssnBusTrvl | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to business travel across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3EmssnCptlGoods | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to capital goods across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3EmssnDnstrmTrnspDistr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to downstream transportation and distribution across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3EmssnEmpCommute | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to employee commute across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3EmssnFranchises | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to franchises across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3EmssnFuelEnrgyActvty | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to fuel energy and activity across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3EmssnInvestments | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to investments across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3EmssnProcSoldPrdct | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to the processing of sold products across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3EmssnPurchGoodsSrvcs | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to purchased goods and services across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3EmssnUpstrmLsdAst | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to upstream leased assets across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3EmssnUpstrmTrnspDistr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to upstream transportation and distribution across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3EmssnUseOfSoldPrdct | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to the use of sold products across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3EmssnWstGenInOper | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to waste generated in operations across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3EndLifeTreatSoldPrdct | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of scope 3 emissions allocated to end of life treatment of sold products across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocScp3MktEmssnFuelEnrgy | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 3 emissions from producing fuel and energy that’s calculated based on the market-based emissions in the related category 3 carbon footprint record or the override value. |
| AllocScp3UncategorizedEmssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of uncategorized scope 3 emissions across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocSuplScope3DnstrmEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of supplemental scope 3 downstream emissions across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocSuplScope3Emission | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of supplemental scope 3 emissions across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AllocSuplScope3UpstrmEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of supplemental scope 3 upstream emissions across the stationary asset carbon footprint, vehicle asset carbon footprint, and scope 3 carbon footprint. |
| AnnualEmissionInventoryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe annual emissions inventory related to the annual emissions inventory extension record.This field is a relationship field.Relationship NameAnnualEmissionInventoryRelationship TypeMaster-detailRefers ToAnnualEmssnInventory (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AnnualEmssnInventoryExtensionChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AnnualEmssnInventoryExtensionHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AnnualEmssnInventoryExtensionChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- AnnualEmssnInventoryExtensionHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
