---
title: "Visit"
domain: mfg-api-devguide
topic: visit
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.315Z
estimatedTokens: 1560
keywords: [Visit, manager, schedules, rep, perform, usually, distributor, supplier, partner, locations, API, version, 56.0, later, Calls]
---

# Visit

> Represents information about a visit that a manager schedules for a field rep
         to perform, usually at distributor, supplier, and partner locations. This object is
      available in API version 56.0 and later.

# Visit

Represents information about a visit that a manager schedules for a field rep to perform, usually at distributor, supplier, and partner locations. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the visit.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ActualVisitEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the visit ended. |
| ActualVisitStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the visit started. |
| AddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe address associated with the visit.This field is a relationship field.Relationship NameAddressRefers ToAddress |
| ContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe contact associated with the visit.This field is a relationship field.Relationship NameContactRefers ToContact |
| ContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe purpose of the visit.This field is a polymorphic relationship field.Relationship NameContextRefers ToAcctMgrTarget, AdvAcctForecastSetPartner, AdvAcctForecastSetUse, Asset, Case, Claim, Data_Processing_Engine_Node_Metric__c, ManufacturingProgram, RebateProgram, SalesAgreement, ServiceAppointment, Vehicle, omnistudio__CardFrameworkConfiguration__c, omnistudio__DRBatchQueue__c, omnistudio__DRBulkData__c, omnistudio__DREncryption__c, omnistudio__DRWorker__c, omnistudio__Interface_DRGeneric__c, omnistudio__TestResult__c, omnistudio__TriggerSetup__c, omnistudio__UISettings__c, omnistudio__VlocityDataPack__c, omnistudio__VlocityDocuSignTemplate__c, omnistudio__VlocityErrorLogEntry__c, omnistudio__VlocityScheduledJob__c, omnistudio__VlocityTrackingEntry__c |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCurrency of the sales agreement.Possible values are:ARS—Argentine PesoAUD—Australian DollarBBD—Barbados DollarBHD—Bahraini DinarBMD—Bermuda DollarBRL—Brazilian RealCAD—Canadian DollarCLP—Chilean PesoCNY—Chinese YuanCRC—Costa Rica ColonCZK—Czech KorunaDKK—Danish KroneDOP—Dominican PesoEUR—EuroFJD—Fiji DollarGBP—British PoundGTQ—Guatemala QuetzalHKD—Hong Kong DollarHRK—KunaHUF—Hungarian ForintIDR—Indonesian RupiahILS—Israeli ShekelISK—Iceland KronaJPY—Japanese YenKYD—Cayman Islands DollarMXN—Mexican PesoUSD—U.S. DollarVND—Vietnam DongXCD—East Caribbean DollarXPF—Pacific FrancThe default value is USD. |
| InstructionDescription | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecial instructions provided by a manager that the visitor refers to during a visit. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LocationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe location of the supplier, distributor, or partner where the visit must be conducted.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the visit record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the visit record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentVisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent visit associated with the current visit.This field is a relationship field.Relationship NameParentVisitRefers ToVisit |
| PlaceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the place that the visitor visits.This field is a polymorphic relationship field.Relationship NamePlaceRefers ToAddress, ContactPointAddress, Location |
| PlannedVisitEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the visit is expected to end. |
| PlannedVisitStartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the visit is expected to start. |
| ServiceResourceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThis field is a relationship field.Relationship NameServiceResourceRefers ToServiceResource |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the visit. Visitors can’t edit this field.Possible values are:AbandonedCompletedErrorInProgress—In ProgressNonePlannedUnscheduledThe default value is Planned.The default value is Planned. |
| StatusRemarks | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe reasons for abandoning or completing the visit as provided by the visitor. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe user associated with the visit.This field is a relationship field.Relationship NameUserRefers ToUser |
| VisitPriority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the visit.Possible values are:HighLowMedium |
| VisitTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of visit such as inspection type, or work type.This field is a polymorphic relationship field.Relationship NameVisitTypeRefers ToWorkType |
| VisitorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the person visiting the place.This field is a polymorphic relationship field.Relationship NameVisitorRefers ToContact, ServiceResource, User |
