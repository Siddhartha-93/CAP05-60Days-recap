import "./user.css"

function UserCard({ id, name, username, email, phone }) {
  return (
    <div className="userCard" key={id}>
      <h2>{name}</h2>
      <h3>User Name: {username}</h3>
      <h4>Email: {email}</h4>
      <p> Phone No: {phone}</p>
    </div>
  );
}
export default UserCard;
