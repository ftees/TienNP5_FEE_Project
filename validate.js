

$(document).ready(function(){
  jQuery.validator.addMethod("name", function(value, element) {
    return this.optional(element) || /^[a-z ]{1,20}$/i.test(value);
  }, "Letters only please"); 
    $("#form1").validate({
        rules: {
          first:{
            required: true,
            name: true
          },
          last: {
            required: true,
            name: true
          },
          area:{
            required: true,
          },
          telephone: {
            
            maxlength: 11,
            number:true,
            name:false
          },
          email: {
            
             maxlength: 50,
             email:true,
             name:false
          },
          description:{
            maxlength: 200,
            name:false
          }
        },
        messages: {
            first:{
              required: "Cannot Empty",
              name: "First name must be characters and not contain number"
            } 
            ,
            last:{
              required: "Cannot Empty",
              name: "Last name must be characters and not contain number"
            } 
            ,
            telephone :{
                maxlength: "Must be in range 0-11",
                number: "Must be number"
            },
            email:{
               maxlength: "Must be in range",
               email: "Invalid Email"
            }
        }
        
    });  
});
