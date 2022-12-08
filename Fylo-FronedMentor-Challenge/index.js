var totalSpace=1000; 
let mb = 0; //  current size after upload some imgs (sum all the images size)
let uploadBTN = document.getElementById("click"); //
let elment=document.getElementById("pink");
elment.style.width = `${(mb/10)*100}%`;
const dilaog=document.getElementById('dialog');

  function clickme(){
    dilaog.click()
  }



  function validateFileType(){
        var filesize=document.getElementById('dialog').files[0].size/1000000;
        var fileName = document.getElementById("dialog").value;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"|| extFile=="gif"){
            if(filesize<totalSpace){
               var newspace=filesize;
               setSize()
               setLeft()
               mb += filesize; // update our size because we upload a image
               document.getElementById("pink").style.width = `${(mb/10)*100}%`; //update the process bar
            }
            else{
            alert("There id not enough space on the disk");
            }
        }
        else{
            alert("File format isn't supported");
        }   
    }

  function setSize(){
      var filesize=document.getElementById('dialog').files[0].size/1000000;
      document.getElementById("num").innerHTML =mb.toFixed(2) ;
  }

  function setLeft(){
      var filesize=document.getElementById('dialog').files[0].size/1000000;
      document.getElementById("left").innerHTML =(totalSpace-mb).toFixed(2) ;
  }
    

  
   
    

