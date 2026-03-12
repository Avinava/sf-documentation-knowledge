---
title: "LiveChatButton"
domain: object-reference
topic: livechatbutton
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.355Z
estimatedTokens: 3144
keywords: [LiveChatButton, button, visitors, chats, Chat, users, API, version, 24.0, later, Calls, Usage]
---

# LiveChatButton

> Represents a button that allows visitors to request chats with Chat
         users. This object is available in API version 24.0 and later.

# LiveChatButton

Represents a button that allows visitors to request chats with Chat users. This object is available in API version 24.0 and later.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Animation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of animation used when an automated chat invitation appears on-screen. For automated chat invitations only. Available in API version 29.0 and later.Possible values are:AppearCustomFadeSlide |
| AutoGreeting | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe text that is automatically sent from an agent to a visitor when a chat session starts.NoteA greeting message in the AutoGreeting field of the LiveChatButton object overrides individual users’ greeting messages in the AutoGreeting field in the LiveChatUserConfig object. |
| ChasitorIdleTimeout | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe amount of time a customer has to respond to an agent message before the chat times out. |
| ChasitorIdleTimeoutWarning | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe amount of time a customer has to respond to an agent message before a warning appears and a timer begins a countdown. This value must be shorter than the ChasitorIdleTimeout value. We recommend at least 30 seconds shorter. |
| ChatPageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record ID of the custom VisualForce page that contains the custom chat window code.This field is a relationship field.Relationship NameChatPageRelationship TypeLookupRefers ToApexPage |
| CustomAgentName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe custom name of the agent associated with the button. Available in API version 29.0 and later.NoteA custom agent name in the CustomAgentName field of the LiveChatButton object overrides individual users’ custom agent name in the CustomAgentName field in the LiveChatUserConfig object. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| HasQueue | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether or not to allow queing incoming chat requests until an agent is available.The default value is false. |
| InviteEndPosition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe position on screen where an automated chat invitation’s animation ends.NoteYou don’t need to select an end position for your automated chat invitation if you use a custom animation.For automated chat invitations only. Available in API version 29.0 and later.Possible values are:BottomBottomLeftBottomRightCenterLeftRightTopTopLeftTopRight |
| InviteImageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record ID of the static image resource displayed on your automated chat invitation. For automated chat invitations only. Available in API version 29.0 and later.This field is a relationship field.Relationship NameInviteImageRelationship TypeLookupRefers ToStaticResource |
| InviteStartPosition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort , UpdateDescriptionThe position on screen where an automated chat invitation’s animation begins.NoteYou don’t need to select a start position for your automated chat invitation if you use a custom animation.For automated chat invitations only. Available in API version 29.0 and later.Possible values are:BottomBottomLeftBottomLeftBottomBottomLeftLeftBottomRightBottomRightBottomBottomRightRightLeftTopRightTopLeftTopLeftLeftTopLeftTopTopRight—Top RightTopRightRightTopRightTop |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFor automated chat invitations, specifies whether an automated chat invitation is active or not.The default value is false. |
| IsRoutingFlowEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether routing flow is enabled or not.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the chat.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the chat button. |
| NumberOfReroutingAttempts | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the number of times a chat request can be rerouted to available agents if all agents reject the chat request. |
| OfflineImageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record ID of the static image resource that is displayed when the button is offline (inactive).This field is a relationship field.Relationship NameOfflineImageRelationship TypeLookupRefers ToStaticResource |
| OnlineImageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record ID of the static image resource that is displayed when the button is online (active).This field is a relationship field.Relationship NameOnlineImageRelationship TypeLookupRefers ToStaticResource |
| OptionsHasChasitorIdleTimeout | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether Customer Time-Out is enabled. |
| OptionsHasInviteAfterAccept | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether an automated chat invitation can be sent to a customer after that customer has accepted a prior automated chat invitation (true) or not (false). For automated chat invitations only. Available in API version 29.0 and later. |
| OptionsHasInviteAfterReject | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether an automated chat invitation can be sent to a customer after that customer has rejected a prior automated chat invitation (true) or not (false). For automated chat invitations only. Available in API version 29.0 and later. |
| OptionsHasRerouteDeclinedRequest | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether a chat request that has been rejected by all available agents should be rerouted to available agents again (true) or not (false). |
| OptionsIsAutoAccept | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether a chat request should be automatically accepted by the agent it’s assigned to (true) or not false). For chat buttons and automated chat invitations with RoutingType set to Most Available or Least Active. Available in API version 30.0 and later. |
| OptionsIsInviteAutoRemove | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether an automated chat invitation should be automatically removed from the screen after a certain amount of time (true) or not (false). For automated chat invitations only. Available in API version 29.0 and later. |
| OverallQueueLength | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of chat requests allowed to queue. |
| PerAgentQueueLength | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of chat requests allowed to queue for each agent with the required skill. |
| PostchatPageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record ID of the custom VisualForce page displayed when the chat ends.This field is a relationship field.Relationship NamePostchatPageRelationship TypeLookupRefers ToApexPage |
| PostchatUrl | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL the user is directed to after the chat ends. |
| PrechatFormPageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record ID of the custom VisualForce page displayed before the chat begins.This field is a relationship field.Relationship NamePrechatFormPageRelationship TypeLookupRefers ToApexPage |
| PrechatFormUrl | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL the user is directed to before the chat begins. |
| PushTimeout | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of seconds an agent has to answer a chat request before it’s routed to the next available agent. |
| QueueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record ID of the queue used for this chat button.This field is a relationship field.Relationship NameQueueRelationship TypeLookupRefers ToGroup |
| RoutingConfigurationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record ID of the routing configuration used for this chat button.This field is a relationship field.Relationship NameRoutingConfigurationRelationship TypeLookupRefers ToQueueRoutingConfig |
| RoutingType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionHow chat requests are routed to agents. The values are:Choice—Incoming chat requests are added to the queue in Live Agent in the Salesforce console and are available to any agent with the required skill.Least Active—Incoming chats are routed to the agent with the required skill who has the fewest active chats.Most Available—Incoming chats are routed to the agent with the required skill and the greatest difference between chat capacity and active chat sessions. For example, if Agent A and Agent B each have a chat capacity of five, and Agent A has three active chat sessions while Agent B has one, incoming chats will be routed to Agent B.Omni—Incoming chats are routed using Omni-Channel queues. |
| SiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record ID of the site used for loading static resources and custom VisualForce pages.This field is a relationship field.Relationship NameSiteRelationship TypeLookupRefers ToSite |
| SkillId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record ID of the skill used to route incoming chat requests. To associate multiple skills with a chat button, reference one skill in the SkillId field and use LiveChatButtonSkill junction objects for the remaining skills.This field is a relationship field.Relationship NameSkillRelationship TypeLookupRefers ToSkill |
| TimeToRemoveInvite | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of seconds an automated invitation stays on-screen before it is automatically removed. For automated chat invitations only. Available in API version 29.0 and later. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of element to display to customers.Possible values are:Invite—Automated invitationStandard—Chat button |
| WindowLanguage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language used for standard chat windows. Custom chat windows use the language of the user’s browser.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |

## Usage

Use this object to query and manage chat buttons and automated chat invitations.
