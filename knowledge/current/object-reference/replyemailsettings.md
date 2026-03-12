---
title: "ReplyEmailSettings"
domain: object-reference
topic: replyemailsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.192Z
estimatedTokens: 880
keywords: [ReplyEmailSettings, reply, mail, management, configuration, configure, emails, received, email, sending, domain, API, version, 62.0, later]
---

# ReplyEmailSettings

> Represents a reply mail management configuration, which is used to configure
         emails that are received by an email sending domain. This object is available in API
      version 62.0 and later.

# ReplyEmailSettings

Represents a reply mail management configuration, which is used to configure emails that are received by an email sending domain. This object is available in API version 62.0 and later.

When you send an email campaign in Marketing Cloud, you often receive several replies to your messages, including unsubscribe requests and automatic out-of-office replies. Reply mail management (RMM) reduces the time and effort required to review these messages, and provide a better experience by automatically handling opt-outs and forwarding messages to the appropriate teams.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AutoReplyMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe content of the reply message. This reply is sent when a message is received at the sending address. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. The name:must be 40 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan’t include spacescan’t end with an underscorecan’t contain 2 consecutive underscoresIn managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| DomainName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe domain that the reply mail management settings apply to. This field is unique within your organization. |
| FwdEmailAddress | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address to forward a copy of each incoming message to. This value is honored only if the value of IsEmailForwardingEnabled is true. |
| IsAutoReplyEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to forward automatic replies, such as out-of-office messages, to the address specified in the FwdEmailAddress field. This value is honored only if the value of IsEmailForwardingEnabled is true.The default value is false. |
| IsDeleteAutoRepliesEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to delete automatic replies, such as out-of-office messages. This value is honored only if the value of IsEmailForwardingEnabled is true.The default value is false. |
| IsEmailForwardingEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to forward email replies to the address specified in the FwdEmailAddress field.The default value is false. |
| IsUnsubscribeManualRequestsEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether subscribers can opt out of your campaigns by replying to your email with a keyword such as unsubscribe.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the ReplyEmailSettings object. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this ReplyEmailSettings value. This value is the internal label that doesn’t get translated. |
