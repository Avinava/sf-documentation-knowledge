---
title: "EmbeddedServiceDetail"
domain: object-reference
topic: embeddedservicedetail
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:08.498Z
estimatedTokens: 1636
keywords: [EmbeddedServiceDetail, metadata, catalog, underlying, Embedded, Service, setup, objects, defined, EmbeddedServiceConfig, deployment, guest, users, don’t, direct]
---

# EmbeddedServiceDetail

> Represents a metadata catalog object that exposes fields from the
			underlying Embedded Service setup objects defined in each EmbeddedServiceConfig
			deployment for guest users. Guest users don’t have direct access to the Embedded Service
			setup objects. Available in API version 39.0 and later.

# EmbeddedServiceDetail

Represents a metadata catalog object that exposes fields from the underlying Embedded Service setup objects defined in each EmbeddedServiceConfig deployment for guest users. Guest users don’t have direct access to the Embedded Service setup objects. Available in API version 39.0 and later.

## Supported SOAP Calls

describeSObjects(), query()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| AvatarImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the image used as the agent avatar image. |
| ContrastInvertedColor | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAccent branding color used in the embedded component, displayed as a hexadecimal value. Changes made to this field in the API aren’t reflected in the embedded component. |
| ContrastPrimaryColor | TypestringPropertiesFilter, Group, Nillable, SortDescriptionValue of the ContrastPrimaryColor field in the EmbeddedServiceBranding setup object. |
| CustomMinimizedComponent | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe custom Aura component that’s used for the minimized state for this Embedded Chat deployment. |
| CustomPrechatComponent | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe custom Aura component that’s used for the pre-chat page for this Embedded Chat deployment. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDeveloper name for the EmbeddedServiceConfig. |
| FieldServiceConfirmCardImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the image used for the confirmation card in embedded Appointment Management (beta). |
| FieldServiceHomeImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the image used for the home screen in embedded Appointment Management (beta). |
| FieldServiceLogoImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the logo used for the home screen in embedded Appointment Management (beta). |
| Font | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFont used in the chat text of the Embedded Chat window. |
| FontSize | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionFont size for the embedded component.Possible values are:SmallMediumLarge |
| HeaderBackgroundImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the image used for the header background in Embedded Chat. This field is removed in API version 49.0 and later. The header background image is no longer supported. |
| Height | TypeintPropertiesFilter, Group, Nillable, SortDescriptionHeight of the embedded component. |
| IsFieldServiceEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether Field Service is enabled for this Embedded Service deployment (true) or not (false). Embedded Appointment Management is currently beta. |
| IsLiveAgentEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether Chat is enabled for this Embedded Service deployment (true) or not (false). |
| IsOfflineCaseEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether offline support is enabled for this Embedded Chat deployment (true) or not (false). |
| IsPrechatEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionValue of the PrechatEnabled field in the EmbeddedServiceLiveAgent setup object. |
| IsQueuePositionEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether queue position (displaying the customer’s place in line while they wait for an agent) is enabled for this Embedded Chat deployment (true) or not (false). |
| NavBarColor | TypestringPropertiesFilter, Group, Nillable, SortDescriptionValue of the NavBarColor field in the EmbeddedServiceBranding setup object. |
| NavBarTextColor | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field is used to set the text color for the header. |
| OfflineCaseBackgroundImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the image used for the background for the offline support case form in Embedded Chat. |
| PrechatBackgroundImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the image used for the background for the pre-chat form in Embedded Chat. |
| PrimaryColor | TypestringPropertiesFilter, Group, Nillable, SortDescriptionValue of the PrimaryColor field in the EmbeddedServiceBranding setup object. |
| SecondaryColor | TypestringPropertiesFilter, Group, Nillable SortDescriptionValue of the SecondaryColor field in the EmbeddedServiceBranding setup object. |
| SecondaryNavBarColor | TypestringPropertiesFilter, Group, Nillable SortDescriptionThis field is used to set the color of a secondary header. |
| ShouldHideAuthDialog | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether the prompt that the customer log in again during a flow should be hidden (true) or not (false). When it’s hidden, the customer is taken directly to your login page. |
| ShouldShowExistingAppointment | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether to display a button on the home screen for customers to access their existing appointments (true) or not (false) for embedded Appointment Management (beta). |
| ShouldShowNewAppointment | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether to display a button on the home screen for customers to create a new appointment (true) or not (false) for embedded Appointment Management (beta). |
| Site | TypestringPropertiesFilter, Group, Nillable SortDescriptionValue of the Site field in the EmbeddedServiceConfig setup object. |
| SmallCompanyLogoImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the logo image used with Embedded Chat. |
| WaitingStateBackgroundImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the image used for the background image in Embedded Chat while the customer waits to be connected with a support agent. |
| Width | TypeintPropertiesFilter, Group, Nillable, SortDescriptionWidth of the embedded component. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Any changes you make to the image fields override what you’ve entered in Setup. We recommend setting your image URLs in Setup.
