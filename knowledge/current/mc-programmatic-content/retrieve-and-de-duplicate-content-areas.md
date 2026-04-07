---
title: "Retrieve and De-Duplicate Content Areas"
domain: mc-programmatic-content
topic: retrieve-and-de-duplicate-content-areas
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:28.351Z
estimatedTokens: 1046
keywords: [Retrieve, De-Duplicate, Content, Areas, sample, server-side, JavaScript, demonstrates, how, IDs, several, keyword, script, de-duplicates, any]
---

# Retrieve and De-Duplicate Content Areas

> The sample server-side JavaScript demonstrates how to retrieve the IDs of several content areas by keyword. The script then de-duplicates any repeating occurrences of a content area ID and uses those IDs to retrieve the content area itself. The results include a single instance of every content area

# Retrieve and De-Duplicate Content Areas

The sample server-side JavaScript demonstrates how to retrieve the IDs of several content areas by keyword. The script then de-duplicates any repeating occurrences of a content area ID and uses those IDs to retrieve the content area itself. The results include a single instance of every content area referenced by specific keywords.

```
<script runat=server language="JavaScript">
Platform.Load("core","1");

  Array.prototype.unique =
  function() {
    var a = [];
    var l = this.length;
    for(var i=0; i<l; i++) {
      for(var j=i+1; j<l; j++) {
        // If this[i] is found later in the array
        if (this[i] === this[j])
          j = ++i;
      }
      a.push(this[i]);
    }
    return a;
  };

    var storyDE, storyData, ca, c;
    var content = new Array();
    var uniqueContent = new Array();

    if (Attribute.GetValue('CAT_1')!= '') {
        storyDE = DataExtension.Init("CONTENT");
        storyData = storyDE.Rows.Lookup(["keyword"], ["FIRST_KEYWORD"]);
        if(storyData.length > 0){
            for ( c = 0 ; c < storyData.length ; c++ ) {
                ca = storyData[c].content_area_id;
                content.push(ca);
        }
        }
    }

    storyDE = "";
    storyDate = "";
    ca = "";

    if (Attribute.GetValue('CAT_2')!= '') {
        storyDE = DataExtension.Init("CONTENT_TAGGING");
        storyData = storyDE.Rows.Lookup(["keyword"], ["SECOND_KEYWORD"]);
        if(storyData.length > 0){
            for ( c = 0 ; c < storyData.length ; c++ ) {
                ca = storyData[c].content_area_id;
                content.push(ca);
    }
        }
   }

   storyDE = "";
   storyDate = "";
   ca = "";

   if (Attribute.GetValue('CAT_3')!= '') {
       storyDE = DataExtension.Init("CONTENT");
       storyData = storyDE.Rows.Lookup(["keyword"], ["THIRD_KEYWORD"]);
       if(storyData.length > 0){
           for ( c = 0 ; c < storyData.length ; c++ ) {
               ca = storyData[c].content_area_id;
               content.push(ca);
          }
       }
  }

  storyDE = "";
  storyDate = "";
  ca = "";

  if (Attribute.GetValue('CAT_4')!= '') {
        storyDE = DataExtension.Init("CONTENT");
        storyData = storyDE.Rows.Lookup(["keyword"], ["FOURTH_KEYWORD"]);
        if(storyData.length > 0){
            for ( c = 0 ; c <  storyData.length ; c++ ) {
                ca = storyData[c].content_area_id;
                content.push(ca);
            }
        }
    }

    storyDE = "";
    storyDate = "";
    ca = "";

    if (Attribute.GetValue('CAT_5')!= '') {
        storyDE = DataExtension.Init("CONTENT");
        storyData = storyDE.Rows.Lookup(["keyword"], ["FIFTH_KEYWORD"]);
            if(storyData.length > 0){
                for ( c = 0 ; c <  storyData.length ; c++ ) {
                    ca = storyData[c].content_area_id;
                    content.push(ca);
                }
            }
    }

    storyDE = "";
    storyDate = "";
    ca = "";

    if (Attribute.GetValue('CAT_6')!= '') {
        storyDE = DataExtension.Init("CONTENT");
        storyData = storyDE.Rows.Lookup(["keyword"], ["SIXTH_KEYWORD"]);
            if(storyData.length > 0){
                for ( c = 0 ; c <  storyData.length ; c++ ) {
                    ca = storyData[c].content_area_id;
                    content.push(ca);
                }
            }
    }

    storyDE = "";
    storyDate = "";
    ca = "";

    if (Attribute.GetValue('CAT_7')!= '') {
        storyDE = DataExtension.Init("CONTENT");
        storyData = storyDE.Rows.Lookup(["keyword"], ["SEVENTH_KEYWORD"]);
            if(storyData.length > 0){
                for ( c = 0 ; c <  storyData.length ; c++ ) {
                    ca = storyData[c].content_area_id;
                    content.push(ca);
                }
            }
    }

    storyDE = "";
    storyDate = "";
    ca = "";

    uniqueContent = content.unique();

    for ( var t = 0; t < uniqueContent.length; t++ ) {
        Platform.Response.Write("<div style="border: 1px solid black;">");
        Platform.Response.Write(ContentArea(uniqueContent[t]));
        Platform.Response.Write("</div>");
    }
</script>
```
