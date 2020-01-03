function handleSubmit(){
	//khai báo 2 biến chứa thông tin lõi và thành công
	var error = '';
	var result = '';
	//lấy ra các đối tượng với từng input trong form
	var obj_name = document.getElementById('name');
	var name = obj_name.value;

	var obj_address = document.getElementById('address');
	var address = obj_address.value;

	var obj_zip_code = document.getElementById('zip-code');
	var zip_code = obj_zip_code.value;

	var obj_country = document.getElementById('country');
	var country = obj_country.value;

	var obj_gender_male = document.getElementById('gender_male');
	var gender_male = obj_gender_male.value;
	var obj_gender_female = document.getElementById('gender_female');
	var gender_female = obj_gender_male.value;

	var obj_color_red = document.getElementById('checkbox_red');
	var color_red = obj_color_red.value;
	var obj_color_green = document.getElementById('checkbox_green');
	var color_green = obj_color_green.value;
	var obj_color_blue = document.getElementById('checkbox_blue');
	var color_blue = obj_color_blue.value;

	var obj_phone = document.getElementById('phone');
	var phone = obj_phone.value;

	var obj_email = document.getElementById('email');
	var email = obj_mail.value; 

	var obj_password = document.getElementById('password');
	var password = obj_password.value; 

	var obj_verify_password = document.getElementById('password');
	var verify_password = obj_verify_password.value; 

	//validate
	if(name == ''){
		error = 'Không để trống name';
		obj_name.focus();
	}
	else if(address==''){
		error = "Không để trống address";
		obj_address.focus();
	}
	else if(zip_code==''){
		error = "Không để trống zip_code";
		obj_zip_code.focus();
	}
	else if(address==''){
		error = "Không để trống address";
		obj_address.focus();
	}
	else if(country==-1){
		error = "Cần chọn country";
		obj_country.focus();
	}
	else if(obj_gender_male.checked==false && obj_gender_female==false){
		error = "Cần chọn gender";
		obj_gender_female.focus();
	}
	else if(obj_color_red.checked== false && obj_color_green.checked==false && obj_color_blue == false){
		error = "Cần chọn color";
		obj_color_red.focus();
	}
	else if(phone==''){
		error = "Không để trống phone";
		obj_phone.focus();
	}
	else if(email==''){
		error = "Không để trống email";
		obj_email.focus();
	}
	else if(password==''){
		error = "Không để trống password";
		obj_password.focus();
	}
	else{
		error = "Không để trống verify_password";
		obj_verify_password.focus();
	}


	//hiển thị thông báo lỗi cũng như thành công
	var obj_error = document.getElementById('error');
	obj_error.innerHTML = error;
	var obj_result  = document.getElementById('result');
	obj_result.innerHTML = result;

	//ngăn tải lại trang
	return false;
}