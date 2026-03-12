---
title: "WorkReportLineItem"
domain: eu-developer-guide
topic: workreportlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.498Z
estimatedTokens: 1245
keywords: [WorkReportLineItem, measure, work, performed, contractor, business, consumer, location, program, API, version, 59.0, later, Calls, Special]
---

# WorkReportLineItem

> Represents one measure of work performed by a contractor business for a
         consumer at a location within a program. This object is available in API version 59.0
      and later.

# WorkReportLineItem

Represents one measure of work performed by a contractor business for a consumer at a location within a program. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The following fields are available only with the Contractor Work Report Access and User Work Report Access permission sets.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe utility's consumer or business account associated with the work report line item.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ContractorAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe contractor associated with the work report line itemRelationship NameContractorAccountRelationship TypeLookupRefers ToAccount |
| CustomerFirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first name of the customer |
| CustomerLastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last name of the customer |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the work report line item. |
| ExternalDocumentIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe externally generated ID associated with uploaded documents to this work report line item for application and invoice approvals. |
| HasError | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the work report line item has submission errors.The default value is false. |
| LaborCost | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost of labor for this work report line item. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location associated with the work report line item. The premises of the customer account in which the measure was installed.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| LocationStreetAddress | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference street address for the customer's premises. |
| MaterialCost | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost of materials and parts for this work report line item. |
| Measure | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe equipment or part that is installed, repaired, or maintained for this work report line item |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the work report line item. |
| OtherCost | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost of taxes, fees, and other charges that are not attributed to materials or labor for this work report line item. |
| ProcessingStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the processing status of the work report line item.Possible values are:ApplicationCreatedDetailsRequiredInProgressNewRejectedThe default value is New. |
| ProductQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quantity of the measure installed at the premises for the same program. |
| ProgramProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program product associated with the work report line item. These are individual measures within a program implemented at the location by the contractor.Relationship NameProgramProductRelationship TypeLookupRefers ToProgramProduct |
| ProjectName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contractor's project name |
| ServiceDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the measure was implemented at the customer's premises. |
| TotalCost | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of the material cost, labor cost and the other costs in this record. The total invoice for the service provided to the property for the measure within the program for the account on this line item. |
| UploadedById | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account associated with uploading the work report.Relationship NameUploadedByRelationship TypeLookupRefers ToUser |
| WorkReportId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work report ID associated with the work report line item generated after submission in run time.Relationship NameWorkReportRelationship TypeLookupRefers ToWorkReport |
