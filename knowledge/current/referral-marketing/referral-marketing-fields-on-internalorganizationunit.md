---
title: "Referral Marketing Fields on InternalOrganizationUnit"
domain: referral-marketing
topic: referral-marketing-fields-on-internalorganizationunit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.134Z
estimatedTokens: 353
keywords: [Referral, Marketing, InternalOrganizationUnit, Standard, extend, represent, Marketing’s, connection, Cloud, business, unit, API, version, 60.0, later]
---

# Referral Marketing Fields on InternalOrganizationUnit

> Standard fields extend the InternalOrganizationUnit object for use in
         Referral Marketing to represent to information about Referral Marketing’s connection with a
         Marketing Cloud business unit. The Referral Marketing fields on
      InternalOrganizationUnit are available in API version 60.0 and later. These fields are
      available only for B2C referral programs.

# Referral Marketing Fields on InternalOrganizationUnit

Standard fields extend the InternalOrganizationUnit object for use in Referral Marketing to represent to information about Referral Marketing’s connection with a Marketing Cloud business unit. The Referral Marketing fields on InternalOrganizationUnit are available in API version 60.0 and later. These fields are available only for B2C referral programs.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessUsage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe business purpose of the record.Possible value is:REFERRAL_MARKETING |
| EmailConfiguration | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe send classification that’s used by the connected Marketing Cloud business unit to send emails. |
| OrganizationIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the company’s Marketing Cloud business unit that Referral Marketing is connected to. |

#### See Also

-   [InternalOrganizationUnit](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_internalorganizationunit.htm)
