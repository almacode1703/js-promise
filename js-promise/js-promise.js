const dataContainer = document.getElementById("container");
const fetchData = fetch('https://dummyjson.com/users');

fetchData
.then((response)=>{
    return response.json()
})
.then((data)=>{
    const usersData = data.users.slice(0,10);
    console.log(usersData);
    
    usersData.map((item)=>{

        let id = document.createElement('li').innerHTML = item.id;
        let firstName = document.createElement('li').innerHTML = item.firstName;
        let lastName = document.createElement('li').innerHTML = item.lastName;

        let p = document.createElement('p')
        p.append(id +" : ",firstName + " ",lastName)

        dataContainer.appendChild(p)
    })
})
.catch(error=>{
    console.log("Problem accessing data", error)
})

