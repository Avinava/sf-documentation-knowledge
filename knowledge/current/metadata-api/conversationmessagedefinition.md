---
title: "ConversationMessageDefinition"
domain: metadata-api
topic: conversationmessagedefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:51.350Z
keywords: [ConversationMessageDefinition, Parent, Type, File, Suffix, Directory, Location, Version, Fields, ConversationMessageConstant, ConversationMessageConstantCompositeValue, ConversationMessageConstantPrimitiveValue, ConversationMessageHandler, ConversationMessageLayout, ConvMsgExternalTemplateVersion, ConversationMessageLayoutItem, ConversationMessageLayoutCompositeValue, ConversationMessageLayoutPrimitiveValue, ConversationMessageMergeField, ConversationMessageOptionsParameter]
---

# ConversationMessageDefinition

# ConversationMessageDefinition

Represents a messaging component in an Enhanced Messaging channel or Messaging for In-App and Web session.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

ConversationMessageDefinition components have the suffix .conversationMessageDefinition and are stored in the conversationMessageDefinitions folder.

## Version

ConversationMessageDefinition is supported for use in enhanced Messaging channels and Messaging for In-App and Web, and is available in API version 59.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| constants | Field TypeConversationMessageConstant[]DescriptionAn array of constants that defines the messaging components. Constants support multiple data types, including text, URL, and image. |
| description | Field TypestringDescriptionThe description of the conversation message definition. |
| label | Field TypestringDescriptionA user-friendly name for ConversationMessageDefinition, which is defined whenConversationMessageDefinition is created. |
| language | Field TypestringDescriptionThe language of the conversation message definition. |
| messageHandlers | Field TypeConversationMessageHandler[]DescriptionAn array of message handlers. |
| messageLayouts | Field TypeConversationMessageLayout[]DescriptionAn array of message layouts. |
| optionsParameter | Field TypeConversationMessageOptionsParameter[]DescriptionAn array of options parameter of the ConversationMessageDefinition. |
| parameters | Field TypeConversationMessageParameter[]DescriptionAn array of parameters. |
| type | Field TypeConversationMessageDefinitionType (enumeration of type string)DescriptionRequired. The type of the conversation message definition. Valid values are:ActionApexFormAuthenticationRequestAutoResponseLinkNotificationPaymentRequestPicklistRecordPickerRecordViewTimePicker |

## ConversationMessageConstant

Represents a constant value on the messaging component. When a messaging component is created in the UI, the text and images entered during creation are saved as standard constants. Custom constants can also be added.

| Field Name | Description |
| --- | --- |
| compositeValues | Field TypeConversationMessageConstantCompositeValue[]DescriptionAn array of composite values of ConversationMessageConstant. |
| constantType | Field TypeConversationMessageConstantType (enumeration of type string)DescriptionRequired. The conversation message constant type. Valid values are:CustomImageOptionsSubTitleTitleUrl |
| label | Field TypestringDescriptionThe UI label of the conversation message constant. |
| name | Field TypestringDescriptionThe name of the conversation message constant. |
| primitiveValues | Field TypeConversationMessageConstantPrimitiveValue (enumeration of type string)DescriptionAn array of primitive values of ConversationMessageConstant. |
| valueType | Field TypeConversationMessageValueType (enumeration of type string)DescriptionThe type of the conversation message constant value. Valid values are:BooleanDateDateTimeDoubleImageIdIntegerRecordIdTextUrl |

## ConversationMessageConstantCompositeValue

Represents the composite values of the [ConversationMessageConstant](#ConversationMessageConstant).

| Field Name | Description |
| --- | --- |
| constantItems | Field TypeConversationMessageConstant[]DescriptionAn array of constant items. |
| identifier | Field TypestringDescriptionRequired. The client identifier. |

## ConversationMessageConstantPrimitiveValue

Represents the primitive values of the [ConversationMessageConstant](#ConversationMessageConstant).

| Field Name | Description |
| --- | --- |
| contentAssetName | Field TypestringDescriptionRepresents the value for type = ImageAsset |
| textValue | Field TypestringDescriptionRepresents the value for type = Text |
| type | Field TypeConversationMessageConstantValueType (enumeration of type string)DescriptionRequired. The type of the conversation message constant primitive value. Valid values are:ImageAssetTextUrl |
| urlValue | Field TypestringDescriptionRepresents the value for type = Url |

## ConversationMessageHandler

Represents the conversation message handler.

| Field Name | Description |
| --- | --- |
| activeRequestDurationMinutes | Field TypeintDescriptionRequired. The duration of an active request in minutes. |
| handlerName | Field TypestringDescriptionRequired. The name of the message handler. |
| handlerType | Field TypeConversationMessageHandlerType (enumeration of type string)DescriptionRequired. The type of message handler. Valid values are:ApexFormProvider. Available in API version 65.0 and later.AuthProviderPaymentProviderQuickActionSurvey. Available in API version 65.0 and later. |

## ConversationMessageLayout

Represents the conversation message layout.

| Field Name | Description |
| --- | --- |
| externalTemplates | Field TypeConvMsgExternalTemplateVersion[]DescriptionThe external template version of the ConversationMessageLayout. |
| formatType | Field TypeConversationMessageFormatType (enumeration of type string)DescriptionRequired. The format type of the conversation message layout. Valid values are:ApplicationButtonsCarouselEncryptedOAuthTokenExternalTemplateFlowInputsListPickerMediaPaymentQuickRepliesRichLinkTextTimePickerWebView |
| layoutItems | Field TypeConversationMessageLayoutItem[]DescriptionAn array of layout items. |
| messageType | Field TypeConversationMessageType (enumeration of type string)DescriptionRequired. The conversation message type. Valid values are:AuthenticationRequestChoicesFormPaymentRequestStaticContent |

## ConvMsgExternalTemplateVersion

Represents the external template version of the conversation message layout.

| Field Name | Description |
| --- | --- |
| accountIdentifier | Field TypestringDescriptionRequired. The account identifier. For WhatsApp channels, this is the WABA ID. |
| accountName | Field TypestringDescriptionRequired. The account name. |
| language | Field TypestringDescriptionRequired. The language of the conversation message external template. |
| status | Field TypeConvMsgExternalTemplateVersionStatus (enumeration of type string)DescriptionRequired. The status of the conversation message external template. Valid values are:Approved. The template version is approved.Blocked. The template version is blocked. Available in API version 65.0 and later.Deleted. The template version is deleted. Available in API version 65.0 and later.Disabled. The template version is disabled because of recurring negative customer feedback.InAppeal. The rejected template version is being appealed. Available in API version 65.0 and later.LimitExceeded. Available in API version 65.0 and later.OutOfSync. The template versions in the messaging service and Salesforce are out of sync. Available in API version 65.0 and later.Paused. The template version is paused because of recurring negative customer feedback or low read rates.Pending. The template version awaits Meta's approval.PendingDeletion. The template version is pending deletion. Available in API version 65.0 and later.Rejected. The template version was rejected during Meta’s review process. |
| templateName | Field TypestringDescriptionRequired. The name of the conversation message external template. |
| templateVersionIdentifier | Field TypestringDescriptionRequired. The template version identifier. |

## ConversationMessageLayoutItem

Represents the conversation message layout item.

| Field Name | Description |
| --- | --- |
| collectionType | Field TypeConversationMessageCollectionType (enumeration of type string)DescriptionRequired. The type of conversation message collection. Valid values are:DynamicListNoneStaticList |
| compositeValues | Field TypeConversationMessageLayoutCompositeValue[]DescriptionAn array of composite values of the ConversationMessageLayoutItem. |
| name | Field TypestringDescriptionThe name of the conversation message layout item. |
| primitiveValues | Field TypeConversationMessageLayoutPrimitiveValue[]DescriptionAn array of primitive values of the ConversationMessageLayoutItem. |

## ConversationMessageLayoutCompositeValue

Represents the composite value of the [ConversationMessageLayoutItem](#ConversationMessageLayoutItem).

| Field Name | Description |
| --- | --- |
| compositeTypeName | Field TypestringDescriptionRequired. The name of the conversation message layout composite value type. |
| layoutItems | Field TypeConversationMessageLayoutItem[]DescriptionAn array of layout items. |
| valueSourceReference | Field TypestringDescriptionThe source of the conversation message layout composite value. |

## ConversationMessageLayoutPrimitiveValue

Represents the primitive value of the [ConversationMessageLayoutItem](#ConversationMessageLayoutItem).

| Field Name | Description |
| --- | --- |
| contentAssetName | Field TypestringDescriptionThe content asset name. |
| fieldName | Field TypestringDescriptionThe name of the conversation message layout primitive value field. |
| formulaTemplate | Field TypestringDescriptionThe formula template defines the content for each entry in the list. |
| literalValue | Field TypestringDescriptionThe literal primitive value of the conversation message layout. |
| mergeFields | Field TypeConversationMessageMergeField[]DescriptionInserts multiple values to a list. |
| type | Field TypeConversationMessageLayoutValueType (enumeration of type string)DescriptionRequired. The type of the conversation message layout primitive value. Valid values are:FormulaTemplateLiteralMediaAssetSourcePrimitiveValueSourceSobjectFieldSourceSobjectFieldValueSourceSobjectFormula |
| valueFormula | Field TypestringDescriptionThe formula of the conversation message layout primitive value. |
| valueSourceReference | Field TypestringDescriptionThe source of the conversation message layout primitive value. |

## ConversationMessageMergeField

Merge field is used to insert multiple values to a list.

| Field Name | Description |
| --- | --- |
| formulaTemplate | Field TypestringDescriptionRequired. The formula template of the conversation message merge field. |
| mergeFieldType | Field TypeConversationMessageMergeFieldType (enumeration of type string)DescriptionRequired. The type of the conversation message merge field. Valid value is ListTemplate. |
| name | Field TypestringDescriptionRequired. The name of the conversation message merge field. |
| valueSourceReference | Field TypestringDescriptionRequired. The source of the conversation message merge field value. |

## ConversationMessageOptionsParameter

Represents a conversation message options parameter.

| Field Name | Description |
| --- | --- |
| compositeTypeDetails | Field TypeConversationMessageParameterCompositeDetails[]DescriptionAn array of composite details of ConversationMessageOptionsParameter. |
| optionsParameterType | Field TypeConversationMessageOptionsParameterType (enumeration of type string)DescriptionRequired. The type of conversation message options parameter. Valid values are:CustomCompositeOptionsCustomPrimitiveOptionsRecordIdOptionsTimeSlotOptions |
| primitiveTypeDetails | Field TypeConversationMessageParameterPrimitiveDetailsDescriptionThe primitive type details of conversation message options parameter. |

## ConversationMessageParameterCompositeDetails

Represents the composite details of a conversation message parameter.

| Field Name | Description |
| --- | --- |
| compositeChildItems | Field TypeConversationMessageParameterCompositeDetails[]DescriptionThe composite child items of the conversation message parameter. |
| isList | Field TypebooleanDescriptionIndicates whether the conversation message parameter composite details field is a list item (true) or not (false). The default value is false. |
| isRequired | Field TypebooleanDescriptionIndicates whether the conversation message parameter is required (true) or not (false). The default value is false. |
| label | Field TypestringDescriptionThe UI label of the conversation message parameter composite details field. |
| maxListItems | Field TypeintDescriptionThe maximum number of list items in the conversation message parameter composite details field. |
| name | Field TypestringDescriptionThe name of the conversation message parameter composite details field. |
| primitiveChildItems | Field TypeConversationMessageParameterPrimitiveDetails[]DescriptionAn array of primitive child items. |

## ConversationMessageParameterPrimitiveDetails

Represents the primitive details of the conversation message parameter.

| Field Name | Description |
| --- | --- |
| isList | Field TypebooleanDescriptionIndicates whether the conversation message parameter primitive details field is a list item (true) or not (false). The default value is false. |
| isRequired | Field TypebooleanDescriptionIndicates whether the conversation message parameter primitive details field is required (true) or not (false). The default value is false. |
| label | Field TypestringDescriptionThe UI label of the conversation message parameter primitive details field. |
| maxListItems | Field TypeintDescriptionThe maximum number of list items that are allowed in the conversation message parameter primitive details field. |
| name | Field TypestringDescriptionThe name of the conversation message parameter primitive details field. |
| sobjectType | Field TypestringDescriptionThe sObject type. |
| valueType | Field TypeConversationMessageValueType (enumeration of type string)DescriptionThe type of the conversation message parameter value. Valid values are:BooleanDateDateTimeDoubleImageIdIntegerRecordIdTextUrl |

## ConversationMessageParameter

Represents a conversation message parameter.

| Field Name | Description |
| --- | --- |
| compositeTypeDetails | Field TypeConversationMessageParameterCompositeDetailsDescriptionAn array of composite type details. |
| parameterType | Field TypeConversationMessageParameterType (enumeration of type string)DescriptionRequired. The type of conversation message parameter. Valid values are:CustomCompositeCustomPrimitiveRecordIds |
| primitiveTypeDetails | Field TypeConversationMessageParameterPrimitiveDetailsDescriptionAn array of primitive type details. |

## Declarative Metadata Sample Definition

The following is an example of a ConversationMessageDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).