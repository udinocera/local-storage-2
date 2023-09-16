const user = {
  id: 1,
  name: "John",
  age: 25,
};

function getUser(data){
 try {
  const savedUser = JSON.parse(localStorage.getItem(data));
  console.log("Utente recuperato", savedUser);
 } catch(error) {
  console.error(error);
 }
}


getUser("user");