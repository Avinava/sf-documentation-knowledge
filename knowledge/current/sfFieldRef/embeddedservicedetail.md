---
title: "EmbeddedServiceDetail"
domain: sfFieldRef
topic: embeddedservicedetail
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:56.873Z
estimatedTokens: 747
keywords: [EmbeddedServiceDetail, metadata, catalog, underlying, Embedded, Service, setup, objects, defined, EmbeddedServiceConfig, deployment, guest, users, don’t, direct]
---

# EmbeddedServiceDetail

> Represents a metadata catalog object that exposes fields from the
			underlying Embedded Service setup objects defined in each EmbeddedServiceConfig
			deployment for guest users. Guest users don’t have direct access to the Embedded Service
			setup objects. Available in API version 39.0 and later.

# EmbeddedServiceDetail

Represents a metadata catalog object that exposes fields from the underlying Embedded Service setup objects defined in each EmbeddedServiceConfig deployment for guest users. Guest users don’t have direct access to the Embedded Service setup objects. Available in API version 39.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EmbeddedServiceDetail](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_embeddedservicedetail.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AvatarImg | Avatar Image URL | string |  | 255 |  |  |
| ContrastInvertedColor | Contrast Inverted Color | string |  | 255 |  |  |
| ContrastPrimaryColor | Contrast Primary Color | string |  | 255 |  |  |
| CustomMinimizedComponent | Custom Minimized Component Developer Name | string |  | 18 |  |  |
| CustomPrechatComponent | Custom Prechat Component Developer Name | string |  | 18 |  |  |
| DurableId | Embedded Service Durable ID | string |  | 255 |  |  |
| FieldServiceConfirmCardImg | Field Service Confirmation Card Image URL | string |  | 255 |  |  |
| FieldServiceHomeImg | Field Service Home Image URL | string |  | 255 |  |  |
| FieldServiceLogoImg | Field Service Logo Image URL | string |  | 255 |  |  |
| Font | Font | string |  | 255 |  |  |
| FontSize | Font Size | picklist |  | 255 |  |  |
| Height | Height | int | 9 |  |  |  |
| Id | Embedded Service ID | id |  | 18 |  |  |
| IsFieldServiceEnabled | Enabled | boolean |  |  |  |  |
| IsLiveAgentEnabled | Enabled | boolean |  |  |  |  |
| IsOfflineCaseEnabled | Offline Case Enabled | boolean |  |  |  |  |
| IsPrechatEnabled | Pre-Chat Enabled | boolean |  |  |  |  |
| IsQueuePositionEnabled | Queue Position Enabled | boolean |  |  |  |  |
| NavBarColor | NavBar Color | string |  | 255 |  |  |
| NavBarTextColor | NavBar Text Color | string |  | 255 |  |  |
| OfflineCaseBackgroundImg | Offline Case Background Image URL | string |  | 255 |  |  |
| PrechatBackgroundImg | Pre-Chat Background Image URL | string |  | 255 |  |  |
| PrimaryColor | Primary Color | string |  | 255 |  |  |
| SecondaryColor | Secondary Color | string |  | 255 |  |  |
| SecondaryNavBarColor | Secondary NavBar Color | string |  | 255 |  |  |
| ShouldHideAuthDialog | Hide Authentication Dialog | boolean |  |  |  |  |
| ShouldShowExistingAppointment | Show Existing Appointment | boolean |  |  |  |  |
| ShouldShowNewAppointment | Show New Appointment | boolean |  |  |  |  |
| Site | Site | string |  | 18 |  |  |
| SmallCompanyLogoImg | Small Company Logo Image URL | string |  | 255 |  |  |
| WaitingStateBackgroundImg | Waiting State Background Image URL | string |  | 255 |  |  |
| Width | Width | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
