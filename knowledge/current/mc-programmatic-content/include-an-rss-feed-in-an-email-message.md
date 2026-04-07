---
title: "Include an RSS Feed in an Email Message"
domain: mc-programmatic-content
topic: include-an-rss-feed-in-an-email-message
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.773Z
estimatedTokens: 1055
keywords: [Prerequisites, Scenario, Include, RSS, Email, Message, AMPscript, pull, content, put, presents, XML-based, showcases, latest, articles, published, website, RSS-enabled, source, take, send, sure, Sample]
---

> Use AMPscript to pull content from an RSS feed and put that content into an email message. RSS presents an XML-based list that showcases the latest articles published on a website or other RSS-enabled content source. Use AMPscript to take the information from an RSS feed during the send to make sure

# Include an RSS Feed in an Email Message

Use AMPscript to pull content from an RSS feed and put that content into an email message. RSS presents an XML-based list that showcases the latest articles published on a website or other RSS-enabled content source. Use AMPscript to take the information from an RSS feed during the send to make sure you include the most current information possible in your email send.

## Prerequisites

Familiarize yourself with the email creation process and AMPscript before attempting to use the information in this document. You must also publish an operational RSS feed to the Internet before you can use it in an email.

## Scenario

Northern Trail Outfitters maintains a blog for several key employees to use in sharing their experiences with Northern Trail equipment and the outdoors. They also send out a weekly email newsletter, and they'd like to include links to the latest blog entries as part of the newsletter. They use AMPscript to pull the RSS feeds into the email at the time of send. Example

## Sample AMPscript

In the email message content area, include this sample AMPscript:

```
%%[Var @xml, @titles, @title, @descs, @desc, @links, @link, @cnt
Set @xml = HTTPGet("https://example.com/xmlfile.xml")
Set @titles = BuildRowsetFromXML(@xml,"//item/title",1)
Set @descs = BuildRowsetFromXML(@xml,"//item/description",1)
Set @links = BuildRowsetFromXML(@xml,"//item/link",1)

If RowCount(@titles) > 5 THEN
SET @rows = 5
ELSE
SET @rows = RowCount(@titles)
ENDIF

IF @rows >= 1 THEN
for @cnt = 1 to @rows do
Set @title = Field(Row(@titles,@cnt),"Value")
Set @desc = Field(Row(@descs,@cnt), "Value")
Set @link = Field(Row(@links,@cnt), "Value") ]%%

<div style="border: 1px solid #444; background-color: #F7F7F7; margin: 0.76em 0; padding: 0.76em;">
<h1 style="font: bold normal 1.0em Arial, Helvetica, sans-serif;"><a href="%%=RedirectTo(@link)=%%" alias="%%=v(@title)="%%" title="%%=v(@title)=%% style="color: #000;">%%=v(@title)=%%</a></h1>
<span style="font: normal normal 0.76em Arial, Helvetica, sans-serif; color: #444;">%%=v(@desc)=%%</span>
</div>
%%[
NEXT @cnt
ENDIF
]%%
```

Test the email before sending to make sure the message pulls the correct content.

In the AMPscript listed above, the AMPscript takes the most recent 5 entries from the feed and includes them in the email. The @xml variable pulls in the content area with the content syndication, while the other variables pull information from the feed to include in the email. The For loop in the email counts how many times articles have been pulled from the feed and stops the message at 5.

You can modify the HTML markup included in the example to better fit the formatting of your email message.

If the RSS Feed pulled into the email contains HTML formatting, clear the text version of any AMPscript and provide the VAWP URL as a mechanism to view the email. If you don't do this, the email send will fail.

If you reference a node that includes a colon, the parser will not accept that colon and cause the operation to error out. Use this sample code as an example to get around the colon and successfully add your RSS feed:

```
%%[Var @xml, @xml1, @titles, @title, @descs, @desc, @links, @link, @cnt
Set @xml = HTTPGet("https://example.com/xmlfile.xml")
Set @xml = Replace(@xml1,'content:encoded','contentencoded')
Set @titles = BuildRowsetFromXML(@xml,"//item/title",1)
Set @descs = BuildRowsetFromXML(@xml,"//item/contentencoded",1)
Set @links = BuildRowsetFromXML(@xml,"//item/link",1)

If RowCount(@titles) > 5 THEN
SET @rows = 5
ELSE
SET @rows = RowCount(@titles)
ENDIF

IF @rows >= 1 THEN
for @cnt = 1 to 5 do
Set @title = Field(Row(@titles,@cnt),"Value")
Set @desc = Field(Row(@descs,@cnt), "Value")
Set @link = Field(Row(@links,@cnt), "Value") ]%%

<div style="border: 1px solid #444; background-color: #F7F7F7; margin: 0.76em 0; padding: 0.76em;">
<h1 style="font: bold normal 1.0em Arial, Helvetica, sans-serif;"><a href="%%=RedirectTo(@link)=%%" alias="%%=v(@title)="%%" title="%%=v(@title)=%% style="color: #000;">%%=v(@title)=%%</a></h1>
<span style="font: normal normal 0.76em Arial, Helvetica, sans-serif; color: #444;">%%=v(@desc)=%%</span>
</div>
%%[
NEXT @cnt
ENDIF
]%%
```
