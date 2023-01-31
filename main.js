
    var form=document.getElementById('bookform');
    form.addEventListener('submit',addbook);
    function addbook(e){
            e.preventDefault();


        var bname= document.getElementById('name').value;
        var author=document.getElementById('author').value;
        var isbn=  document.getElementById('isbn').value;

        if(bname===''||author===''||isbn===''){
            alertmsg('please fill all the detials','danger','danger');
        }else{
        var delbtn=document.createElement('button');

        delbtn.className="btn btn-danger btn-sm  delete";
        delbtn.id="btn2";

        delbtn.appendChild(document.createTextNode('x'));

        var list=document.querySelector('#booklist');
        
        var arr=[bname,author,isbn];
        
        
        var row=document.createElement('tr');
        

        for(var i =0 ;i<arr.length;i++){
            var da=document.createElement('td');
            
            da.appendChild(document.createTextNode(arr[i]));
            
            row.appendChild(da);

    }


    row.appendChild(delbtn);
            list.appendChild(row);
            alertmsg('Detials are filled','success','success')
    document.getElementById('name').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
         
        
    }

    var list=document.querySelector('#booklist');
    list.addEventListener('click',remove);

    function remove(e){
       if(e.target.classList.contains('delete')){
        row=e.target.parentElement;
       list.removeChild(row);
       }
       alertmsg('Detials are deleted','warning','warning')
    }

}
    function alertmsg(msg,cls,id){
        var div=document.createElement('div');
        div.className=`alert alert-${cls}`;
        div.id=`${id}`;
        div.appendChild(document.createTextNode(msg));
        var container=document.querySelector('.container');
        var form=document.querySelector('#bookform');
        container.insertBefore(div,form);

        setTimeout(()=> document.querySelector('.alert').remove(),3000);
    }

