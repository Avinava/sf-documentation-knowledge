---
title: "Loyalty Management Fields on InternalOrganizationUnit"
domain: loyalty
topic: loyalty-management-fields-on-internalorganizationunit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.026Z
estimatedTokens: 332
keywords: [Loyalty, Management, InternalOrganizationUnit, Standard, extend, represent, Promotion, Management’s, connection, Marketing, Cloud, business, unit, API, version]
---

# Loyalty Management Fields on InternalOrganizationUnit

> Standard fields extend the InternalOrganizationUnit object for use in Loyalty
         Management to represent to information about Global Promotion Management’s connection with
         a Marketing Cloud business unit. The Loyalty Management fields on
      InternalOrganizationUnit are available in API version 60.0 and later.

# Loyalty Management Fields on InternalOrganizationUnit

Standard fields extend the InternalOrganizationUnit object for use in Loyalty Management to represent to information about Global Promotion Management’s connection with a Marketing Cloud business unit. The Loyalty Management fields on InternalOrganizationUnit are available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The Delivery field is only available in orgs where Global Promotions Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| BusinessUsage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe business purpose of the record.Possible values are:UNIFIED_PROMOTIONS—Global Promotions Management |
| EmailConfiguration | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe send classification that’s used by the connected Marketing Cloud business unit to send emails. |
| OrganizationIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the company’s Marketing Cloud business unit that Global Promotions Management is connected to. |
