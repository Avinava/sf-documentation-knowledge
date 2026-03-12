---
title: "ModerationRule"
domain: tooling-api
topic: moderationrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.276Z
estimatedTokens: 1118
keywords: [ModerationRule, rule, Experience, Cloud, site, moderate, member-generated, content, Tooling, API, version, 36.0, later, SOAP, Calls]
---

# ModerationRule

> Represents a rule used in
            your Experience Cloud site to moderate member-generated content. Available in
        Tooling API version 36.0 and later.

# ModerationRule

Represents a rule used in your Experience Cloud site to moderate member-generated content. Available in Tooling API version 36.0 and later.

Moderation rules help protect your site from spammers, bots, and offensive or inappropriate content. Create and modify rules for your Experience Cloud site to moderate member-generated content. Each rule specifies the member-generated content the rule applies to, the criteria to enforce the rule on, and the moderation action to take.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update()

## Supported REST HTTP Methods

DELETE, GET, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| Action | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklistDescriptionRequired. Indicates the moderation action that you want to take. The valid values are:BlockReviewReplaceFlagFreezeAndNotify (Reserved for future use.) |
| ActionLimit | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIndicates the moderation action limit measured in minutes. Available in API version 39.0 and later. |
| Active | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether the moderation rule is active (true) or inactive (false). |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionA description of the moderation rule. |
| DeveloperName | TypestringPropertiesFilter, Group, Namefield, SortDescriptionThe developer’s internal name for the moderation rule used in the API. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the moderation rule. Valid values are:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the moderation rule. |
| Metadata | Typemns:ModerationRulePropertiesCreate, Nillable, UpdateDescriptionModeration rule metadata. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NotifyLimit | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIndicates the notification limit (in seconds) of the moderation rule. Available in API version 39.0 and later. |
| TimePeriod | TypeRateLimitTimePeriod (enumeration of type string)PropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe values that represent the time-frame for which a rate limiting rule is applied. The two values available represent a time periods measured in minutes: “Short” represents 3 minutes and “Medium” represents 15 minutes. Available in API version 39.0 and later. Valid values are:ShortMedium |
| Type | TypeModerationRuleType (enumeration of type string)PropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionType of moderation rule. Content rules protect your site from offensive language and inappropriate content created by spammers or malicious members. Rate rules protect your site against spammers and bots that attack your site by posting the same message multiple times in a row. Available in API version 39.0 and later. Valid values are:ContentRate |
| UserMessage | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe message you want your members to see when their content is blocked. Use the %BLOCKED_KEYWORD% variable to display up to five blocked words in the user message. If you don’t specify a message, the member sees the standard message: “You can’t use %BLOCKED_KEYWORD% or other inappropriate words in this site. Review your content and try again.” |
