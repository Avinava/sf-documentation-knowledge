---
title: "DescribeMscrmEntityAttributes"
domain: mc-programmatic-content
topic: describemscrmentityattributes
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.804Z
estimatedTokens: 364
keywords: [DescribeMscrmEntityAttributes, entity, Function, Ordinal, Dynamics, CRM, retrieve, attributes, **Overview**, **Syntax**, Usage]
---

# DescribeMscrmEntityAttributes

> DescribeMscrmEntityAttributes(entity)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    entity
    string
    Required
    Dynamics CRM entity from which to retrieve attributes

# DescribeMscrmEntityAttributes

## **Overview**

returns the logical name, display name, and type of the Dynamics CRM entity. The results include a comma-separated list of option and display values when the attribute contains a Boolean, status, picklist, or state value.

### **Syntax**

DescribeMscrmEntityAttributes(entity)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| entity | string | Required | Dynamics CRM entity from which to retrieve attributes |

### Usage

```
%%[

var @fields_rs

set @fields_rs = describemscrmentityattributes('lead')

]%%

<p> Here is a list of Fields in the Lead Entity </p>

%%[

var @field_name, @field_displayname, @counter, @field_type, @field_required, @field_options

for @counter = 1 to rowcount(@fields_rs) do

set @field_name = field(row(@fields_rs,@counter), 'Name')

set @field_displayname = field(row(@fields_rs,@counter), 'DisplayName')

set @field_type = field(row(@fields_rs,@counter), 'Type')

set @field_required = field(row(@fields_rs,@counter), 'Required')

set @field_options = field(row(@fields_rs,@counter), 'Options')

]%%

Field Name: &nbsp; &nbsp; %%=v(@field_name)=%% <br>

Field Display Name: &nbsp; &nbsp; %%=v(@field_displayname)=%% <br>

Field Type: &nbsp; &nbsp; %%=v(@field_type)=%% <br>

Field Required?: &nbsp; &nbsp; %%=v(@field_required)=%% <br>

Field Options: &nbsp; &nbsp; %%=v(@field_options)=%% <br> <br><br>

%%[ next @counter ]%%
```

Last Updated: Jun 8, 2021
