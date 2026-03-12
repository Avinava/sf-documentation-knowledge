---
title: "ActnblListKeyPrfmIndDef"
domain: omnistudio
topic: actnbllistkeyprfminddef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:50.531Z
estimatedTokens: 694
keywords: [ActnblListKeyPrfmIndDef, custom, key, performance, indicators, that're, defined, specific, API, version, 64.0, later, Parent, File, Suffix, 60.0, Calls, Special, Access, Rules]
---

# ActnblListKeyPrfmIndDef

> Represents the custom key performance indicators that are defined for
         a specific field in an object. This object is available in API version 60.0 and
      later.

# ActnblListKeyPrfmIndDef

Represents the custom key performance indicators that are defined for a specific field in an object. This object is available in API version 60.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Access to this object requires the Industries Sales Excellence add-on license.

## Fields

| Field | Details |
| --- | --- |
| AggregateOperationName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe name of the aggregate operation associated with the custom key performance indicator.Possible values are:AverageCountMaxMinSum |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the custom key performance indicator. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the actionable list key performance indicator definition.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe field on which the operation associated with the custom key performance indicator is performed. |
| FilterExpression | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe filters associated with the field on which the operation is performed. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLanguage of the actionable list key performance indicator definition.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Controlling label for this actionable list key performance indicator definition. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ObjectName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe object associated with the custom key performance indicator.Possible values are:AccountActionableListMember—Actionable List MemberAssetCaseContactHealthcareFacility—Healthcare FacilityLeadOpportunityMemberPlanLearnerProfile |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the custom key performance indicator.Possible values are:ActiveInactive |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ActnblListKeyPrfmIndDef xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>Total Revenue</masterLabel>
    <description>Total Revenue</description>
    <objectName>ACCOUNT</objectName>
    <aggregateOperationName>SUM</aggregateOperationName>
    <fieldName>AnnualRevenue</fieldName>
    <filterExpression></filterExpression>
    <status>ACTIVE</status>
</ActnblListKeyPrfmIndDef>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ActnblListKeyPrfmIndDef</name>
    </types>
    <version>66.0</version>
</Package>
```
