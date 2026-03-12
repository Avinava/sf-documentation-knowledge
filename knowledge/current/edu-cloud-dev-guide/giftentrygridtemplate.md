---
title: "GiftEntryGridTemplate"
domain: edu-cloud-dev-guide
topic: giftentrygridtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.551Z
estimatedTokens: 302
keywords: [GiftEntryGridTemplate, templates, customize, gift, entry, grid, Fundraising, API, version, 66.0, later, Special, Access, Rules]
---

# GiftEntryGridTemplate

> Represents templates that customize the gift entry grid in
        Fundraising.  Available in API version 66.0 and later.

# GiftEntryGridTemplate

Represents templates that customize the gift entry grid in Fundraising. Available in API version 66.0 and later.

## Special Access Rules

This object is available only if the Fundraising Access license is enabled, the Fundraising User system permission is assigned to users, and the Gift Entry Grid is enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the gift entry grid template. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this template is active and available for use in the Gift Entry Grid. Active templates appear as values in the Screen Template Name picklist on the gift batch object. |
| IsSingleGiftDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the template is the default template for single gift entry (true) or not (false, the default). |
| TemplateConfiguration | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe template configuration file that includes the data for fields, columns, and components. |
