/** for generating field object dynamically using the Log_form component*/
export default function Create_fields_object (field_name,placeholder,field_type,state_variable,setter_function){
    this.field_name = field_name;
    this.placeholder = placeholder;
    this.field_type = field_type;
    this.state_variable = state_variable;
    this.setter_function = setter_function
}