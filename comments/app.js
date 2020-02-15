let ProfilePic = () => {
    return <span><img src="https://i.pinimg.com/originals/b4/00/85/b400851a6b07f8877a9236f275bd8d4f.jpg" width="30px"></img></span>
}
//Make this component render a username in bold above the comment text
let CommentBody = (props) => {

    console.log(props.username);
    
    return <div><p style={{fontWeight:"bold"}}>{props.username}</p>
            <p>Here is a comment.</p>
            </div>
}

//Make each comment render a profile picture and the comment body
let Comment = (props) => {

    console.log("props:",props);
    console.log("usernames"+props.username)
    let userName=props.username;
    let myStyle={
        margin:"50px 5px 5px 5px",
        border:"1px solid gray"
    }
    return (<div style={myStyle}>
        <ProfilePic/>
        <CommentBody username={userName}/>
    </div>
    )
}

//Make this component render a list of comments
let Comments = () => {
    return <ul>
                <Comment attr1="attribute1" attr2="attribute2" username="sarah"></Comment>
                <Comment username="george"/>
                <Comment username="paul"/>
            </ul>
}

ReactDOM.render(<Comments />, document.getElementById('root'))