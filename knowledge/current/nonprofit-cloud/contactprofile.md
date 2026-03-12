---
title: "ContactProfile"
domain: nonprofit-cloud
topic: contactprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.405Z
estimatedTokens: 619
keywords: [ContactProfile, individual, their, ethnicity, citizenship, birth, place, race, Fundraising, API, version, 59.0, later, Calls]
---

# ContactProfile

> Represents information about an individual, such as their ethnicity,
         citizenship, birth place, race, and so on. The Fundraising fields on this object are
      available in API version 59.0 and later.

# ContactProfile

Represents information about an individual, such as their ethnicity, citizenship, birth place, race, and so on. The Fundraising fields on this object are available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetLiquidationValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of assets that can be liquidated within 90 days. |
| BusinessOwnershipValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of private businesses the contact owns. |
| Income | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe annual income amount of the contact. |
| Location | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the contact currently resides. |
| OtherAssetsValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the contact's assets that aren't covered by other ways of measuring net worth. |
| OtherNonprofitGiftAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of donations the contact has given to other nonprofits. |
| OtherNonprofitGiftCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of donations the contact has given to other nonprofits. |
| RealEstateValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of real estate the contact owns. |
| RecurringDonorType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of recurring donor.Possible values are:ActiveFormerLapsed |
| RetirementSavingsAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the contact's retirement savings. |
| StockValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of public stock the contact owns. |
| Website | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA website that's associated with the contact. |

For more information, see [ContactProfile in Education Cloud](https://developer.salesforce.com/docs/atlas.en-us.260.0.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_contactprofile.htm).
