---
title: "Automotive Cloud Fields on BusinessProfile"
domain: automotive-cloud
topic: automotive-cloud-fields-on-businessprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.086Z
estimatedTokens: 547
keywords: [Automotive, Cloud, BusinessProfile, Standard, extend, represent, partner, account]
---

# Automotive Cloud Fields on BusinessProfile

> Standard fields extend the BusinessProfile object for use in Automotive Cloud to
      represent information about partner account details.

# Automotive Cloud Fields on BusinessProfile

Standard fields extend the BusinessProfile object for use in Automotive Cloud to represent information about partner account details.

## Fields

| Field | Details |
| --- | --- |
| BusinessPartnerCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code that identifies the business partner. This field is available in API version 56.0 and later. |
| BusinessPartnerRegisteredName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the business partner that’s registered as the legal name with the authorities. This field is available in API version 56.0 and later. |
| BusinessPartnerType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of business partner and the role of the partner in relation to a vehicle. This field is available in API version 56.0 and later.Possible values are:Original Equipment ManufacturerSales DealerService DealerCustomerDistributorFinancierImporterThird-Party Body Shop |
| ExternalReferenceNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the business partner that’s maintained on its source system. This field is unique within your organization. This field is available in API version 56.0 and later. |
| RegionName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the name of the region where the business partner operates from. This field is available in API version 56.0 and later.Possible values are:CaliforniaTexasWashington |
| ServiceType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the type of service provided by the business partner. This field is available in API version 56.0 and later.Possible values are:Spare Parts SalesSalesRepair & MaintenanceConsultation |

#### See Also

-   [*Object Reference for the Salesforce Platform*: BusinessProfile](https://developer.salesforce.com/docs/atlas.en-us.260.0.psc_api.meta/psc_api/sforce_api_objects_businessprofile.htm)
