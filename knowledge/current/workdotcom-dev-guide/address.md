---
title: "Address"
domain: workdotcom-dev-guide
topic: address
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.332Z
estimatedTokens: 337
keywords: [Address, Work.com, uses, standard, store, data, workplace, location, Command, Center, managed, package, installs, custom]
---

# Address

> Work.com uses the Address standard object to store data about a workplace
      location address. The Workplace Command Center managed package installs custom fields for the
      Address standard object.

# Address

Work.com uses the Address standard object to store data about a workplace location address. The Workplace Command Center managed package installs custom fields for the Address standard object.

The VisitorAddressId field on the [Location](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_location.htm "Location is used by Work.com to represent a physical location, with a visitor address, with extra custom fields added by Work.com. If location search filtering for all levels is enabled in the org, a location can also be an abstraction.") object relates address data to a location.

## Custom Fields

| Field | Details |
| --- | --- |
| wkcc__County__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor locations within the United States, use this field for the county in which a location is found. For locations outside the United States, this field can be used for the local municipality name. Available in API version 50.0 and later. |
| wkcc__Region__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe geographic region to which a location belongs. The values for this picklist are managed by Salesforce and can’t be edited. The valid values are:AMERAPACEMEALATAMAvailable in API version 50.0 and later. |

## Related Topics

- Location (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_location.htm)
