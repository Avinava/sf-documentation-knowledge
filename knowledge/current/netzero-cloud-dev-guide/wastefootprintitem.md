---
title: "WasteFootprintItem"
domain: netzero-cloud-dev-guide
topic: wastefootprintitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.403Z
estimatedTokens: 1184
keywords: [WasteFootprintItem, volume, waste, disposal, aggregated, generated, either, part, operations, end-, of-, life, product, API, version]
---

# WasteFootprintItem

> Represents the volume by waste type and disposal type of aggregated waste
         generated either as part of operations or during the end- of- life of a product. This
      object is available in API version 54.0 and later.

# WasteFootprintItem

Represents the volume by waste type and disposal type of aggregated waste generated either as part of operations or during the end- of- life of a product. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DisposalType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPossible values are:Anaerobically Digested (Dry Digestate with Curing)Anaerobically Digested (Wet Digestate with Curing)CombustedCompostedLandfilledRecycled |
| DisposedWasteQuantityPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage difference of disposed waste quantity based on the waste type and disposal type. |
| DisposedWasteQuantityinTonnes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total quantity of disposed waste in tonnes. This value is calculated based on the waste type and disposal type. |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the waste footprint item record and the associated energy use records are locked for editing.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| ParentWasteFootprintId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent waste footprint record for this waste footprint item record.This is a relationship field.Relationship NameParentWasteFootprintRelationship TypeLookupRefers ToWasteFootprint |
| WasteType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPossible values are:Aluminum CansAluminum IngotAsphalt ConcreteAsphalt ShinglesBeefBranchesBreadCRT DisplaysCarpetClay BricksConcreteCopper WireCorrugated ContainersDairy ProductsDesktop CPUsDimensional LumberDrywallElectronic PeripheralsFiberglass InsulationFlat-panel DisplaysFly AshFood WasteFood Waste (meat only)Food Waste (non-meat)Fruits and VegetablesGlassGrainsGrassHDPEHard-copy DevicesLDPELLDPELeavesMagazines/Third-class mailMedium-density FiberboardMixed ElectronicsMixed MSW (municipal solid waste)Mixed MetalsMixed OrganicsMixed Paper (general)Mixed Paper (primarily from offices)Mixed Paper (primarily residential)Mixed PlasticsMixed RecyclablesNewspaperOffice PaperPETPLAPPPSPVCPhonebooksPortable Electronic DevicesPoultrySteel CansTextbooksTiresVinyl FlooringWood FlooringYard Trimmings |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WasteFootprintItemChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[WasteFootprintItemFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WasteFootprintItemHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- WasteFootprintItemChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- WasteFootprintItemFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- WasteFootprintItemHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
