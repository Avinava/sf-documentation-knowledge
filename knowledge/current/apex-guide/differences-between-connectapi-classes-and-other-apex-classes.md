---
title: "Differences Between ConnectApi Classes and Other Apex
    Classes"
domain: apex-guide
topic: differences-between-connectapi-classes-and-other-apex-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.751Z
keywords: [Differences, Between, ConnectApi, Classes, Apex]
---

# Differences Between ConnectApi Classes and Other Apex
    Classes

# Differences Between ConnectApi Classes and Other Apex Classes

Note these additional differences between ConnectApi classes and other Apex classes.

System mode and context user

Connect in Apex methods don’t run in system mode, they run in the context of the current user (also called the *context user*). The methods have access to whatever the context user has access to. Connect in Apex doesn’t support the runAs system method. When a method takes a subjectId argument, often that subject must be the context user. In these cases, you can use the string me to specify the context user instead of an ID.

Connect in Apex isn’t available to Automated Process users by default. Connect in Apex is available to these users:

-   Chatter-only users
-   Guest users
-   Portal users
-   Standard users

with sharing and without sharing

Connect in Apex ignores the with sharing and without sharing keywords. Instead, the context user controls all security, field level sharing, and visibility. For example, if the context user is a member of a private group, ConnectApi classes can post to that group. If the context user is not a member of a private group, the code can’t see the feed items for that group and can’t post to the group.

Asynchronous operations

Some Connect in Apex operations are asynchronous, that is, they don’t occur immediately. For example, if your code adds a feed item for a user, it isn’t immediately available in the news feed. Another example: when you add a photo, it’s not available immediately. For testing, if you add a photo, you can’t retrieve it immediately.

No XML support in Apex REST

Apex REST doesn’t support XML serialization and deserialization of Connect in Apex objects. Apex REST does support JSON serialization and deserialization of Connect in Apex objects.

Empty log entries

Information about Connect in Apex objects doesn’t appear in VARIABLE\_ASSIGNMENT log events.

No Apex SOAP web services support

Connect in Apex objects can’t be used in Apex SOAP web services indicated with the keyword webservice.