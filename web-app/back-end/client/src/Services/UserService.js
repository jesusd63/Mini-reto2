export default async function getRequest() {
    try{
        //const response = await fetch('/item')
        fetch('/item')
        //console.log(response)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            for(const item of data.items){
                console.log(item.name);
            }
            return data.items;
        })
    }catch(error) {
        return [];
    }
}

// export async function createUser(data) {
//     const response = await fetch(`/api/user`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({user: data})
//       })
//     return await response.json();
// }