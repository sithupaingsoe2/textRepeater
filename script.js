const autoyear = document.getElementById('autoyear');
        const getyear = new Date(). getUTCFullYear();
        autoyear.textContent = getyear;

        // $(document).ready(function(){

            
        // })

const getclearinput = document.getElementById('clearbtn');
// const getinputtext = document.getElementById('inputtext');

const getrepeattextbtn = document.getElementById('repeattimebtn');

const getclearoutput = document.getElementById('selectputputbtn');
const getoutputtext = document.getElementById('outputtext');
const getcopytextbtn = document.getElementById('copytextbtn');




// Text Repeat Function

getrepeattextbtn.addEventListener('click',function(){
    const getinputtext= document.getElementById('inputtext').value;
    // console.log(getinputtext);

    const getrepeattime = parseInt(document.getElementById('repeattime').value,10);

    // console.log(getrepeattime);

    if(getinputtext && getrepeattime > 0){
        const getoutputtext = document.getElementById('outputtext');
        getoutputtext.innerHTML = '';

        for(let i=0; i<getrepeattime; i++){
            getoutputtext.innerHTML += getinputtext + ' ';
        }
    }
    
    
});

// Text Repeat Function

// Select Text Function
// Select Text Function

// Copy Text Function
    getcopytextbtn.addEventListener('click',function(){
        const getoutputtext = document.getElementById('outputtext');

        getoutputtext.select();
        getoutputtext.setSelectionRange(0, 99999);//For Mobile Device

        navigator.clipboard.writeText(getoutputtext.value);

        alert('Copied To Clipboard');
    });

// Copy Text Function

//Clear Input

getclearinput.addEventListener('click',function(){
    document.getElementById('inputtext').value = "";
    document.getElementById('repeattime').value = '';
    document.getElementById('inputtext').focus();
})

//Clear Input

//Clear Output

getclearoutput.addEventListener('click',function(){
    document.getElementById('outputtext').value = "";
})

//Clear Output





