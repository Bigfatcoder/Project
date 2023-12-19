function myfunction(){
    let name= document.getElementsByClassName('input').value
    let age=document.getElementById('age').value
    let sdt= document.getElementById('phone').value
    let email = document.getElementById('email').value
    let password =document.getElementById('password').value
    if(name==null){
        document.getElementById('text1').innerHTML='Điền vào chỗ trống'
    }   
    if(isNaN(age)){
        document.getElementById('text2').innerHTML='Nhập tuổi hợp lệ'
    }
    else if(age<16){
        document.getElementById('text2').innerHTML='Phải trên 16 tuổi'
    }
    else if(age==null){
        document.getElementById('text2').innerHTML='Điền vào chỗ trống'
    }
    if(isNaN(sdt)){
        document.getElementById('text3').innerHTML='Số điện thoại không hợp lệ'
    }
    else if(sdt==null){
        document.getElementById('text3').innerHTML='Điền vào chỗ trống'
    } 
    if(email==null || email==''){
        document.getElementById('text4').innerHTML='Điền vào chỗ trống'
    }
    if(password==null || password==''){
        document.getElementById('text5').innerHTML='Điền vào chỗ trống'
    }
      console.log("full-name",name);
      console.log("age",age);
      console.log('phonenumber',sdt);
      console.log('gmail',email);
      console.log('password',password);
}
