---
title: "EmailAddress"
domain: mc-apis
topic: emailaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.619Z
estimatedTokens: 263
keywords: [EmailAddress, email, address, associated, Person, Items, communicate]
---

# EmailAddress

> The EmailAddress object represents an email address associated with a Person.

# EmailAddress

The EmailAddress object represents an email address associated with a Person.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Address | xsd:string | The physical mailing address required at the bottom of all email messages contains the information described by this property (no P.O. Boxes). The address used to communicate with a Person. |
| AddressType | xsd:string | Indicates what type of address this object represents |
| Statuses | AddressStatus[] | Array of status values for an address. |
| Type | EmailType | Indicates type of specific list. Valid values include Public, Private, Salesforce, GlobalUnsubscribe, and Master. Indicates the type of email to send to the address. Valid values include Text and HTML. |

## Related Items

[Unsubscribe and Log an UnsubEvent with a LogUnsubEvent Execute Call](atlas.en-us.noversion.mc-apis.meta/mc-apis/unsubscribing_and_logging_an_unsubevent_with_a_logunsubevent_execute_call.htm "Unsubscribing_and_Logging_an_UnsubEvent_with_a_LogUnsubEvent_Execute_Call")

## Related Topics

- Unsubscribe and Log an UnsubEvent with a LogUnsubEvent Execute Call (atlas.en-us.noversion.mc-apis.meta/mc-apis/unsubscribing_and_logging_an_unsubevent_with_a_logunsubevent_execute_call.htm)
