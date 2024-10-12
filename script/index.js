// fetch load catagories
const loadCatagories = async() => {
    try{
        const res = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
        const data = await res.json();
        displayCatagories(data.categories);
        
    }catch(err){
        console.log("error : " + err)
    }

}

// display catagories
const displayCatagories = (categories) =>{
    
    const catagoriContainer = document.getElementById("catagory-container");
    for(const item of categories){

        const newPet = document.createElement('button');
        newPet.classList.add("border", "rounded-xl", "flex", "flex-row", "gap-2", "px-10", "py-2", "items-center")
        newPet.innerHTML = `
            <img src = "${item.category_icon}">
            <h3  class="font-bold text-2xl">${item.category}</h3>
        `
        catagoriContainer.append(newPet);
    }

}

// fetch all post
const loadAllPost =async()=>{
    try{
        const res = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
        const data = await res.json();
        displayAllPost(data.pets);
        
    }catch(err){
        console.log("error : " + err)
    }

}

// Display all post
const displayAllPost =(pets) =>{
    const postContainer = document.getElementById("post-container");

    for(const post of pets){
        const postDiv = document.createElement('div');
        postDiv.classList.add("card", "bg-base-100", "border");
        if(post.price === null){
            post.price = "N/A"
        }
        if(post.date_of_birth === undefined || post.date_of_birth === null ){
            post.date_of_birth = "N/A"
        }
        if(post.date_of_birth === undefined || post.date_of_birth === null ){
            post.date_of_birth = "N/A"
        }
        
        postDiv.innerHTML = `

                    <figure class="px-5 py-5">
                      <img src="${post.image}" class="rounded-xl" />
                    </figure>
                    <div class="px-5 flex gap-2 flex-col">
                        <h4 class="text-xl font-bold mb-2">${post.pet_name}</h4>
                        <div class="flex flex-row gap-2">
                            <img src="./images/Frame.png" alt="">
                            <p class="text-gray-500">Breed : ${post.breed}</p>
                        </div>
                        <div class="flex flex-row gap-2">
                            <img src="./images/date.png" alt="">
                            <p class="text-gray-500">Birth : ${post.date_of_birth}</p>
                        </div>
                        <div class="flex flex-row gap-2">
                            <img src="./images/Frame (3).png" alt="">
                            <p class="text-gray-500">Gender : ${post.gender}</p>
                        </div>
                        <div class="flex flex-row gap-2">
                            <img src="./images/price.png" alt="">
                            <p class="text-gray-500">Price : ${post.price}</p>
                        </div>
                        <hr class="mt-4">
                    </div>
                    
                    <div class="flex flex-row justify-between px-5 py-5">
                        <button class="btn "><img src="./images/Frame 1171276315.png" alt=""></button>
                        <button class="btn text-cyan-800">Adopt</button>
                        <button class="btn text-cyan-800">Details</button>
                    </div>
        `
        postContainer.append(postDiv);
    }
}

loadCatagories();
loadAllPost();






