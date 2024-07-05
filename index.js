let course=document.getElementById('courses');
async function CallData(){
    //error handeling 
    try{
        const res=await fetch('https://hubmainback.hubit.com.np/courses',{
            method: 'GET'
        });
        console.log(res)
        const data=await res.json()
        console.log(data)
        data.result.map((val,i)=>{
            let image=`https://hubmainback.hubit.com.np/public/${val.image}`
            course.innerHTML+=`
            <div class="items">
            <div class="text-red-500  border-2">
        ${val.title}
            </div>
             <div class="text-red-500  border-2">
        ${val.discription}
            </div>
            </div>
            `
        })
    }catch(error){
        console.log();

    }
}
CallData()