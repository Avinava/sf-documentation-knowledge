---
title: "CrossFilter Constructors"
domain: apex-reference
topic: crossfilter-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.746Z
keywords: [CrossFilter, Constructors, Creates, instance, Reports.CrossFilter, class, specified, parameters., criteria, includesObject, primaryEntityField, relatedEntity, relatedEntityJoinField, Signature, Parameters]
---

# CrossFilter Constructors

> Creates an instance of the Reports.CrossFilter class using the specified parameters.

## CrossFilter Constructors

The following are constructors for CrossFilter.

-   **[CrossFilter(criteria, includesObject, primaryEntityField, relatedEntity, relatedEntityJoinField)](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_ctor)**  
    Creates an instance of the Reports.CrossFilter class using the specified parameters.
-   **[CrossFilter()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_ctor_2)**  
    Creates an instance of the Reports.CrossFilter class. You can then set values by using the class’s set methods.

### CrossFilter(criteria, includesObject, primaryEntityField, relatedEntity, relatedEntityJoinField)

Creates an instance of the Reports.CrossFilter class using the specified parameters.

#### Signature

public CrossFilter(List<Reports.ReportFilter> criteria, Boolean includesObject, String primaryEntityField, String relatedEntity, String relatedEntityJoinField)

#### Parameters

criteria

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_class_reports_reportfilter "Contains information about a report filter, including column, operator, and value.")\>

Information about how to filter the relatedEntity. Relates the primary entity with a subset of the relatedEntity.

includesObject

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether objects returned have a relationship with the relatedEntity (true) or not (false).

primaryEntityField

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the object on which the cross filter is evaluated.

relatedEntity

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the object that the primaryEntityField is evaluated against—the right-hand side of the cross filter.

relatedEntityJoinField

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the field used to join the primaryEntityField and relatedEntity.

### CrossFilter()

Creates an instance of the Reports.CrossFilter class. You can then set values by using the class’s set methods.

#### Signature

public CrossFilter()