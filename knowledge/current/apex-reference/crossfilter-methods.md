---
title: "CrossFilter Methods"
domain: apex-reference
topic: crossfilter-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.746Z
keywords: [CrossFilter, Methods, Returns, information, how, filter, relatedEntity., Describes, subset, relatedEntity, which, primary, entity, evaluated, against., getCriteria, Signature, Return, Value, getIncludesObject]
---

# CrossFilter Methods

> Returns information about how to filter the relatedEntity. Describes the subset of the relatedEntity which the primary entity is evaluated
      against.

## CrossFilter Methods

The following are methods for CrossFilter.

-   **[getCriteria()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_getCriteria)**  
    Returns information about how to filter the relatedEntity. Describes the subset of the relatedEntity which the primary entity is evaluated against.
-   **[getIncludesObject()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_getIncludesObject)**  
    Returns true if primary object has a relationship with the relatedEntity, otherwise returns false.
-   **[getPrimaryEntityField()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_getPrimaryEntityField)**  
    Returns the name of the object on which the cross filter is evaluated.
-   **[getRelatedEntity()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_getRelatedEntity)**  
    Returns name of the object that the primaryEntityField is evaluated against—the right-hand side of the cross filter.
-   **[getRelatedEntityJoinField()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_getRelatedEntityJoinField)**  
    Returns the name of the field used to join the primaryEntityField and relatedEntity.
-   **[setCriteria(criteria)](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_setCriteria)**  
    Specifis how to filter the relatedEntity. Relates the primary entity with a subset of the relatedEntity.
-   **[setIncludesObject(includesObject)](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_setIncludesObject)**  
    Specifies whether objects returned have a relationship with the relatedEntity (true) or not (false).
-   **[setPrimaryEntityField(primaryEntityField)](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_setPrimaryEntityField)**  
    Specifies the name of the object on which the cross filter is evaluated.
-   **[setRelatedEntity(relatedEntity)](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_setRelatedEntity)**  
    Specifies the name of the object that the primaryEntityField is evaluated against—the right-hand side of the cross filter.
-   **[setRelatedEntityJoinField(relatedEntityJoinField)](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_setRelatedEntityJoinField)**  
    Specifies the name of the field used to join the primaryEntityField and relatedEntity.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_toString)**  
    Returns a string.

### getCriteria()

Returns information about how to filter the relatedEntity. Describes the subset of the relatedEntity which the primary entity is evaluated against.

#### Signature

public List<Reports.ReportFilter> getCriteria()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_class_reports_reportfilter "Contains information about a report filter, including column, operator, and value.")\>

### getIncludesObject()

Returns true if primary object has a relationship with the relatedEntity, otherwise returns false.

#### Signature

public Boolean getIncludesObject()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getPrimaryEntityField()

Returns the name of the object on which the cross filter is evaluated.

#### Signature

public String getPrimaryEntityField()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRelatedEntity()

Returns name of the object that the primaryEntityField is evaluated against—the right-hand side of the cross filter.

#### Signature

public String getRelatedEntity()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRelatedEntityJoinField()

Returns the name of the field used to join the primaryEntityField and relatedEntity.

#### Signature

public String getRelatedEntityJoinField()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setCriteria(criteria)

Specifis how to filter the relatedEntity. Relates the primary entity with a subset of the relatedEntity.

#### Signature

public void setCriteria(List<Reports.ReportFilter> criteria)

#### Parameters

criteria

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_class_reports_reportfilter "Contains information about a report filter, including column, operator, and value.")\>

#### Return Value

Type: void

### setIncludesObject(includesObject)

Specifies whether objects returned have a relationship with the relatedEntity (true) or not (false).

#### Signature

public void setIncludesObject(Boolean includesObject)

#### Parameters

includesObject

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: void

### setPrimaryEntityField(primaryEntityField)

Specifies the name of the object on which the cross filter is evaluated.

#### Signature

public void setPrimaryEntityField(String primaryEntityField)

#### Parameters

primaryEntityField

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setRelatedEntity(relatedEntity)

Specifies the name of the object that the primaryEntityField is evaluated against—the right-hand side of the cross filter.

#### Signature

public void setRelatedEntity(String relatedEntity)

#### Parameters

relatedEntity

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setRelatedEntityJoinField(relatedEntityJoinField)

Specifies the name of the field used to join the primaryEntityField and relatedEntity.

#### Signature

public void setRelatedEntityJoinField(String relatedEntityJoinField)

#### Parameters

relatedEntityJoinField

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### toString()

Returns a string.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")