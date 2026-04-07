---
title: "AMPscript Variables for Use with Mobile Messages"
domain: mc-programmatic-content
topic: ampscript-variables-for-use-with-mobile-messages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.659Z
estimatedTokens: 1038
keywords: [Arguments, Examples, AMPscript, Variables, Mobile, Messages, sent, via, MobileConnect, apply, cannot, include, email, landing, pages, functionality, functions, specific, keywords, media, URLs, MMS, _CONTENT, _URL, MSG, NOUN, Sample, Items]
---

> Use these variables with mobile messages sent via MobileConnect. These variables apply only to mobile messages. You cannot include them in email messages, landing pages, or other functionality. These functions return specific values that apply only to mobile messages, such as keywords or media URLs.

# AMPscript Variables for Use with Mobile Messages

Use these variables with mobile messages sent via MobileConnect. These variables apply only to mobile messages. You cannot include them in email messages, landing pages, or other functionality. These functions return specific values that apply only to mobile messages, such as keywords or media URLs.

You can also use the InsertData and DeleteData functions with mobile messages.

## MMS\_CONTENT\_URL(O1)

Use this function to return the URL of incoming MMS content used in a mobile message. This variable works only with MobileConnect accounts when sending MMS messages. You must retrieve and store this data within your own system for later usage. For example, you can send the URL to another program that distributes the content residing at the URL to a big-screen display or another person for review. We recommend using this feature with an approval filter in Media Share and Media Response message templates to prevent unauthorized content from reaching your contacts.

### Arguments

This variable includes the ordinal of the MMS content contained in the MO MMS message. A value of 0 indicates the MMS content in the current MO message.

## MSG(O1)

Use this function to return the specified MO keyword used in a mobile message conversation. You can only retrieve the current keyword from MobileConnect.

### Arguments

This variable includes the ordinal of the MO keyword verb in a message:

-   A value of 0 indicates the current MO keyword
-   A value of 1 indicates the previous MO keyword

Larger numbers indicate earlier previous keywords.

## NOUN(O1)

Use this function to return the specified noun used in a mobile message.

### Arguments

This variable include the ordinal of the noun in a message:

-   A value of 0 indicates the first noun in a message
-   A value of 1 indicates the next noun in a message

Larger numbers indicate later nouns within the message.

## Examples

MSG(0) - Returns the message MSG(0).VERB - Returns the verb of the message MSG(0).NOUNS - Returns the part of the current message after the verb MSG(0).NOUN(1) - Returns the second noun in the current message.

## Sample AMPscript

### MSG(0) and NOUN(0) Usage

Note that this example involves the use of a bit.ly account and API call to provide unique shortened URLs. Create your own bit.ly account to use this functionality.

This example checks the MO message for the presence of a secret word and sends a reply based on whether or not the secret word is present:

```
%%[ Var @msg
if (Uppercase([MSG(0).NOUN(0)]) == "PARTY") then
Set @msg = "Downtown Luxury Hotel, 7pm, May 2"
else
Set @msg = "We're sorry, but that's incorrect"
endif ]%%
%%= v(@msg) =%%
The AMPscript below automatically shortens a dynamic URL and provides a link to click and complete a subscription to continued SMS messages:

%%[
SET @URL = TRIM(HTTPGet(Concat("https://api-ssl.bitly.com/v3/shorten?access_token=BITLY_TOKEN&format=txt&longUrl=http%3A%2F%2Fexample.com/mobile/conf.php?mobile=",MOBILE_NUMBER)))
]%%
Thanks for your interest in Northern Trail Outfitters SMS Alerts. Please visit %%=v(TRIM(@url))=%% to complete your subscription.
```

Replace the text BITLY\_TOKEN with your own token. You can encode mobile numbers or tags in the URL for later usage in reports. To include analytics strings in a URL, URL-encode the entire string.

A high volume of calls (over 10,000) to the bit.ly API may exceed the limits of a free account. If you include these a large number of unique URLs via bit.ly in your sends, consider upgrading to an enterprise bit.ly account to ensure you can use a higher volume of API calls.

### MMS\_CONTENT\_URL(0) Usage

In the Media Share template, you can enter an outbound response:

```
Thanks for Responding YOURKEYWORD %%MMS_CONTENT_URL(0)%%
```

The outbound message takes the URL of the MMS content from the incoming MO message. You can then take the URL and forward it to another source, such as an external site or an RSS feed.

## Related Items

-   [URLEncode](https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/urlencode.htm)

## Code Examples

```
%%[ Var @msg  
if (Uppercase([MSG(0).NOUN(0)]) == "PARTY") then  
Set @msg = "Downtown Luxury Hotel, 7pm, May 2"
else
Set @msg = "We're sorry, but that's incorrect"
endif ]%%  
%%= v(@msg) =%%
The AMPscript below automatically shortens a dynamic URL and provides a link to click and complete a subscription to continued SMS messages:

%%[
SET @URL = TRIM(HTTPGet(Concat("https://api-ssl.bitly.com/v3/shorten?access_token=BITLY_TOKEN&format=txt&longUrl=http%3A%2F%2Fexample.com/mobile/conf.php?mobile=",MOBILE_NUMBER)))
]%%
Thanks for your interest in Northern Trail Outfitters SMS Alerts. Please visit %%=v(TRIM(@url))=%% to complete your subscription.
```
