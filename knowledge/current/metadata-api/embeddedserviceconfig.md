---
title: "EmbeddedServiceConfig"
domain: metadata-api
topic: embeddedserviceconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:52.196Z
keywords: [EmbeddedServiceConfig, Important, Parent, Type, File, Suffix, Directory, Location, Version, Fields, EmbeddedServiceAppointmentSettings, EmbeddedServiceCustomComponent, EmbeddedServiceCustomLabel, EmbeddedServiceCustomization, EmbeddedServiceForm, EmbeddedServiceFormField, embeddedServiceMessagingChannel, EmbeddedServiceResource, EmbeddedServiceFlow, EmbeddedServiceFlowConfig]
---

# EmbeddedServiceConfig

# EmbeddedServiceConfig

Represents a setup node for creating an Embedded Service for Web deployment. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

EmbeddedServiceConfig components have the suffix .EmbeddedServiceConfig and are stored in the EmbeddedServiceConfig folder.

## Version

EmbeddedServiceConfig is available in API version 37.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| areGuestUsersAllowed | boolean | Specifies whether a user must be logged in to access an embedded component. Available in API version 45.0 and later. |
| authMethod | EmbeddedServiceAuthMethod (enumeration of type string) | Type of login method selected for this Embedded Service deployment. Valid values are:CommunitiesLogin–Customers log in using Communities.CustomLogin–Customers log in using your own custom authentication.Available in API version 43.0 and later. |
| branding | string | The branding set that has all of the branding configurations for this Embedded Service configuration. Available in API version 52.0 and later. |
| customMinimizedComponent | string | The custom Lightning component that’s used in this Embedded Service deployment in its minimized state. Available in API version 43.0 to 45.0. |
| deploymentFeature | EmbeddedServiceDeploymentFeature(enumeration of type string) | The conversation type of this Embedded Service deployment. Valid values are:EmbeddedMessaging—Messaging for In-App and Messaging for Web deploymentsFlowsFieldServiceLiveAgentNoneAvailable in API version 52.0 and later. |
| deploymentType | EmbeddedServiceDeploymentType (enumeration of type string) | The platform this Embedded Service is deployed to. Valid values are:Mobile—For future useWebAPIAvailable in API version 51.0 and later. |
| embeddedServiceAppointmentSettings | EmbeddedServiceAppointmentSettings[] | The settings of the Embedded Service deployment whose deploymentFeature is FieldService. Available in API version 46.0 and later. |
| embeddedServiceCustomComponents | EmbeddedServiceCustomComponent[] | The custom components used in this Embedded Service deployment. Available in API version 44.0 and later. |
|  |  |  |
| embeddedServiceCustomLabels | EmbeddedServiceCustomLabel[] | The custom labels used in this Embedded Service deployment. Available in API version 44.0 and later. |
| embeddedServiceCustomizations | EmbeddedServiceCustomization[] | The customizations used in this Embedded Service deployment. Each customization is associated with a static resource. Available in API version 50.0 and later. |
| embeddedServiceFlowConfig | EmbeddedServiceFlowConfig[] | Represents a setup node for creating an embedded flow. Available in API version 45.0 and later. |
| embeddedServiceFlows | EmbeddedServiceFlow[] | All of the flows used by this Embedded Service deployment. Available in API version 45.0 and later. |
| embeddedServiceLayouts | EmbeddedServiceLayout[] | The layout of an Appointment Management deployment of an Embedded Service. Available in API version 44.0 and later. |
| isEnabled | boolean | Indicates if this Embedded Service deployment is enabled (true). |
| isTermsAndConditionsEnabled | boolean | Indicates whether Terms and Conditions is displayed. Displaying Terms and Conditions is supported if the deploymentFeature is either EmbeddedMesssaging or LiveAgent. The default is false. Available in API version 59.0 and later. |
| isTermsAndConditionsRequired | boolean | Indicates whether acceptance of the Terms and Conditions is required before starting a chat. Displaying Terms and Conditions is supported if the deploymentFeature is either EmbeddedMesssaging or LiveAgent. The default is false. Available in API version 59.0 and later. |
| masterLabel | string | Required. The name of the Embedded Service configuration node. Available in API version 37.0 and later. |
| shouldHideAuthDialog | boolean | Specifies whether the prompt that the customer log in again during a flow is hidden (true) or not (false). When it’s hidden, the customer is taken directly to your login page. This field is set to false by default. Available in API version 43.0 and later. |
| site | string | Required. The name of the Experience site or website connected to this Embedded Service deployment. Available in API version 37.0 and later. |

## EmbeddedServiceAppointmentSettings

Returns the settings of an Embedded Service deployment whose deploymentFeature is FieldService. Available in API version 46.0 and later.

| Field Name | Description |
| --- | --- |
| appointmentConfirmImg | Field TypestringDescriptionThe URL of the image to display when an appointment is confirmed. |
| enabled | Field TypebooleanDescriptionRequired.Indicates whether this deployment is enabled. The default is false. |
| homeImg | Field TypestringDescriptionThe URL of the image to display on the appointment management widget home screen. |
| logoImg | Field TypestringDescriptionThe URL of the logo to display in the appointment management widget. |
| shouldShowExistingAppointment | Field TypebooleanDescriptionIndicates whether existing appointments are displayed in the appointment management widget. The default is false. |
| shouldShowNewAppointment | Field TypebooleanDescriptionIndicates whether new appointments are displayed in the appointment management widget. The default is false. |

## EmbeddedServiceCustomComponent

Returns a custom component that’s associated with an EmbeddedServiceConfig setup.

| Field Name | Field Type | Description |
| --- | --- | --- |
| customComponent | string | The name of the custom component. |
| customComponentType | EmbeddedServiceCustomComponentType (enumeration of type string) | The type of custom component. Valid values are:LA_Prechat (component for pre-chat in Embedded Chat)LA_Minimized (component for the minimized chat window)LA_PlainTextChatMessage (component for the text area in Embedded Chat)MIAW_Prechat(component for the prechat form in Messaging for In-App and Web)MIAW_Header(component for the header of the messaging conversation window in Messaging for In-App and Web)MIAW_TextMessage(component for the text message bubbles in a Messaging for In-App and Web conversation) |

## EmbeddedServiceCustomLabel

Returns a custom label that’s associated with an EmbeddedServiceConfig setup.

| Field Name | Field Type | Description |
| --- | --- | --- |
| customLabel | string | The customized label that appears in the embedded component. |
| feature | EmbeddedServiceFeature (enumeration of type string) | The feature that this embedded component uses. Valid values are:BaseChannelMenuEmbeddedMessaging—Messaging for In-App and Messaging for Web deploymentsFieldServiceFlowsLiveAgentNotInUse |
| labelKey | EmbeddedServiceLabelKey (enumeration of type string) | The type of label for this embedded component. The value corresponds to the label within a label group (substate of chat state or page type). |

## EmbeddedServiceCustomization

Returns the customization associated with the Embedded Service feature. Available in API version 50.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| customizationName | string | Required. The name of the customization applied to the embedded service. This name can contain only underscores and alphanumeric characters and must be unique in an EmbeddedServiceConfig setup. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| description | string | A description of the customization. |
| embeddedServiceResources | EmbeddedServiceResource[] | Required. The reference to the static resource that contains the javascript file of the customization. |

## EmbeddedServiceForm

Returns the form that’s used for pre-chat. Available in API version 62 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| displayContext | EmbeddedServiceFormDisplayContext (enumeration of type string) | Required. Indicates when we display this form. Values are:Session- The pre-chat form is displayed every session.Conversation- Tthe pre-chat form is displayed every conversation.None- Don’t select this option. |
| isActive | Boolean | Indicates whether the form is active. The default value is false. |

## EmbeddedServiceFormField

Represents an individual field in a prechat form. Available in API version 62 or higher.

| Field Name | Field Type | Description |
| --- | --- | --- |
| formField | string or enum | Required. Maps to either a StandardMessingChannelParameter or a CustomMessagingChannelParameter |
| messagingChannelParameterType | MessagingChannelParameterType (enumeration of type string) OR StandardMessagingChannelParameter (enumeration of type string) | Required. Indicates whether formField points to a StandardMessagingChannelParameter or a CustomMessagingChannelParameter. Please match the Enum value here to the formField passed in. Valid values for MessagingChannelParameterType are:Standard - select this field when you want to reference a StandardMessagingChannelParameter Custom - select this field when you want to reference a CustomMessagingChannelParameter Valid values for StandardMessagingChannelParameter are:FirstNameLastNameEmailSubject |
| formFieldType | EmbeddedServiceFormFieldType (enumeration of type string) | Required. Indicates the type of data is passed by the End User when filling out the Prechat form. Valid values are:TextEmailPhoneNumberCheckboxChoicelist |
| displayOrder | Integer | Indicates the relative order of the form field in the prechat form. For Prechat fields where isHidden is set to true displayOrder must be set to -1. For Prechat fields where isHidden is set to false, this value must be greater than or equal to 0. |
| isRequired | Boolean | Indicates whether a Prechat form field is required. If isHidden is set to true, isRequired must be set to false. |
| isHidden | Boolean | Indicates whether a Prechat form field is displayed in the UI. isHidden can only be set to true if the formField field is set to CustomMessagingChannelParameter and messagingChannelParameterType is set to Custom. |
| choiceList | ChoiceList | The choice list that's associated with EmbeddedServiceFormField. ChoiceList can only be associated if the formField is set to CustomMessagingChannelParameter and messagingChannelParameterType is set to Custom. |
| embeddedServiceCustomLabels | EmbeddedServiceCustomLabel[] | The custom label for this field. |

## embeddedServiceMessagingChannel

Returns the settings of an Embedded Service deployment whose

```

```

is EmbeddedMessaging. Available in API version 62 or higher.

| Field Name | Field Type | Description |
| --- | --- | --- |
| businessHours | String | The Business Hours record that’s associated with this specific embedded service deployment. |
| isEnabled | Boolean | Required. Indicates whether this embedded service deployment is enabled. |
| messagingChannel | String | Required. The MessagingChannel record that’s associated with this specific embedded service deployment. |
| shouldShowDeliveryReceipts | Boolean | Required. Indicates whether delivery receipts are shown in the UI. |
| shouldShowEmojiSelection | Boolean | Required. Indicates whether emoji selection is shown in the UI. |
| shouldShowReadReceipts | Boolean | Required. Indicates whether read reciepts are shown in the UI. |
| shouldShowTypingIndicators | Boolean | Required. Indicates whether typing indicators are shown in the UI. |
| shouldStartNewLineOnEnter | Boolean | Required. Indicates whether pressing Enter starts a new line of text in the UI. |

## EmbeddedServiceResource

Returns the static resource associated with the Embedded Service Chat feature customization. Available in API version 50.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| resource | string | Required. The ID of the static resource that contains the javascript file of the customization. |
| resourceType | EmbeddedServiceResourceType (enumeration of type string) | Required. The embedded service feature to customize. Valid values are:ChatInvitation—Use for Chat deployments.SettingsFile—Use if you’re configuring a settings file for a Channel Menu deployment. |

## EmbeddedServiceFlow

Returns an embedded flow that’s associated with an EmbeddedServiceConfig setup.

| Field Name | Field Type | Description |
| --- | --- | --- |
| flow | string | The developer name of the flow. |
| flowType | EmbeddedServiceFlowType(enumeration of type string) | The type of flow. Valid values are:FS_CancelAppointmentFS_FlowFS_ModifyAppointmentFS_NewAppointmentLA_Survey |
| isAuthenticationRequired | boolean | Indicates whether users are required to log in to access the Embedded Service component. The value can’t be true for the FS_Flow value and must be true for all other values. |

## EmbeddedServiceFlowConfig

Returns the EmbeddedServiceFlowConfig type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Indicates whether the embedded flow is enabled. |

## EmbeddedServiceLayout

Returns the layout of an Embedded Service deployment whose deploymentFeature is FieldService. Available in API version 44.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| embeddedServiceLayoutRules | EmbeddedServiceLayoutRule[] | The appointment statuses that the layout of the Embedded Service deployment is valid for. |
| layout | string | The FlexiPage that represents the layout of this Embedded Service deployment. |
| layoutType | EmbeddedServiceLayoutType (enumeration of type string) | The type of layout applied to the Embedded Service deployment.Values are:FS_AppointmentHome |

## EmbeddedServiceLayoutRule

Returns an appointment status for which the Embedded Service layout is valid for. This subtype is for Embedded Service deployments whose deploymentFeature is FieldService. Available in API version 44.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| appointmentStatus | string | The service appointment status that the EmbeddedServiceLayout subtype is valid for. |

## Declarative Metadata Sample Definition

The following is an example of an EmbeddedServiceConfig file.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").