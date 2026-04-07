---
title: "Retrieve Channel Member Names and IDs"
domain: mc-programmatic-content
topic: retrieve-channel-member-names-and-ids
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.722Z
estimatedTokens: 513
keywords: [Prerequisites, Retrieve, Channel, Member, IDs, AMPscript, pull, back, Enterprise, account, landing, displays, entities, part, SOAP, API, perform, any, necessary, Place]
---

> Use AMPscript to pull back channel member IDs and names from an Enterprise account. The landing page in this example displays the channel member names and IDs for all entities within your Enterprise account. Use this information as part of your SOAP API calls to perform any necessary calls. Place th

# Retrieve Channel Member Names and IDs

Use AMPscript to pull back channel member IDs and names from an Enterprise account. The landing page in this example displays the channel member names and IDs for all entities within your Enterprise account. Use this information as part of your SOAP API calls to perform any necessary calls. Place the AMPscript below in a landing page and refresh the page to view the information. You must change the ParentID in the AMPscript to match your parent account and create the data extension necessary to hold the information.

## Prerequisites

This example requires familiarity with AMPscript. You must also use an Enterprise account enabled for microsites or landing pages.

## Example

```
%%[
SET @param = RequestParameter("p")
IF @param == 1 THEN
SET @rr = CreateObject("RetrieveRequest")
SetObjectProperty(@rr,"ObjectType","Account")
AddObjectArrayItem(@rr,"Properties","ParentID")
AddObjectArrayItem(@rr,"Properties","PartnerKey")
AddObjectArrayItem(@rr,"Properties","Name")
AddObjectArrayItem(@rr,"Properties","ID")
AddObjectArrayItem(@rr,"Properties","Client.PartnerClientKey")
AddObjectArrayItem(@rr,"Properties","AccountType")
SetObjectProperty(@rr,"QueryAllAccounts",1)
SET @sfp = CreateObject("SimpleFilterPart")
SetObjectProperty(@sfp,"Property","ParentID")
SetObjectProperty(@sfp,"SimpleOperator","equals")
AddObjectArrayItem(@sfp,"Value","InsertYourMIDValueHere")
SetObjectProperty(@rr,"Filter",@sfp)
SET @results = InvokeRetrieve(@rr)
FOR @i = 1 TO RowCount(@results) DO
SET @row = Row(@results,@i)
SET @id = Field(@row,"ID")
SET @name = Field(@row,"Name")
SET @date = NOW()
SET @ud = UpsertData("Query Mapping",1,"ChannelMemberName",@name,"ChannelMemberID",@id,"Date",@date)
NEXT @i
ENDIF
]%%%%=RowCount(@results)=%%
```

Add the string &p=1 to the end of your microsite or landing page when running this AMPscript to prevent processing by search bots and other similar mechanisms. To allow this processing, leave the string off of the URL and remove the IF and ENDIF statements from this example.
