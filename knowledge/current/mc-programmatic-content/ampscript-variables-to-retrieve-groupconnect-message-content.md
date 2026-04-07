---
title: "AMPscript Variables to Retrieve GroupConnect Message Content"
domain: mc-programmatic-content
topic: ampscript-variables-to-retrieve-groupconnect-message-content
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:22.307Z
estimatedTokens: 409
keywords: [TEXT, Examples, AMPscript, Variables, Retrieve, GroupConnect, Message, Content, apply, messages, cannot, functions, email, landing, pages, functionality, specific, including, applicable, nouns, sticker, NOUN, STKR]
---

> These variables apply only to GroupConnect messages. You cannot use these functions with email messages, landing pages, or other functionality. These functions return specific values that apply only to GroupConnect messages, including text, applicable nouns, and sticker data.

# AMPscript Variables to Retrieve GroupConnect Message Content

These variables apply only to GroupConnect messages. You cannot use these functions with email messages, landing pages, or other functionality. These functions return specific values that apply only to GroupConnect messages, including text, applicable nouns, and sticker data.

## TEXT

Use this function to return all text from a LINE message sent to your account.

## NOUN(O1)

Use this function to return specified words from a GroupConnect message. The ordinal number indicates the location of the word within the message:

-   TEXT - Returns the entire message
-   TEXT.VERB - Returns the first word in the message
-   TEXT.NOUNS - Returns all words after the verb in the message
-   TEXT.NOUN(0) - Returns the first word after the verb in the message
-   TEXT.NOUN(1) - Returns the second word after the verb in the message

## STKR(P1)

Use this function to retrieve information about stickers sent to your LINE account. This function must include one of the following specified parameters:

-   STKPKGID - Sticker Package ID
-   STKID - Sticker ID
-   STKTXT - Sticker Text

## Examples

For a LINE message containing the text Hello new subscriber!:

-   TEXT - Returns Hello new subscriber!
-   TEXT.VERB - Returns Hello
-   TEXT.NOUNS - Returns new subscriber!
-   TEXT.NOUN(0) - Returns new
-   TEXT.NOUN(1) - Returns subscriber!

For a LINE message containing a sticker:

-   STKR.STKPKGID - Package ID associated with the specified sticker
-   STKR.STKID - ID associated with the specified sticker
-   STKR.STKTXT - Text associated with the specified sticker
