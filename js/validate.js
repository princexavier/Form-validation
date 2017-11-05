 $(".yes").show();
  $(".no").hide();
		
$(function(){
 $('input[type="checkbox"]').click(function(){
 	$(".yes").hide();
 	$(".no").hide();
            if($(this).is(":checked")){
               $(".yes").show();

            }
            else if($(this).is(":not(:checked)")){
               $(".no").show();
            }
        });
$("#button").click(function(){
 var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
var pattern=/([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
 var email = $("#email").val();
 var phone = $("#phone").val();
 var name = $("#name").val();
 var lname = $("#lname").val();
 var address = $("#address").val();
 var age = $("#age").val();
 var gender= $("#gender").val();
 var radiobutton=$(".radiobutton").val();
  
  if(name == ""){
   $("#name").focus()
    $("#fname ").css("color","red");
   $("#fname ").text("Name is required");
   
  }
  else{
  	$("#fname").hide();
  }

  if(lname == "" ){
    $("#lname").focus()
    $("#lastname").css("color", "red");
    $("#lastname").text("LastName is required");

  }
  else{
  	$("#lastname").hide();
  }

  if(!emailRegex.test(email)){
    $("#email").focus()
     $("#email1").css("color","red");
    $("#email1").text("email is required");
   
  }

  else{
  	$("#email1").hide();
  }

if(!pattern.test(phone)){

$("#phone").focus()
$("#phone1").css("color","red");
$("#phone1").text("Number is required");

}
else{
  	$("#phone1").hide();
  }

  if(address == ''){
    $("#address").focus()
     $("#address1").css("color","red");
     $("#address1").text("address is required");
   
  }
  else{
  	$("#address1").hide();
  }
  if($("#age").val()==""){
	 $("#age1").css("color","red");
     $("#age1").text("age is required");


  }
  else
     {
     	$("#age1").hide();
     }
  if(gender== ""){
     $("#gender1").css("color","red");
    $("#gender1").text("gender is required");
    
  }
  else{
  	$("#gender1").hide();
  }
  var radioValue = $("input[name='radiobutton']:checked").val();
  if(radioValue=='')
  {
  	return false;
  }
  else{


  if((name != '') && (lname != '' )&& (address != '') && (age != '') && (gender != '')){
  	// $('input[type="checkbox"]').is(function(){

	if($('input[type="checkbox"]').is(':checked')){

		console.log(phone);
	}
	
// });
  console.log(name);
  console.log(lname);
  console.log(email);
console.log(radioValue);
  console.log(address);
  console.log(age);
  console.log(gender);
  console.log(status);
	
}
}
 

 });	
});