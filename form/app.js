let TextInput = () => {
    //Make this component render a styled text input tag
    return <span><input type="text"></input><br/></span>
}

//Make this component render two styled radio button side by side labelled "yes" and "no"
let YesNoRadio = () => {
    return <div className="radio">
        <label>
            <input type="radio" value="yes"/>
            Option 1
      </label>

        <label>
            <input type="radio" value="no"/>
            Option 2
      </label>
    </div>
}
//Make this component render a styled button of type "submit"
let SubmitButton = () => {
    return <button type="submit">Submit</button>
}

let Form = () => {
    //Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button
    return <form><TextInput /><TextInput /><TextInput /> <YesNoRadio /><SubmitButton/> </form>
}


ReactDOM.render(<Form />, document.getElementById('root'))