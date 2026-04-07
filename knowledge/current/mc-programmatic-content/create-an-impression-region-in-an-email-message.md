---
title: "Create an Impression Region in an Email Message"
domain: mc-programmatic-content
topic: create-an-impression-region-in-an-email-message
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:27.114Z
estimatedTokens: 532
keywords: [Impression, Region, Email, Message, sample, includes, offer, holiday, sale, state, residence, subscriber]
---

# Create an Impression Region in an Email Message

> This sample includes an offer for a holiday sale within the body of an email based on the state of residence of the subscriber.

# Create an Impression Region in an Email Message

This sample includes an offer for a holiday sale within the body of an email based on the state of residence of the subscriber.

```
%%[if emailaddr == emailaddr then ]%%
%%[
var @URL1,
set @URL1 = "https://help.salesforce.com/"
]%%

%%= BeginImpressionRegion("Banner Placement") =%%

To visit Help
<a href="%%=RedirectTo(@URL1)=%%" alias="Help">go here to login</a><br />
<br />
<br />
Check out the home page
<a href="http://marketingcloud.com" alias="home">here</a><br />

%%= EndImpressionRegion() =%%

%%[ else ]%%
This is the Default content!
%%[
endif
]%%
```

The quotation marks ("") around "Banner Placement" indicate that the function uses a string literal for the impression name.

The names of impression regions used in the sample must use constant strings or numbers. Marketing Cloud treats impression area names as case-sensitive and stores those names in the case of their first occurrence. You can use an unlimited number of unique names within your account.

Marketing Cloud closes all impression regions at the end of the message if you don't include an explicit close in the message. An impression region opened in the HTML version of an email does not remain open when building the text version of the message.

You can nest impression regions. For example, if you open three regions without any EndImpressionRegion() calls, all three remain open and the final one opened remains the active one returned for resolving the related personalization strings. If you issue one EndImpressionRegion() call, AMPscript treats the second region as the active region. Issue EndImpressionRegion(true) to close all open regions.

Impression regions support two personalization strings. The 'ImpressionRegionID' personalization string returns the active region ID or 0 if none is active. Impression region also supports the 'ImpressionRegionName' personalization string. This string resolves to the currently active impression region for content that contains the personalization string. This string evaluates to an empty string if you don't set an impression region.
