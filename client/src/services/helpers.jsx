export const fetchUsers = async () => {
	try {
		const params = {
			method: 'GET',
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: null,
		};
	
		const res = await fetch("https://umbrella-talk-api.vercel.app/api/users", params) 

		if (res.status !== 200) {
			return [];
		}
		
		const usersResponse = await res.json();

		return usersResponse.user;
	} catch (err) {
		console.log("Error fetching users:", err)
	}
}