---
title: "Chat REST API Data Types"
domain: live-agent-rest
topic: chat-rest-api-data-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.362Z
estimatedTokens: 2474
keywords: [Chat, REST, API, Data, resource, code, successful, execution, JSON, bodies, contain, their, own, refer, entity]
---

# Chat REST API Data Types

> A request to a Chat REST API resource returns a response code. The successful
execution of a resource request can also return a response body in JSON format. Some response bodies
return data types that contain their own properties. All property values that refer to a name of an
entity or field are case-sensitive.

# Chat REST API Data Types

A request to a Chat REST API resource returns a response code. The successful execution of a resource request can also return a response body in JSON format. Some response bodies return data types that contain their own properties. All property values that refer to a name of an entity or field are case-sensitive.

## Button

Properties

| Property Name | Type | Description | Required | Available Versions |
| --- | --- | --- | --- | --- |
| id | String | The ID of the chat button object. | TRUE | 29.0 |
| type | String | The button type. Valid values are:StandardInviteToAgent | TRUE | 29.0 |
| endpointUrl | String | The URL of the custom chat window that’s assigned to the chat button. | FALSE | 29.0 |
| prechatUrl | String | The URL of the pre-chat form that’s assigned to the button. | FALSE | 29.0 |
| language | String | The chat button’s default language. | FALSE | 29.0 |
| isAvailable | Boolean | Specifies whether the chat button is available to receive new chat requests (true) or not (false). If you don’t see this property, the value is false. | FALSE | 29.0 |
| inviteImageUrl (for automated chat invitations only) | String | The URL to the automated invitation’s static image resource. | FALSE | 29.0 |
| inviteImageWidth (for automated chat invitations only) | number | The width in pixels of the automated chat invitation’s image. | FALSE | 29.0 |
| inviteImageHeight (for automated chat invitations only) | number | The height in pixels of the automated chat invitation’s image. | FALSE | 29.0 |
| inviteRenderer (for automated chat invitations only) | String | The animation option that’s assigned to the automated chat invitation. Valid values are:SlideFadeAppearCustom | FALSE | 29.0 |
| inviteStartPosition (for automated chat invitations only) | String | The position at which the automated chat invitation begins its animation. Valid values are:TopLeftTopLeftTopTopTopRightTopTopRightTopRightRightRightBottomRightRightBottomRightBottomRightBottomBottomBottomLeftBottomBottomLeftBottomLeftLeftLeftTopLeftLeft | FALSE | 29.0 |
| inviteEndPosition (for automated chat invitations only) | String | The position at which the automated chat invitation begins its animation. Valid values are:TopLeftTopTopRightLeftCenterRightBottomLeftBottomBottomRight | FALSE | 29.0 |
| hasInviteAfterAccept (for automated chat invitations only) | Boolean | Specifies whether the automated chat invitation can be sent again after the customer accepted a previous chat invitation (true) or not (false). | FALSE | 29.0 |
| hasInviteAfterReject (for automated chat invitations only) | Boolean | Specifies whether the automated chat invitation can be sent again after the customer rejected a previous chat invitation (true) or not (false). | FALSE | 29.0 |
| inviteRejectTime (for automated chat invitations only) | number | The amount of time in seconds that the invitation appears on a customer’s screen before the invitation is automatically rejected. | FALSE | 29.0 |
| inviteRules (for automated chat invitations only) | Object | The custom rules that govern the behavior of the automated chat invitation, as defined in your custom Apex class. | FALSE | 29.0 |
| estimatedWaitTime | number | The estimated wait time for the button in seconds. If the server cannot retrieve the wait time, this property returns -1. | FALSE | 47.0 |

## CustomDetail

Properties

| Property Name | Type | Description | Required | Available Versions |
| --- | --- | --- | --- | --- |
| label | String | The customized label for the detail. | TRUE | 29.0 |
| value | String | The customized value for the detail. | TRUE | 29.0 |
| transcriptFields | Array of Strings | The names of fields to which to save the customer’s details on the chat transcript. | TRUE | 29.0 |
| displayToAgent | Boolean | Specifies whether to display the customized detail to the agent (true) or not (false). | FALSE | 29.0 |

## Entity

Properties

| Property Name | Type | Description | Required | Available Versions |
| --- | --- | --- | --- | --- |
| entityName | String | The record to search for or create. | TRUE | 29.0 |
| showOnCreate | Boolean | Specifies whether to display the record after it’s created (true) or not (false). | FALSE | 29.0 |
| linkToEntityName | String | The name of the record to which to link the detail. | FALSE | 29.0 |
| linkToEntityField | String | The field within the record to which to link the detail. | FALSE | 29.0 |
| saveToTranscript | String | The name of the transcript field to which to save the record. | FALSE | 29.0 |
| entityFieldsMaps | Array of EntityFieldsMaps objects | The fields to which to associate the detail on a record. | TRUE | 29.0 |

## EntityFieldsMaps

Properties

| Property Name | Type | Description | Required | Available Versions |
| --- | --- | --- | --- | --- |
| fieldName | String | The name of the field to which to associate the detail. | TRUE | 29.0 |
| label | String | The customized label for the detail. | TRUE | 29.0 |
| doFind | Boolean | Specifies whether to use the field fieldName to perform a search for matching records (true) or not (false). | TRUE | 29.0 |
| isExactMatch | Boolean | Specifies whether to only search for records that have fields that exactly match the field fieldName (true) or not (false). | TRUE | 29.0 |
| doCreate | Boolean | Specifies whether to create a record based on the field fieldName if one doesn’t exist (true) or not (false). | TRUE | 29.0 |

## GeoLocation

Properties

| Property Name | Type | Description | Required | Available Versions |
| --- | --- | --- | --- | --- |
| countryCode | String | The ISO 3166-1 alpha-2 country code for the chat visitor's location. | TRUE | 29.0 |
| countryName | String | The name of the country that’s associated with the chat visitor’s location. | TRUE | 29.0 |
| region | String | The principal administrative division associated with the chat visitor's location—for example, the state or province. | FALSE | 29.0 |
| city | String | The name of the city associated with the chat visitor’s location. | FALSE | 29.0 |
| organization | String | The name of the organization associated with the chat visitor’s location. | FALSE | 29.0 |
| latitude | number | The latitude associated with the chat visitor’s location. | FALSE | 29.0 |
| longitude | number | The longitude associated with the chat visitor’s location. | FALSE | 29.0 |

## Message

Properties

| Property Name | Type | Description | Required | Available Versions |
| --- | --- | --- | --- | --- |
| type | String | The type of message that was received. | TRUE | 29.0 |
| message | Object | A placeholder object for the message that was received. Can return any of the responses that are available for the Messages request. | TRUE | 29.0 |

## NounWrapper

Properties

| Property Name | Type | Description | Required | Available Versions |
| --- | --- | --- | --- | --- |
| prefix | String | The prefix of the resource. | TRUE | 29.0 |
| noun | String | The name of the resource. | TRUE | 29.0 |
| data | String | The data to post to the resource. | FALSE | 29.0 |

## Result

Properties

| Property Name | Type | Description | Required | Available Versions |
| --- | --- | --- | --- | --- |
| id | String | The Salesforce ID of the agent or chat button. | TRUE | 29.0 |
| isAvailable | Boolean | Indicates whether the entity that’s associated with the Salesforce ID id is available to receive new chat requests (true) or not (false). If you don’t see this property, the value is false. | FALSE | 29.0 |
| estimatedWaitTime | number | The estimated wait time for the button in seconds. If the server cannot retrieve the wait time, this property returns -1. | FALSE | 47.0 |

## Rule

Properties

| Property Name | Type | Description | Required | Available Versions |
| --- | --- | --- | --- | --- |
| id | String | The ID of the sensitive data rule record. Applies to SensitiveDataRuleTriggered for Chasitors only. | FALSE | 29.0 |
| name | String | The name of the sensitive data rules applied to the chat session. This property applies to both agent and chasitor. | TRUE | 29.0 |

## SensitiveDataRule

Properties

| Property Name | Type | Description | Required | Available Versions |
| --- | --- | --- | --- | --- |
| name | String | The name of the sensitive data rule. | TRUE | 29.0 |
| pattern | String | The pattern of the sensitive data rule pattern definition. | TRUE | 29.0 |
| id | String | The ID of the sensitive data rule. | FALSE | 29.0 |
| replacement | String | The replacement of the pattern in the message if actionType is Replace. | FALSE | 29.0 |
| actionType | String | The action type if the message matches the pattern. | FALSE | 29.0 |

## TranscriptEntry

Properties

| Property Name | Type | Description | Required | Available Versions |
| --- | --- | --- | --- | --- |
| type | Enumeration of type String | The type of message in the chat transcript. Valid values are:Agent: a message from an agent to a chat visitorChasitor: a message from a chat visitor to an agentOperatorTransferred: A request to transfer a chat to another agent | TRUE | 29.0 |
| name | String | The name of the person who sent the chat message. | TRUE | 29.0 |
| content | String | The body of the message. | TRUE | 29.0 |
| timestamp | number | The date and time when the message was sent. | TRUE | 29.0 |
| sequence | number | The sequence in which the message was received in the chat. | TRUE | 29.0 |

#### See Also

-   [Status Codes and Error Responses](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_error_codes.htm "Each request returns a status code or error response to indicate whether the request was successful.")

-   [*Salesforce Help*: Block Sensitive Data in Chats](https://help.salesforce.com/s/articleView?language=en_US&id=sf.live_agent_block_sensitive_data.htm&type=5 "Salesforce Help: Block Sensitive Data in Chats - HTML (New Window)")

## Related Topics

- responses that are available for the Messages request (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Messages_responses_overview.htm)
- SensitiveDataRuleTriggered for Chasitors (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_SensitiveDataRuleTriggered_Chasitor.htm)
- Status Codes and Error Responses (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_error_codes.htm)
