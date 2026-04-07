---
title: "Create a Custom Profile Center with AMPscript"
domain: mc-apis
topic: create-a-custom-profile-center-with-ampscript
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.103Z
estimatedTokens: 9970
keywords: [Profile, Center, AMPscript, creating, Email, Studio's, Web, Collect, entered, uses, Marketing, Cloud, account, triggers, send, taken, Why, SOAP, API, Possible, Case, How, Form, Administrative, Items]
---

> This page contains information about creating a custom Profile Center for Email Studio's Web Collect that takes information entered on a web page and uses it to update information in your Marketing Cloud account. This Profile Center also triggers a send using information taken from Marketing Cloud.

# Create a Custom Profile Center with AMPscript

This page contains information about creating a custom Profile Center for Email Studio's Web Collect that takes information entered on a web page and uses it to update information in your Marketing Cloud account. This Profile Center also triggers a send using information taken from Marketing Cloud.

## Web Collect Overview

Email Studio's Web Collect allows your customers to subscribe, provide attribute information, or unsubscribe using forms on your website.

If you allow new subscribers to sign up via your website, you must pass data for all required profile and preference attributes, including those that are defined as hidden, for each new subscriber.

## Profile Center Overview

The Email Studio Profile Center displays when a subscriber clicks the Modify Profile link in an email that you sent while using Email Studio.

To access your Profile Center, navigate to the Subscribers | Profile Management section of Email Studio and choose Preview Profile Center. The Profile Center displays all attributes that are not defined as hidden in your account.

See [Email Studio Web Collect](https://help.salesforce.com/articleView?id=mc_es_email_studio_web_collect.htm).

## What Is a Custom Profile Center?

The custom profile center includes a workflow specifically designed and developed to take information submitted by a new or existing subscriber and update records accordingly. Because it is a custom solution, you can create it to perform specific actions depending on your needs and your workflow.

## Why Create a Custom Profile Center Using AMPscript and SOAP API?

Your custom profile center allows you to both manage information inside your Marketing Cloud account and use that information to conduct triggered sends as confirmation of more or changed information in a particular profile. The automation allows the user to keep their information up to date without involving more effort from your team. This profile center also allows you to review tracking information inside Marketing Cloud for analysis and appropriate action.

## Possible Use Case

Northern Trail Outfitters uses Marketing Cloud to manage information about their subscribers and conduct triggered sends regarding information changes to those subscribers. To help customers manage their information, Northern Trail Outfitters builds a custom profile center that takes information from a web form and either creates a new subscriber record in Marketing Cloud or updates an existing record. That change triggers a Marketing Cloud email that includes the appropriate dynamic form information for that record and sends it to the new or existing subscriber.

To set up the triggered sends:

1.  Download the files via the link on this page, or copy and paste the examples below.
2.  Edit the AMPscript to customize the variables for your server, configuration, and subscribers.
3.  Put these edited pages in the correct folder of your local web server (where your Web Collect page is running) that can access the server running Marketing Cloud and also access the SOAP API endpoint. Review the next sections for more details. For more help with your setup, contact your Marketing Cloud account representative.

## How to Create a Custom Profile Center Using AMPscript and SOAP API

Follow the steps below to create the custom profile center, which includes several different components:

-   A web form used to interact with new and existing subscribers
-   The API code necessary to make the calls to Marketing Cloud
-   An administrative page used to determine the information that shows in the profile center
-   The email message used to communicate profile changes to the subscriber
-   The triggered send definition used to send the email message

## How to Create the Web Form

Use the code below as a sample for your own web form. You can view the entirety of the page on the Marketing Cloud Help, and the sample code below demonstrates how the AMPscript interacts with the SOAP API to save the information entered in the profile center:

The sample code below creates the new subscriber object and updates the information as necessary.

```
%%[

  /* Get the Id of the account */
  Set @mid = [memberid]
  /* Get the key from the form */
  Set @subKey = [_subscriberkey]

  if Empty(@subKey) or  @subKey == "" then
   SET @subKey = "subkey@example.com"
  endif

  /* Create the subscriber's object */
  set @subscriber = CreateObject( "Subscriber" )
  SetObjectProperty( @subscriber, "EmailAddress", @subKey )
  SetObjectProperty( @subscriber, "SubscriberKey", @subKey )

  /* make sure the system is posting */
  SET @isUpdate = RequestParameter("personal")

  SET @save = "FALSE"
  if Not Empty(@isUpdate) then

   SET @save = "TRUE"
   /* get the attributes and checkBoxes */
   SET @checkBoxes = RequestParameter("checkBoxList")
   SET @attributes = RequestParameter("attributes")

   /* Create arrays from each of the lists */
   SET @checkArray = BuildRowSetFromString(@checkBoxes,"||")
   SET @attArray = BuildRowSetFromString(@attributes,"||")
   SET @attCount = RowCount(@attArray)
   SET @checkCount = RowCount(@checkArray)
   SET @display = ""
   SET @display2 = ""
   if @attCount > 0 then
    /* iterate all of the elements */
    FOR @i = 1 TO @attCount DO

     Set @attribute = Field(Row(@attArray, @i),1)

     Set @value = RequestParameter(@attribute)

     /* Create the Attribute */
     Set @att = CreateObject( "Attribute" )
     SetObjectProperty( @att, "Name", @attribute )
     SetObjectProperty( @att, "Value", @value )

     /* Set the attribute to the subscriber */
     AddObjectArrayItem( @subscriber, "Attributes", @att )

     /*
     Set @display = Concat(@display,@attribute, " = " , @value, " @@@ ")
     */
    NEXT @i
   endif

   /*
   Set @display = Concat(@display," ---CHECK --- ")
   */

   if @checkCount > 0 then
    /* iterate all of the elements */
    FOR @i = 1 TO @checkCount DO

     set @values = ""

     Set @attribute = Field(Row(@checkArray, @i),1)

     Set @internalCheckArray = BuildRowSetFromString(@attribute,":")

     if RowCount(@internalCheckArray) > 1 then
      SET @checkName = Field(Row(@internalCheckArray, 1),1)

      SET @checkNumber = Field(Row(@internalCheckArray, 2),1)

      FOR @j = @checkNumber DOWNTO 1 DO

       Set @singleCheckName = Concat(@checkName,@j)
       Set @value = RequestParameter(@singleCheckName)

       IF not Empty(@value) then

        if(Empty(@values))then
         set @values = @value
        else
         set @values = Concat(@values, ",", @value )
        endif

       endif

      NEXT @j

      /* Create the Attribute */
      Set @apiName = Replace(@checkName,"-"," ")
      Set @att = CreateObject( "Attribute" )
      SetObjectProperty( @att, "Name", @apiName )
      SetObjectProperty( @att, "Value", @values )
      /* Set the attribute to the subscriber */
      AddObjectArrayItem( @subscriber, "Attributes", @att )

      /*
      Set @display = Concat(@display,@apiName, " = " , @values, " @@@ ")
      */
     endif
    NEXT @i
   endif
  endif

  /* Did the user press the subscriptions submit button */
  if RequestParameter("subscription") == 1 then

   SET @save = "TRUE"
   /* request paramter from List A */
   Set @theListA = RequestParameter("ListsA")
   Set @array = BuildRowSetFromString(@theListA, '|')

   for @r = 1 to Rowcount(@array) do
    Set @configRow = Row(@array,@r)
    Set @configkey = Field(@configRow,1)

    Set @value = RequestParameter(@configkey)

    if Empty(@value) then

     set @subscription = CreateObject("SubscriberList")
     SetObjectProperty( @subscription, "ID", @configkey )
     SetObjectProperty( @subscription, "IDSpecified", "true" )
     SetObjectProperty( @subscription, "Status", "Unsubscribed" )
     SetObjectProperty( @subscription, "StatusSpecified", "true" )
     AddObjectArrayItem( @subscriber, "Lists", @subscription )
    else
     set @subscription = CreateObject("SubscriberList")
     SetObjectProperty( @subscription, "ID", @configkey )
     SetObjectProperty( @subscription, "IDSpecified", "true" )
     SetObjectProperty( @subscription, "Status", "Active" )
     SetObjectProperty( @subscription, "StatusSpecified", "true" )
     AddObjectArrayItem( @subscriber, "Lists", @subscription )
    endif

   next @r

   /* request paramter from List U */
   Set @theListU = RequestParameter("ListsU")
   Set @array = BuildRowSetFromString(@theListU, '|')

   for @r = 1 to Rowcount(@array) do
    Set @configRow = Row(@array,@r)
    Set @configkey = Field(@configRow,1)

    Set @value = RequestParameter(@configkey)

    if @value == "Active" then

     set @subscription = CreateObject("SubscriberList")
     SetObjectProperty( @subscription, "ID", @configkey )
     SetObjectProperty( @subscription, "IDSpecified", "true" )
     SetObjectProperty( @subscription, "Status", "Active" )
     SetObjectProperty( @subscription, "Action", "create" )
     AddObjectArrayItem( @subscriber, "Lists", @subscription )
    endif
   next @r
  endif

  /* Did the user press the Unsub Allbutton */
  if RequestParameter("subscriptionALL") == 1 then

   SET @save = "TRUE"
   if RequestParameter("UnsubAll") == "true" then
    SetObjectProperty( @subscriber, "Status", "Unsubscribed" )
   else
    SET @error = "True"
    set @message = "Please Select One of the Options"
    endif
  endif

  /* SET @display3 = "" */
  /* Did the user change their preferernces */
  if RequestParameter("preference") == 1 then

   SET @save = "TRUE"
   Set @ppr = RequestParameter("preferences")
   Set @array = BuildRowSetFromString(@ppr, '|')
   /* SET @display3 = Concat(@array,"@@@@@@@@@") */
   for @r = 1 to Rowcount(@array) do
    Set @configRow = Row(@array,@r)
    Set @configkey = Field(@configRow,1)

    Set @value = RequestParameter(@configkey)

     if @configKey == "EmailTypePreference" then

      if @value == "true" then
       SetObjectProperty( @subscriber, "EmailTypePreference", "HTML" )
      else
       SetObjectProperty( @subscriber, "EmailTypePreference", "TEXT" )
      endif

     else

      if @value == "true" then
       Set @value = "True"
      else
       Set @value = "False"
      endif

      set @pref = CreateObject( "Attribute" )
      SetObjectProperty( @pref, "Name", @configkey )
      SetObjectProperty( @pref, "Value", @value )
      AddObjectArrayItem( @subscriber, "Attributes", @pref )

     endIf

   next @r
  endif

  IF @save == "TRUE" then
   /* change the last modify date */
   SET @theTime = Format(Now(), "MM/dd/yyyy")
   set @LastModify = CreateObject( "Attribute" )
   SetObjectProperty( @LastModify, "Name", "Last Modify" )
   SetObjectProperty( @LastModify, "Value", @theTime )
   AddObjectArrayItem( @subscriber, "Attributes", @LastModify )

   /* Update the Subscriber If we have to */
   var @createOpts, @saveOpt

   /* Create the save option */
   set @saveOpt = CreateObject("SaveOption")
    SetObjectProperty( @saveOpt, "SaveAction", "UpdateAdd" )
    SetObjectProperty( @saveOpt, "PropertyName", "*" )

   /* Specify the Update option */
   set @createOpts = CreateObject("CreateOptions")
    AddObjectArrayItem( @createOpts, "SaveOptions", @saveOpt )

   /* Update the subscriber */
   set @createStatusCode = InvokeCreate( @subscriber, @createErrDesc, @createErrNo, @createOpts )

   /* If we failed to create the subscriber, output the information as the top level error */
   if @createStatusCode != "OK" then
    Redirect("http://%%microsite_base_url[default]3891541[/default]%%")
   else
    SET @TheWorks = 'true'
   endif
  endif

]%%
```

This section retrieves information from data extensions for display.

```
%%[
      /* get the values from the DE */
      Set @tableValues = LOOKUPORDEREDROWS("adminPageInfo",0,"Order asc", "SecretField", "1")

      /* get the count of the elements */
      Set @theRowCount = RowCount( @tableValues )

      /*
       Counters for the number of columns and number of elements in a group
      */
      Set @counter = 0
      Set @idCounter = 1

      /*
       List that contains the name of all the elements that we
       need to retrieve when the user tries to save
      */
      Set @AttributeList = ""
      Set @checkBoxList = ""
      Set @radioList = ""

      /* for all the variables */
      FOR @Variable = 1 TO @theRowCount DO

       /* get each of the rows */
       Set @table1 = Row( @tableValues, @Variable )

       /* get the previous parameters except the first one */
       if not @Variable == 1 then
        Set @table2 = Row( @tableValues, Subtract(@Variable,1) )
       endif

       /* get all the varaibles we need */
       Set @order = Field( @table1, "Order" )
       Set @name = Field( @table1, "Name" )
       Set @at = Field( @table1, "Attribute Value")
       Set @dt = Field( @table1, "Data Type" )
       Set @ev  = Field( @table1, "Element Value" )
       Set @group = Field( @table1, "Group" )
       Set @groupName = Field( @table1, "Group Name" )
       Set @limit = Field(@table1, "Limit")
       Set @column = Field(@table1, "Column")
       Set @required = Field(@table1,"Required")
       Set @readOnly = Field(@table1, "Read Only")
       Set @key = Field( @table1, "key" )

       /*
        make sure that the fields can be used as IDs (i.e. replace the white space with -)
       */
       set @cleanID = Replace(@name," ","-")
       set @cleanDt = Replace(@dt," ","-")
       Set @cleanGroup = Replace(@group," ","-")

       /* get the name of the previous varaible */
       if not empty(@table2) then
        Set @group2 = Field( @table2, "Group" )
        Set @dt2 = Field( @table2, "Data Type" )
        Set @name2 = Field( @table2, "Name" )
       endif

       /*
        If the Groups are different and the names are different.
        There is a similar check later on, but this one makes sure it
        happens before displaying the group headers
       */
       if @group != @group2 and @name != @name2 then

        /*
         If the type of the previous Group was the Drop Down
         we need to close the select tag
        */
        if @dt2 == "Drop Down" then
        ]%%
         </select> </div>
        %%[
        endif
       endif

       /*
        If the groups are different and there is a group name (i.e. NO Text related fields)
       */
       if @group != @group2  and NOT Empty(@groupName) then

        /*
         If there is no fields or the limit is not 0, we are going to create
         a dynamic call to a javascript function to make sure the limits are met.
        */
        if Not Empty(@limit) and @limit !=0 then

         Set @call = Concat(@cleanGroup,",", @limit)

         if not Empty(@tocall) then
          Set @tocall = Concat(@tocall,"|" , @call)
         else
          Set @tocall =  @call
         endif

        endif

        /*
         If the type is a drop-down or a Radio we need to save all the names
         in the list by just concatinating them with a comma
        */
        if @dt == "Radio" OR @dt == "Drop Down" then

         if @readOnly != true then
          Set @AttributeList = Concat(@AttributeList,"||",@name)
         endif
        /*
         If the type is a check box we need to concatenate them with a pipe
         So we can then append all the values and save them in ONE field
        */
        endif

        /*
         Set the counter to 0 and then the counter of the columns to the number
         Of colums that we need to display. When these two numbers are the same
         we need to diplay the elements in the next page
        */
        Set @counter = 0
        Set @columnNum = @column

        /*
         ID used to display an error when the user selects too many options,
         or a required field is not filled. The option is always in the
         page, but hidden. It is dynamic because we only need the
         group name and the rest is just appended
        */
        Set @theErrorID = Concat(@cleanGroup,"error")
        Set @requiredID = Concat(@cleanGroup,"required")

        /*
         Div that solved the problems related to the floating Divs
        */
        ]%%
         <div class="theClear"> </div>
        %%[

        /*
         If the previous element was not an input field or a drop-down menu,
         display a break before the group header
        */
        if @dt2 != "Input Field" and @dt2 != "Drop Down" then
        ]%%
         <br/>
        %%[
        endif

        ]%%
         <span class="group%%=v(@cleanDt)=%%">
        %%[
        /* If the element is required display the red * */
        if @required == true then
        Set @requiredFields = Concat(@requiredFields,"|",@cleanID)
        ]%%
         <span id="theRequiredGroup"> * </span>
        %%[
        else
        ]%%
         <span id="theRequired">&nbsp;&nbsp;</span>
        %%[
        endif
        /*
         Display the group header and the error code for too many selections
        */
        ]%%
         <b> %%=v(@groupName)=%% </b> <span id="%%=v(@theErrorID)=%%" class="theError"> Too many selections (MAX %%=v(@limit)=%%)</span>
        %%[

        /*
         If the element is required then set a hidden message that we can show when there is an error.
        */
        if @required == true then
        ]%%
         <span id="%%=v(@requiredID)=%%" class="theError"> This Field is required </span></span>
        %%[
        else
        ]%%
         </span>
        %%[
        endif

        /*
         If the element is not a drop-down, we need to create a space between the header and the field
        */
        if @dt != "Drop Down" then
        ]%%
         <br/>
        %%[
        endif

        if @dt == "CheckBox" then
        ]%%
         <input id="%%=v(@cleanID)=%%" type='checkbox' newId="%%=v(@cleanID)=%%"style="display:none;"/>

        %%[
        endif

       else
        Set @counter = Add(@counter, 1)
        Set @theTest = Concat(@theTest, " " , @ev)

       endif

       /*
        If the groups are different and the names are also different
        That means that we have change the element
       */
       if @group != @group2 and @name != @name2 then

        /* if the data type is a dropDown we need to open the drop
         Down Tag
        */
        if @dt == "Drop Down" then
        ]%%
         <div class="theDropdown">
         <select class="theSelect" id="%%=v(@cleanID)=%%" newId="%%=v(@cleanID)=%%" name="%%=v(@name)=%%" >
        %%[
        endif

        if @dt2 == "CheckBox" then

         /* Clean the name of the group to be used on and id */
         Set @thegroup2 = Replace(@group2," ","-")
         /* Get the counter and reduce it by one */
         Set @boxCounter = Subtract(@idCounter,1)
         /* if the Counter was one, then set it back to 1 */
         if @boxCounter == 0 then
          Set @boxCounter = 1
         endif
         /* Set the name and the counter into the list */
         Set @checkBoxList = Concat(@checkBoxList,@thegroup2,":",@boxCounter,"||")

        endif

        /*
         Reset the Group Id Counter when the group changes
        */

        Set @idCounter = 1

       endif

       /* make the disable value */
       if @readOnly == true then
        SET @disable = "disabled='true'"
       else
        SET @disable = ""
       endif
       /*
        If the data type is a checkbox we need to test if
        we have reached the number of columns. If so,
        we need to create a break to continue in the next row
       */

       if @dt == "CheckBox" then

        if @counter == @columnNum then
         ]%%
          </br>
         %%[
         Set @counter = 0
        endif

        /*
         Create a set of ids, so all the elements in the group have the same name
         but a different number at the end. This gets all the elements of
         a group just by knowing the type and the name
        */
        Set @theID = Concat(@group,@idCounter)
        Set @theID = Replace(@theID," ","-")
        Set @idCounter = add(@idCounter, 1)
        ]%%

         <div class="theColumn%%=v(@columnNum)=%%">
         <input id="%%=v(@theID)=%%" type='checkbox' name='%%=v(@theID)=%%' %%=v(@disable )=%% newId="%%=v(@at)=%%" value="%%=v(@at)=%%" class="theCheckbox"/>
         <span class="checkLabel"> %%=v(@at)=%% </span>
         </div>
        %%[

       /*
        If the input type is input field we display the name and then create the input.
        Also, we need to display the * before the name if required.
       */
       elseif @dt == "Input Field" then

        /* add the attribute to the list of elements to enter in the system */
        if @readOnly != true then
         Set @AttributeList = Concat(@AttributeList,"||",@name)
        endif

        Set @requiredID = Concat(@cleanID,"required")

        ]%%
         <div class="inputDiv">
        %%[
         /* If its required display the red * */
         if @required == true then
          Set @requiredFields = Concat(@requiredFields,"|",@cleanID)
         ]%%

          <span id="theRequired"> * </span>
         %%[
         else
         ]%%
          <span id="theRequired">&nbsp;&nbsp;</span>
         %%[
         endif

        ]%%
         <label class="theLabel">%%=v(@name)=%%: </label>
         <input type='text' id='%%=v(@cleanID)=%%' %%=v(@disable )=%% name='%%=v(@name)=%%' newId="%%=v(@cleanID)=%%" class="theInputField"/>
         <span id="%%=v(@requiredID)=%%" class="inputEror"> This Field is required </span></span>
         </div>
        %%[

       /*
        If it is a radio button data type, we just need to display the name and then the option
       */
       elseif @dt == "Radio" then

        ]%%
         <div class="inputRadio">
         <input type="radio" %%=v(@disable )=%% name='%%=v(@name)=%%' newId="%%=v(@cleanID)=%%" value="%%=v(@ev)=%%" class="theRadio"> %%=v(@at)=%%  <br/>
         </div>
        %%[

       /* If it is a text area just display the name and then the text area */
       elseif @dt == "Text Area" then

        /* add the attribute name to the List */
        if @readOnly != true then
         Set @AttributeList = Concat(@AttributeList,"||",@name)
        endif

        Set @requiredID = Concat(@cleanID,"required")

        ]%%
         <div class="theTextAreaDiv">
        %%[
        /* If its required display the red * */
        if @required == true then
         Set @requiredFields = Concat(@requiredFields,"|",@cleanID)
        ]%%

         <span id="theRequired"> * </span>
        %%[
        else
        ]%%
         <span id="theRequired">&nbsp;&nbsp;</span>
        %%[
        endif
        ]%%
          <label class="theLabel">%%=v(@name)=%% : </label> <span id="%%=v(@requiredID)=%%" class="inputEror"> This Field is required </span></span></br>
          <textarea rows="2"  %%=v(@disable )=%% cols="20" id='%%=v(@cleanID)=%%' newId="%%=v(@cleanID)=%%" name="%%=v(@name)=%%" value="%%=v(@ev)=%%" class="theTextArea"> </textarea> <br/>
         </div>
        %%[

       /*
        if it is a drop-down then we display only the option.
        The open and close tags are done elsewhere.
       */
       elseif @dt == "Drop Down" then

        ]%%
         <option %%=v(@disable )=%% value="%%=v(@at)=%%"> %%=v(@at)=%% </option>
        %%[

       endif

      NEXT @Variable

      /* Clean the name of the group to be used on an id */
      Set @thegroup2 = Replace(@group," ","-")

      IF IndexOf(@checkBoxList, @thegroup2 ) == 0 and @dt == "CheckBox" then

       /* Get the counter and reduce it by one */
       Set @boxCounter = Subtract(@idCounter,1)
       /* if the Counter was one, then set it back to 1 */
       if @boxCounter == 0 then
        Set @boxCounter = 1
       endif
       /* Set the name and the counter into the list */
       Set @checkBoxList = Concat(@checkBoxList,@thegroup2,":",@boxCounter,"||")
      endif

      SET @len = Length(@requiredFields)
      Set @requiredFields = Substring(@requiredFields,1,@len)

      SET @toCall = Concat(@toCall,"@@",@requiredFields)
      /* Set up the Call */
      Set @toCall = Concat("areLimitsInOrder('",@toCall,"');")
     ]%%
```

This section retrieves the list to be modified as part of the activity in the profile center.

```apex
%%[
        /* Find Out the status of the subscribers */
        SET @rr4 = CreateObject("RetrieveRequest")
        SetObjectProperty(@rr4,"ObjectType","ListSubscriber")
        AddObjectArrayItem(@rr4, "Properties", "Status")
        AddObjectArrayItem(@rr4, "Properties", "ListID")

        /* Make sure that the list is public */
        SET @sfp2 = CreateObject("SimpleFilterPart")
        SetObjectProperty(@sfp2,"Property","SubscriberKey")
        SetObjectProperty(@sfp2,"SimpleOperator","equals")
        AddObjectArrayItem(@sfp2,"Value",@subKey)
        /* set the filter to the request */
        SetObjectProperty(@rr4,"Filter",@sfp2)
        SET @listStatus = InvokeRetrieve(@rr4, @status)
        /* Create the Request for the list */
        SET @rr3 = CreateObject("RetrieveRequest")
        SetObjectProperty(@rr3,"ObjectType","List")
        AddObjectArrayItem(@rr3, "Properties", "ListName")
        AddObjectArrayItem(@rr3, "Properties", "Type")
        AddObjectArrayItem(@rr3, "Properties", "Description")
        AddObjectArrayItem(@rr3, "Properties", "ID")

        /* Make sure that the list is public */
        SET @sfp2 = CreateObject("SimpleFilterPart")
        SetObjectProperty(@sfp2,"Property","Type")
        SetObjectProperty(@sfp2,"SimpleOperator","equals")
        AddObjectArrayItem(@sfp2,"Value","public")

        /* Make sure that the list is not a publication list */
        SET @sfp3 = CreateObject("SimpleFilterPart")
        SetObjectProperty(@sfp3,"Property","ListClassification")
        SetObjectProperty(@sfp3,"SimpleOperator","equals")
        AddObjectArrayItem(@sfp3,"Value","ExactTargetList")

        /* set the complex filter */
        Set @cf1 = CreateObject("ComplexFilterPart")
        SetObjectProperty(@cf1,"LeftOperand",@sfp2)
        SetObjectProperty(@cf1,"RightOperand",@sfp3)
        SetObjectProperty(@cf1,"LogicalOperator","AND")
        /* set the filter to the request */
        SetObjectProperty(@rr3,"Filter",@cf1)
        SET @atts = InvokeRetrieve(@rr3, @status)

        /* String to store all the list ids */
        SET @ListsA = ""
        SET @ListsU = ""
        Set @lA = 1
        Set @lU = 1

        /* make sure that lists are present */
        IF RowCount(@atts) > 0 THEN

         /* For all of the present lists, take the following actions */
         FOR @c = 1 TO RowCount(@atts) DO

          /* get each of the rows */
          SET @lis = Row(@atts,@c)

          /* get the necesary variables */
          SET @lis_name = Field(@lis,'ListName')
          SET @lis_ID = Field(@lis,'ID')
          SET @lis_des = Field(@lis,'Description')

          Set @printed = false
          /* Find the status of the public list */
          IF RowCount(@listStatus) > 0 THEN

           /* for all the status of the list */
           FOR @d = 1 TO RowCount(@listStatus) DO

            SET @lisStat = Row(@listStatus,@d)
            SET @lisStat_id = Field(@lisStat,'ListID')
            SET @lis_status = Field(@lisStat,'Status')

            if @lisStat_id == @lis_ID and @lis_status == 'Active' then
            ]%%
             <input type='checkbox' name='%%=v(@lis_ID)=%%' value='Active' checked="checked" /> %%=v(@lis_name)=%% <br />
             <small> %%=v(@lis_des)=%% </small><br/><br/>
            %%[
             /* create the array of Active list ids */
             if @lA == 1 then
              SET @ListsA = @lis_ID
              SET @lA = 2
             else
              SET @ListsA = Concat(@ListsA, "|" , @lis_ID)
             endif

             Set @printed = true

            elseif @lisStat_id == @lis_ID and @lis_status == 'Unsubscribed' then
            ]%%
             <input type='checkbox' name='%%=v(@lis_ID)=%%' value='Active'/> %%=v(@lis_name)=%% <br />
             <small> %%=v(@lis_des)=%% </small><br/><br/>
            %%[
             /* create the array of Active list ids */
             if @lA == 1 then
              SET @ListsA = @lis_ID
              SET @lA = 2
             else
              SET @ListsA = Concat(@ListsA, "|" , @lis_ID)
             endif

             Set @printed = true

            endif

           NEXT @d
          ENDIF
          IF @printed == false then
           ]%%
            <input type='checkbox' name='%%=v(@lis_ID)=%%' value='Active'/> %%=v(@lis_name)=%% <br />
            <small> %%=v(@lis_des)=%% </small><br/>
           %%[

           /* create the array of Non Active list ids */
            if @lD== 1 then
             SET @ListsU = @lis_ID
             SET @lD = 2
            else
             SET @ListsU = Concat(@ListsU, "|" , @lis_ID)
            endif
          endif

         NEXT @c
        endif
        ]%%
```
```
%%[
        /* List that stores all the preferences */
        var @preferences
        SET @preferences = "EmailTypePreference"

        /* Get all the subscriber attributes */
        SET @rr2 = CreateObject("RetrieveRequest")
        SetObjectProperty(@rr2,"ObjectType","Subscriber")
        AddObjectArrayItem(@rr2, "Properties", "ID")
        AddObjectArrayItem(@rr2, "Properties", "EmailTypePreference")
        AddObjectArrayItem(@rr2, "Properties", "EmailAddress")
        AddObjectArrayItem(@rr2, "Properties", "SubscriberKey")
        AddObjectArrayItem(@rr2, "Properties", "Status")

        /* Create a filter be the subscriber Id */
        SET @sfp2 = CreateObject("SimpleFilterPart")
        SetObjectProperty(@sfp2,"Property","SubscriberKey")
        SetObjectProperty(@sfp2,"SimpleOperator","equals")
        AddObjectArrayItem(@sfp2,"Value",@subKey)
        /* invoke the Retrieve Call */
        SetObjectProperty(@rr2,"Filter",@sfp2)
        SET @atts = InvokeRetrieve(@rr2,@status)

        /* Make a list of the Preferences */
        IF RowCount(@atts) > 0 THEN

         SET @subAtts = Field(Row(@atts,1),"Attributes")
         SET @pereference = Field(Row(@atts,1),"EmailTypePreference")
         ]%%
          <input type="checkbox" name="EmailTypePreference" value="true" %%[ if @pereference == "HTML" then ]%% checked="true" %%[endif]%%> HTML Emails <br/>
          <small> When possible, send e-mail newsletters as HTML instead of plain text.</small>
         %%[
         Set @p = 1
         /* for all the attributes make sure if the values are true or False */
         FOR @c = 1 TO RowCount(@subAtts) DO
          SET @att = Row(@subAtts,@c)
          SET @att_name = Field(@att,'Name')
          SET @att_val = Field(@att,'Value')

          /* save the corresponding values to an array */
          IF @att_val == "true" or @att_val == "false" then

           SET @preferences = Concat(@att_name, "|" , @preferences)

           ]%%
            <input type="checkbox" name="%%=v(@att_name)=%%" value="true" %%[ IF @att_val == "true" then ]%% checked="true" %%[ ENDIF ]%%  /> %%=v(@att_name)=%% <br/>

           %%[
          ENDIF

         NEXT @c
        ENDIF

        ]%%
```

## How to Create the Administrative Page

Use the sample code as a model for your own administrative page. You can view the entirety of the sample page on the Marketing Cloud Help, and the code below demonstrates how to interact with AMPscript and the SOAP API.

```
%%[
   /* Initialize variables */
   Var @tableValues, @table1, @numberOfValues
   var @displayOrder, @valueOrder,@name, @attributeValue, @dataType, @elementValue, @defaultSelection, @defaultValue, @secret, @isDelete

   /*  form values */
   var @formSubmitted,@changeNumber
   set @formSubmitted = 0
   set @changeNumber = 0

   if not Empty(RequestParameter("save")) then
    set @formSubmitted = 1
   endif

   /* get the isDelete field */
    if not Empty(RequestParameter("isDelete")) then
     Set @isDelete = RequestParameter("isDelete")
    endif

   /* get if it is a change number */
    if not Empty(RequestParameter("number")) then
     Set @changeNumber = RequestParameter("number")
    endif

   /* get the secret key */
    if not Empty(RequestParameter("key")) then
     Set @secret = RequestParameter("key")
    endif

   /* If we came from a delete then */
   if @isDelete == 1 and not Empty(RequestParameter("key")) then
    DeleteData("adminPageInfo","key",@secret)
    Set @isDelete = 0
    set @formSubmitted = 0
   endif

   /* Submit from the edit page */
   if @formSubmitted == 1 then

    /* get the Order */
    if not Empty(RequestParameter("Order")) then
     Set @Order = RequestParameter("Order")
    endif
    /* get the valueOrder */
    if not Empty(RequestParameter("valueOrder")) then
     Set @valueOrder = RequestParameter("valueOrder")
    endif

    /* get the name */
    if not Empty(RequestParameter("name")) then
     Set @name = RequestParameter("name")
    endif

    /* get the group */
    if not Empty(RequestParameter("group")) then
     Set @group = RequestParameter("group")
    endif

    /* get the groupName */
    if not Empty(RequestParameter("groupName")) then
     Set @groupName = RequestParameter("groupName")
    endif

    /* get the attributeValue*/
    if not Empty(RequestParameter("attributeValue")) then
     Set @attributeValue = RequestParameter("attributeValue");
    endif

    /* get the dataType */
    if not Empty(RequestParameter("dataType")) then
     Set @dataType = RequestParameter("dataType")
    endif

    /* get the elementValue */
    if not Empty(RequestParameter("elementValue")) then
     Set @elementValue  = RequestParameter("elementValue")
    endif

    /* get the required */
    if not Empty(RequestParameter("isRequired")) then
     Set @req  = "True"
    else
     Set @req =  "False"
    endif

    /* get the read only */
    if not Empty(RequestParameter("isReadOnly")) then
     Set @rol  = "True"
    else
     Set @rol = "False"
    endif

    /* get the limit */
    if not Empty(RequestParameter("limit")) then
     Set @limit  = RequestParameter("limit")
    endif

    /* get the Column */
    if not Empty(RequestParameter("Column")) then
     Set @column  = RequestParameter("Column")
    endif

    if not Empty(@secret) then
     UpdateData("adminPageInfo", 1 ,"key",@secret, "Order", @Order, "Group",@group,"Group Name",@groupName,"Name",@name, "Attribute Value", @attributeValue  ,"Data Type", @dataType, "Element Value",@elementValue,"Required",@req,"Read Only", @rol, "Limit", @limit, "Column", @column )
    else
     /* get the last order */

     Set @lastObject = LookupRows("adminPageInfo","SecretField", "1")

     Set @lastCount = RowCount( @lastObject )

     Set @lastCount = add(@lastCount, 1)

     InsertData("adminPageInfo","Order", @lastCount, "Name",@name, "Group",@group,"Group Name",@groupName,"Attribute Value", @attributeValue  ,"Data Type", @dataType, "Element Value",@elementValue,"Required",@req,"Read Only", @rol, "key", GUID(), "Limit", @limit,"Column", @column )

    endif

     Redirect(RequestParameter('PAGEURL'))

    set @formSubmitted = 0
   endif

   /* Pull all the values for the DE */
   Set @tableValues = LOOKUPORDEREDROWS("adminPageInfo",0,"Order asc", "SecretField", "1")

   Set @theRowCount = RowCount( @tableValues )

   if Empty( @tableValues ) or @theRowCount == 0 then
    Set @numberOfValues =0
   else
    /* Get the count of rows in the data extension */
    Set @numberOfValues = @theRowCount
   endif

   /* if we need to change the number do it here */
   if @changeNumber == 1 then

    Var @start, @end, @key

    SET @start = RequestParameter("start")
    SET @end = RequestParameter("end")
    SET @key = RequestParameter("thekey")

    /* make sure that the variables needed to change the page are not null */
    if Empty(@start) or Empty(@end) or Empty(@key) then
     SET @a = 3
    else
     /* first change the new one */
     UpdateData("adminPageInfo", 1 ,"key",@key,"Order",@end)

     SET @condition = Subtract(@start , @end)

     /* test for start or end case */
     if @condition < 0 then

      Set @minusC = 1
      SET @theStart = add(@start,@minusC)
      SET @message = ""

       FOR @Variable = @theStart TO @end DO

       Set @table1 = Row( @tableValues, @Variable )

       Set @key =  Field( @table1, "key" )
       Set @order = Field( @table1, "Order" )
       Set @value = Subtract(@order, @minusC)
       Set @name = Field( @table1, "Name" )
       UpdateData("adminPageInfo", 1 ,"key",@key,"Order",@value)
      NEXT @Variable
     else

      Set @plusC = 1
      SET @theEnd = Subtract(@start, @plusC)
      SET @message = ""

      FOR @Variable = @end TO @theEnd DO

       Set @table1 = Row( @tableValues, @Variable )

       Set @key =  Field( @table1, "key" )
       Set @order = Field( @table1, "Order" )
       Set @value = Add(@order,@plusC)
       Set @name = Field( @table1, "Name" )
       UpdateData("adminPageInfo", 1 ,"key",@key,"Order",@value)
      NEXT @Variable

     endif

     Redirect(RequestParameter('PAGEURL'))

    endif

   endif

  ]%%

  %%[

   Set @thisTable = LookupRows("adminPageInfo","SecretField", "1")

   Set @theRowCount = RowCount( @tableValues )

   if Empty( @tableValues ) or @theRowCount == 0 then
    Set @numberOfValues =0
   else
    /* Get the count of rows in the data extension */
    Set @numberOfValues = @theRowCount
   endif

  ]%%

  <script type="text/javaScript">

   $j = jQuery.noConflict();

   $j.fn.dataTableExt.oSort['string-case-asc']  = function(x,y)
   {
    return ((x < y) ? -1 : ((x > y) ?  1 : 0));
   };
   $j.fn.dataTableExt.oSort['string-case-desc'] = function(x,y) {
    return ((x < y) ?  1 : ((x > y) ? -1 : 0));
   };
   $j(document).ready(function(){
    /* Build the DataTable with third column using our custom sort functions */
    $j('#theTable').dataTable( {

     "aaData":
     [

      %%[ FOR @Variable = 1 TO @numberOfValues DO
       Set @table1 = Row( @thisTable, @Variable )
       Set @order = Field( @table1, "Order" )
       Set @name = Field( @table1, "Name" )
       Set @at = Field( @table1, "Attribute Value")
       Set @dt = Field( @table1, "Data Type" )
       Set @ev  = Field( @table1, "Element Value" )
       Set @gp = Field( @table1, "Group" )
       Set @gpn = Field( @table1, "Group Name" )
       Set @req = Field(@table1, "Required")
       Set @rol = Field(@table1, "Read Only")
       Set @key = Field( @table1, "key" )
       Set @limit = Field(@table1, "Limit")
       Set @column = Field(@table1, "Column")

       /* make sure it does not break anything */

       Set @at = Replace(@at,"'","")
       Set @name = Replace(@name,"'","")
       Set @gp = Replace(@gp,"'","")
       Set @gpn = Replace(@gpn,"'","")
       Set @ev  = Replace(@ev,"'","")

       /* if other is null make it false */

       if Empty( @other ) then
        Set @other='false';
       endif ]%%

       ["%%=v(@order)=%%","%%=v(@gp)=%%", "<span onclick='call("%%=v(@order)=%%","%%=v(@name)=%%","%%=v(@at)=%%","%%=v(@dt)=%%","%%=v(@ev)=%%","%%=v(@req)=%%","%%=v(@rol)=%%","%%=v(@gp)=%%","%%=v(@gpn)=%%","%%=v(@key)=%%","%%=v(@limit)=%%","%%=v(@column)=%%"  )' > %%=v(@name)=%% </span>", "%%=v(@at)=%%", "%%=v(@dt)=%%","%%=v(@req)=%%","%%=v(@rol)=%%","%%=v(@key)=%%"],

       %%[ENDIF]%%
      %%[NEXT @Variable]%%
```

## Related Items

-   [Create an email message to notify subscribers of added or revised profile information.](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_email_via_the_web_service_api.htm)
-   [Use a triggered send definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_email_campaign_workflow.htm) to take the email message created in the last step and send it to subscribers after they complete an action in the profile center.

## Code Examples

```
%%[
   /* Initialize variables */  
   Var @tableValues, @table1, @numberOfValues
   var @displayOrder, @valueOrder,@name, @attributeValue, @dataType, @elementValue, @defaultSelection, @defaultValue, @secret, @isDelete

   /*  form values */
   var @formSubmitted,@changeNumber
   set @formSubmitted = 0
   set @changeNumber = 0

   if not Empty(RequestParameter("save")) then
    set @formSubmitted = 1
   endif

   /* get the isDelete field */
    if not Empty(RequestParameter("isDelete")) then
     Set @isDelete = RequestParameter("isDelete")
    endif

   /* get if it is a change number */
    if not Empty(RequestParameter("number")) then
     Set @changeNumber = RequestParameter("number")
    endif

   /* get the secret key */
    if not Empty(RequestParameter("key")) then
     Set @secret = RequestParameter("key")
    endif

   /* If we came from a delete then */
   if @isDelete == 1 and not Empty(RequestParameter("key")) then
    DeleteData("adminPageInfo","key",@secret)
    Set @isDelete = 0
    set @formSubmitted = 0
   endif

   /* Submit from the edit page */
   if @formSubmitted == 1 then  

    /* get the Order */
    if not Empty(RequestParameter("Order")) then
     Set @Order = RequestParameter("Order")
    endif
    /* get the valueOrder */
    if not Empty(RequestParameter("valueOrder")) then
     Set @valueOrder = RequestParameter("valueOrder")
    endif

    /* get the name */
    if not Empty(RequestParameter("name")) then
     Set @name = RequestParameter("name")
    endif

    /* get the group */
    if not Empty(RequestParameter("group")) then
     Set @group = RequestParameter("group")
    endif

    /* get the groupName */
    if not Empty(RequestParameter("groupName")) then
     Set @groupName = RequestParameter("groupName")
    endif

    /* get the attributeValue*/
    if not Empty(RequestParameter("attributeValue")) then
     Set @attributeValue = RequestParameter("attributeValue");
    endif

    /* get the dataType */
    if not Empty(RequestParameter("dataType")) then
     Set @dataType = RequestParameter("dataType")
    endif

    /* get the elementValue */
    if not Empty(RequestParameter("elementValue")) then
     Set @elementValue  = RequestParameter("elementValue")
    endif

    /* get the required */
    if not Empty(RequestParameter("isRequired")) then
     Set @req  = "True"
    else
     Set @req =  "False"
    endif

    /* get the read only */
    if not Empty(RequestParameter("isReadOnly")) then
     Set @rol  = "True"
    else
     Set @rol = "False"
    endif

    /* get the limit */
    if not Empty(RequestParameter("limit")) then
     Set @limit  = RequestParameter("limit")
    endif

    /* get the Column */
    if not Empty(RequestParameter("Column")) then
     Set @column  = RequestParameter("Column")
    endif

    if not Empty(@secret) then
     UpdateData("adminPageInfo", 1 ,"key",@secret, "Order", @Order, "Group",@group,"Group Name",@groupName,"Name",@name, "Attribute Value", @attributeValue  ,"Data Type", @dataType, "Element Value",@elementValue,"Required",@req,"Read Only", @rol, "Limit", @limit, "Column", @column )
    else
     /* get the last order */

     Set @lastObject = LookupRows("adminPageInfo","SecretField", "1")

     Set @lastCount = RowCount( @lastObject )

     Set @lastCount = add(@lastCount, 1)

     InsertData("adminPageInfo","Order", @lastCount, "Name",@name, "Group",@group,"Group Name",@groupName,"Attribute Value", @attributeValue  ,"Data Type", @dataType, "Element Value",@elementValue,"Required",@req,"Read Only", @rol, "key", GUID(), "Limit", @limit,"Column", @column )

    endif

     Redirect(RequestParameter('PAGEURL'))

    set @formSubmitted = 0
   endif


   /* Pull all the values for the DE */
   Set @tableValues = LOOKUPORDEREDROWS("adminPageInfo",0,"Order asc", "SecretField", "1")

   Set @theRowCount = RowCount( @tableValues )

   if Empty( @tableValues ) or @theRowCount == 0 then
    Set @numberOfValues =0
   else
    /* Get the count of rows in the data extension */
    Set @numberOfValues = @theRowCount
   endif

   /* if we need to change the number do it here */
   if @changeNumber == 1 then

    Var @start, @end, @key

    SET @start = RequestParameter("start")
    SET @end = RequestParameter("end")
    SET @key = RequestParameter("thekey")

    /* make sure that the variables needed to change the page are not null */
    if Empty(@start) or Empty(@end) or Empty(@key) then
     SET @a = 3
    else
     /* first change the new one */
     UpdateData("adminPageInfo", 1 ,"key",@key,"Order",@end)

     SET @condition = Subtract(@start , @end)

     /* test for start or end case */
     if @condition < 0 then

      Set @minusC = 1
      SET @theStart = add(@start,@minusC)
      SET @message = ""

       FOR @Variable = @theStart TO @end DO

       Set @table1 = Row( @tableValues, @Variable )

       Set @key =  Field( @table1, "key" )
       Set @order = Field( @table1, "Order" )
       Set @value = Subtract(@order, @minusC)
       Set @name = Field( @table1, "Name" )
       UpdateData("adminPageInfo", 1 ,"key",@key,"Order",@value)
      NEXT @Variable
     else

      Set @plusC = 1
      SET @theEnd = Subtract(@start, @plusC)
      SET @message = ""

      FOR @Variable = @end TO @theEnd DO

       Set @table1 = Row( @tableValues, @Variable )

       Set @key =  Field( @table1, "key" )
       Set @order = Field( @table1, "Order" )
       Set @value = Add(@order,@plusC)
       Set @name = Field( @table1, "Name" )
       UpdateData("adminPageInfo", 1 ,"key",@key,"Order",@value)
      NEXT @Variable


     endif

     Redirect(RequestParameter('PAGEURL'))

    endif

   endif


  ]%%

  %%[

   Set @thisTable = LookupRows("adminPageInfo","SecretField", "1")

   Set @theRowCount = RowCount( @tableValues )

   if Empty( @tableValues ) or @theRowCount == 0 then
    Set @numberOfValues =0
   else
    /* Get the count of rows in the data extension */
    Set @numberOfValues = @theRowCount
   endif

  ]%%

  <script type="text/javaScript">

   $j = jQuery.noConflict();

   $j.fn.dataTableExt.oSort['string-case-asc']  = function(x,y)
   {
    return ((x < y) ? -1 : ((x > y) ?  1 : 0));
   };
   $j.fn.dataTableExt.oSort['string-case-desc'] = function(x,y) {
    return ((x < y) ?  1 : ((x > y) ? -1 : 0));
   };
   $j(document).ready(function(){
    /* Build the DataTable with third column using our custom sort functions */
    $j('#theTable').dataTable( {

     "aaData":
     [

      %%[ FOR @Variable = 1 TO @numberOfValues DO
       Set @table1 = Row( @thisTable, @Variable )
       Set @order = Field( @table1, "Order" )
       Set @name = Field( @table1, "Name" )
       Set @at = Field( @table1, "Attribute Value")
       Set @dt = Field( @table1, "Data Type" )
       Set @ev  = Field( @table1, "Element Value" )
       Set @gp = Field( @table1, "Group" )
       Set @gpn = Field( @table1, "Group Name" )
       Set @req = Field(@table1, "Required")
       Set @rol = Field(@table1, "Read Only")
       Set @key = Field( @table1, "key" )
       Set @limit = Field(@table1, "Limit")
       Set @column = Field(@table1, "Column")

       /* make sure it does not break anything */


       Set @at = Replace(@at,"'","")
       Set @name = Replace(@name,"'","")
       Set @gp = Replace(@gp,"'","")
       Set @gpn = Replace(@gpn,"'","")
       Set @ev  = Replace(@ev,"'","")

       /* if other is null make it false */

       if Empty( @other ) then
        Set @other='false';
       endif ]%%

       ["%%=v(@order)=%%","%%=v(@gp)=%%", "<span onclick='call("%%=v(@order)=%%","%%=v(@name)=%%","%%=v(@at)=%%","%%=v(@dt)=%%","%%=v(@ev)=%%","%%=v(@req)=%%","%%=v(@rol)=%%","%%=v(@gp)=%%","%%=v(@gpn)=%%","%%=v(@key)=%%","%%=v(@limit)=%%","%%=v(@column)=%%"  )' > %%=v(@name)=%% </span>", "%%=v(@at)=%%", "%%=v(@dt)=%%","%%=v(@req)=%%","%%=v(@rol)=%%","%%=v(@key)=%%"],


       %%[ENDIF]%%
      %%[NEXT @Variable]%%
```

## Related Topics

- Create an email message to notify subscribers of added or revised profile information. (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_email_via_the_web_service_api.htm)
- Use a triggered send definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_email_campaign_workflow.htm)
