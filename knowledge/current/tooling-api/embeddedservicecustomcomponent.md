---
title: "EmbeddedServiceCustomComponent"
domain: tooling-api
topic: embeddedservicecustomcomponent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.382Z
estimatedTokens: 582
keywords: [EmbeddedServiceCustomComponent, custom, component, created, Embedded, Service, feature, components, Aura, Lightning, Web, API, version, 44.0, later]
---

# EmbeddedServiceCustomComponent

> Represents a custom component created for an Embedded Service feature. The
    custom components can be an Aura or Lightning Web Component. This object is available in API
    version 44.0 and later.

# EmbeddedServiceCustomComponent

Represents a custom component created for an Embedded Service feature. The custom components can be an Aura or Lightning Web Component. This object is available in API version 44.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

This type is available only if Salesforce Experiences and Salesforce Sites are enabled in your org. To access this type, you need the Customize Application user permission.

## Fields

| Field | Details |
| --- | --- |
| CustomComponentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique ID of the LightningComponentBundle or AuraDefinitionBundle component to be used in the Embedded Service. |
| CustomComponentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe embedded component type associated with the chosen Feature that you want to customize. The possible values are:LA_ChatHeader—Not supported for AuraDefinitionBundle componentsLA_MinimizedLA_PlainTextChatMessage—Not supported for AuraDefinitionBundle componentsLA_Prechat |
| EmbeddedServiceConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique ID of the EmbeddedServiceConfig object that this custom component is associated with. |
| Feature | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe Embedded Service feature that uses the custom component. The possible values are:BaseChannelMenuFieldServiceFlowsLiveAgentNotInUse |

## Usage

Each Embedded Service feature has a defined set of components that can be customized. You can customize the feature using your own Lightning Web Components or Aura Components. Right now, you can only customize components of the Embedded Service Chat feature. For example, you can customize the prechat form, minimized state, chat bubble, and chat header of a Chat widget.

To customize a component, link the Lightning Web Component or Aura Component to an Embedded Service Custom Component object. Then link an Embedded Service Configuration to this object. The Embedded Service Configuration represents the Chat widget that you want to customize.

## Related Topics

- LightningComponentBundle (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_lightningcomponentbundle.htm)
- AuraDefinitionBundle (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_auradefinitionbundle.htm)
- EmbeddedServiceConfig (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedserviceconfig.htm)
