const scriptURL = "https://script.google.com/macros/s/AKfycbxhQ91ZsS1tBiznZG_TpMP6XQ1ZUbUnYUe33BL8XKgbj2AC9iGqtZgzym79F5WlQgON/exec";

document.getElementById("myForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const formData = new FormData(this);

    try {

        const response = await fetch(scriptURL,{
            method:"POST",
            body:formData
        });

        if(response.ok){

            alert("اطلاعات با موفقیت ثبت شد");
            this.reset();

        } else {

            alert("خطا در ثبت اطلاعات");

        }

    } catch(error){

        alert("خطا در ارتباط با سرور");
        console.error(error);

    }

});