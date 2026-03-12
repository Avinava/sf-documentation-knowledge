---
title: "WstDispoEmssnFctrSetItm"
domain: netzero-cloud-dev-guide
topic: wstdispoemssnfctrsetitm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.426Z
estimatedTokens: 1259
keywords: [WstDispoEmssnFctrSetItm, individual, emissions, factors, scope, waste, handling, disposal, API, version, 54.0, later, Calls, Associated, Objects]
---

# WstDispoEmssnFctrSetItm

> Represents the individual emissions factors for scope 3 waste handling based
         on the waste type and disposal type. This object is available in API version 54.0 and
      later.

# WstDispoEmssnFctrSetItm

Represents the individual emissions factors for scope 3 waste handling based on the waste type and disposal type. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DisposalType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of waste disposal.Possible values are:Anaerobically Digested (Dry Digestate with Curing)Anaerobically Digested (Wet Digestate with Curing)CombustedCompostedLandfilledRecycled |
| EmissionsFactorValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe emissions factor value to convert waste quantity into the corresponding emissions |
| EmissionsFactorValueUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the emissions factor value.Possible values are:KG_CO2E_PER_KG_WASTE_MATERIAL—kg CO2e/kg Waste MaterialLB_CO2E_PER_LB_WASTE_MATERIAL—lb CO2e/lb Waste MaterialTCO2E_PER_LONG_TON_WASTE_MATERIAL—tCO2e/Long Ton Waste MaterialTCO2E_PER_METRIC_TONNE_WASTE_MATERIAL—tCO2e/Metric Tonne Waste MaterialTCO2E_PER_SHORT_TON_WASTE_MATERIAL—tCO2e/Short Ton Waste MaterialThe default value is KG_CO2E_PER_KG_WASTE_MATERIAL. |
| EmssnFctrTco2eTonneWstMtrl | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions factor value in tCO2e per tonne of waste material. This value is calculated based on the emissions factor value and the emissions factor value unit. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier for the emissions factor. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| ParentEmissionFactorId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe name of the parent emissions factor.This is a relationship field.Relationship NameParentEmissionFactorRelationship TypeLookupRefers ToWstDispoEmssnFctrSet |
| ReferenceDataLoadLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe reference data load log record that's associated with the emissions factor.This field is a relationship field.Relationship NameReferenceDataLoadLogRelationship TypeLookupRefers ToReferenceDataLoadLog |
| ShouldLockDtastUpdtForRec | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the emissions factor record can be locked from dataset updates.The default value is false. |
| WasteType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of waste.Possible values are:Aluminum CansAluminum IngotAsphalt ConcreteAsphalt ShinglesBeefBranchesBreadCRT DisplaysCarpetClay BricksConcreteCopper WireCorrugated ContainersDairy ProductsDesktop CPUsDimensional LumberDrywallElectronic PeripheralsFiberglass InsulationFlat-panel DisplaysFly AshFood WasteFood Waste (meat only)Food Waste (non-meat)Fruits and VegetablesGlassGrainsGrassHDPEHard-copy DevicesLDPELLDPELeavesMagazines/Third-class mailMedium-density FiberboardMixed ElectronicsMixed MSW (municipal solid waste)Mixed MetalsMixed OrganicsMixed Paper (general)Mixed Paper (primarily from offices)Mixed Paper (primarily residential)Mixed PlasticsMixed RecyclablesNewspaperOffice PaperPETPLAPPPSPVCPhonebooksPortable Electronic DevicesPoultrySteel CansTextbooksTiresVinyl FlooringWood FlooringYard Trimmings |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WstDispoEmssnFctrSetItmFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WstDispoEmssnFctrSetItmHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- WstDispoEmssnFctrSetItmFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- WstDispoEmssnFctrSetItmHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
