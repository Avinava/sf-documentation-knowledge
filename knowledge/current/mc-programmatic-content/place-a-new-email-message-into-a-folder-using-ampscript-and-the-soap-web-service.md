---
title: "Place a New Email Message Into a Folder using AMPscript and the SOAP Web Service API"
domain: mc-programmatic-content
topic: place-a-new-email-message-into-a-folder-using-ampscript-and-the-soap-web-service
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:22.684Z
estimatedTokens: 2464
keywords: [Place, New, Email, Message, Folder, AMPscript, SOAP, Web, Service, API, locates, want, storage, places, organize, messages, different, folders, Once, assign, user, permissions, allow, How, Sample]
---

> This AMPscript locates the folder you want to use for email storage and places the new email message in that folder. Use this information to organize your email messages in different folders. Once you organize those messages, assign user permissions to those folders to allow access to only those use

# Place a New Email Message Into a Folder using AMPscript and the SOAP Web Service API

This AMPscript locates the folder you want to use for email storage and places the new email message in that folder. Use this information to organize your email messages in different folders. Once you organize those messages, assign user permissions to those folders to allow access to only those users who need to use those messages.

## How to Place a New Email Message Into a Folder using AMPscript and the Web Service API

Use this sample AMPscript as a model for your own AMPscript:

### Sample AMPscript

```
%%[ if not empty(RequestParameter("nID")) then
    Set @newsID = RequestParameter("nID")
    Set @parent = Concat(@newsID,"_Parent")
    Set @customerKey = Replace(@newsID,"_","")
    Set @newsIDName = Replace(@newsID,"_"," ")
    Set @parentCreated = 0
    Set @parentFolderCustomerKey = Concat(@customerKey,"_Parent")
    Set @parentFolderName = Replace(Concat(@newsIDName,"_Parent"),"_"," ")

    /* Retrieve NewsletterID Folder */
    Set @ret1 = CreateObject("RetrieveRequest")
    SetObjectProperty(@ret1,"ObjectType","DataFolder")
    AddObjectArrayItem(@ret1,"Properties","ID")
    AddObjectArrayItem(@ret1,"Properties","Name")
    AddObjectArrayItem(@ret1,"Properties","ContentType")
    AddObjectArrayItem(@ret1,"Properties","ObjectID")
    AddObjectArrayItem(@ret1,"Properties","CustomerKey")
    Set @filter = CreateObject("SimpleFilterPart")
    SetObjectProperty(@filter,"Property","CustomerKey")
    SetObjectProperty(@filter,"SimpleOperator","equals")
    AddObjectArrayItem(@filter,"Value",@customerKey)
    SetObjectProperty(@ret1,"Filter",@filter)

     /* Do the retrieve to see if newsletter id folder exists */
    Set @retReq1 = InvokeRetrieve(@ret1)

    /* Found the folder, so now set the variables */
    if RowCount(@retReq1) == 1 then
        Set @row1 = Row(@retReq1,1)
        Set @newsletterFolderID = Field(@row1,"ID")
        Set @folderIDs = Concat("||",@newsletterFolderID,",")
        Set @contentType = Field(@row1,"ContentType")
        Set @parentCreated = 1

        /* No NewsletterID Found, so now make one */
    else
        Set @ret2 = CreateObject("RetrieveRequest")
        SetObjectProperty(@ret2,"ObjectType","DataFolder")
        AddObjectArrayItem(@ret2,"Properties","ContentType")
        AddObjectArrayItem(@ret2,"Properties","ObjectID")
        AddObjectArrayItem(@ret2,"Properties","ID")
        AddObjectArrayItem(@ret2,"Properties","Name")
        Set @filter2 = CreateObject("SimpleFilterPart")
        SetObjectProperty(@filter2,"Property","Name")
        SetObjectProperty(@filter2,"SimpleOperator","equals")
        AddObjectArrayItem(@filter2,"Value","my contents")
        SetObjectProperty(@ret2,"Filter",@filter2)

        /* Do the retrieve to get the my contents root folder */
        Set @retReq2 = InvokeRetrieve(@ret2)

        /* We found one row for the root my contents folder */
            if RowCount(@retReq2) == 1 then
                Set @row2 = Row(@retReq2,1)
                Set @myContents = Field(@row2,"ID")
                Set @contentType = Field(@row2,"ContentType")
                Set @parentFolder = CreateObject("DataFolder")
                SetObjectProperty(@parentFolder,"ID",@myContents)
                Set @folderobject = CreateObject("DataFolder")
                SetObjectProperty(@folderobject,"ParentFolder",@parentFolder)
                SetObjectProperty(@folderobject,"CustomerKey",@customerKey)
                SetObjectProperty(@folderobject,"Name",@newsIDName)
                SetObjectProperty(@folderobject,"Description",@newsIDName)
                SetObjectProperty(@folderobject,"ContentType",@contentType)
                SetObjectProperty(@folderobject,"AllowChildren",1)
                SetObjectProperty(@folderobject,"IsEditable",1)
                Set @statusCode1 = InvokeCreate(@folderobject,@statusMsg,@errorCode)
                /* NewsletterID Parent Create Errored, so Try Update */
                if @statusCode1 == 'Error' then
                    Set @statusCode1 = InvokeUpdate(@folderobject,@statusMsg,@errorCode)
                /* NewsletterID Parent Create Is Good */
                else     /* Try to retrieve the newly created NewsletterID folder */
                    Set @ret3 = CreateObject("RetrieveRequest")
                    SetObjectProperty(@ret3,"ObjectType","DataFolder")
                    AddObjectArrayItem(@ret3,"Properties","CustomerKey")
                    AddObjectArrayItem(@ret3,"Properties","ID")
                    AddObjectArrayItem(@ret3,"Properties","Name")
                    AddObjectArrayItem(@ret3,"Properties","ContentType")
                    AddObjectArrayItem(@ret3,"Properties","ObjectID")
                    Set @filter3 = CreateObject("SimpleFilterPart")
                    SetObjectProperty(@filter3,"Property","CustomerKey")
                    SetObjectProperty(@filter3,"SimpleOperator","equals")
                    AddObjectArrayItem(@filter3,"Value",@customerKey)
                    SetObjectProperty(@ret3,"Filter",@filter3)
                    /* Do the retrieve to see if the NewsletterID folder exists */
                    Set @retReq3 = InvokeRetrieve(@ret3)
                /* We found a row for the newly create NewsletterID folder */
                        if RowCount(@retReq3) == 1 then
                            Set @row3 = Row(@retReq3,1)
                            Set @newsletterFolderID = Field(@row3,"ID")
                            Set @folderIDs = Concat("||",@newsletterFolderID,",")
                            Set @contentType = Field(@row3,"ContentType")
                            Set @parentCreated = 1
                        endif
                endif
            endif
    endif

    if @parentCreated == 1 AND not Empty(@newsletterFolderID) then
    /* Retrieve parent module folder */
        Set @ret4 = CreateObject("RetrieveRequest")
        SetObjectProperty(@ret4,"ObjectType","DataFolder")
        AddObjectArrayItem(@ret4,"Properties","ID")
        AddObjectArrayItem(@ret4,"Properties","Name")
        AddObjectArrayItem(@ret4,"Properties","ContentType")
        AddObjectArrayItem(@ret4,"Properties","ObjectID")
        AddObjectArrayItem(@ret4,"Properties","CustomerKey")
        Set @filter4 = CreateObject("SimpleFilterPart")
        SetObjectProperty(@filter4,"Property","CustomerKey")
        SetObjectProperty(@filter4,"SimpleOperator","equals")
        AddObjectArrayItem(@filter4,"Value",@parentFolderCustomerKey)
        SetObjectProperty(@ret4,"Filter",@filter4)
        /* Do the retrieve to see if newsletter id folder exists */
        Set @retReq4 = InvokeRetrieve(@ret4)
        /* Found a parent module folder for the parent module */
            if RowCount(@retReq4) == 1 then
                Set @row4 = Row(@retReq4,1)
                Set @moduleFolderID = Field(@row4,"ID")
                Set @folderIDs = Concat(@folderIDs,@moduleFolderID,"|||")
                Set @contentType = Field(@row4,"ContentType")
                /* No parent module folder lets make one */
            else
                Set @parentFolder = CreateObject("DataFolder")
                SetObjectProperty(@parentFolder,"ID",@newsletterFolderID)
                Set @folderobject = CreateObject("DataFolder")
                SetObjectProperty(@folderobject,"ParentFolder",@parentFolder)
                SetObjectProperty(@folderobject,"CustomerKey",@parentFolderCustomerKey)
                SetObjectProperty(@folderobject,"Name",@parentFolderName)
                SetObjectProperty(@folderobject,"Description",@parentFolderName)
                SetObjectProperty(@folderobject,"ContentType",@contentType)
                SetObjectProperty(@folderobject,"AllowChildren",1)
                SetObjectProperty(@folderobject,"IsEditable",1)
                Set @statusCode2 = InvokeCreate(@folderobject,@statusMsg,@errorCode)
                /* NewsletterID Parent Create Errored, so try update */
                    if @statusCode2 == 'Error' then
                        Set @statusCode1 = InvokeUpdate(@folderobject,@statusMsg,@errorCode)
                        /* NewsletterID Parent Create Is Good */
                    else      /* Retrieve parent module folder */
                        Set @ret5 = CreateObject("RetrieveRequest")
                        SetObjectProperty(@ret5,"ObjectType","DataFolder")
                        AddObjectArrayItem(@ret5,"Properties","ID")
                        AddObjectArrayItem(@ret5,"Properties","Name")
                        AddObjectArrayItem(@ret5,"Properties","ContentType")
                        AddObjectArrayItem(@ret5,"Properties","ObjectID")
                        AddObjectArrayItem(@ret5,"Properties","CustomerKey")
                        Set @filter5 = CreateObject("SimpleFilterPart")
                        SetObjectProperty(@filter5,"Property","CustomerKey")
                        SetObjectProperty(@filter5,"SimpleOperator","equals")
                        AddObjectArrayItem(@filter5,"Value",@parentFolderCustomerKey)
                        SetObjectProperty(@ret5,"Filter",@filter5)
                        /* Do the retrieve to see if newsletter id folder exists */
                        Set @retReq5 = InvokeRetrieve(@ret5)
                        /* We found a parent module folder for the parent module */
                            if RowCount(@retReq5) == 1 then
                                Set @row5 = Row(@retReq5,1)
                                Set @moduleFolderID = Field(@row5,"ID")
                                Set @folderIDs = Concat(@folderIDs,@moduleFolderID,"|||")
                            endif
                    endif
            endif
    endif ]%%
            %%= v(@folderIDs) =%%
%%[ endif ]%%
```

## Code Examples

```
%%[ if not empty(RequestParameter("nID")) then  
    Set @newsID = RequestParameter("nID")  
    Set @parent = Concat(@newsID,"_Parent")  
    Set @customerKey = Replace(@newsID,"_","")  
    Set @newsIDName = Replace(@newsID,"_"," ")   
    Set @parentCreated = 0  
    Set @parentFolderCustomerKey = Concat(@customerKey,"_Parent")  
    Set @parentFolderName = Replace(Concat(@newsIDName,"_Parent"),"_"," ")   

    /* Retrieve NewsletterID Folder */  
    Set @ret1 = CreateObject("RetrieveRequest")   
    SetObjectProperty(@ret1,"ObjectType","DataFolder")   
    AddObjectArrayItem(@ret1,"Properties","ID")   
    AddObjectArrayItem(@ret1,"Properties","Name")   
    AddObjectArrayItem(@ret1,"Properties","ContentType")   
    AddObjectArrayItem(@ret1,"Properties","ObjectID")   
    AddObjectArrayItem(@ret1,"Properties","CustomerKey")   
    Set @filter = CreateObject("SimpleFilterPart")   
    SetObjectProperty(@filter,"Property","CustomerKey")   
    SetObjectProperty(@filter,"SimpleOperator","equals")   
    AddObjectArrayItem(@filter,"Value",@customerKey)   
    SetObjectProperty(@ret1,"Filter",@filter)  

     /* Do the retrieve to see if newsletter id folder exists */  
    Set @retReq1 = InvokeRetrieve(@ret1)   

    /* Found the folder, so now set the variables */  
    if RowCount(@retReq1) == 1 then   
        Set @row1 = Row(@retReq1,1)   
        Set @newsletterFolderID = Field(@row1,"ID")   
        Set @folderIDs = Concat("||",@newsletterFolderID,",")   
        Set @contentType = Field(@row1,"ContentType")   
        Set @parentCreated = 1   

        /* No NewsletterID Found, so now make one */  
    else   
        Set @ret2 = CreateObject("RetrieveRequest")    
        SetObjectProperty(@ret2,"ObjectType","DataFolder")    
        AddObjectArrayItem(@ret2,"Properties","ContentType")    
        AddObjectArrayItem(@ret2,"Properties","ObjectID")    
        AddObjectArrayItem(@ret2,"Properties","ID")    
        AddObjectArrayItem(@ret2,"Properties","Name")    
        Set @filter2 = CreateObject("SimpleFilterPart")    
        SetObjectProperty(@filter2,"Property","Name")    
        SetObjectProperty(@filter2,"SimpleOperator","equals")    
        AddObjectArrayItem(@filter2,"Value","my contents")    
        SetObjectProperty(@ret2,"Filter",@filter2)    

        /* Do the retrieve to get the my contents root folder */          
        Set @retReq2 = InvokeRetrieve(@ret2)   

        /* We found one row for the root my contents folder */   
            if RowCount(@retReq2) == 1 then    
                Set @row2 = Row(@retReq2,1)    
                Set @myContents = Field(@row2,"ID")    
                Set @contentType = Field(@row2,"ContentType")      
                Set @parentFolder = CreateObject("DataFolder")     
                SetObjectProperty(@parentFolder,"ID",@myContents)     
                Set @folderobject = CreateObject("DataFolder")     
                SetObjectProperty(@folderobject,"ParentFolder",@parentFolder)     
                SetObjectProperty(@folderobject,"CustomerKey",@customerKey)     
                SetObjectProperty(@folderobject,"Name",@newsIDName)     
                SetObjectProperty(@folderobject,"Description",@newsIDName)     
                SetObjectProperty(@folderobject,"ContentType",@contentType)     
                SetObjectProperty(@folderobject,"AllowChildren",1)     
                SetObjectProperty(@folderobject,"IsEditable",1)     
                Set @statusCode1 = InvokeCreate(@folderobject,@statusMsg,@errorCode)    
                /* NewsletterID Parent Create Errored, so Try Update */    
                if @statusCode1 == 'Error' then     
                    Set @statusCode1 = InvokeUpdate(@folderobject,@statusMsg,@errorCode)   
                /* NewsletterID Parent Create Is Good */    
                else     /* Try to retrieve the newly created NewsletterID folder */     
                    Set @ret3 = CreateObject("RetrieveRequest")      
                    SetObjectProperty(@ret3,"ObjectType","DataFolder")      
                    AddObjectArrayItem(@ret3,"Properties","CustomerKey")     
                    AddObjectArrayItem(@ret3,"Properties","ID")      
                    AddObjectArrayItem(@ret3,"Properties","Name")      
                    AddObjectArrayItem(@ret3,"Properties","ContentType")      
                    AddObjectArrayItem(@ret3,"Properties","ObjectID")      
                    Set @filter3 = CreateObject("SimpleFilterPart")      
                    SetObjectProperty(@filter3,"Property","CustomerKey")      
                    SetObjectProperty(@filter3,"SimpleOperator","equals")      
                    AddObjectArrayItem(@filter3,"Value",@customerKey)      
                    SetObjectProperty(@ret3,"Filter",@filter3)      
                    /* Do the retrieve to see if the NewsletterID folder exists */     
                    Set @retReq3 = InvokeRetrieve(@ret3)      
                /* We found a row for the newly create NewsletterID folder */     
                        if RowCount(@retReq3) == 1 then      
                            Set @row3 = Row(@retReq3,1)     
                            Set @newsletterFolderID = Field(@row3,"ID")      
                            Set @folderIDs = Concat("||",@newsletterFolderID,",")      
                            Set @contentType = Field(@row3,"ContentType")      
                            Set @parentCreated = 1     
                        endif    
                endif   
            endif  
    endif 

    if @parentCreated == 1 AND not Empty(@newsletterFolderID) then   
    /* Retrieve parent module folder */   
        Set @ret4 = CreateObject("RetrieveRequest")    
        SetObjectProperty(@ret4,"ObjectType","DataFolder")    
        AddObjectArrayItem(@ret4,"Properties","ID")    
        AddObjectArrayItem(@ret4,"Properties","Name")    
        AddObjectArrayItem(@ret4,"Properties","ContentType")    
        AddObjectArrayItem(@ret4,"Properties","ObjectID")    
        AddObjectArrayItem(@ret4,"Properties","CustomerKey")       
        Set @filter4 = CreateObject("SimpleFilterPart")    
        SetObjectProperty(@filter4,"Property","CustomerKey")    
        SetObjectProperty(@filter4,"SimpleOperator","equals")    
        AddObjectArrayItem(@filter4,"Value",@parentFolderCustomerKey)    
        SetObjectProperty(@ret4,"Filter",@filter4)    
        /* Do the retrieve to see if newsletter id folder exists */   
        Set @retReq4 = InvokeRetrieve(@ret4)      
        /* Found a parent module folder for the parent module */   
            if RowCount(@retReq4) == 1 then   
                Set @row4 = Row(@retReq4,1)   
                Set @moduleFolderID = Field(@row4,"ID")    
                Set @folderIDs = Concat(@folderIDs,@moduleFolderID,"|||")    
                Set @contentType = Field(@row4,"ContentType")  
                /* No parent module folder lets make one */   
            else    
                Set @parentFolder = CreateObject("DataFolder")     
                SetObjectProperty(@parentFolder,"ID",@newsletterFolderID)     
                Set @folderobject = CreateObject("DataFolder")     
                SetObjectProperty(@folderobject,"ParentFolder",@parentFolder)     
                SetObjectProperty(@folderobject,"CustomerKey",@parentFolderCustomerKey)     
                SetObjectProperty(@folderobject,"Name",@parentFolderName)     
                SetObjectProperty(@folderobject,"Description",@parentFolderName)     
                SetObjectProperty(@folderobject,"ContentType",@contentType)     
                SetObjectProperty(@folderobject,"AllowChildren",1)     
                SetObjectProperty(@folderobject,"IsEditable",1)     
                Set @statusCode2 = InvokeCreate(@folderobject,@statusMsg,@errorCode)    
                /* NewsletterID Parent Create Errored, so try update */    
                    if @statusCode2 == 'Error' then     
                        Set @statusCode1 = InvokeUpdate(@folderobject,@statusMsg,@errorCode)    
                        /* NewsletterID Parent Create Is Good */    
                    else      /* Retrieve parent module folder */    
                        Set @ret5 = CreateObject("RetrieveRequest")      
                        SetObjectProperty(@ret5,"ObjectType","DataFolder")      
                        AddObjectArrayItem(@ret5,"Properties","ID")      
                        AddObjectArrayItem(@ret5,"Properties","Name")      
                        AddObjectArrayItem(@ret5,"Properties","ContentType")      
                        AddObjectArrayItem(@ret5,"Properties","ObjectID")      
                        AddObjectArrayItem(@ret5,"Properties","CustomerKey")      
                        Set @filter5 = CreateObject("SimpleFilterPart")      
                        SetObjectProperty(@filter5,"Property","CustomerKey")      
                        SetObjectProperty(@filter5,"SimpleOperator","equals")      
                        AddObjectArrayItem(@filter5,"Value",@parentFolderCustomerKey)      
                        SetObjectProperty(@ret5,"Filter",@filter5)     
                        /* Do the retrieve to see if newsletter id folder exists */     
                        Set @retReq5 = InvokeRetrieve(@ret5)     
                        /* We found a parent module folder for the parent module */     
                            if RowCount(@retReq5) == 1 then     
                                Set @row5 = Row(@retReq5,1)      
                                Set @moduleFolderID = Field(@row5,"ID")      
                                Set @folderIDs = Concat(@folderIDs,@moduleFolderID,"|||")     
                            endif    
                    endif   
            endif  
    endif ]%% 
            %%= v(@folderIDs) =%% 
%%[ endif ]%%
```
