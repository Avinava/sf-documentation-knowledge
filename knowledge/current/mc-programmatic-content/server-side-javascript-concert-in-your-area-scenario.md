---
title: "Server-Side JavaScript Concert in Your Area Scenario"
domain: mc-programmatic-content
topic: server-side-javascript-concert-in-your-area-scenario
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:27.494Z
estimatedTokens: 316
keywords: [Server-Side, JavaScript, Concert, Area, Scenario, demonstrates, how, conjunction, data, extensions, send, email, message, subscribers, concerts]
---

# Server-Side JavaScript Concert in Your Area Scenario

> This information demonstrates how to use server-side JavaScript in conjunction with data extensions to send an email message to subscribers about concerts occurring in their area. The contents of the email depend on the subscriber's stated genre performances. Download a file containing the sample co

# Server-Side JavaScript Concert in Your Area Scenario

This information demonstrates how to use server-side JavaScript in conjunction with data extensions to send an email message to subscribers about concerts occurring in their area. The contents of the email depend on the subscriber's stated genre performances. [Download a file containing the sample code for this scenario](https://resources.docs.salesforce.com/rel1/doc/en-us/static/misc/concertsinyourarea.zip).

## Data Extensions and Relationships

The marketer creates a data extension to contain information about upcoming concerts. Each concert includes an associated genre, range of ticket prices, date, artist, venue, and city. Later, the marketer will create server-side JavaScript to include this information in an email based on the subscriber's city and genre preferences.

The marketer creates a webpage where subscribers indicate their preferred music genres. The preferences are stored in the Customer\_Genre\_Preferences data extension.

The Subscriber table contains this data:

| Email Address | Customer ID | First Name | Last Name | City |
| --- | --- | --- | --- | --- |
| ettest201@example.com | 201 | Angel | Ruiz | Indianapolis |
| ettest202@example.com | 202 | John | Doe | Chicago |
