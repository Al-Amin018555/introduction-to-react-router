const User = ({ user }) => {
    // console.log(user)
    const { name, phone, email } = user;
    
    const userStyle = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '10px',
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone:{phone}</p>

        </div>
    );
};

export default User;