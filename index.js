// Please read the README.md to understand what to do. Happy Coding !
const fetchUserData = async () => {
    try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const userData = await response.json();

    const modifiedUserData = userData.map((user) => {
        return {
            Name: user.name,
            Username: user.username,
            Email: user.email,
            Address: user.address.street,
            Phone: user.phone,
            Website: user.website,
            Company: user.company.name,
        }
    })
    console.log(modifiedUserData);

    const filteredUserData = modifiedUserData.filter((user) => {
        return user.email.endsWith('.biz')
    })
    console.log(filteredUserData);

    const sortedUserData = filteredUserData.sort((a, b) => a.firstname.localeCompare(b.firstname))
    console.log(sortedUserData);
    
} catch (error) {
    console.error('Error:', error);
}
}