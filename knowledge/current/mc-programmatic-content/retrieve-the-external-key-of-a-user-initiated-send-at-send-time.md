---
title: "Retrieve the External Key of a User-Initiated Send at Send Time"
domain: mc-programmatic-content
topic: retrieve-the-external-key-of-a-user-initiated-send-at-send-time
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:23.792Z
estimatedTokens: 952
keywords: [Retrieve, External, Key, User-Initiated, Send, Time, sample, code, include, attribute, URL, subscriber]
---

> Use this sample code to retrieve the external key of a user-initiated send at send time. For example, you can use this information to include the attribute as a parameter in a URL for use by the subscriber.

# Retrieve the External Key of a User-Initiated Send at Send Time

Use this sample code to retrieve the external key of a user-initiated send at send time. For example, you can use this information to include the attribute as a parameter in a URL for use by the subscriber.

```
Platform.Load("Core","1");

     var rowcolor = "#FFFFFF";

     var esd = Send.Definition.Init('myESD');
        esd = Send.Definition.Retrieve();

     for (var i = 0; i < esd.length; i++)
     {
          var sdlName = esd[i].Name;
          var sdlKey = esd[i].CustomerKey;
          var eID = esd[i].Email.ID;
          var sdlObj = esd[i].SendDefinitionList;
          var eName = getemailname(eID);

          Write("<tr style='background-color: " + rowcolor + "'>");
          Write("<td>" + (i + 1) + "</td>");
          Write("<td>" + sdlName + "</td>");
          Write("<td>" + eName + "</td>");

          for (var j = 0; j < sdlObj.length; j++)
              {

                   var sdlListType= sdlObj[j].SendDefinitionListType;
                   var sdlDstType= sdlObj[j].DataSourceTypeID;

                   if (sdlDstType == "CustomObject") {
                        var deName = getdename(sdlObj[j].CustomObjectID);
                   }
                   else if (sdlDstType == "FilterDefinition") {
                        var deName = getfiltername(sdlKey);
                   }
                   else {
                        //Write(Stringify(sdlObj[j]));
                        var deName = getlistname(sdlObj[j].List.ID);
                   }

                   if (j >= 1) {

                   Write("<tr style='background-color: " + rowcolor + "'>");
                   Write("<td>&nbsp;</td>");
                   Write("<td>" + sdlName + "</td>");
                   Write("<td>" + eName + "</td>");
                   Write("<td>" + sdlListType + "</td>");
                   Write("<td>" + sdlDstType + "</td>");
                   Write("<td>" + deName + "</td>");
                   Write("</tr>");

                   }

                   else {

                   Write("<td>" + sdlListType + "</td>");
                   Write("<td>" + sdlDstType + "</td>");
                   Write("<td>" + deName + "</td>");
                   Write("</tr>");

                   }

                   if (rowcolor == "#FFFFFF") {
                       rowcolor = "#CCFFFF"
                   }
                   else
                   {
                       rowcolor = "#FFFFFF"
                   }
              }

     }

       function getemailname(pEID)
       {
          var myEmail = Email.Init("myEmail");
          myEmail =  Email.Retrieve({Property:"ID",SimpleOperator:"equals",Value:pEID});

          for (var i = 0; i < myEmail.length; i++)
          {
              return (myEmail[i].Name);
          }

     }

     function getfiltername(pKEY)
       {
          var myFilter = FilterDefinition.Init("myFilter");
          myFilter =  FilterDefinition.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:pKEY});

          for (var i = 0; i < myFilter.length; i++)
          {
              return (myFilter[i].Name);
          }

     }

     function getdename(pID)
       {
          var myDE = DataExtension.Init("myDE");
          myDE =  DataExtension.Retrieve({Property:"ObjectID",SimpleOperator:"equals",Value:pID});

          for (var i = 0; i < myDE.length; i++)
          {
              return (myDE[i].Name);
          }

     }

     function getlistname(pID)
       {
          var myList = List.Init("myList");
          myList =  List.Retrieve({Property:"ID",SimpleOperator:"equals",Value:pID});

          for (var i = 0; i < myList.length; i++)
          {
              return (myList[i].ListName);
          }

     }

</script>
```
