---
title: "GeneratedWaste"
domain: netzero-cloud-dev-guide
topic: generatedwaste
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:59.252Z
estimatedTokens: 2669
keywords: [GeneratedWaste, waste, generated, operations, treating, end-of-life, products, were, sold, API, version, 54.0, later, Calls, Associated]
---

# GeneratedWaste

> Represents the information on the waste generated in operations, the waste
         generated while treating end-of-life products that were sold, and so on. This object
      is available in API version 54.0 and later.

# GeneratedWaste

Represents the information on the waste generated in operations, the waste generated while treating end-of-life products that were sold, and so on. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CrbnEmssnScopeAlloc | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe allocation of scope emissions that override the scope allocation defined for the waste type and the disposal type.Possible values are:SCP3EndLifeTreatSoldProducts—Scope 3 End-of-Life Treatment of Sold ProductsSCP3WasteGeneratedInOperations—Scope 3 Waste Generated In OperationsScope1—Scope 1 |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescription |
| DisposalSiteType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of disposal site. The emissions from waste disposal are considered as scope 3 emissions when you select Offsite and as scope 1 emissions when you select Onsite.Possible values are:OffsiteOnsite |
| DisposalType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the method used to remove waste from the environment after it has been collected and processed.Possible values are:Anaerobically Digested (Dry Digestate with Curing)Anaerobically Digested (Wet Digestate with Curing)CombustedCompostedLandfilledRecycledOther Disposal OperationsOther Recovery OperationsPrepared for Reuse |
| DisposedWasteQtyUnitRefId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe custom disposed waste quantity unit of measure that's associated with the generated waste.This field is a relationship field.Relationship NameDisposedWasteQtyUnitRefRefers ToSustainabilityUom |
| DisposedWasteQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescription |
| DisposedWasteQuantityUnit | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of measure of the disposed waste quantity.Possible values are:KG—kgLB—lbLONG_TON—Long TonMETRIC_TONNE—Metric TonneSHORT_TON—Short TonThe default value is 'KG'. |
| DisposedWasteQuantityinTonnes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe quantity of disposed waste in tonnes that’s calculated based on the disposed waste quantity and disposed waste quantity unit. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the waste-related data is sent for reporting. |
| IsHazardous | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the waste material is hazardous (true) or not (false).The default value is 'false'. |
| IsRadioactive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the waste material is radioactive (true) or not (false).The default value is false. |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThe default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Scope1EmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 emissions from associated stationary assets for waste that’s disposed onsite. |
| Scope3CrbnFtprntId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scope 3 carbon footprint record associated with this generated waste record. This specified record is used to aggregate scope 3 waste-related emissions and the other scope 3 emissions.This is a relationship field.Relationship NameScope3CrbnFtprntRelationship TypeLookupRefers ToScope3CrbnFtprnt |
| Scope3EmssnSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scope 3 emissions source record associated with the waste related to non-stationary assets, such as waste related to the end-of-life treatment of sold products.This is a relationship field.Relationship NameScope3EmssnSrcRelationship TypeLookupRefers ToScope3EmssnSrc |
| Scp3DnstrmEndLifeSoldPrdct | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 3 downstream emissions from the end-of-life treatment of sold products. This value is calculated based on the waste associated with scope 3 emissions source. |
| Scp3UpstrmWstGenInOper | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 3 upstream emissions from the waste generated in operations. This value is calculated based on the waste associated with the stationary asset environmental source that’s disposed offsite. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the waste-related data is sent for reporting. |
| StnryAssetEnvrSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stationary asset environmental source record associated with the waste related to stationary assets, such as the waste generated in operations.This is a relationship field.Relationship NameStnryAssetEnvrSrcRelationship TypeLookupRefers ToStnryAssetEnvrSrc |
| SuplScope1EmissionsInTco2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 1 emissions value that’s added to the total scope 1 emissions. |
| SuplScp3DnstrmEndLifeSoldPrdct | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental downstream scope 3 emissions from the end-of-life treatment of sold products. This value is added to the total scope 3 downstream emissions from the end-of-life treatment of sold products. |
| SuplScp3UpstrmWstGenInOper | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental upstream scope 3 emissions from the waste generated in operations. This value is added to the total scope 3 upstream emissions from waste generated in operations. |
| SupplierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe supplier associated with this generated waste record.This is a relationship field.Relationship NameSupplierRelationship TypeLookupRefers ToSupplier |
| WasteFootprintId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe waste footprint record associated with this generated waste record. This value is used to aggregate the waste quantity and the waste-related emissions data.This is a relationship field.Relationship NameWasteFootprintRelationship TypeLookupRefers ToWasteFootprint |
| WasteType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionPossible values are:Aluminum CansAluminum IngotAsphalt ConcreteAsphalt ShinglesBeefBranchesBreadCRT DisplaysCarpetClay BricksConcreteCopper WireCorrugated ContainersDairy ProductsDesktop CPUsDimensional LumberDrywallElectronic PeripheralsFiberglass InsulationFlat-panel DisplaysFly AshFood WasteFood Waste (meat only)Food Waste (non-meat)Fruits and VegetablesGlassGrainsGrassHDPEHard-copy DevicesLDPELLDPELeavesMagazines/Third-class mailMedium-density FiberboardMixed ElectronicsMixed MSW (municipal solid waste)Mixed MetalsMixed OrganicsMixed Paper (general)Mixed Paper (primarily from offices)Mixed Paper (primarily residential)Mixed PlasticsMixed RecyclablesNewspaperOffice PaperPETPLAPPPSPVCPhonebooksPortable Electronic DevicesPoultrySteel CansTextbooksTiresVinyl FlooringWood FlooringYard Trimmings |
| WstDispoEmssnFctrId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe waste disposal emissions factor set record that's used to calculate emissions based on the waste type and disposal type.This is a relationship field.Relationship NameWstDispoEmssnFctrRelationship TypeLookupRefers ToWstDispoEmssnFctrSet |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GeneratedWasteChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[GeneratedWasteFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[GeneratedWasteHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[GeneratedWasteShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- GeneratedWasteChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- GeneratedWasteFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- GeneratedWasteHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- GeneratedWasteShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
