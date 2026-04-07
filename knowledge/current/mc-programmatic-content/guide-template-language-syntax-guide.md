---
title: "Guide Template Language Syntax Guide"
domain: mc-programmatic-content
topic: guide-template-language-syntax-guide
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:22.433Z
estimatedTokens: 587
keywords: [Templates, Tags, Template, Language, known, GTL, declarative, personalized, messages, Marketing, Cloud, containing, define, personalization, message, including, contact, attributes, dynamic, Guid, Sources, Simple, Prefixes, Suffixes, Empty]
---

> Guide Template Language (also known as GTL or Guide) is a declarative language used to create personalized messages within the Marketing Cloud. Use Guide to create templates containing elements that define personalization within the message, including contact attributes and dynamic information. Guid

# Guide Template Language Syntax Guide

Guide Template Language (also known as GTL or Guide) is a declarative language used to create personalized messages within the Marketing Cloud. Use Guide to create templates containing elements that define personalization within the message, including contact attributes and dynamic information. Guide follows a similar structure to the Mustache.js and Handlebars.js templating libraries, and Guide will support valid templates from either of those libraries. However, Guide accesses information from the Salesforce Marketing Cloud as a source, as opposed to using data supplied for Mustache.js and Handlebars.js via script.

## Data Sources

Guide Template Language can work with JSON data sources supplied by script or by a REST API service. Guide can also access specified lists and data extensions within a Marketing Cloud account.

Guide will attempt to access all available data sources (outlined above) to match variables until it returns the correct information or provides a blank value.

## Templates

Templates contain markup that use information from a data source to render content within a message. The markup tags within the templates determine the content rendered at send time.

## Tags

All Guide expressions use tags to indicate where a data substitution occurs and what information should be used for the substitution.

You can use tags to outline simple tags and block tags. Simple tags outline a single line, while block tags contain several lines between the tags.

### Simple Tags

Use a ~ character after the initial tag delimiter or before the last tag delimiter to remove all whitespace characters before or after the tag.

## Prefixes and Suffixes

Guide can use several different prefixes, as shown below:

-   \# - used to indicate a section tag
-   \= - used to indicate a function or set delimiter tag
-   ^ - used to indicate an inverted section tag
-   ! - used to indicate a comment tag
-   \> - used to indicate a partial tag
-   #= - used to indicate a block helper
-   { - used to indicate data

Suffixes include the following characters:

-   } - used to close data
-   \= - used to close a set delimiter tag

## Empty Values

You can use any one of the following values to indicate an empty value:

-   null
-   undefined
-   false
-   0
-   NAN
-   ""
-   {}
-   \[\]
