---
title: "PricingActionParameters"
domain: revenue-cloud
topic: pricingactionparameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:10.230Z
estimatedTokens: 701
keywords: [PricingActionParameters, pricing, action, that's, associated, context, definition, procedure, Parent, File, Suffix, Directory, Location, Version, Special, API, version, 60.0, later, Calls]
---

# PricingActionParameters

> Represents a pricing action associated to a context definition and a pricing
         procedure. This object is available in API version 60.0 and later.

# PricingActionParameters

Represents a pricing action associated to a context definition and a pricing procedure. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContextDefinition | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe context definition record associated with the pricing action. |
| ContextMapping | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe context mapping record that's associated with the pricing action. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the pricing action parameter record.This name must begin with a letter and use only alphanumeric characters and underscores. It can't include spaces, end with an underscore, or have two consecutive underscores. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the pricing action comes into effect. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time till when the pricing action is in effect. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the pricing action parameter.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe master label of the pricing action parameter. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There’s an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There’s no namespace prefix for all other objects. |
| ObjectName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the object associated to the pricing action.Possible values are:CaseContractOpportunityOrderQuoteSalesAgreementWorkOrder |
| PricingProcedure | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe pricing procedure record associated with this pricing action. |

## Code Examples

```
<PricingActionParameters xmlns="http://soap.sforce.com/2006/04/metadata">
    <developerName>CMEDefaultActionParameters</developerName>
    <objectName>ORDER</objectName>
    <pricingProcedure>PP</pricingProcedure>
    <effectiveFrom>2024-04-08T07:32:00.000Z</effectiveFrom>
    <effectiveTo>2024-04-11T07:32:00.000Z</effectiveTo>
    <contextDefinition>SalesTransactionContext__stdctx</contextDefinition>
    <contextMapping>SalesAgreementEntitiesMapping</contextMapping>
    <masterLabel>PAP_test</masterLabel>
</PricingActionParameters>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>PricingActionParameters</name>
    </types>
    <version>66.0</version>
</Package>
```
