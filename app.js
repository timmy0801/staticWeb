var button = document.querySelector('button');
var cnt = 0

button.addEventListener('click',function(){
    cnt += 1;
    if(cnt%2 == 1){
        document.querySelector('p').style.display = 'block';
    }else{
        document.querySelector('p').style.display = 'none';
    }
})