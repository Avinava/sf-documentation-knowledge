---
title: "AuraDefinition"
domain: object-reference
topic: auradefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:38:26.443Z
estimatedTokens: 504
keywords: [AuraDefinition, Aura, definition, markup, client-side, controller, event, API, 32.0]
---

> Represents an Aura component definition, such as component markup, a
			client-side controller, or an event. This object is available in API version 32.0
		and later.

# AuraDefinition

Represents an Aura component definition, such as component markup, a client-side controller, or an event. This object is available in API version 32.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| AuraDefinitionBundleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the bundle containing the definition. A bundle contains a Lightning definition and all its related resources.This is a relationship field.Relationship NameAuraDefinitionBundleRelationship TypeLookupRefers ToAuraDefinitionBundle |
| DefType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe definition type. Valid values are:APPLICATION — Lightning Aura Components appCONTROLLER — client-side controllerCOMPONENT — component markupEVENT — event definitionHELPER — client-side helperINTERFACE — interface definitionRENDERER — client-side rendererSTYLE — style (CSS) resourcePROVIDER — reserved for future useMODEL — deprecated, do not useTESTSUITE — reserved for future useDOCUMENTATION — documentation markupTOKENS — tokens collectionDESIGN — design definitionSVG — SVG graphic resourceMODULE — reserved for future use |
| Format | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe format of the definition. Valid values are:XML for component markupJS for JavaScript codeCSS for stylesTEMPLATE_CSS reserved for future useSVG for an SVG graphic |
| Source | TypetextareaPropertiesCreate, UpdateDescriptionThe contents of the definition. This is all the markup or code for the definition. |

## Usage

For more information, see the [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/ "HTML (New Window)").
