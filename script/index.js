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


const removeAllActiveBtn = ()=>{
    const allActiveBtn = document.getElementsByClassName("button-active");
    for(let btn of allActiveBtn){
        btn.classList.remove("button-style-active")
    }
}

// fetch post by catagories
const loadPostByCatagories = async (petName) =>{
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${petName}`);
        const data = await res.json();
        
        removeAllActiveBtn();
        const activeBtn = document.getElementById(`btn-${petName}`);
        activeBtn.classList.add("button-style-active");
        
        displayAllPost(data.data);
        
    }catch(err){
        console.log("error : " + err)
    }
}

// Like update
const likePostUpdate =(image)=>{
    console.log(image)
    const likeContainer = document.getElementById("like-container");
    const likeImage = document.createElement('img');
    likeImage.src = image;
    likeImage.classList.add("rounded-md");
    likeContainer.append(likeImage);
}


// display catagories
const displayCatagories = (categories) =>{
    
    const catagoriContainer = document.getElementById("catagory-container");
    for(const item of categories){

        const newPet = document.createElement('div');
        // newPet.classList.add("border", "rounded-xl", "flex", "flex-row", "gap-2", "px-10", "py-2", "items-center")
        newPet.innerHTML = `
            <button id="btn-${item.category}" onClick="loadPostByCatagories('${item.category}')" class="border rounded-xl flex flex-row gap-2 px-10 py-2 items-center button-style button-active">
            <img src = "${item.category_icon}">
            <h3  class="font-bold text-2xl">${item.category}</h3>
            </button>
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

// Modal Open Function
const openDetailsModal = async(petId) =>{
    
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`);
        var data = await res.json();
    }catch(err){
        console.log("error : " + err)
    }
    console.log(data)
    if(data.petData.price === null){
        data.petData.price = "N/A"
    }
    if(data.petData.date_of_birth === undefined || data.petData.date_of_birth === null ){
        data.petData.date_of_birth = "N/A"
    }
    const modal = document.getElementById("pet-modal");
    const petImg = document.getElementById("modal-img");
    petImg.src =data.petData.image;

    const modalPetName =document.getElementById("modal-pet-name")
    modalPetName.innerText =`${data.petData.pet_name}`;
    const modalPetBreed =document.getElementById("modal-pet-breed")
    modalPetBreed.innerText =`Breed : ${data.petData.pet_name}`;
    const modalPetGender =document.getElementById("modal-pet-gender")
    modalPetGender.innerText =`Gender : ${data.petData.gender}`;
    const modalPetVaccinated =document.getElementById("modal-pet-vaccinated")
    modalPetVaccinated.innerText =`Vaccinated : ${data.petData.vaccinated_status}`;
    const modalPetDob =document.getElementById("modal-pet-dob")
    modalPetDob.innerText =`Date of Birth : ${data.petData.date_of_birth}`;
    const modalPetPrice =document.getElementById("modal-pet-price")
    modalPetPrice.innerText =`Price : ${data.petData.price}`;
    
    const modalPetDetails =document.getElementById("modal-pet-details")
    modalPetDetails.innerText =`${data.petData.pet_details}`;
    modal.showModal();
}

const adoptModal = (id)=>{
    const modal = 
}

// Display all post
const displayAllPost =(pets) =>{
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = ""
    console.log(pets.length)
    if(pets.length===0){
        const postDiv = document.createElement('div');
        postDiv.classList.add("col-span-3", "flex", "flex-col", "items-center", "mt-5")
        postDiv.innerHTML = `
            <img src="./images/error.webp" alt="">
            <h1 class ="text-center text-4xl font-bold mt-4"> No Information Available </h1>
            <p class="mt-4 text-slate-500">The disired content is not available right now, We will get back to you soon.</p>
        `
        postContainer.append(postDiv);
        
    }else{
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
                            <button id="btn-like" onclick="likePostUpdate('${post.image}')" class="btn "><img src="./images/Frame 1171276315.png" alt=""></button>
                            <button id="btn-${post.petId}" class="btn text-cyan-800" onclick="adoptModal('${post.petId}')">Adopt</button>
                            <button class="btn text-cyan-800" onclick="openDetailsModal('${post.petId}')">Details</button>
                        </div>
            `
            
            postContainer.append(postDiv);
        }
    }
    
    
}


loadCatagories();
loadAllPost();






