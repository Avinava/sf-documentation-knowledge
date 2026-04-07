---
title: "Personalization Strings and AMPscript"
domain: mc-programmatic-content
topic: personalization-strings-and-ampscript
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:22.679Z
estimatedTokens: 1069
keywords: [Personalization, Strings, AMPscript, system, building, expressions, want, display, different, message, text, day, week, month, add, Marketing, Cloud]
---

> Use system personalization strings when building AMPscript expressions. For example, you might want to display a different message or text based on the day of the week or the month. Use these personalization strings to add that information:

# Personalization Strings and AMPscript

Use system personalization strings when building AMPscript expressions. For example, you might want to display a different message or text based on the day of the week or the month. Use these personalization strings to add that information:

```
xtdayofweek
```
```
xtmonth
```

Other common uses for system personalization strings include passing identifiers, such as the unique email, job, or subscriber ID or key to a web page or web analytics solution for the purposes of tracking subscriber behavior.

Personalization strings that appear in AMPscript function calls cannot include the surrounding percent symbols. For example, this example shows invalid AMPscript:

```
%%=UPPERCASE(%%emailaddr%%)=%%
```

This format displays valid AMPscript:

```
%%=UPPERCASE(emailaddr)=%%
```

This section lists the system personalization strings to insert into a message. Type these fields directly into the HTML of your email body if you create an HTML paste email, or you type them directly into the text editor when you create or modify the text of a content box.

-   The system treats all personalization strings as case-insensitive.
-   When working with personalization strings outside of an AMPscript block, you must include the two sets of double percent symbols (two percent symbols on either side of the personalization string). A personalization string used in email might look like this example:

```
%%fullname%%
```

-   When working with personalization strings inside an AMPscript block, don't use the two sets of double percent symbols. A personalization string within AMPscript might look like this example:

```
fullname
```

## Marketing Cloud Personalization Strings

Review [Personalization Strings](https://help.salesforce.com/articleView?id=mc_es_available_personalization_strings.htm&type=5) for the full list of personalization strings available to use within your AMPscript.

Use these personalization strings in conjunction with the MobileConnect and Contact Builder applications inside Marketing Cloud:

|  |  |
| --- | --- |
| Personalization String | Description |
| _CarrierID | Carrier ID associated with the contact, contained in the contact CarrierID field. |
| _Channel | Channel associated with the contact, contained in the contact Channel field. |
| _City | City associated with the contact, contained in the contact City field. |
| _ContactID | Contact ID associated with the contact, contained in the contact ContactID field. |
| _ContactKey | Contact key associated with the contact, contained in the contact ContactKey field. Used to send SMS messages in MobileConnect. |
| _CountryCode | Country code associated with the contact, contained in the contact CountryCode field. |
| _CreatedBy | The entity that created the contact, contained in the contact CreatedBy field. |
| _CreatedDate | The date on which the contact was created, contained in the contact CreatedDate field. |
| _FirstName | The contact first name, contained in the FirstName field. |
| _IsHonorDST | Indicates whether the contact's time zone honors Daylight Savings Time, contained in the contact IsHonorDST field. |
| _LastName | The contact last name, contained in the contact LastName field. |
| _MobileNumber | The contact mobile number, contained in the contact MobileNumber field. |
| _ModifiedBy | The last user to modify contact information, contained in the contact ModifiedBy field. |
| _ModifiedDate | The last time a process modified contact information, contained in the contact ModifiedDate field. |
| _Priority | The priority to use when sending a message to a contact, contained in the contact Priority field. |
| _Source | The source of contact information, contained in the contact Source field. |
| _SourceObjectID | The object ID of the source of contact information, contained in the contact SourceObjectID field. |
| _State | The state associated with a contact, contained in the contact State field. |
| _Status | The send status associated with a contact, contained in the contact Status field. |
| _UTCOffset | The time offset from UTC associated with a contact, contained in the contact UTCOffset field. |
| _ZipCode | The ZIP code associated with a contact, contained in the contact ZipCode field. |
