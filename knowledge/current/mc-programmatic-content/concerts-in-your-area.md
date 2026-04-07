---
title: "Concerts in your Area"
domain: mc-programmatic-content
topic: concerts-in-your-area
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:22.026Z
estimatedTokens: 2620
keywords: [AMPscript, Concerts, Area, demonstrates, how, conjunction, extensions, send, email, message, subscribers, occurring, their, contents, depend, subscriber's, stated, genre, performances, Download, file, containing, sample, code, Relationships]
---

> This information demonstrates how to use AMPscript in conjunction with data extensions to send an email message to subscribers about concerts occurring in their area. The contents of the email depend on the subscriber's stated genre performances. Download a file containing the sample code for this s

# Concerts in your Area

This information demonstrates how to use AMPscript in conjunction with data extensions to send an email message to subscribers about concerts occurring in their area. The contents of the email depend on the subscriber's stated genre performances. [Download a file containing the sample code for this scenario](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/concertsinyourarea.zip).

## Data Extensions and Relationships

The marketer creates a data extension to contain information about upcoming concerts. Each concert includes an associated genre, range of ticket prices, date, artist, venue, and city. Later, the marketer will create AMPscript to include this information in an email based on the subscriber's city and genre preferences.

The marketer creates a webpage, such as a Web Collect or a Smart Capture form, where subscribers indicate their preferred music genres. The Customer\_Genre\_Preferences data extension contains the preferences information.

The Subscriber table contains the following data:

| Email Address | Customer ID | First Name | Last Name | City |
| --- | --- | --- | --- | --- |
| ettest201@example.com | 201 | Angel | Ruiz | Indianapolis |
| ettest202@example.com | 202 | John | Doe | Chicago |

The Customer\_Genre\_Preferences data extension contains this data:

| Customer ID | Genre |
| --- | --- |
| 201 | Rock |
| 201 | Alt Country |
| 201 | Indie |
| 202 | Pop |
| 202 | Folk |
| 202 | Rock |

The Upcoming\_Shows data extension contains this data:

| Concert ID | Genre | Low Price | High Price | Show Date | Artist | Venue | City |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 101 | Rock | 35 | 45 | 10/27/2007 | Band A | Venue A | Indianapolis |
| 106 | Indie | 15 | 37.5 | 10/6/2007 | Band B | Venue B | New York |
| 107 | Indie | 25 | 40 | 11/15/2007 | Band C | Venue C | Chicago |
| 108 | Alt-Country | 25 | 47.5 | 10/27/2007 | Band D | Venue D | Indianapolis |
| 109 | Indie | 35 | 50 | 10/30/2007 | Band E | Venue E | New York |
| 111 | Alt-Country | 15 | 30 | 10/19/2007 | Band F | Venue F | Chicago |
| 112 | Indie | 35 | 57.5 | 11/2/2007 | Band G | Venue G | Indianapolis |
| 113 | Folk | 25 | 35 | 11/6/2007 | Band H | Venue H | Chicago |
| 114 | Alt-Country | 15 | 30 | 11/15/2007 | Band I | Venue I | Indianapolis |
| 115 | Indie | 25 | 35 | 10/27/2007 | Band J | Venue J | Indianapolis |
| 116 | Alt-Country | 15 | 30 | 10/30/2007 | Band K | Venue K | New York |
| 117 | Rock | 15 | 37.5 | 10/21/2007 | Band L | Venue L | Chicago |
| 118 | Indie | 15 | 30 | 10/19/2007 | Band M | Venue M | Indianapolis |
| 119 | Indie | 25 | 40 | 11/2/2007 | Band N | Venue N | New York |
| 120 | Alt-Country | 25 | 40 | 11/6/2007 | Band O | Venue O | Indianapolis |
| 121 | Indie | 35 | 57/5 | 11/15/2007 | Band P | Venue P | Chicago |
| 122 | Indie | 15 | 30 | 10/27/2007 | Band Q | Venue Q | Chicago |
| 123 | Rock | 25 | 35 | 10/30/2007 | Band R | Venue R | Indianapolis |
| 124 | Indie | 35 | 57.5 | 10/21/2007 | Band S | Venue S | Chicago |
| 125 | Alt-Country | 25 | 47.5 | 10/19/2007 | Band T | Venue T | Chicago |
| 126 | Alt-Country | 35 | 57.5 | 11/2/2007 | Band U | Venue U | Indianapolis |
| 127 | Indie | 25 | 35 | 11/6/2007 | Band V | Venue V | Chicago |
| 128 | Indie | 15 | 30 | 11/15/2007 | Band W | Venue W | Chicago |
| 129 | Rock | 35 | 57.5 | 10/27/2007 | Band X | Venue X | New York |
| 130 | Rock | 25 | 40 | 10/30/2007 | Band Y | Venue Y | Chicago |
| 131 | Indie | 25 | 47.5 | 10/21/2007 | Band Z | Venue Z | New York |
| 132 | Pop | 35 | 57.5 | 10/19/2007 | Band 0 | Venue 0 | Chicago |
| 133 | Folk | 25 | 35 | 11/2/2007 | Band 1 | Venue 1 | New York |
| 138 | Indie | 35 | 50 | 10/21/2007 | Band 2 | Venue 2 | Chicago |
| 139 | Indie | 15 | 37.5 | 10/29/2007 | Band 3 | Venue 3 | Indianapolis |
| 140 | Alt-Country | 25 | 40 | 11/2/2007 | Band 4 | Venue 4 | Chicago |
| 141 | Pop | 25 | 35 | 11/6/2007 | Band 5 | Venue 5 | Indianapolis |
| 142 | Rock | 25 | 40 | 11/15/2007 | Band 6 | Venue 6 | New York |
| 143 | Rock | 25 | 40 | 10/27/2007 | Band 7 | Venue 7 | Indianapolis |
| 144 | Rock | 15 | 30 | 10/30/2007 | Band 8 | Venue 8 | Chicago |
| 145 | Alt-Country | 25 | 40 | 10/21/2007 | Band 9 | Venue 9 | Chicago |
| 146 | Rock | 35 | 50 | 10/19/2007 | Band 10 | Venue 10 | Chicago |
| 148 | Rock | 35 | 50 | 11/6/2007 | Band 11 | Venue 11 | Indianapolis |

## AMPscript

This AMPscript appears in the body of the email.

```
<html>
<body style="font-size: 12px;color: #000099; font-family: verdana;">

%%[ /* This is an AMPscript Comment */ ]%%

<p>Hi %%First Name%%,<br><br>
We want to tell you about upcoming shows in your area based on your favorite music genres.  We think you are as stoked as we are to see great live music and wanted to pass the word on.  Enjoy!<br><br>
</p>

<h3>Upcoming Shows in %%City%%</h3>
<br><br>

%%[
/* First we want to determine if the customer has any favorite genres stored. If not, we want to encourage them to create online */
/* Otherwise, we will loop through every genre we find */

var @rsgenre, @rowgenre, @rsshow, @rowshow, @countergenre, @countershow, @currentgenre

SET @rsgenre = LOOKUPROWS("Customer_Genre_Preferences", "Customer ID", [Customer ID])
]%%

%%[
if ROWCOUNT(@rsgenre) == 0 then
]%%

<h4>We see that you don't have any genres stored, please add them online to get the most relevant information sent to you next time!</h4>
<a href="http://music.example.com">Add My Genres</a>

%%[
else

/* Now we are going to loop through each customer's genre, and then use that and City to look up upcoming shows to display in a table */
/* if we find a genre, but no corresponding shows, we are not going to display anything for that genre */
]%%

  %%[
  for @countergenre = 1 to ROWCOUNT(@rsgenre) do

  SET @currentgenre = FIELD(ROW(@rsgenre, @countergenre), "Genre Preference")
  SET @rsshow = LOOKUPROWS("Upcoming_Shows", "City", City, "Genre", @currentgenre)

    if ROWCOUNT(@rsshow) != 0 then ]%%
      <h4>%%=CONCAT("Upcoming ", @currentgenre, " Shows")=%%</h4><br>
        <table width="700px" style="border: 1 solid black; font-size: 10px;color: #000099; font-family: verdana;" cellpadding="2" cellspacing="0">
          <tr style="font-size: 10px;color: #999999; font-family: verdana; font-weight: bold;">
            <td>Date</td>
            <td>Artist</td>
            <td>Venue</td>
            <td>Tickets</td>
            <td>City</td>
          </tr>
        %%[
        for @countershow = 1 to ROWCOUNT(@rsshow) do
          SET @rowshow = ROW(@rsshow, @countershow)

          /* Here we are setting alternating style for the row */

          if MOD(@countershow, 2)== 0 and @countershow != 1 then
        ]%%

          <tr style="background-color: #dcdcdc;">

        %%[else]%%

          <tr>

        %%[endif]%%

            <td>%%=FORMAT(FIELD(@rowshow, "Show Date"), "ddd, MMM d")=%%</td>
            <td>%%=FIELD(@rowshow, "Artist")=%%</td>
            <td>%%=FIELD(@rowshow, "Venue")=%%</td>
            <td><a href="http://music.com?ConcertID=%%=FIELD(@rowshow, 'Concert ID')=%%">%%=CONCAT("From", FORMAT(FIELD(@rowshow, "Low Price"), "C2")," to ", FORMAT(FIELD(@rowshow, "High Price"), "C2"))=%%</a></td>
            <td>%%=FIELD(@rowshow, "City")=%%</td>
          <tr>

        %%[
        next @countershow
        ]%%

        </table>
        <br><br>
    %%[
    endif
    ]%%

  %%[
  next @countergenre
  ]%%
%%[
endif
]%%

<custom name="opencounter" type="tracking"><table cellpadding="2" cellspacing="0" width="600" ID="Table5" Border=0><tr><td><font face="verdana" size="1" color="#444444">This email was sent to:  %%emailaddr%% <br><br><b>Email Sent By:</b> %%Member_Busname%%<br>%%Member_Addr%% %%Member_City%%, %%Member_State%%, %%Member_PostalCode%%, %%Member_Country%%<br><br></font></td></tr></table><a href="%%profile_center_url%%" alias="Update Profile">Update Profile</a>

</body>
</html>
```

## Output

When the marketer sends the email, the application processes the code:

For Angel Ruiz:

Hi Angel,

We want to tell you about upcoming shows in your area based on your favorite music genres. We think you are as stoked as we are to see great live music and wanted to pass the word on. Enjoy!

Upcoming Shows in Indianapolis

Upcoming Rock Shows

| Date | Artist | Venue | Tickets | City |
| --- | --- | --- | --- | --- |
| Sat, Oct 27 | Band A | Venue A | From $35.00 to $45.00 | Indianapolis |
| Tue, Oct 30 | Band R | Venue R | From $25.00 to $35.00 | Indianapolis |
| Sat, Oct 27 | Band 7 | Venue 7 | From $25.00 to $40.00 | Indianapolis |
| Tue, Nov 6 | Band 11 | Venue 11 | From $35.00 to $50.00 | Indianapolis |

Upcoming Alt-Country Shows

| Date | Artist | Venue | Tickets | City |
| --- | --- | --- | --- | --- |
| Sat, Oct 27 | Band D | Venue D | From $25 to $47.50 | Indianapolis |
| Thu, Nov 15 | Band I | Venue I | From $15.00 to $30.00 | Indianapolis |
| Tue, Nov 6 | Band O | Venue O | From $25.00 to $40.00 | Indianapolis |
| Fri, Nov 2 | Band U | Venue U | From $35.00 to $57.50 | Indianapolis |

Upcoming Indie Shows

| Date | Artist | Venue | Tickets | City |
| --- | --- | --- | --- | --- |
| Fri, Nov 2 | Band G | Venue G | From $35.00 to $57.50 | Indianapolis |
| Sat, Oct 27 | Band J | Venue J | From $25.00 to $35.00 | Indianapolis |
| Fri, Oct 19 | Band M | Venue M | From $15.00 to $30.00 | Indianapolis |
| Mon, Oct 29 | Band 3 | Venue 3 | From $15.00 to $37.50 | Indianapolis |

For John Doe:

Hi John,

We want to tell you about upcoming shows in your area based on your favorite music genres. We think you are as stoked as we are to see great live music and wanted to pass the word on. Enjoy!

Upcoming Shows in Chicago

| Date | Artist | Venue | Tickets | City |
| --- | --- | --- | --- | --- |
| Fri, Oct 19 | Band 0 | Venue 0 | From $35.00 to $57.50 | Chicago |

Upcoming Pop Shows

Date Artist Venue Tickets City Fri, Oct 19 Band 0 Venue 0 From $35.00 to $57.50 Chicago Upcoming Folk Shows

| Date | Artist | Venue | Tickets | City |
| --- | --- | --- | --- | --- |
| Fri, Oct 19 | Band 0 | Venue 0 | From $35.00 to $57.50 | Chicago |

Upcoming Rock Shows

| Date | Artist | Venue | Tickets | City |
| --- | --- | --- | --- | --- |
| Sat, Oct 27 | Band L | Venue L | From $15.00 to $37.50 | Chicago |
| Tue, Oct 30 | Band R | Venue R | From $25.00 to $35.00 | Chicago |
| Sat, Oct 27 | Band 7 | Venue 7 | From $25.00 to $40.00 | Chicago |
| Tue, Nov 6 | Band 11 | Venue 11 | From $35.00 to $50.00 | Chicago |
