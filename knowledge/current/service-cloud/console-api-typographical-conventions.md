---
title: "Console API Typographical Conventions"
domain: service-cloud
topic: console-api-typographical-conventions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:50.735Z
keywords: [Console, API, Typographical, Conventions]
---

# Console API Typographical Conventions

# Console API Typographical Conventions

Typographical conventions are used in our code examples. Learn what Courier font, italics, and brackets mean.

| Convention | Description |
| --- | --- |
| Courier font | In descriptions of syntax, a monospace font indicates items that you should type as shown, except for brackets. For example:Public class HelloWorld |
| Italics | In descriptions of syntax, italics represent variables. You supply the actual value. In the following example, three values must be supplied: datatype variable_name [ = value];If the syntax is bold and italic, the text represents a code element that needs a value supplied by you, such as a class name or variable value: public static class YourClassHere { ... } |
| Bold Courier font | In code samples and syntax descriptions, a bold courier font emphasizes a portion of the code or syntax. |
| < > | In descriptions of syntax, less-than and greater-than symbols (< >) are typed exactly as shown.<apex:pageBlockTable value="{!account.Contacts}" var="contact">    <apex:column value="{!contact.Name}"/>    <apex:column value="{!contact.MailingCity}"/>    <apex:column value="{!contact.Phone}"/> </apex:pageBlockTable> |
| { } | In descriptions of syntax, braces ({ }) are typed exactly as shown.<apex:page>     Hello {!$User.FirstName}! </apex:page> |
| [ ] | In descriptions of syntax, anything included in brackets is optional. In the following example, specifying value is optional: data_type variable_name [ = value]; |
| \| | In descriptions of syntax, the pipe sign means “or”. You can do one of the following (not all). In the following example, you can create a new unpopulated set in one of two ways, or you can populate the set:Set<data_type> set_name     [= new Set<data_type>();] \|    [= new Set<data_type{value [, value2. . .] };] \|    ; |