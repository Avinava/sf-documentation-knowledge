---
title: "FinServ_Employment__c"
domain: financial-services-cloud-object-reference
topic: finservemploymentc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.091Z
estimatedTokens: 615
keywords: [FinServ_Employment__c, individual’s, employment, history, FinServ, _Employment, Calls]
---

# FinServ_Employment__c

> Represents information about an individual’s employment
      history.

# FinServ\_Employment\_\_c

Represents information about an individual’s employment history.

## Supported Calls

create(), delete(), describeLayout(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AnnualIncome__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionGross annual income as reported on the most recent tax return. |
| Contact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual’s contact record. |
| EmployerAddress__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAddress of the individual’s employer. |
| EmployerPhoneNumber__c | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number of the employer. |
| EmploymentStatus__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionEmployment status. Valid values:EmployedSelf-EmployedHomemakerRetiredStudentUnemployed with IncomeUnemployed Without Income |
| EndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date at former employer. |
| LengthOfEmployment__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLength of employment in years (to two decimal places). |
| Occupation__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionJob category. Valid values:Architecture and EngineeringArts, Design, Entertainment, Sports, and MediaBuilding and Grounds Cleaning or MaintenanceCommunity and Social ServiceComputer and MathematicalConstruction and ExtractionEducation, Training, and LibraryFarming, Fishing, and ForestryFood Preparation and ServingHealthcare Practitioners and TechnicalHealthcare SupportInstallation, Maintenance, and RepairLegalLife, Physical, and Social ScienceManagementOffice AdminOtherPersonal Care and ServiceProductionProtective ServiceSalesTransportation and Material Moving |
| Position__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionJob title. |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the individual in an external data source. |
| StartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the individual began working for current employer. |
