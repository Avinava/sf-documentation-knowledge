---
title: "Create a Subscriber Thank You Page"
domain: mc-programmatic-content
topic: create-a-subscriber-thank-you-page
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:27.528Z
estimatedTokens: 609
keywords: [Subscriber, Thank, Place, script, webpage, person, subscribes, mailing]
---

# Create a Subscriber Thank You Page

> Place this script in the webpage displayed when a person subscribes to your mailing list.

# Create a Subscriber Thank You Page

Place this script in the webpage displayed when a person subscribes to your mailing list.

```
<script runat="server">
    Platform.Load("Core","1");

    // Set the default List id to use if none passed
    var DefaultListID = 12345

    //hard-code the Source values
    var Source = "Opt-In Subscriber";

    // get all the submitted values from the front end and
    // verify first that we have an email passed as a parameter,
    //otherwise the form may have been called from some other means and will not function without parameters
    var email = Request.GetFormField("email");

    if (Stringify(email) != "null" && email != ''){
        var first_name = Request.GetFormField("first_name");
        var last_name = Request.GetFormField("last_name");
        var state = Request.GetFormField("Title_Position");
        var RegionState = Request.GetFormField("Region_State");
        var Address = Request.GetFormField("Title_Position2");
        var NameCompany = Request.GetFormField("NameCompany");
        var TypeCompany = Request.GetFormField("TypeCompany");
        var Phone = Request.GetFormField("Phone");
        var ML_Rep_name = Request.GetFormField("ML_Rep_name");
        var url = '';
        var ListID = Request.GetFormField("listid");

    if (ListID == undefined || ListID == "") {
        ListID = DefaultListID;
              }

    var lists = List.Retrieve({Property:"ID",SimpleOperator:"equals",Value:ListID});

    if (lists.length == 0) {
        lists = List.Retrieve({Property:"ID",SimpleOperator:"equals",Value:DefaultListID});
    }

    listKey = lists[0].CustomerKey;
    /*
    Write("ListID: " + Stringify(ListID) + "<br>");
    Write(Stringify(lists.length)  + "<br>")    Write(Stringify(lists)  + "<br>")    Write("listKey: " + Stringify(listKey)  + "<br>")
    */

    var myList = List.Init(listKey);

    var status = myList.Subscribers.Upsert(email,{"first name":first_name, "last name":last_name, state:state, "Region State":RegionState, "Contact Office Address":Address, "Company Name":NameCompany, "Company Type":TypeCompany, "Contact Telephone":Phone, Source:Source, "CSR Coverage":ML_Rep_name});

    if (status == "OK") {
    url = 'http://pages.message.baml.com/subscribe_success/';
    } else {
    url = 'http://pages.message.baml.com/subscribe_error/';
    }
    var response = HTTP.Get(url);
    Write(response.Content);
}
</script>
```
