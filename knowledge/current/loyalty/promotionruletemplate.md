---
title: "PromotionRuleTemplate"
domain: loyalty
topic: promotionruletemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.522Z
estimatedTokens: 432
keywords: [PromotionRuleTemplate, configuration, promotion, rule, template, API, version, 60.0, later, Calls, Special, Access, Rules]
---

# PromotionRuleTemplate

> Represents the configuration of a promotion rule template. This
      object is available in API version 60.0 and later.

# PromotionRuleTemplate

Represents the configuration of a promotion rule template. This object is available in API version 60.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

PromotionRuleTemplate is only available in orgs where Global Promotions Management is enabled. The object isn't available in the Object Manager and can't be customized.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the promotion rule template. |
| Category | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe category of the promotion rule template. |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe description of the promotion rule template. |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for internal use. |
| IconUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe URL of the promotion rule template’s icon. |
| JournalTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the journal type that represents the type of customer activity the promotion rule template is applicable for.This field is a relationship field.Relationship NameJournalTypeRelationship TypeLookupRefers ToJournalType |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the promotion rule template. |
| RuleConfiguration | TypetextareaPropertiesNillableDescriptionThe promotion rule configuration in JSON format. |
| RuleRewardConfiguration | TypetextareaPropertiesNillableDescriptionThe rule reward configuration details in JSON format, which are applicable for the promotion rule template. |
