
export const saveUserData = (email, password, name) => {
    const userData = { email, password, name };
    fetch(`${import.meta.env.VITE_SERVER}/users`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert("alhamdulillah user info saved successful")

        })
        .catch((error) => {
            console.error(error);
            alert("Failed try again")
        })
};

